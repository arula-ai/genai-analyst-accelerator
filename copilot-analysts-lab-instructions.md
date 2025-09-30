# Claude Code Instructions: GitHub Copilot for Business & Systems Analysts - Lab Repository

## Project Overview
Create a comprehensive lab repository for the GitHub Copilot training session specifically designed for Business Analysts, Systems Analysts, Product Owners, and QA/UAT leads. This is a single 75-minute session focused on using GitHub Copilot to transform raw inputs into well-formed requirements artifacts.

## Repository Structure

```
copilot-analysts-lab/
├── README.md
├── .gitignore
├── SECURITY.md
├── lab-guide.md
├── setup/
│   ├── prerequisites.md
│   ├── copilot-setup.md
│   └── verify-before-commit-checklist.md
├── path-a-backlog/
│   ├── README.md
│   ├── inputs/
│   │   └── stakeholder-notes.md
│   ├── templates/
│   │   ├── user-story-template.md
│   │   ├── epic-template.md
│   │   ├── github-issue-template.md
│   │   ├── invest-checklist.md
│   │   └── definition-of-ready.md
│   ├── prompts/
│   │   ├── 01-epic-generation-prompts.md
│   │   ├── 02-story-splitting-prompts.md
│   │   ├── 03-gherkin-prompts.md
│   │   └── 04-issue-creation-prompts.md
│   ├── exercises/
│   │   ├── exercise-1-epics-and-stories.md
│   │   ├── exercise-2-acceptance-criteria.md
│   │   └── exercise-3-github-issues.md
│   └── solutions/
│       ├── sample-epics.md
│       ├── sample-stories-with-invest.md
│       ├── sample-gherkin-scenarios.md
│       └── sample-github-issues.md
├── path-b-process-data/
│   ├── README.md
│   ├── inputs/
│   │   └── onboarding-policy.md
│   ├── templates/
│   │   ├── mermaid-flowchart-template.md
│   │   ├── openapi-contract-template.yaml
│   │   ├── uat-test-case-template.md
│   │   └── traceability-matrix-template.md
│   ├── prompts/
│   │   ├── 01-flowchart-generation-prompts.md
│   │   ├── 02-data-contract-prompts.md
│   │   └── 03-uat-traceability-prompts.md
│   ├── exercises/
│   │   ├── exercise-1-process-flow.md
│   │   ├── exercise-2-data-contracts.md
│   │   └── exercise-3-traceability-uat.md
│   └── solutions/
│       ├── sample-flowchart-basic.md
│       ├── sample-flowchart-swimlanes.md
│       ├── sample-data-contract.yaml
│       ├── sample-uat-scenarios.md
│       └── sample-traceability-matrix.md
├── homework/
│   ├── README.md
│   ├── critique-prompts.md
│   ├── rtm-exercise.md
│   └── dor-dod-exercise.md
└── resources/
    ├── prompt-pattern-guide.md
    ├── gherkin-reference.md
    ├── mermaid-reference.md
    ├── openapi-basics.md
    └── copilot-troubleshooting.md
```

## Detailed Requirements

### 1. Root README.md (500-700 words)

Create a welcoming README that includes:

#### Header Section
- Title: "GitHub Copilot for Business & Systems Analysts - Hands-On Lab"
- Brief description of the training session
- Learning objectives (the 4 outcomes from the agenda)
- Target audience
- Session duration: 75 minutes total, 40 minutes hands-on

#### Quick Start
- Prerequisites checklist
- Setup verification steps
- How to choose your path (A or B)
- Estimated time for each path

#### Repository Navigation
- Clear explanation of Path A vs Path B
- Link to detailed lab guide
- Link to prompt examples
- Link to solutions (with warning not to peek too early)

#### Session Structure
- 00-10: Why it matters (not in repo, presentation only)
- 10-25: Patterns & guardrails (reference materials in `/resources`)
- 25-65: Hands-on lab (this repository)
- 65-75: Debrief (peer review guidelines included)

#### Getting Help
- Troubleshooting link
- Common issues
- Where to ask questions

#### Post-Session
- Homework assignments
- Additional resources
- How to continue learning

### 2. Setup Files

#### setup/prerequisites.md
Clear checklist format:
```markdown
- [ ] GitHub Copilot Business/Enterprise license active
- [ ] VS Code or JetBrains IDE installed
- [ ] GitHub Copilot extension installed and enabled
- [ ] Access to training GitHub organization/repository
- [ ] Public Code Filter enabled
- [ ] Can create GitHub Issues in training project
- [ ] Markdown preview working in IDE
```

#### setup/copilot-setup.md (800-1000 words)
Step-by-step with:
- Installing Copilot extension
- Signing in and verifying license
- Enabling Public Code Filter (with screenshots description)
- Disabling external context providers
- Testing Copilot Chat
- Configuring settings for optimal analyst experience
- Verification test: "Ask Copilot to create a sample user story"

#### setup/verify-before-commit-checklist.md
The exact checklist from the agenda formatted as a reusable template:
```markdown
## Verify-Before-Commit Checklist

Before committing any Copilot-generated content, verify:

- [ ] Does this story pass INVEST criteria?
- [ ] Are acceptance criteria testable and unambiguous?
- [ ] Have I included negative/edge cases?
- [ ] Is traceability documented (source → story → test)?
- [ ] Have I removed any PII or sensitive data?
- [ ] Does this align with our Definition of Ready?
- [ ] Have I cited sources in commit messages?
- [ ] Have I added rationale for decisions made?
```

### 3. Path A: Backlog from Notes

#### path-a-backlog/inputs/stakeholder-notes.md (600-800 words)

Create realistic meeting notes for "Automated Account Alerts" feature with these characteristics:

**Context Setup (50-75 words)**
- Date: October 15, 2024
- Meeting: Product Discovery Session
- Attendees: Product Owner (Jane D.), Business Analyst (facilitating), Senior Dev Lead, Compliance Rep, UX Designer
- Topic: New automated alerts system for customer accounts

**Raw Notes with Intentional Issues**

Include all of these elements scattered naturally through the notes:

1. **Clear Requirements** (30%)
   - "Customers need real-time alerts when their account balance drops below $500"
   - "Alerts should be available via email, SMS, and push notification"
   - "User should be able to customize alert thresholds"

2. **Ambiguous Statements** (25%)
   - "Alerts need to be fast" (no specific SLA)
   - "Should work with all account types" (which types?)
   - "Need to handle high volume" (how much?)

3. **Buried Technical Constraints** (15%)
   - Casual mention: "Oh, and we can only call the notification service 100 times per minute"
   - "Has to integrate with the legacy core banking system via batch file"
   - "Mobile app team says they need 24-hour notice for push notification schema changes"

4. **Compliance Requirements** (15%)
   - "Compliance says this needs to follow FINRA Rule 4512 for customer notifications"
   - "Need audit trail for all alerts sent"
   - "Can't send alerts between 9 PM and 8 AM per TCPA"

5. **Implied Edge Cases** (10%)
   - "What if customer has multiple accounts?"
   - "Jane mentioned something about joint accounts being complicated"
   - "Overdrawn accounts... need to think about that"

6. **Business Value** (5%)
   - "Could reduce overdraft fees by 30% based on pilot"
   - "Customer retention play - competitors have this"

7. **Missing Information** (use phrases like)
   - "Need to follow up with..."
   - "TBD - waiting on..."
   - "Not sure about..."

**Format**: Use casual meeting note style with:
- Bullet points and incomplete sentences
- Some items with "[Jane]:" or "[Dev Lead]:" speaker tags
- A few action items mixed in
- Typos and informal language
- Abbreviations (e.g., "acct" for account, "notif" for notification)

#### path-a-backlog/templates/

**user-story-template.md**
```markdown
## User Story Template

### Story Format
As a [type of user]
I want [capability or feature]
So that [business value or benefit]

### Acceptance Criteria
**AC1:** [Criterion in testable format]
**AC2:** [Criterion in testable format]
**AC3:** [Criterion in testable format]

### Definition of Ready
- [ ] Dependencies identified
- [ ] Acceptance criteria defined
- [ ] Story sized and estimable
- [ ] No known blockers
- [ ] NFRs documented
- [ ] Testable

### Additional Sections
**Assumptions:**
- [List key assumptions]

**Dependencies:**
- [Technical dependencies]
- [External system dependencies]

**Risks:**
- [Identified risks to delivery]

**NFRs (Non-Functional Requirements):**
- Performance:
- Security:
- Compliance:
```

**epic-template.md**
```markdown
## Epic Template

### Epic Title
[Concise, business-focused title]

### Description
[2-3 sentences describing the high-level capability]

### Business Value
**Problem Statement:**
[What problem does this solve?]

**Expected Outcome:**
[What business value will this deliver?]

**Success Metrics:**
- [Measurable outcome 1]
- [Measurable outcome 2]

### Scope
**In Scope:**
- [Capability 1]
- [Capability 2]

**Out of Scope:**
- [What we're NOT building]

### Key Assumptions
- [Assumption 1]
- [Assumption 2]

### High-Level Stories
1. [Story theme 1]
2. [Story theme 2]
3. [Story theme 3]
```

**github-issue-template.md**
```markdown
## GitHub Issue Template

### Title Format
[US-###] [Brief story description]

Example: [US-001] Customer can set account balance alert threshold

---

### Issue Body

**User Story**
As a [role]
I want [capability]
So that [benefit]

**Acceptance Criteria**

```gherkin
Scenario: [Scenario name]
  Given [precondition]
  When [action]
  Then [expected outcome]
```

**Definition of Ready**
- [ ] Dependencies identified
- [ ] AC defined and testable
- [ ] Story sized
- [ ] No blockers
- [ ] SME review completed

**Source Documentation**
- Meeting: [date and attendees]
- Policy/Requirement: [document reference]
- Related Issue: #[issue number]

**Labels**
`feature` `needs-review` `sprint-backlog` `path-a`

**Assignees**
[To be assigned in sprint planning]

**Projects**
Training Project - Sprint 1
```

**invest-checklist.md**
```markdown
## INVEST Checklist for User Stories

Use this checklist to verify story quality before committing.

### ✓ Independent
- [ ] Story can be developed without depending on other stories
- [ ] Story can be prioritized and delivered separately
- [ ] If dependencies exist, they are clearly documented

### ✓ Negotiable
- [ ] Story describes WHAT, not HOW
- [ ] Implementation details are not prescribed
- [ ] Room for developer/team input on approach

### ✓ Valuable
- [ ] Clear business value articulated
- [ ] Benefit to end user or business is explicit
- [ ] Can answer "Why are we building this?"

### ✓ Estimable
- [ ] Team has enough information to estimate effort
- [ ] Unknowns are identified and minimal
- [ ] Technical feasibility is understood

### ✓ Small
- [ ] Can be completed within one sprint
- [ ] Doesn't require multiple team members working in parallel
- [ ] If too large, can be split into smaller stories

### ✓ Testable
- [ ] Acceptance criteria are clear and measurable
- [ ] Can be verified through testing
- [ ] Success/failure can be determined objectively

---

## Scoring Guide
- **5-6 checks:** Excellent - story is ready
- **3-4 checks:** Good - minor refinements needed
- **0-2 checks:** Needs work - significant revision required
```

**definition-of-ready.md**
```markdown
## Definition of Ready (DoR)

A user story is "ready" for sprint planning when:

### Requirements Clarity
- [ ] Story follows standard format (As a... I want... So that...)
- [ ] Business value is clearly articulated
- [ ] Story meets INVEST criteria

### Acceptance Criteria
- [ ] At least 2-3 testable acceptance criteria defined
- [ ] Positive (happy path) scenarios documented
- [ ] Negative/edge case scenarios identified
- [ ] Criteria use Given/When/Then format where appropriate

### Dependencies & Constraints
- [ ] Technical dependencies identified
- [ ] External system dependencies documented
- [ ] No blocking dependencies on other teams
- [ ] Timeline constraints noted

### Non-Functional Requirements
- [ ] Performance requirements specified (if applicable)
- [ ] Security requirements identified (if applicable)
- [ ] Compliance requirements documented (if applicable)
- [ ] Accessibility requirements noted (if applicable)

### Artifacts & Traceability
- [ ] Source documentation linked (meeting notes, policy docs)
- [ ] Related stories/epics referenced
- [ ] Mockups/wireframes attached (if UI work)

### Team Readiness
- [ ] Story has been reviewed by product owner
- [ ] SME input obtained (if needed)
- [ ] Story is estimable by the team
- [ ] No major unknowns or questions

### Compliance (for regulated environments)
- [ ] Regulatory requirements identified
- [ ] Audit trail considerations documented
- [ ] Data privacy/PII considerations noted

---

**Note:** Not all items apply to every story. Use judgment, but ensure core items (Requirements, AC, Dependencies) are always complete.
```

#### path-a-backlog/prompts/

Create 4 detailed prompt guide files:

**01-epic-generation-prompts.md** (800-1000 words)

Structure:
```markdown
# Epic Generation Prompts

## Overview
This guide provides prompt templates for using GitHub Copilot to generate well-formed epics from stakeholder notes.

## The Five-Part Prompt Pattern
Every effective prompt includes:
1. **Role:** Tell Copilot what role to assume
2. **Inputs:** Provide the source material
3. **Format:** Specify the desired output structure
4. **Constraints:** Add requirements and boundaries
5. **Examples:** Show what good looks like

---

## Prompt 1: Initial Epic Generation

### When to Use
Use this prompt after reading stakeholder notes to identify 2-3 high-level capabilities.

### The Prompt
```
You are a senior business analyst in a regulated financial services environment.

Review these stakeholder notes from our product discovery session:
[PASTE SANITIZED NOTES FROM stakeholder-notes.md]

Generate 2-3 epics that capture the high-level business capabilities.

For each epic, provide:
- Epic Title: [Concise, business-focused]
- Description: [2-3 sentences]
- Business Value: [Problem being solved + expected outcome]
- Key Assumptions: [2-3 assumptions that need validation]
- High-level story themes: [3-5 story areas]

Constraints:
- Each epic should represent 2-4 weeks of work
- Focus on customer-facing capabilities
- Flag any compliance requirements
- Identify dependencies on external systems
```

### Expected Output
[Describe what Copilot should generate]

### Tips
- If output is too vague, add: "Be specific about the capabilities included"
- If missing business value, add: "Include measurable business outcomes"
- If too technical, add: "Focus on WHAT we're building, not HOW"

---

## Prompt 2: Refining an Epic

### When to Use
After generating initial epics, use this to add detail and catch gaps.

### The Prompt
```
Review this epic for completeness:

[PASTE EPIC]

Identify:
1. Any ambiguous terms that need definition
2. Missing non-functional requirements (performance, security, compliance)
3. Unstated assumptions
4. Potential risks to delivery
5. Questions that need SME input

Provide specific recommendations for improvement.
```

### Expected Output
[Describe what Copilot should generate]

---

## Prompt 3: Epic Splitting

### When to Use
When an epic seems too large or complex.

### The Prompt
```
This epic seems too large:

[PASTE EPIC]

Suggest how to split this into 2-3 smaller epics that:
- Each deliver independent value
- Can be prioritized separately
- Have clear boundaries
- Together cover the original scope

For each split epic, provide title and description.
```

---

[Continue with 2-3 more prompt examples]

## Common Pitfalls

### Pitfall 1: Too Much Detail Too Soon
**Problem:** Epics with implementation details
**Solution:** Add to prompt: "Focus on WHAT, not HOW. No implementation details."

### Pitfall 2: Missing Compliance
**Problem:** Overlooking regulatory requirements
**Solution:** Add: "This is for a regulated financial environment. Flag any compliance considerations."

### Pitfall 3: Weak Business Value
**Problem:** Generic value statements
**Solution:** Add: "Include specific, measurable business outcomes."

## Practice Exercise

Try generating epics from these abbreviated notes:
[Provide 3-4 sentences of sample notes]

Use Prompt 1, then refine with Prompt 2.

Compare your results with solutions/sample-epics.md
```

**02-story-splitting-prompts.md** (1000-1200 words)

Include:
- Prompts for splitting epics into stories
- Prompts for enforcing INVEST criteria
- Prompts for identifying risks and dependencies
- Prompts for adding non-functional requirements
- Examples with before/after
- Common mistakes and how to fix them
- 5-7 complete prompt examples

**03-gherkin-prompts.md** (1000-1200 words)

Include:
- Gherkin syntax primer
- Prompts for positive scenario generation
- Prompts for negative/edge case generation
- Prompts for specific, testable scenarios (not vague)
- How to make scenarios specific with data examples
- Examples: vague vs specific scenarios
- 6-8 complete prompt examples
- When to use Scenario Outline (data tables)

**04-issue-creation-prompts.md** (800-1000 words)

Include:
- Prompts for converting stories to GitHub Issue format
- Prompts for generating DoR checklists
- Prompts for self-review and gap identification
- Prompts for linking related issues
- Label suggestion prompts
- 4-6 complete prompt examples

#### path-a-backlog/exercises/

**exercise-1-epics-and-stories.md** (1200-1500 words)

Format:
```markdown
# Exercise 1: Epic & Story Generation
**Time:** 12 minutes (25:00 - 37:00 in session)
**Objective:** Transform stakeholder notes into structured epics and INVEST-compliant user stories

## Prerequisites
- [ ] Copilot is running and tested
- [ ] You've reviewed stakeholder-notes.md
- [ ] You have prompts/01-epic-generation-prompts.md open for reference

## Exercise Overview
You'll use Copilot to:
1. Generate 2-3 epics from stakeholder notes (4 min)
2. Split one epic into 3-5 user stories (5 min)
3. Verify INVEST compliance and add risks/dependencies (3 min)

---

## Step 1: Generate Epics (4 minutes)

### Instructions
1. Open a new file: `my-epics.md`
2. Open Copilot Chat (Ctrl+Shift+I or Cmd+Shift+I)
3. Copy the content from `inputs/stakeholder-notes.md`
4. Use **Prompt 1** from `prompts/01-epic-generation-prompts.md`
5. Paste stakeholder notes where indicated
6. Review Copilot's output

### Checkpoint ✓
Share one epic title with your neighbor. Does it:
- Clearly describe a business capability?
- Sound achievable in 2-4 weeks?
- Have clear business value?

### Tips
- If epics are too technical, add: "Focus on business capabilities, not implementation"
- If too vague, add: "Be specific about what's included and excluded"
- If missing compliance, add: "This is for financial services. Flag regulatory requirements."

### What Good Looks Like
```markdown
## Epic 1: Customer Balance Alert Management

**Description:**
Enable customers to configure and receive automated alerts when their account balance crosses defined thresholds, helping them avoid overdrafts and manage cash flow proactively.

**Business Value:**
- Problem: 30% of customers incur overdraft fees that could be prevented with early notification
- Expected Outcome: Reduce overdraft incidents by 25-30% within 6 months
- Competitive Necessity: Industry standard feature, required for customer retention

**Key Assumptions:**
- Integration with existing notification service (email/SMS platform) is feasible within technical constraints
- Customer preference data can be stored in existing profile database
- Real-time balance updates are available from core banking system

**Story Themes:**
1. Threshold configuration and management
2. Alert delivery across channels (email, SMS, push)
3. Alert history and audit trail
4. Account type-specific rules (checking, savings, joint)
5. Compliance with notification regulations (TCPA, FINRA)
```

---

## Step 2: Split Epic into Stories (5 minutes)

### Instructions
1. Choose Epic 1 (or your best epic)
2. Create new file: `my-stories.md`
3. Use **Prompt 2** from `prompts/02-story-splitting-prompts.md`
4. Generate 3-5 user stories
5. Apply INVEST checklist to each story

### The Prompt
```
You are a business analyst. Take this epic and split it into 3-5 user stories following INVEST principles.

[PASTE YOUR EPIC]

For each story, provide:
- User story in format: As a [role], I want [capability], so that [benefit]
- 2-3 acceptance criteria (brief, will detail later)
- Estimated complexity: Small/Medium/Large
- Priority: High/Medium/Low

Each story should be:
- Independent (can be developed separately)
- Valuable (delivers customer/business benefit)
- Estimable (team can size it)
- Small (completable in 1 sprint)
- Testable (clear success criteria)
```

### Checkpoint ✓
Use the INVEST checklist (templates/invest-checklist.md) on one story.
Score: How many of the 6 criteria does it meet?

### Common Issues & Fixes

**Issue:** Stories are too large
```
Fix prompt: "These stories are too large. Split story #2 into 2 smaller stories, each deliverable in 3-5 days."
```

**Issue:** Stories aren't independent
```
Fix prompt: "Story #3 depends on Story #2. Rewrite #3 to be independent, or clarify the dependency."
```

**Issue:** Missing business value
```
Fix prompt: "Strengthen the 'so that' clause for each story. Make the business value explicit and measurable."
```

---

## Step 3: Add Risks & Dependencies (3 minutes)

### Instructions
1. Review your 3-5 stories
2. For each story, use this prompt:

```
For this user story, identify:

[PASTE ONE STORY]

1. Technical dependencies (other systems, services, data)
2. External system dependencies (core banking, notification service, etc.)
3. Risks to delivery (technical, compliance, resource)
4. Assumptions that need validation by SMEs

Be specific. Reference the original stakeholder notes for context.
```

3. Add a "Risks & Dependencies" section to each story

### What Good Looks Like
```markdown
### Story: US-001 Customer Sets Alert Threshold

**As a** retail banking customer
**I want** to set a custom dollar threshold for low balance alerts
**So that** I can avoid overdraft fees and manage my cash flow

**Acceptance Criteria:**
- AC1: Customer can set threshold between $0-$1000
- AC2: System validates threshold on save
- AC3: Threshold is persisted to customer profile

**Risks & Dependencies:**

**Technical Dependencies:**
- Customer Profile Service API (for storing preferences)
- Core Banking System (for current balance validation)

**External Dependencies:**
- Mobile app team needs 24-hour lead time for UI changes
- Profile database schema update requires DBA approval

**Risks:**
- MEDIUM: Integration with legacy profile system (batch updates only, 4-hour delay)
- LOW: Multi-account customers may need complex rules (out of scope for v1)

**Assumptions:**
- Customer can only set one threshold per account (not multiple)
- Threshold applies to available balance, not pending transactions
- Changes to threshold take effect immediately
```

### Checkpoint ✓
Do you have at least one risk or dependency identified for each story?

---

## Exercise Complete! 

### What You've Created
- [ ] 2-3 well-formed epics with business value
- [ ] 3-5 user stories that meet INVEST criteria
- [ ] Risks and dependencies documented for each story
- [ ] Ready for Exercise 2: Adding Gherkin acceptance criteria

### Time Check
If you finished early:
- Refine your weakest story using critique prompts
- Generate a 4th or 5th story from your epic
- Try the epic splitting prompt from prompts/01-epic-generation-prompts.md

### Peer Review (if time allows)
Exchange `my-stories.md` with your neighbor:
- Pick their best story - what makes it good?
- Pick one that needs work - what specific improvement would help?

---

## Troubleshooting

**Problem:** Copilot generated very technical stories
**Solution:** Add to prompt: "Write from the customer/user perspective. Avoid technical implementation details."

**Problem:** Stories are too vague or high-level
**Solution:** Add: "Be specific. Include concrete examples and measurable outcomes."

**Problem:** Missing the 'so that' benefit
**Solution:** Add: "For each story, explain the specific business value or user benefit."

---

## Next Steps
Continue to Exercise 2: Acceptance Criteria & Gherkin Scenarios
```

**exercise-2-acceptance-criteria.md** (1200-1500 words)

Include:
- Clear timing: 13 minutes (37:00-50:00)
- Objective
- Gherkin syntax quick reference
- Step-by-step for positive scenarios
- Step-by-step for negative scenarios
- Checkpoints
- What good looks like (examples)
- Common issues and fixes
- Troubleshooting
- Peer review guidance

**exercise-3-github-issues.md** (1000-1200 words)

Include:
- Clear timing: 15 minutes (50:00-65:00)
- Objective
- GitHub Issue structure review
- Step-by-step for issue creation
- Self-review prompt examples
- How to create actual issues in GitHub
- Linking related issues
- Labeling strategy
- What good looks like
- Troubleshooting

#### path-a-backlog/solutions/

**sample-epics.md** (800-1000 words)

Provide 3 complete, exemplary epics including:
- All required sections
- Specific business value
- Clear assumptions
- Story themes
- Compliance considerations
- Commentary on why each section is written as it is

**sample-stories-with-invest.md** (1200-1500 words)

Provide 8-10 complete user stories with:
- Full story format
- 3-4 acceptance criteria each
- Risks and dependencies
- INVEST analysis for each (why it meets criteria)
- Commentary on quality

**sample-gherkin-scenarios.md** (1000-1200 words)

Provide 5-6 stories with complete Gherkin:
- 2-3 positive scenarios each
- 2-3 negative scenarios each
- Specific data examples
- Edge cases covered
- Commentary on scenario quality

**sample-github-issues.md** (800-1000 words)

Provide 3 complete GitHub issue examples showing:
- Full formatted issue body
- All required sections
- Proper linking and traceability
- Good commit message examples
- Commentary

### 4. Path B: Process & Data

#### path-b-process-data/inputs/onboarding-policy.md (700-900 words)

Create a realistic policy document for "Customer Onboarding Verification" with:

**Document Header**
- Title: Customer Onboarding & Identity Verification Policy
- Policy Number: COP-2024-017
- Effective Date: January 1, 2024
- Version: 2.1
- Owner: Compliance Department

**Purpose** (50-75 words)
State the purpose of customer verification for KYC/AML compliance

**Scope** (50 words)
What accounts/customers this applies to

**Policy Statement** (600-800 words structured in sections)

Include all these elements:

1. **Initial Account Application** (100-120 words)
   - Customer submits application via web or mobile
   - Required fields: Legal name, DOB, SSN, address, phone, email
   - Supporting documents: Government-issued ID
   - Business rules: Must be 18+, US resident, not on OFAC list

2. **Identity Verification Process** (150-180 words)
   - Step 1: Automated validation (SSN format, address standardization)
   - Step 2: Third-party identity verification service call
   - Step 3: Document verification (ID scan and OCR)
   - Step 4: Knowledge-based authentication (if automated fails)
   - Decision points: Pass, Fail, Manual Review required
   - Timeout handling: Service must respond within 10 seconds
   - Fallback: Manual review queue if automated fails

3. **Decision Rules** (120-150 words)
   - Auto-approve criteria: All checks pass, confidence score >85%
   - Manual review triggers: Score 60-85%, address mismatch, ID quality issues
   - Auto-reject criteria: Score <60%, OFAC match, fraud indicators
   - Approval authority: <$10K auto, $10K-50K supervisor, >$50K manager

4. **Data Retention** (80-100 words)
   - Application data: 7 years per regulatory requirement
   - Verification results: 7 years
   - Supporting documents: 7 years encrypted storage
   - Audit trail: All verification attempts logged with timestamp, result, decision maker

5. **Error Handling** (100-120 words)
   - Verification service timeout: Customer sees "temporary issue" message, application saved for retry
   - Verification service unavailable: Route to manual review queue
   - Document upload failure: Allow re-upload up to 3 attempts
   - Data validation errors: Clear error messages, specific field guidance

6. **Compliance Requirements** (80-100 words)
   - Must comply with: Bank Secrecy Act, USA PATRIOT Act, FINRA Rule 4512
   - Enhanced due diligence for high-risk customers
   - PII handling: Encrypted at rest and in transit
   - Right to privacy: Customer can request data deletion per CCPA (after retention period)

7. **SLA Requirements** (50-70 words)
   - Auto-verification: Complete within 60 seconds
   - Manual review: Decision within 24 business hours
   - Application status: Customer receives email updates at each stage
   - Availability: 99.5% uptime during business hours (6 AM - 10 PM ET)

**Format Notes:**
- Use formal policy language
- Include some ambiguity that analysts will need to clarify (e.g., "appropriate documentation")
- Reference systems without full details (e.g., "the verification service")
- Include compliance citations
- Use bullet points and numbered lists
- Mention but don't fully detail exception cases

#### path-b-process-data/templates/

**mermaid-flowchart-template.md** (800-1000 words)

Include:
- Mermaid syntax basics
- Flowchart shapes reference (rectangle, diamond, circle)
- How to create decision points
- How to add swimlanes
- How to add styling
- 3-4 complete examples from simple to complex
- Link to Mermaid documentation

**openapi-contract-template.yaml** (400-500 words plus example)

Include:
- What is OpenAPI and why data contracts matter
- Basic YAML structure
- Field types (string, integer, boolean, array, object)
- Common formats (date, email, uuid, uri)
- Validation (required, minLength, maxLength, pattern, minimum, maximum)
- Complete example for a Customer object
- How to add descriptions and examples

**uat-test-case-template.md**

```markdown
## UAT Test Case Template

### Test Case Format

**Test ID:** UAT-[###]
**Test Name:** [Descriptive name]
**Related Story:** [US-###]
**Related AC:** [AC#]
**Priority:** [High/Medium/Low]
**Type:** [Functional/Integration/Regression]

---

### Test Details

**Objective:**
[What is this test verifying?]

**Preconditions:**
- [Setup requirement 1]
- [Setup requirement 2]
- [Test data needed]

**Test Data:**
| Field | Value | Notes |
|-------|-------|-------|
| [field] | [value] | [why this value] |

**Test Steps:**
1. [Action step 1]
2. [Action step 2]
3. [Action step 3]

**Expected Results:**
- [Expected outcome 1]
- [Expected outcome 2]

**Actual Results:**
[To be filled during test execution]

**Pass/Fail:**
[ ] Pass  [ ] Fail

**Notes:**
[Any observations or issues]

---

### Example Test Case

**Test ID:** UAT-001
**Test Name:** Verify automated identity verification for valid customer
**Related Story:** US-003
**Related AC:** AC2
**Priority:** High
**Type:** Functional

**Objective:**
Verify that a customer with valid information can complete automated identity verification successfully.

**Preconditions:**
- Customer registration form is accessible
- Identity verification service is operational
- Test customer data is prepared

**Test Data:**
| Field | Value | Notes |
|-------|-------|-------|
| Legal Name | Alice Anderson | Valid test persona |
| DOB | 01/15/1985 | 18+ requirement |
| SSN | 123-45-6789 | Valid format, test SSN |
| Address | 123 Main St, Dallas, TX 75201 | Valid, standardizable |
| Email | alice.anderson@example.com | Valid format |
| Phone | 214-555-0100 | Valid format |

**Test Steps:**
1. Navigate to account application page
2. Enter customer information from test data
3. Upload valid government ID (test image: valid-id-001.jpg)
4. Click "Submit Application"
5. Wait for verification process to complete
6. Observe application status and email notification

**Expected Results:**
- Application status shows "Approved" within 60 seconds
- Confidence score displays as >85%
- Customer receives approval email within 2 minutes
- Account can be accessed immediately
- Audit log shows verification attempt with "PASS" result

**Actual Results:**
[To be completed during execution]

**Pass/Fail:**
[ ] Pass  [ ] Fail

**Notes:**
[Any observations]
```

**traceability-matrix-template.md**

```markdown
## Requirements Traceability Matrix (RTM)

### Purpose
Link requirements from source documentation through to test cases to ensure complete coverage and auditability.

### Matrix Format

| Req ID | Source | Requirement | Epic | Story ID | AC | Data Fields | UAT Cases | Status |
|--------|--------|-------------|------|----------|----|----|-----------|--------|
| [ID] | [Doc] | [Requirement text] | [Epic #] | [US-###] | [AC#] | [Fields] | [UAT-###] | [Status] |

---

### Example RTM

| Req ID | Source | Requirement | Epic | Story ID | AC | Data Fields | UAT Cases | Status |
|--------|--------|-------------|------|----------|----|----|-----------|--------|
| REQ-001 | Policy 2.1 | Customer must be 18+ | Epic-1 | US-001 | AC1, AC3 | DOB | UAT-001, UAT-002 | ✓ Complete |
| REQ-002 | Policy 2.2 | Require government ID | Epic-1 | US-002 | AC1, AC2 | IDType, IDNumber, IDImage | UAT-003, UAT-004 | ✓ Complete |
| REQ-003 | Policy 2.3 | Verify against OFAC | Epic-1 | US-003 | AC2 | LegalName, SSN, DOB | UAT-005 | ⚠ In Progress |
| REQ-004 | Policy 3.1 | Auto-approve score >85% | Epic-1 | US-003 | AC3 | VerificationScore | UAT-006, UAT-007 | ✓ Complete |
| REQ-005 | Policy 3.2 | Manual review 60-85% | Epic-1 | US-004 | AC1, AC2 | VerificationScore, ReviewQueue | UAT-008 | ⏳ Pending |
| REQ-006 | Policy 5.1 | 60-second SLA | Epic-1 | US-003 | AC4 | VerificationTimestamp | UAT-009 | ✓ Complete |

---

### Status Legend
- ✓ Complete: All items traced and tested
- ⚠ In Progress: Tracing incomplete or testing underway
- ⏳ Pending: Not yet started
- ❌ Blocked: Issue preventing completion

---

### Coverage Metrics
- **Requirements Covered:** 6/6 (100%)
- **Stories Mapped:** 4/4 (100%)
- **UAT Cases Created:** 9 (average 1.5 per requirement)
- **Testing Complete:** 4/9 (44%)

---

### Gap Analysis
[Use this section to identify:]
- Requirements without stories
- Stories without test cases
- Test cases without clear requirement mapping
- Missing acceptance criteria
```

#### path-b-process-data/prompts/

**01-flowchart-generation-prompts.md** (1000-1200 words)

Include:
- When to use flowcharts vs other diagrams
- Prompt for basic flowchart from policy
- Prompt for adding swimlanes
- Prompt for adding error handling
- Prompt for refining decision points
- 6-8 complete prompt examples
- Tips for working with Mermaid syntax
- Common issues and fixes

**02-data-contract-prompts.md** (1000-1200 words)

Include:
- What makes a good data contract
- Prompt for extracting data elements from policy
- Prompt for generating OpenAPI schema
- Prompt for adding validation rules
- Prompt for creating example payloads
- 5-7 complete prompt examples
- YAML syntax tips
- How to validate generated contracts

**03-uat-traceability-prompts.md** (1000-1200 words)

Include:
- Prompts for linking artifacts to stories
- Prompts for generating UAT test cases from AC
- Prompts for creating traceability matrices
- Prompts for gap analysis
- 6-8 complete prompt examples
- How to maintain traceability
- Tips for regulated environments

#### path-b-process-data/exercises/

**exercise-1-process-flow.md** (1200-1500 words)

Similar structure to Path A exercises:
- Clear timing: 15 minutes (25:00-40:00)
- Step-by-step for basic flowchart
- Step-by-step for swimlanes
- Step-by-step for error handling
- Checkpoints
- Examples
- Troubleshooting

**exercise-2-data-contracts.md** (1000-1200 words)

Include:
- Clear timing: 12 minutes (40:00-52:00)
- Step-by-step for data extraction
- Step-by-step for OpenAPI generation
- Validation
- Examples
- Troubleshooting

**exercise-3-traceability-uat.md** (1000-1200 words)

Include:
- Clear timing: 13 minutes (52:00-65:00)
- Step-by-step for linking artifacts
- Step-by-step for UAT generation
- Step-by-step for RTM creation
- Examples
- Troubleshooting

#### path-b-process-data/solutions/

**sample-flowchart-basic.md**

Complete Mermaid flowchart with commentary

**sample-flowchart-swimlanes.md**

Advanced flowchart with swimlanes, with commentary explaining choices

**sample-data-contract.yaml**

Complete OpenAPI contract with 15-20 fields, full validation, examples, and commentary

**sample-uat-scenarios.md**

8-10 complete UAT test cases with traceability

**sample-traceability-matrix.md**

Complete RTM showing full traceability chain

### 5. Homework Assignments

#### homework/README.md

Overview of all homework assignments with estimated time

#### homework/critique-prompts.md (600-800 words)

```markdown
# Homework: Refine Stories with Critique Prompts
**Time Estimate:** 30-45 minutes

## Objective
Learn to use Copilot's critique capability to identify and fix gaps in your requirements artifacts.

## Assignment

### Part 1: Critique Two Stories (20 minutes)

Choose two user stories you created in the lab (or use samples provided).

For each story, use this critique prompt:

```
You are an experienced business analyst reviewing this user story for quality.

[PASTE STORY]

Identify:
1. **Ambiguities:** Any unclear terms, vague requirements, or assumptions not stated
2. **Missing NFRs:** Non-functional requirements (performance, security, compliance, accessibility)
3. **Testability Issues:** Acceptance criteria that cannot be objectively verified
4. **INVEST Violations:** Ways this story fails INVEST principles
5. **Edge Cases:** Scenarios not covered by current acceptance criteria
6. **Dependencies:** Technical or business dependencies not documented

For each issue found, provide:
- Specific example of the problem
- Suggested improvement
- Severity (Critical/Medium/Low)
```

### Part 2: Apply Improvements (15 minutes)

Take the critique feedback and revise your stories.

Use follow-up prompts like:
```
Based on this feedback: [paste specific critique item]

Rewrite the [acceptance criteria/NFR section/story description] to address this gap.
```

### Part 3: Before/After Comparison (10 minutes)

Document your improvements:

```markdown
## Story US-001: Before Critique

[Original story]

## Critique Findings

[List issues found]

## Story US-001: After Refinement

[Improved story]

## Key Improvements
1. [What changed and why]
2. [What changed and why]
```

---

## What to Submit

Create a markdown file with:
- [ ] Two stories (before critique)
- [ ] Critique feedback for each
- [ ] Two stories (after refinement)
- [ ] Reflection: What patterns of gaps did you notice?

---

## Success Criteria

Your refined stories should:
- [ ] Have zero ambiguous terms (or terms are defined)
- [ ] Include at least 2 NFRs per story
- [ ] Have testable, specific acceptance criteria
- [ ] Still meet all INVEST criteria
- [ ] Document all identified dependencies

---

## Tips

**If critique seems too generic:**
Add context: "This is for a regulated financial services environment. Focus on compliance and audit requirements."

**If critique misses obvious issues:**
Be more specific: "Review the acceptance criteria specifically for testability. Are there any that cannot be objectively verified?"

**If you disagree with a critique point:**
That's fine! Document why you're keeping it as-is. Critical thinking matters.
```

#### homework/rtm-exercise.md (600-800 words)

```markdown
# Homework: Build a Mini Requirements Traceability Matrix
**Time Estimate:** 30-45 minutes

## Objective
Create an automated traceability matrix using Copilot that links source documentation through to UAT test cases.

## Assignment

### Step 1: Select Your Scope (5 minutes)

Choose one of:
- **Path A:** Your Automated Account Alerts stories from the lab
- **Path B:** Your Customer Onboarding stories from the lab
- **Custom:** Any 3-4 related stories you want to trace

### Step 2: Generate RTM with Copilot (20 minutes)

Use this prompt:

```
You are a business analyst creating a requirements traceability matrix for audit purposes.

I have these artifacts:

**Source Documentation:**
[PASTE: Original policy/notes excerpt relevant to your stories]

**User Stories:**
[PASTE: Your 3-4 stories with IDs]

**Acceptance Criteria:**
[LIST: AC IDs for each story]

**Data Fields:**
[LIST: Key data elements mentioned]

Create a Requirements Traceability Matrix in markdown table format that shows:

| Req ID | Source Section | Requirement Description | Story ID | AC | Data Fields | Suggested UAT Cases |
|--------|---------------|------------------------|----------|----|----|-------------------|

Requirements:
1. Extract distinct requirements from the source (should be 5-8 requirements)
2. Map each requirement to one or more stories
3. Link to specific acceptance criteria
4. Identify data fields involved
5. Suggest descriptive names for UAT test cases (don't write full cases, just names)
6. Ensure every story is traced back to a source requirement
7. Flag any stories without clear source traceability

After the table, provide:
- Coverage summary (% requirements mapped, % stories traced)
- Gap analysis (any requirements without stories? any stories without clear requirements?)
```

### Step 3: Enhance the RTM (10 minutes)

Add to your RTM:

**Status Column:**
Use prompts to categorize:
```
For each row in this RTM, suggest a status:
- ✓ Complete: Story and AC are done, UAT written
- ⚠ In Progress: Story exists but incomplete
- ⏳ Pending: Requirement identified but no story yet
- ❌ Blocked: Cannot proceed due to [reason]

[PASTE RTM]
```

**Priority Column:**
```
Add a priority column to this RTM based on:
- Compliance requirements = High
- Core functionality = High
- Edge cases = Medium
- Nice-to-have = Low

[PASTE RTM]
```

### Step 4: Generate Gap Report (10 minutes)

```
Analyze this RTM for gaps and risks:

[PASTE YOUR COMPLETED RTM]

Provide:
1. Requirements with no stories (requirement gaps)
2. Stories with no clear requirement source (traceability gaps)
3. Requirements covered by only one AC (test coverage risk)
4. Recommendations for closing gaps
```

---

## Deliverable

Create a file named `my-traceability-matrix.md` with:

1. **Complete RTM table** (with status and priority)
2. **Coverage Metrics** section
3. **Gap Analysis** section
4. **Recommendations** section

---

## Success Criteria

Your RTM should:
- [ ] Trace at least 5 distinct requirements
- [ ] Cover all your stories
- [ ] Show clear linkage from source → story → AC → data → test
- [ ] Identify any gaps
- [ ] Be formatted as a clean markdown table

---

## Why This Matters

In regulated environments, traceability is required for:
- **Audits:** Prove requirements are implemented
- **Impact Analysis:** Understand what changes when a requirement changes
- **Test Coverage:** Ensure all requirements are tested
- **Compliance:** Demonstrate due diligence

Copilot can automate this tedious but critical work.

---

## Bonus Challenge

Ask Copilot to:
```
Convert this RTM into a Mermaid diagram showing the relationships between:
- Source documents
- Requirements
- Stories
- Test cases

Use a flowchart or graph notation to visualize traceability.
```
```

#### homework/dor-dod-exercise.md (500-700 words)

```markdown
# Homework: Generate Custom Definition of Ready & Definition of Done
**Time Estimate:** 30 minutes

## Objective
Use Copilot to create team-specific DoR and DoD checklists tailored to your environment.

## Assignment

### Part 1: Definition of Ready (15 minutes)

Create a DoR customized for your team/organization.

**Prompt:**
```
You are a business analyst working in a [YOUR CONTEXT: e.g., "regulated financial services environment" or "fast-paced startup" or "healthcare SaaS company"].

Create a Definition of Ready checklist that specifies when a user story is ready for sprint planning.

Include sections for:
1. Requirements Clarity (story format, business value, INVEST)
2. Acceptance Criteria (how many? what format?)
3. Dependencies & Constraints
4. Non-Functional Requirements (specific to our context)
5. Artifacts & Traceability (what needs to be linked?)
6. Team Readiness (SME review, estimation)
7. [YOUR CONTEXT-SPECIFIC SECTION, e.g., "Compliance Requirements" or "Security Review"]

For each criterion:
- Make it specific and actionable (not vague)
- Explain WHY it matters in our context
- Provide an example of what "done" looks like

Format as a checklist with explanatory notes.
```

**Customize the prompt:**
- Replace [YOUR CONTEXT] with your actual environment
- Add specific requirements from your organization
- Include any unique compliance, security, or process needs

### Part 2: Definition of Done (15 minutes)

Create a DoD for completed stories.

**Prompt:**
```
You are a business analyst working in a [YOUR CONTEXT].

Create a Definition of Done checklist that specifies when a user story is considered complete and ready for release.

Include sections for:
1. Development Complete (code, review, merged)
2. Testing Complete (unit, integration, UAT)
3. Documentation Updated (user docs, technical docs, API docs)
4. Acceptance Criteria Verified (all AC pass)
5. Non-Functional Requirements Met (performance, security tested)
6. Compliance & Audit (evidence collected, requirements traced)
7. Deployment Ready (deployed to staging, release notes, rollback plan)
8. [YOUR CONTEXT-SPECIFIC SECTION]

Make it specific to business analyst involvement:
- What artifacts must BA create/update?
- What reviews must BA participate in?
- What evidence must BA collect?

Format as a checklist with roles specified (who checks what).
```

---

## Deliverables

Create two files:

**definition-of-ready-[YOURNAME].md**
- Your customized DoR
- Brief explanation of customizations made
- Example of a story that meets this DoR

**definition-of-done-[YOURNAME].md**
- Your customized DoD
- Brief explanation of customizations made
- Example of what "done" evidence looks like

---

## Success Criteria

Your DoR/DoD should be:
- [ ] Specific to your context (not generic)
- [ ] Actionable (clear pass/fail criteria)
- [ ] Comprehensive (covers all critical aspects)
- [ ] Realistic (achievable by your team)
- [ ] Supported by rationale (explains why each item matters)

---

## Refinement Prompts

If output is too generic:
```
This is too generic. Make it specific to [YOUR DOMAIN]. Include actual tools, systems, and processes we use.
Example: Instead of "code review complete" say "code review approved in GitHub by at least one senior developer"
```

If missing your context:
```
Add a section specific to [YOUR COMPLIANCE/INDUSTRY]: What unique requirements do we have?
```

If too lengthy:
```
This DoR has 30 items and is overwhelming. Prioritize the 10-12 most critical criteria. Mark the rest as "recommended but not required."
```

---

## Why This Matters

Generic DoR/DoD checklists don't work because:
- Every team has different tools and processes
- Different industries have different compliance needs
- Team maturity affects what's realistic

Copilot can help you create the RIGHT checklist for YOUR context, not a one-size-fits-all template.

---

## Bonus

Share your DoR/DoD with your team. Get feedback using this prompt:
```
Review this Definition of Ready for our team:

[PASTE YOUR DOR]

Our team composition:
- [describe your team]

Our common pain points:
- [list issues you face]

Suggest:
1. Items that might be missing given our pain points
2. Items that might be unrealistic
3. Items that need clearer criteria
```
```

### 6. Resources

#### resources/prompt-pattern-guide.md (1500-2000 words)

Comprehensive guide to the five-part prompt pattern with 15-20 examples across different analyst tasks

#### resources/gherkin-reference.md (800-1000 words)

Complete Gherkin syntax reference with examples, best practices, common mistakes

#### resources/mermaid-reference.md (800-1000 words)

Mermaid syntax for flowcharts, sequence diagrams, class diagrams, with analyst-specific examples

#### resources/openapi-basics.md (800-1000 words)

OpenAPI fundamentals, YAML syntax, data types, validation, examples

#### resources/copilot-troubleshooting.md (1000-1200 words)

```markdown
# GitHub Copilot Troubleshooting Guide

## Common Issues & Solutions

### Issue 1: Copilot Not Suggesting Anything

**Symptoms:**
- No inline suggestions appear as you type
- Copilot icon shows but nothing happens

**Solutions:**

1. **Check Copilot Status**
   - Look at bottom-right status bar
   - Icon should show "Copilot ready"
   - If red X, click to view error

2. **Verify License**
   ```
   Cmd/Ctrl + Shift + P
   > GitHub Copilot: Check status
   ```
   Should show "Copilot Business/Enterprise Active"

3. **Restart Copilot**
   ```
   Cmd/Ctrl + Shift + P
   > GitHub Copilot: Restart
   ```

4. **Check File Type**
   - Copilot works best in code files (.md, .java, .ts)
   - In plaintext files, suggestions may be limited
   - Solution: Use Copilot Chat instead

---

### Issue 2: Suggestions Are Low Quality or Irrelevant

**Symptoms:**
- Copilot suggests code when you want documentation
- Suggestions don't match your context
- Output is generic or wrong

**Solutions:**

1. **Provide More Context**
   - Add comments explaining what you want
   - Include examples above your cursor
   - Reference templates or formats

2. **Use Copilot Chat Instead**
   - Chat is better for longer-form content
   - Inline suggestions are better for repetitive patterns

3. **Improve Your Prompt**
   - Use the five-part pattern (Role + Inputs + Format + Constraints + Examples)
   - Be very specific
   - Provide examples of what good looks like

**Example:**

❌ Bad prompt:
```
Create user stories
```

✓ Good prompt:
```
You are a business analyst in financial services.
Based on these stakeholder notes: [paste notes]
Create 3 user stories in this format:
As a [role], I want [capability], so that [benefit]
Each story needs 2-3 testable acceptance criteria.
Follow INVEST principles.
Example good story: [paste example]
```

---

### Issue 3: Copilot Generated PII or Sensitive Data

**Symptoms:**
- Copilot suggested real names, SSNs, account numbers
- Output includes data that looks real

**Solutions:**

1. **Never include real PII in your prompts**
   - Sanitize all inputs before pasting
   - Use synthetic data: "Customer A," "ACC-1234-5678"

2. **Enable Public Code Filter**
   - Settings > Extensions > GitHub Copilot
   - Check "Enable Public Code Filter"

3. **If Copilot generates concerning data:**
   - DO NOT use it
   - Replace with synthetic data
   - Report to your organization's Copilot admin

---

### Issue 4: Copilot Chat Not Opening

**Symptoms:**
- Ctrl/Cmd+Shift+I does nothing
- Chat panel won't appear

**Solutions:**

1. **Try Alternate Methods**
   - Click Copilot icon in sidebar
   - Or: View menu > Extensions > GitHub Copilot Chat

2. **Check Extension Enabled**
   - Extensions panel (Ctrl/Cmd+Shift+X)
   - Search "GitHub Copilot Chat"
   - Should show "Enabled"

3. **Update Extensions**
   - Outdated versions may have bugs
   - Update both Copilot and Copilot Chat extensions

4. **Reinstall**
   - Uninstall both Copilot extensions
   - Restart VS Code
   - Reinstall from marketplace

---

### Issue 5: Output Is Cut Off or Incomplete

**Symptoms:**
- Copilot generates half a story then stops
- Response ends mid-sentence
- Large documents incomplete

**Solutions:**

1. **Ask for Continuation**
   ```
   Continue from where you stopped.
   ```

2. **Break into Smaller Requests**
   - Instead of "create 10 stories"
   - Ask for 3, then 3 more, then 4 more

3. **Use Progressive Refinement**
   - First: Generate outline/structure
   - Then: Fill in each section one at a time

---

### Issue 6: Copilot Keeps Making the Same Mistake

**Symptoms:**
- You correct Copilot but next suggestion has same issue
- Pattern repeats despite feedback

**Solutions:**

1. **Add Explicit Constraint**
   ```
   Important: Do NOT include [the wrong thing]
   Instead, always [the right thing]
   ```

2. **Provide Counter-Example**
   ```
   Bad example (DO NOT DO THIS):
   [show wrong way]

   Good example (DO THIS):
   [show right way]
   ```

3. **Start Fresh Chat**
   - Current chat context may be "stuck"
   - Open new chat session

---

### Issue 7: Different Results on Each Run

**Symptoms:**
- Running same prompt gives different quality each time
- Inconsistent output

**Understanding:**
- This is expected - Copilot uses AI, not templates
- Some randomness is normal

**Solutions:**

1. **Generate Multiple Options**
   ```
   Create 3 different versions of this story so I can choose the best.
   ```

2. **Use Copilot to Compare**
   ```
   I got these two versions:
   [paste version 1]
   [paste version 2]

   Which is better for [your specific need]? Why?
   ```

3. **Lock in Good Patterns**
   - When you get great output, save it as an example
   - Use it in future prompts: "Use this format: [example]"

---

### Issue 8: Can't Get Specific Format I Need

**Symptoms:**
- Copilot generates markdown when you wanted a table
- Format doesn't match your template

**Solutions:**

1. **Show Exact Format**
   ```
   Output MUST be in exactly this format:

   [paste your template with placeholders]

   Fill in this template with the actual content.
   ```

2. **Specify Format Explicitly**
   ```
   Format requirements:
   - Use markdown table with these exact columns: [list]
   - Use bullet points, not numbered lists
   - Bold all field names
   - Include code blocks for examples
   ```

---

## Tips for Better Results

### 1. Prime Each Session
Start each Copilot Chat session with context:
```
I'm a business analyst working on customer account features for a financial services company.
I need help creating requirements documentation that follows our INVEST standards and includes compliance considerations.
```

### 2. Build Incrementally
Don't ask for everything at once:
```
Step 1: "Create a user story outline"
Step 2: "Now add acceptance criteria"
Step 3: "Now add negative test scenarios"
```

### 3. Use Critique Loops
Generate, then improve:
```
First: "Create a user story for X"
Then: "Review this story for ambiguities and gaps"
Finally: "Rewrite based on your feedback"
```

### 4. Reference Templates
Always point to examples:
```
Use the format from templates/user-story-template.md
```

### 5. Specify Constraints Early
Don't let Copilot go down wrong path:
```
Constraints:
- No implementation details
- Must include compliance considerations
- Use Gherkin format for AC
- Include traceability links
```

---

## When to NOT Use Copilot

Copilot is not appropriate for:
- Sensitive PII or confidential data
- Final decision-making (you review, you decide)
- Replacing SME consultation
- Generating content you don't understand
- Meeting regulatory obligations (use as assist only)

---

## Getting Additional Help

**During the session:**
- Ask facilitator
- Check with neighbor
- Reference solutions/ folder

**After the session:**
- GitHub Copilot documentation: https://docs.github.com/copilot
- Your organization's Copilot support channel
- Internal Copilot community/Slack

---

## Remember

- Copilot is a tool, not a replacement for analyst judgment
- Always verify output for accuracy and completeness
- You own the quality of what you commit
- When in doubt, ask a human expert
```

### 7. Lab Guide (Primary Document)

#### lab-guide.md (4000-5000 words)

This is the comprehensive guide that walks through the entire 75-minute session:

**Structure:**
1. **Welcome & Overview** (300 words)
   - Session objectives
   - Who this is for
   - What you'll learn
   - Repository structure guide

2. **Before You Begin** (400 words)
   - Prerequisites verification
   - Copilot setup steps
   - Repository clone instructions
   - Quick test: "Does Copilot work?"

3. **Session Structure** (200 words)
   - Timeline overview
   - Path A vs Path B explanation
   - How to choose

4. **Detailed Path A Walkthrough** (1500-1800 words)
   - Overview of 3 exercises
   - Detailed steps for Exercise 1
   - Detailed steps for Exercise 2
   - Detailed steps for Exercise 3
   - Checkpoints throughout
   - What success looks like
   - Common issues and fixes
   - Time management tips

5. **Detailed Path B Walkthrough** (1500-1800 words)
   - Same structure as Path A

6. **Peer Review Guidelines** (300 words)
   - 2x2 framework explanation
   - How to give constructive feedback
   - What to look for
   - Scoring guidance

7. **Homework Overview** (200 words)
   - All assignments listed
   - Expected outcomes
   - How to submit (if applicable)

8. **Additional Resources** (200 words)
   - Links to all resource files
   - External documentation
   - Community resources

9. **FAQ** (400-500 words)
   - 10-15 common questions with answers

### 8. Root Level Files

#### .gitignore
```
# IDEs
.vscode/
.idea/
*.iml

# OS
.DS_Store
Thumbs.db

# Personal notes
my-*.md
scratch/

# Sensitive
*.key
*.pem
secrets/
```

#### SECURITY.md (600-800 words)

```markdown
# Security & Governance Guidelines

## Overview
This training repository is designed to teach safe and compliant use of GitHub Copilot in a regulated environment.

## Data Sanitization Requirements

### Never Include in Copilot Prompts
- ❌ Real customer names
- ❌ Actual account numbers
- ❌ Real SSNs or government IDs
- ❌ Actual email addresses (except @example.com)
- ❌ Real phone numbers
- ❌ Internal system credentials
- ❌ Proprietary business logic
- ❌ Production URLs or IPs

### Always Use Synthetic Data
✅ Customer names: "Alice Anderson," "Bob Baker"
✅ Account numbers: "ACC-XXXX-XXXX" format
✅ SSNs: Use test SSNs like "123-45-6789"
✅ Emails: @example.com, @test.local domains
✅ Dates: Use safe date ranges (2023-2024)

## Public Code Filter

### What It Does
- Prevents Copilot from suggesting code that matches public GitHub repositories
- Reduces license and IP risk
- Required for regulated environments

### How to Enable
1. VS Code: Settings > Extensions > GitHub Copilot
2. Check "Enable Public Code Filter"
3. Verify: Status bar should show "Filter: On"

### When It's Required
- ✅ Always enabled for this training
- ✅ Required for production use at [Your Company]
- ❌ Cannot be disabled without approval

## Traceability & Audit Requirements

### Commit Message Standards
Every commit of Copilot-generated content must include:

```
[Component] Brief description

Generated with GitHub Copilot from [source]
Reviewed by: [Your Name]
Rationale: [Why this change]

Source: [Meeting notes date, Policy doc version, etc.]
```

**Example:**
```
[Stories] Add automated alerts user stories

Generated with GitHub Copilot from stakeholder meeting 2024-10-15
Reviewed by: Jane Doe
Rationale: Implementing new customer notification feature per Q4 roadmap

Source: Product discovery session notes, attendees: PM, BA, Dev Lead
```

### Source Attribution
In all artifacts, cite sources:
- **User Stories:** Reference meeting, policy doc, requirement ID
- **Process Flows:** Reference policy section
- **Data Contracts:** Reference system specification

**Example in artifact:**
```markdown
**Source:**
- Meeting: Product Discovery, Oct 15 2024
- Policy: Customer Notification Policy v3.2, Section 4.1
- Requirement: REQ-047 from Q4 Roadmap
```

## Verification Before Commit

### Mandatory Checklist
Before committing any Copilot-generated content:

- [ ] All PII removed or sanitized
- [ ] Source attribution included
- [ ] Content reviewed for accuracy
- [ ] Compliance requirements verified
- [ ] No production system details exposed
- [ ] Commit message includes rationale
- [ ] INVEST criteria met (for stories)

## Incident Response

### If Sensitive Data Is Accidentally Committed

1. **DO NOT** push to remote if still local
2. **Immediately** notify your manager and security team
3. **Follow** your organization's incident response procedure
4. **Document** what happened and how

### If You Notice Issues in Copilot Suggestions

If Copilot suggests:
- Real-looking PII
- Production system details
- Concerning code patterns

1. **Do not use** the suggestion
2. **Report** to training facilitator (during session)
3. **Report** to Copilot admin (post-session)

## Compliance Considerations

### For Regulated Industries
If you work in:
- Financial Services (SEC, FINRA, FDIC)
- Healthcare (HIPAA)
- Government (FedRAMP, FISMA)

**Additional requirements may apply:**
- Enhanced review of all Copilot output
- Mandatory human review before commit
- Additional audit logging
- Restricted use cases

**Check with your compliance team** before using Copilot for:
- Customer-facing content
- Regulated filings or reports
- Privacy policies or terms of service
- Security-critical systems

## License Compliance

### Public Code Filter Limitations
Even with Public Code Filter enabled:
- Review all code for potential license issues
- Don't assume all suggestions are original
- When in doubt, consult legal/compliance

### Attribution
If Copilot suggests code that appears to be from a specific framework or library:
- Include appropriate attribution
- Verify license compatibility
- Document source in code comments

## Best Practices

1. **Treat Copilot as an Assistant, Not an Authority**
   - You own the quality and compliance of output
   - Always apply professional judgment
   - Verify technical accuracy

2. **Limit Context Window**
   - Don't paste entire documents with sensitive info
   - Sanitize before providing to Copilot
   - Use excerpts and summaries

3. **Progressive Disclosure**
   - Start with high-level prompts
   - Add detail incrementally
   - Don't front-load sensitive information

4. **Regular Review**
   - Peer review Copilot-generated content
   - SME validation for technical accuracy
   - Compliance review for regulated content

## Questions?

**During training:** Ask facilitator
**After training:** Contact [Copilot Program Office / IT Security]

---

**Remember:** When in doubt, don't include it in a prompt. Sanitize first, generate second.
```

## Quality Standards

All content must meet these criteria:

### Completeness
- Every file should be fully written (no "TODO" or "[To be completed]")
- All examples should be complete and realistic
- All exercises should have solutions

### Realism
- Synthetic data should feel realistic but be obviously fake
- Business scenarios should reflect actual analyst work
- Compliance references should be appropriate for financial services

### Clarity
- Instructions should be unambiguous
- Steps should be numbered and actionable
- Success criteria should be clear

### Consistency
- Same terminology throughout
- Same formatting patterns
- Cross-references should be accurate

### Pedagogy
- Build complexity progressively
- Provide checkpoints for self-assessment
- Include troubleshooting for common issues
- Examples show both good and bad patterns

## Success Criteria

The completed repository should enable a participant to:

1. **Clone and start immediately** - no setup confusion
2. **Choose their path confidently** - clear guidance
3. **Complete all exercises in 40 minutes** - realistic timing
4. **Self-assess their work** - checklists and examples provided
5. **Troubleshoot independently** - comprehensive troubleshooting guide
6. **Continue learning** - homework extends the learning
7. **Apply at work** - practical, realistic examples

## Instructions for Claude Code

Please create this repository with the following approach:

### Phase 1: Foundation
1. Create root README.md with complete structure
2. Create all directory structure
3. Create setup files
4. Create security and governance files

### Phase 2: Path A Content
1. Create all Path A input files (stakeholder notes)
2. Create all Path A templates
3. Create all Path A prompt guides
4. Create all Path A exercises
5. Create all Path A solutions

### Phase 3: Path B Content
1. Create all Path B input files (onboarding policy)
2. Create all Path B templates
3. Create all Path B prompt guides
4. Create all Path B exercises
5. Create all Path B solutions

### Phase 4: Supporting Content
1. Create homework assignments
2. Create resource guides
3. Create comprehensive lab guide

### Phase 5: Testing & Polish
1. Verify all cross-references
2. Check timing estimates
3. Ensure consistent terminology
4. Validate all examples
5. Test that instructions are clear

## File Generation Priorities

**Generate complete, production-ready files - not placeholders.**

Focus on:
1. **Stakeholder notes** - Must be realistic with appropriate ambiguity
2. **Onboarding policy** - Must be comprehensive and realistic
3. **Prompt guides** - These are the core teaching tools
4. **Exercises** - Must have clear steps and timing
5. **Solutions** - Must demonstrate excellence
6. **Lab guide** - Must be comprehensive and clear

Every file should be:
- Complete and ready to use
- Well-formatted markdown
- Free of TODOs or placeholders
- Cross-referenced accurately
- Appropriate length (specified above)

## Deliverables Checklist

- [ ] Complete directory structure
- [ ] Root README.md
- [ ] All setup files
- [ ] Security.md and .gitignore
- [ ] Path A: inputs, templates, prompts, exercises, solutions
- [ ] Path B: inputs, templates, prompts, exercises, solutions
- [ ] All homework assignments
- [ ] All resource guides
- [ ] Comprehensive lab-guide.md
- [ ] All files are complete (no placeholders)
- [ ] All cross-references are accurate
- [ ] Synthetic data is realistic but safe
- [ ] Examples are production-quality