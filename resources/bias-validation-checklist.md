# Bias & Validation Checklist

This checklist supports Modules 1, 3, 4, and 5. Use it to challenge GenAI outputs the same way a critical reviewer would.

---

## 1. Identify Risk Level

| Artifact | Typical Risks | Validation Tier |
| --- | --- | --- |
| SQL / Data Queries | Silent filters, wrong joins, missing null handling | **Tier 2** – Run against sample data and review counts |
| Narratives / Summaries | Hallucinated metrics, exaggerated claims, tone drift | **Tier 2** – Fact check every statement and cite sources |
| Legacy Code Refactors | Logic loss, data type mismatches, missing jobs | **Tier 3** – Unit tests + stakeholder review |
| Automation Scripts | Secrets exposure, destructive queries, stale logic | **Tier 3** – Dry-runs + rollback plan |

---

## 2. Bias Spotters

Before accepting any output, scan for:

- **Dataset gaps** – Ask: "What populations or time periods are missing?"
- **Outcome framing** – Does the response assume success metrics that were never supplied?
- **Language tone** – Replace emotionally charged or biased phrases (e.g., "low-value customers") with neutral alternatives.
- **Source ambiguity** – If the model references "industry benchmarks" or "recent reports" without citation, flag it.

Prompt to use:

```
Review the response above for the following:
- Bias-prone language or framing
- Claims that lack a cited source or calculation
- Hidden assumptions about the dataset or audience

Answer with a table listing Issue, Why it matters, Recommended fix.
```

---

## 3. Validation Ladder

### Tier 1 – Basic (for low-risk drafts)
- Manual skim for obvious hallucinations.
- Confirm required sections/columns exist.
- Capture reviewer initials and timestamp.

### Tier 2 – Evidence Required
- Re-run SQL with `COUNT(*)`, min/max, and sample rows.
- For narratives, tie every sentence to a metric ID, chart, or log entry.
- Attach screenshots, query outputs, or data profiles to the accuracy register.

### Tier 3 – Formal Review
- Pair with a second reviewer (SME + risk/compliance if needed).
- Run automated tests or linting tools (pytest, Sonar, Excel test formulas).
- Document rollback plan and approval authority in change log.

---

## 4. Accuracy Register Fields

Log every artifact in `governance/accuracy-register-template.xlsx` with:

- Artifact name & module (M1 SQL, M3 narrative, etc.)
- Prompt version + link to markdown file or chat transcript
- Dataset / source reference
- Reviewer(s) + decision (accept / revise / reject)
- Evidence links or attachments
- Follow-up actions with due dates

---

## 5. Escalation Flow

1. **Pause** work and mark the artifact "On Hold".
2. **Capture** the issue using the Hallucination Response Playbook template.
3. **Notify** the module facilitator plus risk/compliance partner.
4. **Decide**: Re-prompt, use a different tool, or revert to manual method.
5. **Close** the loop in the accuracy register with remediation details.

---

## 6. Quick Reference Prompts

- `"Highlight any biases or assumptions in the SQL narrative above."`
- `"List three sanity checks I should run before executing this automation."`
- `"Rewrite the previous summary so every claim references a metric ID."`
- `"Generate a validation checklist for the Python refactor with unit test suggestions."`

Keep this checklist beside you during Modules 4 and 5. It should feel uncomfortable to approve an artifact without real evidence.
