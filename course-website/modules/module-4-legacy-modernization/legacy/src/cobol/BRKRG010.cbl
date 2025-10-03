       IDENTIFICATION DIVISION.
       PROGRAM-ID. BRKRG010.
       AUTHOR. ANALYST TEAM.
       INSTALLATION. OSZ ULTRATHINK SUPER HARD.
       DATE-WRITTEN. 2024-08-08.

       ENVIRONMENT DIVISION.
       CONFIGURATION SECTION.
       SOURCE-COMPUTER. IBM-Z16.
       OBJECT-COMPUTER. IBM-Z16.

       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT TRADE-INPUT ASSIGN TO 'TRADES-IN'
              ORGANIZATION IS LINE SEQUENTIAL.

       DATA DIVISION.
       FILE SECTION.
       FD  TRADE-INPUT
           RECORD CONTAINS 120 CHARACTERS
           BLOCK CONTAINS 0 RECORDS
           RECORDING MODE IS F
           DATA RECORD IS TRADE-RECORD.

       01  TRADE-RECORD.
           COPY BRKRGTRD.

       WORKING-STORAGE SECTION.
       01  WS-END-OF-TRADES         PIC X VALUE 'N'.
           88  TRADES-REMAINING                VALUE 'N'.
           88  NO-MORE-TRADES                  VALUE 'Y'.
       01  WS-ABORT-FLAG           PIC X VALUE 'N'.
           88  PROGRAM-OK                    VALUE 'N'.
           88  PROGRAM-FAILED                VALUE 'Y'.
       01  WS-ROW-FOUND            PIC X VALUE 'N'.
       01  WS-COMMIT-THRESHOLD     PIC S9(9) COMP VALUE 100.
       01  WS-TRADE-COUNT          PIC S9(9) COMP VALUE 0.
       01  WS-SQL-CONTEXT          PIC X(30).

       EXEC SQL INCLUDE SQLCA END-EXEC.

       EXEC SQL BEGIN DECLARE SECTION END-EXEC.
       01  HV-ACCOUNT-ID           PIC X(12).
       01  HV-SYMBOL               PIC X(10).
       01  HV-TRADE-SIDE           PIC X.
       01  HV-QUANTITY             PIC S9(9) COMP-3.
       01  HV-PRICE                PIC S9(7)V99 COMP-3.
       01  HV-EXEC-DATE            PIC 9(8).
       01  HV-POS-QTY              PIC S9(9) COMP-3.
       01  HV-AVG-COST             PIC S9(9)V99 COMP-3.
       01  HV-NEW-QTY              PIC S9(9) COMP-3.
       01  HV-NEW-AVG              PIC S9(9)V99 COMP-3.
       01  HV-TOTAL-COST           PIC S9(11)V99 COMP-3.
       01  HV-EXISTING-COST        PIC S9(11)V99 COMP-3.
       01  HV-AUDIT-ID             PIC S9(9) COMP.
       01  HV-TRADE-ID             PIC X(16).
       EXEC SQL END DECLARE SECTION END-EXEC.

       01  FILLER.
           05  WS-PLAN-NAME        PIC X(8)  VALUE 'ULTRA01'.

       PROCEDURE DIVISION.
       MAIN-SECTION.
           PERFORM INIT-PROGRAM
           IF PROGRAM-FAILED
              GO TO WRAP-UP
           END-IF
           PERFORM PROCESS-TRADES UNTIL NO-MORE-TRADES OR PROGRAM-FAILED
           PERFORM WRAP-UP
           GOBACK.

       INIT-PROGRAM.
           DISPLAY 'BRKRG010 STARTING - PLAN ' WS-PLAN-NAME
           OPEN INPUT TRADE-INPUT
           MOVE ZERO TO WS-TRADE-COUNT
           MOVE ZERO TO HV-AUDIT-ID
           MOVE 'N' TO WS-END-OF-TRADES
           MOVE 'SET DEGREE' TO WS-SQL-CONTEXT
           EXEC SQL SET CURRENT DEGREE = '1' END-EXEC
           PERFORM CHECK-SQL.

       PROCESS-TRADES.
           PERFORM READ-TRADE
           IF NO-MORE-TRADES OR PROGRAM-FAILED
              EXIT PARAGRAPH
           END-IF
           PERFORM PREPARE-HOST-VARS
           PERFORM FETCH-CURRENT-POSITION
           IF PROGRAM-FAILED
              EXIT PARAGRAPH
           END-IF
           PERFORM APPLY-TRADE-LOGIC
           IF PROGRAM-FAILED
              EXIT PARAGRAPH
           END-IF
           PERFORM WRITE-AUDIT-ROW
           IF PROGRAM-FAILED
              EXIT PARAGRAPH
           END-IF
           PERFORM MANAGE-COMMIT.

       READ-TRADE.
           READ TRADE-INPUT
              AT END
                 SET NO-MORE-TRADES TO TRUE
                 DISPLAY 'BRKRG010 - END OF TRADE INPUT'
           END-READ.

       PREPARE-HOST-VARS.
           MOVE TRADE-ACCOUNT-ID     TO HV-ACCOUNT-ID
           MOVE TRADE-SYMBOL         TO HV-SYMBOL
           MOVE TRADE-SIDE           TO HV-TRADE-SIDE
           MOVE TRADE-QUANTITY       TO HV-QUANTITY
           MOVE TRADE-PRICE          TO HV-PRICE
           MOVE TRADE-EXEC-DATE      TO HV-EXEC-DATE
           MOVE TRADE-ID             TO HV-TRADE-ID
           MOVE ZERO                 TO HV-TOTAL-COST HV-EXISTING-COST.

       FETCH-CURRENT-POSITION.
           MOVE 'N' TO WS-ROW-FOUND
           MOVE 'FETCH POSITION' TO WS-SQL-CONTEXT
           EXEC SQL
              SELECT POSITION_QTY, AVG_COST
                INTO :HV-POS-QTY, :HV-AVG-COST
                FROM BRKG_POSITION
               WHERE ACCOUNT_ID = :HV-ACCOUNT-ID
                 AND SYMBOL = :HV-SYMBOL
               FOR UPDATE OF POSITION_QTY, AVG_COST
           END-EXEC
           EVALUATE SQLCODE
              WHEN 0
                 MOVE 'Y' TO WS-ROW-FOUND
              WHEN 100
                 MOVE ZERO TO HV-POS-QTY
                 MOVE ZERO TO HV-AVG-COST
              WHEN OTHER
                 PERFORM SQL-ERROR
           END-EVALUATE.

       APPLY-TRADE-LOGIC.
           ADD 1 TO HV-AUDIT-ID
           EVALUATE HV-TRADE-SIDE
              WHEN 'B'
                 PERFORM APPLY-BUY
              WHEN 'S'
                 PERFORM APPLY-SELL
              WHEN OTHER
                 MOVE 'INVALID SIDE' TO WS-SQL-CONTEXT
                 PERFORM SQL-ERROR
           END-EVALUATE.

       APPLY-BUY.
           COMPUTE HV-EXISTING-COST = HV-POS-QTY * HV-AVG-COST
           COMPUTE HV-TOTAL-COST = HV-EXISTING-COST + (HV-QUANTITY * HV-PRICE)
           COMPUTE HV-NEW-QTY = HV-POS-QTY + HV-QUANTITY
           IF HV-NEW-QTY NOT = 0
              COMPUTE HV-NEW-AVG = HV-TOTAL-COST / HV-NEW-QTY
           ELSE
              MOVE ZERO TO HV-NEW-AVG
           END-IF
           PERFORM UPSERT-POSITION.

       APPLY-SELL.
           COMPUTE HV-NEW-QTY = HV-POS-QTY - HV-QUANTITY
           IF HV-NEW-QTY < 0
              MOVE 'NEGATIVE POSITION' TO WS-SQL-CONTEXT
              PERFORM SQL-ERROR
           ELSE
              MOVE HV-AVG-COST TO HV-NEW-AVG
              PERFORM UPSERT-POSITION
           END-IF.

       UPSERT-POSITION.
           IF PROGRAM-FAILED
              EXIT PARAGRAPH
           END-IF
           IF WS-ROW-FOUND = 'Y'
              IF HV-NEW-QTY = 0
                 MOVE 'DELETE POSITION' TO WS-SQL-CONTEXT
                 EXEC SQL
                    DELETE FROM BRKG_POSITION
                     WHERE ACCOUNT_ID = :HV-ACCOUNT-ID
                       AND SYMBOL = :HV-SYMBOL
                 END-EXEC
                 PERFORM CHECK-SQL
              ELSE
                 MOVE 'UPDATE POSITION' TO WS-SQL-CONTEXT
                 EXEC SQL
                    UPDATE BRKG_POSITION
                       SET POSITION_QTY = :HV-NEW-QTY,
                           AVG_COST = :HV-NEW-AVG
                     WHERE ACCOUNT_ID = :HV-ACCOUNT-ID
                       AND SYMBOL = :HV-SYMBOL
                 END-EXEC
                 PERFORM CHECK-SQL
              END-IF
           ELSE
              MOVE 'INSERT POSITION' TO WS-SQL-CONTEXT
              EXEC SQL
                 INSERT INTO BRKG_POSITION
                        (ACCOUNT_ID, SYMBOL, POSITION_QTY, AVG_COST)
                 VALUES (:HV-ACCOUNT-ID, :HV-SYMBOL, :HV-NEW-QTY, :HV-NEW-AVG)
              END-EXEC
              PERFORM CHECK-SQL
           END-IF.

       WRITE-AUDIT-ROW.
           MOVE 'INSERT AUDIT' TO WS-SQL-CONTEXT
           EXEC SQL
              INSERT INTO BRKG_TRADE_AUD
                     (AUDIT_ID, TRADE_ID, ACCOUNT_ID, SYMBOL,
                      SIDE, QUANTITY, PRICE, EXEC_DATE, NEW_QTY, NEW_AVG)
              VALUES (:HV-AUDIT-ID, :HV-TRADE-ID, :HV-ACCOUNT-ID, :HV-SYMBOL,
                      :HV-TRADE-SIDE, :HV-QUANTITY, :HV-PRICE,
                      :HV-EXEC-DATE, :HV-NEW-QTY, :HV-NEW-AVG)
           END-EXEC
           PERFORM CHECK-SQL
           ADD 1 TO WS-TRADE-COUNT.

       MANAGE-COMMIT.
           IF WS-TRADE-COUNT >= WS-COMMIT-THRESHOLD
              MOVE 'COMMIT' TO WS-SQL-CONTEXT
              EXEC SQL COMMIT END-EXEC
              PERFORM CHECK-SQL
              MOVE ZERO TO WS-TRADE-COUNT
              DISPLAY 'BRKRG010 COMMIT AFTER 100 TRADES'
           END-IF.

       CHECK-SQL.
           IF SQLCODE < 0
              PERFORM SQL-ERROR
           ELSE
              IF SQLWARN0 = 'W'
                 DISPLAY 'BRKRG010 SQL WARNING: ' WS-SQL-CONTEXT ' WARN0=' SQLWARN0
              END-IF
           END-IF.

       SQL-ERROR.
           DISPLAY 'BRKRG010 SQL ERROR IN ' WS-SQL-CONTEXT ' CODE ' SQLCODE
           EXEC SQL ROLLBACK END-EXEC
           MOVE 'Y' TO WS-ABORT-FLAG
           MOVE 'Y' TO WS-END-OF-TRADES.

       WRAP-UP.
           IF PROGRAM-FAILED
              DISPLAY 'BRKRG010 ABENDED - CHECK JOBLOG'
           ELSE
              MOVE 'FINAL COMMIT' TO WS-SQL-CONTEXT
              EXEC SQL COMMIT END-EXEC
              PERFORM CHECK-SQL
              DISPLAY 'BRKRG010 NORMAL END'
           END-IF
           CLOSE TRADE-INPUT.
