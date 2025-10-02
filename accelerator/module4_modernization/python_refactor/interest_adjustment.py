"""Modernized interest adjustment logic.

Generated with Copilot Chat using /explain on cobol_src/interest-adjustment.cbl
and refined with /tests against the golden dataset.
"""

from __future__ import annotations

from dataclasses import dataclass
from decimal import Decimal
from typing import Iterable, List


@dataclass
class Transaction:
    account_id: str
    principal: Decimal
    standard_rate: Decimal
    promo_rate: Decimal
    days_outstanding: int


def calculate_interest(tx: Transaction) -> Decimal:
    base = tx.principal * tx.standard_rate * Decimal(tx.days_outstanding) / Decimal(365)
    promo = tx.principal * tx.promo_rate * Decimal(tx.days_outstanding) / Decimal(365)
    return base - promo


def process_transactions(rows: Iterable[Transaction]) -> List[Decimal]:
    return [calculate_interest(row) for row in rows]
