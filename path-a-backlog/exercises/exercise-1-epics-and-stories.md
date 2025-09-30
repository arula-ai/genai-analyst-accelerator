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

1. **Open the stakeholder notes** in your editor:
   - Navigate to `/path-a-backlog/inputs/stakeholder-notes.md`
   - Review the meeting notes quickly (you should have done this in prep)

2. **Use Copilot to generate epics** with this prompt:
   ```
   You are a senior business analyst in a regulated financial services environment.

   Review these stakeholder notes from our product discovery session:
   [COPY AND PASTE the entire stakeholder-notes.md content here]

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

3. **Review and refine the output**:
   - Do the epics capture the main themes from the meeting?
   - Are they focused on WHAT we're building, not HOW?
   - Is each epic independently valuable?

### Checkpoint ✓
After 4 minutes you should have:
- [ ] 2-3 well-structured epics
- [ ] Each epic has clear business value statement
- [ ] Compliance requirements are flagged
- [ ] Dependencies are identified
- [ ] Story themes are outlined

### Tips
- If epics are too technical, add: "Focus on business capabilities, not implementation"
- If missing compliance, add: "This is for regulated banking - include regulatory considerations"
- If scope is unclear, add: "Be specific about what's included and excluded"

### What Good Looks Like
**Example Epic:**
```
Epic Title: Customer Balance Alert Configuration
Description: Enable customers to configure personalized balance alerts to prevent overdraft fees and manage cash flow proactively. This self-service capability addresses the #1 customer request and competitive gap.

Business Value: 
- Problem: 30% of customers incur preventable overdraft fees due to lack of advance warning
- Expected Outcome: 25% reduction in overdraft incidents, improved customer retention

Key Assumptions:
- Customers will provide accurate contact information for alerts
- 15-minute batch delay from core banking is acceptable for "real-time" alerts
- One global threshold per customer sufficient for MVP

Story Themes:
1. Threshold configuration and validation
2. Notification channel selection (email/SMS)
3. Alert preference management
4. Compliance and audit trail
5. Customer notification delivery
```

---

## Step 2: Split Epic into Stories (5 minutes)

### Instructions

1. **Choose your most complex epic** from Step 1 (usually the one with the most story themes)

2. **Use this prompt to split it into user stories**:
   ```
   You are a business analyst breaking down this epic into INVEST-compliant user stories:

   [PASTE YOUR CHOSEN EPIC]

   Create 3-5 user stories that:
   - Follow the format: "As a [user type], I want [capability], So that [business value]"
   - Are independently deliverable
   - Can be completed in 1-3 days each
   - Include basic acceptance criteria (2-3 criteria per story)
   - Cover the main story themes from the epic

   For each story, provide:
   - User story statement
   - 2-3 acceptance criteria
   - Story size estimate (Small/Medium/Large)

   Ensure stories follow INVEST principles:
   - Independent (can be built separately)
   - Negotiable (describes what, not how)
   - Valuable (clear benefit)
   - Estimable (team can size it)
   - Small (fits in one sprint)
   - Testable (criteria are verifiable)
   ```

3. **Review each story against INVEST criteria**:
   - Can each story be developed independently?
   - Is the business value clear for each story?
   - Are acceptance criteria specific and testable?

### Checkpoint ✓
After 5 minutes total (9 minutes elapsed), you should have:
- [ ] 3-5 user stories from your chosen epic
- [ ] Each story follows proper "As a...I want...So that" format
- [ ] Acceptance criteria are specific and testable
- [ ] Stories are appropriately sized (Small/Medium)
- [ ] Stories cover the epic's scope completely

### Tips
- If stories are too large, ask Copilot: "Split this story into smaller, more focused stories"
- If acceptance criteria are vague, add: "Make acceptance criteria specific and measurable"
- If stories overlap, ask: "Ensure each story is independently deliverable"

### What Good Looks Like
**Example Story:**
```
Story: As a retail banking customer, I want to set a custom balance threshold for alerts, so that I can avoid overdraft fees by being warned before my balance gets too low.

Acceptance Criteria:
- AC1: Customer can enter threshold amount between $0 and $5,000
- AC2: System validates threshold on save (numeric, within range, positive value)
- AC3: Threshold is immediately saved to customer profile
- AC4: Confirmation message displays showing threshold value and affected accounts

Size: Small (2-3 days)
```

---

## Step 3: Add Risks & Dependencies (3 minutes)

### Instructions

1. **Select one story from Step 2** (choose the most complex or risky one)

2. **Use this prompt to add risks and dependencies**:
   ```
   Review this user story for completeness:

   [PASTE YOUR SELECTED STORY]

   Identify:
   1. Technical dependencies (APIs, systems, databases)
   2. External dependencies (other teams, third parties)
   3. Assumptions that could become risks
   4. Regulatory/compliance considerations
   5. Potential delivery risks

   For each dependency and risk, specify:
   - Type: [Technical/External/Compliance/Delivery]
   - Description: [What's needed or what could go wrong]
   - Impact: [High/Medium/Low]
   - Mitigation: [How to reduce risk]

   Also suggest any missing acceptance criteria.
   ```

3. **Add the analysis to your story**:
   - Update your story with dependencies and risks
   - Add any suggested acceptance criteria
   - Note any additional compliance requirements

### Checkpoint ✓
After 3 minutes total (12 minutes elapsed), you should have:
- [ ] Dependencies clearly identified and categorized
- [ ] Risks assessed with impact levels
- [ ] Mitigation strategies noted
- [ ] Additional acceptance criteria added if needed
- [ ] Compliance considerations documented

### Tips
- Don't skip this step - risks found early are easier to manage
- Focus on external dependencies that could block development
- Consider what could go wrong during implementation

### What Good Looks Like
**Example Risk & Dependency Analysis:**
```
Dependencies:
- TECHNICAL: Customer Profile Service API v2.1 (stores alert preferences) - HIGH
- EXTERNAL: Database team approval for schema changes (5-day lead time) - HIGH
- TECHNICAL: Account Service API for account validation - MEDIUM

Risks:
- HIGH: Legacy customer profile system uses batch updates (4-hour delay), conflicts with "immediate" save requirement
- MEDIUM: Multi-account customers may expect per-account thresholds, but MVP only supports global threshold
- LOW: Input validation may need to handle edge cases (negative numbers, currency formatting)

Additional AC:
- AC5: System logs threshold changes for audit trail (FINRA compliance)
- AC6: Error message displays for invalid input with specific guidance
```

---

## Exercise Complete!

### Deliverables Checklist
- [ ] 2-3 well-structured epics with business value
- [ ] 3-5 INVEST-compliant user stories
- [ ] Risk and dependency analysis for at least one story
- [ ] All work properly formatted and documented

### Time Check
If you completed in 12 minutes: Excellent pacing!  
If you took longer: Focus on using prompts efficiently and reviewing output quickly  
If you finished early: Add acceptance criteria to more stories or analyze additional risks

### Peer Review (2 minutes)
Partner with someone nearby:
- Do their epics capture the main business themes from stakeholder notes?
- Are user stories independently deliverable?
- Are acceptance criteria specific and testable?
- Are dependencies realistic and properly categorized?

### Common Issues and Quick Fixes

**Issue:** Epics are too technical or implementation-focused  
**Fix:** Re-prompt with: "Focus on business capabilities and customer value, not technical implementation"

**Issue:** User stories are too large  
**Fix:** Ask Copilot: "Split this into smaller stories that can each be completed in 1-3 days"

**Issue:** Acceptance criteria are vague  
**Fix:** Add to prompt: "Make criteria specific, measurable, and testable with exact values"

**Issue:** Missing compliance considerations  
**Fix:** Add: "This is for regulated financial services - include audit and compliance requirements"

### Troubleshooting

**Copilot gives generic output:** Make sure you pasted the full stakeholder notes content. Add more context about financial services regulations.

**Stories don't follow INVEST:** Review each criterion explicitly and re-prompt asking Copilot to check INVEST compliance.

**Missing dependencies:** Financial services applications always have dependencies. If none are identified, specifically ask about integration points, data storage, and external systems.

### Next Steps
Move to Exercise 2: Acceptance Criteria Generation (37:00-50:00)
- You'll take your user stories and create detailed Gherkin scenarios
- Focus on comprehensive test coverage including edge cases
- Ensure compliance and audit requirements are properly tested

### Key Takeaways
- Good epics focus on business value, not technical implementation
- User stories should be independently deliverable and testable
- Dependencies and risks identified early prevent delays later
- Financial services requires special attention to compliance and audit trails
- Copilot works best with specific, context-rich prompts