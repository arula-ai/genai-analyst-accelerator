# Exercise 2: Acceptance Criteria Generation
**Time:** 13 minutes (37:00 - 50:00 in session)  
**Objective:** Convert user stories into comprehensive Gherkin acceptance criteria that serve as both specifications and automated test scripts

## Prerequisites
- [ ] You've completed Exercise 1 (have user stories ready)
- [ ] You have prompts/03-gherkin-prompts.md open for reference
- [ ] Copilot is running

## Exercise Overview
You'll use Copilot to:
1. Convert user stories to Gherkin scenarios - happy path (4 min)
2. Add negative and edge case scenarios (5 min)
3. Create data-driven scenario outlines (4 min)

## Gherkin Syntax Quick Reference

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

---

## Step 1: Convert Stories to Gherkin - Happy Path (4 minutes)

### Instructions

1. **Select your best user story** from Exercise 1 (one with clear acceptance criteria)

2. **Use this prompt to generate Gherkin scenarios**:
   ```
   You are a QA analyst in a financial services environment writing Gherkin scenarios.

   Convert this user story into detailed Gherkin scenarios:

   [PASTE YOUR USER STORY WITH ACCEPTANCE CRITERIA]

   Generate scenarios that cover:
   - Happy path (primary success scenario)
   - Each acceptance criterion as a separate scenario
   - Business rule validations

   For each scenario:
   - Use specific, realistic financial data (account numbers, dollar amounts)
   - Include compliance-relevant steps where applicable
   - Make assertions measurable and verifiable
   - Consider audit trail requirements

   Format as proper Gherkin with:
   - Clear feature description
   - Specific scenario titles
   - Concrete Given-When-Then steps
   - No vague language ("some," "appropriate," "valid")

   Example data should reflect financial services context.
   ```

3. **Review the generated scenarios**:
   - Are the steps specific and testable?
   - Does each scenario map to an acceptance criterion?
   - Are you using realistic financial data?

### Checkpoint ✓
After 4 minutes you should have:
- [ ] Feature description that matches your user story
- [ ] 3-5 scenarios covering the happy path
- [ ] Each scenario uses specific, realistic data
- [ ] Steps are concrete and testable
- [ ] Compliance considerations included where relevant

### Tips
- If scenarios are vague, add: "Use specific dollar amounts, account numbers, and dates"
- If missing business context, add: "Include realistic banking data and customer scenarios"
- If steps are too technical, add: "Focus on user behavior, not system implementation"

### What Good Looks Like
**Example Gherkin Feature:**
```gherkin
Feature: Customer Balance Alert Threshold Configuration
  As a retail banking customer
  I want to set a custom balance threshold for alerts
  So that I can avoid overdraft fees by being warned before my balance gets too low

Scenario: Customer sets valid balance threshold
  Given I am logged in as customer "John Smith" with account "AC-789012"
  And my current account balance is $2,500.00
  When I navigate to alert settings
  And I enter threshold amount "$500.00"
  And I save the threshold setting
  Then the threshold is saved to my profile
  And I see confirmation message "Alert threshold set to $500.00 for all accounts"
  And the system logs the threshold change for audit purposes

Scenario: Customer modifies existing threshold
  Given I am logged in as customer "Jane Doe" with account "AC-456789"
  And I have existing threshold of "$200.00"
  When I change the threshold to "$750.00"
  And I save the changes
  Then my threshold is updated to "$750.00"
  And I see confirmation "Alert threshold updated to $750.00"
  And the change is logged with timestamp and user ID
```

---

## Step 2: Add Negative and Edge Case Scenarios (5 minutes)

### Instructions

1. **Use this prompt to generate comprehensive edge cases**:
   ```
   Generate comprehensive edge case and negative test scenarios for this user story:

   [PASTE THE SAME USER STORY]

   Create scenarios for:

   **Boundary Conditions:**
   - Minimum/maximum values ($0, $5,000)
   - Character limits and input validation
   - Special characters and formatting

   **Error Scenarios:**
   - Invalid inputs (negative numbers, non-numeric)
   - Missing required data
   - System failures and timeout conditions

   **Security Scenarios:**
   - Unauthorized access attempts
   - Session timeout during transaction
   - Permission violations

   **Compliance Scenarios:**
   - Audit trail validation
   - Data retention requirements
   - Regulatory limit violations

   Each scenario should:
   - Have a descriptive title explaining what's being tested
   - Use realistic failure data
   - Specify exact error messages expected
   - Include recovery steps where applicable

   Format as Gherkin scenarios with specific test data.
   ```

2. **Review and organize the scenarios**:
   - Group related error scenarios together
   - Ensure error messages are specific
   - Verify boundary values are tested

### Checkpoint ✓
After 5 minutes total (9 minutes elapsed), you should have:
- [ ] Boundary value test scenarios
- [ ] Input validation scenarios with specific error messages
- [ ] Security and permission scenarios
- [ ] Compliance validation scenarios
- [ ] System failure and recovery scenarios

### Tips
- Don't skip security scenarios - financial services requires thorough security testing
- Include specific error messages - vague assertions like "error occurs" aren't helpful
- Test both upper and lower boundaries for numeric values

### What Good Looks Like
**Example Negative Scenarios:**
```gherkin
Scenario: Customer enters threshold above maximum limit
  Given I am logged in as customer "Bob Wilson" with account "AC-123456"
  When I enter threshold amount "$6,000.00"
  And I attempt to save the threshold
  Then I see error message "Threshold must be between $0 and $5,000"
  And the threshold is not saved
  And no audit log entry is created

Scenario: Unauthorized user attempts to modify threshold
  Given customer "Alice Johnson" has threshold "$300.00" for account "AC-987654"
  And I am logged in as different customer "Charlie Brown"
  When I attempt to access Alice's alert settings
  Then I receive "Access Denied" error
  And I am redirected to my own account settings
  And the unauthorized access attempt is logged for security review

Scenario: Session timeout during threshold update
  Given I am logged in as customer "Diana Prince" with account "AC-555777"
  And I have entered new threshold "$800.00"
  When my session expires before saving
  And I attempt to save the threshold
  Then I see message "Session expired. Please log in again."
  And the threshold change is not saved
  And I am redirected to login page
```

---

## Step 3: Create Data-Driven Scenario Outlines (4 minutes)

### Instructions

1. **Identify repetitive scenarios** from Steps 1 and 2 that could benefit from data tables

2. **Use this prompt to create scenario outlines**:
   ```
   Convert these scenarios into data-driven Scenario Outlines using Examples tables:

   [PASTE 2-3 SIMILAR SCENARIOS FROM YOUR GHERKIN]

   Create Scenario Outlines for scenarios that would benefit from:
   - Multiple threshold values (valid and invalid)
   - Different user types or account statuses
   - Various error conditions
   - Boundary value testing

   For each Scenario Outline:
   - Parameterize variable elements with <placeholders>
   - Create comprehensive Examples tables
   - Include both valid and invalid test cases
   - Use realistic financial services data
   - Group related test cases logically

   Make data sets comprehensive but focused on the specific business rule being tested.
   ```

3. **Review the scenario outlines**:
   - Do the parameter names make sense?
   - Are the Examples tables comprehensive?
   - Do they cover both positive and negative cases?

### Checkpoint ✓
After 4 minutes total (13 minutes elapsed), you should have:
- [ ] 1-2 scenario outlines with Examples tables
- [ ] Parameters clearly defined with <brackets>
- [ ] Examples include both valid and invalid data
- [ ] Tables are well-organized and readable
- [ ] Test coverage is comprehensive for the business rule

### Tips
- Don't over-parameterize - only parameterize what actually varies between test cases
- Group similar test cases in the same Examples table
- Use descriptive parameter names like <threshold_amount> not <value1>

### What Good Looks Like
**Example Scenario Outline:**
```gherkin
Scenario Outline: Threshold validation with various input values
  Given I am logged in as customer "<customer_name>" with account "<account_number>"
  When I enter threshold amount "<threshold_input>"
  And I attempt to save the threshold
  Then I should see "<result_type>"
  And the threshold should be "<final_status>"

Examples: Valid thresholds
  | customer_name | account_number | threshold_input | result_type           | final_status |
  | John Smith    | AC-123456     | $0.00          | Success confirmation  | saved        |
  | Jane Doe      | AC-789012     | $500.00        | Success confirmation  | saved        |
  | Bob Wilson    | AC-456789     | $5000.00       | Success confirmation  | saved        |

Examples: Invalid thresholds
  | customer_name | account_number | threshold_input | result_type                              | final_status |
  | Alice Johnson | AC-999888     | -$100.00       | Error: Threshold cannot be negative      | not saved    |
  | Charlie Brown | AC-777555     | $5001.00       | Error: Threshold must be between $0-$5000| not saved    |
  | Diana Prince  | AC-333444     | abc            | Error: Please enter a valid dollar amount | not saved    |
  | Sam Taylor    | AC-111222     |                | Error: Threshold amount is required       | not saved    |
```

---

## Exercise Complete!

### Deliverables Checklist
- [ ] Complete Gherkin feature with 5-8 scenarios
- [ ] Happy path scenarios covering all acceptance criteria
- [ ] Comprehensive negative and edge case scenarios
- [ ] At least one data-driven scenario outline
- [ ] All scenarios use specific, realistic financial data

### Time Check
If you completed in 13 minutes: Great efficiency with comprehensive coverage!  
If you took longer: Focus on using prompts effectively and reviewing output quickly  
If you finished early: Add more edge cases or create additional scenario outlines

### Peer Review (2 minutes)
Partner with someone nearby and review each other's Gherkin:
- Are scenarios specific and testable?
- Do Given-When-Then steps flow logically?
- Are error scenarios comprehensive?
- Would a QA engineer be able to automate these scenarios?

### Common Issues and Quick Fixes

**Issue:** Scenarios are vague or use generic data  
**Fix:** Re-prompt with: "Use specific dollar amounts, account numbers, and customer names"

**Issue:** Missing error messages in negative scenarios  
**Fix:** Add: "Include exact error message text expected for each failure scenario"

**Issue:** Steps include implementation details  
**Fix:** Revise to focus on user behavior: "When I click the submit button" → "When I save the threshold"

**Issue:** Scenario outlines have too many parameters  
**Fix:** Only parameterize values that actually change between test cases

### What Makes Gherkin Effective

**Good Gherkin:**
- Uses specific, realistic data
- Tests behavior, not implementation
- Includes expected error messages
- Is automatable by QA engineers
- Covers compliance requirements

**Poor Gherkin:**
- Uses vague terms like "valid data"
- Focuses on UI elements like "click button"
- Missing error scenarios
- Untestable assertions like "works correctly"

### Advanced Tips for Financial Services

1. **Always include audit trail validation** - regulatory requirements
2. **Test permission boundaries** - different user roles and access levels
3. **Use realistic financial data** - account numbers, routing numbers, amounts
4. **Consider timezone and date handling** - important for compliance
5. **Test data retention** - regulatory requirements for record keeping
6. **Validate calculations precisely** - especially important for monetary amounts

### Troubleshooting

**Copilot generates technical scenarios:** Add "Focus on user behavior and business rules, not technical implementation"

**Missing compliance scenarios:** Specifically mention "This is for regulated banking - include audit and compliance validation"

**Scenarios aren't automatable:** Ask "Make scenarios specific enough for automated testing tools"

**Error messages are generic:** Request "Include exact error message text that users will see"

### Next Steps
Move to Exercise 3: GitHub Issues Creation (50:00-65:00)
- Convert your Gherkin scenarios into proper GitHub issues
- Include proper labels, milestones, and linking
- Create issue templates for consistent formatting

### Key Takeaways
- Good Gherkin serves as both specification and test script
- Specific data makes scenarios more valuable and testable
- Negative scenarios are as important as happy path testing
- Financial services requires special attention to security and compliance
- Data-driven scenarios improve test coverage while reducing duplication