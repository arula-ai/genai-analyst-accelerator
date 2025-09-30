# GitHub Issue Creation Prompts

## Overview
This guide provides prompt templates for converting user stories into well-structured GitHub Issues that development teams can efficiently implement. These prompts ensure issues include comprehensive Definition of Ready (DoR) criteria, proper linking, and all information needed for successful development in financial services environments.

## The Five-Part Prompt Pattern
Every effective prompt includes:
1. **Role:** Tell Copilot what role to assume
2. **Inputs:** Provide the source material
3. **Format:** Specify the desired output structure
4. **Constraints:** Add requirements and boundaries
5. **Examples:** Show what good looks like

---

## Prompt 1: User Story to GitHub Issue Conversion

### When to Use
To transform refined user stories into complete GitHub Issues ready for development.

### The Prompt
```
You are a technical product manager converting user stories into GitHub Issues for a financial services development team.

Convert this user story into a comprehensive GitHub Issue:

[PASTE USER STORY WITH ACCEPTANCE CRITERIA]

Create a GitHub Issue with:

**Title:** Clear, specific, action-oriented (50 characters max)

**Description:**
- User story in standard format
- Business context and value
- Key assumptions
- Links to related epics/features

**Acceptance Criteria:**
- All scenarios in Given-When-Then format
- Include happy path and edge cases
- Specify compliance requirements
- Include performance criteria

**Technical Notes:**
- API endpoints involved
- Database changes required
- Third-party integrations
- Security considerations

**Definition of Ready Checklist:**
- [ ] Acceptance criteria are clear and testable
- [ ] UI/UX requirements specified
- [ ] API contracts defined
- [ ] Security requirements identified
- [ ] Compliance requirements documented
- [ ] Dependencies identified and resolved
- [ ] Effort estimated
- [ ] Test scenarios defined

**Labels:** [Suggest appropriate labels]

Use GitHub markdown formatting for readability.
```

### Expected Output
Copilot should generate a complete GitHub Issue with all sections filled out, proper formatting, and comprehensive DoR checklist.

### Tips
- If output is too generic, add: "Include specific technical implementation details"
- If missing compliance, add: "This is for regulated financial services - include all compliance considerations"
- If DoR is incomplete, add: "Ensure DoR checklist covers all development prerequisites"

---

## Prompt 2: Definition of Ready Checklist Generation

### When to Use
To create comprehensive DoR checklists for specific story types or team requirements.

### The Prompt
```
Generate a comprehensive Definition of Ready checklist for this user story:

[PASTE USER STORY]

Create a checklist that ensures the story is ready for development by verifying:

**Business Readiness:**
- [ ] Business value clearly articulated
- [ ] User persona and needs understood
- [ ] Success metrics defined
- [ ] Stakeholder approval obtained

**Technical Readiness:**
- [ ] Technical approach agreed upon
- [ ] Architecture implications understood
- [ ] Database schema changes identified
- [ ] API changes documented
- [ ] Performance requirements specified

**Compliance Readiness:**
- [ ] Regulatory requirements identified
- [ ] Security review completed
- [ ] Data privacy impact assessed
- [ ] Audit requirements documented

**Quality Readiness:**
- [ ] Acceptance criteria complete and testable
- [ ] Test scenarios identified
- [ ] Test data requirements specified
- [ ] Quality gates defined

**Dependency Readiness:**
- [ ] All blocking dependencies resolved
- [ ] External system dependencies confirmed
- [ ] Team dependencies coordinated
- [ ] Infrastructure requirements met

Customize the checklist based on the specific story requirements and add any missing items relevant to financial services development.
```

### Expected Output
Copilot should create a comprehensive, customized DoR checklist that ensures thorough preparation before development begins.

---

## Prompt 3: Issue Self-Review and Gap Analysis

### When to Use
To review completed issues for completeness and identify potential gaps.

### The Prompt
```
Perform a comprehensive review of this GitHub Issue for completeness and quality:

[PASTE GITHUB ISSUE]

Analyze and identify gaps in:

**Clarity and Completeness:**
- Are requirements unambiguous?
- Is business value clearly stated?
- Are acceptance criteria comprehensive?
- Are technical specifications adequate?

**Testability:**
- Can all criteria be objectively verified?
- Are test scenarios complete?
- Is test data specified?
- Are performance criteria measurable?

**Implementation Readiness:**
- Is the technical approach clear?
- Are dependencies identified?
- Are integration points specified?
- Is the scope appropriately bounded?

**Compliance and Risk:**
- Are regulatory requirements addressed?
- Are security considerations included?
- Are audit requirements specified?
- Are risk mitigation strategies included?

**Team Alignment:**
- Is the effort appropriately estimated?
- Are skill requirements identified?
- Are review checkpoints defined?
- Is the definition of done clear?

For each gap identified, provide specific recommendations for improvement.
Rate the overall issue readiness as RED/YELLOW/GREEN with justification.
```

### Expected Output
Copilot should provide a structured analysis identifying specific gaps and providing actionable recommendations for issue improvement.

---

## Prompt 4: Related Issue Linking and Epic Management

### When to Use
To ensure proper issue relationships and epic tracking.

### The Prompt
```
Analyze these GitHub Issues for proper linking and epic organization:

[PASTE MULTIPLE RELATED ISSUES]

Create a linking strategy that:

**Epic Relationship:**
- Identify which epic each issue belongs to
- Verify issues collectively deliver epic value
- Check for missing issues in epic scope
- Validate epic breakdown completeness

**Issue Dependencies:**
- Map prerequisite relationships
- Identify blocking dependencies
- Suggest delivery sequencing
- Flag circular dependencies

**Related Issue Connections:**
- Link issues that share components
- Connect issues affecting same users
- Group issues requiring coordinated testing
- Identify issues needing joint deployment

**Cross-Epic Dependencies:**
- Identify dependencies spanning epics
- Flag integration requirements
- Suggest coordination checkpoints
- Recommend communication strategies

For each relationship, specify:
- Relationship type (blocks, related to, part of, depends on)
- Rationale for the connection
- Impact on delivery planning
- Risk if relationship is ignored

Format as GitHub linking syntax and provide epic management recommendations.
```

### Expected Output
Copilot should provide a comprehensive linking strategy with specific GitHub relationship syntax and epic management recommendations.

---

## Prompt 5: Label Strategy and Classification

### When to Use
To ensure consistent labeling for better issue organization and filtering.

### The Prompt
```
Suggest appropriate GitHub labels for this issue:

[PASTE GITHUB ISSUE]

Recommend labels in these categories:

**Issue Type:**
- story, bug, epic, task, spike, documentation

**Priority/Severity:**
- critical, high, medium, low
- p0, p1, p2, p3

**Component/Area:**
- frontend, backend, api, database, infrastructure
- authentication, payments, reporting, compliance

**Team/Skill:**
- needs-design, needs-security-review, needs-compliance-review
- frontend-team, backend-team, devops-team

**Status/Workflow:**
- ready-for-dev, in-progress, ready-for-review, ready-for-test
- blocked, waiting-for-approval, needs-clarification

**Special Considerations:**
- breaking-change, customer-facing, compliance-required
- performance-critical, security-sensitive, data-migration

**Release/Sprint:**
- sprint-current, release-v2.1, hotfix-candidate

For financial services context, include:
- Regulatory impact labels
- Data sensitivity classifications
- Compliance requirement indicators
- Audit trail requirements

Provide rationale for each suggested label and indicate priority for consistent application.
```

### Expected Output
Copilot should suggest a comprehensive, consistent labeling strategy appropriate for financial services development with clear rationale.

---

## Prompt 6: Issue Template Customization

### When to Use
To create standardized issue templates for different story types.

### The Prompt
```
Create a GitHub Issue template for [SPECIFIC STORY TYPE - e.g., "API integration stories"]:

The template should include:

**Standard Sections:**
- User story format
- Business context
- Acceptance criteria
- Technical specifications
- Definition of Ready checklist

**Story-Type-Specific Sections:**
- [Customize based on story type]
- API contracts and documentation
- Integration testing requirements
- Error handling specifications
- Performance benchmarks

**Financial Services Requirements:**
- Compliance checkpoints
- Security review requirements
- Audit trail specifications
- Data privacy considerations

**Quality Assurance:**
- Test scenario templates
- Review checkpoint definitions
- Deployment considerations
- Rollback procedures

Format as a GitHub Issue template with:
- Clear section headers
- Placeholder text showing what to fill in
- Checkbox lists for tracking
- Markdown formatting for readability
- Helpful prompts and examples

Ensure the template guides users to provide all necessary information for successful development.
```

### Expected Output
Copilot should create a comprehensive, reusable GitHub Issue template tailored to specific story types with clear guidance and formatting.

---

## Example: Complete GitHub Issue

### Title
`Add account balance inquiry API for mobile app`

### Description
**User Story:**
As a mobile banking customer, I want to check my account balance through the mobile app so that I can monitor my finances on the go.

**Business Context:**
Current mobile app requires customers to log into web portal for balance checks, creating friction and reducing engagement. This API will enable native mobile balance inquiry, improving customer experience and reducing support calls.

**Business Value:**
- Reduce customer service calls by 15%
- Improve mobile app engagement by 25%
- Enable real-time balance monitoring

**Key Assumptions:**
- Customer authentication already implemented
- Account data available in real-time
- Mobile app can consume REST APIs

**Related Items:**
- Epic: #123 Mobile Banking Enhancement
- Depends on: #124 Mobile Authentication API

### Acceptance Criteria

**AC1: Successful Balance Retrieval**
```
Given I am an authenticated mobile banking customer
And I have account "AC-123456" with balance $1,234.56
When I request my account balance via mobile API
Then I should receive status code 200
And response should include balance amount "$1,234.56"
And response should include account number "AC-123456"
And response should include currency "USD"
And response time should be under 2 seconds
```

**AC2: Multiple Account Handling**
```
Given I am an authenticated customer with 3 accounts
When I request all account balances
Then I should receive balances for all my accounts
And each account should include account type
And accounts should be sorted by account number
```

**AC3: Unauthorized Access Prevention**
```
Given I am not authenticated
When I attempt to access account balance API
Then I should receive status code 401
And response should include error message "Authentication required"
And no account information should be disclosed
```

### Technical Specifications

**API Endpoint:** `GET /api/v1/accounts/{accountId}/balance`

**Request Headers:**
- Authorization: Bearer {token}
- Content-Type: application/json

**Response Format:**
```json
{
  "accountId": "AC-123456",
  "balance": 1234.56,
  "currency": "USD",
  "accountType": "checking",
  "lastUpdated": "2024-01-15T10:30:00Z"
}
```

**Security Requirements:**
- OAuth 2.0 authentication required
- Rate limiting: 100 requests per minute per user
- Request/response logging for audit trail
- Data encryption in transit (TLS 1.3)

### Definition of Ready Checklist

- [x] Acceptance criteria are clear and testable
- [x] API contract defined and approved
- [x] Security requirements documented
- [x] Performance criteria specified (2-second response time)
- [ ] Database access patterns reviewed
- [ ] Error handling scenarios defined
- [ ] Integration test plan created
- [ ] Compliance review completed
- [ ] Effort estimated by development team

### Labels
`story`, `api`, `mobile`, `high-priority`, `compliance-required`, `ready-for-dev`

---

## Best Practices for Financial Services Issues

1. **Security First:** Always include authentication, authorization, and data protection requirements
2. **Compliance Awareness:** Document regulatory requirements and audit trail needs
3. **Specific Data:** Use realistic financial data in examples and test scenarios
4. **Error Handling:** Comprehensive error scenarios with specific error codes and messages
5. **Performance Criteria:** Specific timing and throughput requirements
6. **Audit Requirements:** Clear logging and tracking specifications
7. **Integration Impact:** Document effects on other systems and data flows
8. **Review Gates:** Include compliance and security review checkpoints

## Common Issue Quality Problems

### Problem 1: Vague Acceptance Criteria
**Bad:** "System should handle errors appropriately"
**Good:** "When invalid account number provided, return status 404 with error code 'ACCOUNT_NOT_FOUND'"

### Problem 2: Missing Technical Details
**Bad:** "Add login functionality"
**Good:** "Implement OAuth 2.0 authentication with JWT tokens, 24-hour expiration, refresh token support"

### Problem 3: Incomplete DoR
**Bad:** Basic checklist with generic items
**Good:** Comprehensive checklist covering business, technical, compliance, and quality readiness

### Problem 4: Poor Linking
**Bad:** No relationships specified
**Good:** Clear epic membership, dependencies, and related issue connections

## Practice Exercise

Convert this user story into a complete GitHub Issue:

"As a compliance officer, I want to generate monthly transaction reports so that I can meet regulatory reporting requirements."

Use Prompts 1, 2, and 5 to create a comprehensive issue with DoR checklist and appropriate labels.

Compare your results with solutions/sample-issues.md

These prompts ensure GitHub Issues provide development teams with complete, actionable specifications that meet the quality and compliance standards required in financial services environments.