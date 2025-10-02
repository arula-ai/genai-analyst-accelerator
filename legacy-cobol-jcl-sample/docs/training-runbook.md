# Analyst Training Runbook: Legacy Logic Discovery

Use this guide to drive Module 4 exercises with the COBOL + JCL sample.

## 1. Prep (5 minutes)
- Open `cobol/interest-adjustment.cbl` and `copybooks/TRMAP.cpy` (note the short field codes like TID/BUID/ASCD).
- Skim `jcl/INTADJ01.jcl` to understand how the job is orchestrated.
- Confirm learners know where to log findings (data requirements template, SME question log).

## 2. Business Logic Deconstruction (10 minutes)
- Prompt `/explain` to summarise the program in business language.
- Capture: purpose, inputs used, rate calculations, decision branches, outputs.
- Highlight hidden assumptions (e.g., promo rate defaults) and compliance implications.

## 3. Data Flow Mapping (10 minutes)
- Review the copybook and sample data to map each field to upstream/downstream systems.
- Ask learners to document field name, description, source, transformation, and consumer.
- Encourage them to note freshness needs and quality checks in the data requirements package.

## 4. Requirements Package Draft (10 minutes)
- Translate notes into a deliverable for engineering/operations.
- Focus on: required data elements, quality rules, ownership, open issues, and acceptance criteria.
- Assign SME questions to specific stakeholders with due dates.

## 5. Governance Wrap (5 minutes)
- Log risks and mitigation steps in the change-control log.
- Update the accuracy register with findings that impact downstream analytics.
- Decide what evidence to store (business logic summary, mapping diagram, requirement draft).

## Optional Extensions
- **Automation Review**: Pair with Module 2 by asking Copilot CLI to generate a transformation and comparing results.
- **Parity Testing**: Hook the COBOL output into the Python parity tests inside `accelerator/module4_modernization/` to validate logic.
- **Incident Simulation**: Introduce a data-quality defect and run the Module 5 escalation workflow.

---

Use this runbook as-is or adapt timings to your session plan. The goal is to keep analysts focused on discovery, documentation, and stakeholder alignment rather than writing replacement code.
