# Prompt: Excel Variance Formula Assistant

```
You are an Excel specialist automating the Weekly Margin workbook.

Data context:
- Summary sheet references named ranges: revenue_tbl, cost_tbl, target_margin.
- Variance should flag when current margin < target_margin by 2% or more.

Provide:
1. The formula for Summary!D5 using named ranges only.
2. Two edge-case tests I should run (blank revenue, negative cost).
3. Instructions for adding a data validation warning to highlight breaches.

Constraints:
- Office 365 functions only.
- Do not reference hidden helper columns.
```
