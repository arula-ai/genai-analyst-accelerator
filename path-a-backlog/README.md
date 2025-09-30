# Path A: Backlog from Meeting Notes

## Overview

**Best for:** Business Analysts, Product Owners, Backlog Managers  
**Time:** 40 minutes hands-on  
**Difficulty:** Beginner to Intermediate

## What You'll Learn

In this path, you'll use GitHub Copilot to transform messy stakeholder meeting notes into production-ready backlog items:

1. **Generate Epics** - Extract high-level business capabilities from unstructured notes
2. **Create User Stories** - Split epics into INVEST-compliant stories with clear business value
3. **Write Acceptance Criteria** - Develop testable Given/When/Then scenarios including edge cases
4. **Build GitHub Issues** - Format stories as issues ready for sprint planning with full traceability

## Scenario

You've just facilitated a product discovery session about automated account alerts for a retail banking application. The meeting notes are typical: some clear requirements, lots of ambiguity, buried technical constraints, and scattered compliance considerations.

Your job: Turn these notes into a well-structured backlog that development can work from.

## Path Structure

### Inputs
- **[stakeholder-notes.md](inputs/stakeholder-notes.md)** - Raw meeting notes with intentional issues (ambiguity, missing detail, buried requirements)

### Templates
- **[user-story-template.md](templates/user-story-template.md)** - Standard format for user stories
- **[epic-template.md](templates/epic-template.md)** - Epic structure with business value
- **[github-issue-template.md](templates/github-issue-template.md)** - Issue format for GitHub
- **[invest-checklist.md](templates/invest-checklist.md)** - Quality checklist for stories
- **[definition-of-ready.md](templates/definition-of-ready.md)** - Readiness criteria

### Prompt Guides
- **[01-epic-generation-prompts.md](prompts/01-epic-generation-prompts.md)** - How to generate epics with Copilot
- **[02-story-splitting-prompts.md](prompts/02-story-splitting-prompts.md)** - How to split epics into stories
- **[03-gherkin-prompts.md](prompts/03-gherkin-prompts.md)** - How to write Gherkin acceptance criteria
- **[04-issue-creation-prompts.md](prompts/04-issue-creation-prompts.md)** - How to format as GitHub issues

### Exercises
- **[exercise-1-epics-and-stories.md](exercises/exercise-1-epics-and-stories.md)** - Generate epics and split into stories (12 min)
- **[exercise-2-acceptance-criteria.md](exercises/exercise-2-acceptance-criteria.md)** - Write Gherkin scenarios (13 min)
- **[exercise-3-github-issues.md](exercises/exercise-3-github-issues.md)** - Create formatted issues (15 min)

### Solutions
- **[sample-epics.md](solutions/sample-epics.md)** - Example epics showing quality standards
- **[sample-stories-with-invest.md](solutions/sample-stories-with-invest.md)** - Example stories with INVEST analysis
- **[sample-gherkin-scenarios.md](solutions/sample-gherkin-scenarios.md)** - Example acceptance criteria
- **[sample-github-issues.md](solutions/sample-github-issues.md)** - Example formatted issues

## Prerequisites

Before starting:

- [ ] GitHub Copilot is installed and working
- [ ] You've tested Copilot Chat (Ctrl/Cmd+Shift+I)
- [ ] You've reviewed [stakeholder-notes.md](inputs/stakeholder-notes.md)
- [ ] You have prompt guides open for reference

**Haven't set up yet?** See [../setup/copilot-setup.md](../setup/copilot-setup.md)

## Time Allocation

| Exercise | Time | Outcome |
|----------|------|---------|
| Exercise 1: Epics & Stories | 12 min | 2-3 epics, 3-5 user stories |
| Exercise 2: Acceptance Criteria | 13 min | Gherkin scenarios for each story |
| Exercise 3: GitHub Issues | 15 min | Formatted issues with traceability |
| **Total** | **40 min** | Production-ready backlog items |

## How to Use This Path

### Step 1: Read the Stakeholder Notes (5 minutes)

Open [inputs/stakeholder-notes.md](inputs/stakeholder-notes.md) and read through the meeting notes.

**As you read, look for:**
- Clear requirements (easy to spot)
- Ambiguous statements (vague or incomplete)
- Buried technical constraints (mentioned in passing)
- Compliance requirements (FINRA, TCPA)
- Implied edge cases (multi-account, joint accounts, failures)
- Business value (why we're building this)

**Don't sanitize yet** - In Exercise 1, you'll practice extracting just what you need.

### Step 2: Complete the Exercises in Order

**Important:** Do the exercises in sequence. Each builds on the previous one.

1. **Start here:** [exercise-1-epics-and-stories.md](exercises/exercise-1-epics-and-stories.md)
2. **Then:** [exercise-2-acceptance-criteria.md](exercises/exercise-2-acceptance-criteria.md)
3. **Finally:** [exercise-3-github-issues.md](exercises/exercise-3-github-issues.md)

Each exercise has:
- Clear timing (so you can pace yourself)
- Step-by-step instructions
- Checkpoints (to verify you're on track)
- Examples (showing what good looks like)
- Troubleshooting (for common issues)

### Step 3: Compare with Solutions

After completing each exercise, compare your work with the solutions:

- [solutions/sample-epics.md](solutions/sample-epics.md)
- [solutions/sample-stories-with-invest.md](solutions/sample-stories-with-invest.md)
- [solutions/sample-gherkin-scenarios.md](solutions/sample-gherkin-scenarios.md)
- [solutions/sample-github-issues.md](solutions/sample-github-issues.md)

**Don't peek early!** You'll learn more by trying first, then comparing.

### Step 4: Self-Assessment

After completing all exercises, ask yourself:

- [ ] Can I generate epics that have clear business value?
- [ ] Can I split epics into INVEST-compliant stories?
- [ ] Can I write specific, testable acceptance criteria?
- [ ] Can I identify edge cases and negative scenarios?
- [ ] Can I format everything as GitHub issues with traceability?

If you answered yes to 4+ questions, you're ready to apply this at work!

## Learning Objectives

By the end of this path, you will be able to:

1. **Extract structure from chaos** - Take messy meeting notes and identify distinct requirements
2. **Apply the five-part prompt pattern** - Role + Inputs + Format + Constraints + Examples
3. **Generate high-quality epics** - With business value, assumptions, and story themes
4. **Create INVEST-compliant stories** - Independent, Negotiable, Valuable, Estimable, Small, Testable
5. **Write Gherkin scenarios** - Given/When/Then format with specific examples
6. **Include negative scenarios** - Error conditions, edge cases, boundary testing
7. **Maintain traceability** - Link stories back to source documentation
8. **Format for GitHub** - Create issues that development can immediately work from

## Common Challenges (and How to Overcome Them)

### Challenge 1: Copilot's epics are too technical

**Why it happens:** Copilot picks up on technical details from meeting notes

**Solution:** Add constraint to prompt: "Focus on business capabilities, not implementation. Describe WHAT we're building, not HOW."

### Challenge 2: Stories are too vague

**Why it happens:** Prompt lacks specificity or examples

**Solution:** 
- Add: "Be specific. Include concrete examples and measurable outcomes."
- Show an example: "Like this: [paste example from template]"

### Challenge 3: Missing edge cases

**Why it happens:** Copilot defaults to happy path

**Solution:** Explicitly ask: "Now generate negative scenarios for error conditions, validation failures, and edge cases. Be specific about what goes wrong and expected system behavior."

### Challenge 4: Acceptance criteria aren't testable

**Why it happens:** Vague Given/When/Then statements

**Solution:** Add: "Use specific data examples. Instead of 'valid input' say 'email format: name@example.com'. Instead of 'appropriate error' specify 'Error message: Email format invalid'."

### Challenge 5: Output is cut off mid-sentence

**Why it happens:** Response length limits

**Solution:** Simply ask: "Continue from where you stopped."

**Full troubleshooting:** [../resources/copilot-troubleshooting.md](../resources/copilot-troubleshooting.md)

## Tips for Success

### 1. Start Fresh for Each Exercise

Create new files for each exercise:
- `my-epics.md` (Exercise 1)
- `my-stories.md` (Exercise 1)
- `my-acceptance-criteria.md` (Exercise 2)
- `my-issues.md` (Exercise 3)

This keeps your work organized and lets you compare progress.

### 2. Use the Prompt Guides

Don't try to wing it. The prompt guides have battle-tested prompts that work:
- [prompts/01-epic-generation-prompts.md](prompts/01-epic-generation-prompts.md)
- [prompts/02-story-splitting-prompts.md](prompts/02-story-splitting-prompts.md)
- [prompts/03-gherkin-prompts.md](prompts/03-gherkin-prompts.md)
- [prompts/04-issue-creation-prompts.md](prompts/04-issue-creation-prompts.md)

Copy prompts directly from guides and customize as needed.

### 3. Iterate, Don't Accept First Output

Copilot's first response is a starting point, not the final answer:

```
1. Generate: "Create user stories for this epic"
2. Critique: "Review these stories for ambiguities and gaps"
3. Refine: "Rewrite story #2 to address the feedback"
```

### 4. Reference the Templates

Always point Copilot to your templates:

```
"Use the format from templates/user-story-template.md"
```

This ensures consistent output.

### 5. Apply Professional Judgment

Remember: You own the quality, not Copilot.

- Does this make business sense?
- Is this technically feasible?
- Are compliance requirements addressed?
- Would development accept this in sprint planning?

If not, refine before moving on.

## What You'll Create

By the end of the 40 minutes, you'll have:

- [ ] 2-3 well-formed epics with business value and story themes
- [ ] 5-8 INVEST-compliant user stories
- [ ] 15-25 Gherkin acceptance criteria (3-5 per story)
- [ ] 5-8 GitHub issues formatted and ready for sprint planning
- [ ] Full traceability from meeting notes to stories to test scenarios

## Next Steps After Completing Path A

### Immediate (During Session)

1. **Peer Review** - Exchange one story with your neighbor
   - What's the strongest part?
   - What needs improvement?
   - Use the [invest-checklist.md](templates/invest-checklist.md)

2. **Debrief** - Return to main session for group discussion

### Post-Session

1. **Homework Assignments**
   - [Critique & Refine](../homework/critique-prompts.md) - Use Copilot to identify gaps
   - [Requirements Traceability Matrix](../homework/rtm-exercise.md) - Build automated traceability
   - [Custom DoR/DoD](../homework/dor-dod-exercise.md) - Create team-specific checklists

2. **Apply at Work**
   - Choose one real backlog item
   - Use techniques from this lab
   - Share results with your team

3. **Build Your Prompt Library**
   - Save prompts that worked well
   - Document lessons learned
   - Share with your team

## Additional Resources

- **[Prompt Pattern Guide](../resources/prompt-pattern-guide.md)** - Master the five-part pattern
- **[Gherkin Reference](../resources/gherkin-reference.md)** - Complete guide to Given/When/Then
- **[Copilot Troubleshooting](../resources/copilot-troubleshooting.md)** - Solutions to common issues
- **[SECURITY.md](../SECURITY.md)** - Security and governance guidelines

## Getting Help

**Stuck during an exercise?**
1. Check the "Troubleshooting" section in that exercise
2. Review the relevant prompt guide
3. Look at the solution examples (but try first!)
4. Ask the facilitator

**Copilot not working?**
- [Copilot troubleshooting guide](../resources/copilot-troubleshooting.md)

## Ready to Start?

**Everything set up?** Let's go!

➡️ **Start here:** [Exercise 1: Epics & Stories](exercises/exercise-1-epics-and-stories.md)

---

**Remember:** The goal isn't perfection. It's learning how to use Copilot as an effective assistant in your requirements analysis work. Have fun!