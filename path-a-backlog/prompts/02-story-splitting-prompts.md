# Story Splitting Prompts

## Overview
This guide provides prompt templates for breaking down epics into well-formed user stories that follow INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable). These prompts are designed for financial services environments where stories must balance business value with regulatory compliance and risk management.

## The Five-Part Prompt Pattern
Every effective prompt includes:
1. **Role:** Tell Copilot what role to assume
2. **Inputs:** Provide the source material
3. **Format:** Specify the desired output structure
4. **Constraints:** Add requirements and boundaries
5. **Examples:** Show what good looks like

---

## Prompt 1: Epic to Stories Breakdown

### When to Use
Use this prompt to decompose an epic into 5-8 manageable user stories.

### The Prompt
```
You are a senior business analyst in a regulated financial services environment.

Break down this epic into user stories:

[PASTE EPIC]

Generate 5-8 user stories that:
- Each follow INVEST criteria
- Deliver independent value
- Can be completed in 1-3 days
- Include acceptance criteria
- Consider compliance requirements

For each story, provide:
- Title: "As a [user type], I want [capability] so that [business value]"
- Description: [2-3 sentences explaining the story]
- Acceptance Criteria: [3-5 Given-When-Then statements]
- Dependencies: [Other stories or external requirements]
- Compliance Notes: [Regulatory considerations]

Ensure stories progress logically from basic functionality to advanced features.
```

### Expected Output
Copilot should generate a sequence of well-structured user stories that build incrementally toward the epic's goal, each delivering standalone value while maintaining regulatory compliance.

### Tips
- If stories are too large, add: "Each story should be completable in 1-2 days maximum"
- If missing business value, add: "Each story must deliver measurable user value"
- If dependencies are unclear, add: "Clearly identify which stories must be completed first"

---

## Prompt 2: INVEST Criteria Validation

### When to Use
After generating stories, use this to ensure they meet quality standards.

### The Prompt
```
Review these user stories against INVEST criteria:

[PASTE USER STORIES]

For each story, evaluate:

**Independent:** Can this story be developed without waiting for other stories?
**Negotiable:** Is the story open to discussion and refinement?
**Valuable:** Does it deliver clear business or user value?
**Estimable:** Can the team reasonably estimate effort?
**Small:** Is it small enough to complete in one sprint?
**Testable:** Are the acceptance criteria clear and verifiable?

Rate each criterion as PASS/FAIL and provide specific recommendations for any failures.

For financial services context, also check:
- Audit trail requirements
- Data privacy compliance
- Security considerations
- Risk management needs
```

### Expected Output
Copilot should provide a structured assessment of each story against INVEST criteria with specific recommendations for improvement.

---

## Prompt 3: Story Sequencing and Dependencies

### When to Use
To organize stories into a logical delivery sequence.

### The Prompt
```
Analyze these user stories for optimal delivery sequence:

[PASTE USER STORIES]

Create a delivery plan that:
1. Identifies prerequisite relationships
2. Maximizes early value delivery
3. Manages technical and business risks
4. Considers compliance checkpoints
5. Allows for parallel development where possible

For each story, specify:
- Delivery Order: [Sprint 1, 2, 3, etc.]
- Prerequisites: [Stories that must be completed first]
- Risk Level: [High/Medium/Low with explanation]
- Value Score: [1-5 scale based on user impact]
- Compliance Gate: [Required approvals or validations]

Provide rationale for the recommended sequence.
```

### Expected Output
Copilot should create a logical delivery sequence that balances early value delivery with risk management and dependency constraints.

---

## Prompt 4: Risk and Dependency Analysis

### When to Use
To identify potential blockers and integration challenges.

### The Prompt
```
You are a risk analyst for a financial services development team.

Analyze these user stories for risks and dependencies:

[PASTE USER STORIES]

For each story, identify:

**Technical Dependencies:**
- External systems required
- Data sources needed
- Infrastructure changes
- Third-party integrations

**Business Dependencies:**
- Stakeholder approvals needed
- Process changes required
- Training requirements
- Change management needs

**Risk Assessment:**
- Implementation complexity (1-5 scale)
- Integration risk (1-5 scale)
- Regulatory risk (1-5 scale)
- Business continuity risk (1-5 scale)

**Mitigation Strategies:**
- How to reduce identified risks
- Fallback options
- Monitoring approaches

Format as a risk register with priority rankings.
```

### Expected Output
Copilot should generate a comprehensive risk assessment with specific mitigation strategies for each identified concern.

---

## Prompt 5: Non-Functional Requirements Integration

### When to Use
To ensure stories include appropriate quality requirements.

### The Prompt
```
Enhance these user stories with non-functional requirements:

[PASTE USER STORIES]

For each story, add NFRs for:

**Performance:**
- Response time requirements
- Throughput expectations
- Scalability needs

**Security:**
- Authentication requirements
- Authorization controls
- Data encryption needs
- Audit logging

**Compliance:**
- Regulatory standards (PCI DSS, SOX, GDPR)
- Data retention policies
- Privacy controls

**Usability:**
- Accessibility standards
- User experience requirements
- Error handling

**Reliability:**
- Availability targets
- Disaster recovery needs
- Monitoring requirements

Format as additional acceptance criteria for each story.
```

### Expected Output
Copilot should enhance each story with specific, testable non-functional requirements appropriate for financial services.

---

## Prompt 6: Story Refinement and Edge Cases

### When to Use
To identify missing scenarios and edge cases.

### The Prompt
```
Refine these user stories by identifying edge cases and missing scenarios:

[PASTE USER STORIES]

For each story, consider:

**Happy Path Variations:**
- Different user types
- Various data inputs
- Multiple workflow paths

**Edge Cases:**
- Boundary conditions
- Error scenarios
- Timeout situations
- Invalid data handling

**Compliance Scenarios:**
- Audit requirements
- Data retention
- Privacy controls
- Regulatory reporting

**Integration Edge Cases:**
- System unavailability
- Data inconsistencies
- Network failures
- Third-party errors

Suggest additional stories or enhanced acceptance criteria to cover gaps.
```

### Expected Output
Copilot should identify overlooked scenarios and suggest story enhancements or new stories to ensure comprehensive coverage.

---

## Prompt 7: Story Validation and Quality Check

### When to Use
For final review before moving stories to development.

### The Prompt
```
Perform a final quality check on these user stories:

[PASTE USER STORIES]

Verify each story has:

**Clarity:**
- Unambiguous language
- Clear user personas
- Specific outcomes
- Measurable acceptance criteria

**Completeness:**
- All scenarios covered
- Dependencies identified
- NFRs included
- Compliance requirements

**Consistency:**
- Terminology alignment
- Format standardization
- Value proposition clarity
- Technical coherence

**Testability:**
- Verifiable acceptance criteria
- Clear pass/fail conditions
- Measurable outcomes
- Realistic test scenarios

Rate each aspect and provide specific improvement recommendations.
Flag any stories that need additional refinement before development.
```

### Expected Output
Copilot should provide a comprehensive quality assessment with actionable recommendations for any stories needing further refinement.

---

## Examples: Before and After Story Splitting

### Before (Epic):
"As a customer service representative, I need a comprehensive customer account management system so that I can efficiently handle customer inquiries and maintain accurate records."

### After (Split Stories):

**Story 1:** "As a customer service rep, I want to view customer account summary so that I can quickly understand their current status."

**Story 2:** "As a customer service rep, I want to search customers by multiple criteria so that I can find accounts efficiently."

**Story 3:** "As a customer service rep, I want to update customer contact information so that communications reach them reliably."

**Story 4:** "As a customer service rep, I want to view transaction history so that I can answer account-related questions."

**Story 5:** "As a customer service rep, I want to add case notes to customer records so that other reps have context for future interactions."

---

## Common Mistakes and Solutions

### Mistake 1: Stories Too Large
**Problem:** Stories that take weeks to complete
**Solution:** Add constraint: "Each story must be completable in 1-3 days"

### Mistake 2: Missing Business Value
**Problem:** Technical tasks disguised as user stories
**Solution:** Emphasize: "Every story must deliver direct user or business value"

### Mistake 3: Unclear Acceptance Criteria
**Problem:** Vague or untestable criteria
**Solution:** Require: "Use Given-When-Then format with specific, measurable outcomes"

### Mistake 4: Ignoring Dependencies
**Problem:** Stories that can't be developed independently
**Solution:** Add: "Identify and resolve all blocking dependencies"

### Mistake 5: Overlooking Compliance
**Problem:** Missing regulatory requirements
**Solution:** Always include: "Consider financial services compliance requirements"

### Mistake 6: Weak User Personas
**Problem:** Generic "user" instead of specific roles
**Solution:** Use specific personas: "customer service rep," "account holder," "compliance officer"

---

## Best Practices for Story Splitting

1. **Start with the user journey:** Follow the natural flow of user interactions
2. **Slice vertically:** Each story should go through all system layers
3. **Deliver value incrementally:** Early stories should provide immediate benefit
4. **Consider data variations:** Split based on different data types or volumes
5. **Separate CRUD operations:** Create, Read, Update, Delete can be separate stories
6. **Think about user roles:** Different personas may need different stories
7. **Consider workflow steps:** Break complex processes into logical stages
8. **Account for error handling:** Error scenarios may warrant separate stories

## Practice Exercise

Try splitting this epic:

"As a loan officer, I need an automated loan application processing system so that I can efficiently evaluate applications while maintaining compliance with lending regulations."

Use Prompts 1, 2, and 4 to create well-formed stories with proper risk assessment.

Compare your results with solutions/sample-stories.md

## Advanced Techniques

### Story Mapping Integration
Use story splitting prompts with user story mapping to ensure horizontal slices deliver complete user value while vertical slices progress through system layers.

### Risk-Based Splitting
Split stories based on risk levels, keeping high-risk elements separate for focused attention and easier testing.

### Compliance-Driven Splitting
In financial services, consider splitting stories along regulatory boundaries to enable separate compliance validation.

These prompts work together to transform broad epics into actionable, valuable user stories that development teams can efficiently deliver while maintaining the quality and compliance standards required in financial services.