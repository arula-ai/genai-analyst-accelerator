# Flowchart Generation Prompts

## Overview

This guide provides tested prompt templates for using GitHub Copilot to generate process flowcharts from policy documents and business requirements. Flowcharts are essential for visualizing complex business processes, identifying decision points, and ensuring all stakeholders understand the workflow.

## The Five-Part Prompt Pattern for Flowcharts

Every effective flowchart prompt includes:
1. **Role:** Tell Copilot to act as a process analyst or systems analyst
2. **Context:** Provide the source policy or business requirement text
3. **Format:** Specify Mermaid syntax and flowchart direction
4. **Requirements:** Define what decisions, error paths, and processes to include
5. **Constraints:** Add styling, naming conventions, and compliance needs

---

## When to Use Flowcharts vs Other Diagrams

### Use Flowcharts For:
- **Sequential Processes:** Step-by-step workflows with clear start/end points
- **Decision Logic:** Business rules with yes/no decision points
- **Exception Handling:** Error paths and recovery procedures
- **Approval Workflows:** Multi-step approval processes with different authorities
- **Customer Journeys:** User-facing processes from application to completion

### Use Other Diagrams For:
- **Data Relationships:** Use entity-relationship diagrams
- **System Architecture:** Use component or deployment diagrams
- **Time-based Interactions:** Use sequence diagrams
- **Organizational Structure:** Use organizational charts

---

## Prompt 1: Basic Process Flow Generation

### When to Use
Generate initial flowchart from policy text to understand the overall process structure.

### The Prompt
```
You are a business process analyst working in a regulated financial services environment.

Analyze this policy section and create a Mermaid flowchart showing the main process flow:

[PASTE POLICY TEXT FROM onboarding-policy.md SECTION]

Requirements:
- Use flowchart TD (top-down) format
- Show clear start and end points
- Include all major process steps
- Highlight decision points with diamond shapes
- Use descriptive labels for each step
- Include basic error handling paths

Format the output as a complete Mermaid diagram with:
- Proper syntax and connections
- Clear node labels (no abbreviations)
- Logical flow from start to finish
- Comments explaining key decisions

Constraints:
- This is for regulated banking, so include compliance checkpoints
- Keep technical implementation details minimal
- Focus on business process, not system architecture
```

### Expected Output
A clean, linear flowchart showing the main happy path with key decision points and basic error handling.

### Tips for Better Results
- If output is too technical: Add "Focus on business process steps, not technical implementation"
- If missing decision points: Add "Include all yes/no decision points from the policy"
- If labels are unclear: Add "Use full descriptive labels, no abbreviations or technical jargon"

---

## Prompt 2: Adding Swimlanes for Multi-Actor Processes

### When to Use
When the process involves multiple actors (customer, system, staff, external services) and you need to show who does what.

### The Prompt
```
Take this basic flowchart and enhance it with swimlanes showing different actors:

[PASTE YOUR BASIC FLOWCHART FROM PROMPT 1]

Transform this into a swimlane diagram with these actors:
- Customer (application submission, document upload)
- System (automated validation, API calls, scoring)
- Manual Review Team (human decisions, exceptions)
- External Services (identity verification, OFAC screening)

Requirements:
- Use Mermaid subgraph syntax for swimlanes
- Clearly show handoffs between actors
- Maintain all decision points and error paths
- Add actor-specific styling/colors
- Show parallel processes where applicable

Keep the same process logic but organize by who performs each action.
```

### Expected Output
A swimlane diagram with clear separation of responsibilities and handoff points.

### Common Issues & Fixes

**Issue:** Swimlanes overlap or are confusing
```
Fix prompt: "Ensure each action is clearly assigned to exactly one actor. Show handoffs with clear arrows between swimlanes."
```

**Issue:** Too many swimlanes
```
Fix prompt: "Combine related actors. For example, merge 'Identity Service' and 'OFAC Service' into 'External Services'."
```

---

## Prompt 3: Comprehensive Error Handling

### When to Use
Add detailed error handling, timeout scenarios, and recovery paths to an existing flowchart.

### The Prompt
```
Enhance this flowchart to include comprehensive error handling and edge cases:

[PASTE YOUR EXISTING FLOWCHART]

Add these error scenarios based on the policy requirements:
1. Validation errors (format, missing fields, invalid data)
2. Service timeouts (10-second API timeout rule)
3. Service unavailable (verification service down)
4. Document processing failures (OCR errors, poor image quality)
5. Manual review scenarios (score 60-85%)
6. Automatic rejections (score <60%, OFAC match)

Requirements:
- Show retry logic (up to 3 attempts for uploads)
- Include timeout handling with fallback to manual review
- Add customer communication points (error messages, status updates)
- Show audit logging for all decisions
- Include recovery paths back to main process where appropriate

Use consistent styling:
- Red/error styling for error states
- Yellow/warning for timeout/retry states
- Green for success states
- Blue for standard process steps
```

### Expected Output
A comprehensive flowchart that handles the "unhappy path" scenarios and edge cases.

---

## Prompt 4: Compliance and Audit Focus

### When to Use
Emphasize regulatory compliance checkpoints and audit trail requirements.

### The Prompt
```
Review this customer onboarding flowchart for regulatory compliance:

[PASTE YOUR FLOWCHART]

Enhance it to clearly show:
1. PATRIOT Act compliance checkpoints
2. Bank Secrecy Act (BSA) requirements
3. FINRA Rule 4512 validation points
4. OFAC sanctions screening
5. Audit trail generation points
6. Data retention trigger points

For each compliance checkpoint, show:
- What is being validated
- What happens if validation fails
- Where audit records are created
- Who has approval authority

Add compliance styling and annotations to make regulatory requirements obvious to auditors.

This flowchart will be used for regulatory examination, so ensure all required checkpoints are visible and well-documented.
```

---

## Prompt 5: Performance and SLA Requirements

### When to Use
Add timing requirements, SLA checkpoints, and performance monitoring to your flowchart.

### The Prompt
```
Add SLA and performance requirements to this process flowchart:

[PASTE YOUR FLOWCHART]

Include these timing requirements from the policy:
- Automated verification: 60 seconds maximum
- API timeout: 10 seconds
- Manual review: 24 hours
- Email notifications: 2 minutes
- System availability: 99.5% during business hours

Show:
- Where timing starts and stops
- What happens when SLAs are missed
- Monitoring and alerting points
- Escalation paths for SLA breaches
- Customer communication about delays

Add timing annotations and SLA checkpoint indicators throughout the process.
```

---

## Prompt 6: Optimization and Simplification

### When to Use
Simplify an overly complex flowchart or identify process improvement opportunities.

### The Prompt
```
Analyze this flowchart for optimization opportunities:

[PASTE YOUR COMPLEX FLOWCHART]

Suggest improvements for:
1. Process simplification (eliminate unnecessary steps)
2. Parallel processing opportunities (what can run simultaneously)
3. Decision point consolidation (combine related decisions)
4. Error path optimization (reduce customer friction)
5. Automation opportunities (reduce manual touchpoints)

Provide two versions:
1. Current state (as-is) with optimization annotations
2. Future state (to-be) with streamlined process

Focus on improving customer experience while maintaining compliance requirements.
```

---

## Prompt 7: Integration Points and Data Flow

### When to Use
Show how the process integrates with external systems and where data is exchanged.

### The Prompt
```
Enhance this flowchart to show system integration points and data flow:

[PASTE YOUR FLOWCHART]

Add details about:
1. External API calls (identity verification, OFAC, credit bureau)
2. Database interactions (customer profile, audit trail, document storage)
3. Data transformation points (format validation, standardization)
4. Security checkpoints (encryption, access control)
5. Message queue interactions (manual review queue, notification queue)

Use different shapes or styling to distinguish:
- Internal processes (rectangles)
- External API calls (parallelograms)
- Database operations (cylinders)
- Data validation (hexagons)
- Security checkpoints (shields/special styling)

Show data flow directions and key data elements being passed.
```

---

## Prompt 8: Customer Experience Focus

### When to Use
Emphasize the customer journey and user experience aspects of the process.

### The Prompt
```
Redesign this flowchart from a customer experience perspective:

[PASTE YOUR FLOWCHART]

Emphasize:
1. Customer touchpoints and interactions
2. Wait times and customer communication
3. Self-service vs. assisted steps
4. Progress indicators and status updates
5. Error recovery and help options
6. Mobile vs. desktop experience differences

Show:
- What the customer sees at each step
- When customers receive notifications
- How customers can check application status
- What happens during wait periods
- How errors are communicated to customers
- Options for getting help or support

Use customer-friendly language and focus on the experience, not internal processes.
```

---

## Common Pitfalls and Solutions

### Pitfall 1: Overly Technical Flowcharts
**Problem:** Copilot generates flowcharts with technical implementation details instead of business processes
**Solution:** Add to prompt: "Focus on business process steps that a business user would understand. Avoid technical implementation details like database calls or API specifications."

### Pitfall 2: Missing Decision Criteria
**Problem:** Decision points show "Yes/No" without explaining the criteria
**Solution:** Add to prompt: "For each decision point, include the specific criteria being evaluated (e.g., 'Score > 85?', 'Age >= 18?', 'OFAC Match Found?')."

### Pitfall 3: No Error Handling
**Problem:** Flowcharts only show the happy path
**Solution:** Add to prompt: "Include comprehensive error handling for validation failures, service timeouts, and business rule violations. Show what happens when things go wrong."

### Pitfall 4: Poor Mermaid Syntax
**Problem:** Generated Mermaid code has syntax errors
**Solution:** Add to prompt: "Ensure valid Mermaid syntax with proper node connections, bracket matching, and flowchart direction declaration."

### Pitfall 5: Too Many or Too Few Details
**Problem:** Flowchart is either overwhelming or too simplistic
**Solution:** Use progressive refinement: Start with basic flow, then enhance with specific aspects (errors, compliance, timing, etc.)

---

## Validation and Quality Check Prompts

### Syntax Validation
```
Review this Mermaid flowchart code for syntax errors:

[PASTE MERMAID CODE]

Check for:
- Valid flowchart direction declaration
- Proper node shape syntax
- Correct arrow connections
- Balanced brackets and parentheses
- Valid character usage in node IDs
- Proper styling syntax

Fix any errors and return corrected code.
```

### Completeness Review
```
Analyze this process flowchart for completeness:

[PASTE FLOWCHART]

Verify that it includes:
- Clear start and end points
- All decision points from the source policy
- Error handling for major failure scenarios
- Compliance checkpoints where required
- Customer communication points
- Handoffs between different actors/systems

Identify any missing elements and suggest additions.
```

### Business Logic Validation
```
Review this flowchart against the source policy requirements:

Policy: [PASTE RELEVANT POLICY SECTION]
Flowchart: [PASTE FLOWCHART]

Verify that:
- All policy requirements are represented
- Decision criteria match policy rules
- Error handling aligns with policy procedures
- Compliance requirements are included
- SLA requirements are reflected

Flag any discrepancies between policy and flowchart.
```

---

## Practice Exercise

Try generating a flowchart from this abbreviated policy text:

"Customers submit applications online. System validates data format. If invalid, show errors and allow resubmission. If valid, call identity verification service with 10-second timeout. If timeout, route to manual review. If verification score >85%, auto-approve. If score 60-85%, manual review. If score <60%, auto-reject. Send email notification of decision."

Use Prompt 1, then enhance with Prompt 2 (swimlanes) and Prompt 3 (error handling).

Compare your results with solutions/sample-flowchart-basic.md and solutions/sample-flowchart-swimlanes.md