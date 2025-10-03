# DB2 Table Dictionary · BRKRG010

## BRKG_POSITION (Brokerage Intraday Positions)

| Column | Type | Description |
| --- | --- | --- |
| ACCOUNT_ID | CHAR(12) | Brokerage account identifier (matches TRADE-ACCOUNT-ID) |
| SYMBOL | CHAR(10) | Equity or ETF ticker |
| POSITION_QTY | DECIMAL(15,0) | Net quantity after trade reconciliation |
| AVG_COST | DECIMAL(15,4) | Weighted average cost basis in USD |
| LAST_UPDATE_TS | TIMESTAMP | Maintained by triggers (not in COBOL host variables) |

## BRKG_TRADE_AUD (Trade Audit Trail)

| Column | Type | Description |
| --- | --- | --- |
| AUDIT_ID | INTEGER | Surrogate key generated in COBOL HV-AUDIT-ID |
| TRADE_ID | CHAR(16) | Inbound trade identifier |
| ACCOUNT_ID | CHAR(12) | Brokerage account identifier |
| SYMBOL | CHAR(10) | Equity or ETF ticker |
| SIDE | CHAR(1) | `B` buy, `S` sell |
| QUANTITY | DECIMAL(15,0) | Trade quantity (signed) |
| PRICE | DECIMAL(11,4) | Executed price |
| EXEC_DATE | CHAR(8) | YYYYMMDD execution date |
| NEW_QTY | DECIMAL(15,0) | Net quantity after applying trade |
| NEW_AVG | DECIMAL(15,4) | Average cost after applying trade |
| LOAD_TS | TIMESTAMP | Populated by DB2 default CURRENT TIMESTAMP |

Use these definitions to align modernization data models and to validate host variable precision during the precompile checklist.
