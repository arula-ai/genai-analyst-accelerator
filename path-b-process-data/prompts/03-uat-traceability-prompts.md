# UAT & Traceability Prompts

## Overview

This guide provides prompt templates for using GitHub Copilot to generate comprehensive User Acceptance Test (UAT) scenarios and establish end-to-end requirements traceability. These artifacts are critical for ensuring complete requirement coverage and regulatory compliance in financial services.

## The Importance of UAT and Traceability

### UAT Testing Benefits
- **Business Validation:** Confirms the system meets actual business needs
- **Risk Mitigation:** Identifies gaps before production deployment
- **User Confidence:** Demonstrates system readiness to business stakeholders
- **Compliance Evidence:** Provides audit trail that requirements are implemented

### Traceability Benefits
- **Coverage Assurance:** Ensures all requirements are implemented and tested
- **Impact Analysis:** Quickly identify what's affected by requirement changes
- **Audit Compliance:** Demonstrates regulatory requirements are met
- **Quality Control:** Prevents requirements from being overlooked

## The Five-Part Prompt Pattern for UAT and Traceability

1. **Role:** Business analyst, systems analyst, or QA lead with domain expertise
2. **Source:** Policy requirements, user stories, acceptance criteria, and data contracts
3. **Format:** Structured test cases or traceability matrices
4. **Coverage:** Functional requirements, edge cases, error scenarios, and compliance
5. **Context:** Regulatory environment and business criticality

---

## Prompt 1: Generate UAT Cases from Acceptance Criteria

### When to Use
Create comprehensive test scenarios from user story acceptance criteria.

### The Prompt
```
You are a QA lead in a regulated financial services environment creating UAT test cases.

Generate comprehensive UAT test scenarios from these user stories and acceptance criteria:

[PASTE USER STORIES WITH ACCEPTANCE CRITERIA]

For each acceptance criterion, create:

1. **Happy Path Test Case:**
   - Valid data scenario that should pass
   - Realistic test data with proper formats
   - Step-by-step test procedure
   - Specific expected results

2. **Edge Case Test Case:**
   - Boundary conditions (minimum age, maximum deposit, etc.)
   - Unusual but valid data combinations
   - Stress test scenarios

3. **Error Handling Test Case:**
   - Invalid data that should be rejected
   - System failure scenarios
   - Recovery procedures

For each test case, include:
- Unique test ID (UAT-###)
- Traceability to specific AC
- Realistic test data (synthetic but appropriate for banking)
- Detailed test steps
- Measurable expected results
- Compliance validation points

Focus on:
- Financial services regulatory requirements
- Data privacy and security validation
- Customer experience verification
- System integration points
```

### Expected Output
Multiple detailed UAT test cases with complete test data and procedures for each acceptance criterion.

### Tips for Better Results
- If tests are too generic: Add "Use specific financial services examples and regulatory scenarios"
- If missing edge cases: Add "Include boundary testing for all numeric limits and date ranges"
- If test data is unrealistic: Add "Use realistic but synthetic banking customer data"

---

## Prompt 2: Link Policy Requirements to Test Coverage

### When to Use
Ensure every policy requirement has corresponding test cases.

### The Prompt
```
Create test cases that verify compliance with specific policy requirements:

Policy Document: [PASTE RELEVANT POLICY SECTIONS]
User Stories: [PASTE RELATED STORIES]

Generate UAT test cases that specifically validate:

1. **Regulatory Compliance Tests:**
   - PATRIOT Act verification procedures
   - Bank Secrecy Act (BSA) data collection
   - FINRA Rule 4512 customer information requirements
   - OFAC sanctions screening

2. **Business Rule Tests:**
   - Age requirements (18+ validation)
   - Document requirements (government ID)
   - Deposit limits and thresholds
   - Approval authority levels

3. **Process Compliance Tests:**
   - SLA requirements (60-second verification)
   - Data retention requirements (7-year storage)
   - Audit trail generation
   - Customer notification requirements

For each test case:
- Reference specific policy section
- Include compliance validation steps
- Use appropriate test data for regulatory scenarios
- Specify audit evidence that should be generated
- Include both automated and manual verification steps

Ensure every policy requirement listed has at least one corresponding test case.
```

### Expected Output
Test cases that directly validate policy compliance with clear traceability to specific requirements.

---

## Prompt 3: Generate Comprehensive Traceability Matrix

### When to Use
Create a complete requirements traceability matrix linking policy through implementation to testing.

### The Prompt
```
Create a comprehensive Requirements Traceability Matrix (RTM) from these artifacts:

Policy Document: [PASTE RELEVANT POLICY SECTIONS]
User Stories: [PASTE USER STORIES]
Data Contract: [PASTE SCHEMA SECTIONS]
Test Cases: [PASTE UAT TEST CASES]

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
1. Extract distinct requirements from policy text
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

### Expected Output
A comprehensive RTM showing complete traceability from policy requirements through to test validation.

---

## Prompt 4: Gap Analysis and Coverage Assessment

### When to Use
Identify missing requirements, untested functionality, or coverage gaps.

### The Prompt
```
Perform a comprehensive gap analysis across these requirements artifacts:

Policy Requirements: [PASTE POLICY SECTIONS]
User Stories: [PASTE STORIES]
Test Cases: [PASTE UAT CASES]
Traceability Matrix: [PASTE RTM]

Analyze for these types of gaps:

1. **Requirements Gaps:**
   - Policy requirements without user stories
   - Business rules not captured in acceptance criteria
   - Compliance requirements missing implementation

2. **Testing Gaps:**
   - User stories without UAT test cases
   - Acceptance criteria not validated by tests
   - Critical requirements with insufficient test coverage

3. **Traceability Gaps:**
   - Stories without clear policy source
   - Test cases without requirement linkage
   - Data elements not traced to business needs

4. **Coverage Analysis:**
   - Percentage of requirements with complete traceability
   - Critical vs. non-critical requirement coverage
   - Compliance requirement coverage specifically

For each gap identified:
- Specify the missing element
- Assess the risk level (High/Medium/Low)
- Suggest remediation actions
- Estimate effort to close the gap

Prioritize gaps by regulatory risk and business impact.
```

### Expected Output
Detailed gap analysis with specific recommendations for achieving complete requirements coverage.

---

## Prompt 5: Regulatory Compliance Test Scenarios

### When to Use
Create specialized test cases for regulatory compliance validation.

### The Prompt
```
Generate specialized UAT test cases for regulatory compliance validation:

Applicable Regulations:
- Bank Secrecy Act (BSA)
- USA PATRIOT Act Section 326
- FINRA Rule 4512
- OFAC Sanctions Screening

Policy Requirements: [PASTE COMPLIANCE-RELATED POLICY SECTIONS]

Create test scenarios for:

1. **Customer Identification Program (CIP) Tests:**
   - Valid government ID acceptance
   - ID document verification procedures
   - Customer information validation
   - Non-documentary verification methods

2. **OFAC Screening Tests:**
   - Name matching against sanctions lists
   - False positive handling procedures
   - Positive match escalation
   - Documentation requirements

3. **Record Keeping Tests:**
   - Required data capture validation
   - Audit trail completeness
   - Data retention compliance
   - Report generation capabilities

4. **Enhanced Due Diligence Tests:**
   - High-risk customer identification
   - Additional documentation requirements
   - Approval authority validation
   - Ongoing monitoring setup

For each compliance test:
- Reference specific regulatory requirement
- Include test data that triggers compliance checks
- Validate audit trail generation
- Test both positive and negative scenarios
- Include supervisor review/approval steps where required

Format as detailed UAT test cases with regulatory context and validation points.
```

---

## Prompt 6: Integration and End-to-End Testing Scenarios

### When to Use
Create test cases that validate system integration and complete business workflows.

### The Prompt
```
Generate end-to-end integration test scenarios for the customer onboarding process:

System Components:
- Customer portal (web/mobile)
- Identity verification service
- OFAC screening service  
- Document processing system
- Manual review queue
- Notification service
- Customer database

Process Flow: [PASTE PROCESS FLOWCHART OR DESCRIPTION]
Data Contract: [PASTE API SCHEMA]

Create integration test scenarios for:

1. **Complete Happy Path Journey:**
   - Customer application submission
   - Automated identity verification
   - Approval and account setup
   - Customer notification
   - Account activation

2. **Service Integration Scenarios:**
   - Identity verification service integration
   - OFAC screening integration
   - Document processing integration
   - Notification service integration

3. **Failure and Recovery Scenarios:**
   - Service timeout handling
   - Service unavailability fallback
   - Data consistency validation
   - Error recovery procedures

4. **Load and Performance Testing:**
   - Multiple concurrent applications
   - Peak load scenarios
   - SLA validation under load
   - System availability testing

For each scenario:
- Map to system architecture components
- Include realistic test data volumes
- Specify performance expectations
- Include monitoring and alerting validation
- Test both automated and manual review paths

Focus on real-world scenarios that customers and staff will encounter.
```

---

## Prompt 7: Test Data Generation and Management

### When to Use
Create comprehensive test data sets for UAT execution.

### The Prompt
```
Generate comprehensive test data sets for customer onboarding UAT:

Test Scenarios Requiring Data:
[PASTE UAT TEST CASE SUMMARIES]

Data Requirements:
[PASTE RELEVANT SCHEMA SECTIONS]

Create test data for these categories:

1. **Valid Customer Personas:**
   - Standard individual customer
   - High-value customer (large deposits)
   - Edge case customer (minimum age/deposit)
   - Business customer
   - Joint account customer

2. **Invalid Data Scenarios:**
   - Format validation failures
   - Business rule violations
   - Compliance flag triggers
   - System integration errors

3. **Edge Case Data:**
   - Boundary value testing
   - Special character handling
   - International format variations
   - Historical date scenarios

For each test data set:
- Provide complete customer records
- Include realistic but synthetic data
- Ensure data consistency across fields
- Mark which validation rules should trigger
- Include expected test outcomes
- Specify which UAT cases use this data

Requirements:
- Use only synthetic data (no real PII)
- Follow realistic formats for financial services
- Include diverse scenarios (different states, age ranges, etc.)
- Ensure compliance with test data privacy policies
```

---

## Prompt 8: Audit Trail and Evidence Collection

### When to Use
Define what evidence needs to be collected during UAT for audit and compliance purposes.

### The Prompt
```
Define audit trail and evidence collection requirements for UAT execution:

Regulatory Context:
- Financial services regulatory examination
- Internal audit requirements
- External compliance validation

Test Scenarios: [PASTE UAT TEST CASES]
Compliance Requirements: [PASTE POLICY COMPLIANCE SECTIONS]

For each test execution, specify:

1. **Required Evidence Collection:**
   - Screen captures of key steps
   - System log entries and timestamps
   - Database state before/after
   - Email notifications generated
   - Audit trail entries created

2. **Compliance Documentation:**
   - Regulatory requirement validation
   - Business rule enforcement evidence
   - Data retention confirmation
   - Access control verification

3. **Test Execution Records:**
   - Test case execution timestamps
   - Tester identification
   - Test results and observations
   - Defect documentation
   - Retest evidence

4. **Traceability Documentation:**
   - Requirement to test mapping
   - Test coverage reports
   - Gap analysis results
   - Risk assessment updates

Create templates for:
- Test execution documentation
- Evidence collection checklists
- Compliance validation reports
- Audit trail reviews

Ensure all evidence can support regulatory examination and internal audit requirements.
```

---

## Common Pitfalls and Solutions

### Pitfall 1: Tests Without Clear Business Context
**Problem:** Technical test cases that don't validate business requirements
**Solution:** Add to prompt: "Focus on business scenarios that validate policy requirements. Test from the customer and business user perspective, not just technical functionality."

### Pitfall 2: Incomplete Error Scenario Testing
**Problem:** Only testing happy path scenarios
**Solution:** Add to prompt: "Include comprehensive error testing for validation failures, service outages, and business rule violations. Test what happens when things go wrong."

### Pitfall 3: Missing Regulatory Validation
**Problem:** Tests that don't verify compliance requirements
**Solution:** Add to prompt: "Every test case involving regulatory requirements must validate compliance. Include specific checks for BSA, PATRIOT Act, and FINRA requirements."

### Pitfall 4: Poor Traceability Links
**Problem:** Tests that can't be traced back to specific requirements
**Solution:** Add to prompt: "Every test case must reference the specific policy requirement, user story, and acceptance criteria it validates. Include requirement IDs and section references."

### Pitfall 5: Unrealistic Test Data
**Problem:** Test data that doesn't reflect real customer scenarios
**Solution:** Add to prompt: "Use realistic but synthetic test data that reflects actual customer demographics and account patterns in financial services."

---

## Validation and Quality Check Prompts

### Test Case Completeness Review
```
Review these UAT test cases for completeness and quality:

[PASTE UAT TEST CASES]

Evaluate:
- Clear test objectives and expected results
- Realistic and appropriate test data
- Complete step-by-step procedures
- Proper traceability to requirements
- Comprehensive error scenario coverage
- Regulatory compliance validation

Identify any gaps or improvements needed.
```

### Traceability Matrix Validation
```
Validate this Requirements Traceability Matrix for completeness:

[PASTE RTM]

Check for:
- Complete forward traceability (policy → stories → tests)
- Complete backward traceability (tests → stories → policy)
- No orphan requirements (without implementation)
- No orphan test cases (without clear requirements)
- Appropriate priority classification
- Complete status tracking

Flag any traceability gaps or inconsistencies.
```

### Coverage Metrics Calculation
```
Calculate coverage metrics for this requirements set:

Requirements: [PASTE REQUIREMENTS LIST]
Stories: [PASTE STORY LIST]  
Test Cases: [PASTE TEST CASE LIST]

Provide:
- Percentage of requirements with complete traceability
- Percentage of requirements with adequate test coverage
- Breakdown by priority level (Critical/High/Medium/Low)
- Identification of highest-risk gaps
- Recommendations for achieving 100% coverage
```

---

## Practice Exercise

Using the customer onboarding policy and any user stories you've created:

1. Use Prompt 1 to generate UAT cases from acceptance criteria
2. Use Prompt 3 to create a traceability matrix
3. Use Prompt 4 to perform gap analysis
4. Use Prompt 5 to add compliance-specific test cases

Compare your results with solutions/sample-uat-scenarios.md and solutions/sample-traceability-matrix.md