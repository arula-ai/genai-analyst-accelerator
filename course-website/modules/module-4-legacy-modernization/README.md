# Module 4 · Legacy Business Logic & Data Flow Analysis (Analyst Track)

Explain legacy logic to stakeholders, map data and batch flows, and compile a requirements package—without writing code.

## Scenario

An overnight COBOL job calculates interest adjustments for deposit accounts. You will deconstruct the COBOL + JCL to recover **business rules**, **data elements**, and **flow of data across batch steps**. The outcome is a **requirements package** suitable for engineering intake.

> Analysts focus on logic and flows; no refactoring or code generation in this lab. (JCL describes how jobs, steps, datasets, and procs are orchestrated on z/OS. :contentReference[oaicite:4]{index=4})

## Objectives

1. Produce a **plain-language business-logic walkthrough** (inputs, decisions, calculations, outputs).
2. Create a **data & batch flow map** (files/datasets, read/write usage, step sequence, upstream/downstream).
3. Compile a **requirements package**: fields & rules, acceptance criteria, assumptions/risks, and open questions.
4. Update the **change-control/trace log** documenting scope, risks, SMEs, and approvals.

## What's Included

- **COBOL + JCL Samples** – Small legacy interest-adjustment example for decomposition practice
- **Templates** – Business-logic summary, data-flow map, SME question log, requirements package shell
- **Change-Control Log** – For documenting risks, rollbacks, and approvals

Use the Requirements Package template (aligned to ISO/IEC/IEEE 29148 sections) to structure deliverables. :contentReference[oaicite:5]{index=5}

Review the Legacy Modernization Field Guide (Resources page) for decomposition worksheets and migration prompts. Work closely with risk and engineering reviewers before moving any modernization work forward.
