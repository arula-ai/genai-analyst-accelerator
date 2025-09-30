# Sample Epics - Path A Solutions

This document provides three complete, exemplary epics for the automated account alerts project based on the stakeholder discovery session. Each epic demonstrates production-quality requirements documentation for financial services, including compliance considerations, business value quantification, and clear story themes.

## Epic 1: Customer Alert Configuration

### Epic Title
Customer Balance Alert Configuration and Management

### Description

Enable retail banking customers to configure personalized balance threshold alerts for their checking and savings accounts. This self-service capability allows customers to set custom dollar thresholds and receive proactive notifications when their account balance drops below their specified amount, helping them avoid unexpected overdraft fees and better manage their cash flow.

### Business Value

#### Problem Statement

**What problem does this solve?**

Currently, 40% of our customers who incur 3+ overdraft fees annually switch to competitor banks within 18 months. Our customer advisory board identified proactive balance alerts as the #1 missing feature, with every single customer representative requesting this capability. Without balance alerts, customers discover low balances only after transactions are declined or overdraft fees are incurred, resulting in:

- **$2.1M annual overdraft fee revenue** that damages customer relationships
- **Customer attrition of 15%** among frequent overdraft users  
- **Competitive disadvantage** as all top 3 competitors offer this as standard
- **Support burden** with 23% of customer service calls related to overdraft complaints
- **Trust erosion** when customers feel blindsided by fees

#### Expected Outcome

**What business value will this deliver?**

Based on pilot program data with 500 customers over 3 months:
- **30% reduction in overdraft incidents** among alert users (from 2.3 to 1.6 per month average)
- **Customer retention improvement** of 15% among previous frequent overdraft users
- **Net Promoter Score increase** of 12 points among pilot participants  
- **Support call reduction** of 18% for overdraft-related inquiries
- **Competitive parity** with industry-standard alerting capabilities
- **Customer acquisition tool** to win back customers who left for alert features

#### Success Metrics

- **Adoption Rate:** 45% of active customers enable balance alerts within 6 months of launch
- **Overdraft Reduction:** 25-30% decrease in overdraft fee incidents among alert users within 90 days
- **Customer Retention:** 15% improvement in retention rate among customers with 3+ historical overdrafts
- **NPS Improvement:** +10 point increase in Net Promoter Score among alert users measured quarterly
- **Time to Value:** 90% of customers successfully configure alerts within 3 minutes of starting

### Scope

#### In Scope

What we ARE building in this epic:

- Customer self-service threshold configuration interface (web and mobile)
- Single global threshold setting that applies to all eligible accounts  
- Threshold range validation ($0 to $5,000 based on product requirements)
- Real-time threshold updates with immediate persistence to customer profile
- Enable/disable toggle for entire alert system
- Threshold modification history for customer reference
- Support for individual checking and savings accounts only
- FINRA-compliant audit trail for all threshold changes
- Input validation with clear error messaging for invalid amounts

#### Out of Scope

What we are NOT building (deferred to future phases):

- Per-account threshold customization (Phase 2 - MVP uses global threshold)
- Money market and CD account support (low transaction volume)
- Joint account notification handling (Phase 2 - MVP individual accounts only)
- Predictive balance alerts ("you'll be low in 3 days") 
- Mobile app configuration UI updates (Phase 2 - web only for MVP)
- International currency support (USD only for MVP)
- Threshold recommendations based on spending patterns
- Integration with external financial management tools

### Key Assumptions

- **Technical Assumption:** Customer Profile Service can handle threshold preference storage with existing database schema modifications
- **Business Assumption:** One global threshold per customer is sufficient for MVP validation (not per-account granularity)
- **User Assumption:** Customers will find $0-$5,000 threshold range appropriate for their needs
- **Technical Assumption:** 15-minute batch update delay from core banking is acceptable vs. true real-time 
- **Compliance Assumption:** FINRA audit requirements can be met with standard application logging
- **Data Assumption:** Customer contact information is current and valid for alert delivery
- **Security Assumption:** Existing authentication mechanisms are sufficient for accessing threshold configuration

### High-Level Stories

Story themes that will emerge from this epic:

1. **Threshold Value Setting** - Customer enters and validates custom dollar threshold amount
2. **Threshold Range Validation** - System enforces business rules for minimum/maximum threshold values  
3. **Global Application** - Threshold setting applies consistently across all eligible customer accounts
4. **Immediate Persistence** - Threshold changes are saved and take effect without delay
5. **Enable/Disable Control** - Customer can turn entire alert system on/off independently
6. **Change History** - Customer can view history of their threshold modifications
7. **Error Handling** - System provides clear feedback for invalid inputs or system errors
8. **Audit Trail** - All threshold changes are logged for compliance and customer service

### Dependencies

#### Technical Dependencies

- **Customer Profile Service API v2.1** - For storing threshold preference data
- **Account Service API v1.8** - For retrieving customer account eligibility 
- **Authentication Service** - For verifying customer identity and session management
- **Audit Logging Service** - For FINRA-compliant change tracking

#### External Dependencies

- **Database Administration Team** - Schema update approval (5-day turnaround required)
- **Mobile App Team** - Future mobile UI integration (24-hour lead time for schema changes)
- **Compliance Team** - Review and approval of audit logging implementation
- **UX Team** - Final wireframe approval for threshold configuration interface

#### Regulatory/Compliance Dependencies

- **FINRA Rule 4512** - Customer notification audit trail requirements
- **Bank Secrecy Act** - 7-year record retention for customer preference changes
- **Sarbanes-Oxley** - Customer data change audit controls

### Risks

- **HIGH:** Customer Profile Service batch processing (4-hour delay) conflicts with "immediate" threshold updates - may require real-time API enhancement
- **MEDIUM:** Multi-account customers may be dissatisfied with single global threshold limitation in MVP
- **MEDIUM:** $5,000 maximum threshold may be insufficient for high-net-worth customers
- **LOW:** Database schema changes may take longer than 5-day estimate if complex migrations required

### Timeline Estimate

**Estimated effort:** 4-6 weeks with 1 full-stack developer, 1 backend developer

This epic focuses purely on configuration capabilities and is scoped for quick delivery to enable customer onboarding to the alert system.

**Commentary on Epic Quality:**

This epic demonstrates several best practices for financial services requirements:

1. **Quantified Business Value:** Uses specific metrics from pilot data (30% reduction, $2.1M impact) rather than vague benefits
2. **Compliance Integration:** Includes FINRA and BSA requirements as first-class concerns, not afterthoughts  
3. **Clear Scope Boundaries:** Explicitly excludes complex features (joint accounts, per-account thresholds) to enable MVP delivery
4. **Risk Transparency:** Acknowledges the batch processing limitation that affects "real-time" perception
5. **Assumption Documentation:** Makes technical and business assumptions explicit for validation

---

## Epic 2: Alert Delivery and Notification

### Epic Title
Automated Balance Alert Delivery System

### Description

Implement the core alert triggering and delivery mechanism that monitors customer account balances against configured thresholds and sends timely notifications via email and SMS channels. This system processes balance updates from core banking, applies customer notification preferences, and ensures compliant delivery timing while providing reliable retry mechanisms for failed notifications.

### Business Value

#### Problem Statement

**What problem does this solve?**

Even with threshold configuration available, customers need reliable, timely delivery of balance alerts to avoid overdrafts. The core challenge is bridging the gap between when a balance drops and when customers become aware:

- **Average discovery delay** of 18 hours between balance drop and customer awareness
- **Critical timing window** where 67% of overdrafts occur within 6 hours of balance falling below threshold
- **Delivery reliability concerns** with 12% of SMS messages failing during peak hours  
- **Compliance risk** if alerts are sent outside TCPA-permitted hours (9 PM - 8 AM ET)
- **Customer frustration** when alerts arrive too late to take preventive action

#### Expected Outcome

**What business value will this deliver?**

Based on competitive analysis and pilot testing:
- **Alert delivery within 15 minutes** of balance threshold crossing (limited by core banking batch updates)
- **99.5% delivery success rate** for email alerts within SLA timeframe
- **97% delivery success rate** for SMS alerts accounting for carrier limitations
- **Zero TCPA violations** through proper time window enforcement
- **Customer confidence increase** with predictable, reliable alert timing
- **Operational efficiency** with automated retry logic reducing manual intervention

#### Success Metrics

- **Delivery SLA:** 95% of alerts delivered within 15 minutes of threshold crossing during business hours
- **Delivery Success Rate:** 99% successful delivery rate for email, 95% for SMS
- **TCPA Compliance:** 100% compliance with time window restrictions (no overnight alerts without permission)
- **Customer Satisfaction:** 85% of customers rate alert timing as "helpful" or "very helpful" in post-implementation survey
- **System Reliability:** 99.9% uptime for alert processing system

### Scope

#### In Scope

What we ARE building in this epic:

- Balance monitoring job that processes 15-minute batch updates from core banking
- Threshold comparison logic for checking and savings accounts
- Email alert delivery integration with notification service
- SMS alert delivery integration with notification service (within 100 calls/minute rate limit)
- TCPA compliance with 9 PM - 8 AM ET quiet hours enforcement
- Alert retry logic for failed deliveries (3 attempts with exponential backoff)
- Customer opt-in mechanism for 24/7 alert delivery
- Alert deduplication to prevent spam (max 1 alert per account per day below threshold)
- Delivery confirmation tracking and status reporting
- Alert history persistence for customer service and audit purposes

#### Out of Scope

What we are NOT building (deferred to future phases):

- Push notification delivery (Phase 2 - requires mobile app schema changes)
- Real-time balance monitoring (Phase 2 - requires core banking system integration changes)
- Predictive overdraft alerts based on spending patterns
- Multiple alert levels (e.g., 50%, 25%, 10% of threshold)
- Alert customization by day of week or specific time windows
- Two-way SMS responses for account balance inquiries
- Alert delivery via voice calls
- Integration with third-party notification platforms beyond current provider

### Key Assumptions

- **Technical Assumption:** Notification service rate limit (100 calls/minute) is sufficient for expected volume
- **Business Assumption:** 15-minute delivery delay from core banking batch is acceptable to customers
- **Regulatory Assumption:** 8 AM - 9 PM ET covers all customer time zones adequately for TCPA
- **User Assumption:** Customers prefer email over SMS for balance alerts (email as primary channel)
- **Technical Assumption:** Current notification service supports delivery status callbacks
- **Volume Assumption:** Peak alert volume will not exceed 1,000 alerts per 15-minute batch window
- **Data Assumption:** Customer email and phone contact information is current and valid

### High-Level Stories

Story themes that will emerge from this epic:

1. **Balance Monitoring** - System processes batch balance updates and detects threshold crossings
2. **Alert Triggering** - Logic determines when alerts should be sent based on thresholds and timing rules
3. **Email Delivery** - Integration with email service for reliable message delivery
4. **SMS Delivery** - Integration with SMS service within rate limit constraints
5. **Time Window Enforcement** - TCPA compliance through quiet hours and customer preference handling
6. **Retry Mechanism** - Failed delivery handling with intelligent retry logic
7. **Deduplication** - Prevention of alert spam for accounts remaining below threshold
8. **Delivery Tracking** - Status monitoring and confirmation of successful alert delivery

### Dependencies

#### Technical Dependencies

- **Core Banking System** - 15-minute batch balance feed (existing integration)
- **Notification Service API** - Email and SMS delivery platform (100 calls/minute limit)
- **Customer Profile Service** - Access to threshold preferences and contact information
- **Account Service API** - Account balance retrieval and validation
- **Audit Logging Service** - Alert delivery tracking for compliance

#### External Dependencies

- **Operations Team** - SLA definition and monitoring setup for alert delivery timing
- **Notification Service Provider** - Delivery status callback configuration  
- **Core Banking Team** - Confirmation of batch timing consistency and data format
- **Compliance Team** - Review of TCPA implementation and quiet hours logic

#### Regulatory/Compliance Dependencies

- **TCPA (Telephone Consumer Protection Act)** - Time window restrictions for SMS delivery
- **FINRA Rule 4512** - Customer notification delivery audit trail
- **CAN-SPAM Act** - Email delivery compliance and unsubscribe handling

### Risks

- **HIGH:** Notification service rate limit (100/minute) may be insufficient during market volatility or month-end cash flow periods
- **HIGH:** Core banking batch delay (15 minutes) may not meet customer expectations for "immediate" alerts
- **MEDIUM:** SMS delivery reliability varies by carrier and may not meet 95% success rate target
- **MEDIUM:** Customer contact information may be outdated, leading to delivery failures
- **LOW:** TCPA quiet hours may conflict with customer urgent notification needs

### Timeline Estimate

**Estimated effort:** 6-8 weeks with 1 backend developer, 1 integration specialist

This epic represents the core value delivery of the alert system and requires careful integration testing to ensure reliability.

**Commentary on Epic Quality:**

This epic focuses on operational excellence and compliance, which is critical for financial services:

1. **SLA-Driven Success Metrics:** Defines specific delivery timeframes (15 minutes, 99.5% success) that can be monitored operationally
2. **Regulatory Compliance:** Treats TCPA requirements as core functionality, not an add-on feature
3. **Technical Constraint Acknowledgment:** Explicitly addresses rate limits and batch processing limitations  
4. **Operational Readiness:** Includes retry logic, deduplication, and delivery tracking for production reliability
5. **Risk Management:** Identifies high-impact risks (rate limits, customer expectations) that need mitigation strategies

---

## Epic 3: Alert Channel Management and Preferences

### Epic Title
Customer Notification Channel Selection and Preference Management

### Description

Provide customers with comprehensive control over how they receive balance alerts, including channel selection (email, SMS, or both), contact information management, and TCPA-compliant time window preferences. This capability ensures customers receive alerts through their preferred communication methods while maintaining regulatory compliance and providing flexibility for different customer lifestyles and notification needs.

### Business Value

#### Problem Statement

**What problem does this solve?**

Customer notification preferences are highly personal and regulatory compliance requirements create additional complexity. Without proper channel management:

- **Channel mismatch:** 34% of customers prefer SMS for urgent alerts but email for non-urgent communications
- **Contact information drift:** 22% of customer email addresses and phone numbers become outdated annually
- **TCPA compliance risk:** Sending SMS outside permitted hours can result in $500-$1,500 per violation fines
- **Customer frustration:** No opt-out mechanism leads to alert fatigue and customer complaints
- **Accessibility needs:** Some customers require specific channels due to disabilities or technology constraints

#### Expected Outcome

**What business value will this deliver?**

Based on user research and regulatory requirements:
- **Improved alert effectiveness** when delivered via customer's preferred channel
- **100% TCPA compliance** through proper opt-in/opt-out management
- **Reduced customer service calls** by 25% related to unwanted or missed alerts
- **Better contact data quality** through customer self-service updates
- **Enhanced customer satisfaction** with personalized alert delivery experience
- **Risk mitigation** for regulatory violations and associated penalties

#### Success Metrics

- **Channel Selection:** 80% of customers configure their preferred notification channels within first month
- **Contact Information Currency:** 95% of customer email and phone data accurate and current
- **TCPA Compliance:** 100% compliance rate with time window restrictions and opt-in requirements
- **Customer Satisfaction:** 90% satisfaction rating for alert delivery preferences flexibility
- **Preference Stability:** 85% of customers maintain same channel preferences after initial configuration

### Scope

#### In Scope

What we ARE building in this epic:

- Channel selection interface allowing email, SMS, or both notification methods
- Customer contact information update capability (email address and mobile phone)
- TCPA-compliant 24/7 alert opt-in with clear consent language and revocation ability
- Default time window preference (8 AM - 9 PM ET) with customer override option
- Alert preference history and audit trail for compliance documentation
- Real-time validation of email format and phone number format
- Opt-out capability with immediate effect and compliance logging
- Customer preference export for customer service team access
- Integration with existing customer profile management system

#### Out of Scope

What we are NOT building (deferred to future phases):

- Voice call notification option (Phase 2)
- Push notification channel (Phase 2 - requires mobile app integration)
- Multiple phone number support (single SMS number only for MVP)
- Channel-specific message customization (same message content across channels)
- Time zone-specific quiet hours (ET timezone only for MVP)
- Third-party messaging app integration (WhatsApp, Telegram)
- Advanced scheduling (different preferences by day of week)
- Channel priority or fallback logic (if email fails, try SMS)

### Key Assumptions

- **Regulatory Assumption:** Standard TCPA consent language is sufficient for SMS opt-in
- **Technical Assumption:** Current notification service can handle channel routing logic
- **User Assumption:** Customers understand time window implications and make informed choices
- **Business Assumption:** Most customers will choose email as primary or sole channel
- **Technical Assumption:** Real-time email and phone validation APIs are available and reliable
- **Compliance Assumption:** Audit trail requirements can be met with application-level logging
- **Data Assumption:** Customer profile database can store preference data without major schema changes

### High-Level Stories

Story themes that will emerge from this epic:

1. **Channel Selection** - Customer chooses email, SMS, or both for alert delivery
2. **Contact Information Management** - Customer updates email address and phone number for alerts
3. **24/7 Opt-in Process** - TCPA-compliant consent flow for overnight alert delivery
4. **Time Window Configuration** - Customer sets preferred alert delivery hours
5. **Preference Validation** - Real-time validation of contact information format and deliverability
6. **Opt-out Management** - Customer can disable alerts entirely with proper compliance logging
7. **Preference History** - Customer can view history of notification preference changes
8. **Audit Trail** - Compliance documentation for all preference modifications and consent actions

### Dependencies

#### Technical Dependencies

- **Customer Profile Service API** - For storing notification preferences and contact information
- **Notification Service API** - For validating email and phone number deliverability
- **Authentication Service** - For securing preference management interface
- **Audit Logging Service** - For TCPA compliance documentation
- **Email Validation Service** - For real-time email format and domain validation
- **Phone Validation Service** - For mobile number format validation

#### External Dependencies

- **Legal Team** - Review of TCPA consent language and opt-out process
- **Compliance Team** - Approval of audit trail implementation and documentation retention
- **Customer Service Team** - Training on preference management and troubleshooting
- **Marketing Team** - Customer communication about new preference options

#### Regulatory/Compliance Dependencies

- **TCPA (Telephone Consumer Protection Act)** - SMS consent requirements and documentation
- **FINRA Rule 4512** - Customer notification preference audit requirements  
- **CAN-SPAM Act** - Email preference and opt-out compliance
- **GDPR Considerations** - Data processing consent for international customers (future consideration)

### Risks

- **MEDIUM:** TCPA consent language may require legal review adding 2-3 weeks to timeline
- **MEDIUM:** Customer confusion about time window options may lead to support burden
- **MEDIUM:** Integration with notification service for preference routing may be more complex than estimated
- **LOW:** Email validation service costs may exceed budget projections with high usage
- **LOW:** Customer preference data migration from existing systems may require additional development effort

### Timeline Estimate

**Estimated effort:** 5-7 weeks with 1 full-stack developer, 1 compliance specialist

This epic enables customer self-service and regulatory compliance, essential for production deployment.

**Commentary on Epic Quality:**

This epic demonstrates sophisticated understanding of regulatory and user experience requirements:

1. **Regulatory-First Approach:** Treats TCPA compliance as core functionality with proper consent flows and audit trails
2. **User-Centric Design:** Acknowledges that notification preferences are personal and provides flexibility
3. **Operational Scalability:** Includes customer self-service capabilities to reduce support burden
4. **Compliance Documentation:** Provides audit trails and history that support regulatory examinations
5. **Risk Awareness:** Identifies legal review requirements and potential customer education needs

The epic properly scopes preference management as separate from core alert delivery, allowing for independent development and testing while ensuring all customer touchpoints are covered before launch.

---

## Summary

These three epics demonstrate production-quality requirements for financial services software:

1. **Epic 1 (Configuration)** focuses on customer onboarding and threshold management
2. **Epic 2 (Delivery)** handles the core operational functionality with SLA and compliance requirements  
3. **Epic 3 (Preferences)** provides customer control and regulatory compliance for notification channels

Each epic includes:
- **Quantified business value** with specific metrics and timelines
- **Regulatory compliance** as first-class requirements (FINRA, TCPA, BSA)
- **Clear scope boundaries** to prevent scope creep and enable incremental delivery
- **Risk transparency** acknowledging technical and business constraints
- **Realistic assumptions** that can be validated with subject matter experts

The epics work together to deliver a complete customer alert capability while maintaining focus on MVP delivery and production readiness for a regulated financial services environment.