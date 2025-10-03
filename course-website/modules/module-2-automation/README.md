# Module 2 · Automating Everyday Data Tasks

## Module Overview
- Apply GenAI to accelerate weekly finance reporting while maintaining reviewer discipline.
- Work through a synthetic Weekly Margin workflow that blends Excel automation with SQL/script documentation.
- Leverage the automation prompt library, review scorecard, and script workspace to capture every iteration.

## Action Steps
1. **Assemble the automation prompt pack**
   - Inputs: `prompts/excel-variance.md` (Excel assistant scaffold), finance context (named ranges `revenue_tbl`, `cost_tbl`, `target_margin`), risk guardrails from the scenario.
   - Tailor the prompt with workbook-specific thresholds or privacy notes before sending it to your GenAI tool.

2. **Generate and stage automation outputs**
   - Inputs: approved prompt from Step 1, current Weekly Margin workbook (named ranges listed above), `scripts/README.md` workspace for saving generated SQL or VBA.
   - Request the Excel formula, edge-case tests, supporting SQL extracts, and document them in the scripts workspace for reviewer access.

3. **Run the governance review**
   - Inputs: automation outputs from Step 2, `scorecards/automation-review.md` log, incident evidence (screenshots, query IDs) gathered during testing.
   - Score the automation using accept/revise/reject, record evidence, and capture any follow-up owners before deployment.

## Solutions
1. **Automation prompt solution**
   ```text
   You are helping automate the Weekly Margin workbook.
   Context inputs: named ranges revenue_tbl (columns: order_id, channel, revenue), cost_tbl (order_id, channel, cost), target_margin (single cell with % target). Privacy guardrails: synthetic data only, redact client names, log prompts in the automation register.
   Deliverables: (1) Excel formula for Summary!D5 returning margin variance vs target using named ranges only, (2) two edge-case tests (blank revenue row, negative cost row), (3) step-by-step instructions to add conditional formatting or data validation that flags variance worse than -2%. Use Office 365 functions exclusively.
   ```

2. **Excel automation solution**
   ```excel
   =LET(
     total_revenue, SUM(revenue_tbl[revenue]),
     total_cost, SUM(cost_tbl[cost]),
     current_margin, IF(total_revenue=0, "#DIV/0!", (total_revenue-total_cost)/total_revenue),
     variance, current_margin - target_margin,
     variance
   )
   ```
   - Edge-case tests: (a) Set one revenue row to blank and confirm the formula returns `#DIV/0!` and triggers the validation rule; (b) Enter a negative cost to ensure the variance recalculates and the alert fires.
   - Data validation instructions: select Summary!D5, open Data Validation ➜ Custom, use `=D5 < -0.02`, add alert text "Variance worse than -2% — investigate cost drivers".

3. **Automation review log solution**
   ```markdown
   | Automation | Prompt Link | Reviewer | Decision | Evidence | Follow-up |
   | --- | --- | --- | --- | --- | --- |
   | Weekly Margin variance | prompts/excel-variance.md | J. Lee | Revise | Screenshot: validation rule + formula trace | Add unit test for negative revenue |
   ```
   - Evidence captured: upload screenshot to shared drive, store SQL extracts in `scripts/` with timestamped filenames.
