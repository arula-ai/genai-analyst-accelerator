# Legacy Modernization Field Guide

Take this guide into Module 4 when translating COBOL, JCL, or mainframe logic into modern stacks. It keeps business context, risk, and technical detail aligned.

---

## 1. Decomposition Worksheet

Capture the current-state story before touching code.

| Section | Questions to Answer |
| --- | --- |
| Purpose | What business outcome does this job deliver? Who consumes it? |
| Inputs | Which files, tables, or messages feed the routine? What are the formats? |
| Outputs | What downstream systems rely on the result? |
| Schedule | When does it run? Batch window? Dependencies? |
| Controls | Which approvals, audit logs, or reconciliations exist today? |
| Failure Modes | How do we recover when it fails? |

Use prompt:
```
Explain the following COBOL program to a business stakeholder. Summarise inputs, outputs, timing, and risks in a table. Highlight any compliance or audit controls.
```

---

## 2. Modernization Prompt Template

```
You are assisting with modernising a legacy COBOL routine into Python + SQL.

Context:
- Business goal: [describe]
- Data sources: [files/tables]
- Non-functional requirements: [SLAs, logging, audit]

Tasks:
1. Generate a Python module that mirrors the logic.
2. Suggest SQL to replace flat-file joins where appropriate.
3. Outline unit tests covering edge cases and negative paths.

Constraints:
- Do not introduce new external dependencies beyond pandas + sqlalchemy.
- Keep functions small and pure where possible.
- Include inline comments that mention original paragraph/section names.

Validation plan:
- Use the golden dataset in `resources/code/legacy-cobol/tests/fixtures/`.
- Compare outputs to `expected_output.csv`.
- Document differences in the change-control log.
```

---

## 3. Risk & Control Checklist

- [ ] Data lineage mapped from source to target tables
- [ ] Logging strategy defined (success, failure, retry metrics)
- [ ] Rollback trigger documented (what conditions revert to COBOL)
- [ ] Stakeholder approvals captured (business, technology, compliance)
- [ ] Test evidence stored with timestamps and approver initials

---

## 4. Change Control Log Template

```
Change Summary: [one-liner]
Legacy Scope: [jobs/programs touched]
Modern Scope: [services/scripts introduced]
Risk Rating: Low / Medium / High (reason)
Rollback Plan: [steps + owner]
Validation Evidence: [links or file paths]
Approvals: [name, role, date]
Next Review: [cadence]
```

Keep the log in `resources/templates/change-control-log.md` and attach it to your accuracy register entry.

---

## 5. Stretch Practices

- Pair with engineering to run static analysis (CodeQL, Sonar) on the generated code.
- Use architecture decision records (ADRs) to document why certain modern stacks were chosen.
- Build a regression harness that keeps the legacy COBOL as a reference implementation until confidence climbs.

This field guide evolves as you tackle more modernization candidates. Add lessons learned and share updates with future cohorts.
