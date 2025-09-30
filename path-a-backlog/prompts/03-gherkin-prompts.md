# Gherkin Scenario Prompts

## Overview
This guide provides prompt templates for converting user stories into comprehensive Gherkin scenarios that serve as both specifications and automated test scripts. These prompts are tailored for financial services environments where precision, compliance, and thorough testing are critical.

## The Five-Part Prompt Pattern
Every effective prompt includes:
1. **Role:** Tell Copilot what role to assume
2. **Inputs:** Provide the source material
3. **Format:** Specify the desired output structure
4. **Constraints:** Add requirements and boundaries
5. **Examples:** Show what good looks like

## Gherkin Syntax Primer

### Basic Structure
```gherkin
Feature: Brief description of the feature
  As a [role]
  I want [functionality]
  So that [business value]

Scenario: Brief description of the scenario
  Given [initial context/state]
  When [action/event]
  Then [expected outcome]
  And [additional expected outcome]
```

### Key Elements
- **Feature:** High-level capability being tested
- **Scenario:** Specific test case or user journey
- **Given:** Initial state or preconditions
- **When:** Action or event that triggers behavior
- **Then:** Expected outcome or result
- **And/But:** Additional conditions or outcomes
- **Scenario Outline:** Template for multiple similar tests
- **Examples:** Data table for parameterized tests

---

## Prompt 1: Basic Scenario Generation

### When to Use
To convert user stories into comprehensive Gherkin scenarios covering main functionality.

### The Prompt
```
You are a QA analyst in a financial services environment writing Gherkin scenarios.

Convert this user story into detailed Gherkin scenarios:

[PASTE USER STORY]

Generate scenarios that cover:
- Happy path (primary success scenario)
- Alternative paths (valid variations)
- Business rule validations
- Error conditions

For each scenario:
- Use specific, realistic financial data
- Include compliance-relevant steps
- Make assertions measurable and verifiable
- Consider audit trail requirements

Format as proper Gherkin with:
- Clear feature description
- Specific scenario titles
- Concrete Given-When-Then steps
- No vague language ("some," "appropriate," "valid")

Example data should reflect financial services context (account numbers, transaction amounts, customer IDs, etc.).
```

### Expected Output
Copilot should generate complete Gherkin features with multiple scenarios using specific financial data and clear, testable steps.

### Tips
- If scenarios are vague, add: "Use specific dollar amounts, account numbers, and dates"
- If missing edge cases, add: "Include boundary value testing"
- If compliance is overlooked, add: "Include regulatory validation steps"

---

## Prompt 2: Edge Case and Negative Scenario Generation

### When to Use
To ensure comprehensive test coverage including error conditions and boundary cases.

### The Prompt
```
Generate comprehensive edge case and negative test scenarios for this user story:

[PASTE USER STORY]

Create scenarios for:

**Boundary Conditions:**
- Minimum/maximum values
- Empty fields
- Character limits
- Date ranges

**Error Scenarios:**
- Invalid inputs
- Missing required data
- System failures
- Timeout conditions

**Security Scenarios:**
- Unauthorized access attempts
- Data validation failures
- Session timeout
- Permission violations

**Compliance Scenarios:**
- Regulatory limit violations
- Audit trail failures
- Data retention requirements
- Privacy control validation

Each scenario should:
- Have a descriptive title explaining what's being tested
- Use realistic failure data
- Specify exact error messages expected
- Include recovery steps where applicable

Format as Gherkin scenarios with specific test data.
```

### Expected Output
Copilot should create comprehensive negative test scenarios covering security, compliance, and error conditions with specific failure data and expected error responses.

---

## Prompt 3: Data-Driven Scenario Outlines

### When to Use
When scenarios need to be tested with multiple data sets or variations.

### The Prompt
```
Convert these scenarios into data-driven Scenario Outlines using Examples tables:

[PASTE GHERKIN SCENARIOS]

Create Scenario Outlines for scenarios that would benefit from:
- Multiple user types
- Various data inputs
- Different business rules
- Range testing

For each Scenario Outline:
- Parameterize variable elements with <placeholders>
- Create comprehensive Examples tables
- Include edge cases in data sets
- Use realistic financial services data
- Group related test cases logically

Ensure Examples tables include:
- Valid boundary values
- Invalid test cases
- Different user permission levels
- Various transaction types/amounts
- Compliance-relevant variations

Make data sets comprehensive but focused on the specific business rule being tested.
```

### Expected Output
Copilot should transform repetitive scenarios into efficient Scenario Outlines with comprehensive data tables covering various test conditions.

---

## Prompt 4: Compliance and Audit Scenario Enhancement

### When to Use
To ensure scenarios properly test regulatory requirements and audit capabilities.

### The Prompt
```
You are a compliance testing specialist for financial services.

Enhance these Gherkin scenarios with compliance and audit testing:

[PASTE GHERKIN SCENARIOS]

Add scenarios that verify:

**Audit Trail Requirements:**
- User actions are logged with timestamps
- Changes include user identification
- Sensitive data access is tracked
- System events are recorded

**Data Privacy (GDPR/PII):**
- Personal data handling
- Consent management
- Data retention compliance
- Right to deletion

**Financial Regulations:**
- Transaction limits (daily/monthly)
- Know Your Customer (KYC) validation
- Anti-Money Laundering (AML) checks
- Fraud detection triggers

**Security Controls:**
- Authentication verification
- Authorization enforcement
- Data encryption validation
- Session management

Format as additional Gherkin scenarios with specific compliance assertions.
```

### Expected Output
Copilot should generate comprehensive compliance-focused scenarios that verify regulatory requirements and audit capabilities with specific validation steps.

---

## Prompt 5: API and Integration Scenario Generation

### When to Use
When user stories involve system integrations or API interactions.

### The Prompt
```
Generate Gherkin scenarios for API and integration testing based on this user story:

[PASTE USER STORY]

Create scenarios covering:

**API Functionality:**
- Request/response validation
- Data format verification
- Status code assertions
- Error response handling

**Integration Points:**
- External system calls
- Data synchronization
- Timeout handling
- Fallback mechanisms

**Data Validation:**
- Input sanitization
- Output formatting
- Data type verification
- Business rule enforcement

For each scenario:
- Include specific HTTP methods and endpoints
- Use realistic JSON payloads
- Specify expected status codes
- Include response time assertions
- Test both success and failure cases

Format as technical Gherkin scenarios suitable for API testing tools.
```

### Expected Output
Copilot should create technical scenarios suitable for API testing with specific endpoints, payloads, and response validations.

---

## Prompt 6: User Journey Integration Testing

### When to Use
To test complete user workflows that span multiple features or systems.

### The Prompt
```
Create end-to-end user journey scenarios based on these related user stories:

[PASTE MULTIPLE RELATED USER STORIES]

Generate scenarios that test:

**Complete User Workflows:**
- Multi-step processes
- Cross-feature interactions
- State persistence across steps
- Workflow interruption and recovery

**Business Process Validation:**
- Process completion criteria
- Approval workflows
- Status transitions
- Notification triggers

**System Integration:**
- Data flow between systems
- State synchronization
- Error propagation
- Recovery mechanisms

Each scenario should:
- Represent a realistic end-to-end user journey
- Include multiple system touchpoints
- Validate business process completion
- Test integration points
- Verify compliance at each step

Use descriptive scenario names that reflect the business process being tested.
```

### Expected Output
Copilot should create comprehensive journey scenarios that validate complete business processes across multiple system components.

---

## Prompt 7: Performance and Load Testing Scenarios

### When to Use
To create scenarios that validate non-functional requirements.

### The Prompt
```
Generate performance and load testing scenarios for this user story:

[PASTE USER STORY]

Create scenarios that test:

**Response Time Requirements:**
- Individual operation timing
- Complex query performance
- Report generation speed
- API response times

**Load Conditions:**
- Concurrent user scenarios
- High transaction volumes
- Peak usage patterns
- System resource utilization

**Scalability Testing:**
- Gradual load increases
- Stress conditions
- Breaking point identification
- Recovery after overload

**Data Volume Testing:**
- Large dataset processing
- Database query performance
- File upload/download speeds
- Batch processing timing

Format as Gherkin scenarios with specific performance assertions:
- Response times (e.g., "within 2 seconds")
- Throughput rates (e.g., "process 1000 transactions per minute")
- Resource limits (e.g., "CPU usage below 80%")
- Concurrent user counts (e.g., "support 500 simultaneous users")
```

### Expected Output
Copilot should generate performance-focused scenarios with specific, measurable non-functional requirements and realistic load conditions.

---

## Prompt 8: Accessibility Testing Scenarios

### When to Use
To ensure user stories include accessibility validation for inclusive design.

### The Prompt
```
Generate accessibility testing scenarios for this user story:

[PASTE USER STORY]

Create scenarios that validate:

**WCAG 2.1 Compliance:**
- Keyboard navigation
- Screen reader compatibility
- Color contrast requirements
- Focus management

**Assistive Technology Support:**
- Voice recognition software
- Screen magnification tools
- Alternative input devices
- Text-to-speech functionality

**Inclusive Design Principles:**
- Multi-language support
- Different ability levels
- Various device capabilities
- Cognitive accessibility

Each scenario should:
- Specify the assistive technology being used
- Include realistic user interaction patterns
- Validate specific accessibility features
- Test error handling for accessibility tools

Format as Gherkin scenarios with accessibility-specific Given-When-Then steps.
```

### Expected Output
Copilot should create comprehensive accessibility scenarios that validate inclusive design principles and assistive technology compatibility.

---

## Examples: Vague vs Specific Scenarios

### Vague Scenario (Avoid):
```gherkin
Scenario: User searches for account
  Given I am logged in
  When I search for an account
  Then I should see the results
```

### Specific Scenario (Good):
```gherkin
Scenario: Customer service rep searches for account by phone number
  Given I am logged in as customer service rep "CSR001"
  And customer account "AC-789012" exists with phone number "(555) 123-4567"
  When I search for accounts using phone number "(555) 123-4567"
  Then I should see account "AC-789012" in the search results
  And the result should display customer name "John Smith"
  And the result should show account status "Active"
  And the search should complete within 2 seconds
```

### Data-Driven Example:
```gherkin
Scenario Outline: Account balance inquiry with different user roles
  Given I am logged in as <user_role> "<user_id>"
  And account "<account_number>" has balance $<balance>
  When I request balance for account "<account_number>"
  Then I should see balance $<expected_display>
  And the response should include <audit_info>

Examples:
  | user_role        | user_id | account_number | balance  | expected_display | audit_info           |
  | account_holder   | AH001   | AC-123456     | 1500.00  | 1500.00         | full_transaction_log |
  | customer_service | CS001   | AC-123456     | 1500.00  | 1500.00         | limited_details      |
  | compliance_user  | CU001   | AC-123456     | 1500.00  | 1500.00         | full_audit_trail     |
  | external_auditor | EA001   | AC-123456     | 1500.00  | [RESTRICTED]    | access_denied_log    |
```

---

## When to Use Scenario Outline vs Individual Scenarios

### Use Scenario Outline When:
- Testing the same behavior with different data
- Validating business rules across multiple conditions
- Testing different user permissions on same functionality
- Boundary value testing with multiple ranges

### Use Individual Scenarios When:
- Testing distinct user workflows
- Each scenario has unique setup or context
- Error conditions require specific handling
- Integration testing with different systems

---

## Common Mistakes and Solutions

### Mistake 1: Vague Language
**Problem:** "User enters valid data"
**Solution:** "Customer enters account number 'AC-123456'"

### Mistake 2: Missing Context
**Problem:** "Given I am on the page"
**Solution:** "Given I am logged in as 'customer_service_rep' and viewing account 'AC-789012'"

### Mistake 3: Untestable Assertions
**Problem:** "Then the system works correctly"
**Solution:** "Then account balance displays '$1,234.56' and transaction history shows 15 entries"

### Mistake 4: Implementation Details
**Problem:** "When I click the submit button"
**Solution:** "When I submit the account update request"

### Mistake 5: Missing Error Scenarios
**Problem:** Only testing happy path
**Solution:** Include invalid data, unauthorized access, and system failure scenarios

---

## Best Practices for Financial Services Gherkin

1. **Use realistic financial data:** Account numbers, transaction amounts, customer IDs
2. **Include compliance steps:** Audit logging, regulatory validations, data privacy
3. **Be specific about timing:** Response times, processing windows, session timeouts
4. **Test permission boundaries:** Different user roles and access levels
5. **Validate error messages:** Exact text and error codes expected
6. **Include audit assertions:** Verify logging and tracking requirements
7. **Test data retention:** Ensure compliance with regulatory requirements
8. **Validate calculations:** Precise monetary amounts and interest calculations

## Practice Exercise

Convert this user story into comprehensive Gherkin scenarios:

"As a loan officer, I want to calculate monthly payment amounts for various loan terms so that I can provide accurate quotes to customers."

Use Prompts 1, 2, and 3 to create scenarios covering happy path, edge cases, and data-driven testing.

Compare your results with solutions/sample-gherkin.md

These prompts provide a comprehensive framework for creating detailed, testable Gherkin scenarios that meet the quality and compliance standards required in financial services environments.