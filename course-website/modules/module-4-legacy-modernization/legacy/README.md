# Legacy Package · BRKRG010 Trading Ledger

This folder mirrors a production-style COBOL project deployed on the OSZ Ultrathink complex (DB2 subsystem `UTSH`). Analysts can inspect each artifact to recover business rules and batch flow details.

```
src/
  cobol/BRKRG010.cbl       * DB2-enabled COBOL program with EXEC SQL
  copybook/BRKRGTRD.cpy    * Trade feed record layout
  sql/                     * Placeholder for DCLGEN or adhoc SQL (populate as needed)
jcl/
  BRKRG010C.jcl            * Precompile / compile / link jobstream
  BRKRG010R.jcl            * Execution job invoking DSN RUN via IKJEFT01
data/
  trades-in-sample.txt     * Sample fixed-width trade feed
```

Analysts should annotate findings (logic walkthroughs, data flow diagrams, SME questions) in the `docs/` directory.
