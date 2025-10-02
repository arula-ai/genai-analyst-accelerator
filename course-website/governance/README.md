# GenAI Governance & Accuracy Playbook

This playbook underpins Module 5. It describes how to capture evidence, escalate incidents, and keep stakeholders informed when GenAI assists analytical work.

---

## 1. Operating Principles

1. **Synthetic-first inputs** – Use training datasets or masked values unless legal/compliance signs off.
2. **Humans stay in the loop** – Every deliverable receives human review before sharing outside the team.
3. **Evidence or it didn’t happen** – Validation proof lives alongside the artifact.
4. **Escalate bias early** – If a prompt could influence regulated decisions (credit, lending, pricing), pause and escalate.

---

## 2. Accuracy Register Workflow

1. Open the accuracy register template displayed on this page and store a copy in your governance workspace.
2. For each artifact, log:
   - Module, artifact type, owner
   - Prompt path and version
   - Evidence links (queries, screenshots, logs)
   - Reviewer(s), decision, and notes
   - Follow-up actions with due dates
3. Review the register during weekly stand-ups or retros.

**Facilitator Tip:** Assign a rotating "accuracy captain" during the lab to keep entries current.

---

## 3. Validation Tiers

| Tier | When to Apply | Required Evidence |
| --- | --- | --- |
| Tier 1 | Drafts and internal pre-work | Reviewer initials, quick notes |
| Tier 2 | Artifacts shared with stakeholders | Validation logs, screenshots, approval emails |
| Tier 3 | Regulated or production-bound artifacts | Test results, approvals from risk/compliance, rollback plan |

---

## 4. Hallucination Response

Follow the workflow in the Hallucination Response Playbook panel on this page:

1. **Detect** – Use the bias checklist prompts to spot inconsistencies.
2. **Capture** – Store evidence (prompt, output, screenshot) in the incident log.
3. **Assess** – Score severity and potential impact.
4. **Respond** – Retry, replace, or escalate as appropriate.
5. **Retrospective** – Update training materials and prompts with lessons learned.

Maintain an incidents archive inside your governance workspace to store artefacts for audit readiness.

---

## 5. Approval Matrix

| Artifact | Minimum Reviewers | Approver |
| --- | --- | --- |
| Dataset summaries & SQL | Analyst + SME | Data lead |
| Executive narratives | Analyst + product owner | VP or director |
| Legacy modernization plan | Analyst + engineer + risk partner | Modernization steering committee |
| Automation scripts | Analyst + operations lead | Automation product owner |

> Customize the matrix for your organisation after the pilot. The default keeps critical stakeholders in the loop.

---

## 6. Artifacts to Store

- Accuracy register (living document)
- Validation logs (SQL, Excel, Python)
- Change-control log for modernization work
- Automation review scorecards
- Incident reports and remediation notes
- Final approvals or sign-off emails

Store these in a version-controlled space (SharePoint, Confluence, Git) with restricted access where necessary.

---

## 7. Governance Retro Questions

After each sprint or release, ask:

1. Did we capture enough evidence to make audits painless?
2. Where did validation slow us down? Can we automate parts safely?
3. Were any escalations surprising? Do we need clearer red lines?
4. Which prompts or templates should be retired or refreshed?

Document answers and feed them into the next cohort’s launch kit.

---

## 8. Contacts & Escalation Path

| Topic | Primary Contact | Backup |
| --- | --- | --- |
| Data Quality / Accuracy | Data Excellence Lead | BI Manager |
| Regulatory or Privacy | Risk & Compliance Partner | Legal Counsel |
| Legacy Modernization | Modernization Architect | Application Owner |
| Automation Reliability | Automation Product Owner | Operations Manager |

Keep this table updated in your local copy. Replace placeholder names once your organization assigns roles.

---

GenAI governance evolves alongside your tooling. Treat this playbook as the baseline and iterate as you collect real-world lessons.
