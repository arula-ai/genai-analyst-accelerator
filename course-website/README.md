# GenAI Analyst Accelerator Website

This Vite + React site hosts the GenAI Analyst Accelerator curriculum. It includes:

- Updated navigation for the five core modules (prompting, automation, storytelling, modernization, governance)
- Embedded markdown resources for prompts, playbooks, and governance artifacts
- Homework assignments that reinforce each module after the live lab

## Local Development

```bash
npm install
npm run dev
```

The router uses the `/copilot-analyst-lab-john` basename for GitHub Pages. Update `BrowserRouter` and `vite.config.ts` if you deploy to a different path.

## Project Structure

```
src/
  pages/
    HomePage.tsx         # Program overview and quick-start checklist
    ModulesPage.tsx      # Deep dives for Modules 1–5
    ResourcesPage.tsx    # Markdown reference library
    HomeworkPage.tsx     # Post-lab assignments
    GovernancePage.tsx   # Accuracy & escalation guidance
resources/               # Playbooks, datasets, templates
homework/                # Homework markdown packs
```

All data used in the curriculum is synthetic. Replace contents inside `resources/` and `governance/` with org-specific assets before running a live cohort.
