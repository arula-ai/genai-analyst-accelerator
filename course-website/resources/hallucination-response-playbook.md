# Hallucination Response Playbook

Module 5 uses this playbook to drill incident response when GenAI fabricates facts, skips validation, or suggests risky changes.

---

## 1. Detection Signals

Watch for:

- Metrics that appear outside allowed ranges or with novel units.
- SQL that references tables/views you never provided.
- Narratives that infer strategy, regulation, or sentiment not present in the source data.
- Legacy code explanations that invent programs, datasets, or job steps.

**Prompt:**
```
Audit the response above. Highlight statements that cannot be traced to the provided inputs or metadata. Explain why they are suspect.
```

---

## 2. Severity Scoring

| Level | Definition | Example Response |
| --- | --- | --- |
| Low | Cosmetic issues, typos, missing headings | Fix in-line, note in register |
| Medium | Misstated metrics, partial SQL errors, missing validation | Re-prompt, run validation again, capture issue |
| High | Fabricated data, risky automation, regulatory implications | Escalate immediately, pause delivery |

Log severity in the accuracy register and select an action plan.

---

## 3. Response Workflow

1. **Pause & Capture** – Take a screenshot or copy of the offending output. Note prompt version and timestamp.
2. **Identify Impact** – Determine which stakeholders or systems would be affected if the output shipped.
3. **Select Action**
   - Re-prompt with tighter instructions
   - Switch to manual method
   - Escalate to risk/compliance leadership
4. **Remediate** – Apply the corrective action and collect evidence (queries, test results, reviewer notes).
5. **Close Out** – Update the accuracy register and send a recap to stakeholders.

---

## 4. Escalation Message Template

```
Subject: [Severity Level] Hallucination detected in [Module/Artifact]

What happened: [Brief description]
Impact if shipped: [Business / regulatory impact]
Action taken: [Paused delivery, re-prompted, switched to manual]
Evidence: [Links or attachments]
Support needed: [Approval, additional review, decision]

- [Your Name]
```

Use this template when looping in governance partners.

---

## 5. Accuracy Register Update Fields

- Incident ID (timestamp + artifact)
- Prompt version / tool used
- Severity and impact summary
- Remediation outcome (accepted, revised, rejected)
- Follow-up owner and due date

---

## 6. Retrospective Questions

After closing an incident, ask:

- Could the prompt have exposed more context or guardrails up front?
- Did validation steps catch the issue quickly, or was manual review required?
- Should we add automated checks or monitoring for similar tasks?
- Do we need to adjust training, governance docs, or tooling access?

Answer these questions in the retrospect section of the accuracy register so the next cohort benefits from the learning.
