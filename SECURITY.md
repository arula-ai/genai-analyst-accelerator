# Security & Governance Guidelines

## Overview

This training repository is designed to teach safe and compliant use of GitHub Copilot in a regulated environment. All participants must understand and follow these security guidelines when using AI-assisted tools for requirements documentation.

**Critical:** These guidelines apply both during training AND when you use Copilot on real work.

---

## Data Sanitization Requirements

### Never Include in Copilot Prompts

When working with Copilot, you must NEVER include:

- ❌ Real customer names
- ❌ Actual account numbers
- ❌ Real SSNs or government IDs (US or international)
- ❌ Actual email addresses (except @example.com test addresses)
- ❌ Real phone numbers
- ❌ Internal system credentials, passwords, or API keys
- ❌ Proprietary business logic or algorithms
- ❌ Production URLs, IPs, or internal hostnames
- ❌ Confidential project code names
- ❌ Sensitive financial data (real balances, transactions)
- ❌ Healthcare information (diagnoses, patient data)
- ❌ Any data subject to NDA or confidentiality agreements

**Why:** Copilot uses your inputs to improve its model. While your organization's data is protected under Enterprise agreements, it's safest to never include real PII or sensitive data.

### Always Use Synthetic Data

Instead of real data, use obviously synthetic examples:

| Category | Don't Use | Use Instead |
|----------|-----------|-------------|
| Names | John Smith, Maria Garcia | Customer A, Alice Anderson, Bob Baker |
| SSN | 987-65-4321 | 123-45-6789 (test SSN), SSN-TEST-001 |
| Account Numbers | 9876543210 | ACC-XXXX-1234, ACCT-TEST-001 |
| Email | jsmith@yourcompany.com | test.user@example.com, alice@test.local |
| Phone | 555-0123 (if real) | 555-0100, +1-555-TEST |
| Dates | October 15, 2024 (if sensitive) | October 15, 2023, YYYY-MM-DD |
| Amounts | $45,782.19 (if real) | $1,000.00, $X,XXX.XX |
| Addresses | Real street addresses | 123 Main St, City, ST 12345 |
| System Names | internal-prod-api-01.company.com | example-system.internal, api-server-1 |

**Synthetic Data Guidelines:**
- Make it obviously fake but realistic enough to work with
- Use placeholder patterns: ACC-XXXX-####, TST-###
- Reference "test accounts," "sample data," "example scenario"
- Use domains: example.com, test.local, placeholder.org

---

## Public Code Filter

### What It Does

The Public Code Filter prevents GitHub Copilot from suggesting code that matches publicly available code on GitHub. This reduces:
- **License risk:** Avoiding GPL or incompatible licenses
- **IP risk:** Not inadvertently copying proprietary patterns
- **Security risk:** Preventing known vulnerable code patterns

**Status:** REQUIRED for all users in regulated environments

### How to Enable

**VS Code:**
1. Settings → Extensions → GitHub Copilot
2. Find: "Enable Public Code Filter" or "Duplication Detection"
3. Check the box

**JetBrains:**
1. Settings → Tools → GitHub Copilot
2. Find: "Enable public code filter"
3. Check the box

**Verification:**
- Some versions show "Filter: On" in status bar
- If you can't find this setting, it may be enabled at organization level
- Check with your Copilot admin

### Organization-Level Enforcement

Your organization may:
- Enable this filter for all users by default
- Prevent users from disabling it
- Monitor compliance through admin dashboards

**If you're unsure:** Ask your Copilot Program Office or IT admin to confirm your organization's policy.

---

## Traceability & Audit Requirements

### Why Traceability Matters

In regulated industries and for audit purposes, you must be able to prove:
1. Where requirements came from (meeting, policy, stakeholder)
2. How they were transformed (manual vs. AI-assisted)
3. Who reviewed and approved them
4. What decisions were made and why

### Commit Message Standards

Every commit containing Copilot-generated content must include:

```
[Component] Brief description

Generated with GitHub Copilot from [source]
Reviewed by: [Your Name]
Rationale: [Why this change was made]

Source: [Meeting/policy/requirement reference]
Traceability: [Parent epic, related stories, requirement IDs]
```

**Example:**
```
[Stories] Add automated alert user stories

Generated with GitHub Copilot from stakeholder notes
Reviewed by: Alice Anderson, Business Analyst
Rationale: Implementing Q4 customer notification feature per roadmap

Source: Product discovery session, Oct 15 2024 (Jane D., Bob S., Alice A.)
Source: Customer Notification Policy v3.2, Section 4.1
Traceability: EPIC-042, REQ-104, REQ-107
```

### Source Attribution in Artifacts

Within user stories and requirements documents, always cite sources:

```markdown
**Source Documentation:**
- Meeting: Product Discovery, October 15, 2024
  - Attendees: Jane Doe (PM), Bob Smith (Dev), Alice Anderson (BA)
- Policy: Customer Onboarding Policy COP-2024-017 v2.1, Section 3.2
- Parent Epic: #EPIC-042 - Automated Customer Alerts
- Related Requirements: REQ-104, REQ-107 from Q4 Roadmap
```

**Why this matters:**
- Enables impact analysis when requirements change
- Provides audit trail for compliance reviews
- Allows tracing decisions back to source
- Supports risk assessment and change management

---

## Verification Before Commit

### Mandatory Checklist

Before committing any Copilot-generated content to your repository or backlog:

- [ ] **PII Removed:** All real customer, employee, or sensitive data replaced with synthetic data
- [ ] **Source Attribution:** Meeting/policy/requirement source cited
- [ ] **Professional Review:** Content reviewed by you for accuracy and completeness
- [ ] **Compliance Requirements:** Regulatory needs identified (SEC, FINRA, HIPAA, etc.)
- [ ] **Technical Accuracy:** Implementation is feasible, dependencies identified
- [ ] **Production Systems:** No internal URLs, IPs, or system details exposed
- [ ] **Commit Message:** Includes rationale, source, and "Generated with GitHub Copilot"
- [ ] **Quality Standards:** INVEST criteria met (for stories), acceptance criteria testable

**Full checklist:** [setup/verify-before-commit-checklist.md](setup/verify-before-commit-checklist.md)

### Self-Assessment Questions

Before committing, ask yourself:

1. **Would I be comfortable presenting this in an audit?**
2. **Have I removed anything that could identify real people or systems?**
3. **Can I trace this artifact back to its source?**
4. **Have I documented my decisions and assumptions?**
5. **Would a peer reviewer approve this?**

If you answer "no" to any question, revise before committing.

---

## Incident Response

### If Sensitive Data Is Accidentally Committed

If you realize you've committed PII or sensitive data:

1. **DO NOT push to remote** (if still local)
2. **Stop immediately** and do not make additional changes
3. **Notify your manager** and security team immediately
4. **Document the incident:**
   - What data was included
   - When it was committed
   - Whether it was pushed to remote
   - Who might have access
5. **Follow your organization's incident response procedure**
6. **Remediation may include:**
   - Removing from git history
   - Rotating exposed credentials
   - Notifying affected parties
   - Incident report filing

**Better yet:** Prevent this by always sanitizing inputs before using Copilot.

### If You Notice Issues in Copilot Suggestions

If Copilot suggests content that concerns you:

**During training:**
- Do not use the suggestion
- Report to training facilitator
- Document what you saw (without including the sensitive data!)

**At work:**
- Do not use the suggestion
- Report to your Copilot Program Office or security team
- If it's an API key or credential, report immediately to InfoSec

**Examples of concerning suggestions:**
- Real-looking PII (names, addresses, SSNs)
- Production system details (internal URLs, IPs)
- Credentials or API keys
- Proprietary algorithm details
- Confidential information

---

## Compliance Considerations

### For Regulated Industries

If you work in a regulated industry, additional requirements may apply:

**Financial Services (SEC, FINRA, FDIC, OCC):**
- Enhanced review of all AI-generated content
- Mandatory human review before use in production
- Retention of source materials and rationale
- Audit trail for all requirements changes
- Compliance sign-off for customer-facing features

**Healthcare (HIPAA, FDA):**
- No PHI (Protected Health Information) in prompts
- Additional documentation for audit purposes
- Validation of AI-generated clinical workflows
- Risk assessment for patient-facing features

**Government (FedRAMP, FISMA, ITAR):**
- Restricted use cases (check with compliance)
- Additional security controls
- Audit logging requirements
- Export control considerations (ITAR)

**General Data Protection (GDPR, CCPA):**
- No personal data in prompts
- Right to deletion considerations
- Privacy impact assessments
- Data processing agreements

### Check With Your Compliance Team

Before using Copilot for:
- Customer-facing content or features
- Regulatory filings or reports
- Privacy policies or terms of service
- Security-critical systems
- Healthcare or financial transactions
- Any system handling PII or sensitive data

**Ask your compliance team:**
1. Are there use case restrictions?
2. What additional reviews are required?
3. What documentation must be maintained?
4. Are there specific prompts or patterns to avoid?

---

## License Compliance

### Understanding Public Code Filter Limitations

Even with Public Code Filter enabled:
- Copilot may still suggest patterns similar to public code
- You are responsible for reviewing suggestions
- License compatibility is still your responsibility

**Best practices:**
- Review all suggested code for potential license issues
- If a suggestion appears to be from a specific library/framework, verify license
- When in doubt, consult your legal/compliance team
- Document decisions: "Chose this approach because..."

### Attribution When Needed

If Copilot suggests code that appears to be from a specific framework or library:

```markdown
**Attribution:**
- Pattern based on [Framework Name] documentation
- License: [License Type, e.g., MIT, Apache 2.0]
- Source: [URL if applicable]
- Modifications: [How we adapted it]
```

**When to attribute:**
- Suggestion clearly matches a known framework
- Pattern is distinctive enough to identify source
- License requires attribution
- You want to document for future reference

---

## Best Practices for Safe Copilot Use

### 1. Treat Copilot as an Assistant, Not an Authority

**Remember:**
- Copilot is a tool, not a decision-maker
- You own the quality and compliance of all outputs
- Your professional judgment always trumps Copilot's suggestions
- Verify technical accuracy and business fit

**Don't:**
- Blindly accept suggestions without review
- Use Copilot-generated content for final decisions
- Replace subject matter expert consultation
- Skip validation steps

### 2. Limit Context Window

**Don't paste entire documents** with potentially sensitive information.

**Instead:**
- Sanitize before providing to Copilot
- Use excerpts and summaries
- Remove sensitive sections
- Use placeholders: [CUSTOMER_NAME], [SYSTEM_ID]

**Example:**

❌ Bad:
```
Here are the meeting notes:
[Paste 10 pages including customer names, account numbers, internal system details]
```

✅ Good:
```
Here's a summary of stakeholder needs:
- Customers want low-balance alerts
- Must comply with TCPA notification rules
- Integration with existing notification service
- Threshold customizable by customer
```

### 3. Progressive Disclosure

**Start high-level, add detail incrementally:**

1. First: "Create a user story outline for customer alerts"
2. Then: "Add acceptance criteria for the alert threshold story"
3. Finally: "Add negative scenarios for invalid threshold values"

**Why:** Limits exposure of sensitive context, gives you control over detail level.

### 4. Regular Review Cadence

Don't work in isolation. Build in checkpoints:

**Daily:** Self-review against checklist  
**Weekly:** Peer review of Copilot-generated artifacts  
**Sprint:** SME validation for technical accuracy  
**Release:** Compliance review for regulated content

### 5. Document Your Prompts

Keep a "prompt library" of what works:

```markdown
# My Prompt Library

## User Story Generation
Prompt that works well:
"You are a business analyst in financial services. Create a user story for [capability]. Use INVEST format. Include 3 acceptance criteria in Given/When/Then format. Flag any compliance requirements."

Lessons learned:
- Always specify industry context (financial services)
- Request specific format (INVEST, Given/When/Then)
- Ask for compliance considerations

## Critique & Refinement
...
```

**Benefits:**
- Faster over time (reuse proven prompts)
- Team can share best practices
- Training new team members easier

---

## What Copilot Is and Isn't Appropriate For

### ✅ Good Uses of Copilot

- Drafting user stories from sanitized meeting notes
- Generating acceptance criteria templates
- Creating process flowcharts from policy documents
- Expanding abbreviations and incomplete requirements
- Suggesting negative/edge case scenarios
- Formatting and structuring documentation
- Generating traceability matrix templates
- Creating test case outlines
- Checking requirements against INVEST criteria
- Suggesting improvements to vague requirements

### ❌ Inappropriate Uses

- Processing real PII or confidential data
- Making final decisions without human review
- Replacing subject matter expert consultation
- Generating content you don't understand
- Creating compliance-critical content without review
- Accessing or querying production systems
- Handling credentials or secrets
- Processing legally privileged information
- Creating binding commitments (contracts, SLAs)

**Rule of thumb:** Use Copilot to accelerate drafting and analysis, never to replace professional judgment or SME expertise.

---

## Organizational Policies

### Your Organization's Copilot Program

Most organizations using Copilot Business/Enterprise have:
- **Copilot Program Office** - Governance and best practices
- **Usage Policies** - What's allowed and what's not
- **Security Team** - Monitoring and incident response
- **Admin Dashboard** - Tracking usage and compliance

**Know your contacts:**
- Who is your Copilot Program Office lead?
- Who handles security incidents?
- Where do you report issues or concerns?
- What are your organization's specific policies?

### Ongoing Training and Updates

Copilot capabilities and best practices evolve:
- Attend organization training sessions
- Read updates from Copilot Program Office
- Join internal Copilot community/Slack
- Share lessons learned with your team

---

## Getting Help

### During Training

**Questions about:**
- Setup or technical issues → Ask facilitator
- Copilot behavior → Check [resources/copilot-troubleshooting.md](resources/copilot-troubleshooting.md)
- Security concerns → Review this document, ask facilitator

### After Training

**Who to contact:**

| Issue Type | Contact |
|------------|---------|
| Copilot not working | IT Support or Copilot Admin |
| License issues | GitHub org admin |
| Security incident | InfoSec / Security Team |
| Compliance questions | Compliance Team |
| Best practices | Copilot Program Office |
| Training | Training coordinator |

---

## Summary: The Golden Rules

1. **Never include real PII** - Always sanitize first
2. **Enable Public Code Filter** - Required for regulated work
3. **Verify before committing** - Use the checklist every time
4. **Document sources and rationale** - Traceability is critical
5. **Apply professional judgment** - You own quality, not Copilot
6. **When in doubt, ask** - Better to ask than create a security incident

---

**Remember:** These guidelines protect you, your organization, and your customers. Following them ensures you can use Copilot confidently and safely.

Questions about security or compliance? Contact your Copilot Program Office or security team before proceeding.