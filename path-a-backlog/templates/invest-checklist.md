# INVEST Checklist for User Stories

## Purpose

Use this checklist to verify that your user stories meet INVEST quality criteria before committing them to the backlog or sprint.

INVEST is an acronym created by Bill Wake that represents six characteristics of well-formed user stories:
- **I**ndependent
- **N**egotiable
- **V**aluable
- **E**stimable
- **S**mall
- **T**estable

---

## The Checklist

### ✓ Independent

**Can this story be developed without depending on other stories?**

- [ ] Story can be prioritized and delivered separately from other stories
- [ ] Story does not have hard dependencies on other unfinished stories
- [ ] If dependencies exist, they are on completed work or clearly documented
- [ ] Story can be worked on in any order within the sprint

**Why it matters:** Independent stories give the team flexibility in prioritization and reduce blocked work.

**Red flags:**
- ❌ "This story requires US-042 to be completed first"
- ❌ "Can't start this until the database changes from US-038 are done"
- ❌ Multiple stories that must be done in strict sequence

**How to fix:**
- Combine tightly coupled stories into one story
- Complete the dependency first, then make this story independent
- Restructure to remove the dependency
- Clearly document and accept the dependency if it cannot be avoided

---

### ✓ Negotiable

**Does this story describe WHAT needs to be done, not HOW to do it?**

- [ ] Story focuses on the business need or user capability
- [ ] Implementation details are not prescribed
- [ ] There's room for developer/team input on technical approach
- [ ] Story describes the desired outcome, not the solution

**Why it matters:** Negotiable stories allow the development team to find the best technical solution and adapt as they learn.

**Red flags:**
- ❌ "Use React useState hook to store the threshold value"
- ❌ "Create a POST endpoint at /api/v2/alerts/threshold"
- ❌ "Store preference in alerts_config table with columns id, user_id, threshold_value"

**How to fix:**
- Remove implementation details from the story
- Move technical notes to "Developer Notes" or "Technical Considerations" section
- Focus on user capability: "Customer can set threshold" not "System uses database table to store threshold"

---

### ✓ Valuable

**Does this story deliver clear business value or user benefit?**

- [ ] The "so that" clause articulates specific business value or user benefit
- [ ] Can answer "Why are we building this?"
- [ ] Benefit is to the end user, customer, or business (not just the development team)
- [ ] Value can be explained to stakeholders in simple terms

**Why it matters:** Valuable stories justify the investment of time and resources. They help prioritize the backlog.

**Red flags:**
- ❌ "So that the system works better"
- ❌ "So that we have cleaner code"
- ❌ "So that we can use the new framework"
- ❌ No "so that" clause at all

**How to fix:**
- Ask "Why does the user want this?"
- Ask "What problem does this solve?"
- Be specific: "So that I can avoid $35 overdraft fees" not "So that I have a better experience"
- Include measurable outcomes where possible

---

### ✓ Estimable

**Does the team have enough information to estimate effort?**

- [ ] Technical approach is clear enough for estimation (even if not fully designed)
- [ ] No major unknowns or research spikes needed before estimating
- [ ] Acceptance criteria provide sufficient detail
- [ ] Team members understand what "done" looks like

**Why it matters:** If you can't estimate it, you don't understand it well enough. Estimable stories can be planned and committed to.

**Red flags:**
- ❌ "We don't know if this is even possible"
- ❌ "Need to research integration options before we can estimate"
- ❌ "Too many unknowns"
- ❌ Team estimates range from 1 day to 3 weeks (huge variance)

**How to fix:**
- Conduct a research spike first to reduce unknowns
- Add more detail to acceptance criteria
- Break into smaller stories if complexity is the issue
- Clarify technical approach with tech lead or architect
- Document assumptions that estimation is based on

---

### ✓ Small

**Can this story be completed within one sprint?**

- [ ] Story is completable in 1-5 days (not weeks)
- [ ] Does not require multiple team members working in parallel
- [ ] Can be demonstrated at sprint review as working functionality
- [ ] If too large, can be split into smaller independent stories

**Why it matters:** Small stories flow through the development process faster, provide faster feedback, and reduce risk.

**Guidelines:**
- ✅ 1-3 days of work = ideal size
- ⚠️ 4-5 days of work = acceptable but consider splitting
- ❌ 6+ days or 2+ weeks = too large, must split

**Red flags:**
- ❌ Story spans entire sprint and nothing else fits
- ❌ "This is really 3 stories in one"
- ❌ Requires backend dev, frontend dev, and DBA working sequentially
- ❌ Can't be demo'd until sprint end

**How to fix:**
- Split by workflow: separate configuration from delivery
- Split by CRUD operations: create threshold, update threshold, delete threshold
- Split by scenario: happy path first, error handling second
- Split by acceptance criteria: if you have 10 AC, that's probably 2-3 stories
- Vertical slices: each story delivers end-to-end functionality for one scenario

---

### ✓ Testable

**Can this story be verified through testing?**

- [ ] Acceptance criteria are specific and measurable
- [ ] Can objectively determine pass/fail for each criterion
- [ ] QA/UAT can write test cases from the acceptance criteria
- [ ] No vague or subjective terms (like "fast," "user-friendly," "appropriate")

**Why it matters:** Testable stories have clear success criteria. The team knows when the story is done.

**Red flags:**
- ❌ "System should be performant"
- ❌ "Error messages should be helpful"
- ❌ "UI should be intuitive"
- ❌ "Works well"

**How to fix:**
- Use Given/When/Then format for acceptance criteria
- Include specific data examples
- Define "done" with numbers: "responds within 2 seconds"
- Specify exact error messages: "displays 'Email format invalid'"
- Make every AC verifiable by QA

---

## Scoring Guide

Count how many INVEST criteria your story meets:

- **6 checks:** ✅ Excellent - Story is ready for sprint planning
- **5 checks:** ✅ Good - Minor refinements needed, but acceptable
- **4 checks:** ⚠️ Fair - Refinement needed before sprint planning
- **3 or fewer:** ❌ Not ready - Significant revision required

**Note:** All criteria are important, but some are more critical:
- **Must have:** Valuable, Testable (without these, the story is not useful)
- **Should have:** Small, Estimable (without these, planning is difficult)
- **Nice to have:** Independent, Negotiable (without these, work is harder but possible)

---

## Example Evaluation

### Story to Evaluate

```
As a retail banking customer
I want to set a custom dollar threshold for low balance alerts
So that I can avoid overdraft fees and manage my cash flow

Acceptance Criteria:
AC1: Customer can enter threshold between $0 and $5,000
AC2: System validates threshold on save
AC3: Threshold is persisted to customer profile
AC4: Confirmation message displays showing threshold value
AC5: Threshold takes effect immediately
```

### INVEST Analysis

#### ✓ Independent
**Score: YES** ✅
- Can be developed without waiting for other stories
- Does not require specific order in the sprint
- Depends on existing Customer Profile API (already complete)

#### ✓ Negotiable
**Score: YES** ✅
- Describes WHAT (set threshold) not HOW (database schema, API design)
- Implementation approach is left to development team
- No prescribed technical solution

#### ✓ Valuable
**Score: YES** ✅
- Clear benefit: "avoid overdraft fees and manage cash flow"
- Specific problem solved (overdraft fees are $35 each)
- Easy to explain value to stakeholders

#### ✓ Estimable
**Score: YES** ✅
- Straightforward CRUD operation
- Team understands what's needed
- Tech lead estimates 3 story points (2-3 days)
- No major unknowns

#### ✓ Small
**Score: YES** ✅
- Completable in 2-3 days
- Single developer can complete it
- Can be demo'd at sprint review
- Not too complex

#### ✓ Testable
**Score: YES** ✅
- All AC are specific and verifiable
- QA can write test cases for each criterion
- Pass/fail is objective
- Could be improved with Given/When/Then format, but acceptable

**Final Score: 6/6 - Story is ready for sprint planning** ✅

---

## Example of a Story That Fails INVEST

### Problematic Story

```
As a customer
I want the alert system to work well
So that I have a better experience

Acceptance Criteria:
AC1: Alerts should be fast
AC2: System should handle errors gracefully
AC3: Use microservices architecture
```

### INVEST Analysis

#### ✗ Independent
**Score: MAYBE** ⚠️
- Unclear what dependencies exist
- "Alert system" is vague - depends on other components?

#### ✗ Negotiable
**Score: NO** ❌
- AC3 prescribes technical solution (microservices)
- Should let dev team decide architecture

#### ✗ Valuable
**Score: NO** ❌
- "Work well" and "better experience" are not specific benefits
- No measurable value
- Can't explain to stakeholders why this matters

#### ✗ Estimable
**Score: NO** ❌
- Too vague to estimate
- "Work well" means different things to different people
- No clarity on scope

#### ✗ Small
**Score: NO** ❌
- "Alert system" sounds like entire epic, not one story
- Probably months of work, not days

#### ✗ Testable
**Score: NO** ❌
- "Fast" is subjective - 1 second? 1 minute?
- "Gracefully" is not measurable
- Can't write test cases from these criteria

**Final Score: 0/6 (maybe 1/6 for Independence) - Story needs complete rewrite** ❌

---

## How to Use This Checklist

### During Story Writing

As you write stories with Copilot:

1. Generate initial story
2. Run it through INVEST checklist
3. Identify gaps (which criteria fail?)
4. Use Copilot to refine: "Make this story more specific and testable"
5. Re-check until 5-6 criteria are met

### During Backlog Refinement

Use this checklist in grooming sessions:

1. Team reviews story together
2. Each person evaluates against INVEST
3. Discuss any criteria that fail
4. Refine story until team agrees it's ready
5. Only stories scoring 5-6 go into sprint planning

### As a Copilot Prompt

Ask Copilot to check your stories:

```
Review this user story against INVEST criteria:

[paste your story]

For each criterion (Independent, Negotiable, Valuable, Estimable, Small, Testable):
- Assess if the story meets the criterion
- If not, explain why
- Suggest specific improvements
```

---

## Common INVEST Violations and Fixes

### Violation: Story is Too Large (Fails "Small")

**Symptom:** Story takes 2+ weeks, has 10+ acceptance criteria

**Fix:**
- Split by workflow (config separate from alert delivery)
- Split by CRUD (create, read, update, delete threshold)
- Split by scenario (happy path, then error handling)
- Split by actor (admin features separate from customer features)

### Violation: Story Prescribes Implementation (Fails "Negotiable")

**Symptom:** Story includes database schemas, API designs, technology choices

**Fix:**
- Remove implementation details from story description
- Move to "Technical Notes" or "Developer Context" section
- Rewrite to focus on capability, not solution

### Violation: No Clear Value (Fails "Valuable")

**Symptom:** "So that" clause is vague or missing

**Fix:**
- Ask "Why does the user want this?"
- Include specific, measurable benefit
- Connect to business goals or user pain points

### Violation: Vague Acceptance Criteria (Fails "Testable")

**Symptom:** AC uses words like "appropriate," "user-friendly," "fast," "well"

**Fix:**
- Use Given/When/Then format
- Include specific data examples
- Define numbers: "within 2 seconds," "displays error message: [exact text]"

---

## Additional Resources

- **User Story Template:** [user-story-template.md](user-story-template.md)
- **Definition of Ready:** [definition-of-ready.md](definition-of-ready.md)
- **Gherkin Reference:** [../resources/gherkin-reference.md](../../resources/gherkin-reference.md)

---

**Remember:** INVEST is a guideline, not a rigid rule. Context matters. Use professional judgment. But if your story fails 3+ criteria, it probably needs more work before sprint planning.