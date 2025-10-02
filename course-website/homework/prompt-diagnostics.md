# Homework: Prompt Diagnostics Lab

**Module Alignment:** Module 1 – Prompt Engineering Essentials

## Goal

Stress-test your prompt design skills on a new dataset. Capture bias flags, iterate with corrective prompts, and deliver validated SQL alongside a reviewer-ready log.

## Assets

- Dataset overview: Explore the SynthRetail Transactions dataset highlighted on the Modules page.
- Prompt reference: Use the Prompt Clarity Blueprint card in the Resources tab.
- Validation template: Capture checks with the SQL Validation Log builder in Resources.

## Deliverables

1. **Prompt Pack** – Three prompt versions showing how you tightened clarity, constraints, and validation.
2. **SQL Scripts** – Final query plus any intermediate versions with comments.
3. **Validation Log** – Completed table with counts, sample checks, and reviewer initials.
4. **Reflection** – One-page summary of what changed between iterations and why.

## Instructions

1. Draft an initial prompt to summarise churn trends in the dataset and generate supporting SQL.
2. Run the SQL against the dataset (or reason through results if you cannot execute locally). Log every validation step.
3. Apply the bias checklist. Identify at least two assumptions or risky phrases and address them in Prompt v2.
4. Create a third iteration that incorporates validation responses (e.g., `RETRY NEEDED`).
5. Package prompts, SQL, and validation log in a folder named `prompt-diagnostics-<your-name>`.

## What to Submit

- `prompts/` folder with v1-v3 markdown files
- `sql/` folder with final query and validation snippets
- `validation-log.md`
- `reflection.md`

## Review Criteria

- Prompts expose context, guardrails, and validation steps clearly.
- SQL matches expected outputs within tolerance (±2% on totals).
- Bias and hallucination risks are documented with mitigations.
- Reflection shows what you learned about prompt engineering.
