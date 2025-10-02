       IDENTIFICATION DIVISION.
       PROGRAM-ID. TRADE-ADJUST.

       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT TRLOG-FILE ASSIGN TO 'data/TRLOG.DAT'
               ORGANIZATION IS LINE SEQUENTIAL.

       DATA DIVISION.
       FILE SECTION.
       FD  TRLOG-FILE.
       01  TRLOG-REC.
           COPY TRMAP.

       WORKING-STORAGE SECTION.
       01  EOF-SW         PIC X VALUE 'N'.
           88  EOF                 VALUE 'Y'.
       01  DELTA-VALUE    PIC S9(11)V999 VALUE 0.
       01  PXO-DISP       PIC -Z(5)9.999.
       01  PXC-DISP       PIC -Z(5)9.999.
       01  DELTA-DISP     PIC -Z(7)9.999.

       PROCEDURE DIVISION.
       MAIN-LOOP.
           PERFORM UNTIL EOF
               READ TRLOG-FILE
                   AT END
                       SET EOF TO TRUE
                   NOT AT END
                       PERFORM PROCESS-TRADE
               END-READ
           END-PERFORM
           STOP RUN.

       PROCESS-TRADE.
           COMPUTE DELTA-VALUE = (PXC - PXO) * QTY
           MOVE PXO TO PXO-DISP
           MOVE PXC TO PXC-DISP
           MOVE DELTA-VALUE TO DELTA-DISP
           DISPLAY 'TID=' TID ' BUID=' BUID ' ASCD=' ASCD
                   ' SDR=' SDR ' QTY=' QTY
                   ' PXO=' PXO-DISP ' PXC=' PXC-DISP
                   ' DELTA=' DELTA-DISP ' RSK=' RSK.
