# GenAI Analyst Accelerator · Facilitator Lab Guide

Total time: **150 minutes (2.5 hours)**

This guide walks facilitators through the new five-module curriculum. Adjust timing as needed for your audience.

---

## 0. Pre-Lab Checklist (15 minutes before start)

- [ ] Confirm everyone reviewed the governance hub (`course-website/governance/README.md`).
- [ ] Ensure participants cloned the repo and opened the course website locally.
- [ ] Provide links to module folders (`module-*`) and the `resources/` playbooks.
- [ ] Assign an "accuracy captain" responsible for updating the accuracy register during the session.

---

## 1. Orientation & Guardrails (0:00 – 0:15)

| Segment | Time | Notes |
| --- | --- | --- |
| Welcome & outcomes | 5 min | Emphasise the goal: accelerate analytical work without losing control. |
| Governance recap | 5 min | Review accuracy register, hallucination response workflow, escalation path. |
| Tools check | 5 min | Confirm access to GenAI tools, IDEs, datasets, and synthetic assets. |

**Callout:** remind everyone to log prompts and evidence as they go.

---

## 2. Module 1 · Prompt Engineering Essentials (0:15 – 1:00)

1. **Demo (10 min)** – Show how the five-part blueprint shapes a dataset briefing prompt.
2. **Hands-on (20 min)** – Participants iterate on prompts using `module-1-prompt-engineering/prompts/summary-and-sql.md`.
   - Deliver SQL scripts and validation logs.
   - Accuracy captain records outputs in the register.
3. **Debrief (15 min)** – Discuss bias flags, validation wins, and prompt adjustments.

**Artifacts to collect:** prompt versions, SQL validation log, reflection notes.

---

## 3. Module 3 · Insight Generation & Storytelling (1:00 – 1:45)

1. **Briefing structure (5 min)** – Introduce the story spine and audience tone matrix.
2. **Hands-on (25 min)** – Teams create executive, operations, and compliance briefings using assets in `module-3-insight-storytelling/`.
3. **Fact-check (10 min)** – Run bias/validation prompts, update evidence tables.
4. **Share-out (5 min)** – Volunteer teams present one paragraph and the matching evidence.

**Artifacts to collect:** three briefings, evidence table, fact-check log.

---

## 4. Break / Optional Module 2 (1:45 – 2:05)

Use this 20-minute window for a quick break **or** to sample Module 2 automation prompts. Emphasise that automation adoption requires strict review rituals.

---

## 5. Module 4 · Legacy Modernization (2:05 – 2:55)

1. **Walkthrough (10 min)** – Review the decomposition worksheet and COBOL program.
2. **Hands-on (25 min)** – Participants explain the legacy logic and generate a Python refactor.
3. **Risk logging (10 min)** – Complete the change-control log with mitigations and rollback triggers.
4. **Discussion (5 min)** – Highlight risks discovered and unit tests generated.

**Artifacts to collect:** legacy walkthrough, Python module, change-control log, validation evidence.

---

## 6. Module 5 · Governance & Accuracy Lab (2:55 – 3:30)

1. **Incident review (10 min)** – Analyse intentionally flawed outputs (provide ahead of time or use participants’ work).
2. **Response workflow (15 min)** – Follow the Hallucination Response Playbook to capture severity, evidence, and escalation messages.
3. **Retrospective (10 min)** – Update the accuracy register, agree on improvements, and assign owners.

**Artifacts to collect:** incident reports, updated accuracy register, retrospective notes.

---

## 7. Wrap-Up & Next Steps (3:30 – 3:40)

- Celebrate wins and spotlight great validations.
- Assign homework packs (`course-website/homework/`).
- Schedule a follow-up to review adoption progress.

---

## Appendix

- **Prompt Blueprint:** `course-website/resources/prompt-clarity-blueprint.md`
- **Bias & Validation Checklist:** `course-website/resources/bias-validation-checklist.md`
- **Hallucination Playbook:** `course-website/resources/hallucination-response-playbook.md`
- **Accuracy Register Template:** `course-website/governance/accuracy-register-template.csv`

Keep iterating on this guide as your organisation learns more about GenAI-enabled analysis.
