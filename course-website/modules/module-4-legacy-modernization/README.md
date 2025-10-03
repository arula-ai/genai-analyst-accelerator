# Module 4 · Legacy Business Logic & Data Flow Analysis (Analyst Track)

## Module Overview
- Reverse-engineer the BRKRG010 trading ledger job so stakeholders understand nightly brokerage position updates without reading COBOL.
- Produce analyst deliverables only: logic walkthrough, DB2 + batch flow diagram, and a requirements package aligned to the new project layout.
- Keep governance aligned by updating the change-control log with assumptions, DB2 ownership questions, and ULTRATHINK subsystem risks.

## Action Steps
1. **Deconstruct the brokerage ledger logic**
   - Inputs: `legacy/src/cobol/BRKRG010.cbl` (DB2-enabled COBOL), `legacy/src/copybook/BRKRGTRD.cpy` (trade feed layout), SME context on ULTRATHINK subsystem UTSH.
   - Identify file inputs, DB2 interactions, calculations, and error handling; translate each into business language the trading desk can validate.

2. **Map DB2 tables and batch orchestration**
   - Inputs: `legacy/docs/project-structure.md`, `legacy/docs/tables.md`, JCL members `legacy/jcl/BRKRG010C.jcl` and `legacy/jcl/BRKRG010R.jcl`.
   - Diagram the nightly flow: precompile, compile/link, DSN RUN execution, dataset dependencies (`TRADES-IN`), and downstream consumers of BRKG_POSITION / BRKG_TRADE_AUD.

3. **Compile the requirements package and change log**
   - Inputs: artifacts from Steps 1–2, `modern/` workspace for analyst documents, `templates/change-control-log.md` for governance tracking.
   - Assemble business rules, field mapping, acceptance criteria, and risk log; update change-control entries with DB2 plan approvals and rollback coverage.

## Solutions
1. **Business-logic walkthrough solution**
   ```markdown
   Inputs: Line sequential trade feed `TRADES-IN` (fields from BRKRGTRD.cpy) plus DB2 tables BRKG_POSITION and BRKG_TRADE_AUD with plan ULTRA01 on subsystem UTSH.
   Process: For each trade record, precompute host variables, fetch current position via `SELECT ... FOR UPDATE`, apply buy/sell logic (weighted cost for buys, position decrement for sells), and write audit + commit every 100 trades. SQL errors trigger rollback and abort.
   Outputs: Updated DB2 rows in BRKG_POSITION, audit entries in BRKG_TRADE_AUD, COMMIT cadence log messages.
   Decisions: Delete DB2 row when net quantity reaches zero; halt processing if sell creates negative position; warnings logged when SQLWARN0 set.
   ```

2. **Data & batch flow solution**
   ```text
   1. DSNHPC precompile (BRKRG010C.jcl PREP step) → expands EXEC SQL + copybooks into temp dataset.
   2. IGYWCLG compile + link → load module `ULTRATH.BRKRG.LOAD(BRKRG010)`.
   3. Nightly scheduler runs BRKRG010R.jcl at 22:45; IKJEFT01 issues DSN RUN against subsystem UTSH with PLAN BRKRG010.
   4. Input DD `TRADESIN` points to ULTRATH.BRKRG.TRADEIN (fixed-width feed built from exchange fills).
   5. COBOL updates DB2 tables; downstream reconciliation jobs query BRKG_TRADE_AUD for compliance and refresh BI cubes.
   6. Failure handling: SQL negative code performs `ROLLBACK`, sets abort flag, and raises operations alert.
   ```

3. **Requirements package & change log solution**
   ```markdown
   - Requirements package outline (`modern/requirements-package.md`):
     - Business rules: buys recompute weighted average cost; sells cannot create negative quantity; commits after every 100 trades; deletes positions at zero balance.
     - Data mapping: TRADE feed → host vars → DB2 columns (see `legacy/docs/tables.md`).
     - Acceptance criteria: replay T-1 trades, confirm DB2 row counts match audit entries; verify DSN RUN exit code 0; ensure negative quantity scenario raises controlled abort.
     - Assumptions & risks: ULTRATHINK subsystem capacity during market close; DSNHPC version alignment with modernization tooling; need SME approval for audit retention.
   - Change-control entry (`templates/change-control-log.md`): `2024-08-08 | Trading ledger walkthrough drafted | High | Re-run BRKRG010 with previous load module | J. Lin (Risk), P. Ortega (Ops) | Pending decision on negative position override.`
   ```
