-- Weekly margin SQL scaffold. Run inside DuckDB or via the Python bridge.
WITH cleaned AS (
    SELECT
        date_trunc('week', order_date) AS week_start,
        revenue,
        cost,
        return_flag
    FROM data.transactions
),
filtered AS (
    SELECT
        week_start,
        COALESCE(revenue, 0) AS revenue,
        COALESCE(cost, 0) AS cost
    FROM cleaned
    WHERE return_flag IS NOT TRUE
)
SELECT
    week_start,
    SUM(revenue - cost) AS gross_margin,
    SUM(revenue - cost - 0.02 * revenue) AS net_margin,
    COUNT(*) AS transaction_count
FROM filtered
GROUP BY week_start
ORDER BY week_start;
