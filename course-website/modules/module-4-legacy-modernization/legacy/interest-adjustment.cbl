       IDENTIFICATION DIVISION.
       PROGRAM-ID. INTEREST-ADJUST.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01  WS-ACCOUNT-ID     PIC X(12).
       01  WS-BEGIN-BAL      PIC S9(9)V99.
       01  WS-END-BAL        PIC S9(9)V99.
       01  WS-RATE           PIC S9V999.
       01  WS-ADJUST-AMT     PIC S9(9)V99.
       PROCEDURE DIVISION.
           PERFORM UNTIL NO-MORE-RECORDS
              READ ACCOUNT-FILE
                 AT END SET NO-MORE-RECORDS TO TRUE
              END-READ
              COMPUTE WS-ADJUST-AMT = (WS-END-BAL - WS-BEGIN-BAL)
                                     * WS-RATE
              PERFORM WRITE-ADJUSTMENT
           END-PERFORM
           STOP RUN.
