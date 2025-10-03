"""Weekly margin refresh script scaffolded with Copilot CLI.

Run `python weekly_margin.py --dry-run` inside the devcontainer. The script expects
`DUCKDB_PATH` and `OUTPUT_PATH` environment variables.
"""

from __future__ import annotations

import argparse
import logging
import os
from pathlib import Path

import duckdb

LOG_PATH = Path(os.getenv("LOG_PATH", "logs/weekly_margin.log"))


def configure_logging() -> None:
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    logging.basicConfig(
        filename=LOG_PATH,
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s",
    )


def load_connection() -> duckdb.DuckDBPyConnection:
    db_path = os.getenv("DUCKDB_PATH", "data/warehouse.duckdb")
    return duckdb.connect(db_path)


def build_margin_query() -> str:
    return (
        """
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
        """
        .strip()
    )


def run(query: str, dry_run: bool) -> None:
    conn = load_connection()
    if dry_run:
        logging.info("Dry run enabled - counting rows only")
        result = conn.execute(f"SELECT COUNT(*) FROM ({query}) q").fetchone()
        logging.info("Dry-run row count: %s", result[0])
        return

    output_path = Path(os.getenv("OUTPUT_PATH", "analytics/weekly_margin.csv"))
    output_path.parent.mkdir(parents=True, exist_ok=True)
    logging.info("Writing weekly margin extract to %s", output_path)
    conn.execute(query).df().to_csv(output_path, index=False)
    logging.info("Weekly margin refresh complete")


def main() -> None:
    parser = argparse.ArgumentParser(description="Refresh weekly margin snapshot")
    parser.add_argument("--dry-run", action="store_true", help="Run validations without writing output")
    args = parser.parse_args()

    configure_logging()
    run(build_margin_query(), args.dry_run)


if __name__ == "__main__":
    main()
