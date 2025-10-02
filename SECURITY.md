# Governance & Accuracy Guidelines

These guardrails apply to every exercise in the GenAI Analyst Accelerator and when you adopt GenAI on live work.

## 1. Synthetic-First Inputs

- Use the provided synthetic datasets or anonymise your own data before prompting.
- Never include customer, employee, or financial records without legal/compliance approval.
- If a stakeholder requests real data, pause and escalate to the governance team.

## 2. Evidence or It Didn’t Happen

Every artifact must have:

- Prompt link or transcript
- Validation evidence (query outputs, screenshots, test logs)
- Reviewer initials, decision (accept/revise/reject), and date
- Follow-up actions with owners and due dates

Log everything using the accuracy register template in `course-website/governance/accuracy-register-template.csv`.

## 3. Validation Tiers

| Tier | When to Use | Required Evidence |
| --- | --- | --- |
| Tier 1 | Drafts, internal use only | Reviewer initials, quick sanity notes |
| Tier 2 | Stakeholder-facing deliverables | Validation log, fact-check table, reviewer approval |
| Tier 3 | Regulated / production-bound artifacts | Tests or reruns, risk review, rollback plan, leadership approval |

## 4. Hallucination Response

Follow the workflow in `course-website/resources/hallucination-response-playbook.md`:

1. Detect – Spot fabricated facts, risky instructions, or missing validation.
2. Capture – Save the prompt, output, and evidence in an incident report.
3. Assess – Score severity and potential impact.
4. Respond – Retry with tighter constraints, escalate, or revert to manual.
5. Retrospective – Record improvements and update training materials.

## 5. Approval Matrix

| Artifact | Minimum Reviewers | Final Approver |
| --- | --- | --- |
| Dataset summaries & SQL | Analyst + SME | Data lead |
| Executive narratives | Analyst + product owner | Senior leader |
| Modernization plan | Analyst + engineer + risk partner | Modernization steering committee |
| Automation scripts | Analyst + operations lead | Automation product owner |

## 6. Escalation Path

| Issue Type | Primary Contact | Backup |
| --- | --- | --- |
| Data privacy question | Risk & Compliance Partner | Legal Counsel |
| Accuracy failure | Data Excellence Lead | BI Manager |
| Legacy modernization risk | Modernization Architect | Application Owner |
| Automation incident | Automation Product Owner | Operations Manager |

Update the contact list with real names before running the accelerator.

## 7. Post-Lab Expectations

- Complete at least one homework assignment per module touched during the lab.
- Migrate reusable prompts and checklists into your knowledge base.
- Host a follow-up governance review to monitor adoption and incident trends.

These guidelines evolve with your GenAI program—treat them as a baseline to iterate on.
