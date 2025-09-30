# UAT Test Case Template

## What is UAT (User Acceptance Testing)?

User Acceptance Testing verifies that a system meets business requirements and is ready for production use. UAT test cases bridge the gap between technical implementation and business expectations, ensuring the system delivers the intended business value.

## Why Structured UAT Test Cases Matter

- **Requirement Validation:** Confirms all business requirements are implemented correctly
- **Traceability:** Links test cases back to specific requirements and acceptance criteria
- **Audit Compliance:** Provides evidence that regulatory requirements are met
- **Risk Mitigation:** Identifies gaps before production deployment
- **Stakeholder Confidence:** Demonstrates system readiness to business users

## UAT Test Case Structure

### Header Information
Every test case needs clear identification and context:

```markdown
**Test ID:** UAT-[Sequential Number]
**Test Name:** [Descriptive name of what's being tested]
**Related Story:** [User Story ID, e.g., US-001]
**Related AC:** [Acceptance Criteria reference, e.g., AC2]
**Priority:** [High/Medium/Low based on business impact]
**Type:** [Functional/Integration/Regression/Security]
**Test Category:** [Happy Path/Error Handling/Edge Case/Compliance]
```

### Test Details Section
Comprehensive test specifications:

```markdown
**Objective:**
[Clear statement of what this test validates]

**Preconditions:**
- [Setup requirement 1]
- [Setup requirement 2]
- [Required test data]
- [System state requirements]

**Test Data:**
| Field Name | Value | Rationale |
|------------|-------|-----------|
| [field] | [specific value] | [why this value was chosen] |

**Test Steps:**
1. [Detailed action step with expected UI behavior]
2. [Navigation or input step with specific data]
3. [Verification step with exact expected result]

**Expected Results:**
- [Specific, measurable outcome 1]
- [Specific, measurable outcome 2]
- [System state changes]
- [Notifications or messages]

**Actual Results:**
[To be completed during test execution]

**Pass/Fail Status:**
[ ] Pass  [ ] Fail  [ ] Blocked

**Execution Notes:**
[Observations, deviations, or issues encountered]
```

## Test Data Best Practices

### Use Realistic but Safe Data
```markdown
**Test Data:**
| Field | Value | Rationale |
|-------|-------|-----------|
| Customer Name | Alice M. Anderson | Valid name format, includes middle initial |
| Date of Birth | 01/15/1985 | Ensures age requirement (18+) is met |
| SSN | 123-45-6789 | Standard test SSN format, not real number |
| Email | alice.test@example.com | Valid format using safe domain |
| Phone | (555) 123-4567 | Standard test phone number format |
| Address | 123 Main St, Dallas, TX 75201 | Valid, standardizable address |
| Initial Deposit | $500.00 | Above minimum ($25), below auto-review threshold ($10,000) |
```

### Edge Case Test Data
```markdown
**Test Data:**
| Field | Value | Rationale |
|-------|-------|-----------|
| Customer Name | Mary-Jane O'Connor-Smith | Tests hyphenated names and apostrophes |
| Date of Birth | 01/01/2006 | Exactly 18 years old (boundary condition) |
| Address | 1234567890 Very Long Street Name Ave | Tests maximum address length limits |
| Initial Deposit | $9,999.99 | Just below auto-review threshold |
```

## Complete Example: Customer Identity Verification

```markdown
**Test ID:** UAT-001
**Test Name:** Verify successful automated identity verification for valid customer data
**Related Story:** US-003 (Customer can complete identity verification process)
**Related AC:** AC2 (System validates customer identity using third-party service)
**Priority:** High
**Type:** Functional
**Test Category:** Happy Path

---

**Objective:**
Verify that a customer with valid personal information can successfully complete the automated identity verification process and receive immediate account approval.

**Preconditions:**
- Customer onboarding portal is accessible and operational
- Identity verification service is online and responding
- Test customer data has been prepared and is not in system
- Email service is operational for notification testing

**Test Data:**
| Field | Value | Rationale |
|-------|-------|-----------|
| First Name | Alice | Common first name, clean format |
| Middle Name | Marie | Optional field testing |
| Last Name | Anderson | Common surname, no special characters |
| Date of Birth | 03/15/1985 | Age 39, well above minimum requirement |
| SSN | 123-45-6789 | Standard test SSN format |
| Email | alice.anderson.test@example.com | Unique test email address |
| Phone | (214) 555-0123 | Dallas area code, test number |
| Street Address | 123 Main Street, Apt 2B | Standard format with apartment |
| City | Dallas | Major city for address validation |
| State | TX | Valid state code |
| ZIP Code | 75201 | Valid Dallas ZIP code |
| ID Type | Driver's License | Most common ID type |
| ID Number | DL123456789 | Test license number format |
| Account Type | Checking | Primary account type |
| Initial Deposit | $500.00 | Standard amount, triggers auto-approval |

**Test Steps:**
1. Navigate to customer onboarding portal homepage
2. Click "Open New Account" button
3. Select "Individual Account" from account type options
4. Enter personal information using test data values above
5. Upload test ID document (use provided test-id-valid.jpg file)
6. Review application summary page for accuracy
7. Accept required disclosures (PATRIOT Act, Privacy Policy, Terms)
8. Click "Submit Application" button
9. Wait for verification process to complete (should be < 60 seconds)
10. Check email inbox for notification message
11. Verify account access by logging into customer portal

**Expected Results:**
- Application submission succeeds without validation errors
- Identity verification completes within 60 seconds per SLA
- System displays "Application Approved" status message
- Verification confidence score is displayed as >85%
- Customer receives approval email within 2 minutes
- Email contains account number and welcome information
- Customer can log into account portal immediately
- Account shows initial deposit amount and available balance
- Audit log records verification attempt with "PASS" result and timestamp

**Actual Results:**
[To be completed during execution]

**Pass/Fail Status:**
[ ] Pass  [ ] Fail  [ ] Blocked

**Execution Notes:**
[Document any deviations, performance observations, or usability issues]

**Compliance Verification:**
- [ ] PATRIOT Act disclosure was presented and accepted
- [ ] Privacy policy acknowledgment was recorded
- [ ] Identity verification met regulatory standards
- [ ] Audit trail captured all required data points

**Traceability:**
- **Source Requirement:** Policy Section 2.3 (Auto-approval criteria)
- **Business Rule:** COP-2024-017, Section 3.1 (Score >85% = auto-approve)
- **Data Elements:** All required fields per Section 1 (Initial Application)
- **SLA Requirement:** Section 7.1 (60-second verification time)
```

## Error Handling Test Case Example

```markdown
**Test ID:** UAT-015
**Test Name:** Verify proper handling of identity verification service timeout
**Related Story:** US-004 (System handles verification service failures gracefully)
**Related AC:** AC3 (Applications route to manual review when service unavailable)
**Priority:** High
**Type:** Error Handling
**Test Category:** System Integration

---

**Objective:**
Verify that when the identity verification service fails to respond within 10 seconds, the application is automatically routed to manual review queue with appropriate customer messaging.

**Preconditions:**
- Identity verification service is configured with 10-second timeout
- Manual review queue is operational
- Test can simulate service timeout (coordinate with development team)
- Customer notification system is operational

**Test Data:**
| Field | Value | Rationale |
|-------|-------|-----------|
| Customer Name | Bob B. Baker | Valid customer data |
| SSN | 987-65-4321 | Test SSN for timeout scenario |
| Email | bob.baker.test@example.com | Test email for notifications |
| [Other fields] | [Standard valid test data] | Focus is on service timeout |

**Test Steps:**
1. Begin customer application with valid data
2. Submit application to trigger identity verification
3. [Test Setup: Simulate verification service timeout - coordinate with dev team]
4. Observe system behavior during timeout period (10+ seconds)
5. Verify customer sees appropriate messaging
6. Check manual review queue for new application
7. Verify customer receives appropriate notification email

**Expected Results:**
- System waits exactly 10 seconds for verification service response
- After timeout, customer sees "We're reviewing your application" message
- Application status changes to "Under Review"
- Application appears in manual review queue within 1 minute
- Customer receives email: "Your application is being reviewed"
- No error messages are displayed to customer
- System logs timeout event for monitoring
- Customer can check application status online

**Actual Results:**
[To be completed during execution]

**Pass/Fail Status:**
[ ] Pass  [ ] Fail  [ ] Blocked

**Execution Notes:**
[Note: This test requires coordination with development team to simulate timeout]
```

## Edge Case Test Example

```markdown
**Test ID:** UAT-023
**Test Name:** Verify handling of customer at minimum age requirement (exactly 18 years old)
**Related Story:** US-001 (Customer must meet age requirement)
**Related AC:** AC1 (System validates customer is 18 or older)
**Priority:** Medium
**Type:** Functional
**Test Category:** Edge Case

---

**Objective:**
Verify that a customer who is exactly 18 years old (born exactly 18 years ago today) can successfully complete the application process.

**Preconditions:**
- Calculate exact date 18 years ago from today's date
- System date/time is accurate
- Age validation logic is operational

**Test Data:**
| Field | Value | Rationale |
|-------|-------|-----------|
| Date of Birth | [Today's date - 18 years] | Exactly 18 years old boundary condition |
| [Other fields] | [Standard valid test data] | Focus is on age validation |

**Test Steps:**
1. Calculate birth date exactly 18 years ago from today
2. Enter application data with calculated birth date
3. Submit application and observe age validation
4. Complete remaining application steps
5. Verify successful processing

**Expected Results:**
- Age validation passes (accepts exactly 18 years old)
- Application processes normally through all steps
- No age-related error messages appear
- Customer can complete onboarding successfully

**Actual Results:**
[To be completed during execution - update birth date calculation on execution day]

**Pass/Fail Status:**
[ ] Pass  [ ] Fail  [ ] Blocked

**Execution Notes:**
[Important: Recalculate birth date on actual test execution date]
```

## Test Case Quality Checklist

Before finalizing UAT test cases, verify:

- [ ] **Clear Objective:** Purpose is unambiguous and specific
- [ ] **Complete Test Data:** All required fields have realistic values
- [ ] **Detailed Steps:** Each step is actionable and specific
- [ ] **Measurable Results:** Expected outcomes can be objectively verified
- [ ] **Proper Traceability:** Links back to requirements and acceptance criteria
- [ ] **Realistic Scenarios:** Reflects actual business use cases
- [ ] **Edge Cases Covered:** Boundary conditions and error scenarios included
- [ ] **Compliance Verified:** Regulatory requirements are validated

## Tips for Writing Effective UAT Cases

1. **Think Like an End User:** Focus on business scenarios, not technical implementation
2. **Use Real Workflows:** Base tests on actual customer journeys
3. **Include Error Paths:** Test what happens when things go wrong
4. **Validate Business Rules:** Ensure policy requirements are enforced
5. **Document Everything:** Capture rationale for test data choices
6. **Keep It Simple:** One objective per test case
7. **Make It Repeatable:** Anyone should be able to execute the test

## Using This Template with Copilot

- **Generate Test Cases:** Provide acceptance criteria and ask for comprehensive UAT scenarios
- **Create Test Data:** Request realistic but safe data for specific business rules
- **Add Edge Cases:** Ask Copilot to identify boundary conditions and error scenarios
- **Improve Clarity:** Use Copilot to refine test steps and expected results
- **Validate Coverage:** Have Copilot check that all requirements are tested