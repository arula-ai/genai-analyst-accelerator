# Governance Crosswalk

| Artifact | NIST AI RMF | Generative AI Profile | ISO/IEC 42001 Link | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| Prompt scaffolds & validation logs (Module 1) | Map (M1, M2), Measure (ME-1) | GAI 2.1 (Context & Purpose), GAI 3.2 (Data Traceability) | Operational Controls - Prompt Management | modules/module-1-prompt-engineering/checklists/sql-validation-log.md | Includes SQLFluff reports and DuckDB explain plans |
| Automation review scorecard & dry-run logs (Module 2) | Govern (G-2), Manage (MA-3) | GAI 4.1 (Operational Oversight), GAI 3.5 (Security Controls) | Control 8.3 - Change Management | module-2-automation/scorecards/automation-review.md | Copilot CLI dry-run logs + secret scanning proof |
| Data flow mapping & requirements package (Module 4) | Map (M3), Measure (ME-2) | GAI 2.3 (Output Documentation), GAI 4.3 (Hallucination Mitigation) | Control 9.2 - Communication Management | accelerator/module4_modernization/data-mapping/README.md | Includes business logic summaries, data flow maps, and SME question logs |
| Change-control log & parity notes (Module 4) | Govern (G-4), Manage (MA-2) | GAI 4.4 (Change Control), GAI 5.2 (Testing & Validation) | Control 8.4 - Change Impact Assessment | module-4-legacy-modernization/logs/change-control-log.md | Tracks risks, mitigations, and modernization handoff decisions |
| Accuracy register & hallucination reports (Module 5) | Govern (G-1), Manage (MA-4) | GAI 6.1 (Incident Management), GAI 6.2 (Transparency) | Control 10.3 - Incident Response | module-5-governance/registers/accuracy-register.csv | Tracks severity, root cause, mitigation timelines |

## How to Use
- Reference this table when stakeholders ask how the accelerator aligns with recognized frameworks.
- Link the crosswalk in governance briefings, PRs, and audit packets to show evidence coverage.
- Update the table after each cohort if new artifacts or controls are introduced.
