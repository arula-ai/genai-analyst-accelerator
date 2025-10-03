# SynthRetail Transactions Dictionary

| Column | Description | Type |
| --- | --- | --- |
| transaction_id | Unique identifier for each transaction | string |
| account_id | Anonymised account reference | string |
| transaction_ts | ISO timestamp | datetime |
| channel | Channel used for the transaction | string |
| amount | Transaction amount in USD | decimal |
| segment | Customer segment label | string |
| product | Product or service involved | string |
| risk_flag | Indicates a potential compliance flag | boolean |
