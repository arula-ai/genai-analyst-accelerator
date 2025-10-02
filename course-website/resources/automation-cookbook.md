# Automation Cookbook

Use these recipes during Module 2 to generate and review Excel, SQL, and Python automation safely. Every section pairs a scaffold prompt with reviewer checkpoints.

---

## 1. Excel Formula Generation

**When to use:** Quick summaries, variance calculations, lookup helpers.

### Prompt Recipe
```
You are an Excel co-pilot helping automate the Weekly Margin workbook.

Data context:
- Summary tab pulls from `Inputs!A:K`
- Named ranges: revenue_tbl, cost_tbl, product_dim
- Variance threshold: flag anything > 3% month-over-month change

Output request:
1. Provide the formula for cell Summary!D5 using named ranges.
2. Include an explanation in plain English (one sentence).
3. List two edge cases I should test.

Constraints:
- Use Office 365 functions only (no VBA). 
- Never reference hidden helper columns.
```

### Review Steps
- Test formula on the provided sample workbook.
- Change data to trigger edge cases (blank cost, zero revenue).
- Record results in the Automation Review Scorecard.

---

## 2. SQL Refresh Scripts

**When to use:** Building repeatable extracts for weekly reporting.

### Prompt Recipe
```
You are assisting with an automated extract.

Schema:
- `ops_orders` (grain = order)
- `ops_costs` (grain = order item)
- `ops_calendar` (date dimension)

Need:
- Build a SQL script that refreshes the Weekly Margin dataset.
- Accept start_date and end_date parameters.
- Return total revenue, total cost, gross margin %, and a risk flag when margin < 20%.

Constraints:
- Use CTEs; final output should be a single SELECT.
- No temp tables or DDL changes.
- Include a `-- Validation` block noting record counts.
```

### Review Steps
1. Run the script in dry-run mode (SELECT only) against the sandbox.
2. Compare totals to the golden dataset linked inside the Automation Cookbook.
3. Capture query ID, runtime, and reviewer initials in the scorecard.

---

## 3. Python Clean-Up Jobs

**When to use:** Normalising data or automating file preparation.

### Prompt Recipe
```
You are a Python automation assistant.

Task:
- Read CSV files from `/data/inbound/*.csv`
- Standardise column names (snake_case)
- Validate that required columns exist: order_id, customer_id, margin
- Output a single parquet file to `/data/outbound/margin_snapshot.parquet`

Constraints:
- Use pandas only.
- Include logging for 
  - files processed
  - missing columns
  - validation failures
- Secrets/credentials are handled externally—never hardcode them.

Deliverables:
1. Python script
2. Function `run()` that returns status code
3. Unit test suggestions
```

### Review Steps
- Run the script in the `scripts/automation-lab` environment.
- Inspect logs for missing-column handling.
- Document outcomes and follow-ups in the scorecard.

---

## 4. Automation Review Scorecard

Track every automation through the following checklist (the Automation Review Scorecard is embedded in Resources):

- [ ] Prompt link & version recorded
- [ ] Code reviewed by second analyst/SME
- [ ] Validation evidence stored
- [ ] Data privacy check complete (synthetic inputs only)
- [ ] Rollback or manual fallback noted
- [ ] Final decision (Accept / Revise / Reject)

---

## 5. Escalation Cues

Escalate immediately if:

- The automation requires production credentials.
- The model suggests touching restricted datasets or altering warehouse objects.
- Output differences exceed the 2% tolerance without explanation.
- You cannot trace a calculation back to the source data.

Document the escalation using the Hallucination Response Playbook.

Keep this cookbook beside you when running the optional automation module or applying GenAI to your real reporting workflows.
