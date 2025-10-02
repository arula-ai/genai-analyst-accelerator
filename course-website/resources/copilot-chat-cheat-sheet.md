# Copilot Chat Cheat Sheet

Use these prompts and shortcuts during live labs. Reference this sheet whenever you need to clarify intent, cite workspace files, or request specific follow-up actions from Copilot.

## Core Slash Commands
- `/explain` – Restate the task, identify assumptions, and confirm constraints before Copilot executes.
- `/tests` – Generate validation checks, sample data assertions, or unit tests based on the active file.
- `/fix` – Ask Copilot to remediate lint findings, parity gaps, or reviewer feedback in context.
- `/doc` – Produce summaries, briefings, or incident packets that link back to workspace files.
- `/optimize` – Request alternative approaches or performance improvements after validation passes.

## Context Anchors
- `@workspace <path>` – Inject repository context such as `@workspace data_dictionary.md` or `@workspace margin_spec.md` to ground outputs in authoritative definitions.
- `#codebase <path>` – Point Copilot to specific files like `#codebase notebooks/validation_log.csv` or `#codebase cobol_src/interest-adjustment.cbl` when revising code or evidence.
- Paste canonical snippets (chart titles, filters, input/output formats) directly into chat before asking for summaries or refactors.

## Recommended Prompt Flow
1. **Frame the work:** `/explain` the request with roles, success criteria, and guardrails (never hit prod, dry-run only).
2. **Draft responsibly:** Provide context files with `@workspace` or `#codebase` so Copilot cites real assets.
3. **Self-audit:** Run `/tests` to generate DuckDB checks, parity harnesses, or regression suites.
4. **Remediate:** Apply `/fix` to resolve lint, test, or governance findings before requesting review.
5. **Document:** Use `/doc` to capture the briefing, incident summary, or PR notes for stakeholders.

## Quick Tips
- Keep prompts under 10 lines and focus on one deliverable per message for higher fidelity responses.
- Call out validation tiers (Tier 1/2/3) so Copilot suggests the right checks.
- Reference applicable frameworks (NIST AI RMF, OWASP LLM01) inside prompts when drafting governance artifacts.
- Capture the prompt -> response -> revision sequence in your README to prove traceability.
