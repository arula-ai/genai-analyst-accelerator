# Accelerator Template Repository

This directory mirrors the structure shipped to learners in Codespaces. Clone or fork it to create sandbox copies for each cohort. The accelerator now runs across two 75-minute live sessions (Module 1, then Module 4 with a governance wrap) plus a two-hour homework circuit of four 30-minute sprints.

## Structure
- `module1_prompting/` – DuckDB dataset, data dictionary, validation log, and notebook workspace.
- `module2_automation/weekly_margin/` – Copilot CLI automation scaffold, CI workflow, and logging directories.
- `module4_modernization/` – COBOL source, Python refactor scaffold, tests, and golden dataset.
- `module4_modernization/data-mapping/` – (Create as needed) store data-flow diagrams and requirements packages for analyst handoffs.
- `module5_governance/` – Accuracy register and hallucination response template.
- `.devcontainer/` – Codespaces configuration with Python, DuckDB, SQLFluff, and Copilot CLI.
- `.github/workflows/` – CI pipeline running SQLFluff and modernization unit tests.
- `RESOURCES.md` – Quick links to on-site playbooks and external references.

Import this folder into GitHub Classroom or share it directly with learners to keep all labs synchronized.
