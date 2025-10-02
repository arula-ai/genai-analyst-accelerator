# Margin Reporting Assets

Synthetic exports powering the Module 2 automation lab.

## Files

- Weekly margin summary – joined dataset used as the golden reference
- Input extracts – raw CSVs representing source systems (available to preview on this site)
- Expected outputs – validation snapshots for comparison

## Business Story

Operations prepares a weekly profitability pack by combining order, cost, and campaign data. The goal of Module 2 is to automate the refresh without touching production systems.

## Validation Tolerances

- Margin variance tolerance: ±2% against the golden dataset
- Row count tolerance: ±5 rows to account for synthetic sampling
- Any deviation beyond tolerance triggers the escalation workflow
