# Product Discovery Session - Automated Account Alerts

**Date:** October 15, 2024  
**Time:** 10:00 AM - 11:30 AM  
**Meeting Type:** Product Discovery Session  
**Location:** Conference Room B / Zoom

## Attendees

- **Jane Diaz** - Product Owner
- **Facilitator** - Business Analyst (you)
- **Marcus Chen** - Senior Dev Lead
- **Sarah Williams** - Compliance Representative  
- **Kevin Park** - UX Designer

---

## Meeting Notes

### Opening (Jane)

Jane: "Okay team, let's talk about automated account alerts. This came up in our last customer advisory board meeting - literally every single customer mentioned it. We're losing business to competitors because we don't have this basic feature."

"The ask is pretty straightforward: customers need to know when their account balance drops below a certain threshold. Currently they find out when it's too late and they've already been hit with overdraft fees."

### Customer Needs

**[Jane]:** Customers want real-time alerts when their account balance goes below $500. That's the magic number from our research - $500 is when people start to worry about overdrafts.

**[Kevin]:** From UX research, customers want choices on how they receive alerts. Email, SMS, and push notifications were all mentioned. Some people only want email, others want everything.

**[Jane]:** Right, and they need to be able to customize the threshold. Not everyone cares about $500 - some want $100, some want $1000. User should be able to set their own number.

**[Marcus]:** What's the range we're talking about?

**[Jane]:** Good question... umm, maybe $0 to... I don't know, $5000? Need to follow up with product marketing on what makes sense.

### Performance & Volume

**[Marcus]:** These alerts need to be fast. If someone's balance drops, we can't tell them about it three hours later.

**[Jane]:** Yeah, alerts need to be immediate. Or close to it.

**[Marcus]:** Define "immediate."

**[Jane]:** TBD - waiting on SLA requirements from operations. But fast. Really fast.

**[Marcus - looking concerned]:** We need to talk about the notification service. We can only call it 100 times per minute. That's the rate limit. If we have 10,000 customers hitting low balance at the same time...

**[Jane]:** How often does that happen?

**[Marcus]:** Market crash? Beginning of month when everyone's paying rent? Could happen.

### Technical Constraints

**[Marcus]:** Also, we're stuck with batch integration to the core banking system. Updates come every 15 minutes, not real-time.

**[Jane]:** Wait, so "real-time alerts" isn't actually real-time?

**[Marcus]:** Not with the current architecture. We could look at changing it, but that's a 6-month project minimum.

**[Jane - frustrated]:** Okay, so alerts within 15 minutes of balance drop. Still better than nothing.

**[Marcus]:** And the mobile team needs 24-hour notice for any push notification schema changes. They have to submit to Apple/Google for review.

**[Kevin]:** That's just for schema changes though, not the content, right?

**[Marcus]:** Correct. Once the schema is set up, we can send different messages without their involvement.

### Account Types

**[Kevin]:** What about customers with multiple accounts? Do they set one threshold for everything or different thresholds per account?

**[Jane]:** Hmm. Hadn't thought about that. What's easier to build?

**[Marcus]:** Easier doesn't mean better. But yeah, one global threshold is simpler.

**[Jane]:** Let's start with one threshold that applies to all their accounts. We can enhance later if customers complain.

**[Kevin]:** What about joint accounts? Who gets the alert?

**[Jane]:** Oh boy. Good question. Both account holders?

**[Sarah - first time speaking]:** From a compliance perspective, both account holders need to receive the alert if it's enabled. FINRA Rule 4512 requires customer notifications go to all authorized parties.

**[Jane]:** Okay, noted. What else from compliance?

### Compliance Requirements

**[Sarah]:** This needs to follow FINRA Rule 4512 for customer notifications. We need an audit trail - every alert sent must be logged with timestamp, recipient, account, balance, and delivery status.

Can't send alerts between 9 PM and 8 AM Eastern Time per TCPA regulations - that's the Telephone Consumer Protection Act. Applies to SMS and potentially email depending on how we implement it.

**[Jane]:** Wait, so if someone's balance drops at 10 PM, we just... don't tell them?

**[Sarah]:** We queue it and send at 8 AM. Or we get customer's explicit permission to send overnight alerts - that permission has to be documented and they have to be able to revoke it.

**[Marcus]:** So we need a preference for "alert time window"?

**[Sarah]:** Yes. Default is 8 AM to 9 PM, but customer can opt-in to 24/7 alerts if they want.

### Edge Cases (scattered throughout conversation)

**[Jane]:** What if the customer has multiple accounts and one is overdrawn?

**[Marcus]:** Didn't we say one threshold for all accounts?

**[Jane]:** Yeah but I mean... if checking is at -$50 and savings is at +$5000, do we send an alert?

**[Kevin]:** That's a good question. Total balance? Or per-account?

**[Jane - to facilitator]:** Can you note that as something we need to figure out? "Multi-account balance calculation rules" or something.

**[Marcus]:** Also, what happens if we try to send an alert and it fails? SMS doesn't go through, email bounces?

**[Jane]:** Retry?

**[Marcus]:** How many times? And do we try a different channel? If SMS fails, do we send email?

**[Jane - sighing]:** Add that to the list of things to figure out.

**[Kevin]:** What about overdrawn accounts? If someone's already overdrawn, do we keep sending them alerts every day?

**[Jane]:** Ugh, no, that would be annoying. Alert them once when they cross the threshold, then maybe daily reminders? Or weekly?

**[Marcus]:** We need rules for alert frequency. Can't spam customers.

### Business Value

**[Jane]:** Look, the business case is solid. Our pilot data shows this could reduce overdraft fees by 30%. That's huge.

**[Sarah]:** Reduce overdraft fee revenue, you mean.

**[Jane - defensive]:** Reduce overdraft incidents. Which is good for customer retention. We're losing customers over this - they're going to banks that warn them before they overdraft.

**[Kevin]:** Customer retention is the real driver. In our research, 40% of customers who incurred 3+ overdraft fees in a year switched banks within 18 months.

**[Jane]:** Exactly. This is table stakes now. Every competitor has this feature.

### Open Questions & Action Items

**[Jane]:** Okay, so what do we still need to figure out?

- [ ] TBD: Exact SLA for "fast" alerts (waiting on operations)
- [ ] TBD: Min/max threshold range (need product marketing input)
- [ ] TBD: Multi-account balance calculation rules (per-account vs. total)
- [ ] TBD: Failure handling and retry logic (need tech design)
- [ ] TBD: Alert frequency rules for already-overdrawn accounts
- [ ] TBD: Notification preference persistence - where does this data live?
- [ ] TBD: Internationalization - what about customers in different time zones for TCPA compliance?

**[Marcus]:** I need to follow up with the core banking team about getting real-time balance data instead of batch. Not for this release, but for v2.

**[Sarah]:** I'll send over the full FINRA and TCPA requirements documentation. There's more detail you'll need for implementation.

**[Kevin]:** I'll work on wireframes for the threshold configuration screen and notification preferences.

**[Jane]:** Great. Let's plan to have epics and stories drafted by end of week so we can review with engineering.

### Random Additional Comments

**[Marcus - as meeting is ending]:** Oh, and one more thing - any changes to the customer profile database schema need DBA approval. That's a 5-day turnaround minimum. If we're storing new preference data, we need to get that request in soon.

**[Kevin]:** What if a customer wants to disable alerts entirely after they've set them up?

**[Jane]:** Good call. Need enable/disable toggle.

**[Sarah]:** And when they disable, we need to log that for audit purposes. Can't just delete the data.

**[Marcus]:** Are we building this for all account types or just checking accounts?

**[Jane]:** Start with checking and savings. Money market and CDs probably don't need this - people aren't transacting out of those regularly.

**[Jane]:** Let's say MVP is: checking and savings accounts, one global threshold, customer can pick email and/or SMS, alerts happen during business hours unless customer opts in for 24/7.

**[Marcus]:** And push notifications?

**[Jane]:** Phase 2. Let's get email and SMS working first.

### Meeting End

**[Jane]:** Okay, I think we have enough to start. [To facilitator] Can you turn this into proper requirements? Epics, stories, the whole thing?

**[Facilitator]:** Yep, I'll draft epics and stories using the backlog template. Should have something to review by Friday.

**Meeting adjourned: 11:32 AM**

---

## Notes for Requirements Analysis

**Clear Requirements Identified:**
- Balance threshold alerts (customizable by customer)
- Multiple notification channels (email, SMS, and eventually push)
- Threshold range needs definition
- TCPA compliance (no alerts 9 PM - 8 AM without permission)
- FINRA compliance (audit trail required)
- Multi-account handling unclear

**Ambiguities to Clarify:**
- Definition of "fast" / "real-time" (pending SLA)
- Min/max threshold values
- Retry and failure handling logic
- Alert frequency for overdrawn accounts
- Multi-account balance calculation rules

**Technical Constraints Identified:**
- Notification service: 100 calls/minute rate limit
- Core banking: 15-minute batch updates (not real-time)
- Mobile team: 24-hour lead time for schema changes
- DBA approval: 5 days for database schema changes

**Business Value:**
- 30% reduction in overdraft incidents (pilot data)
- Competitive necessity (customer retention)
- Industry standard feature

**Compliance:**
- FINRA Rule 4512 (audit trail)
- TCPA (time restrictions, opt-in for overnight)
- Audit logging required

**Out of Scope for MVP (noted):**
- Money market and CD accounts
- Push notifications (Phase 2)
- Real-time core banking integration (Phase 2)
- Per-account threshold customization (Phase 2)

---

**Next Steps:** Transform these notes into:
1. 2-3 high-level epics
2. 5-8 well-formed user stories with INVEST criteria
3. Gherkin acceptance criteria
4. GitHub issues ready for sprint planning