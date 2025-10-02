# Homework: Legacy Data Mapping Sprint

**Module Alignment:** Module 4 – Legacy Logic Analysis & Data Mapping

**Timebox:** ~30 minutes (three 10-minute sprints)

## Goal

Document the business logic embedded in the short-code trading log program, trace data movement, and capture questions for subject-matter experts step-by-step.

## Assets

- Legacy sample: `accelerator/module4_modernization/cobol_src/interest-adjustment.cbl` (mirrors `legacy-cobol-jcl-sample/cobol/interest-adjustment.cbl`)
- Trade log: `legacy-cobol-jcl-sample/data/TRLOG.DAT` or your mapped dataset
- Change-control log template: `accelerator/module4_modernization/logs/change-control-log.md` (log short-code field interpretations)

## Deliverables

1. **Business Logic Summary** – Plain-language outline of inputs, calculations, decision branches, and outputs.
2. **Data Flow Map** – Table or diagram that lists upstream sources, transformations, and downstream consumers for each field.
3. **SME Question Log** – Open issues, assumptions, and required follow-ups with owners.

## Instructions

1. Run `/explain` in Copilot Chat against `interest-adjustment.cbl` to capture the core business rules.
2. Identify each field the program reads or writes. Note the source table/file, transformations, and outputs in your mapping.
3. Compare the logic to the golden dataset to confirm field definitions and highlight gaps.
4. Record any ambiguities, missing documentation, or stakeholder approvals needed in the question log.
5. Store artifacts in a folder named `legacy-data-mapping-<your-name>`.

## What to Submit

- `business-logic-summary.md`
- `data-flow-map.csv` (or `.md` if using a table)
- `sme-question-log.md`

## Review Criteria

- Business logic summary explains the process without quoting code and highlights key decisions.
- Data flow map lists sources, transformations, and consumers for every critical field.
- SME question log captures outstanding issues with owners, due dates, and next steps.
