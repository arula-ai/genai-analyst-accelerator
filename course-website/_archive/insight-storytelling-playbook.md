# Insight Storytelling Playbook

Module 3 relies on this playbook to turn Power BI visuals into stakeholder-ready narratives without sacrificing accuracy.

---

## Story Spine Template

1. **Context** – Set the scene. Describe the audience, timeframe, and why the dashboard matters now.
2. **Insight** – Present the finding with supporting metrics (include calculations or filters).
3. **Impact** – Explain the business implication and what happens if nothing changes.
4. **Action** – Recommend a decision or next step with owners and timing.

> Use the template for every audience. Adjust tone and depth, not the evidence.

---

## Audience Tone Matrix

| Audience | Preferred Tone | Must Include | Avoid |
| --- | --- | --- | --- |
| Executives | Concise, outcome-focused | Trendline + financial impact | Data dumps, tactical jargon |
| Operations | Process-aware, actionable | Root cause, capacity implications | Abstract strategy |
| Compliance | Precise, risk-mitigating | Policy references, control status | Speculation |

---

## Prompt Scaffold

```
You are writing a [executive/operations/compliance] briefing.

Inputs available:
- Power BI export: [file name or slide pack]
- Metric definitions: [link to glossary]
- Business question: [e.g., Why is churn rising in Q3?]

Constraints:
- Tie every statement to a metric ID or visual label.
- Call out data quality concerns or missing segments.
- Reference policy docs when discussing regulated metrics.

Output format:
1. **Context** (2 sentences)
2. **Insight** (bullet list with metric references)
3. **Impact** (2-3 sentences)
4. **Recommended Action** (owner + deadline)
5. **Evidence Table** (Markdown table with Metric, Value, Source, Filter)

Validation:
- Verify numbers using the provided dashboard data.
- If something cannot be validated, add it to "Questions / Follow-up".
```

---

## Fact-Check Prompts

```
Evaluate the briefing above. List every claim that lacks:
- A cited metric or filter
- Clear timeframe
- Reference to a Power BI visual

Return a table with Claim, Missing Evidence, Fix.
```

```
Compare the executive briefing to the compliance briefing. Highlight conflicting statements or tone mismatches and suggest a unified message.
```

---

## Evidence Table Template

```
| Metric | Value | Source Visual | Filters/Notes |
| --- | --- | --- | --- |
| Monthly Churn Rate | 4.7% | Page 2 – Churn Trend | Filter: Region = West, Rolling 3-month |
| Net Retention | 96.2% | Page 4 – Retention Funnel | Derived: Current month / prior 12-month |
```

Attach the evidence table to the accuracy register entry for quick audits.

---

## Reviewer Checklist

- [ ] Claims align with the dashboard screenshot or data export.
- [ ] Tone matches the audience profile above.
- [ ] Risks and caveats are explicit (no hidden assumptions).
- [ ] Action owners and deadlines are realistic.
- [ ] Evidence table includes metric definitions or formulas.

---

## Stretch Prompts

- `"Generate a 90-second spoken script based on the executive briefing."`
- `"Rewrite the operations briefing for frontline supervisors with callouts for staffing adjustments."`
- `"Draft a slide outline using the same evidence table."`

Use this playbook whenever you apply GenAI to dashboards, PowerPoint decks, or stakeholder updates.
