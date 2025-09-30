# Epic Generation Prompts

## Overview
This guide provides prompt templates for using GitHub Copilot to generate well-formed epics from stakeholder notes. These prompts are specifically designed for financial services environments and follow proven patterns for extracting actionable business requirements from discovery sessions.

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
Copilot should generate 2-3 well-structured epics with clear business focus, avoiding technical implementation details while highlighting regulatory considerations and external dependencies.

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
Copilot should provide a structured analysis highlighting gaps, ambiguities, and missing requirements with actionable recommendations for improvement.

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

### Expected Output
Copilot should propose logical splits that maintain business value while creating manageable, independently deliverable components.

---

## Prompt 4: Compliance and Risk Assessment

### When to Use
To ensure regulatory requirements are properly captured.

### The Prompt
```
You are a compliance expert in financial services.

Review this epic for regulatory implications:

[PASTE EPIC]

Identify:
- Applicable regulations (PCI DSS, SOX, GDPR, etc.)
- Required controls and audit trails
- Data privacy considerations
- Security requirements
- Risk mitigation needs

Format as:
- Regulation: [Name]
- Requirement: [Specific control needed]
- Impact: [How this affects the epic]
```

### Expected Output
Copilot should provide a comprehensive compliance assessment with specific regulatory requirements and their implications for the epic.

---

## Prompt 5: Dependency Mapping

### When to Use
To identify external dependencies and integration points.

### The Prompt
```
Analyze this epic for dependencies:

[PASTE EPIC]

Map out:
1. External systems that must be integrated
2. Data sources required
3. Third-party services needed
4. Internal teams that must be involved
5. Prerequisite capabilities

For each dependency, specify:
- Type: [System/Data/Service/Team/Capability]
- Description: [What's needed]
- Risk Level: [High/Medium/Low]
- Mitigation: [How to reduce risk]
```

### Expected Output
Copilot should create a structured dependency map highlighting integration points and associated risks.

---

## Prompt 6: Acceptance Criteria Generation

### When to Use
To create measurable success criteria for epics.

### The Prompt
```
Generate acceptance criteria for this epic:

[PASTE EPIC]

Create criteria that are:
- Testable and measurable
- Business-focused (not technical)
- Complete (covering happy path and edge cases)
- Compliant with financial services requirements

Format as:
Given [context]
When [action]
Then [expected outcome]

Include both functional and non-functional criteria.
```

### Expected Output
Copilot should generate comprehensive, testable acceptance criteria in Given-When-Then format covering all aspects of the epic.

---

## Prompt 7: Epic Prioritization Analysis

### When to Use
To help stakeholders understand relative priority and sequencing.

### The Prompt
```
Analyze these epics for prioritization:

[PASTE 2-3 EPICS]

Evaluate each epic on:
1. Business Impact (1-5 scale)
2. Implementation Complexity (1-5 scale)
3. Risk Level (1-5 scale)
4. Dependencies on other epics
5. Time sensitivity

Recommend a delivery sequence with rationale.

Consider:
- Customer value delivery
- Risk mitigation
- Resource constraints
- Regulatory deadlines
```

### Expected Output
Copilot should provide a prioritization matrix with scores and recommended sequencing based on business value and implementation considerations.

---

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

### Pitfall 4: Unclear Scope
**Problem:** Ambiguous boundaries
**Solution:** Add: "Define clear scope boundaries and what's explicitly excluded."

### Pitfall 5: Missing Dependencies
**Problem:** Overlooking external requirements
**Solution:** Add: "Identify all external system dependencies and integration points."

## Practice Exercise

Try generating epics from these abbreviated notes:

"Customer service team reports that account verification takes too long. Current process requires manual document review taking 3-5 business days. Customers are frustrated with delays. Compliance requires identity verification and AML checks. Integration with existing CRM system needed. Must maintain audit trail for regulators."

Use Prompt 1, then refine with Prompt 2, and assess compliance with Prompt 4.

Compare your results with solutions/sample-epics.md

## Best Practices

1. **Start broad, then narrow:** Use initial generation to capture scope, then refine for details
2. **Always consider compliance:** Financial services requires regulatory awareness from the start
3. **Validate assumptions:** Use refinement prompts to surface unstated assumptions
4. **Think in business terms:** Keep focus on customer value and business outcomes
5. **Consider the whole system:** Use dependency mapping to understand integration complexity

These prompts are designed to work together as a comprehensive toolkit for epic generation and refinement in financial services environments.