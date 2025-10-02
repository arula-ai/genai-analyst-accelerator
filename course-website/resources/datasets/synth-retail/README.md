# SynthRetail Transactions Dataset

Synthetic transaction history used in Module 1 for prompt and SQL validation drills.

## Columns

| Column | Description |
| --- | --- |
| transaction_id | Unique synthetic identifier |
| account_id | Customer account reference |
| transaction_ts | ISO timestamp (UTC) |
| channel | Point-of-sale, digital, call-centre |
| amount | Decimal amount (USD) |
| segment | Customer segment label |
| product | Purchased product family |
| risk_flag | Synthetic indicator used for validation |

## Files

- `SynthRetail_Transactions.csv` – 12 months of synthetic transactions (created for training only)
- `data-dictionary.md` – Extended definitions and enumerations

> All figures are fake. Use the bias and validation checklist before quoting metrics.
