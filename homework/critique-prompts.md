# Homework: Refine Stories with Critique Prompts
**Time Estimate:** 30-45 minutes

## Objective
Learn to use Copilot's critique capability to identify and fix gaps in your requirements artifacts. This assignment teaches you to systematically review user stories for quality, identify patterns of common issues, and apply the INVEST criteria through AI assistance.

## Assignment

### Part 1: Critique Two Stories (20 minutes)

Choose two user stories you created in the lab (or use the samples provided in the solutions folder). For each story, apply Copilot's analytical capabilities to identify quality issues.

**Step 1:** Select Your Stories
- Use stories from your Path A or Path B lab work, OR
- Use stories from `/path-a-backlog/solutions/sample-stories-with-invest.md`, OR  
- Use stories from your current project (sanitize any PII first)

**Step 2:** Apply the Comprehensive Critique Prompt

```
You are an experienced business analyst reviewing this user story for quality. Act as a constructive critic focused on helping improve the story.

[PASTE YOUR STORY HERE - include story statement, acceptance criteria, any additional sections]

Identify specific issues in these categories:

1. **Ambiguities:** Any unclear terms, vague requirements, or assumptions not explicitly stated
   - Point to specific words or phrases that could be interpreted multiple ways
   - Identify technical terms that might need definition
   - Note any implied business rules that aren't documented

2. **Missing NFRs:** Non-functional requirements (performance, security, compliance, accessibility)
   - What performance expectations should be set?
   - Are there security considerations not addressed?
   - What compliance requirements might apply?
   - Are accessibility standards needed?

3. **Testability Issues:** Acceptance criteria that cannot be objectively verified
   - Which criteria are subjective rather than measurable?
   - What specific test data or scenarios are missing?
   - Are there criteria that depend on unclear definitions?

4. **INVEST Violations:** Ways this story fails INVEST principles
   - Independent: Does it depend on other stories?
   - Negotiable: Is implementation approach prescribed?
   - Valuable: Is business value clear and specific?
   - Estimable: Could a team size this confidently?
   - Small: Can it be completed in one sprint?
   - Testable: Can success be measured objectively?

5. **Edge Cases:** Scenarios not covered by current acceptance criteria
   - What error conditions might occur?
   - What happens with invalid or boundary data?
   - Are there integration failure scenarios?
   - What about concurrent user actions?

6. **Dependencies:** Technical or business dependencies not documented
   - What external systems are involved?
   - What other teams or approvals are needed?
   - Are there data migration or setup requirements?

For each issue found, provide:
- **Specific example** of the problem (quote the problematic text)
- **Suggested improvement** (specific wording or addition)
- **Severity:** Critical (blocks development), Medium (creates risk), Low (minor improvement)
- **Rationale:** Why this improvement matters
```

**Step 3:** Document the Findings
Create a file called `story-critique-results.md` and capture:
- The original story
- All critique feedback organized by category
- Your assessment of which issues are most important to fix

### Part 2: Apply Improvements (15 minutes)

Take the critique feedback and systematically improve your stories.

**Step 1:** Prioritize Issues
Start with Critical and Medium severity issues. Use this follow-up prompt:

```
Based on this critique feedback: [paste specific critique item]

Rewrite the [story description/acceptance criteria/NFR section] to address this gap while keeping the story focused and achievable.

Requirements:
- Maintain the core business value
- Keep the story small enough for one sprint
- Make improvements specific and testable
- Add only what's necessary - don't over-engineer
```

**Step 2:** Apply INVEST Verification
After making improvements, verify INVEST compliance:

```
Review this revised user story against INVEST criteria:

[PASTE REVISED STORY]

For each INVEST criterion, rate 1-5 (5=excellent) and explain:
- Independent: Can this be developed without waiting for other stories?
- Negotiable: Does it specify WHAT without prescribing HOW?
- Valuable: Is the business benefit clear and measurable?
- Estimable: Would a development team have enough information to estimate effort?
- Small: Can this realistically be completed in one sprint?
- Testable: Can acceptance be verified objectively?

If any criterion scores below 4, suggest specific improvements.
```

### Part 3: Before/After Comparison (10 minutes)

Document your improvements to identify patterns for future use.

**Create a comparison document:**

```markdown
## Story US-001: Before Critique

### Original Story
[paste original story]

### Original INVEST Score
- Independent: [score]/5
- Negotiable: [score]/5  
- Valuable: [score]/5
- Estimable: [score]/5
- Small: [score]/5
- Testable: [score]/5
**Total: [sum]/30**

---

## Critique Findings

### Critical Issues
- [list critical issues found]

### Medium Issues  
- [list medium issues found]

### Low Issues
- [list low priority issues found]

---

## Story US-001: After Refinement

### Improved Story
[paste improved story]

### Improved INVEST Score
- Independent: [score]/5
- Negotiable: [score]/5
- Valuable: [score]/5  
- Estimable: [score]/5
- Small: [score]/5
- Testable: [score]/5
**Total: [sum]/30**

### Key Improvements Made
1. **[Category]:** [What changed and why it matters]
2. **[Category]:** [What changed and why it matters]
3. **[Category]:** [What changed and why it matters]

### Patterns Learned
[What types of issues do you consistently miss? What prompts worked best?]
```

**Repeat this process for your second story.**

---

## What to Submit

Create these files in your homework folder:
- [ ] `story-critique-results.md` - Raw critique output for both stories
- [ ] `story-improvements.md` - Before/after comparison for both stories  
- [ ] `critique-patterns.md` - Your reflection on patterns and learnings

---

## Success Criteria

Your refined stories should demonstrate:
- [ ] **Zero ambiguous terms** (or terms are clearly defined in context)
- [ ] **At least 2 relevant NFRs** per story (performance, security, compliance, etc.)
- [ ] **Testable, specific acceptance criteria** with measurable outcomes
- [ ] **Full INVEST compliance** (score 24+ out of 30)
- [ ] **Documented dependencies** with mitigation strategies
- [ ] **Edge cases covered** in acceptance criteria or noted as future stories

**Quality indicators:**
- Critique identified 8-15 specific issues (too few suggests surface review, too many suggests poor starting quality)
- Improvements address root causes, not just symptoms  
- Revised stories are still achievable in one sprint
- Business value remains clear after technical improvements

---

## Tips for Better Results

### If critique seems too generic:
```
Add context: "This is for a regulated financial services environment with requirements for FINRA compliance, audit trails, and integration with legacy core banking systems. Focus on compliance and audit requirements specific to this domain."
```

### If critique misses obvious issues:
```
Be more specific: "Review the acceptance criteria specifically for testability. Are there any that cannot be objectively verified with pass/fail results? Look for subjective terms like 'user-friendly' or 'fast enough'."
```

### If you disagree with a critique point:
That's perfectly valid! Document your reasoning:
```markdown
**Critique Point:** [The critique]
**My Decision:** Keep as-is
**Rationale:** [Why you're keeping it unchanged]
```

Critical thinking and professional judgment are essential - Copilot provides analysis, but you make the decisions.

### If improvements make stories too large:
```
This revised story seems too large for one sprint. Suggest how to split it into 2 smaller stories that:
- Each deliver independent value  
- Can be prioritized separately
- Together address the original requirement
- Maintain clear business value
```

---

## Common Patterns You'll Discover

After completing this exercise, most analysts find they consistently:

1. **Under-specify NFRs** - especially performance, security, and compliance
2. **Use vague acceptance criteria** - "system displays results" vs "system displays search results within 2 seconds"
3. **Miss error handling** - focus on happy path, ignore edge cases
4. **Assume domain knowledge** - terms that seem obvious aren't defined
5. **Skip dependency documentation** - external system requirements aren't explicit

Keep a running list of your personal patterns to improve future story writing.

---

## Bonus Challenge

If you finish early, try this advanced critique prompt:

```
Analyze these two improved stories for potential integration issues:

[PASTE BOTH IMPROVED STORIES]

Identify:
1. Conflicting assumptions between stories
2. Shared data elements that need consistent handling  
3. User experience conflicts (different flows for similar actions)
4. Technical integration points that need coordination
5. Test scenarios that should verify inter-story behavior

Recommend how to resolve any issues found.
```

This teaches you to think beyond individual stories to system-level coherence.

---

## Why This Matters

Systematic critique skills are essential because:

- **Prevents downstream issues:** Catching gaps early saves development rework
- **Improves team velocity:** Clear requirements reduce back-and-forth during development  
- **Ensures compliance:** Regulated environments require thorough documentation
- **Builds expertise:** Pattern recognition improves your natural story-writing ability
- **Scales knowledge:** Junior analysts can learn to apply senior-level review techniques

The critique discipline you build here will make you a more effective requirements analyst in any environment.