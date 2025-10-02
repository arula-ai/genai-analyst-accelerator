//INTADJ01 JOB (ACCT),'INT ADJUST',CLASS=A,MSGCLASS=X,NOTIFY=&SYSUID
//* ------------------------------------------------------------------
//*  SAMPLE JOB: COMPILE & EXECUTE INTEREST ADJUSTMENT PROGRAM
//* ------------------------------------------------------------------
// SET COBPROG=INTEREST
// SET LOADLIB=&&LOADSET
// SET SRCLIB=&&SRCLIB
// SET COPYLIB=&&COPYLIB
// SET DATALIB=&&DATALIB
//********************************************************************
//* STEP 1: PREP WORK DATASETS
//********************************************************************
//ALLOC    EXEC PGM=IEFBR14
//SYSPRINT DD  SYSOUT=*
//SRCLIB   DD  DSN=&SRCLIB,DISP=(,PASS),UNIT=SYSDA,
//             SPACE=(TRK,(5,5,5)),DCB=(RECFM=FB,LRECL=80,BLKSIZE=0)
//COPYLIB  DD  DSN=&COPYLIB,DISP=(,PASS),UNIT=SYSDA,
//             SPACE=(TRK,(2,2,2)),DCB=(RECFM=FB,LRECL=80,BLKSIZE=0)
//DATALIB  DD  DSN=&DATALIB,DISP=(,PASS),UNIT=SYSDA,
//             SPACE=(TRK,(2,2,2)),DCB=(RECFM=FB,LRECL=80,BLKSIZE=0)
//LOADLIB  DD  DSN=&LOADLIB,DISP=(,PASS),UNIT=SYSDA,
//             SPACE=(TRK,(5,5,5)),DCB=(RECFM=U,BLKSIZE=0)
//********************************************************************
//* STEP 2: COPY SOURCE, COPYBOOK, AND DATA INTO TEMP DATASETS
//********************************************************************
//CPYSRC   EXEC PGM=IEBGENER
//SYSPRINT DD  SYSOUT=*
//SYSIN    DD  DUMMY
//SYSUT1   DD  DISP=SHR,DSN=LEGACY.INTADJ.SRC
//SYSUT2   DD  DISP=OLD,DSN=&SRCLIB(&COBPROG)
//CPYCPY   EXEC PGM=IEBGENER
//SYSPRINT DD  SYSOUT=*
//SYSIN    DD  DUMMY
//SYSUT1   DD  DISP=SHR,DSN=LEGACY.INTADJ.COPY(ACCOUNT)
//SYSUT2   DD  DISP=OLD,DSN=&COPYLIB(ACCOUNT)
//CPYDATA  EXEC PGM=IEBGENER
//SYSPRINT DD  SYSOUT=*
//SYSIN    DD  DUMMY
//SYSUT1   DD  DISP=SHR,DSN=LEGACY.INTADJ.DATA
//SYSUT2   DD  DISP=OLD,DSN=&DATALIB(ACCOUNTS)
//********************************************************************
//* STEP 3: COMPILE USING ENTERPRISE COBOL (SUBSTITUTE GNULOAD IF NEEDED)
//********************************************************************
//COBOL    EXEC IGYCRCTL
//SYSIN    DD  DISP=OLD,DSN=&SRCLIB(&COBPROG)
//SYSLIB   DD  DISP=OLD,DSN=&COPYLIB
//SYSLIN   DD  DISP=(,PASS),UNIT=SYSDA,SPACE=(TRK,(3,3)),
//             DCB=BLKSIZE=0
//SYSUT1   DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT2   DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT3   DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT4   DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT5   DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT6   DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT7   DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT8   DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT9   DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT10  DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT11  DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT12  DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT13  DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT14  DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT15  DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSUT16  DD  UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSPRINT DD  SYSOUT=*
//********************************************************************
//* STEP 4: LINK-EDIT
//********************************************************************
//LINK     EXEC PGM=IEWL,PARM='LIST,XREF'
//SYSLIN   DD  DISP=OLD,DSN=COBOL.SYSLIN
//SYSLMOD  DD  DISP=OLD,DSN=&LOADLIB(&COBPROG)
//SYSPRINT DD  SYSOUT=*
//********************************************************************
//* STEP 5: EXECUTE PROGRAM (REPORT INTEREST ADJUSTMENTS)
//********************************************************************
//RUN      EXEC PGM=&COBPROG
//STEPLIB  DD  DISP=SHR,DSN=&LOADLIB
//ACCTSIN  DD  DISP=SHR,DSN=&DATALIB(ACCOUNTS)
//REPORT   DD  SYSOUT=*
//SYSOUT   DD  SYSOUT=*
//SYSIN    DD  DUMMY
//* ------------------------------------------------------------------
//* END OF JOB
//* ------------------------------------------------------------------
