# Prompt Clarity Blueprint

Design prompts that keep analytical work grounded in evidence. This blueprint powers Module 1 and Module 3 by giving analysts a repeatable framework for summarising datasets, generating SQL, and guiding narrative drafts.

---

## The Five-Part Frame

1. **Role & Intent** – State who the assistant is and what business outcome you expect.
2. **Inputs** – Describe the dataset, visuals, or legacy code you are feeding into the conversation.
3. **Constraints & Guardrails** – Clarify privacy boundaries, tone, formatting rules, and failure conditions.
4. **Format & Structure** – Spell out the headings, table layouts, bullets, or code blocks you want to receive.
5. **Validation & Next Step** – Tell GenAI how you will verify the output and what it should do if the checks fail.

> **Tip:** Treat validation as part of the prompt, not an afterthought. The assistant should co-own accuracy.

---

## Reusable Template

```
You are [role] supporting [audience] on [business problem].

Inputs you can rely on:
- Dataset: [name, shape, grain]
- Context: [recent decisions, limits, hypotheses]
- Allowed tools: [SQL dialect, spreadsheet version, scripting language]

Constraints and guardrails:
- Privacy: Never include [restricted attributes]. Use synthetic values only.
- Bias watch-outs: Surface assumptions about [population, timeframe, channel].
- Tone: [Plain-language, regulatory-neutral, executive-ready].

Output format required:
1. [Heading / section]
   - Include [metrics, field names, tolerances]
2. [Heading / section]
   - Provide [code, formulas, tables]

Validation plan:
- Before finalising, run [sanity check / query / calculation].
- If the check fails, respond with "RETRY NEEDED" and describe the issue.
- Capture any ambiguity in a "Questions" section.
```

---

## Example: Dataset Briefing Prompt

```
You are a senior data analyst preparing a two-paragraph briefing for banking leadership about the SynthRetail_Transactions.csv dataset.

Inputs you can rely on:
- Data file: SynthRetail_Transactions.csv (preview it from the Modules or Resources page)
- Metadata: Review the dataset dictionary provided alongside the dataset preview
- Audience: Non-technical executives focused on customer retention.

Constraints and guardrails:
- Privacy: Do not invent customer names or real financial amounts.
- Bias: Call out where sampling or time coverage might skew results.
- Tone: Executive-ready, factual, avoid hype.

Output format required:
1. **What We Know** (2 sentences)
2. **Where to Investigate** (bullet list with 3 evidence-backed hypotheses)
3. **Questions** (list any data quality or definition questions)

Validation plan:
- Confirm totals using SUM(card_spend) and COUNT(DISTINCT account_id).
- If you detect ambiguous field definitions, surface them in the Questions section.
```

---

## Example: SQL Generation Prompt

```
You are a SQL co-pilot assisting with questions about SynthRetail_Transactions.

Inputs:
- Warehouse schema: `synth_lab.transactions` (grain = one row per transaction)
- Joinable table: `synth_lab.customers` (grain = one row per customer)
- Business question: Identify customers with three consecutive months of declining spend.

Constraints:
- Use ANSI SQL compatible with Snowflake.
- Replace schema/table names with parameters at the top for reuse.
- No PII in comments.

Output format:
1. Comment block summarising the logic
2. SQL query ready to paste into Snowflake with CTEs
3. Section titled **Validation** with at least two sample checks

Validation plan:
- Include a `SELECT COUNT(*)` in the validation section to verify expected row volume.
- If assumptions remain, return "RETRY NEEDED" with clarifying questions.
```

---

## Self-Audit Checklist

Use this quick check before accepting any AI-authored output:

- [ ] Does the prompt name the dataset, artefact, or code module explicitly?
- [ ] Are privacy red lines called out in the guardrails section?
- [ ] Did you define the format so the output drops into your document or tool without rework?
- [ ] Did you tell GenAI exactly how you will validate the result?
- [ ] Did the model respond with a "Retry needed" flag? If yes, adjust the prompt and rerun.

Keep this blueprint open while you work through Modules 1 and 3. With practice, the five-part frame becomes muscle memory.
