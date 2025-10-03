# Module 5 · Governance & Accuracy Fundamentals

## Module Overview
- Build a repeatable accuracy program that catches hallucinations before they reach stakeholders.
- Practice logging incidents, collecting validation evidence, and escalating to risk/compliance partners using synthetic examples.
- Use the shared register, report template, and incident archive to keep every decision auditable.

## Action Steps
1. **Log the suspected issue in the accuracy register**
   - Inputs: AI-generated artifact under review (SQL, narrative, code), `registers/accuracy-register.csv`, severity definitions from your governance playbook.
   - Capture module, artifact, owner, severity, and evidence link before moving to deeper investigation.

2. **Complete the hallucination incident report**
   - Inputs: entry created in Step 1, validation artifacts (screenshots, query IDs), `templates/hallucination-report.md` structure.
   - Document what happened, business impact, validation checks performed, and recommended decision.

3. **Escalate and archive the incident**
   - Inputs: signed report from Step 2, escalation contact list, `incidents/` folder for storage.
   - Share the report with risk/compliance, record reviewer decision, and store the final markdown file under `incidents/` with a timestamped filename.

## Solutions
1. **Register entry solution**
   ```csv
   Module,Artifact,Owner,Severity,Evidence Link,Reviewer,Decision,Follow-up,Due Date
   M5,Weekly SQL Refresh,A. Gomez,High,links/weekly-sql-checks.md,R. Chen,Escalate,Confirm row-level security,2024-08-12
   ```
   - Save the updated CSV in `registers/accuracy-register.csv` so reviewers can track status.

2. **Hallucination report solution**
   ```markdown
   # Hallucination Incident Report
   - Artifact: Weekly SQL Refresh
   - Module: M5
   - Prompt link: prompts/sql-refresh.md
   - Severity: High

   ## What Happened
   AI-generated SQL removed the region filter and exposed EMEA customer data.

   ## Impact if Shipped
   Breach of regional access policy; potential GDPR violation and regulatory fines.

   ## Validation Evidence
   - Re-ran query with expected filter; diff shows 2,314 unauthorized rows.
   - Screenshot: BI dashboard highlighting unexpected EMEA entries.

   ## Decision & Next Steps
   Decision: Escalate to risk. Remediate by reinstating regional filter and adding unit test.

   ## Approvals
   - Name: R. Chen
   - Role: Risk Manager
   - Date: 2024-08-09
   ```

3. **Escalation archive solution**
   ```text
   - Email risk@company.example with subject "High Severity SQL Hallucination – Weekly Refresh" and attach the completed report.
   - Save the signed markdown as `incidents/2024-08-weekly-sql.md`.
   - Update the accuracy register decision column to "Escalate" with the risk owner's name.
   ```
