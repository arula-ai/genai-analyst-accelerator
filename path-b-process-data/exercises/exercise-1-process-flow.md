# Exercise 1: Process Flow Generation

**Time:** 15 minutes (25:00 - 40:00 in session)  
**Objective:** Transform complex policy text into clear, visual Mermaid flowcharts showing decision points, error handling, and swimlanes

## Prerequisites

- [ ] Copilot is running and tested
- [ ] You've reviewed `inputs/onboarding-policy.md` 
- [ ] You have `prompts/01-flowchart-generation-prompts.md` open for reference
- [ ] You have `templates/mermaid-flowchart-template.md` available

## Exercise Overview

You'll use Copilot to:
1. **Generate Basic Flowchart** from policy text (5 minutes)
2. **Add Swimlanes** to show different actors (5 minutes) 
3. **Enhance Error Handling** and edge cases (5 minutes)

---

## Step 1: Generate Basic Process Flow (5 minutes)

### Instructions

1. **Open a new file:** `my-process-flow.md`
2. **Open Copilot Chat** (Ctrl+Shift+I or Cmd+Shift+I)
3. **Review the source policy:** Open `inputs/onboarding-policy.md` and read Section 2 (Identity Verification Process)
4. **Use Prompt 1** from `prompts/01-flowchart-generation-prompts.md`
5. **Paste the policy text** where indicated in the prompt
6. **Review Copilot's output** and paste it into your file

### The Policy Section to Use

Copy this text from `inputs/onboarding-policy.md` Section 2:

```
The identity verification process follows a four-step automated workflow with manual review fallbacks:

Step 1: Data Validation - All submitted information undergoes initial format validation including SSN format verification, address standardization through USPS database, and phone number format checking. Invalid data triggers immediate error messages with specific guidance for correction.

Step 2: Third-Party Identity Verification - Customer information is submitted to our primary identity verification service provider for real-time validation against credit bureau databases and public records. The service returns a confidence score between 0-100 and identifies any inconsistencies or potential fraud indicators.

Step 3: Document Authentication - Uploaded identification documents undergo optical character recognition (OCR) processing to extract data for comparison against manually entered information. The system checks for document authenticity markers, image quality, and data consistency.

Step 4: Knowledge-Based Authentication (KBA) - If automated verification produces a score below 85%, customers may be presented with knowledge-based authentication questions generated from their credit history and public records. Customers have up to three attempts to answer questions correctly.

System Timeout Handling: All verification services must respond within 10 seconds. Service timeouts or failures automatically route applications to the manual review queue with appropriate customer messaging about temporary delays.
```

### Checkpoint ✓
Share your basic flowchart with your neighbor. Does it:
- Clearly show the 4 main steps?
- Include decision points with specific criteria?
- Have start and end points?
- Show the timeout handling path?

### What Good Looks Like

Your basic flowchart should include:
- Clear start point (Customer Application Submitted)
- Step 1: Data validation with error path back to customer
- Step 2: Third-party verification with timeout handling
- Step 3: Document processing with quality checks
- Step 4: KBA when needed (score < 85%)
- Decision points with specific criteria (score thresholds)
- Error paths and recovery procedures
- Clear end points (Approved, Manual Review, Rejected)

### Common Issues & Fixes

**Issue:** Flowchart is too technical
```
Fix prompt: "Focus on business process steps that a business user would understand. Avoid technical implementation details."
```

**Issue:** Missing decision criteria
```
Fix prompt: "For each decision point, include the specific criteria being evaluated (e.g., 'Score >= 85?', 'Timeout after 10s?')."
```

**Issue:** No error handling
```
Fix prompt: "Include error paths for validation failures, service timeouts, and document processing issues."
```

---

## Step 2: Add Swimlanes for Different Actors (5 minutes)

### Instructions

1. **Copy your basic flowchart** from Step 1
2. **Use Prompt 2** from the prompt guide (Adding Swimlanes)
3. **Identify the actors** in the customer onboarding process:
   - **Customer:** Submitting application, uploading documents, answering KBA questions
   - **System:** Automated validation, API calls, scoring, routing decisions
   - **Manual Review Team:** Human decisions for edge cases and exceptions
   - **External Services:** Identity verification, OFAC screening, document processing

### The Enhanced Prompt

```
Take this basic flowchart and enhance it with swimlanes showing different actors:

[PASTE YOUR BASIC FLOWCHART FROM STEP 1]

Transform this into a swimlane diagram with these actors:
- Customer (application submission, document upload, KBA responses)
- System (automated validation, API calls, scoring, routing)
- Manual Review Team (human decisions, exception handling)
- External Services (identity verification, OFAC screening, OCR processing)

Requirements:
- Use Mermaid subgraph syntax for swimlanes
- Clearly show handoffs between actors
- Maintain all decision points and error paths
- Add different colors/styling for each actor
- Show parallel processes where applicable

Keep the same process logic but organize by who performs each action.
```

### Checkpoint ✓
Review your swimlane diagram:
- Are actions clearly assigned to the right actor?
- Do handoffs between actors make sense?
- Can you follow the customer journey across swimlanes?
- Are external service calls clearly identified?

### What Good Looks Like

Your swimlane diagram should show:
- **Customer actions:** Form submission, document upload, KBA responses
- **System actions:** Data validation, API orchestration, scoring, routing decisions
- **External service calls:** Identity verification, OFAC checks, OCR processing
- **Manual review:** Human decision-making for edge cases
- **Clear handoffs:** Arrows showing when control passes between actors
- **Parallel processing:** Where multiple actors work simultaneously

---

## Step 3: Enhance Error Handling and Edge Cases (5 minutes)

### Instructions

1. **Copy your swimlane flowchart** from Step 2
2. **Use Prompt 3** from the prompt guide (Comprehensive Error Handling)
3. **Add these specific error scenarios** from the policy:
   - Document upload failures (up to 3 retry attempts)
   - Service timeouts (10-second rule)
   - KBA failures (up to 3 attempts)
   - OFAC positive matches
   - Document quality issues

### The Error Enhancement Prompt

```
Enhance this flowchart to include comprehensive error handling and edge cases:

[PASTE YOUR SWIMLANE FLOWCHART]

Add these error scenarios based on the policy requirements:
1. Document upload failures (allow up to 3 retry attempts)
2. Identity verification service timeout (10-second rule)
3. KBA failures (customers get 3 attempts)
4. OFAC sanctions list matches (immediate escalation)
5. Document quality issues (poor image, unreadable OCR)
6. Service unavailable scenarios (graceful degradation)

Requirements:
- Show retry logic with attempt counters
- Include timeout handling with fallback to manual review
- Add customer communication points (error messages, status updates)
- Show audit logging for all decisions and errors
- Include recovery paths back to main process where appropriate

Use consistent styling:
- Red/error styling for error states
- Yellow/warning for retry/timeout states
- Green for success states
- Blue for standard process steps
```

### Checkpoint ✓
Test your error handling logic:
- What happens if a customer uploads a bad document 3 times?
- How does the system handle identity verification timeout?
- Where do OFAC matches get escalated?
- Can customers recover from errors and continue?

### What Good Looks Like

Your comprehensive flowchart should include:
- **Retry mechanisms:** Clear loop logic with attempt limits
- **Timeout handling:** Service unavailability gracefully handled
- **Error communication:** Customer sees helpful error messages
- **Escalation paths:** OFAC matches and other critical issues properly routed
- **Audit trails:** Decision points logged for compliance
- **Recovery options:** Customers can fix problems and continue
- **Graceful degradation:** System functions even when services are down

---

## Exercise Complete!

### What You've Created
- [ ] Basic process flowchart with clear steps and decisions
- [ ] Swimlane diagram showing actor responsibilities
- [ ] Comprehensive error handling with retry logic
- [ ] Visual representation suitable for stakeholder communication

### Time Check
If you finished early:
- Add compliance checkpoints (PATRIOT Act, OFAC screening)
- Enhance with SLA timing annotations (60-second verification)
- Try generating a customer experience-focused version
- Review your flowchart against the original policy for completeness

### Self-Assessment Questions

1. **Completeness:** Does your flowchart cover all major steps from the policy?
2. **Clarity:** Could a business stakeholder understand the process from your diagram?
3. **Error Handling:** Are failure scenarios and recovery paths clearly shown?
4. **Accuracy:** Do decision criteria match the policy requirements?
5. **Usability:** Would developers be able to implement from this flowchart?

### Peer Review (if time allows)

Exchange flowcharts with your neighbor:
- **What's the strongest aspect** of their flowchart?
- **What's one specific improvement** you'd suggest?
- **Does it accurately reflect** the policy requirements?
- **Is the error handling comprehensive** enough for production?

---

## Troubleshooting

### Problem: Mermaid syntax errors
**Solution:** Check for proper flowchart declaration, balanced brackets, and valid node connections. Use the Mermaid Live Editor (https://mermaid.live) to validate syntax.

### Problem: Flowchart is too complex
**Solution:** Focus on the main flow first, then add error handling. Use subgraphs to group related processes.

### Problem: Missing business context
**Solution:** Add to prompt: "Focus on business process steps that stakeholders need to understand, not technical implementation details."

### Problem: Unclear decision points
**Solution:** Ask Copilot to "Include specific criteria for each decision (score thresholds, timeout values, attempt limits)."

---

## Next Steps

Continue to **Exercise 2: Data Contracts** where you'll extract data elements from this same policy and create comprehensive OpenAPI schemas with validation rules.

Your process flowchart will inform the data contract by showing:
- What data is collected at each step
- When validation occurs
- What data flows between systems
- Where audit trails are captured