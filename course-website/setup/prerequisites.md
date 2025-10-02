# Prerequisites Checklist

Complete this checklist before joining the GenAI Analyst Accelerator. It ensures you can run prompts, validate outputs, and capture governance evidence.

## Access & Licensing

- [ ] **GenAI tooling enabled** (GitHub Copilot Business/Enterprise, Azure OpenAI, or approved platform)
- [ ] **Access to this repository** with permission to clone and push to a sandbox branch
- [ ] **Ability to store evidence** in your organisation’s approved workspace (SharePoint, Confluence, GitHub, etc.)

## Workstation Setup

- [ ] **IDE installed** (VS Code 1.80+, JetBrains 2023.1+, or equivalent)
- [ ] **Git configured** with your corporate identity
- [ ] **Markdown preview working** (open any `.md` file and confirm rendered view)
- [ ] **Python 3.10+** (needed for Module 4 optional exercises)

## Copilot / Chat Configuration

- [ ] Signed in to Copilot or your approved chat assistant
- [ ] Public code filter (or equivalent duplication guard) enabled
- [ ] Chat interface tested with a simple request (e.g., "Summarise this README")

## Governance Readiness

- [ ] Reviewed [`course-website/governance/README.md`](../course-website/governance/README.md)
- [ ] Accuracy register template downloaded (`course-website/governance/accuracy-register-template.csv`)
- [ ] Hallucination Response Playbook bookmarked (`course-website/resources/hallucination-response-playbook.md`)

## Dataset & Asset Access

- [ ] Synthetic dataset downloaded (`module-1-prompt-engineering/datasets/`)
- [ ] Power BI exports available (`module-3-insight-storytelling/assets/`)
- [ ] COBOL sample accessible (`module-4-legacy-modernization/legacy/`)
- [ ] Automation assets copied (`module-2-automation/` – optional)

## Environment Verification

1. **Prompt test:** Open `module-1-prompt-engineering/prompts/summary-and-sql.md` and ask your GenAI tool to complete the prompt. Ensure it responds within 10 seconds.
2. **Validation log:** Open `resources/templates/sql-validation-log.md` and confirm you can edit/save.
3. **Governance evidence:** Add a dummy row to `governance/accuracy-register-template.csv` to confirm write access.

## Need Help?

- For tooling issues, see `setup/copilot-setup.md` and `setup/verify-before-commit-checklist.md`.
- Escalate governance questions to the contacts listed in `course-website/governance/README.md`.

Once all boxes are checked, head to the [Lab Guide](../lab-guide.md) and queue up Module 1.
