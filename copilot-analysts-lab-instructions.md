# GenAI Analyst Accelerator · Content Guide

This guide details every asset in the repository and how to use it during the five-module accelerator.

---

## Repository Map

```
module-1-prompt-engineering/
module-2-automation/
module-3-insight-storytelling/
module-4-legacy-modernization/
module-5-governance/
course-website/
resources/
setup/
```

Each `module-*` folder contains prompts, datasets, and templates for the live lab and ongoing practice.

---

## Module 1 · Prompt Engineering Essentials

**Goal:** Build prompts that surface assumptions, stay within guardrails, and produce validated SQL.

- `module-1-prompt-engineering/datasets/` – Synthetic transactions CSV + dictionary.
- `module-1-prompt-engineering/prompts/summary-and-sql.md` – Starter prompt using the five-part blueprint.
- `module-1-prompt-engineering/checklists/sql-validation-log.md` – Example validation log.

**Facilitation tips:**
- Have teams create three prompt iterations and compare outputs.
- Ask them to log bias flags in the validation log.
- Encourage use of the Prompt Clarity Blueprint (`course-website/resources/prompt-clarity-blueprint.md`).

---

## Module 2 · Automating Everyday Data Tasks (Optional)

**Goal:** Generate and review automation scripts responsibly.

- `module-2-automation/prompts/` – Prompts for Excel formulas, SQL refreshes, and Python scripts.
- `module-2-automation/scorecards/automation-review.md` – Decision log for reviewers.
- `module-2-automation/scripts/` – Workspace for generated code; add synthetic data before sharing.

**Facilitation tips:**
- Pair participants to alternate between "builder" and "reviewer" roles.
- Capture query IDs or screenshots as evidence before approving automation.
- Use the Automation Cookbook (`course-website/resources/automation-cookbook.md`) for additional prompts.

---

## Module 3 · Insight Generation & Storytelling

**Goal:** Produce stakeholder-specific narratives backed by metric evidence.

- `module-3-insight-storytelling/assets/` – Power BI screenshots and data exports.
- `module-3-insight-storytelling/briefings/template.md` – Starting point for each audience.
- `module-3-insight-storytelling/evidence/` – Store fact-check logs and evidence tables.

**Facilitation tips:**
- Require participants to cite every claim using the evidence table.
- Run the fact-check prompts from the Insight Storytelling Playbook.
- Have teams read narratives aloud to test clarity and tone.

---

## Module 4 · Legacy Code Decomposition & Modernization

**Goal:** Translate COBOL logic into modern code while documenting risk.

- `module-4-legacy-modernization/legacy/` – COBOL program and supporting docs.
- `module-4-legacy-modernization/modern/` – Workspace for Python refactors.
- `module-4-legacy-modernization/logs/change-control-log.md` – Track decisions, rollback plans, approvals.

**Facilitation tips:**
- Start with a walkthrough explaining business purpose and dependencies.
- Encourage teams to add unit tests alongside the modern code.
- Review risk ratings and ensure rollback triggers are specific.

---

## Module 5 · Governance & Accuracy Fundamentals

**Goal:** Operate a sustainable accuracy program for GenAI-assisted analytics.

- `module-5-governance/registers/accuracy-register.csv` – Example entry.
- `module-5-governance/templates/hallucination-report.md` – Incident worksheet.
- `module-5-governance/incidents/` – Archive completed reports.

**Facilitation tips:**
- Simulate incidents with intentionally flawed outputs (SQL, narratives, code).
- Use the Hallucination Response Playbook to capture severity and remediation.
- Close with a retrospective assigning governance improvements.

---

## Course Website

Launch the React site (`course-website/`) for a polished participant experience. It includes:

- Module overviews and agenda (Home + Modules pages)
- Resource library with prompt playbooks and checklists
- Homework assignments aligned to each module
- Governance hub rendering `course-website/governance/README.md`

Run locally with:

```bash
cd course-website
npm install
npm run dev
```

---

## Supporting Assets

- `resources/` – Centralised playbooks, datasets, templates referenced across modules.
- `setup/` – Prerequisite checks and verification steps for GitHub Copilot or equivalent GenAI tools.
- `course-website/homework/` – Post-lab assignments mirroring the new curriculum.

---

## Facilitator Notes

- Assign rotating reviewers to keep the accuracy register current.
- Capture screenshots or exports of each artifact for future cohorts.
- Encourage teams to adapt prompts to their domain once the core skills land.

This guide should evolve with your organisation’s GenAI usage. Update module folders and supporting assets as you gather new lessons.
