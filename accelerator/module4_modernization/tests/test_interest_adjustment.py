from decimal import Decimal

from accelerator.module4_modernization.python_refactor.interest_adjustment import Transaction, calculate_interest


def test_calculate_interest_matches_golden_dataset():
    tx = Transaction(
        account_id="A123",
        principal=Decimal("1000.00"),
        standard_rate=Decimal("0.06"),
        promo_rate=Decimal("0.02"),
        days_outstanding=30,
    )

    expected = Decimal("10.96")
    assert calculate_interest(tx).quantize(Decimal("0.01")) == expected
