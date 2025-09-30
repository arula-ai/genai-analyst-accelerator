# Homework: Generate Custom Definition of Ready & Definition of Done
**Time Estimate:** 30 minutes

## Objective
Use Copilot to create team-specific DoR and DoD checklists tailored to your environment. This assignment teaches you to customize generic frameworks for your specific context, create actionable criteria, balance thoroughness with practicality, and incorporate industry-specific requirements.

## Assignment

### Part 1: Definition of Ready (15 minutes)

Create a DoR customized for your team and organizational context that specifies when a user story is ready for sprint planning.

**Step 1: Gather Context (2 minutes)**
Before prompting Copilot, identify your specific context:
- Industry/domain (financial services, healthcare, retail, etc.)
- Team composition (developers, QA, UI/UX, etc.)
- Technology stack (web apps, mobile, APIs, etc.) 
- Compliance requirements (SOX, HIPAA, PCI-DSS, etc.)
- Current pain points (stories too vague, missing dependencies, etc.)

**Step 2: Generate Initial DoR (8 minutes)**

Use this customizable prompt template:

```
You are a business analyst working in a [YOUR CONTEXT: e.g., "regulated financial services environment with SOX compliance requirements" or "fast-paced B2B SaaS startup" or "healthcare system with HIPAA requirements"].

Create a Definition of Ready checklist that specifies when a user story is ready for sprint planning.

Our team context:
- **Industry:** [your industry with specific regulatory requirements]
- **Team:** [your team composition - BA, developers, QA, UX, etc.]
- **Technology:** [web apps/mobile/APIs/legacy systems/etc.]
- **Common Issues:** [current pain points - vague requirements, missing dependencies, unclear acceptance criteria, etc.]

Include these sections:

1. **Requirements Clarity** (story format, business value, INVEST compliance)
2. **Acceptance Criteria** (quantity, format, specificity requirements)
3. **Dependencies & Constraints** (internal/external/technical dependencies)
4. **Non-Functional Requirements** (performance, security, compliance specific to our domain)
5. **Artifacts & Traceability** (what documentation must be linked and available)
6. **Team Readiness** (SME review, stakeholder approval, estimation readiness)
7. **[YOUR DOMAIN-SPECIFIC SECTION]** (e.g., "Compliance Requirements" for regulated industries, "Security Review" for fintech, "Accessibility Requirements" for public sector)

For each criterion:
- Make it **specific and actionable** (not vague - include clear pass/fail criteria)
- Explain **WHY it matters** in our specific context
- Provide **an example** of what "complete" looks like
- Indicate **who is responsible** for verifying each item

Format as a comprehensive checklist with explanatory notes that our team can actually use in sprint planning.

Constraints:
- Keep total items to 15-20 (comprehensive but not overwhelming)
- Focus on preventing our specific pain points
- Include realistic quality gates for our environment
- Balance rigor with development velocity
```

**Step 3: Refine for Specificity (5 minutes)**

Review the initial DoR and refine it with follow-up prompts:

```
Review this Definition of Ready for specific improvements:

[PASTE YOUR INITIAL DOR]

Our team frequently struggles with:
1. [Specific pain point #1 - e.g., "Stories that seem clear but have hidden dependencies on other teams"]
2. [Specific pain point #2 - e.g., "Acceptance criteria that can't be tested without prod data"]
3. [Specific pain point #3 - e.g., "Performance requirements that are too vague to implement"]

Enhance the DoR to specifically address these issues:
- Add criteria that would catch these problems early
- Make existing criteria more specific where they relate to our pain points
- Suggest how to verify each criterion during backlog refinement
- Keep the total checklist length reasonable (15-20 items maximum)

For any new criteria added, explain how it prevents the specific pain point.
```

### Part 2: Definition of Done (15 minutes)

Create a DoD that specifies when a user story is considered complete and ready for release.

**Step 1: Generate Initial DoD (8 minutes)**

```
You are a business analyst working in a [YOUR CONTEXT].

Create a Definition of Done checklist that specifies when a user story is considered complete and ready for release.

Our delivery context:
- **Environment:** [your environment - enterprise/startup/agency/etc.]
- **Release Cycle:** [weekly releases/monthly/quarterly/continuous deployment]
- **Quality Gates:** [code review/automated testing/manual QA/UAT/security review/etc.]
- **Compliance Needs:** [regulatory/audit/security requirements]
- **Documentation Standards:** [what docs are required/maintained]

Include these sections:

1. **Development Complete** (code written, reviewed, merged to main branch)
2. **Testing Complete** (unit tests, integration tests, UAT scenarios verified)
3. **Documentation Updated** (user documentation, technical documentation, API documentation, runbooks)
4. **Acceptance Criteria Verified** (all AC tested and passing, demo-ready)
5. **Non-Functional Requirements Met** (performance tested, security verified, compliance checked)
6. **Compliance & Audit** (evidence collected, requirements traced, approvals obtained)
7. **Deployment Ready** (deployed to staging, release notes updated, rollback plan prepared)
8. **[YOUR CONTEXT-SPECIFIC SECTION]** (e.g., "Regulatory Documentation" for compliance, "Accessibility Verified" for public sector)

Make it specific to business analyst involvement:
- **What artifacts must the BA create or update?**
- **What reviews must the BA participate in or lead?**
- **What evidence must the BA collect or verify?**
- **What stakeholder approvals must the BA obtain?**

Format requirements:
- Specify **who** is responsible for each item (Dev/QA/BA/PO/etc.)
- Include **verification criteria** (how do you know it's done?)
- Add **realistic timelines** (when in the sprint this should happen)
- Make it **actionable** (clear steps, not vague statements)

Target: 20-25 criteria that actually get used, not 40 theoretical requirements.
```

**Step 2: Customize for Your Role (7 minutes)**

Enhance the DoD to clarify BA responsibilities:

```
Refine this Definition of Done to clarify the business analyst's specific responsibilities:

[PASTE YOUR INITIAL DOD]

Our BA role includes:
- [Your specific responsibilities - requirements analysis/stakeholder communication/UAT coordination/process documentation/etc.]
- [Your quality gates - story review/acceptance testing/stakeholder demo/documentation approval/etc.]
- [Your deliverables - requirements docs/test cases/user guides/process flows/etc.]

For each DoD item:
1. **Clarify BA ownership:** What specifically must the BA complete vs verify that others completed?
2. **Add verification steps:** How does the BA confirm each item is truly complete?
3. **Include timing:** When during the sprint should BA tasks be completed?
4. **Add quality standards:** What does "good enough" look like for each BA deliverable?

Focus on making the BA's role clear and actionable, not just comprehensive.
```

---

## Deliverables

Create two files with your customized frameworks:

### File 1: `definition-of-ready-[YOURNAME].md`

Include:
- **Your Customized DoR:** Complete checklist with explanatory notes
- **Context Summary:** Brief description of your environment and why you made specific customizations  
- **Usage Guide:** How your team should use this DoR in practice
- **Example Story:** A sample story that meets this DoR with annotations showing compliance

### File 2: `definition-of-done-[YOURNAME].md`

Include:
- **Your Customized DoD:** Complete checklist with roles and verification steps
- **Context Summary:** Brief description of your delivery environment and customizations made
- **BA Responsibilities:** Clear summary of what the BA owns vs collaborates on
- **Evidence Examples:** What "done" documentation looks like for your context

---

## Success Criteria

Your customized DoR/DoD should be:

- [ ] **Specific to your context** (not generic - includes your industry, compliance, technology)
- [ ] **Actionable** (clear pass/fail criteria, specific verification steps)
- [ ] **Comprehensive** (covers all critical aspects without being overwhelming)
- [ ] **Realistic** (achievable by your team with current processes and tools)
- [ ] **Supported by rationale** (explains why each criterion matters in your environment)
- [ ] **Role-specific** (clear responsibilities for BAs vs other team members)
- [ ] **Practical** (15-25 items that will actually get used, not 40 theoretical requirements)

**Quality indicators:**
- References specific tools, systems, or processes your organization uses
- Addresses known pain points your team experiences
- Includes industry-specific compliance or regulatory requirements
- Balances quality standards with delivery velocity
- Could be adopted by your team without major process changes

---

## Refinement Prompts

Use these follow-up prompts if your initial output needs improvement:

### If output is too generic:
```
This DoR is too generic and could apply to any team. Make it specific to [YOUR DOMAIN/INDUSTRY]. Include actual tools, systems, compliance requirements, and processes we use.

Example: Instead of "code review complete" say "code review approved in GitHub by at least one senior developer with security focus for any changes touching PII or financial data."

Include references to:
- Our specific tools: [list your tools]
- Our compliance requirements: [list requirements]  
- Our known problem patterns: [list issues]
```

### If missing your industry context:
```
Add a section specific to [YOUR COMPLIANCE/INDUSTRY REQUIREMENTS]: 

For [financial services]: Include SOX controls, audit trail requirements, segregation of duties
For [healthcare]: Include HIPAA considerations, PHI handling, breach notification
For [government]: Include ATO requirements, accessibility standards, security controls

What unique requirements do we have that generic teams don't face?
```

### If too lengthy or overwhelming:
```
This DoR has 30+ items and would overwhelm our team. Prioritize this into:

**Core Requirements (8-10 items):** Must-have criteria that prevent major issues
**Standard Requirements (5-8 items):** Important quality gates for most stories  
**Enhanced Requirements (3-5 items):** Additional criteria for complex or high-risk stories

Mark items as "Required for all stories" vs "Required for [specific story types]."
```

### If verification steps are unclear:
```
For each criterion in this DoD, add specific verification guidance:

- **Who verifies:** Which role is responsible
- **When verified:** At what point in the sprint
- **How verified:** Specific steps or evidence required
- **Evidence:** What artifact proves this is complete

Example: "UAT scenarios verified" becomes:
- Who: BA reviews with QA, PO approves
- When: Before story moved to "Ready for Release"  
- How: All scenarios executed in staging environment
- Evidence: Test execution report with screenshots attached to story
```

---

## Why This Matters

Generic DoR/DoD checklists fail because:

**Every team operates differently:**
- Different tools require different verification steps
- Different industries have different compliance needs  
- Different team structures create different responsibilities
- Different technology stacks have different quality gates

**One-size-fits-all creates problems:**
- Teams ignore criteria that don't apply to them
- Missing criteria that are critical for their context
- Unclear ownership leads to gaps in execution
- Unrealistic standards that slow delivery without adding value

**Customized frameworks provide value:**
- Teams actually use criteria that solve their specific problems
- Clear ownership reduces miscommunication and gaps
- Appropriate rigor for the risk level and compliance requirements
- Continuous improvement based on team's actual pain points

Copilot can help you create the RIGHT checklist for YOUR context, not just adapt a generic template.

---

## Bonus Activities

If you complete the core assignment early:

### 1. Team Validation
Share your DoR/DoD with your actual team (or a colleague) and get feedback:

```
Review this Definition of Ready for our team:

[PASTE YOUR DOR]

Our team composition: [describe your team roles and experience]
Our common pain points: [list current issues with story quality/completion]
Our current process: [describe how you currently do backlog refinement/sprint planning]

Suggest:
1. Items that might be missing given our specific pain points
2. Items that might be unrealistic for our current maturity/capacity
3. Items that need clearer criteria or examples
4. Items that should be moved from "required" to "recommended"
5. Any criteria that don't add value for our context

Provide specific recommendations for improvement.
```

### 2. Implementation Planning
Create an adoption plan for your team:

```
Create an implementation plan for rolling out these DoR/DoD frameworks:

[PASTE YOUR DOR AND DOD]

Our current state: [describe current practices]
Our team's change tolerance: [conservative/moderate/aggressive]

Provide:
1. **Phased rollout plan:** What to implement first vs later
2. **Training needed:** What team members need to learn
3. **Tool changes:** Any updates to JIRA/Azure DevOps/etc.
4. **Success metrics:** How to measure if the frameworks are working
5. **Adjustment process:** How to refine based on team experience

Make it realistic for our team to adopt successfully.
```

### 3. Quality Metrics
Design measurement approaches:

```
Design quality metrics to measure the effectiveness of these DoR/DoD frameworks:

[PASTE YOUR FRAMEWORKS]

Create metrics for:
1. **DoR Effectiveness:** How well it prevents downstream issues
2. **DoD Completeness:** How well it ensures quality delivery
3. **Team Adoption:** Whether the team actually uses the frameworks
4. **Delivery Impact:** Effect on velocity, quality, and stakeholder satisfaction

For each metric, specify:
- How to measure it (specific data points)
- What good/bad performance looks like
- How often to review and adjust
- Who owns the measurement and improvement

Focus on leading indicators (prevent problems) not just lagging indicators (measure results).
```

---

## Remember

The goal isn't to create perfect frameworks, but to build sustainable practices that improve your daily requirements work while fitting your actual environment and constraints. The best DoR/DoD is the one your team will consistently use and continuously improve.