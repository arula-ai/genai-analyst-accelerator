# Verify-Before-Commit Checklist

## Purpose

This checklist ensures that all Copilot-generated requirements artifacts meet quality, compliance, and security standards before you commit them to your repository or backlog.

**Use this checklist:** Every time you're about to commit user stories, acceptance criteria, process documentation, or any other artifact generated with Copilot assistance.

---

## The Checklist

Before committing any Copilot-generated content, verify:

### ✅ Requirements Quality

- [ ] **Does this story pass INVEST criteria?**
  - Independent: Can be developed without depending on other stories
  - Negotiable: Describes WHAT, not HOW
  - Valuable: Clear business value articulated
  - Estimable: Team can size the effort
  - Small: Completable within one sprint
  - Testable: Has clear success criteria

- [ ] **Are acceptance criteria testable and unambiguous?**
  - Each criterion has clear pass/fail conditions
  - No vague terms like "fast," "user-friendly," "appropriate"
  - Specific data examples included where relevant
  - Uses Given/When/Then format (for behavioral scenarios)

- [ ] **Have I included negative/edge cases?**
  - Not just happy path scenarios
  - Error conditions documented
  - Boundary cases identified
  - "What if" scenarios considered

### ✅ Traceability & Documentation

- [ ] **Is traceability documented (source → story → test)?**
  - Source meeting/policy document referenced
  - Link to parent epic or requirement ID
  - Related stories/issues linked
  - Acceptance criteria mapped to source requirements

- [ ] **Have I added rationale for decisions made?**
  - Why this approach was chosen
  - Alternatives considered
  - Assumptions documented
  - Open questions noted

- [ ] **Have I cited sources in commit messages?**
  - Meeting date and attendees
  - Policy document name and version
  - Requirement ID from backlog
  - "Generated with GitHub Copilot" notation

### ✅ Security & Compliance

- [ ] **Have I removed any PII or sensitive data?**
  - No real customer names
  - No actual account numbers
  - No real SSNs or government IDs
  - No production system URLs or IPs
  - No internal credentials or keys
  - Only synthetic/example data used

- [ ] **Does this align with our Definition of Ready?**
  - Story format correct
  - All required sections completed
  - Dependencies identified
  - SME review obtained (if required)
  - No blocking unknowns

- [ ] **Are compliance requirements identified?**
  - Regulatory requirements flagged (e.g., FINRA, HIPAA)
  - Audit trail considerations documented
  - Data privacy/PII handling noted
  - Security requirements specified

### ✅ Technical Accuracy

- [ ] **Have I validated technical feasibility?**
  - Integration points identified
  - External dependencies documented
  - Performance requirements realistic
  - Technical constraints acknowledged

- [ ] **Are NFRs (Non-Functional Requirements) documented?**
  - Performance: Response times, throughput, SLAs
  - Security: Authentication, authorization, encryption
  - Compliance: Regulatory requirements, audit logs
  - Accessibility: WCAG standards, assistive technology support

---

## Detailed Guidance

### INVEST Criteria Deep Dive

**Independent:**
- Story can be developed in any order
- Doesn't have hard dependencies on other stories
- If dependencies exist, they're documented and minimal

❌ Bad: "US-002: Add password validation (depends on US-001 login form)"  
✅ Good: "US-002: Validate password strength on account creation form"

**Negotiable:**
- Describes the business need, not the solution
- Implementation details left to development team
- Room for technical design decisions

❌ Bad: "Use bcrypt with 12 rounds to hash passwords"  
✅ Good: "System securely stores passwords using industry-standard hashing"

**Valuable:**
- Clear benefit to user or business
- "So that" clause is specific and measurable
- Answers "why are we building this?"

❌ Bad: "So that the system works better"  
✅ Good: "So that customers can avoid overdraft fees and better manage cash flow"

**Estimable:**
- Team has enough information to size the work
- Technical approach is clear enough to estimate
- Major unknowns have been researched

**Small:**
- Can be completed in 1 sprint (typically 1-5 days)
- Single developer can complete it
- If too large, split into smaller stories

**Testable:**
- Acceptance criteria are specific and measurable
- Can objectively determine pass/fail
- QA/UAT can write test cases from the AC

### Testability Examples

❌ Vague: "System should be fast"  
✅ Testable: "System responds to user login request within 2 seconds"

❌ Vague: "Error messages should be user-friendly"  
✅ Testable: "Error message displays specific issue (e.g., 'Email format invalid') and corrective action (e.g., 'Use format: name@example.com')"

❌ Vague: "Works for all account types"  
✅ Testable: "Feature works for checking accounts, savings accounts, and joint accounts as defined in Account Type specification v2.1"

### Traceability Example

```markdown
**Source Documentation:**
- Meeting: Product Discovery Session, October 15, 2024
  - Attendees: Jane Doe (PM), Bob Smith (Dev Lead), Alice Anderson (Compliance)
- Policy: Customer Notification Policy v3.2, Section 4.1.2
- Parent Epic: #EPIC-042 - Automated Customer Alerts
- Related Stories: #US-023 (Alert preferences), #US-025 (Email delivery)

**Requirements Traceability:**
- REQ-104: "Customer must receive balance alerts within 60 seconds" (Policy 3.2)
- REQ-107: "Alerts cannot be sent between 9 PM and 8 AM per TCPA" (Compliance)
```

### Security & PII Guidelines

**Always Sanitize Before Including in Prompts:**

| Real Data (Never Use) | Synthetic Data (Safe) |
|------------------------|----------------------|
| John Smith, SSN 123-45-6789 | Customer A, Test ID: TST-123-456 |
| Account #987234567 | ACC-XXXX-1234 |
| jsmith@citibank.com | test.user@example.com |
| https://internal.company.com | https://example-system.internal |
| API key: sk_live_a8f7g6... | API key: [reference to key vault] |

**What To Do With Real Data:**
1. Extract the requirement (not the specific data)
2. Replace with synthetic examples
3. Use placeholders: [CUSTOMER_NAME], [ACCOUNT_ID]
4. Reference data sources generically: "per customer database"

### Commit Message Format

Every commit of Copilot-generated content should follow this format:

```
[Component] Brief description of change

Generated with GitHub Copilot from [source]
Reviewed by: [Your Name]
Rationale: [Why this change was made]

Source: [Specific source documentation]
Traceability: [Related epic/story/requirement IDs]

Verification:
- [ ] INVEST criteria met
- [ ] Testable acceptance criteria
- [ ] No PII included
- [ ] Compliance requirements identified
- [ ] Source attribution complete
```

**Example:**
```
[User Stories] Add automated balance alert stories

Generated with GitHub Copilot from stakeholder meeting 2024-10-15
Reviewed by: Alice Anderson
Rationale: Implementing customer notification feature per Q4 roadmap

Source: Product discovery session notes, Policy COP-2024-017 v3.2
Traceability: EPIC-042, REQ-104, REQ-107

Verification:
- [x] INVEST criteria met - all stories are independent and testable
- [x] Testable acceptance criteria - all use Given/When/Then format
- [x] No PII included - synthetic data only
- [x] Compliance requirements identified - TCPA restrictions documented
- [x] Source attribution complete - meeting and policy referenced
```

---

## Quick Self-Assessment

Use this 30-second assessment before committing:

### The "Three Question" Test

1. **Can a developer estimate this?**
   - If no: Add more detail, clarify unknowns

2. **Can QA test this objectively?**
   - If no: Make acceptance criteria more specific

3. **Is there any real data in here?**
   - If yes: Sanitize immediately, replace with synthetic data

### The "Read Aloud" Test

Read your story and acceptance criteria out loud to a colleague (or yourself).

- Does anything sound vague or ambiguous?
- Are there any terms that need definition?
- Could someone implement this in multiple very different ways?

If yes to any, refine before committing.

---

## What Happens If You Skip This Checklist?

**Possible consequences:**

1. **Quality Issues**
   - Stories are too vague to estimate
   - Acceptance criteria are untestable
   - Development builds wrong thing

2. **Security Incidents**
   - PII accidentally committed to repo
   - Sensitive internal details exposed
   - Compliance violations

3. **Traceability Problems**
   - Can't trace requirement to source
   - Impact analysis is impossible
   - Audit trail is incomplete

4. **Rework**
   - Stories get sent back in sprint planning
   - QA can't write test cases
   - Time wasted refining what should have been ready

**Bottom line:** 5 minutes with this checklist saves hours of rework and potential security incidents.

---

## Integration with Your Workflow

### When to Use This Checklist

**Use it before:**
- Committing to version control
- Creating GitHub Issues
- Adding stories to sprint backlog
- Presenting to stakeholders
- Handing off to development team

**Don't use it for:**
- Early drafts and brainstorming
- Scratch notes and personal files
- Internal exploration (my-*.md files in .gitignore)

### Making It a Habit

**Option 1: Pre-commit Hook**
- Add this checklist as a git pre-commit hook
- Forces verification before commits
- Technical setup required

**Option 2: Template**
- Include checklist in your story template
- Check boxes as you create artifacts
- Low-tech, easy to adopt

**Option 3: Peer Review**
- Exchange artifacts with colleague
- Review each other's work against checklist
- Builds team quality culture

---

## Additional Resources

- **INVEST Criteria:** [resources/prompt-pattern-guide.md](../resources/prompt-pattern-guide.md)
- **Gherkin Format:** [resources/gherkin-reference.md](../resources/gherkin-reference.md)
- **Security Guidelines:** [../SECURITY.md](../SECURITY.md)
- **Definition of Ready Template:** [../path-a-backlog/templates/definition-of-ready.md](../path-a-backlog/templates/definition-of-ready.md)

---

## Questions?

**Q: Do I really need to check every item every time?**  
A: For production artifacts: yes. For practice/training: focus on the critical items (PII, testability, sources).

**Q: What if I disagree with a checklist item?**  
A: Document your rationale. This checklist represents best practices, but context matters. Just be intentional.

**Q: Can I customize this checklist for my team?**  
A: Absolutely! This is a starting point. Add team-specific requirements, remove items that don't apply. Make it yours.

**Q: How do I handle stories that are intentionally exploratory?**  
A: Mark them as "Spike" stories. Different acceptance criteria apply (e.g., "Deliverable: Technical research document with recommendation"). Still need traceability and source attribution.

---

**Remember:** This checklist isn't about perfection. It's about intentionality. Think critically, document decisions, and never commit something you wouldn't want to defend in a sprint review or audit.

✅ Checklist complete? You're ready to commit with confidence!