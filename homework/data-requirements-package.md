# Homework: Data Requirements Package Build

**Module Alignment:** Module 4 – Legacy Logic Analysis & Data Mapping

**Timebox:** ~30 minutes (three 10-minute sprints)

## Goal

Transform your discovery notes into a stakeholder-ready data requirements package that engineering and operations teams can act on.

## Assets

- Legacy sample: `modules/module-4-legacy-modernization/cobol_src/interest-adjustment.cbl` (short-code trading log)
- Reference data: `legacy-cobol-jcl-sample/data/TRLOG.DAT` and `modules/module-4-legacy-modernization/golden_dataset/sample_transactions.csv`
- Requirements template (start from the change-control log + your own mapping outputs)

## Deliverables

1. **Data Requirements Package** – Field-by-field requirements including definitions, quality rules, data owners, and downstream consumers.
2. **Assumptions & Risk Register** – Table capturing open questions, blockers, and mitigation plans.
3. **Modernization Handoff Summary** – One page outlining analyst insights, expected business outcomes, and acceptance criteria for engineering.

## Instructions

1. Review the outputs from the Legacy Data Mapping Sprint and highlight the most critical data elements.
2. Populate the requirements package with field definitions, validation rules, freshness expectations, and lineage notes. Use `/doc` in Copilot Chat to speed up formatting.
3. Document assumptions, risks, and SME follow-ups in a concise register. Flag any data-quality gaps surfaced by the golden dataset comparisons.
4. Draft the modernization handoff summary for engineering and operations teams. Focus on business impact, dependencies, and decision checkpoints.
5. Store artifacts in a folder named `data-requirements-package-<your-name>`.

## What to Submit

- `data-requirements-package.md`
- `assumptions-and-risks.md`
- `modernization-handoff-summary.md`

## Review Criteria

- Data requirements package lists every critical field with definition, owner, quality rules, and downstream usage.
- Assumptions and risks are prioritized, include mitigation steps, and call out responsible stakeholders.
- Modernization handoff summary equips engineering with clear scope, success metrics, and validation expectations.
