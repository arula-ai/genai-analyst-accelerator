# Epic Template

## Epic Title

[Concise, business-focused title that describes the high-level capability]

## Description

[2-3 sentences describing the high-level capability this epic delivers]

This should answer: What business problem are we solving? What customer need are we addressing?

## Business Value

### Problem Statement

**What problem does this solve?**

[Describe the current pain point or gap. Use specific examples where possible.]

### Expected Outcome

**What business value will this deliver?**

[Describe measurable business outcomes or user benefits]

### Success Metrics

- [Measurable outcome 1 - include target numbers]
- [Measurable outcome 2 - include how we'll measure success]
- [Measurable outcome 3 - include timeframe for measurement]

## Scope

### In Scope

What we ARE building in this epic:

- [Capability 1]
- [Capability 2]
- [Capability 3]

### Out of Scope

What we are NOT building (but might in future):

- [Capability that's excluded]
- [Feature deferred to later phase]
- [Edge case not covered in v1]

## Key Assumptions

- [Assumption 1 - technical, business, or user assumption]
- [Assumption 2 - document what we're assuming to be true]
- [Assumption 3 - these become risks if assumptions are wrong]

## High-Level Stories

Story themes that will emerge from this epic:

1. [Story theme 1 - brief description]
2. [Story theme 2 - brief description]
3. [Story theme 3 - brief description]
4. [Story theme 4 - brief description]

## Dependencies

### Technical Dependencies

- [System, service, or API this epic depends on]
- [Technology or infrastructure requirement]

### External Dependencies

- [Other team dependencies]
- [Third-party service dependencies]

### Regulatory/Compliance Dependencies

- [Compliance requirements that must be met]
- [Regulatory approvals or reviews needed]

## Risks

- **[HIGH/MEDIUM/LOW]:** [Risk description and potential impact]
- **[HIGH/MEDIUM/LOW]:** [Risk description and potential impact]

## Timeline Estimate

**Estimated effort:** [X-Y weeks with Z developers]

This is a rough estimate. Will be refined once stories are created and sized.

---

## Example Epic

### Epic Title: Customer Balance Alert Management

### Description

Enable customers to configure and receive automated alerts when their account balance crosses defined thresholds. This self-service capability helps customers avoid overdraft fees and manage their cash flow proactively, addressing a top customer request and competitive gap.

### Business Value

#### Problem Statement

**What problem does this solve?**

Currently, 30% of our customers incur overdraft fees that could be prevented with early warning. Customers discover low balances only when checking their accounts manually or when a transaction is declined. This leads to:
- Unexpected overdraft fees ($35 per occurrence)
- Customer frustration and complaints
- Attrition to competitors who offer balance alerts as standard feature
- Decreased customer trust

#### Expected Outcome

**What business value will this deliver?**

- **Customer Retention:** Reduce attrition by 15% among customers who have incurred 3+ overdraft fees
- **Customer Satisfaction:** Address #1 requested feature from customer advisory board
- **Competitive Parity:** Match standard offering from top 3 competitors
- **Reduced Support Costs:** Fewer calls about overdraft fees and declined transactions
- **Overdraft Prevention:** 25-30% reduction in overdraft incidents based on pilot data

#### Success Metrics

- **Customer Adoption:** 40% of active customers enable balance alerts within 6 months of launch
- **Overdraft Reduction:** 25% decrease in overdraft fee incidents among alert users within 3 months
- **Customer Satisfaction:** NPS increase of 10+ points among alert users
- **Competitive Position:** Feature parity with top 3 competitors by Q1 2025

### Scope

#### In Scope

What we ARE building in this epic:

- Customer configuration of balance threshold (single global threshold for all accounts)
- Alert delivery via email and SMS (customer selects one or both channels)
- Real-time alert triggering when balance drops below threshold
- Compliance with TCPA regulations (time-of-day restrictions, opt-in/out)
- Audit trail for all alerts sent (FINRA compliance)
- Support for individual checking and savings accounts
- Customer management of alert preferences (enable, disable, modify)

#### Out of Scope

What we are NOT building in this epic (deferred to future phases):

- Push notifications (Phase 2 - requires mobile app updates)
- Per-account threshold customization (Phase 2 - MVP uses one threshold for all accounts)
- Joint account handling (Phase 2 - MVP handles only individual accounts)
- Money market and CD accounts (low priority - customers don't transact frequently)
- Predictive alerts (e.g., "You'll run low in 3 days") - future enhancement
- Real-time core banking integration (Phase 2 - MVP uses 15-minute batch updates)
- Alert analytics dashboard (Phase 3)

### Key Assumptions

- **Technical Assumption:** Integration with existing notification service (SMS/email platform) is feasible within rate limits (100 calls/minute)
- **Technical Assumption:** 15-minute delay from core banking batch updates is acceptable for "real-time" alerts
- **Business Assumption:** One global threshold per customer is sufficient for MVP (not per-account thresholds)
- **User Assumption:** Customers will opt-in to alerts and provide valid contact information
- **User Assumption:** Email and SMS are sufficient channels for MVP (push notifications can wait)
- **Compliance Assumption:** Current notification platform supports TCPA time restrictions
- **Data Assumption:** Customer profile database can store preference data without major schema changes

### High-Level Stories

Story themes that will emerge from this epic:

1. **Threshold Configuration** - Customer sets and modifies balance alert threshold
2. **Channel Selection** - Customer chooses email and/or SMS for alert delivery
3. **Alert Triggering** - System detects low balance and triggers alert within SLA
4. **Alert Delivery** - System sends alert via selected channels with retry logic
5. **Preference Management** - Customer enables, disables, and views alert settings
6. **Time Window Configuration** - Customer opts in/out of 24/7 alerts (TCPA compliance)
7. **Alert History** - Customer views history of alerts received
8. **Audit Trail** - System logs all alert activity for compliance review

### Dependencies

#### Technical Dependencies

- **Customer Profile Service API v2.1** - For storing alert preferences (threshold, channels, time window)
- **Notification Service** - SMS and email delivery (100 calls/minute rate limit constraint)
- **Core Banking System** - Account balance data (15-minute batch update cycle)
- **Account Service API** - For retrieving customer account list and balances
- **Audit Logging Service** - For FINRA-compliant audit trail

#### External Dependencies

- **Database Team** - Schema update to Customer Profile DB (5-day approval process)
- **Compliance Team** - Review and sign-off on TCPA and FINRA implementation
- **Operations Team** - SLA definition for alert delivery timing
- **Marketing Team** - Customer communication plan for feature launch
- **Mobile App Team** - If threshold configuration will be available on mobile (24-hour lead time for changes)

#### Regulatory/Compliance Dependencies

- **TCPA Compliance** - Telephone Consumer Protection Act (time restrictions, opt-in)
- **FINRA Rule 4512** - Customer notification audit requirements
- **Bank Secrecy Act** - Customer communication record-keeping (7-year retention)

### Risks

- **HIGH:** Core banking batch delay (15 minutes) may not meet customer expectation of "real-time" - could impact adoption
- **HIGH:** Notification service rate limit (100/min) may be insufficient during high-volume periods (market crash, month-end) - could cause alert delays
- **MEDIUM:** Legacy customer profile system uses batch updates (4-hour delay), conflicts with immediate preference changes
- **MEDIUM:** Multi-account and joint account customers may be dissatisfied with MVP limitation (one global threshold)
- **MEDIUM:** Compliance review timeline (typically 2-3 weeks) could delay release
- **LOW:** SMS delivery costs may exceed budget if adoption is higher than projected
- **LOW:** Customer contact information (email, phone) may be outdated - alert delivery failures

### Timeline Estimate

**Estimated effort:** 8-12 weeks with 1 full-stack dev, 1 backend dev, 1 QA

Breakdown:
- Configuration UI (threshold, channels, time window): 2 weeks
- Alert triggering logic and batch processing: 2 weeks
- Notification integration and retry logic: 2 weeks
- Compliance features (time restrictions, audit logging): 1 week
- Testing (functional, integration, UAT): 2 weeks
- Compliance review and documentation: 1-2 weeks
- Buffer for unknowns: 1-2 weeks

This is a rough estimate. Will be refined once stories are created, sized, and technical design is complete.

---

## Usage Tips

### Writing Effective Epics

1. **Keep it high-level but specific**
   - Don't include implementation details
   - Do include enough detail to understand business value and scope

2. **Make business value explicit and measurable**
   - Use specific numbers: "25% reduction in overdrafts"
   - Include timeframes: "within 6 months"
   - Reference data sources: "based on pilot study"

3. **Clearly define scope boundaries**
   - Out of scope is as important as in scope
   - Prevents scope creep
   - Sets expectations with stakeholders

4. **Document all assumptions**
   - Assumptions are risks waiting to happen
   - Validate assumptions early with SMEs
   - Update as assumptions are proven or disproven

5. **Identify dependencies early**
   - External dependencies often cause delays
   - Start dependency conversations early
   - Track dependency status

### When to Split an Epic

Split an epic if:
- It spans multiple sprints (more than 4-6 weeks)
- It has distinct value streams that can be delivered independently
- Scope is so large that stories are hard to define
- Multiple teams need to work on different parts
- Risk profile varies significantly across the epic

### Validating Your Epic

Before finalizing, ask:
- [ ] Can I explain the business value in one sentence?
- [ ] Is success measurable?
- [ ] Are in-scope vs. out-of-scope boundaries clear?
- [ ] Have I identified all major dependencies?
- [ ] Have I validated assumptions with SMEs?
- [ ] Can I split this into 5-10 user stories?
- [ ] Does this align with product roadmap and strategy?