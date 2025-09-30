# Exercise 3: Traceability & UAT Generation

**Time:** 13 minutes (52:00 - 65:00 in session)  
**Objective:** Create comprehensive UAT test cases and requirements traceability matrix linking policy requirements through implementation to testing validation

## Prerequisites

- [ ] You've completed Exercises 1 and 2 (Process Flow and Data Contracts)
- [ ] You have your process flowchart and data contract available
- [ ] You have `prompts/03-uat-traceability-prompts.md` open for reference
- [ ] You have `templates/uat-test-case-template.md` and `templates/traceability-matrix-template.md` available

## Exercise Overview

You'll use Copilot to:
1. **Link Artifacts to Requirements** and create user stories (4 minutes)
2. **Generate UAT Test Cases** from acceptance criteria (5 minutes)
3. **Create Traceability Matrix** showing end-to-end links (4 minutes)

---

## Step 1: Link Artifacts and Create User Stories (4 minutes)

### Instructions

1. **Open a new file:** `my-traceability-uat.md`
2. **Review your previous work:**
   - Process flowchart from Exercise 1
   - Data contract from Exercise 2
   - Original policy requirements
3. **Create user stories** that connect policy requirements to your technical artifacts

### The Policy Requirements to User Stories Prompt

```
You are a business analyst creating user stories that link policy requirements to technical implementation.

Based on these artifacts:

**Policy Requirements** (from onboarding-policy.md Section 1):
[PASTE THE INITIAL APPLICATION REQUIREMENTS FROM THE POLICY]

**Process Flow** (from Exercise 1):
[PASTE A SUMMARY OF YOUR FLOWCHART KEY STEPS]

**Data Contract** (from Exercise 2):
[PASTE YOUR MAIN SCHEMA OBJECT NAMES AND KEY FIELDS]

Create 4-5 user stories that:
1. Cover the main policy requirements
2. Reference the process steps you've defined
3. Include data elements from your schema
4. Follow standard user story format: As a [role], I want [capability], so that [benefit]

For each story, include:
- 2-3 specific acceptance criteria
- Reference to policy section
- Data elements involved (from your schema)
- Process steps involved (from your flowchart)

Focus on stories that a customer or bank staff member would understand, not technical implementation stories.
```

### Checkpoint ✓
Review your user stories:
- Do they cover the main policy requirements?
- Are they written from a user perspective (customer, staff)?
- Do acceptance criteria reference your data contract fields?
- Can you trace each story back to specific policy requirements?

### What Good Looks Like

Your user stories should include examples like:
```markdown
**US-001: Customer Provides Required Information**
As a prospective bank customer
I want to submit my personal and contact information through the online application
So that I can open a new account efficiently

**Acceptance Criteria:**
AC1: System collects all required personal information (firstName, lastName, dateOfBirth, socialSecurityNumber)
AC2: System validates SSN format (XXX-XX-XXXX) and age requirement (18+)
AC3: System collects primary address and contact information with format validation

**Policy Reference:** COP-2024-017 Section 1 (Initial Application Requirements)
**Data Elements:** PersonalInformation, ContactInformation objects
**Process Steps:** Data Collection → Initial Validation
```

---

## Step 2: Generate UAT Test Cases (5 minutes)

### Instructions

1. **Use Prompt 1** from `prompts/03-uat-traceability-prompts.md`
2. **Generate comprehensive UAT scenarios** from your user stories
3. **Include happy path, edge cases, and error scenarios**
4. **Use realistic test data** based on your data contract

### The UAT Generation Prompt

```
You are a QA lead in a regulated financial services environment creating UAT test cases.

Generate comprehensive UAT test scenarios from these user stories and acceptance criteria:

[PASTE YOUR USER STORIES FROM STEP 1]

For each acceptance criterion, create:

1. **Happy Path Test Case:**
   - Valid data scenario using your data contract schema
   - Step-by-step test procedure based on your process flow
   - Specific expected results

2. **Edge Case Test Case:**
   - Boundary conditions (minimum age 18, minimum deposit $25, maximum deposit $10,000)
   - Unusual but valid data combinations

3. **Error Handling Test Case:**
   - Invalid data that should be rejected (based on your schema validation)
   - System failure scenarios from your process flow

For each test case, include:
- Unique test ID (UAT-###)
- Traceability to specific AC and policy requirement
- Realistic test data (use formats from your data contract)
- Detailed test steps following your process flow
- Measurable expected results
- Compliance validation points (PATRIOT Act, BSA requirements)

Focus on financial services scenarios with regulatory compliance validation.
```

### Checkpoint ✓
Review your test cases:
- Do they cover all acceptance criteria from your stories?
- Is test data realistic and follows your schema validation?
- Do test steps follow the process flow you created?
- Are expected results specific and measurable?

### What Good Looks Like

Your UAT test cases should include comprehensive scenarios like:

```markdown
**Test ID:** UAT-001
**Test Name:** Verify successful customer information submission with valid data
**Related Story:** US-001
**Related AC:** AC1, AC2
**Priority:** High
**Type:** Functional

**Objective:**
Verify that a customer can successfully submit required personal information that passes all validation rules.

**Test Data:**
| Field | Value | Rationale |
|-------|-------|-----------|
| firstName | Alice | Standard first name |
| lastName | Anderson | Standard last name |
| dateOfBirth | 1985-03-15 | Age 39, well above minimum |
| socialSecurityNumber | 123-45-6789 | Valid test SSN format |
| phoneNumber | (214) 555-0123 | Valid US phone format |

**Test Steps:**
1. Navigate to customer application portal
2. Enter personal information using test data values
3. Submit initial application section
4. Verify validation results

**Expected Results:**
- All fields accept valid data without errors
- Age calculation shows 39 years (above 18 minimum)
- SSN format validation passes
- Application progresses to next step
- No validation error messages displayed
```

---

## Step 3: Create Requirements Traceability Matrix (4 minutes)

### Instructions

1. **Use Prompt 3** from the prompt guide (Generate Comprehensive Traceability Matrix)
2. **Create RTM table** linking policy through stories to test cases
3. **Include your data elements** and process steps
4. **Add coverage analysis**

### The RTM Generation Prompt

```
Create a comprehensive Requirements Traceability Matrix (RTM) from these artifacts:

**Policy Requirements** (from onboarding-policy.md):
[PASTE KEY REQUIREMENTS FROM SECTION 1]

**User Stories** (from Step 1):
[PASTE YOUR USER STORIES]

**Data Contract Fields** (from Exercise 2):
[LIST YOUR MAIN SCHEMA FIELDS]

**UAT Test Cases** (from Step 2):
[LIST YOUR TEST CASE IDs AND NAMES]

Generate an RTM table with these columns:
- Requirement ID
- Source (policy section reference)
- Requirement Description
- Priority (Critical/High/Medium/Low)
- User Story ID
- Acceptance Criteria Reference
- Data Elements (from schema)
- UAT Test Case IDs
- Implementation Status
- Testing Status

Requirements:
1. Extract 6-8 distinct requirements from policy text
2. Map each requirement to relevant user stories
3. Link to specific acceptance criteria
4. Identify data elements from schema that support each requirement
5. Reference UAT test cases that validate each requirement
6. Include compliance priority classification
7. Show coverage gaps (requirements without stories/tests)

Provide:
- Complete RTM table in markdown format
- Coverage metrics (% requirements traced)
- Gap analysis (missing links)
- Risk assessment for any gaps

Focus on regulatory requirements and ensure complete traceability for audit purposes.
```

### Checkpoint ✓
Validate your RTM:
- Does every policy requirement have a user story?
- Does every user story trace back to a policy requirement?
- Are all user stories covered by UAT test cases?
- Do data elements support the requirements they're mapped to?

### What Good Looks Like

Your RTM should look like:

| Req ID | Source | Requirement Description | Priority | Story ID | AC | Data Elements | UAT Cases | Status |
|--------|--------|------------------------|----------|----------|----|----|-----------|--------|
| REQ-001 | COP-2024-017 §1 | Customer must provide legal full name | High | US-001 | AC1 | firstName, lastName | UAT-001, UAT-002 | ✓ Complete |
| REQ-002 | COP-2024-017 §1 | Customer must be 18+ years old | Critical | US-001 | AC2 | dateOfBirth | UAT-001, UAT-003 | ✓ Complete |
| REQ-003 | COP-2024-017 §1 | SSN required in XXX-XX-XXXX format | High | US-001 | AC2 | socialSecurityNumber | UAT-001, UAT-004 | ✓ Complete |

---

## Exercise Complete!

### What You've Created
- [ ] User stories linking policy requirements to technical implementation
- [ ] Comprehensive UAT test cases covering happy path, edge cases, and errors
- [ ] Requirements traceability matrix showing end-to-end linkage
- [ ] Coverage analysis identifying any gaps in requirement implementation

### Integration Assessment

Review how all your Path B artifacts work together:

**Policy → Process Flow:**
- Does your flowchart implement all policy procedures?
- Are decision criteria from policy reflected in flowchart decisions?

**Policy → Data Contract:**
- Does your schema collect all required policy data?
- Do validation rules enforce policy business rules?

**Process Flow → Data Contract:**
- Does data flow in your flowchart match schema structure?
- Are validation points in process supported by schema validation?

**All Artifacts → UAT:**
- Do test cases validate both process flow and data contract?
- Is every policy requirement tested through UAT scenarios?

**Traceability:**
- Can you trace from any policy requirement to specific test validation?
- Are there any orphan artifacts (not traced to requirements)?

### Self-Assessment Questions

1. **Completeness:** Do your artifacts collectively address all policy requirements?
2. **Consistency:** Are there any conflicts between your flowchart, schema, and test cases?
3. **Testability:** Could someone execute your UAT cases to validate policy compliance?
4. **Traceability:** Could an auditor follow requirements from policy through to test evidence?
5. **Quality:** Are your artifacts professional enough for development team handoff?

### Final Quality Check

Review each artifact for:
- **Accuracy:** Reflects policy requirements correctly
- **Completeness:** No significant gaps in coverage
- **Clarity:** Business stakeholders can understand the artifacts
- **Consistency:** All artifacts align with each other
- **Compliance:** Regulatory requirements are properly addressed

---

## Bonus Challenges (if time allows)

### Gap Analysis Deep Dive
```
Perform detailed gap analysis to identify:
- Policy requirements without adequate test coverage
- Process steps that aren't validated by UAT
- Data elements that aren't traced to business requirements
```

### Compliance Validation
```
Create specialized test cases that specifically validate:
- PATRIOT Act compliance requirements
- Bank Secrecy Act data collection
- OFAC screening procedures
- Audit trail generation
```

### Risk Assessment
```
Identify high-risk gaps in your traceability matrix and suggest mitigation strategies
```

---

## Troubleshooting

### Problem: Stories don't connect to policy
**Solution:** Review policy language for "must," "shall," and "required" statements. Each should generate a user story.

### Problem: Test cases are too technical
**Solution:** Focus on business scenarios that validate policy compliance, not technical implementation details.

### Problem: RTM shows coverage gaps
**Solution:** Add missing user stories or test cases to achieve complete coverage. Prioritize regulatory requirements.

### Problem: Artifacts are inconsistent
**Solution:** Cross-reference your flowchart, schema, and test cases to ensure they all support the same requirements.

---

## Session Wrap-up

### What You've Accomplished in Path B
1. **Transformed complex policy text** into clear visual process flowcharts
2. **Extracted business data requirements** into comprehensive technical data contracts
3. **Created thorough test validation** that ensures policy compliance
4. **Established complete traceability** from requirements through implementation to testing

### Key Skills Demonstrated
- **Process Analysis:** Breaking down complex workflows into understandable components
- **Data Modeling:** Translating business requirements into technical specifications
- **Test Design:** Creating comprehensive validation scenarios
- **Requirements Management:** Maintaining traceability for audit and compliance

### Peer Review (final 5 minutes)

Exchange your complete artifact set with a neighbor:
1. **Review their RTM:** Is traceability complete? Any obvious gaps?
2. **Check their test cases:** Do they adequately validate the requirements?
3. **Assess integration:** Do all artifacts work together consistently?
4. **Provide feedback:** One strength and one specific improvement suggestion

---

## Next Steps After the Session

### Continue Learning
- Practice with your organization's actual policy documents
- Try generating artifacts for different business domains
- Experiment with more complex validation rules and error scenarios

### Apply at Work
- Use these techniques for your next systems analysis project
- Share the prompt patterns with your team
- Establish traceability practices for regulatory compliance

### Homework Assignments
- Complete the homework exercises to reinforce these skills
- Try the critique prompts to improve artifact quality
- Build custom Definition of Ready/Done for your environment

Congratulations on completing Path B! You now have practical skills for transforming complex business requirements into structured technical artifacts using GitHub Copilot.