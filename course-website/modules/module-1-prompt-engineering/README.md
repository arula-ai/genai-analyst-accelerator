# Module 1 · Prompt Engineering Essentials

## Module Overview
- Practice orchestrating prompts that brief stakeholders on the SynthRetail transactions dataset and produce trustworthy SQL.
- Work within a retention scenario where leaders want to understand three-month spend declines by segment.
- Use the provided dataset dictionary, structured prompts, and validation log to keep outputs transparent and reviewable.

## Action Steps
1. **Configure the dataset briefing prompt**
   - Inputs: `prompts/summary-and-sql.md` (prompt scaffold), `datasets/README.md` (column dictionary), business goal "understand churn risk drivers" from the scenario.
   - Capture the organisation context, emphasise bias checks, and restate the output expectations in your own words before sending the prompt to your GenAI tool.

2. **Generate the SQL analysis plan and query**
   - Inputs: finalised briefing prompt from Step 1, `datasets/SynthRetail_Transactions.csv` sample data, stakeholder question "Which segments have declining spend three months in a row?" embedded in the scaffold.
   - Request both a narrative plan (CTE design, window logic) and ANSI SQL that respects the column names in the dictionary.

3. **Validate and log the AI-generated SQL**
   - Inputs: executed query results (row counts, segment trends), `checklists/sql-validation-log.md` template, any clarifying questions raised in Step 2.
   - Record validation evidence, confirm row counts, document sampling, and note open risks before sharing the deliverable.

## Solutions
1. **Briefing prompt solution**
   ```text
   You are a senior analyst briefing the retention squad on SynthRetail_Transactions. Summarise the dataset in two paragraphs (what we know, where to investigate), call out sampling or segment bias, and flag data quality gaps. Inputs: SynthRetail_Transactions.csv, column dictionary (transaction_id, account_id, transaction_ts, channel, amount, segment, product, risk_flag). Goal: highlight churn risk drivers for executives.
   Constraints: synthetic data only, factual tone, cite any uncertainties.
   Outputs: (1) two-paragraph briefing, (2) ANSI SQL answering "Which segments have declining spend three months in a row?" using CTEs and the provided columns, (3) validation checklist with row counts and sample checks. If a field is unclear, list the clarifying question instead of guessing.
   ```

2. **SQL query solution**
   ```sql
   WITH monthly_totals AS (
     SELECT
       DATE_TRUNC('month', transaction_ts) AS month_start,
       segment,
       SUM(amount) AS monthly_amount
     FROM SynthRetail_Transactions
     GROUP BY DATE_TRUNC('month', transaction_ts), segment
   ), ranked_trends AS (
     SELECT
       segment,
       month_start,
       monthly_amount,
       LAG(monthly_amount, 1) OVER (PARTITION BY segment ORDER BY month_start) AS prev_amount,
       LAG(monthly_amount, 2) OVER (PARTITION BY segment ORDER BY month_start) AS prev2_amount
     FROM monthly_totals
   )
   SELECT
     segment,
     month_start,
     monthly_amount
   FROM ranked_trends
   WHERE monthly_amount < prev_amount
     AND prev_amount < prev2_amount
   ORDER BY segment, month_start;
   ```

3. **Validation log solution**
   ```markdown
   - Query check: COUNT(*) on SynthRetail_Transactions = 48,512 rows; COUNT(DISTINCT segment) = 6.
   - Sample review: spot-checked top 5 rows per flagged segment; spend trend confirms monotonic decline.
   - Risks & questions: need clarification on seasonality adjustments; confirm whether refunds should be excluded from `amount`.
   - Approval: Analyst signature + date; reviewer pending.
   ```
