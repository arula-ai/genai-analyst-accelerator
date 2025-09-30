# GitHub Issue Template

## Title Format

```
[US-###] [Brief story description in present tense]
```

**Examples:**
- `[US-001] Customer can set account balance alert threshold`
- `[US-002] Customer receives email when balance drops below threshold`
- `[US-003] System logs all alert activity for compliance audit`

---

## Issue Body Template

Copy this template when creating GitHub Issues:

```markdown
## User Story

**As a** [role]  
**I want** [capability]  
**So that** [benefit]

## Acceptance Criteria

### Positive Scenarios (Happy Path)

```gherkin
Scenario: [Scenario name]
  Given [precondition]
  And [additional precondition if needed]
  When [action]
  Then [expected outcome]
  And [additional expected outcome if needed]
```

### Negative Scenarios (Error Cases)

```gherkin
Scenario: [Error scenario name]
  Given [precondition]
  When [invalid action or error condition]
  Then [expected error handling]
  And [additional expected behavior]
```

### Edge Cases

```gherkin
Scenario: [Edge case name]
  Given [boundary condition]
  When [action]
  Then [expected outcome]
```

## Definition of Ready

- [ ] Dependencies identified and documented
- [ ] Acceptance criteria defined and testable
- [ ] Story sized and estimable by team
- [ ] No blocking dependencies on other teams
- [ ] SME review completed (if applicable)
- [ ] Security requirements identified
- [ ] Compliance requirements identified
- [ ] NFRs (Non-Functional Requirements) documented

## Non-Functional Requirements

- **Performance:** [Response time, throughput, SLA requirements]
- **Security:** [Authentication, authorization, encryption, PII handling]
- **Compliance:** [Regulatory requirements, audit trail, data retention]
- **Accessibility:** [WCAG standards, keyboard navigation, screen reader support]
- **Scalability:** [Expected volume, concurrent users, peak load]

## Dependencies

### Technical Dependencies
- [System, API, or service this story depends on]
- [Database, infrastructure, or platform requirement]

### External Dependencies
- [Other team dependencies]
- [Third-party service dependencies]
- [Approval processes (DBA, security, compliance)]

## Risks & Open Questions

### Risks
- **[HIGH/MEDIUM/LOW]:** [Risk description and potential impact]

### Open Questions
- [ ] [Question that needs answer before implementation]
- [ ] [Uncertainty that needs clarification]

## Source Documentation

- **Meeting:** [Date, meeting type, attendees]
- **Policy/Requirement:** [Document name, version, section]
- **Parent Epic:** [Link to epic or epic ID]
- **Related Stories:** [Links to related user stories]
- **Requirements:** [Requirement IDs this story implements]

## Labels

`feature` `needs-review` `sprint-backlog` `path-a` `[priority-high/medium/low]` `[component-name]`

## Assignees

[To be assigned in sprint planning]

## Projects

[Training Project - Sprint 1]

## Estimate

[Story points or t-shirt size - to be determined in sprint planning]

---

```

---

## Complete Example

### Title

```
[US-001] Customer can set custom balance alert threshold
```

### Issue Body

```markdown
## User Story

**As a** retail banking customer  
**I want** to set a custom dollar threshold for low balance alerts  
**So that** I can avoid $35 overdraft fees and proactively manage my cash flow

## Acceptance Criteria

### Positive Scenarios (Happy Path)

```gherkin
Scenario: Customer sets valid alert threshold
  Given I am a logged-in customer with an active checking account
  And I am on the alert settings page
  When I enter a threshold value of "$500.00"
  And I click "Save Threshold"
  Then the system saves my threshold preference
  And I see a confirmation message "Alert threshold set to $500.00"
  And the threshold is immediately active for all my accounts

Scenario: Customer modifies existing threshold
  Given I am a logged-in customer
  And I have previously set a threshold of "$300.00"
  When I change the threshold to "$750.00"
  And I click "Save Threshold"
  Then the system updates my threshold to "$750.00"
  And I see confirmation "Alert threshold updated to $750.00"
  And the new threshold takes effect immediately
```

### Negative Scenarios (Error Cases)

```gherkin
Scenario: Customer enters threshold below minimum
  Given I am on the alert settings page
  When I enter a threshold value of "-$50.00"
  And I click "Save Threshold"
  Then I see an error message "Threshold must be between $0 and $5,000"
  And the threshold is not saved
  And the form field is highlighted in red

Scenario: Customer enters threshold above maximum
  Given I am on the alert settings page
  When I enter a threshold value of "$10,000.00"
  And I click "Save Threshold"
  Then I see an error message "Threshold must be between $0 and $5,000"
  And the previous threshold value remains unchanged

Scenario: Customer enters non-numeric value
  Given I am on the alert settings page
  When I enter "five hundred" in the threshold field
  And I click "Save Threshold"
  Then I see an error message "Please enter a valid dollar amount"
  And the field is highlighted for correction

Scenario: Save fails due to service unavailable
  Given I am on the alert settings page
  And the Customer Profile Service is unavailable
  When I enter a threshold of "$500.00"
  And I click "Save Threshold"
  Then I see an error message "Unable to save settings. Please try again in a few moments."
  And the system logs the error for support team review
  And my previous threshold (if any) remains active
```

### Edge Cases

```gherkin
Scenario: Customer sets threshold to exactly zero
  Given I am on the alert settings page
  When I enter a threshold value of "$0.00"
  And I click "Save Threshold"
  Then the system saves the threshold as "$0"
  And I see confirmation "Alert threshold set to $0.00"
  And I will receive an alert whenever my balance reaches or falls below zero

Scenario: Customer sets threshold to maximum allowed
  Given I am on the alert settings page
  When I enter a threshold value of "$5,000.00"
  And I click "Save Threshold"
  Then the system saves the threshold as "$5,000"
  And I see confirmation "Alert threshold set to $5,000.00"

Scenario: Customer with multiple accounts sets threshold
  Given I am a customer with 2 checking accounts and 1 savings account
  When I set a threshold of "$500.00"
  Then the threshold applies globally to all three accounts
  And I will receive an alert if ANY account drops below $500
  And the confirmation message states "Threshold applies to all your accounts"
```

## Definition of Ready

- [x] Dependencies identified: Customer Profile Service API v2.1, Account Service
- [x] Acceptance criteria defined and testable: All scenarios use specific values and expected behaviors
- [x] Story sized: 3 story points (small)
- [x] No blocking dependencies on other teams
- [x] SME review completed: Reviewed with UX (Kevin), Dev Lead (Marcus), Compliance (Sarah)
- [x] Security requirements identified: Must be authenticated, data encrypted at rest
- [x] Compliance requirements identified: Threshold changes logged for audit (FINRA)
- [x] NFRs documented: See below

## Non-Functional Requirements

- **Performance:** 
  - Settings page loads within 2 seconds
  - Threshold save completes within 1 second
  - Changes take effect immediately (no batch delay)
  
- **Security:** 
  - Customer must be authenticated to access settings
  - Threshold data encrypted at rest in database
  - Audit log entry created for each threshold change (who, what, when)
  - Session timeout after 15 minutes of inactivity
  
- **Compliance:** 
  - All threshold changes logged with timestamp, old value, new value, customer ID
  - Audit log retained for 7 years per Bank Secrecy Act
  - Meets FINRA Rule 4512 customer notification audit requirements
  
- **Accessibility:** 
  - Form meets WCAG 2.1 Level AA standards
  - Keyboard navigation fully supported (no mouse required)
  - Screen reader compatible (proper ARIA labels)
  - Error messages announced to assistive technology
  - Color contrast ratio meets 4.5:1 minimum
  
- **Scalability:** 
  - Support 100,000 customers setting thresholds in first month
  - Handle 10 threshold changes per second during peak usage

## Dependencies

### Technical Dependencies
- **Customer Profile Service API v2.1** - For storing threshold preference data
- **Account Service API v1.8** - For retrieving customer account list
- **Authentication Service** - For verifying customer is logged in
- **Audit Logging Service** - For compliance audit trail

### External Dependencies
- **Database Team** - Schema update to customer_preferences table (approval required, 5-day turnaround)
- **Compliance Team** - Final review of audit logging implementation
- **UX Team** - Finalize wireframes for threshold configuration screen
- **Mobile App Team** - If threshold setting will also be available on mobile app

## Risks & Open Questions

### Risks
- **MEDIUM:** Customer Profile Service uses batch updates (4-hour sync delay), conflicts with "immediate" requirement. May need real-time API instead.
- **LOW:** Multi-account customers may expect per-account thresholds, but MVP only supports one global threshold. May generate support tickets.
- **LOW:** Internationalization not considered in MVP (assumes USD only). May need enhancement for international customers.

### Open Questions
- [ ] **Resolved:** What is the min/max threshold range? **Answer:** $0 to $5,000 per product team
- [ ] **Resolved:** Does one threshold apply to all accounts? **Answer:** Yes, global threshold for MVP
- [ ] **Open:** Should we display customer's current balance on this screen for context? (UX to decide)
- [ ] **Open:** What happens if customer has no accounts eligible for alerts? (Business rule needed)

## Source Documentation

- **Meeting:** Product Discovery Session, October 15, 2024
  - Attendees: Jane Diaz (PM), Marcus Chen (Dev Lead), Sarah Williams (Compliance), Kevin Park (UX)
- **Policy:** Not applicable (customer-facing feature, not policy-driven)
- **Parent Epic:** #EPIC-042 - Automated Customer Alerts
- **Related Stories:** 
  - #US-002: Customer receives email alert when balance drops below threshold
  - #US-003: Customer selects notification channels (email/SMS)
  - #US-004: Customer opts in/out of 24/7 alerts (TCPA compliance)
- **Requirements:** REQ-104 from Q4 2024 Product Roadmap

## Labels

`feature` `needs-review` `sprint-backlog` `path-a` `priority-high` `component-alerts` `compliance-required`

## Assignees

[To be assigned in sprint planning]

## Projects

Training Project - Sprint 1

## Estimate

3 story points (to be confirmed in sprint planning)

---

**Created by:** Alice Anderson, Business Analyst  
**Created on:** October 16, 2024  
**Generated with:** GitHub Copilot  
**Reviewed by:** Marcus Chen (Technical Feasibility), Sarah Williams (Compliance)
```

---

## Tips for Creating GitHub Issues

### 1. Use Specific Data Examples in Scenarios

❌ **Vague:**
```gherkin
When I enter a valid threshold
Then the system saves it
```

✅ **Specific:**
```gherkin
When I enter a threshold value of "$500.00"
Then the system saves the threshold as "$500"
And I see confirmation "Alert threshold set to $500.00"
```

### 2. Include Error Messages Verbatim

Don't say "error message displays" - specify the exact message:

```gherkin
Then I see an error message "Threshold must be between $0 and $5,000"
```

This helps:
- Developers know what to display
- QA knows what to test for
- UX can ensure message quality

### 3. Cover All Three Scenario Types

Every story should have:
- **Positive (Happy Path):** Things work as expected
- **Negative (Errors):** Invalid input, service failures, validation errors
- **Edge Cases:** Boundary conditions, unusual but valid scenarios

### 4. Make Definition of Ready a Real Checklist

Don't just copy the template. Actually verify:
- Are dependencies really identified?
- Have you actually talked to SMEs?
- Is this really estimable, or are there too many unknowns?

### 5. Document Decisions and Rationale

In "Risks & Open Questions," document:
- What was decided
- Why that decision was made
- What alternatives were considered

This helps future you (and your team) understand the context.

### 6. Link Everything

Create traceability:
- Link to parent epic
- Link to related stories
- Link to source documentation
- Link to requirements

This enables impact analysis when things change.

### 7. Use Labels Consistently

Establish label conventions:
- Priority: `priority-high`, `priority-medium`, `priority-low`
- Component: `component-alerts`, `component-auth`, `component-api`
- Status: `needs-review`, `ready-for-dev`, `blocked`
- Type: `feature`, `bug`, `tech-debt`, `spike`

### 8. Keep It Updated

The issue is a living document:
- Mark open questions as resolved when answered
- Update risks as they're mitigated
- Add learnings discovered during implementation
- Link to actual test cases once QA writes them

### 9. Use Templates Consistently

Consistency helps:
- Developers know where to find information
- QA knows what to test
- Product knows what was committed
- Auditors can trace requirements

### 10. Review Before Creating

Before clicking "Create Issue," verify:
- [ ] All sections are filled out (no "TBD" placeholders)
- [ ] Scenarios are specific with actual data
- [ ] NFRs are documented
- [ ] Traceability links are present
- [ ] No PII or sensitive data included
- [ ] Compliance requirements identified

---

## Converting to Other Systems

This template is designed for GitHub Issues but can be adapted for:

- **Jira:** Similar format, use Jira markdown syntax
- **Azure DevOps:** Adapt to Work Item fields
- **Rally:** Map to User Story fields
- **Confluence:** Use as documentation template

The key is maintaining the same level of detail and traceability regardless of the tool.