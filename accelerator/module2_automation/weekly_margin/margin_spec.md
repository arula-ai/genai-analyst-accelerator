# Weekly Margin Refresh Specification

- **Data Source:** `data/transactions/*.csv` staged in DuckDB.
- **Output:** `analytics/weekly_margin.csv` with columns `week_start`, `gross_margin`, `net_margin`, `notes`.
- **Business Rules:**
  - Exclude returns flagged with `return_flag = true`.
  - Treat NULL cost as zero but log a warning for follow-up.
  - Aggregate by ISO week using the finance calendar.
- **Automation Requirements:**
  - Script must accept `--dry-run` to preview row counts without writing.
  - Emit structured logs to `logs/weekly_margin.log`.
  - Respect environment variables `DUCKDB_PATH` and `OUTPUT_PATH`.
- **Validation:**
  - Row count should match finance control totals.
  - Copilot CLI prompts must state the dry-run requirement before scaffolding code.
