# Gherkin Reference Guide for Business Analysts

## Overview

Gherkin is a business-readable, domain-specific language that allows you to describe business requirements without implementation details. For business analysts, Gherkin provides a structured way to document acceptance criteria that bridges the gap between business requirements and test cases.

## Basic Gherkin Syntax

### Core Keywords

**Feature:** High-level description of a software feature
**Scenario:** Concrete example of business rules
**Given:** Describes the initial state/context
**When:** Describes an action or event
**Then:** Describes the expected outcome
**And:** Continues a Given, When, or Then step
**But:** Negative version of And

### Basic Structure
```gherkin
Feature: Brief description of the feature
  As a [role]
  I want [capability]
  So that [benefit]

  Scenario: Descriptive name of the scenario
    Given [initial context]
    When [action performed]
    Then [expected outcome]
```

---

## Given/When/Then Format

### Given - Set the Context
Describes the state of the system before the action. Should establish:
- User's current state
- System state
- Relevant data conditions
- Permissions or access levels

#### Good Given Examples
```gherkin
Given I am logged in as customer "Alice Anderson"
Given my account balance is $150.25
Given I have 3 unread notifications
Given the alert threshold is set to $200
Given the notification service is operational
```

#### Poor Given Examples
```gherkin
Given I am on the website          # Too vague
Given I have an account            # Missing specifics
Given everything is working        # Not testable
```

### When - Describe the Action
Describes the specific action that triggers the behavior being tested.

#### Good When Examples
```gherkin
When I enter "$100" in the threshold field
When I click the "Save Preferences" button
When my account balance drops to $75.00
When I select "Email and SMS" from the notification options
When the daily processing job runs at 2:00 AM
```

#### Poor When Examples
```gherkin
When I use the system             # Too vague
When something happens            # Not specific
When I do stuff                   # Not actionable
```

### Then - Define Expected Outcomes
Describes the observable result or change in system state.

#### Good Then Examples
```gherkin
Then I see confirmation message "Threshold updated successfully"
Then an email alert is sent to "alice@example.com"
Then the threshold displays as "$100.00" in my preferences
Then the alert is logged in the audit trail with timestamp
Then I receive an SMS within 2 minutes
```

#### Poor Then Examples
```gherkin
Then it works                     # Not measurable
Then the user is happy           # Not observable
Then something happens           # Not specific
```

---

## Scenario vs Scenario Outline

### Regular Scenario
Use for single, specific test cases:

```gherkin
Scenario: Customer receives low balance alert when threshold is reached
  Given I am logged in as customer "CUST-12345"
  And my alert threshold is set to "$200.00"
  And my current account balance is "$250.00"
  When a transaction of "$75.00" is processed against my account
  Then my new balance becomes "$175.00"
  And I receive an email alert within 5 minutes
  And the alert contains my current balance "$175.00"
  And the alert references my threshold "$200.00"
```

### Scenario Outline
Use when testing the same logic with multiple data sets:

```gherkin
Scenario Outline: Validate threshold amounts within acceptable range
  Given I am logged in as customer "CUST-12345"
  When I enter "<threshold>" in the alert threshold field
  And I click "Save Preferences"
  Then I see "<result_message>"
  And my threshold setting is "<final_value>"

  Examples:
    | threshold | result_message              | final_value |
    | 50.00     | Threshold saved successfully| $50.00      |
    | 0.00      | Threshold saved successfully| $0.00       |
    | 1000.00   | Threshold saved successfully| $1000.00    |
    | -10.00    | Invalid amount              | [unchanged] |
    | 1500.00   | Amount exceeds maximum      | [unchanged] |
    | abc       | Invalid format              | [unchanged] |
```

---

## Data Tables and Examples

### Simple Data Tables
Use for passing structured data to a single step:

```gherkin
Scenario: Customer completes account application with required information
  Given I am on the account application page
  When I fill out the application with these details:
    | Field           | Value                    |
    | Legal Name      | Alice Marie Anderson     |
    | Date of Birth   | 1985-03-15              |
    | SSN             | 123-45-6789             |
    | Email           | alice@example.com        |
    | Phone           | 555-123-4567            |
    | Address         | 123 Main St, Dallas, TX |
  And I click "Submit Application"
  Then I see "Application submitted successfully"
  And I receive a confirmation email within 5 minutes
```

### Examples Tables
Use with Scenario Outline for multiple test cases:

```gherkin
Scenario Outline: Identity verification score determines approval decision
  Given a customer application is submitted
  And the identity verification service returns score "<score>"
  When the application is processed
  Then the application status is "<status>"
  And the next step is "<next_action>"

  Examples: Auto-approval cases
    | score | status   | next_action           |
    | 95    | Approved | Account creation      |
    | 87    | Approved | Account creation      |
    | 85    | Approved | Account creation      |

  Examples: Manual review cases
    | score | status        | next_action    |
    | 84    | Under Review  | Manual review  |
    | 70    | Under Review  | Manual review  |
    | 60    | Under Review  | Manual review  |

  Examples: Auto-rejection cases
    | score | status   | next_action        |
    | 59    | Rejected | Notification sent  |
    | 45    | Rejected | Notification sent  |
    | 20    | Rejected | Notification sent  |
```

---

## Best Practices for Financial Services

### 1. Use Specific Financial Data
```gherkin
# Good: Specific amounts and account types
Given my checking account "CHK-001-5567" has balance "$1,247.83"
And my savings account "SAV-001-5568" has balance "$15,420.50"

# Poor: Vague amounts
Given I have money in my account
```

### 2. Include Regulatory Compliance Steps
```gherkin
Scenario: Customer notification complies with TCPA regulations
  Given customer "CUST-98765" has opted in to SMS notifications
  And the current time is 9:00 AM EST
  And the customer's timezone is EST
  When their account balance drops below their threshold
  Then an SMS alert is sent immediately
  And the alert includes opt-out instructions
  And the notification is logged for compliance audit
  
Scenario: No notifications sent during quiet hours per TCPA
  Given customer "CUST-98765" has opted in to SMS notifications
  And the current time is 10:30 PM EST
  And the customer's timezone is EST
  When their account balance drops below their threshold
  Then no SMS alert is sent
  And the alert is queued for 8:00 AM the next day
  And the delayed notification is logged with reason code "TCPA_QUIET_HOURS"
```

### 3. Document Audit Trail Requirements
```gherkin
Scenario: All alert actions are logged for compliance
  Given customer "CUST-12345" has alert preferences configured
  When any alert-related action occurs
  Then the system logs the following details:
    | Field         | Required |
    | Customer ID   | Yes      |
    | Timestamp     | Yes      |
    | Action Type   | Yes      |
    | Alert Channel | Yes      |
    | Success/Fail  | Yes      |
    | Error Details | If failed|
    | User Agent    | Yes      |
  And the log entry is immutable
  And the log is retained for 7 years per regulation
```

### 4. Handle Multi-Account Scenarios
```gherkin
Scenario: Joint account holder receives appropriate notifications
  Given account "CHK-001-9876" is a joint account
  And primary holder is "Alice Anderson" with phone "555-123-4567"
  And secondary holder is "Bob Anderson" with phone "555-987-6543"
  And both holders have opted in to SMS notifications
  When the account balance drops below the threshold
  Then an SMS is sent to primary holder "555-123-4567"
  And an SMS is sent to secondary holder "555-987-6543"
  And both notifications contain the same alert information
  And each notification is logged separately in the audit trail
```

---

## Common Mistakes and How to Fix Them

### Mistake 1: Vague Steps
```gherkin
# Wrong
Given I am logged in
When I navigate around
Then I can do things

# Right
Given I am logged in as customer "CUST-12345"
When I navigate to "Account Alerts" in the main menu
Then I can view my current alert preferences
And I can modify my threshold settings
```

### Mistake 2: Implementation Details in Scenarios
```gherkin
# Wrong - includes technical implementation
Given the database contains user record with ID 12345
When the cron job executes the balance_check() function
Then the email_service.send() method is called

# Right - focuses on business behavior
Given customer "Alice Anderson" has balance alerts enabled
When her account balance drops below her threshold
Then she receives an email notification within 5 minutes
```

### Mistake 3: Missing Data Specificity
```gherkin
# Wrong - too generic
Given I have some money
When I spend some
Then I get notified

# Right - specific amounts and conditions
Given my account balance is "$250.00"
And my alert threshold is "$200.00"
When a transaction of "$75.00" is processed
Then my balance becomes "$175.00"
And I receive a low balance alert
```

### Mistake 4: Non-Testable Outcomes
```gherkin
# Wrong - cannot be verified objectively
Then the customer is satisfied
Then the system works well
Then the process is efficient

# Right - measurable outcomes
Then the confirmation message displays "Alert preferences saved"
Then the response time is less than 3 seconds
Then exactly one SMS is sent to the customer's registered number
```

### Mistake 5: Missing Error Scenarios
```gherkin
# Incomplete - only happy path
Scenario: Customer sets alert threshold
  Given I am logged in
  When I set my threshold to "$100"
  Then the threshold is saved

# Complete - includes error handling
Scenario: Customer enters invalid threshold amount
  Given I am logged in as customer "CUST-12345"
  When I enter "-$50" in the threshold field
  And I click "Save Preferences"
  Then I see error message "Threshold must be a positive amount"
  And my previous threshold setting remains unchanged
  And no notification is sent about the change
```

---

## Financial Services Examples

### Example 1: Account Opening Process
```gherkin
Feature: Customer Identity Verification
  As a compliance officer
  I want all new customers to pass identity verification
  So that we meet Know Your Customer (KYC) regulations

  Scenario: Successful identity verification for new customer
    Given a new customer application is received
    And customer provided valid government ID "DL-TX-123456789"
    And customer's SSN is "123-45-6789"
    When the identity verification service is called
    And the verification score is 92
    Then the application status is set to "ID_VERIFIED"
    And the customer can proceed to account funding
    And the verification result is logged for audit
    And the customer receives email "Your identity has been verified"

  Scenario: Failed identity verification triggers manual review
    Given a new customer application is received
    And the identity verification service returns score 45
    When the application is processed
    Then the application status is set to "MANUAL_REVIEW_REQUIRED"
    And the application is routed to the compliance team queue
    And the customer receives email "Additional review required"
    And no account access is granted
    And the failed verification is logged with reason code
```

### Example 2: Transaction Processing
```gherkin
Feature: Real-time Balance Updates
  As a customer
  I want my balance updated immediately after transactions
  So that my alerts reflect accurate information

  Scenario: Debit card transaction triggers immediate balance update
    Given my checking account balance is "$500.00"
    And I have an alert threshold set to "$400.00"
    When I make a debit card purchase of "$150.00" at "Coffee Shop"
    Then my account balance updates to "$350.00" within 30 seconds
    And I receive a low balance alert via my preferred method
    And the transaction appears in my account history immediately
    And the alert references transaction "Coffee Shop - $150.00"

  Scenario Outline: Different transaction types update balance correctly
    Given my account balance is "$1000.00"
    When a "<transaction_type>" of "<amount>" is processed
    Then my new balance is "<new_balance>"
    And the transaction posts with description "<description>"

    Examples:
    | transaction_type | amount | new_balance | description        |
    | Debit Card      | 50.00  | 950.00      | POS Purchase       |
    | ATM Withdrawal  | 100.00 | 900.00      | ATM Cash Withdrawal|
    | Online Transfer | 200.00 | 800.00      | Transfer to Savings|
    | Direct Deposit  | 500.00 | 1500.00     | Payroll Deposit    |
    | Check Deposit   | 250.00 | 1250.00     | Mobile Check Deposit|
```

### Example 3: Compliance Scenarios
```gherkin
Feature: FINRA Rule 4512 Compliance for Customer Notifications
  As a compliance officer
  I want all customer notifications to meet FINRA requirements
  So that we maintain regulatory compliance

  Scenario: Customer notification includes required FINRA disclosures
    Given customer "CUST-98765" has a margin account
    And their account equity drops below minimum requirements
    When a margin call notification is generated
    Then the notification includes FINRA-required language
    And the notification explains the customer's options
    And the notification includes the deadline for response
    And the notification is logged with FINRA compliance flag
    And a copy is retained for the required 3-year period

  Scenario: Notification delivery confirmation for regulatory purposes
    Given a compliance-related notification is sent to customer
    When the notification is delivered via email
    Then the system records delivery confirmation timestamp
    And the system logs the customer's email address used
    And failed delivery attempts are retried per policy
    And undelivered notifications are escalated to manual process
    And all delivery attempts are audit-logged for FINRA review
```

---

## Templates for Common Scenarios

### Template: User Authentication
```gherkin
Scenario: [Authentication scenario name]
  Given I am [user state - logged in/out/etc.]
  And my credentials are [valid/invalid/expired]
  When I [specific authentication action]
  Then I [specific outcome]
  And [security logging/audit requirement]
```

### Template: Data Validation
```gherkin
Scenario Outline: [Field name] validation
  Given I am on the [form name] form
  When I enter "<input_value>" in the [field name] field
  And I [submit action]
  Then I see "<result_message>"
  And the field value is "<final_state>"

  Examples: Valid inputs
  | input_value | result_message | final_state |
  
  Examples: Invalid inputs
  | input_value | result_message | final_state |
```

### Template: Financial Transaction
```gherkin
Scenario: [Transaction type and condition]
  Given my [account type] has balance "$[amount]"
  And [relevant account state/limits]
  When [specific transaction action] of "$[amount]"
  Then my balance [specific outcome] "$[new_amount]"
  And [notification/compliance/audit outcome]
```

---

## Quality Checklist

Before finalizing Gherkin scenarios, verify:

### Structure
- [ ] Each scenario has a clear, descriptive name
- [ ] Given/When/Then steps are in logical order
- [ ] Each step serves a specific purpose
- [ ] No redundant or unnecessary steps

### Specificity
- [ ] All amounts, dates, and values are concrete
- [ ] User roles and permissions are clearly defined
- [ ] System states are precisely described
- [ ] Expected outcomes are measurable

### Financial Services Requirements
- [ ] Compliance requirements are addressed
- [ ] Audit trails are documented
- [ ] Regulatory timelines are specified
- [ ] PII handling is appropriate (synthetic data only)

### Testability
- [ ] Each step can be implemented as an automated test
- [ ] Expected outcomes are verifiable
- [ ] Error conditions are covered
- [ ] Edge cases are included

---

This reference guide provides the foundation for creating clear, testable, and compliant acceptance criteria that bridge business requirements and development implementation in financial services environments.