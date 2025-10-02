# Measurement Playbook

Track impact across cohorts with a blend of speed, quality, and governance metrics. Use these templates to seed your dashboard or retro meetings.

## Speed & Adoption
- **Time to first working SQL** (Module 1) – record minutes from prompt kickoff to DuckDB validation pass.
- **Copilot suggestion acceptance rate** – capture accepted vs. dismissed suggestions in VS Code or GitHub CLI.
- **PR cycle time** (Modules 2 & 4) – measure hours from open to merge, noting Copilot PR Review summaries.

## Quality & Safety
- **SQLFluff pass rate** – percentage of queries that lint clean on first attempt.
- **Parity defects caught pre-merge** – count mismatches found via golden datasets before release.
- **Hallucination incidents resolved pre-ship** – number of OWASP drill findings mitigated before stakeholder review.

## Governance Health
- **Accuracy register completeness** – entries with severity, root cause, mitigation, and evidence link.
- **Secret scanning blocks avoided** – pushes stopped by push protection during automation labs.
- **Escalation packet turnaround** – time from incident detection to stakeholder-ready briefing.

## How to Report
1. Log cohort metrics in the shared accuracy register or analytics spreadsheet after each module.
2. Highlight the biggest delta (positive or negative) in the retrospective and tie it to specific prompts or guardrails.
3. Share anonymized findings with leadership to demonstrate progress toward responsible AI adoption.
