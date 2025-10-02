# Codespaces Devcontainer Quickstart

Launch the accelerator in GitHub Codespaces or any devcontainer-compatible IDE to avoid local setup friction. The container ships with every dependency required for the labs.

## Preinstalled Tooling
- **Python 3.11** with `pipx` and common data packages (pandas, duckdb, sqlfluff, pytest).
- **DuckDB CLI** plus a seeded warehouse stub under `accelerator/module1_prompting/` for offline SQL validation.
- **JupyterLab** for exploratory notebooks and KPI rebuilds.
- **SQLFluff** configured with the house style and wired into pre-commit + GitHub Actions.
- **GitHub CLI** with Copilot CLI enabled so you can run `copilot suggest`, `copilot explain`, and `copilot tests` from the terminal.

## Getting Started
1. Open the repository in Codespaces (or `Dev Containers: Open Folder in Container` from VS Code).
2. Run `just bootstrap` or `pip install -r requirements.txt` if you need additional packages.
3. Launch JupyterLab via `jupyter lab --NotebookApp.token='' --NotebookApp.password=''` when you need notebook scaffolds.
4. Authenticate GitHub CLI with `gh auth login` so Copilot CLI and PR review features work.
5. Run `sqlfluff lint` before committing to catch formatting drift locally.

## Data & Validation Paths
- DuckDB databases live under `accelerator/module1_prompting/notebooks/` and can be copied per cohort.
- Golden datasets for modernization labs live in `accelerator/module4_modernization/golden_dataset/`.
- Accuracy evidence (registers, hallucination reports) default to `accelerator/module5_governance/`.

## Automation Hooks
- `pre-commit` installs automatically and runs SQLFluff, black, and basic safety checks.
- GitHub Actions under `.github/workflows/` rerun lint/tests and publish artifacts (SQLFluff report, parity diff, evidence bundles).
- Codespaces secrets support OIDC so no long-lived credentials are required during labs.

## Troubleshooting
- If DuckDB files lock, restart the container and delete `.write-ahead-log` files inside the lab folder.
- Reset the Copilot CLI agent via `copilot logout` -> `copilot login` when switching GitHub accounts.
- Use the `/.devcontainer/post-create.sh` script as a reference for required tools if you rebuild locally.
