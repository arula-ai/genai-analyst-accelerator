# Homework: Build a Mini Requirements Traceability Matrix
**Time Estimate:** 30-45 minutes

## Objective
Create an automated traceability matrix using Copilot that links source documentation through to UAT test cases. This assignment teaches you to systematically extract requirements, create bidirectional traceability, perform gap analysis, and maintain documentation standards for regulated environments.

## Assignment

### Step 1: Select Your Scope (5 minutes)

Choose one project scope to work with:

**Option A: Path A Lab Artifacts**
- Use your Automated Account Alerts stories from the lab
- Source: `/path-a-backlog/inputs/stakeholder-notes.md`
- Stories: Your lab-generated epics and user stories

**Option B: Path B Lab Artifacts**  
- Use your Customer Onboarding stories from the lab
- Source: `/path-b-process-data/inputs/onboarding-policy.md`
- Stories: Your lab-generated process and data stories

**Option C: Current Project** 
- Use 3-4 related stories from your actual work
- Source: Any policy document, meeting notes, or requirement specification
- **Important:** Sanitize all PII and proprietary information first

**For this exercise, you need:**
- 1 source document (5-10 paragraphs of requirements text)
- 3-4 user stories with acceptance criteria
- 2-3 data elements per story
- Identification of test scenarios

### Step 2: Generate RTM with Copilot (20 minutes)

**Step 2a: Extract Requirements (8 minutes)**

First, systematically identify distinct requirements from your source material:

```
You are a business analyst creating a requirements traceability matrix for audit purposes in a regulated environment.

Analyze this source documentation and extract distinct, atomic requirements:

**Source Documentation:**
[PASTE: Your selected policy excerpt, meeting notes, or requirement specification - 5-10 paragraphs]

Extract distinct requirements that:
1. Represent a single, testable business rule or capability
2. Are specific enough to be implemented and verified
3. Can be traced to user stories and test cases
4. Follow the pattern: "The system shall/must [specific behavior] [under specific conditions]"

Provide output in this format:

| Req ID | Source Section | Requirement Description |
|--------|---------------|------------------------|
| REQ-001 | [Section/paragraph reference] | [Specific requirement statement] |
| REQ-002 | [Section/paragraph reference] | [Specific requirement statement] |

Requirements to extract:
- Functional capabilities (what the system does)
- Business rules (decision logic, validation rules)
- Non-functional requirements (performance, security, compliance)
- Data requirements (what information must be captured/validated)
- Integration requirements (external system interactions)

Target: 5-8 distinct requirements total
```

**Step 2b: Create the Full RTM (12 minutes)**

Now create the complete traceability matrix:

```
Using the requirements extracted above and these user stories, create a comprehensive Requirements Traceability Matrix:

**Extracted Requirements:**
[PASTE: Your requirements table from Step 2a]

**User Stories:**
[PASTE: Your 3-4 stories with IDs and acceptance criteria]

Create an RTM in this format:

| Req ID | Source Section | Requirement Description | Story ID | AC | Data Fields | Suggested UAT Cases | Status |
|--------|---------------|------------------------|----------|----|----|-------------------|--------|

Requirements for the RTM:
1. **Map each requirement** to one or more user stories (show the relationship)
2. **Link to specific acceptance criteria** (AC1, AC2, etc. from each story)
3. **Identify data fields involved** (customer name, account balance, alert threshold, etc.)
4. **Suggest UAT test case names** (descriptive names only, not full test cases)
5. **Assign status:** 
   - ✅ Complete: Story exists with full AC and suggested tests
   - ⚠️ In Progress: Story exists but AC incomplete 
   - ⏳ Pending: Requirement identified but no story created yet
   - ❌ Blocked: Cannot proceed due to dependency or unclear requirement

6. **Ensure every story traces back** to at least one source requirement
7. **Flag orphaned items:**
   - Requirements without stories
   - Stories without clear source requirements

After the table, provide:
- **Coverage Summary:** % requirements mapped, % stories traced, total test cases suggested
- **Forward Traceability:** Do all requirements have implementing stories?
- **Backward Traceability:** Do all stories trace to documented requirements?
```

### Step 3: Enhance the RTM (10 minutes)

**Step 3a: Add Priority Assessment (5 minutes)**

Enhance your RTM with business priority analysis:

```
Analyze this Requirements Traceability Matrix and add a Priority column:

[PASTE: Your RTM from Step 2b]

Add priority based on these criteria:
- **Critical (P1):** Compliance/regulatory requirements, core functionality, security controls
- **High (P2):** Key business features, customer-facing capabilities, data integrity
- **Medium (P3):** Process improvements, usability enhancements, integration features  
- **Low (P4):** Nice-to-have features, future enhancements, edge case handling

For each requirement, provide:
- Priority rating (P1-P4)
- Brief rationale for the priority assignment
- Impact if this requirement is not implemented

Update the RTM table with the new Priority column.
```

**Step 3b: Risk Assessment (5 minutes)**

Add risk analysis to identify implementation challenges:

```
For this enhanced RTM, identify implementation risks and mitigation strategies:

[PASTE: Your prioritized RTM]

For each requirement, assess:
- **Technical Risk:** Integration complexity, technology constraints, performance concerns
- **Business Risk:** Unclear requirements, missing SME input, changing priorities  
- **Compliance Risk:** Regulatory interpretation, audit requirements, documentation needs
- **Dependency Risk:** External systems, other teams, data availability

Provide risk analysis in this format:

| Req ID | Risk Level | Risk Type | Risk Description | Mitigation Strategy |
|--------|------------|-----------|------------------|-------------------|
| REQ-001 | HIGH | Technical | Legacy system integration | Early spike, backup manual process |

Risk Levels: HIGH (could block delivery), MEDIUM (creates delay risk), LOW (manageable)
```

### Step 4: Generate Gap Report (10 minutes)

Perform comprehensive gap analysis to identify traceability issues:

```
Analyze this complete Requirements Traceability Matrix for gaps and quality issues:

[PASTE: Your final RTM with priorities and risks]

Provide a detailed gap analysis report covering:

**1. Requirements Coverage Gaps**
- Requirements with no implementing stories
- Requirements covered by only one acceptance criterion (single point of failure)
- Critical requirements (P1) that are Pending or Blocked

**2. Story Traceability Gaps**  
- Stories that don't trace back to documented requirements
- Stories with weak traceability (vague source references)
- Stories that seem to exceed their source requirement scope

**3. Test Coverage Gaps**
- Requirements with no suggested test cases
- Complex requirements with insufficient test scenarios
- Missing negative/edge case test coverage

**4. Data Consistency Issues**
- Data fields referenced in multiple requirements but defined differently
- Missing data validation requirements
- Data fields in stories not traced to source requirements

**5. Integration Gaps**
- Requirements that affect multiple stories but lack coordination
- Cross-story dependencies not documented in RTM
- External system requirements without clear ownership

**6. Compliance Gaps** (for regulated environments)
- Requirements with compliance implications but no audit trail
- Missing documentation for regulatory requirements
- Insufficient evidence collection for compliance verification

For each gap identified, provide:
- **Impact:** What could go wrong if this gap isn't addressed?
- **Recommended Action:** Specific steps to close the gap
- **Owner:** Who should be responsible for resolution?
- **Timeline:** When should this be addressed?

Conclude with an overall assessment:
- RTM completeness score (1-10)
- Top 3 risks to address immediately  
- Recommendations for maintaining RTM going forward
```

---

## Deliverable

Create a file named `my-traceability-matrix.md` with these sections:

### 1. Project Overview
- Scope selected (Path A, B, or custom)
- Source documentation used
- Stories included in analysis

### 2. Requirements Extraction  
- Table of extracted requirements with source references
- Methodology notes (how you identified atomic requirements)

### 3. Complete RTM
- Full traceability matrix with all columns
- Coverage metrics summary

### 4. Risk & Priority Analysis
- Priority assignments with rationale
- Risk assessment with mitigation strategies

### 5. Gap Analysis Report
- Detailed findings from Step 4
- Prioritized action items
- Overall quality assessment

### 6. Lessons Learned
- What surprised you about the traceability analysis?
- Which gaps would you have missed without systematic analysis?
- How would you modify this process for your real work?

---

## Success Criteria

Your RTM should demonstrate:
- [ ] **Complete forward traceability:** Every requirement maps to implementing stories
- [ ] **Complete backward traceability:** Every story traces to source requirements  
- [ ] **Detailed linking:** Specific AC and data fields identified for each mapping
- [ ] **Realistic test coverage:** 1-3 UAT scenarios per requirement based on complexity
- [ ] **Risk awareness:** High-risk items identified with mitigation strategies
- [ ] **Gap identification:** Systematic analysis reveals 3-5 specific gaps needing attention
- [ ] **Professional format:** Clean markdown tables suitable for stakeholder review

**Quality indicators:**
- 5-8 distinct requirements (not too granular, not too high-level)
- 90%+ traceability coverage (few orphaned items)
- Balanced priority distribution (not everything is Critical)
- Specific, actionable gap recommendations
- Clear rationale for all assessments

---

## Why This Matters

Requirements traceability is essential in regulated environments for:

**Audit Compliance:**
- Demonstrate that all requirements are implemented and tested
- Provide evidence trail for regulatory inspections
- Show due diligence in requirements management

**Impact Analysis:**
- Understand what changes when a requirement changes
- Assess testing impact of requirement modifications
- Plan release scope based on requirement dependencies

**Quality Assurance:**
- Ensure comprehensive test coverage
- Identify requirements at risk of being overlooked
- Verify that development matches original intent

**Project Management:**
- Track implementation progress against original scope
- Identify bottlenecks and dependency issues
- Communicate status to stakeholders with confidence

**Knowledge Management:**
- Preserve rationale for design decisions
- Enable effective onboarding of new team members
- Support maintenance and enhancement planning

---

## Bonus Challenge

If you complete the core exercise early, try this advanced analysis:

```
Convert this RTM into a visual traceability diagram using Mermaid notation:

[PASTE: Your complete RTM]

Create a flowchart that shows the relationships between:
- Source documents (rectangles)
- Requirements (rounded rectangles)  
- User stories (diamonds)
- Test cases (circles)

Use different colors or styles to indicate:
- Priority levels (P1-P4)
- Status (Complete, In Progress, Pending, Blocked)
- Risk levels (High, Medium, Low)

Include:
- Directional arrows showing traceability flow
- Groupings for related requirements
- Legend explaining the notation

This visual representation helps stakeholders understand the requirements structure at a glance and makes gap analysis more intuitive.
```

**Additional Advanced Exercises:**

1. **Cross-Project Impact Analysis:** How would adding a new requirement affect your existing RTM?

2. **Maintenance Planning:** Create a process for keeping your RTM current as requirements evolve

3. **Tool Integration:** Research how your RTM could integrate with JIRA, Azure DevOps, or other tools your organization uses

---

## Tips for Success

**If Copilot extracts too many requirements:**
```
These requirements are too granular. Combine related items into higher-level requirements that each represent a complete business capability. Target 5-8 requirements total, not 15-20 detailed rules.
```

**If traceability seems forced:**
```
Some of these story-to-requirement mappings seem artificial. Flag stories that don't clearly trace to documented requirements - this might indicate scope creep or missing requirements documentation.
```

**If test scenarios are too generic:**
```
These test case names are too vague. Make them specific enough that a tester could write detailed test steps. Example: Instead of "Test login" use "Test login with valid credentials returns dashboard within 3 seconds"
```

The key is building a systematic approach to traceability that you can apply consistently across projects, not just creating a perfect document for this exercise.