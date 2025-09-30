# Definition of Ready (DoR)

## Purpose

A user story is "ready" for sprint planning when it meets all the criteria in this checklist. Stories that are not "ready" should remain in the backlog for further refinement.

**Why this matters:**
- Prevents stories from being pulled into sprint when they're not well understood
- Reduces mid-sprint discovery of blockers or unknowns
- Ensures team can commit with confidence
- Improves sprint predictability and flow

---

## The Checklist

### Requirements Clarity

- [ ] **Story follows standard format** - Uses "As a... I want... So that..." structure
- [ ] **Business value is clearly articulated** - The "so that" clause is specific and measurable
- [ ] **Story meets INVEST criteria** - Independent, Negotiable, Valuable, Estimable, Small, Testable
- [ ] **Scope is clear** - What's in scope and out of scope is documented
- [ ] **No ambiguous terms** - All terminology is defined or uses agreed-upon language

### Acceptance Criteria

- [ ] **At least 2-3 testable acceptance criteria defined** - Not just one happy path
- [ ] **Positive (happy path) scenarios documented** - What happens when everything works
- [ ] **Negative/edge case scenarios identified** - Error conditions, validation failures, boundary cases
- [ ] **Criteria use Given/When/Then format where appropriate** - For behavioral scenarios
- [ ] **Specific data examples included** - Not "valid input" but "email: name@example.com"
- [ ] **All criteria are objectively verifiable** - QA can determine pass/fail

### Dependencies & Constraints

- [ ] **Technical dependencies identified** - APIs, services, databases, infrastructure
- [ ] **External system dependencies documented** - Third-party services, partner systems
- [ ] **No blocking dependencies on other teams** - Or dependencies are acknowledged and tracked
- [ ] **Timeline constraints noted** - If there's a hard deadline or release target
- [ ] **Resource dependencies clear** - If specific expertise or people are required

### Non-Functional Requirements

- [ ] **Performance requirements specified** (if applicable) - Response times, throughput, SLAs
- [ ] **Security requirements identified** (if applicable) - Authentication, authorization, encryption, PII handling
- [ ] **Compliance requirements documented** (if applicable) - Regulatory needs, audit trail, data retention
- [ ] **Accessibility requirements noted** (if applicable) - WCAG standards, keyboard navigation, screen readers

### Artifacts & Traceability

- [ ] **Source documentation linked** - Meeting notes, policy docs, requirement IDs
- [ ] **Related stories/epics referenced** - Parent epic, sibling stories, dependent stories
- [ ] **Mockups/wireframes attached** (if UI work) - Visual representation of what to build
- [ ] **Data models or contracts provided** (if data work) - API contracts, database schemas

### Team Readiness

- [ ] **Story has been reviewed by product owner** - PO confirms this is what's needed
- [ ] **SME input obtained** (if needed) - Tech lead, security, compliance, UX, etc.
- [ ] **Story is estimable by the team** - Team understands scope well enough to size it
- [ ] **No major unknowns or questions** - Or unknowns are explicitly called out

### Compliance (for regulated environments)

- [ ] **Regulatory requirements identified** - SEC, FINRA, HIPAA, GDPR, etc.
- [ ] **Audit trail considerations documented** - What needs to be logged for compliance
- [ ] **Data privacy/PII considerations noted** - What personal data is involved and how it's protected
- [ ] **Approval processes identified** (if required) - Compliance review, security review, DBA approval

---

## Scoring Guide

**How many criteria must be met?**

Not all criteria apply to every story. Use judgment:

- **Core criteria (MUST meet for all stories):**
  - Requirements Clarity (all 5)
  - Acceptance Criteria (all 6)
  - Dependencies & Constraints (at least 3 of 5)
  - Team Readiness (all 4)

- **Conditional criteria (apply when relevant):**
  - Non-Functional Requirements (if story involves performance, security, compliance, or accessibility)
  - Artifacts & Traceability (mockups for UI work, data models for API work)
  - Compliance (for regulated environments or when handling sensitive data)

**Red flags that story is NOT ready:**
- ❌ Product owner hasn't reviewed it
- ❌ Acceptance criteria are vague or missing
- ❌ Team says "we don't know how to estimate this"
- ❌ Multiple unknowns or unanswered questions
- ❌ Blocking dependencies on other teams

---

## Example: Story That is Ready

```markdown
## User Story

As a retail banking customer
I want to set a custom dollar threshold for low balance alerts
So that I can avoid $35 overdraft fees and proactively manage my cash flow

## Acceptance Criteria

**AC1:** Customer can access threshold configuration from account settings menu
**AC2:** Customer can enter threshold value between $0 and $5,000
**AC3:** System validates threshold (numeric, within range, positive value)
**AC4:** Threshold is immediately saved to customer profile
**AC5:** Confirmation message displays: "Alert threshold set to $[value]"

**Negative Scenarios:**
- AC6: Threshold below $0 shows error "Threshold must be between $0 and $5,000"
- AC7: Threshold above $5,000 shows error "Threshold must be between $0 and $5,000"
- AC8: Non-numeric input shows error "Please enter a valid dollar amount"

## Dependencies

**Technical:**
- Customer Profile Service API v2.1 (for storing threshold)
- Account Service API v1.8 (for retrieving account list)

**External:**
- Database schema update requires DBA approval (submitted, 5-day turnaround)
- Compliance review required for audit logging (scheduled for next Tuesday)

No blocking dependencies - both services are stable and available.

## NFRs

- **Performance:** Settings page loads < 2 sec; threshold save completes < 1 sec
- **Security:** Authenticated users only; threshold data encrypted at rest; audit log created
- **Compliance:** FINRA Rule 4512 - all threshold changes logged for 7 years

## Source Documentation

- Meeting: Product Discovery, Oct 15 2024 (Jane Diaz, Marcus Chen, Sarah Williams)
- Epic: #EPIC-042 - Automated Customer Alerts
- Related: #US-002 (alert delivery), #US-003 (channel selection)

## Mockups

[Attached: threshold-config-screen-v2.png]

## Team Readiness

- ✅ Reviewed by PO (Jane Diaz) - approved
- ✅ Tech lead review (Marcus Chen) - feasible, 3 story points
- ✅ Compliance review (Sarah Williams) - audit logging requirements clear
- ✅ Team can estimate - no major unknowns

## Open Questions

- None - all questions resolved in refinement session
```

### DoR Assessment

✅ **Requirements Clarity:** 5/5
- Standard story format ✅
- Clear business value ($35 overdraft fees) ✅
- Meets INVEST ✅
- Scope is clear ✅
- No ambiguous terms ✅

✅ **Acceptance Criteria:** 6/6
- 8 testable AC ✅
- Happy path covered (AC1-5) ✅
- Negative scenarios (AC6-8) ✅
- Specific data examples ($0, $5,000) ✅
- Objectively verifiable ✅

✅ **Dependencies:** 5/5
- Technical deps identified ✅
- External deps (DBA, Compliance) documented ✅
- No blocking deps ✅
- Timeline noted (5-day DBA, Tuesday compliance) ✅

✅ **NFRs:** 3/3 (all applicable)
- Performance specified ✅
- Security documented ✅
- Compliance identified ✅

✅ **Artifacts:** 3/3 (all applicable)
- Source docs linked ✅
- Related stories referenced ✅
- Mockup attached ✅

✅ **Team Readiness:** 4/4
- PO reviewed ✅
- SME input (tech, compliance) ✅
- Estimable ✅
- No unknowns ✅

✅ **Compliance:** 3/3
- FINRA identified ✅
- Audit requirements clear ✅
- PII handling not applicable ✅

**Result: READY for sprint planning** ✅

---

## Example: Story That is NOT Ready

```markdown
## User Story

As a customer
I want alerts to work
So that I know about my balance

## Acceptance Criteria

AC1: Alerts should be sent
AC2: Customer should receive them quickly
AC3: System should handle errors
```

### DoR Assessment

❌ **Requirements Clarity:** 0/5
- Vague story format ("alerts to work") ❌
- No specific business value ❌
- Fails INVEST (not testable, not specific) ❌
- Scope unclear ❌
- Everything is ambiguous ❌

❌ **Acceptance Criteria:** 0/6
- Only 3 vague AC ❌
- No specific scenarios ❌
- No negative cases ❌
- No Given/When/Then ❌
- No data examples ❌
- Not verifiable ("quickly" is subjective) ❌

❌ **Dependencies:** 0/5
- Not identified ❌

❌ **Team Readiness:** 0/4
- Doesn't appear to be reviewed ❌
- No SME input ❌
- Not estimable (too vague) ❌
- All unknowns ❌

**Result: NOT READY - Needs complete rewrite** ❌

---

## How to Use This Checklist

### During Story Writing

1. **Draft the story** (with Copilot or manually)
2. **Review against DoR** - Go through each category
3. **Identify gaps** - Which criteria are not met?
4. **Fill gaps** - Add missing information, get reviews, clarify unknowns
5. **Re-check** - Verify all applicable criteria are now met

### During Backlog Refinement

1. **Team reviews story together** - Read story aloud
2. **Check DoR criteria as a team** - Everyone weighs in
3. **Identify blockers** - What prevents this from being ready?
4. **Assign actions** - Who will get mockups? Who will clarify with compliance?
5. **Mark status** - "Ready" or "Not Ready - needs [X]"

### In Sprint Planning

**Only pull stories that are "Ready"** into the sprint.

If a story is not ready:
- Don't pull it into sprint
- Identify what's needed to make it ready
- Plan refinement session to complete it
- Pull a different story that is ready

**Golden rule:** Never pull a story into sprint that the team can't confidently commit to delivering.

---

## Common Reasons Stories Fail DoR

### 1. Vague Acceptance Criteria

**Problem:** AC uses subjective terms like "fast," "user-friendly," "appropriate"

**Fix:**
- Use specific numbers: "responds within 2 seconds"
- Use exact text: "displays error message 'Email format invalid'"
- Use Given/When/Then format with data examples

### 2. Unknowns and Open Questions

**Problem:** Team has questions that can't be answered

**Fix:**
- Schedule session with SME to get answers
- Document answers in the story
- If questions can't be answered, story isn't ready

### 3. Missing Dependencies

**Problem:** Mid-sprint, team discovers they need X which isn't available

**Fix:**
- Explicitly identify all dependencies during refinement
- Verify dependencies are available or have timeline
- Don't assume - ask and document

### 4. No SME Review

**Problem:** Story involves security, compliance, or technical complexity but experts haven't reviewed

**Fix:**
- Identify which SMEs need to review
- Schedule reviews before sprint planning
- Document SME feedback in story

### 5. Unclear Scope

**Problem:** Team doesn't know what's in scope vs. out of scope

**Fix:**
- Explicitly state what's included
- Explicitly state what's excluded
- If scope is large, split the story

### 6. Not Estimable

**Problem:** Team estimates range wildly (1 day to 2 weeks)

**Fix:**
- More detail needed in AC
- Technical spike may be needed first
- Break story into smaller, more understandable pieces

---

## Definition of Ready vs. Definition of Done

**Don't confuse these two concepts:**

| Definition of Ready (DoR) | Definition of Done (DoD) |
|---------------------------|--------------------------|
| **Before** development starts | **After** development completes |
| Story is ready to be worked on | Story is complete and shippable |
| Checklist for pulling into sprint | Checklist for closing the story |
| Managed by BA/PO | Managed by dev team and QA |
| Ensures we build the right thing | Ensures we built it right |

**Example DoD items (not part of DoR):**
- Code is written and reviewed
- Unit tests pass
- Integration tests pass
- UAT completed
- Documentation updated
- Deployed to staging
- No known bugs

---

## Customizing DoR for Your Team

This DoR template is a starting point. Customize it:

**Add criteria for your context:**
- Industry-specific requirements (healthcare, finance, government)
- Tool-specific needs (Jira fields, GitHub labels)
- Team-specific practices (architectural review, UX review)

**Remove criteria that don't apply:**
- If you're not in a regulated industry, compliance section may be overkill
- If stories are always small, "timeline constraints" may not be needed

**Adjust thresholds:**
- Maybe you require 4-5 AC minimum (not 2-3)
- Maybe mockups are required for ALL UI stories (not just recommended)

**Make it yours - but keep it consistent within your team.**

---

## Using Copilot to Check DoR

Ask Copilot to verify your story:

```
Review this user story against our Definition of Ready:

[paste DoR checklist]

Story to review:
[paste story]

For each DoR category, assess:
1. Which criteria are met?
2. Which criteria are not met?
3. What specific information is missing?
4. How can we make this story ready?
```

---

## Remember

**A story that's not ready is a risk to the sprint.**

Taking 30 minutes to make a story "ready" before sprint planning saves hours or days of mid-sprint disruption.

**Better to have 5 ready stories than 10 not-ready stories in your backlog.**

Quality > Quantity when it comes to story readiness.

---

**Ready to write stories that are truly "ready"?** Use this checklist every time!