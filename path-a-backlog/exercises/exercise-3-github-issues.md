# Exercise 3: GitHub Issues Creation
**Time:** 15 minutes (50:00 - 65:00 in session)  
**Objective:** Convert user stories and Gherkin scenarios into well-structured GitHub issues ready for sprint planning and development

## Prerequisites
- [ ] You've completed Exercises 1 and 2 (have user stories and Gherkin scenarios)
- [ ] You have templates/github-issue-template.md available for reference
- [ ] Access to a GitHub repository or ability to create markdown files

## Exercise Overview
You'll use Copilot to:
1. Create properly structured GitHub issues from user stories (5 min)
2. Add comprehensive descriptions and checklists (5 min)
3. Generate labels, linking, and project metadata (5 min)

## GitHub Issue Structure Review

### Essential Components
- **Title:** Clear, concise description of the work
- **Description:** User story, acceptance criteria, and context
- **Labels:** For categorization and filtering
- **Assignees:** Who will work on this
- **Milestone:** Sprint or release target
- **Linked Issues:** Dependencies and related work

### Issue Template Format
```markdown
## User Story
As a [user type], I want [capability], so that [business value]

## Acceptance Criteria
- [ ] AC1: [Specific, testable criterion]
- [ ] AC2: [Specific, testable criterion]

## Gherkin Scenarios
[Link to or paste scenarios]

## Definition of Done
- [ ] Code complete and tested
- [ ] Passes all acceptance criteria
- [ ] Documentation updated
- [ ] Code reviewed and approved

## Dependencies
- [ ] [Dependency 1]
- [ ] [Dependency 2]

## Risks
- [Risk description and mitigation]

## Additional Context
[Any relevant context, links, or notes]
```

---

## Step 1: Create Structured GitHub Issues (5 minutes)

### Instructions

1. **Select 2-3 user stories** from Exercise 1 (choose stories with different complexity levels)

2. **Use this prompt to create GitHub issues**:
   ```
   You are a development team lead creating GitHub issues for sprint planning.

   Convert these user stories into well-structured GitHub issues:

   [PASTE 2-3 USER STORIES WITH ACCEPTANCE CRITERIA]

   For each issue, create:

   **Title:** Clear, actionable title (50 characters or less)
   **Description including:**
   - User story statement
   - Acceptance criteria as checkboxes
   - Definition of done checklist
   - Dependencies if any
   - Estimated effort (story points or hours)

   **Additional sections:**
   - Technical notes for developers
   - Testing considerations
   - Risk factors
   - Related documentation links

   Format as proper GitHub markdown with:
   - Clear headings and structure
   - Checkboxes for trackable items
   - Specific, actionable language
   - Professional tone suitable for development team

   Make issues ready for sprint planning and development assignment.
   ```

3. **Review each issue for completeness**:
   - Is the title clear and actionable?
   - Are acceptance criteria specific and checkable?
   - Is all necessary context included?

### Checkpoint ✓
After 5 minutes you should have:
- [ ] 2-3 GitHub issues with clear titles
- [ ] Complete user story descriptions
- [ ] Acceptance criteria as checkboxes
- [ ] Definition of done checklists
- [ ] Technical notes for developers

### Tips
- Keep titles under 50 characters - they need to be readable in GitHub's issue list
- Use action words in titles: "Implement customer threshold validation" not "Customer thresholds"
- Include story point estimates to help with sprint planning

### What Good Looks Like
**Example GitHub Issue:**
```markdown
# Title: Implement customer balance alert threshold configuration

## User Story
As a retail banking customer, I want to set a custom balance threshold for alerts, so that I can avoid overdraft fees by being warned before my balance gets too low.

## Acceptance Criteria
- [ ] Customer can enter threshold amount between $0 and $5,000
- [ ] System validates threshold on save (numeric, within range, positive value)
- [ ] Threshold is immediately saved to customer profile
- [ ] Confirmation message displays showing threshold value and affected accounts
- [ ] System logs threshold changes for audit trail (FINRA compliance)

## Definition of Done
- [ ] Code complete and unit tested
- [ ] Integration tests pass
- [ ] All acceptance criteria verified
- [ ] Code reviewed and approved
- [ ] Documentation updated
- [ ] Deployed to staging environment

## Technical Notes
- Use Customer Profile Service API v2.1 for persistence
- Implement client-side and server-side validation
- Follow existing audit logging patterns
- Ensure HTTPS for all API calls

## Dependencies
- [ ] Customer Profile Service API v2.1 available
- [ ] Database schema update approved by DBA team
- [ ] Audit logging service configured

## Estimated Effort
3 story points (2-3 days for one developer)

## Risks
- **MEDIUM:** Legacy customer profile system uses batch updates (4-hour delay), may conflict with "immediate" save requirement
- **LOW:** Input validation edge cases may require additional testing

## Related Issues
- Depends on: #123 (Customer Profile API v2.1 deployment)
- Blocks: #125 (Alert delivery implementation)
- Related: #124 (Notification channel selection)
```

---

## Step 2: Add Comprehensive Descriptions and Checklists (5 minutes)

### Instructions

1. **Enhance one of your issues** from Step 1 with additional detail

2. **Use this prompt to add comprehensive information**:
   ```
   Enhance this GitHub issue with comprehensive details for development:

   [PASTE ONE OF YOUR GITHUB ISSUES]

   Add detailed sections for:

   **Gherkin Test Scenarios:**
   - Include key scenarios from Exercise 2
   - Format for easy reference during development

   **Design Considerations:**
   - UI/UX requirements
   - API design notes
   - Database changes needed
   - Security considerations

   **Testing Strategy:**
   - Unit test requirements
   - Integration test scenarios
   - Manual testing checklist
   - Performance testing needs

   **Compliance Requirements:**
   - Regulatory requirements (FINRA, TCPA, etc.)
   - Audit logging specifications
   - Data retention policies
   - Security controls needed

   **Implementation Notes:**
   - Suggested technical approach
   - Code patterns to follow
   - Integration points
   - Error handling requirements

   Keep format suitable for GitHub markdown with clear sections and checklists.
   ```

3. **Review the enhanced issue**:
   - Does it provide enough context for a developer to start work?
   - Are compliance requirements clearly documented?
   - Is the testing strategy comprehensive?

### Checkpoint ✓
After 5 minutes total (10 minutes elapsed), you should have:
- [ ] Enhanced issue with Gherkin scenarios
- [ ] Design considerations documented
- [ ] Comprehensive testing strategy
- [ ] Compliance requirements specified
- [ ] Implementation guidance provided

### Tips
- Include enough detail so a developer unfamiliar with the project can understand requirements
- Reference specific Gherkin scenarios for testing guidance
- Always include compliance considerations for financial services projects

### What Good Looks Like
**Example Enhanced Section:**
```markdown
## Gherkin Test Scenarios
Key scenarios from acceptance criteria testing:

```gherkin
Scenario: Customer sets valid balance threshold
  Given I am logged in as customer "John Smith" with account "AC-789012"
  When I enter threshold amount "$500.00" and save
  Then the threshold is saved and confirmation displays
  And the change is logged for audit purposes
```

## Compliance Requirements
- **FINRA Rule 4512:** All threshold changes must be logged with timestamp, user ID, old value, new value
- **Data Retention:** Audit logs must be retained for 7 years
- **Security:** Customer data must be encrypted at rest and in transit
- **Access Control:** Only account owner can modify their own thresholds

## Testing Strategy
**Unit Tests:**
- [ ] Threshold validation (valid range, format checking)
- [ ] Audit logging functionality
- [ ] Error message generation

**Integration Tests:**
- [ ] Customer Profile Service API integration
- [ ] Database persistence verification
- [ ] Audit service integration

**Manual Testing:**
- [ ] UI responsiveness and user experience
- [ ] Error handling and recovery
- [ ] Cross-browser compatibility
```

---

## Step 3: Generate Labels, Linking, and Project Metadata (5 minutes)

### Instructions

1. **Create a comprehensive labeling and linking strategy** for your issues

2. **Use this prompt to generate project metadata**:
   ```
   Create comprehensive GitHub project metadata for these issues:

   [PASTE YOUR 2-3 GITHUB ISSUES]

   Generate:

   **Label Strategy:**
   - Priority labels (critical, high, medium, low)
   - Type labels (feature, bug, enhancement, documentation)
   - Component labels (frontend, backend, api, database)
   - Status labels (ready, in-progress, review, blocked)
   - Compliance labels (audit-required, security-review, regulatory)

   **Issue Linking:**
   - Dependencies between issues
   - Parent/child relationships
   - Related issues in same epic
   - Blocking relationships

   **Project Organization:**
   - Milestone assignments
   - Sprint planning considerations
   - Team assignment recommendations
   - Priority and sequencing

   **GitHub Project Board:**
   - Column structure (Backlog, Ready, In Progress, Review, Done)
   - Automation rules
   - Filters for different views

   Provide specific recommendations for each issue.
   ```

3. **Document the project structure**:
   - Create a labeling guide
   - Map issue dependencies
   - Plan sprint assignments

### Checkpoint ✓
After 5 minutes total (15 minutes elapsed), you should have:
- [ ] Comprehensive label strategy defined
- [ ] Issue dependencies mapped and documented
- [ ] Milestone and sprint assignments planned
- [ ] GitHub project board structure designed
- [ ] Team assignment recommendations

### Tips
- Use consistent labeling across all issues for better filtering
- Document dependencies clearly to avoid development bottlenecks
- Consider team capacity when planning sprint assignments

### What Good Looks Like
**Example Project Metadata:**
```markdown
## Label Strategy
**Priority:**
- `priority:critical` - Blocks other work or customer-facing issues
- `priority:high` - Important for current sprint
- `priority:medium` - Can be deferred if needed
- `priority:low` - Nice to have enhancements

**Type:**
- `type:feature` - New functionality
- `type:enhancement` - Improvement to existing feature
- `type:bug` - Defect fix
- `type:documentation` - Documentation updates

**Component:**
- `component:frontend` - UI/UX changes
- `component:backend` - Server-side logic
- `component:api` - API changes
- `component:database` - Schema or data changes

**Compliance:**
- `compliance:audit` - Requires audit trail
- `compliance:security` - Security review needed
- `compliance:regulatory` - Regulatory compliance required

## Issue Dependencies
**Issue #101: Customer Threshold Configuration**
- Labels: `priority:high`, `type:feature`, `component:frontend`, `component:backend`, `compliance:audit`
- Dependencies: Requires #123 (API deployment)
- Blocks: #125 (Alert delivery)
- Sprint: Sprint 12
- Assignee: Frontend + Backend pair

**Issue #102: Threshold Validation Service**
- Labels: `priority:high`, `type:feature`, `component:backend`, `compliance:security`
- Dependencies: None (can start immediately)
- Enables: #101 (Threshold configuration)
- Sprint: Sprint 11
- Assignee: Backend developer

## Project Board Structure
**Columns:**
1. **Backlog** - Prioritized work not yet ready
2. **Ready** - Meets definition of ready, can be started
3. **In Progress** - Currently being worked
4. **Review** - Code complete, pending review
5. **Testing** - In QA validation
6. **Done** - Deployed and verified

**Automation Rules:**
- Move to "In Progress" when issue assigned
- Move to "Review" when PR created
- Move to "Done" when PR merged and deployed
```

---

## Exercise Complete!

### Deliverables Checklist
- [ ] 2-3 well-structured GitHub issues with comprehensive descriptions
- [ ] All issues include user stories, acceptance criteria, and definition of done
- [ ] One issue enhanced with Gherkin scenarios and implementation details
- [ ] Complete labeling strategy defined
- [ ] Issue dependencies mapped and documented
- [ ] Sprint and milestone planning recommendations

### Time Check
If you completed in 15 minutes: Excellent organization and efficiency!  
If you took longer: Focus on using templates and prompts effectively  
If you finished early: Create additional issues or enhance the project board structure

### Self-Review Prompts
Before considering issues complete, ask:

**For Issue Quality:**
- Can a developer unfamiliar with the project understand what needs to be built?
- Are acceptance criteria specific enough to determine when work is complete?
- Is all compliance and regulatory context included?
- Are dependencies clearly identified?

**For Project Organization:**
- Is the labeling strategy consistent and useful for filtering?
- Are issue dependencies realistic and well-documented?
- Is the sprint planning realistic given team capacity?
- Will the project board provide good visibility into progress?

### How to Create Actual Issues in GitHub

1. **Navigate to your repository's Issues tab**
2. **Click "New Issue" button**
3. **Copy your markdown content** into the issue description
4. **Add appropriate labels** from your strategy
5. **Set milestone** if sprint planning is ready
6. **Link related issues** using "Closes #123" or "Related to #124"
7. **Assign to team members** if assignments are determined

### Linking Related Issues

**In issue descriptions, use:**
- `Closes #123` - This issue closes/fixes issue #123
- `Depends on #124` - This issue cannot start until #124 is complete
- `Blocks #125` - Issue #125 cannot start until this is complete
- `Related to #126` - These issues are related but not dependent

**GitHub will automatically:**
- Create visual links between issues
- Update status when linked issues are closed
- Show dependency relationships in project boards

### Advanced Labeling Strategy

**For Financial Services Projects:**
```markdown
Labels by Priority:
- priority:p0 (production issues)
- priority:p1 (current sprint critical)
- priority:p2 (current sprint important)
- priority:p3 (future sprint)

Labels by Risk:
- risk:high (significant delivery or compliance risk)
- risk:medium (moderate risk factors)
- risk:low (minimal risk)

Labels by Compliance:
- compliance:finra (FINRA regulatory requirements)
- compliance:tcpa (TCPA compliance needed)
- compliance:gdpr (GDPR data privacy requirements)
- compliance:sox (SOX compliance needed)
```

### Troubleshooting

**Issues are too vague:** Add more specific acceptance criteria and technical details

**Missing dependencies:** Financial services projects always have dependencies - review system integrations carefully

**Labels are inconsistent:** Create a labeling guide and ensure all team members follow it

**Sprint planning is unrealistic:** Consider team capacity, dependencies, and complexity when assigning to sprints

### What Good Looks Like in Production

**High-Quality Issues:**
- Clear, actionable titles
- Complete user stories with business value
- Specific, testable acceptance criteria
- Comprehensive compliance documentation
- Realistic effort estimates
- Well-documented dependencies

**Effective Project Organization:**
- Consistent labeling for easy filtering
- Clear dependency relationships
- Realistic sprint planning
- Good visibility into progress
- Proper team assignments

### Key Takeaways
- GitHub issues are the bridge between requirements and development
- Comprehensive descriptions reduce back-and-forth questions during development
- Good labeling and linking strategy improves project visibility and planning
- Financial services requires special attention to compliance documentation
- Well-structured issues enable better sprint planning and team coordination

### Next Steps
- Review all exercises and ensure deliverables are complete
- Prepare for peer review and feedback session
- Consider how these artifacts will be used in actual sprint planning
- Plan follow-up sessions for more advanced backlog management topics