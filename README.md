# GenAI Analyst Accelerator

Hands-on curriculum for business, systems, and data analysts who want to pair GenAI with responsible governance.

## What You Get

- **Four core modules** covering prompt engineering, optional automation, legacy analysis, and governance.
- **Synthetic assets** (datasets, visuals, COBOL snippets) ready to practise with GenAI tools.
- **Course website** built with Vite/React that hosts agendas, homework, and resource libraries.
- **Governance artifacts** including accuracy registers, validation logs, and incident workflows.

## Repository Structure

```
module-1-prompt-engineering/     # Prompt drills, SQL validation logs, datasets
module-2-automation/             # Automation prompts, reviewer scorecards, scripts
module-4-legacy-modernization/   # COBOL samples, data-mapping workspace, change logs
module-5-governance/             # Accuracy registers, incident reports, escalation templates
course-website/                  # React site serving the curriculum
resources/                       # Shared assets referenced by the site (playbooks, templates)
legacy-cobol-jcl-sample/        # Stand-alone COBOL + JCL template analysts can clone
lab-guide.md                     # Facilitator runbook for the live session
copilot-analysts-lab-instructions.md  # Detailed content guide for each module
```

> All example data is synthetic and safe for public sharing.

## Quick Start

1. **Clone the repo** and install dependencies for the course website:
   ```bash
   cd course-website
   npm install
   npm run dev
   ```
2. **Review governance requirements** in [`governance/README.md`](course-website/governance/README.md).
3. **Open the lab guide** for a minute-by-minute facilitator plan: [`lab-guide.md`](lab-guide.md).
4. **Load module assets** from the `module-*` folders into your preferred IDE or notebook.

## Module Overview

| Module | Focus | Lab Highlight |
| --- | --- | --- |
| 1. Prompt Engineering Essentials | Prompt clarity, bias awareness, validation loops | Summarise datasets and generate validated SQL |
| 2. Automating Everyday Data Tasks *(optional)* | Privacy-aware automation, reviewer scorecards | Automate weekly reports using Excel, SQL, Python |
| 4. Legacy Logic Analysis & Data Mapping | Business logic discovery, data flow tracing | Build a data requirements package from COBOL discovery notes |
| 5. Governance & Accuracy Fundamentals | Hallucination response, evidence capture | Run an accuracy audit and escalation workflow |

## Homework Packs

The `course-website/homework/` folder matches the modules and extends learning after the live lab. Each assignment ships with prompts, validation steps, and submission checklists.

## Customising for Your Organisation

- Swap the synthetic datasets in `module-*` directories with anonymised examples from your environment.
- Update the escalation contacts inside `course-website/governance/README.md` and `module-5-governance/`.
- Tailor the prompts and templates to reflect internal terminology and tooling.

## Contributing

1. Branch from `main` and describe changes clearly in PRs.
2. Keep synthetic data obvious—never commit production records.
3. Run `npm run build` inside `course-website/` before raising a PR.

## License

MIT — see [`LICENSE`](LICENSE).
