# Project Structure · BRKRG010 Legacy Package

```
legacy/
  src/
    cobol/BRKRG010.cbl          * DB2-enabled COBOL program (daily position reconciliation)
    copybook/BRKRGTRD.cpy       * Trade input record layout used by FD TRADE-INPUT
    sql/                        * Reserved for DCLGEN output and ad-hoc SQL extracts
  jcl/
    BRKRG010C.jcl               * DB2 precompile/compile/link JCL for ULTRATHINK subsystem UTSH
    BRKRG010R.jcl               * Execution JCL via IKJEFT01 with DSN RUN command
  data/
    trades-in-sample.txt        * Example fixed-width feed (line sequential) ingested by BRKRG010
  docs/
    project-structure.md        * This map for analysts
    sme-questions.md            * SME interview log template
    tables.md                   * DB2 table dictionary for modernization hand-off
```

> Analysts should copy any additional members (e.g., copybooks from PROD libraries, DSNHPC listings) into the matching folders before running deeper analysis.
