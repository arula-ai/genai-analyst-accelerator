# Requirements Traceability Matrix (RTM) Template

## What is a Requirements Traceability Matrix?

A Requirements Traceability Matrix (RTM) is a document that maps relationships between requirements from their source through design, implementation, and testing. It ensures complete coverage of requirements and enables impact analysis when changes occur.

## Why Use RTM in Regulated Environments?

- **Audit Compliance:** Demonstrates that all regulatory requirements are implemented and tested
- **Impact Analysis:** Quickly identify what's affected when requirements change
- **Coverage Verification:** Ensures no requirements are missed in implementation or testing
- **Quality Assurance:** Provides evidence that the system meets all specified requirements
- **Change Management:** Tracks requirement evolution and approvals

## RTM Components

### Core Traceability Links
```
Policy Document → Business Requirements → User Stories → Acceptance Criteria → Test Cases → Test Results
```

### Bidirectional Traceability
- **Forward Tracing:** From requirements to implementation and tests
- **Backward Tracing:** From tests back to original requirements
- **Impact Analysis:** Understanding relationships when changes occur

## RTM Table Structure

### Basic RTM Format

| Req ID | Source | Requirement Description | Priority | Story ID | AC | Data Elements | UAT Cases | Status |
|--------|--------|------------------------|----------|----------|----|----|-----------|--------|
| REQ-001 | Policy 2.1 | Customer must be 18+ years old | High | US-001 | AC1 | DateOfBirth | UAT-001, UAT-023 | ✓ Complete |

### Extended RTM with Additional Tracking

| Req ID | Source | Requirement | Priority | Epic | Story ID | AC | Data Fields | API Endpoints | UAT Cases | Test Results | Status | Owner | Notes |
|--------|--------|-------------|----------|------|----------|----|----|-------------|-----------|--------------|--------|-------|-------|
| REQ-001 | COP-2024-017 §2.1 | Age verification (18+) | High | EP-001 | US-001 | AC1, AC3 | dateOfBirth, age | POST /customers | UAT-001, UAT-023 | Pass, Pass | ✓ Complete | J.Smith | Boundary testing added |

## Complete Example: Customer Onboarding RTM

| Req ID | Source Document | Requirement Description | Priority | Epic | Story ID | AC | Data Elements | UAT Test Cases | Status | Notes |
|--------|-----------------|------------------------|----------|------|----------|----|----|----------------|--------|-------|
| REQ-001 | COP-2024-017 §1 | Customer must provide legal full name | High | EP-001 | US-001 | AC1 | firstName, middleName, lastName | UAT-001, UAT-024 | ✓ Complete | Name format validation implemented |
| REQ-002 | COP-2024-017 §1 | Customer must be 18+ years old | High | EP-001 | US-001 | AC2 | dateOfBirth | UAT-001, UAT-023 | ✓ Complete | Boundary testing at exactly 18 years |
| REQ-003 | COP-2024-017 §1 | SSN required in XXX-XX-XXXX format | High | EP-001 | US-001 | AC3 | socialSecurityNumber | UAT-001, UAT-025 | ✓ Complete | Format validation with clear error messages |
| REQ-004 | COP-2024-017 §1 | Valid US address required | High | EP-001 | US-002 | AC1 | street, city, state, zipCode | UAT-002, UAT-026 | ✓ Complete | USPS address standardization integrated |
| REQ-005 | COP-2024-017 §1 | Government-issued ID required | High | EP-001 | US-002 | AC2 | idType, idNumber, idImage | UAT-003, UAT-027 | ✓ Complete | OCR document processing implemented |
| REQ-006 | COP-2024-017 §2.2 | Identity verification via third-party service | High | EP-002 | US-003 | AC1 | verificationScore, verificationResponse | UAT-004, UAT-005 | ✓ Complete | 10-second timeout handling added |
| REQ-007 | COP-2024-017 §2.2 | OFAC sanctions list screening | Critical | EP-002 | US-003 | AC2 | ofacCheckResult, sanctionsMatch | UAT-006, UAT-007 | ✓ Complete | Real-time OFAC API integration |
| REQ-008 | COP-2024-017 §3.1 | Auto-approve if verification score >85% | High | EP-002 | US-003 | AC3 | verificationScore, approvalDecision | UAT-008, UAT-009 | ✓ Complete | Score thresholds configured |
| REQ-009 | COP-2024-017 §3.2 | Manual review for scores 60-85% | High | EP-002 | US-004 | AC1 | verificationScore, reviewQueueId | UAT-010, UAT-011 | ✓ Complete | Review queue workflow implemented |
| REQ-010 | COP-2024-017 §3.3 | Auto-reject if score <60% | High | EP-002 | US-004 | AC2 | verificationScore, rejectionReason | UAT-012, UAT-013 | ✓ Complete | Clear rejection messaging |
| REQ-011 | COP-2024-017 §5.1 | Handle verification service timeout | Medium | EP-002 | US-004 | AC3 | timeoutFlag, manualReviewFlag | UAT-014, UAT-015 | ✓ Complete | Graceful degradation to manual review |
| REQ-012 | COP-2024-017 §7.1 | Verification must complete in 60 seconds | Medium | EP-002 | US-003 | AC4 | verificationTimestamp, processingTime | UAT-016, UAT-017 | ✓ Complete | SLA monitoring dashboard created |
| REQ-013 | COP-2024-017 §7.2 | Manual review decision within 24 hours | Medium | EP-002 | US-004 | AC4 | reviewTimestamp, decisionTimestamp | UAT-018 | ⚠ In Progress | Manual review SLA tracking |
| REQ-014 | COP-2024-017 §6.1 | PATRIOT Act disclosure required | Critical | EP-003 | US-005 | AC1 | patriotActConsent, consentTimestamp | UAT-019, UAT-020 | ✓ Complete | Compliance disclosure tracking |
| REQ-015 | COP-2024-017 §6.2 | Privacy policy acceptance required | High | EP-003 | US-005 | AC2 | privacyPolicyConsent, policyVersion | UAT-021 | ✓ Complete | Version tracking for policy updates |
| REQ-016 | COP-2024-017 §4.1 | Store application data for 7 years | Medium | EP-004 | US-006 | AC1 | retentionPolicy, archiveDate | UAT-022 | ⏳ Pending | Data retention automation |
| REQ-017 | COP-2024-017 §4.2 | Maintain complete audit trail | High | EP-004 | US-006 | AC2 | auditLogId, actionTimestamp, userId | UAT-022 | ⏳ Pending | Immutable audit logging |
| REQ-018 | COP-2024-017 §7.3 | Email notifications within 2 minutes | Low | EP-003 | US-007 | AC1 | emailStatus, sendTimestamp | UAT-028 | ✓ Complete | Notification service integration |

---

## Status Legend

- **✓ Complete:** All components traced, implemented, and tested successfully
- **⚠ In Progress:** Some components complete, others still in development/testing
- **⏳ Pending:** Requirement identified but implementation not started
- **❌ Blocked:** Cannot proceed due to external dependencies or issues
- **🔄 Rework:** Implementation exists but fails testing, requires revision

---

## Coverage Metrics

### Requirements Coverage
- **Total Requirements Identified:** 18
- **Requirements with Stories:** 18/18 (100%)
- **Requirements with Test Cases:** 18/18 (100%)
- **Requirements Fully Implemented:** 15/18 (83%)

### Story Coverage
- **Total Stories Created:** 7
- **Stories with Complete AC:** 7/7 (100%)
- **Stories with UAT Cases:** 7/7 (100%)
- **Stories Fully Tested:** 6/7 (86%)

### Test Coverage
- **Total UAT Cases:** 28
- **UAT Cases Executed:** 25/28 (89%)
- **UAT Cases Passed:** 23/25 (92%)
- **UAT Cases Failed:** 2/25 (8%)

### Priority Analysis
- **Critical Priority:** 2/2 (100% complete)
- **High Priority:** 11/13 (85% complete)
- **Medium Priority:** 2/3 (67% complete)

---

## Gap Analysis

### Requirements Without Complete Implementation
| Req ID | Issue | Impact | Mitigation |
|--------|-------|--------|------------|
| REQ-013 | Manual review SLA tracking incomplete | Medium | Add SLA monitoring to review dashboard |
| REQ-016 | Data retention automation not implemented | Low | Manual process in place, automation planned for Q2 |
| REQ-017 | Audit logging implementation in progress | Medium | Current logging sufficient, enhancement in development |

### Stories Without Complete Testing
| Story ID | Missing Tests | Priority | Plan |
|----------|---------------|----------|------|
| US-004 | Load testing for manual review queue | Medium | Scheduled for next sprint |

### Test Cases Requiring Attention
| UAT ID | Status | Issue | Resolution |
|--------|--------|-------|-----------|
| UAT-014 | Failed | Timeout handling inconsistent | Fix scheduled for hotfix release |
| UAT-015 | Failed | Manual queue assignment logic | Under investigation |

---

## Risk Assessment

### High-Risk Requirements
- **REQ-007 (OFAC Screening):** Critical for compliance, single point of failure
- **REQ-014 (PATRIOT Act):** Regulatory requirement, must be bulletproof
- **REQ-017 (Audit Trail):** Required for regulatory examination

### Mitigation Strategies
- Implement redundancy for critical compliance checks
- Add comprehensive monitoring and alerting
- Create fallback procedures for service outages
- Establish regular compliance validation testing

---

## Change Impact Analysis Template

When a requirement changes, use this analysis:

```markdown
### Change Request: [REQ-ID] - [Brief Description]

**Affected Components:**
- Stories: [List affected story IDs]
- Data Elements: [List affected fields/APIs]
- Test Cases: [List affected UAT cases]
- Systems: [List affected external systems]

**Impact Assessment:**
- Development Effort: [High/Medium/Low]
- Testing Effort: [High/Medium/Low]
- Compliance Risk: [High/Medium/Low]
- Timeline Impact: [Days/weeks affected]

**Dependencies:**
- Upstream: [What must change first]
- Downstream: [What changes as a result]
- External: [Third-party impacts]
```

---

## RTM Maintenance Guidelines

### Weekly Updates
- Review story completion status
- Update test execution results
- Identify new requirements from stakeholder feedback
- Assess coverage gaps

### Monthly Reviews
- Analyze coverage metrics trends
- Review and update risk assessments
- Validate requirement priority alignment
- Update documentation links

### Release Reviews
- Complete end-to-end traceability verification
- Generate compliance reports
- Archive completed requirements
- Plan next release requirements

---

## RTM Quality Checklist

Before releasing an RTM, verify:

- [ ] **Complete Traceability:** Every requirement traces to at least one story
- [ ] **No Orphan Stories:** Every story traces back to a requirement
- [ ] **Test Coverage:** Every requirement has associated test cases
- [ ] **Status Accuracy:** All status indicators reflect current state
- [ ] **Priority Alignment:** High-priority requirements are complete
- [ ] **Data Consistency:** Field names match across artifacts
- [ ] **Compliance Coverage:** All regulatory requirements addressed
- [ ] **Impact Analysis:** Change dependencies are documented

## Using RTM with GitHub Copilot

### Generating RTM Entries
```
Analyze this policy section and create RTM entries:
[Paste policy text]

For each requirement, provide:
- Unique requirement ID
- Source section reference
- Clear requirement description
- Suggested user story mapping
- Key data elements involved
- Recommended test scenarios
```

### Coverage Analysis
```
Review this RTM for gaps:
[Paste RTM table]

Identify:
- Requirements without stories
- Stories without clear requirements
- Missing test coverage
- Priority misalignments
- Compliance risks
```

### Impact Assessment
```
A requirement is changing:
Old: [Original requirement]
New: [Updated requirement]

Using this RTM: [Paste relevant rows]

Analyze the impact on stories, data elements, and test cases.
```