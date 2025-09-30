# Path B: Process Documentation & Data Contracts

## Overview

Path B focuses on using GitHub Copilot to transform complex policy documents and business requirements into structured process documentation, data contracts, and comprehensive test scenarios. This path is designed for systems analysts who need to bridge the gap between business policies and technical implementation.

## What You'll Learn

By completing Path B, you will master using GitHub Copilot to:

1. **Create Process Flowcharts:** Transform verbose policy text into clear, visual Mermaid flowcharts that show decision points, swimlanes, and error handling paths
2. **Generate Data Contracts:** Extract data elements from requirements and create comprehensive OpenAPI specifications with validation rules and examples
3. **Build UAT Test Cases:** Generate thorough user acceptance test scenarios that trace back to specific policy requirements
4. **Establish Traceability:** Create requirements traceability matrices (RTM) that link policy requirements through stories to test cases

## Path Structure

```
path-b-process-data/
├── inputs/
│   └── onboarding-policy.md       # Source policy document (realistic complexity)
├── templates/
│   ├── mermaid-flowchart-template.md      # Flowchart patterns & syntax
│   ├── openapi-contract-template.yaml     # Data contract examples
│   ├── uat-test-case-template.md          # UAT scenario format
│   └── traceability-matrix-template.md    # RTM structure
├── prompts/
│   ├── 01-flowchart-generation-prompts.md    # Process visualization prompts
│   ├── 02-data-contract-prompts.md           # Schema generation prompts
│   └── 03-uat-traceability-prompts.md        # Testing & traceability prompts
├── exercises/
│   ├── exercise-1-process-flow.md      # 15 min: Flowchart generation
│   ├── exercise-2-data-contracts.md    # 12 min: Data schema creation
│   └── exercise-3-traceability-uat.md  # 13 min: Testing & links
└── solutions/
    ├── sample-flowchart-basic.md        # Basic process flow
    ├── sample-flowchart-swimlanes.md    # Advanced swimlane diagram
    ├── sample-data-contract.yaml        # Complete OpenAPI spec
    ├── sample-uat-scenarios.md          # Comprehensive test cases
    └── sample-traceability-matrix.md    # Full RTM example
```

## Time Allocation (40 minutes total)

- **25:00-40:00** - Exercise 1: Process Flow Generation (15 minutes)
- **40:00-52:00** - Exercise 2: Data Contracts (12 minutes)  
- **52:00-65:00** - Exercise 3: Traceability & UAT (13 minutes)

## Scenario Context

All exercises use a **Customer Onboarding & Identity Verification** scenario from a regulated financial services environment. The source policy document (`inputs/onboarding-policy.md`) contains:

- 7 detailed policy sections with decision rules
- Compliance requirements (FINRA, BSA, PATRIOT Act)
- SLA requirements and error handling procedures
- Data retention and audit trail specifications
- Real-world complexity with some intentional ambiguity

This mirrors actual systems analyst work where you must:
- Interpret complex regulatory policies
- Design technical processes that ensure compliance
- Create data contracts for system integration
- Establish comprehensive testing strategies

## How to Use This Path

### Before You Start
1. Review `inputs/onboarding-policy.md` to understand the business context
2. Scan the template files to see expected output formats
3. Have Copilot Chat open and ready to use
4. Keep the prompt guides handy for reference

### During Exercises
- **Read the full exercise instructions first** - timing is important
- **Use the provided prompts** - they're optimized for quality output
- **Check your work at each checkpoint** - course-correct if needed
- **Don't aim for perfection** - focus on learning the patterns

### Success Metrics
You'll know you're succeeding when:
- Your flowcharts clearly show decision points and error paths
- Your data contracts include proper validation and examples
- Your UAT scenarios trace back to specific policy requirements
- Your artifacts would be usable by developers and testers

## Key Skills for Systems Analysts

This path teaches critical analyst skills:

**Process Analysis:** Breaking down complex workflows into understandable steps with clear decision criteria and exception handling.

**Data Modeling:** Identifying data elements, relationships, and constraints that support business processes while ensuring data quality.

**Test Design:** Creating comprehensive test scenarios that validate both functional requirements and edge cases while maintaining traceability.

**Requirements Traceability:** Linking business policies through technical specifications to test cases, enabling impact analysis and audit compliance.

## Why These Skills Matter

In regulated environments like financial services, systems analysts must:
- **Ensure Compliance:** Every system change must demonstrate adherence to regulatory requirements
- **Enable Auditability:** Clear traceability from requirements to implementation to testing
- **Reduce Risk:** Comprehensive analysis prevents costly compliance failures
- **Bridge Teams:** Translate between business stakeholders and technical implementers

GitHub Copilot accelerates this work while maintaining quality and consistency.

## Tips for Success

1. **Context is King:** The more specific context you provide to Copilot about the business domain and compliance requirements, the better your output
2. **Iterate and Refine:** Use Copilot's critique capabilities to identify gaps and improve your artifacts
3. **Think Systematically:** Each artifact should support the others - flowcharts inform data contracts, which inform test cases
4. **Document Decisions:** Always include rationale for why you structured something a particular way

## Getting Help

- **During exercises:** Reference the prompt guides and templates
- **Stuck on syntax:** Check the resource files in `/resources`
- **Need examples:** Look at the solution files (but try first!)
- **Copilot issues:** See `/resources/copilot-troubleshooting.md`

---

Ready to transform complex policies into structured technical documentation? Start with Exercise 1!