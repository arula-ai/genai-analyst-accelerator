# User Story Template

## Story Format

As a [type of user]  
I want [capability or feature]  
So that [business value or benefit]

## Acceptance Criteria

**AC1:** [Criterion in testable format]  
**AC2:** [Criterion in testable format]  
**AC3:** [Criterion in testable format]

## Definition of Ready

- [ ] Dependencies identified
- [ ] Acceptance criteria defined
- [ ] Story sized and estimable
- [ ] No known blockers
- [ ] NFRs documented
- [ ] Testable

## Additional Sections

### Assumptions
- [List key assumptions]

### Dependencies
- [Technical dependencies]
- [External system dependencies]

### Risks
- [Identified risks to delivery]

### NFRs (Non-Functional Requirements)
- **Performance:** [Response times, SLAs]
- **Security:** [Authentication, authorization requirements]
- **Compliance:** [Regulatory requirements]
- **Accessibility:** [WCAG standards, assistive technology]

### Source Traceability
- **Meeting:** [Date, attendees]
- **Policy:** [Document name, version, section]
- **Epic:** [Parent epic reference]
- **Related Stories:** [Links to related user stories]

---

## Example Story

### Story: Customer Sets Account Balance Alert Threshold

**As a** retail banking customer  
**I want** to set a custom dollar threshold for low balance alerts  
**So that** I can avoid overdraft fees and manage my cash flow proactively

### Acceptance Criteria

**AC1:** Customer can access alert threshold configuration from account settings  
**AC2:** Customer can enter threshold amount between $0 and $5,000  
**AC3:** System validates threshold on save (numeric, within range, positive value)  
**AC4:** Threshold is immediately persisted to customer profile  
**AC5:** Confirmation message displays showing threshold value and affected accounts

### Definition of Ready

- [x] Dependencies identified (Customer Profile Service, Account Service)
- [x] Acceptance criteria defined and testable
- [x] Story sized (3 story points - small)
- [x] No known blockers
- [x] NFRs documented (see below)
- [x] Testable (all AC are verifiable)

### Assumptions
- Customer must be authenticated to set threshold
- One threshold applies to all customer accounts (not per-account)
- Threshold changes take effect immediately (no batch processing delay)
- Customer can modify threshold as many times as they want

### Dependencies
- **Technical:** Customer Profile Service API v2.1 for storing preferences
- **Technical:** Account Service API for validating account ownership
- **External:** Database schema update requires DBA approval (5-day lead time)
- **Team:** Mobile app team if threshold setting will be available on mobile

### Risks
- **MEDIUM:** Legacy customer profile system uses batch updates (4-hour delay), conflicts with "immediate" requirement
- **LOW:** Multi-account customers may expect per-account thresholds, but MVP only supports global threshold
- **LOW:** Internationalization not in scope (assumes USD only)

### NFRs (Non-Functional Requirements)
- **Performance:** Settings page loads within 2 seconds; threshold save completes within 1 second
- **Security:** Must be authenticated; threshold data encrypted at rest; audit log entry created
- **Compliance:** Threshold changes logged for audit trail (FINRA Rule 4512)
- **Accessibility:** Form meets WCAG 2.1 Level AA; keyboard navigation; screen reader compatible

### Source Traceability
- **Meeting:** Product Discovery Session, October 15, 2024 (Jane Diaz, Marcus Chen, Sarah Williams)
- **Policy:** Not applicable (customer-driven feature)
- **Epic:** EPIC-042 - Automated Customer Alerts
- **Related Stories:** 
  - US-002: Customer receives alert when balance drops below threshold
  - US-003: Customer selects notification channels (email/SMS)

---

## Usage Tips

### When Writing User Stories

1. **Focus on the user's need, not the solution**
   - ❌ "System uses REST API to update database"
   - ✅ "Customer can update their alert preferences"

2. **Make the benefit specific and measurable**
   - ❌ "So that I have a better experience"
   - ✅ "So that I can avoid $35 overdraft fees"

3. **Write testable acceptance criteria**
   - ❌ "System should be fast"
   - ✅ "System responds within 2 seconds"

4. **Include negative scenarios**
   - Don't just test the happy path
   - What happens when input is invalid?
   - What if external services are unavailable?

5. **Document all assumptions**
   - Assumptions become risks when wrong
   - Better to state them explicitly

### INVEST Checklist

Before committing your story, verify it meets INVEST criteria:

- **Independent:** Can be developed without depending on other stories
- **Negotiable:** Describes WHAT, not HOW (leaves implementation to dev team)
- **Valuable:** Clear benefit to user or business
- **Estimable:** Team has enough information to size the effort
- **Small:** Completable within one sprint (1-5 days)
- **Testable:** Acceptance criteria are specific and verifiable

See [invest-checklist.md](invest-checklist.md) for detailed criteria.