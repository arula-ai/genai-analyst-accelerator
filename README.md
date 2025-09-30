# GitHub Copilot for Business & Systems Analysts - Hands-On Lab

## Overview

Welcome to the GitHub Copilot for Business & Systems Analysts training lab! This hands-on repository is designed to help Business Analysts, Systems Analysts, Product Owners, and QA/UAT leads learn how to leverage GitHub Copilot to transform raw inputs into well-formed requirements artifacts.

In this 75-minute session, you'll learn practical techniques for using AI-assisted tools to accelerate your requirements documentation work while maintaining quality, compliance, and traceability.

## Learning Objectives

By the end of this session, you will be able to:

1. **Generate structured requirements artifacts** - Transform unstructured meeting notes and policy documents into epics, user stories, and acceptance criteria
2. **Apply quality frameworks** - Use INVEST principles, Definition of Ready, and Given/When/Then patterns to ensure artifact quality
3. **Maintain traceability** - Link source documentation through stories to test cases for audit and impact analysis
4. **Leverage AI safely** - Follow security and governance guidelines for using Copilot in regulated environments

## Target Audience

This lab is designed for:
- Business Analysts and Systems Analysts
- Product Owners and Product Managers
- QA/UAT leads and Test Analysts
- Anyone responsible for requirements documentation

**Prerequisites:** Basic familiarity with user stories and agile concepts. No coding experience required.

## Session Duration

- **Total Time:** 75 minutes
- **Hands-On Lab:** 40 minutes
- **Format:** Self-paced with two learning paths

## Quick Start

### Step 1: Verify Prerequisites

Before beginning, ensure you have:

- [ ] GitHub Copilot Business/Enterprise license active
- [ ] VS Code or JetBrains IDE installed
- [ ] GitHub Copilot extension installed and enabled
- [ ] Access to this training repository
- [ ] Public Code Filter enabled
- [ ] Markdown preview working in IDE

**Need help?** See [setup/prerequisites.md](setup/prerequisites.md) for detailed checklist.

### Step 2: Complete Setup

Follow the setup guide to configure your environment:

1. Install Copilot extension → [setup/copilot-setup.md](setup/copilot-setup.md)
2. Enable Public Code Filter
3. Test that Copilot is working
4. Review security guidelines → [SECURITY.md](SECURITY.md)

**Verification:** Ask Copilot to "create a sample user story for customer login." If you get a response, you're ready!

### Step 3: Choose Your Path

This lab offers two paths - choose the one that best matches your daily work:

#### **Path A: Backlog from Meeting Notes** 
*Best for: Product-focused analysts, POs, backlog managers*

Transform messy stakeholder meeting notes into:
- Well-formed epics with business value
- INVEST-compliant user stories
- Gherkin acceptance criteria
- GitHub Issues ready for development

**Time:** 40 minutes hands-on  
**Start here:** [path-a-backlog/README.md](path-a-backlog/README.md)

#### **Path B: Process & Data Documentation**
*Best for: Systems analysts, integration specialists, QA leads*

Transform policy documents into:
- Mermaid flowcharts (basic and swimlane)
- OpenAPI data contracts
- UAT test cases
- Requirements traceability matrices

**Time:** 40 minutes hands-on  
**Start here:** [path-b-process-data/README.md](path-b-process-data/README.md)

**Can't decide?** If you work more with stakeholder conversations and product backlogs, choose Path A. If you work more with technical documentation and system integration, choose Path B.

## Repository Navigation

```
copilot-analysts-lab/
├── README.md (you are here)
├── lab-guide.md (detailed walkthrough of entire session)
├── setup/ (prerequisite checklist and Copilot configuration)
├── path-a-backlog/ (Product backlog path: epics, stories, issues)
├── path-b-process-data/ (Systems path: flowcharts, contracts, UAT)
├── homework/ (post-session practice assignments)
├── resources/ (reference guides: prompts, Gherkin, Mermaid, OpenAPI)
└── SECURITY.md (governance & security guidelines)
```

### Each Path Contains:

- **inputs/** - Sample documents to work from (meeting notes or policies)
- **templates/** - Reusable formats for your artifacts
- **prompts/** - Detailed prompt guides for working with Copilot
- **exercises/** - Step-by-step hands-on exercises with timing
- **solutions/** - Example artifacts showing what good looks like

## Session Structure

### Segment 1: Why It Matters (00:00 - 10:00)
*Delivered as presentation - not in this repository*
- Why AI-assisted analysis
- Real-world use cases
- ROI and efficiency gains

### Segment 2: Patterns & Guardrails (10:00 - 25:00)
*Reference materials in `/resources`*
- The five-part prompt pattern
- Verify-before-commit checklist
- Security and governance
- INVEST criteria review
- Given/When/Then format

**Key Resource:** [resources/prompt-pattern-guide.md](resources/prompt-pattern-guide.md)

### Segment 3: Hands-On Lab (25:00 - 65:00)
*Choose Path A or Path B*
- Complete 3 exercises at your own pace
- Use templates and prompt guides
- Compare with solution examples
- Checkpoints throughout

**Detailed Guide:** [lab-guide.md](lab-guide.md)

### Segment 4: Debrief & Peer Review (65:00 - 75:00)
*Facilitated discussion*
- Share one artifact (2x2 feedback)
- Lessons learned
- Next steps
- Homework overview

## Getting Help

### During the Session

- **Stuck on setup?** See [setup/copilot-setup.md](setup/copilot-setup.md) troubleshooting section
- **Copilot not working?** See [resources/copilot-troubleshooting.md](resources/copilot-troubleshooting.md)
- **Common issues:** Each exercise has a "Troubleshooting" section
- **Need examples?** Check the `/solutions` folder for your path

### Common Issues

| Issue | Quick Fix |
|-------|-----------|
| Copilot not suggesting | Check status bar (bottom right), restart extension |
| Suggestions are vague | Add more context to your prompt, use examples |
| Wrong format | Show exact template in prompt: "Use this format: [paste]" |
| Output cut off | Ask "continue from where you stopped" |

**Full troubleshooting guide:** [resources/copilot-troubleshooting.md](resources/copilot-troubleshooting.md)

### After the Session

- Review the homework assignments
- Join internal Copilot community/Slack channel
- Consult GitHub Copilot documentation: https://docs.github.com/copilot
- Contact your Copilot Program Office for questions

## Post-Session Learning

### Homework Assignments

Continue practicing with these assignments (30-45 minutes each):

1. **[Critique & Refine](homework/critique-prompts.md)** - Use Copilot's critique capability to identify gaps in requirements
2. **[Requirements Traceability Matrix](homework/rtm-exercise.md)** - Build automated traceability from source to test
3. **[Custom DoR/DoD](homework/dor-dod-exercise.md)** - Generate team-specific Definition of Ready and Definition of Done

### Additional Resources

- **[Prompt Pattern Guide](resources/prompt-pattern-guide.md)** - Master the five-part prompt pattern with 15+ examples
- **[Gherkin Reference](resources/gherkin-reference.md)** - Complete guide to writing testable acceptance criteria
- **[Mermaid Reference](resources/mermaid-reference.md)** - Diagram syntax for flowcharts and process documentation
- **[OpenAPI Basics](resources/openapi-basics.md)** - Data contract fundamentals for API documentation

### How to Continue Learning

**Week 1:** Complete all three homework assignments  
**Week 2:** Apply techniques to one real work item  
**Week 3:** Share your experience with your team  
**Month 2:** Experiment with custom prompts for your specific domain

**Pro tip:** Keep a "prompt library" document with prompts that work well for your context. Share with your team!

## Important Guidelines

### Security & Governance

**Before using Copilot on real work:**

1. **Never include PII or sensitive data** in prompts - Always sanitize first
2. **Enable Public Code Filter** - Required for regulated environments  
3. **Verify before committing** - Use [setup/verify-before-commit-checklist.md](setup/verify-before-commit-checklist.md)
4. **Maintain traceability** - Document sources and rationale in commits
5. **Apply professional judgment** - You own the quality, not Copilot

**Read this first:** [SECURITY.md](SECURITY.md) - Complete security and governance guidelines

### Quality Standards

All Copilot-generated artifacts must meet these criteria:

- **INVEST-compliant** (for user stories)
- **Testable and specific** (acceptance criteria)
- **Traceable to source** (meeting notes, policy docs, requirements)
- **Free of PII** (synthetic data only)
- **Reviewed by you** (professional judgment applied)

**Checklist:** [setup/verify-before-commit-checklist.md](setup/verify-before-commit-checklist.md)

## Support & Feedback

### Need Help?

- **Technical issues:** Contact your IT support or Copilot admin
- **Copilot license:** Check with your GitHub organization admin  
- **Training questions:** Reach out to training facilitator
- **Security/compliance:** Contact your Compliance or InfoSec team

### Feedback

We want to hear from you! Share feedback on:
- What worked well in this lab
- What could be improved
- Additional use cases you'd like to see
- Suggestions for homework or resources

**Contact:** [Your training team contact info]

## License & Attribution

This training material is provided for internal use. All examples use synthetic data and are safe for practice.

When using Copilot-generated content:
- Always cite your sources (meeting notes, policy docs, requirements)
- Document rationale for decisions
- Include "Generated with GitHub Copilot" in commit messages
- Follow your organization's attribution standards

## Let's Get Started!

Ready to begin? Here's your next step:

1. ✅ Complete setup verification → [setup/prerequisites.md](setup/prerequisites.md)
2. 🛠️ Configure Copilot → [setup/copilot-setup.md](setup/copilot-setup.md)
3. 🔒 Review security guidelines → [SECURITY.md](SECURITY.md)
4. 🚀 Choose your path:
   - [Path A: Backlog from Notes](path-a-backlog/README.md)
   - [Path B: Process & Data](path-b-process-data/README.md)

Or jump straight to the comprehensive guide: **[lab-guide.md](lab-guide.md)**

---

**Remember:** GitHub Copilot is a powerful assistant, but you remain the expert. Trust your judgment, verify outputs, and always follow security and compliance guidelines.

Good luck, and enjoy the lab! 🎯