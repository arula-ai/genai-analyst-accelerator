# Sample Gherkin Scenarios - Path A Solutions

This document provides 5-6 user stories with complete Gherkin scenarios for the automated account alerts project. Each story includes 2-3 positive scenarios, 2-3 negative scenarios, specific data examples, edge cases, and commentary on scenario quality and the importance of specific data in financial services testing.

## Story 1: Customer Sets Account Balance Alert Threshold

### Positive Scenarios (Happy Path)

```gherkin
Scenario: Customer sets initial alert threshold
  Given I am a logged-in customer with account number "12345678"
  And I have a checking account with current balance "$1,247.83"
  And I have no existing alert threshold configured
  When I navigate to the alert settings page
  And I enter threshold amount "$500.00"
  And I click "Save Threshold"
  Then I see confirmation message "Alert threshold set to $500.00. You'll receive alerts when any account balance drops below this amount."
  And my threshold preference is saved as "$500.00" in the customer profile
  And the threshold takes effect immediately for future balance checks

Scenario: Customer modifies existing threshold
  Given I am a logged-in customer with account number "87654321"
  And I have previously set an alert threshold of "$300.00"
  And I have a savings account with current balance "$842.15"
  When I navigate to the alert settings page
  And I change the threshold from "$300.00" to "$750.00"
  And I click "Save Threshold"
  Then I see confirmation message "Alert threshold updated to $750.00"
  And my threshold preference is updated to "$750.00" in the customer profile
  And the new threshold applies to all my accounts immediately
  And the previous threshold "$300.00" is recorded in the audit trail

Scenario: Customer sets threshold with cents precision
  Given I am a logged-in customer with account number "11223344"
  And I am on the alert settings page
  When I enter threshold amount "$1,234.56"
  And I click "Save Threshold"
  Then I see confirmation message "Alert threshold set to $1,234.56"
  And my threshold is stored with exact precision "$1,234.56"
  And future alerts will trigger when balance drops below "$1,234.56"
```

### Negative Scenarios (Error Cases)

```gherkin
Scenario: Customer enters threshold below minimum
  Given I am a logged-in customer on the alert settings page
  When I enter threshold amount "-$50.00"
  And I click "Save Threshold"
  Then I see error message "Threshold must be between $0.01 and $5,000.00"
  And the threshold field is highlighted in red with error styling
  And no threshold value is saved to my customer profile
  And the page remains on the alert settings form

Scenario: Customer enters threshold above maximum
  Given I am a logged-in customer on the alert settings page
  When I enter threshold amount "$10,000.00"
  And I click "Save Threshold"
  Then I see error message "Threshold must be between $0.01 and $5,000.00"
  And my previous threshold value (if any) remains unchanged
  And the system logs the validation error for support review

Scenario: Customer enters non-numeric threshold value
  Given I am a logged-in customer on the alert settings page
  When I enter threshold value "five hundred dollars"
  And I click "Save Threshold"
  Then I see error message "Please enter a valid dollar amount"
  And the threshold field shows format helper text "$0.00"
  And the form prevents submission until valid numeric input is provided

Scenario: System service unavailable during threshold save
  Given I am a logged-in customer on the alert settings page
  And the Customer Profile Service is temporarily unavailable
  When I enter threshold amount "$500.00"
  And I click "Save Threshold"
  Then I see error message "Unable to save settings. Please try again in a few moments."
  And the system logs error "Profile service timeout - customer 12345678 threshold save failed"
  And my previous threshold setting remains active
  And the form retains my entered value "$500.00" for retry
```

### Edge Cases

```gherkin
Scenario: Customer sets threshold to minimum boundary value
  Given I am a logged-in customer on the alert settings page
  When I enter threshold amount "$0.01"
  And I click "Save Threshold"
  Then I see confirmation message "Alert threshold set to $0.01"
  And I will receive alerts when any account balance reaches or falls below "$0.01"
  And the system handles penny-level precision correctly in future calculations

Scenario: Customer sets threshold to maximum boundary value
  Given I am a logged-in customer on the alert settings page
  When I enter threshold amount "$5,000.00"
  And I click "Save Threshold"
  Then I see confirmation message "Alert threshold set to $5,000.00"
  And the threshold is accepted at the maximum allowed value
  And the system handles the maximum value correctly in balance comparisons

Scenario: Customer with multiple account types sets threshold
  Given I am a logged-in customer with the following accounts:
    | Account Type | Account Number | Current Balance |
    | Checking     | 12345678       | $1,247.83      |
    | Savings      | 87654321       | $3,456.92      |
    | Checking     | 11111111       | $89.45         |
  When I set alert threshold to "$500.00"
  Then the threshold applies to accounts "12345678", "87654321", and "11111111"
  And I see confirmation "Threshold applies to all 3 eligible accounts"
  And money market and CD accounts are excluded from alert coverage
```

**Commentary on Scenario Quality:**

These scenarios demonstrate several best practices for financial services Gherkin:

1. **Specific Account Numbers** - Using realistic account numbers (8 digits) helps QA understand data formats and enables better test data management
2. **Precise Dollar Amounts** - Financial scenarios must include cents to catch rounding errors and precision bugs
3. **Exact Error Messages** - Specifying complete error text ensures consistent user experience and enables automated testing
4. **System State Verification** - Each scenario verifies both user-visible changes AND backend state changes (database, audit trail)
5. **Boundary Testing** - Edge cases test minimum ($0.01) and maximum ($5,000.00) values where bugs commonly occur

---

## Story 2: Customer Receives Email Alert When Balance Drops Below Threshold

### Positive Scenarios (Happy Path)

```gherkin
Scenario: Customer receives email alert for checking account threshold crossing
  Given I am customer "john.smith@email.com" with account number "12345678"
  And I have set alert threshold to "$500.00"
  And I have selected "Email only" for alert delivery
  And my checking account balance was "$647.32" at 2:00 PM
  When the core banking system updates my balance to "$423.89" at 2:15 PM
  And the alert processing job runs at 2:16 PM
  Then an email alert is sent to "john.smith@email.com" within 15 minutes
  And the email subject line is "Low Balance Alert - Checking Account xxx5678"
  And the email body contains:
    """
    Your checking account balance has dropped below your alert threshold.
    
    Account: Checking Account xxx5678
    Current Balance: $423.89
    Alert Threshold: $500.00
    Balance Updated: March 15, 2024 at 2:15 PM ET
    
    To avoid overdraft fees, consider transferring funds or monitoring upcoming transactions.
    
    View Account: [Secure Login Link]
    """
  And the email delivery status is logged as "Delivered successfully"

Scenario: Customer receives email alert for savings account threshold crossing
  Given I am customer "sarah.jones@email.com" with savings account "87654321"
  And I have set alert threshold to "$1,000.00"
  And I have selected "Email only" for alert delivery
  And my savings account balance was "$1,156.78" at 10:30 AM
  When an automatic transfer reduces my balance to "$856.78" at 10:45 AM
  And the alert processing job runs at 11:00 AM
  Then an email alert is sent to "sarah.jones@email.com"
  And the email contains specific balance "$856.78" and threshold "$1,000.00"
  And the email includes timestamp "March 15, 2024 at 10:45 AM ET"
  And no duplicate alert is sent if balance remains below threshold in subsequent cycles

Scenario: Customer with multiple accounts receives alert for specific account
  Given I am customer "mike.wilson@email.com" with the following accounts:
    | Account Type | Account Number | Current Balance | Previous Balance |
    | Checking     | 11111111       | $234.56        | $234.56         |
    | Savings      | 22222222       | $432.10        | $678.90         |
    | Checking     | 33333333       | $1,245.33      | $1,245.33       |
  And I have set alert threshold to "$500.00"
  When the savings account "22222222" balance drops from "$678.90" to "$432.10"
  Then I receive an email alert specifically for savings account "22222222"
  And the email does not mention the other accounts above threshold
  And the alert identifies the specific account that crossed the threshold
```

### Negative Scenarios (Error Cases)

```gherkin
Scenario: Email delivery fails due to invalid email address
  Given I am customer with account "12345678" and threshold "$500.00"
  And my email address in the system is "invalid.email.address"
  And my account balance drops from "$634.22" to "$423.89"
  When the alert system attempts to send email notification
  Then the email delivery fails with error "Invalid recipient address"
  And the system logs delivery failure: "Email bounce - invalid address for customer 12345678"
  And the system retries email delivery after 1 minute
  And after 3 failed attempts, the delivery is marked as "Permanently failed"
  And the customer alert history shows "Email delivery failed - please update email address"

Scenario: Email service temporarily unavailable
  Given I am customer "valid@email.com" with account "12345678"
  And I have threshold "$500.00" and balance drops to "$423.89"
  And the notification email service returns error "Service temporarily unavailable"
  When the alert system attempts to send notification
  Then the system logs "Email service unavailable - retry scheduled"
  And the system retries after 1 minute, then 5 minutes, then 15 minutes
  And if all retries succeed, the customer receives the alert
  And if all retries fail, an operational alert is sent to support team

Scenario: Customer has no email address configured
  Given I am customer with account "12345678" and threshold "$500.00"
  And I have selected "Email only" for alert delivery
  And my customer profile has no email address on file
  When my account balance drops below threshold
  Then no email delivery is attempted
  And the system logs "No email address - alert delivery skipped for customer 12345678"
  And the customer alert history shows "Email delivery failed - no email address on file"
  And an operational report flags this customer for contact information update
```

### Edge Cases

```gherkin
Scenario: Balance drops exactly to threshold amount
  Given I am customer "exact@email.com" with account "12345678"
  And I have set alert threshold to "$500.00"
  And my account balance was "$534.67"
  When my balance changes to exactly "$500.00"
  Then an email alert is triggered because balance equals threshold
  And the email states "Current Balance: $500.00" and "Alert Threshold: $500.00"
  And the alert explains "Balance has reached your alert threshold"

Scenario: Multiple rapid balance changes below threshold
  Given I am customer "rapid@email.com" with account "12345678"
  And I have set alert threshold to "$500.00"
  And my balance was "$634.22" at 2:00 PM
  When my balance drops to "$423.89" at 2:15 PM
  And then drops further to "$356.12" at 2:30 PM
  And then drops to "$298.45" at 2:45 PM
  Then only one email alert is sent for the initial threshold crossing
  And subsequent balance drops below threshold do not trigger additional emails
  And the deduplication prevents alert spam for continuing low balance

Scenario: Balance crosses threshold during TCPA quiet hours
  Given I am customer "night@email.com" with account "12345678"
  And I have set alert threshold to "$500.00"
  And I have NOT opted in to 24/7 alerts (business hours only)
  When my balance drops below threshold at 11:30 PM ET
  Then no immediate email alert is sent due to TCPA time restrictions
  And the alert is queued for delivery at 8:00 AM ET the next business day
  And the queued alert includes both the original balance drop time and delivery time
```

**Commentary on Scenario Quality:**

Email alert scenarios showcase critical testing aspects for financial services:

1. **Exact Email Content** - Specifying complete email subject and body ensures consistent customer communication and enables automated testing
2. **Timing Precision** - Using specific timestamps (2:15 PM, 11:30 PM) helps verify SLA compliance and TCPA adherence
3. **Error Handling Detail** - Failed delivery scenarios include specific error messages and retry logic verification
4. **Deduplication Testing** - Prevents customer frustration from alert spam while ensuring critical first notification gets through
5. **Regulatory Compliance** - TCPA quiet hours testing ensures bank avoids $500-$1,500 per violation fines

---

## Story 3: Customer Selects Notification Channels for Alerts

### Positive Scenarios (Happy Path)

```gherkin
Scenario: Customer selects email only for alert delivery
  Given I am a logged-in customer with valid email "customer@email.com"
  And I am on the notification preferences page
  When I select "Email only" from the channel options
  And I click "Save Preferences"
  Then I see confirmation "Alerts will be sent to customer@email.com via email only"
  And my notification preference is saved as "email_only" in the customer profile
  And future alerts will be delivered via email only, not SMS

Scenario: Customer selects SMS only for alert delivery
  Given I am a logged-in customer with valid mobile number "+1-555-123-4567"
  And I am on the notification preferences page
  When I select "SMS only" from the channel options
  And I click "Save Preferences"
  Then I see confirmation "Alerts will be sent to +1-555-xxx-4567 via SMS only"
  And my notification preference is saved as "sms_only" in the customer profile
  And future alerts will be delivered via SMS only, not email

Scenario: Customer selects both email and SMS for alert delivery
  Given I am a logged-in customer with:
    | Contact Type | Value              |
    | Email        | both@email.com     |
    | Mobile Phone | +1-555-987-6543    |
  And I am on the notification preferences page
  When I select "Both email and SMS" from the channel options
  And I click "Save Preferences"
  Then I see confirmation "Alerts will be sent to both@email.com and +1-555-xxx-6543"
  And my notification preference is saved as "email_and_sms" in the customer profile
  And future alerts will be delivered via both channels simultaneously
```

### Negative Scenarios (Error Cases)

```gherkin
Scenario: Customer selects email but has invalid email address
  Given I am a logged-in customer on the notification preferences page
  And my email address in the system is "invalid-email-format"
  When I select "Email only" for alert delivery
  And I click "Save Preferences"
  Then I see error message "Please update your email address before selecting email alerts"
  And I see link "Update Email Address" that redirects to contact information page
  And the notification preference is not saved until email is corrected
  And the system validates email format: must contain "@" and valid domain

Scenario: Customer selects SMS but has no mobile phone number
  Given I am a logged-in customer on the notification preferences page
  And my customer profile has no mobile phone number on file
  When I select "SMS only" for alert delivery
  And I click "Save Preferences"
  Then I see error message "Please add a mobile phone number before selecting SMS alerts"
  And I see link "Update Phone Number" that redirects to contact information page
  And the SMS option is disabled until valid mobile number is provided

Scenario: Customer selects both channels but has invalid contact information
  Given I am a logged-in customer on the notification preferences page
  And my email address is "invalid-format" and mobile phone is missing
  When I select "Both email and SMS" for alert delivery
  And I click "Save Preferences"
  Then I see error message "Please update your email address and mobile phone number"
  And both validation errors are displayed simultaneously
  And the form provides links to update both contact types
  And no preference changes are saved until all validation passes

Scenario: System service unavailable during preference save
  Given I am a logged-in customer with valid email "test@email.com"
  And the Customer Profile Service is temporarily unavailable
  When I select "Email only" and click "Save Preferences"
  Then I see error message "Unable to save preferences. Please try again in a few moments."
  And the system logs "Profile service timeout - customer preference save failed"
  And my previous notification settings remain unchanged
  And the form retains my selection for retry when service is restored
```

### Edge Cases

```gherkin
Scenario: Customer changes from SMS to email while alerts are active
  Given I am customer with account balance "$450.00" below threshold "$500.00"
  And I currently have "SMS only" preference set
  And I have already received SMS alert for current low balance
  When I change my preference to "Email only"
  And my balance remains below threshold in the next processing cycle
  Then no additional alert is sent (deduplication prevents spam)
  And future threshold crossings will use email delivery
  And the preference change is logged with timestamp for audit trail

Scenario: Customer with international phone number selects SMS
  Given I am a logged-in customer with mobile number "+44-20-7946-0958" (UK number)
  And I am on the notification preferences page
  When I select "SMS only" for alert delivery
  And I click "Save Preferences"
  Then I see warning "International SMS delivery may have delays and additional charges"
  And I must confirm "I understand international SMS limitations" before saving
  And the preference is saved with flag "international_sms_enabled"
  And SMS delivery attempts are made with extended timeout expectations

Scenario: Customer selects preferences before setting threshold
  Given I am a new customer who has not yet configured alert threshold
  And I am on the notification preferences page
  When I select "Email only" for alert delivery
  And I click "Save Preferences"
  Then I see confirmation "Email preference saved. Complete alert setup by setting your threshold."
  And the preference is saved for future use when threshold is configured
  And I see prominent link "Set Alert Threshold" to complete alert configuration
```

**Commentary on Scenario Quality:**

Channel selection scenarios emphasize validation and user experience:

1. **Real Contact Information** - Using realistic email and phone formats helps catch validation bugs and ensures proper formatting
2. **Comprehensive Error Handling** - Missing or invalid contact info scenarios prevent customers from setting preferences they can't receive
3. **Cross-Field Validation** - "Both channels" option requires validation of multiple contact types simultaneously
4. **International Considerations** - International phone number scenarios address real-world customer diversity
5. **State Management** - Preference changes during active alert conditions test complex state transitions

---

## Story 4: System Processes Balance Updates and Detects Threshold Crossings

### Positive Scenarios (Happy Path)

```gherkin
Scenario: System detects single account crossing below threshold
  Given the alert processing job runs every 15 minutes
  And customer "12345678" has alert threshold "$500.00"
  And the previous balance check showed checking account balance "$634.22"
  When the core banking feed provides updated balance "$423.89" for account "12345678"
  And the alert processing job runs at 2:16 PM
  Then the system detects threshold crossing for account "12345678"
  And the system logs: "Threshold crossed - Account 12345678: $634.22 → $423.89 (threshold $500.00)"
  And an alert is queued for delivery to customer
  And the account is marked as "below_threshold" to prevent duplicate alerts

Scenario: System processes multiple customers in single batch cycle
  Given the alert processing job runs at 3:00 PM
  And the core banking feed contains updates for:
    | Customer ID | Account Number | Previous Balance | New Balance | Threshold |
    | 12345678    | CHK001         | $634.22         | $423.89    | $500.00   |
    | 87654321    | SAV002         | $789.45         | $234.56    | $300.00   |
    | 11111111    | CHK003         | $1,234.67       | $1,156.78  | $1,000.00 |
  When the alert processing job executes the batch
  Then threshold crossings are detected for customers "12345678" and "87654321"
  And no alert is triggered for customer "11111111" (balance still above threshold)
  And the system processes all 3 accounts within the 15-minute processing window
  And individual alerts are queued for the 2 customers with threshold crossings

Scenario: System handles account with no previous balance data
  Given customer "99999999" has alert threshold "$500.00"
  And this is the first balance update for new account "99999999"
  And the core banking feed shows balance "$423.89" for account "99999999"
  When the alert processing job runs
  Then the system establishes baseline balance "$423.89" without triggering alert
  And the account is marked as "below_threshold" for future reference
  And subsequent balance increases above threshold will reset alert eligibility
  And the system logs: "New account baseline established - Account 99999999: $423.89"
```

### Negative Scenarios (Error Cases)

```gherkin
Scenario: Core banking feed is delayed or unavailable
  Given the alert processing job is scheduled to run at 3:00 PM
  And the core banking feed has not provided updates since 2:30 PM
  When the alert processing job attempts to run at 3:00 PM
  Then the system logs warning "Core banking feed delayed - no new balance data available"
  And the processing job completes without triggering alerts
  And the system schedules retry for next regular processing cycle (3:15 PM)
  And operational monitoring is notified of feed delay
  And customers are not affected by processing delay (no false alerts)

Scenario: Customer Profile Service unavailable during threshold lookup
  Given the alert processing job detects balance changes requiring threshold comparison
  And the Customer Profile Service is temporarily unavailable
  When the job attempts to retrieve customer alert thresholds
  Then the system logs error "Unable to retrieve thresholds - Profile Service unavailable"
  And affected customers are added to retry queue for next processing cycle
  And no alerts are sent without confirmed threshold data
  And operational team receives alert about service availability issue

Scenario: Invalid balance data in core banking feed
  Given the core banking feed contains the following data:
    | Account Number | Balance Data | Issue                    |
    | 12345678       | null         | Missing balance          |
    | 87654321       | -999999.99   | Unrealistic negative    |
    | 11111111       | "INVALID"    | Non-numeric data        |
  When the alert processing job runs
  Then the system logs validation errors for each problematic record
  And accounts with invalid data are skipped (no alert processing)
  And operational report is generated highlighting data quality issues
  And the system continues processing valid records in the same batch

Scenario: Alert system overwhelmed by high volume during market stress
  Given a market crash event causes mass account balance drops
  And 50,000 accounts cross below thresholds simultaneously
  And the notification service rate limit is 100 alerts per minute
  When the alert processing job detects the threshold crossings
  Then alerts are queued in priority order (oldest threshold crossing first)
  And the system logs "High volume event - 50,000 alerts queued for delivery"
  And estimated delivery completion time is calculated and logged
  And customers receive alerts in fair first-in-first-out order
  And no alerts are lost due to volume (queue persists across processing cycles)
```

### Edge Cases

```gherkin
Scenario: Balance changes multiple times within single processing cycle
  Given customer "12345678" has threshold "$500.00"
  And the previous processing cycle showed balance "$634.22"
  And within the 15-minute cycle, the balance changes as follows:
    | Time    | Balance  | Transaction          |
    | 2:02 PM | $423.89  | Automatic bill pay   |
    | 2:08 PM | $623.89  | Payroll deposit      |
    | 2:12 PM | $473.89  | ATM withdrawal       |
  When the alert processing job runs at 2:15 PM
  Then the system uses the final balance "$473.89" for threshold comparison
  And an alert is triggered because final balance is below threshold "$500.00"
  And the system logs all intermediate balance changes for audit trail
  And only one alert is sent despite multiple threshold crossings within the cycle

Scenario: Customer threshold equals exact account balance
  Given customer "12345678" has threshold "$500.00"
  And the account balance changes from "$634.22" to exactly "$500.00"
  When the alert processing job runs
  Then an alert is triggered because balance equals threshold (not just below)
  And the system logs: "Threshold reached - Account 12345678: $500.00 equals threshold $500.00"
  And the alert message states "balance has reached your alert threshold"

Scenario: Joint account with multiple alert configurations
  Given joint account "88888888" has two account holders:
    | Account Holder | Customer ID | Alert Threshold |
    | Primary        | 12345678    | $500.00        |
    | Secondary      | 87654321    | $750.00        |
  And the account balance drops from "$890.45" to "$623.89"
  When the alert processing job runs
  Then an alert is triggered for secondary holder (balance below $750.00 threshold)
  And no alert is triggered for primary holder (balance above $500.00 threshold)
  And both account holders are processed independently based on their preferences
  And the system handles joint accounts with different threshold configurations
```

**Commentary on Scenario Quality:**

System processing scenarios focus on reliability and data integrity:

1. **Realistic Volume Testing** - Market crash scenario with 50,000 alerts tests system behavior under stress
2. **Data Quality Validation** - Invalid balance data scenarios ensure robust error handling
3. **Timing Precision** - Multiple balance changes within processing cycles test real-world timing complexities
4. **Service Integration** - External service failures (Profile Service, Core Banking) verify graceful degradation
5. **Audit Trail Completeness** - All scenarios include specific logging requirements for operational troubleshooting

---

## Story 5: Customer Views Alert History and Delivery Status

### Positive Scenarios (Happy Path)

```gherkin
Scenario: Customer views recent alert history with successful deliveries
  Given I am logged-in customer "12345678" 
  And I have received the following alerts in the past 30 days:
    | Date       | Time     | Account    | Balance | Channel | Status    |
    | 2024-03-15 | 2:16 PM  | CHK xxx5678| $423.89 | Email   | Delivered |
    | 2024-03-10 | 4:45 AM  | SAV xxx4321| $234.56 | SMS     | Delivered |
    | 2024-03-05 | 11:30 AM | CHK xxx5678| $456.78 | Both    | Delivered |
  When I navigate to "Alert History" from my account settings
  Then I see a table displaying all 3 alerts in reverse chronological order
  And each row shows: date, time, account (last 4 digits), balance, delivery channel, and status
  And the most recent alert (March 15) appears first in the list
  And I can see specific balance amounts and delivery confirmation details

Scenario: Customer filters alert history by date range
  Given I am logged-in customer with 45 alerts in the past 90 days
  And I am viewing the complete alert history page
  When I set date filter to "March 1, 2024" through "March 15, 2024"
  And I click "Apply Filter"
  Then the history displays only alerts from the specified 15-day period
  And the page shows "Showing 12 alerts from March 1-15, 2024"
  And I can clear the filter to return to full 90-day history
  And the filter settings persist if I navigate away and return to the page

Scenario: Customer views alert history with pagination for large history
  Given I am logged-in customer with 150 alerts in the past 90 days
  And the alert history page displays 50 alerts per page
  When I navigate to "Alert History"
  Then I see the first 50 alerts (most recent) on page 1
  And I see pagination controls showing "Page 1 of 3"
  When I click "Next Page" 
  Then I see alerts 51-100 on page 2
  And the URL updates to include page parameter for bookmarking
  And I can jump directly to page 3 to see the oldest alerts (101-150)
```

### Negative Scenarios (Error Cases)

```gherkin
Scenario: Customer views history including failed alert deliveries
  Given I am logged-in customer "12345678"
  And I have the following alert delivery attempts:
    | Date       | Account    | Balance | Channel | Status               | Error Details            |
    | 2024-03-15 | CHK xxx5678| $423.89 | Email   | Failed              | Invalid email address    |
    | 2024-03-15 | CHK xxx5678| $423.89 | Email   | Retry Failed        | Service unavailable      |
    | 2024-03-15 | CHK xxx5678| $423.89 | Email   | Delivered (3rd try) | Delivered after 2 retries|
  When I view my alert history
  Then I see all 3 delivery attempts for the same balance alert
  And failed attempts show red status indicator with error explanation
  And the successful delivery shows green status with retry notation
  And I can click on failed entries to see detailed error information
  And I see recommendation "Update email address" for invalid address errors

Scenario: Customer has no alert history to display
  Given I am logged-in customer "99999999"
  And I have recently configured alerts but no threshold crossings have occurred
  When I navigate to "Alert History"
  Then I see message "No alerts have been sent yet"
  And I see explanation "You'll see alert delivery history here once your account balance drops below your threshold"
  And I see link "Review Alert Settings" to verify configuration
  And the page provides helpful context rather than showing empty table

Scenario: Alert history service unavailable
  Given I am logged-in customer with existing alert history
  And the Alert History Service is temporarily unavailable
  When I navigate to "Alert History"
  Then I see error message "Alert history temporarily unavailable. Please try again in a few moments."
  And I see "Refresh Page" button to retry the request
  And the page does not show partial or cached data (which could be misleading)
  And the system logs service availability issue for operational team review
```

### Edge Cases

```gherkin
Scenario: Customer views history spanning account closure
  Given I am logged-in customer who closed checking account "CHK xxx5678" on March 10, 2024
  And I have alert history including:
    | Date       | Account     | Balance | Status    | Notes              |
    | 2024-03-08 | CHK xxx5678 | $234.56 | Delivered | Account active     |
    | 2024-03-12 | SAV xxx4321 | $456.78 | Delivered | Different account  |
  When I view my alert history
  Then I see both alerts including the closed account alert
  And the closed account is clearly marked "Account Closed 3/10/2024"
  And I can still view historical alert details for audit purposes
  And current account alerts continue to display normally

Scenario: Customer views history during daylight saving time transition
  Given I am logged-in customer in Eastern Time zone
  And I have alerts from before and after daylight saving time change:
    | Date       | Time Display | Actual Time     | Notes                    |
    | 2024-03-09 | 1:30 AM EDT  | 1:30 AM EST     | Before spring forward    |
    | 2024-03-11 | 1:30 AM EDT  | 1:30 AM EDT     | After spring forward     |
  When I view my alert history
  Then all times are displayed consistently in Eastern Time
  And the system handles time zone transitions correctly in display
  And timestamps are stored in UTC to prevent ambiguity
  And the display clarifies "EST" vs "EDT" to avoid customer confusion

Scenario: Customer views alerts with updated contact information
  Given I am logged-in customer who changed email from "old@email.com" to "new@email.com" on March 10
  And I have alert history spanning the email change:
    | Date       | Alert Channel | Delivery Address | Status    |
    | 2024-03-08 | Email         | old@email.com    | Delivered |
    | 2024-03-12 | Email         | new@email.com    | Delivered |
  When I view my alert history
  Then I see both alerts with the email addresses used at delivery time
  And historical alerts show "old@email.com" accurately
  And recent alerts show "new@email.com" correctly
  And the history provides audit trail of contact information changes
```

**Commentary on Scenario Quality:**

Alert history scenarios emphasize transparency and auditability:

1. **Complete Delivery Tracking** - Including failed attempts, retries, and error details gives customers confidence in system reliability
2. **Data Retention Across Changes** - Account closures and contact updates scenarios ensure historical accuracy
3. **User Experience Focus** - Empty state messaging and filtering help customers understand and navigate their data
4. **Audit Trail Integrity** - Time zone handling and historical accuracy support regulatory compliance requirements
5. **Error Transparency** - Showing failed deliveries with specific error details enables customer self-service resolution

---

## Summary: Why Specific Data Matters in Financial Services Testing

### The Importance of Realistic Data Examples

#### 1. Regulatory Compliance Testing
Financial services operate under strict regulations requiring precise audit trails and specific data handling:

- **FINRA Rule 4512** requires exact timestamps, account numbers, and customer communications
- **TCPA violations** can cost $500-$1,500 per incident, making time precision critical
- **Bank Secrecy Act** mandates 7-year record retention with specific data formats

**Example:** Using "11:30 PM ET" instead of "late at night" enables testing exact TCPA quiet hour compliance.

#### 2. Currency Precision and Rounding
Financial calculations require exact precision to prevent rounding errors that could compound over time:

- **Dollar amounts with cents** ($423.89, not "about $400") catch precision bugs
- **Boundary values** ($0.01, $5,000.00) test edge cases where errors commonly occur
- **Large numbers** ($10,000.00) test validation logic thoroughly

**Example:** Balance of exactly "$500.00" vs threshold "$500.00" tests whether system uses >= or > comparison logic.

#### 3. Real-World Data Formats
Production systems must handle actual customer data formats:

- **Account numbers** (8-digit format like "12345678") match bank standards
- **Phone numbers** (+1-555-123-4567) test international and domestic formats
- **Email addresses** with realistic domains test validation logic

**Example:** International phone number "+44-20-7946-0958" tests SMS delivery edge cases for global customers.

#### 4. Timing and Sequence Accuracy
Financial systems operate on precise timing for SLA compliance and risk management:

- **Specific timestamps** (2:15 PM, 2:16 PM) enable SLA testing (15-minute delivery requirement)
- **Processing cycles** (15-minute batches) test real operational constraints
- **Retry intervals** (1, 3, 9 minutes exponential backoff) verify resilience patterns

**Example:** Balance changes at "2:02 PM, 2:08 PM, 2:12 PM" within one processing cycle tests how system handles rapid transactions.

#### 5. Error Message Precision
Customer-facing error messages must be exact for consistent user experience:

- **Complete error text** enables automated testing validation
- **Specific validation rules** ("between $0.01 and $5,000.00") prevent confusion
- **Action-oriented messages** ("Please update your email address") guide customer resolution

**Example:** Exact error message "Threshold must be between $0.01 and $5,000.00" can be tested automatically vs vague "Invalid amount."

### Quality Indicators in These Scenarios

#### Comprehensive Test Coverage
Each story includes:
- **2-3 positive scenarios** covering normal operations
- **2-3 negative scenarios** testing error conditions  
- **2-3 edge cases** covering boundary conditions and unusual but valid scenarios

#### Realistic Data Progression
Scenarios use data that progresses logically:
- **Account balances change realistically** ($634.22 → $423.89 via specific transaction)
- **Timestamps follow sequence** (2:15 PM balance change, 2:16 PM processing)
- **Customer IDs remain consistent** across related scenarios

#### Operational Awareness
Scenarios include operational concerns:
- **System monitoring** (operational alerts for high failure rates)
- **Performance constraints** (rate limits, processing windows)
- **Audit requirements** (logging specifics for compliance)

These Gherkin scenarios demonstrate production-ready test design for financial services, where precision, compliance, and reliability are paramount. The specific data examples enable thorough testing while ensuring the system meets both customer needs and regulatory requirements.