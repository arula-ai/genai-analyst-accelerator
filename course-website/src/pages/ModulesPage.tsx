import {
  Activity,
  Beaker,
  ClipboardList,
  Compass,
  FileSpreadsheet,
  Flame,
  Lightbulb,
  MessageSquare,
  Network,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';

import MarkdownContent from '@/components/markdown-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Import module content
import module1Readme from '@content/modules/module-1-prompt-engineering/README.md?raw';
import module1Prompts from '@content/modules/module-1-prompt-engineering/prompts/summary-and-sql.md?raw';
import module1Validation from '@content/modules/module-1-prompt-engineering/checklists/sql-validation-log.md?raw';
import module1Dataset from '@content/modules/module-1-prompt-engineering/datasets/README.md?raw';

import module2Readme from '@content/modules/module-2-automation/README.md?raw';
import module2Prompts from '@content/modules/module-2-automation/prompts/excel-variance.md?raw';
import module2Scorecard from '@content/modules/module-2-automation/scorecards/automation-review.md?raw';

import module4Readme from '@content/modules/module-4-legacy-modernization/README.md?raw';
import module4ChangeLog from '@content/modules/module-4-legacy-modernization/templates/change-control-log.md?raw';
import module4Cobol from '@content/modules/module-4-legacy-modernization/legacy/interest-adjustment.cbl?raw';
import businessLogicSummaryTemplate from '@content/resources/templates/business-logic-summary.md?raw';
import dataFlowMapTemplate from '@content/resources/templates/data-flow-map.md?raw';
import smeQuestionLogTemplate from '@content/resources/templates/sme-question-log.md?raw';
import requirementsPackageTemplate from '@content/resources/templates/requirements-package.md?raw';
import jclAnalystPrimer from '@content/resources/jcl-analyst-primer.md?raw';

import module5Readme from '@content/modules/module-5-governance/README.md?raw';
import module5Template from '@content/modules/module-5-governance/templates/hallucination-report.md?raw';
import module5Register from '@content/modules/module-5-governance/registers/accuracy-register.csv?raw';

type CourseModule = {
  id: string;
  order: string;
  title: string;
  status: 'Critical' | 'Core' | 'Optional';
  duration: string;
  focus: string;
  description: string;
  keySkills: string[];
  copilotSurfaces: string[];
  slashCommands: string[];
  contextCues: string[];
  lab: {
    name: string;
    scenario: string;
    deliverables: string[];
    prompts: string[];
    validation: string[];
  };
  rubric: string[];
  metricsFocus: string[];
  trackFit: string[];
  assets: string[];
  readinessSignals: string[];
  stretchIdeas: string[];
  actionSteps?: string[];
  content: {
    readme: string;
    files: Array<{ name: string; content: string }>;
  };
};


const modules: CourseModule[] = [
  {
    id: 'module-1',
    order: 'Module 1',
    title: 'Prompt Engineering Essentials',
    status: 'Core',
    duration: '30 minutes (3 x 10-minute tasks)',
    focus: 'Copilot prompt scaffolds, DuckDB validation, and SQL linting discipline',
    description:
      'Within 30 minutes, teams restate analytical requirements with Copilot Chat, ground SQL in metadata via @workspace, and verify outputs locally in DuckDB with SQLFluff enforcing lint gates.',
    actionSteps: [
      'Open the SynthRetail data_dictionary.md, validation_log.csv, and your local DuckDB workspace to confirm DuckDB tooling and SQLFluff are ready.',
      'Draft the stakeholder briefing prompt in Copilot Chat referencing @workspace data_dictionary.md and clarifying audience, constraints, and validation expectations.',
      'Generate the first SQL query with Copilot, run SQLFluff on the diff, and prompt for fixes until lint errors clear.',
      'Execute the query in DuckDB, capture row counts and an EXPLAIN screenshot, and log anomalies or edge cases.',
      'Record findings in validation_log.csv with reviewer initials, then repeat the prompt → lint → execute loop for the remaining queries.',
      'Store DuckDB outputs, explain artifacts, and lint status alongside the SQL files for evidence.',
      'Document one prompt conversation in the module README showing the initial ask, Copilot revisions, and final accepted answer.',
    ],
    keySkills: [
      'Translate stakeholder asks into Copilot-ready prompts that list roles, inputs, constraints, and validation expectations',
      'Leverage @workspace and #codebase tags to keep SQL grounded in the SynthRetail data dictionary and validation log',
      'Use DuckDB to execute and profile queries offline while capturing explain plans for audit trails',
      'Automate linting and remediation with SQLFluff pre-commit hooks and Copilot-driven fixes',
    ],
    copilotSurfaces: ['Copilot Chat in VS Code'],
    slashCommands: ['/explain', '@workspace data_dictionary.md', '/tests', '/fix'],
    contextCues: [
      'Reference data_dictionary.md with @workspace before Copilot drafts SQL so table names, joins, and filters stay accurate',
      'Call #codebase notebooks/validation_log.csv to reuse prior checks and document new ones',
      'Remind the cohort that DuckDB in the sanctioned local sandbox is the only approved engine - never aim prompts at production endpoints',
    ],
    lab: {
      name: 'Dataset Briefing & SQL Quality Lab',
      scenario:
        'Use the SynthRetail_Transactions.csv metadata inside DuckDB to brief stakeholders and co-author SQL that lint cleanly before execution.',
      deliverables: [
        'Two-sentence dataset briefing with explicit constraints, bias flags, and target stakeholders',
        'Three SQL queries saved to the repo alongside DuckDB EXPLAIN screenshots',
        'Validation log capturing row counts, window edge cases, and reviewer initials',
        'SQLFluff report (pass or fail) stored from the pre-commit hook and GitHub Action run',
        'Copilot chat extract in README that shows prompt -> response -> revision for one query',
      ],
      prompts: [
        'Kickoff: /explain the analyst brief, @workspace data_dictionary.md, and flag the never-hit-prod rule',
        'Drafting: Ask Copilot Chat to propose SQL while pointing at #codebase notebooks/validation_log.csv for prior checks',
        'Audit: Run /tests to generate DuckDB validation statements and follow with /fix to remediate lint findings',
      ],
      validation: [
        'Execute queries against DuckDB in the local sandbox and store row counts plus EXPLAIN output in validation_log.csv',
        'Ensure SQLFluff passes locally and in CI before the lab is considered complete',
        'Record bias or hallucination flags in the accuracy register with remediation notes',
      ],
    },
    rubric: [
      'Inputs, constraints, and bias checks documented before sending the first Copilot prompt',
      'SQLFluff, DuckDB explain plans, and validation logs attached with traceable evidence',
      'Copilot conversation extract highlights revisions and rationale for accepting the final SQL',
    ],
    metricsFocus: [
      'Time-to-first-working-query inside DuckDB',
      'SQLFluff pass rate for generated SQL drafts',
      'Copilot suggestion acceptance rate for analytical SQL prompts',
    ],
    trackFit: ['Session 1 · Foundations & Legacy Discovery'],
    assets: [
      'Prompt scaffold walkthrough in the Prompt Clarity Blueprint',
      'SQL validation log template and example below',
      'SQLFluff configuration and CI workflow linked on the Resources page',
      'DuckDB local environment setup steps on the Setup page',
    ],
    readinessSignals: [
      '□ Prompts cite tables, filters, and constraints before Copilot executes',
      '□ Validation log includes row counts, lint status, and reviewer initials',
      '□ README stores the Copilot prompt -> revision trail with acceptance rationale',
    ],
    stretchIdeas: [
      'Pair teams to swap datasets and repeat the lab with new business constraints',
      'Inject fair lending or KYC phrasing to test bias callouts and guardrails',
      'Chain prompts via Copilot chat history to build reusable SQL playbooks',
    ],
    content: {
      readme: module1Readme,
      files: [
        { name: 'Prompt Templates', content: module1Prompts },
        { name: 'SQL Validation Log', content: module1Validation },
        { name: 'Dataset Dictionary', content: module1Dataset },
      ],
    },
  },
  {
    id: 'module-2',
    order: 'Module 2',
    title: 'Automating Everyday Data Tasks',
    status: 'Optional',
    duration: '30 minutes (optional homework sprints)',
    focus: 'Copilot CLI automation with governance guardrails and PR review rituals',
    description:
      'Build a weekly margin refresh script with Copilot CLI, keep changes auditable through dry-run logs, and lean on Copilot PR Review to summarize diffs while secret scanning and OIDC keep credentials safe.',
    actionSteps: [
      'Open accelerator/module2_automation/weekly_margin, margin_spec.md, and the sample dry-run workflow to align on requirements.',
      'Run `copilot suggest` referencing @workspace margin_spec.md to scaffold the weekly refresh script with config inputs, logging, and a `--dry-run` flag.',
      'Use `copilot explain` to inspect the diff, refining prompts until retries include guardrails for secrets, retries, and error handling.',
      'Execute `copilot tests --dry-run` and save the console output as the dry-run evidence log.',
      'Commit the script plus dry-run log, then open a pull request that links back to the spec and guardrail files.',
      'Request Copilot PR Review, address the summary feedback, and capture the reviewer disposition inside the PR.',
      'Validate secret scanning and push protection triggered (or are enforced) and store the screenshot or audit event in the module folder.',
      'Use Copilot Chat to draft release notes referencing the dry-run result, guardrail evidence, and any follow-up tasks.',
    ],
    keySkills: [
      'Scaffold Python or SQL automation via Copilot CLI with logging, dry-run flags, and configuration prompts',
      'Capture Copilot CLI edits and explanations before any code executes',
      'Drive GitHub.com PR reviews with Copilot summaries, inline suggestions, and reviewer decisions',
      'Enable secret scanning, push protection, and OIDC workflows to prevent credential leaks',
    ],
    copilotSurfaces: ['Copilot CLI', 'Copilot PR Review on GitHub.com', 'Copilot Chat in VS Code'],
    slashCommands: ['copilot suggest', 'copilot explain', 'copilot tests --dry-run', '/summary', '/fix'],
    contextCues: [
      'Work inside accelerator/module2_automation/weekly_margin and reference margin_spec.md with @workspace',
      'Call #codebase ci/dry-run-workflow.yml when prompting for automation guardrails',
      'Highlight secret scanning and push protection requirements in every Copilot prompt',
    ],
    lab: {
      name: 'Weekly Margin Automation Lab',
      scenario:
        'Generate a weekly ETL refresh script with Copilot CLI, review it in a secured PR, and prove governance guardrails fired during the workflow.',
      deliverables: [
        'Dry-run execution log stored alongside the generated script',
        'GitHub Pull Request with Copilot PR Review summary and reviewer disposition',
        'Secret scanning or push protection screenshot proving guardrails were active',
        'Release notes drafted with Copilot Chat that reference the dry-run log and risk posture',
      ],
      prompts: [
        'CLI: copilot suggest a weekly refresh script referencing @workspace margin_spec.md and requiring --dry-run logging',
        'Follow-up: copilot explain the generated diff and list configuration values that must remain secret',
        'PR: Ask Copilot about this diff to summarize changes and surface potential risks or missing tests',
      ],
      validation: [
        'Run the script with copilot tests --dry-run to confirm logging and idempotence',
        'Ensure secret scanning and push protection are enabled; document proof in the repo',
        'Use Copilot PR Review to confirm the summary covers OIDC authentication and rollback steps',
      ],
    },
    rubric: [
      'Dry-run log attached with zero production connections attempted',
      'PR includes Copilot summary, reviewer decision, and next steps',
      'Secret scanning, push protection, and OIDC evidence are captured in submissions',
    ],
    metricsFocus: [
      'Manual versus automated runtime for the weekly refresh',
      'PR review turnaround and number of Copilot suggestions accepted',
      'Secrets blocked or prevented by push protection during the exercise',
    ],
    trackFit: ['Optional Homework'],
    assets: [
      'Automation Cookbook recipes for CLI prompts and reviewer scorecards',
      'Automation review scorecard shown below',
      'Sample dry-run GitHub Actions workflow under module2_automation/ci/',
      'Secret scanning and push protection setup notes on the Governance page',
    ],
    readinessSignals: [
      '□ Copilot CLI prompts reference margin_spec.md and dry-run expectations',
      '□ Pull request includes Copilot summary plus human reviewer verdict',
      '□ Secret scanning evidence stored alongside the automation deliverables',
    ],
    stretchIdeas: [
      'Connect the automation to a staging DuckDB database and compare results',
      'Layer business glossary tags to teach Copilot domain language in the CLI',
      'Simulate a secret leak and walk through the escalation and rollback workflow',
    ],
    content: {
      readme: module2Readme,
      files: [
        { name: 'Excel Automation Prompts', content: module2Prompts },
        { name: 'Automation Review Scorecard', content: module2Scorecard },
      ],
    },
  },
  {
    id: 'module-4',
    order: 'Module 4',
    title: 'Legacy Business Logic & Data Flow Analysis (Analyst Track)',
    status: 'Critical',
    duration: '75 minutes (2 x 10-minute sprint loops + reviews)',
    focus:
      'Reverse-engineer COBOL + JCL into plain-language business rules, map batch data flows, and assemble analyst-ready requirements packages—no refactoring required.',
    description:
      'Work through two analyst labs: first deconstruct the COBOL and JCL to explain business logic and batch orchestration, then synthesize the findings into a requirements package with SME questions, risks, and acceptance criteria for engineering intake.',
    actionSteps: [
      'Open legacy-cobol-jcl-sample/jcl/INTADJ01.jcl, the COBOL source, and the business-logic/data-flow templates side by side in VS Code.',
      'Prompt Copilot with @workspace references to outline each JCL step, associated PROC or program, and the datasets it reads or writes.',
      'Dive into interest-adjustment.cbl with Copilot to extract inputs, calculations, decision points, and edge cases in plain language.',
      'Complete the business-logic summary template, citing COBOL sections and highlighting assumptions or missing context.',
      'Map every JCL step to datasets, upstream/downstream consumers, and batch timing using the data-flow template.',
      'Assemble the requirements package with acceptance criteria, compliance notes, and links to the logic summary and data-flow artifacts.',
      'Log unresolved items in the SME question register and change-control log, then review the full packet with a peer for accuracy.',
    ],
    keySkills: [
      'Translate COBOL routines into plain-language business rules and decision points',
      'Read JCL to map job steps, datasets, and upstream/downstream dependencies',
      'Capture data requirements, acceptance criteria, and risks in analyst templates aligned to ISO/IEC/IEEE 29148',
      'Log SME follow-ups and governance evidence without generating or refactoring code',
    ],
    copilotSurfaces: ['Copilot Chat in VS Code'],
    slashCommands: ['/explain', '/doc', '@workspace legacy-cobol-jcl-sample', '#codebase governance/accuracy-register-template.csv'],
    contextCues: [
      'Reference legacy-cobol-jcl-sample/jcl/INTADJ01.jcl with @workspace before mapping batch steps',
      'Anchor prompts to the business-logic summary and data-flow templates so outputs stay structured for analysts',
      'Record risks, assumptions, and SME follow-ups in the change-control log and question log for governance review',
    ],
    lab: {
      name: 'Legacy Business Logic & Requirements Labs',
      scenario:
        'Lab 1: Deconstruct the COBOL + JCL interest-adjustment job to explain the business logic and data/batch flows. Lab 2: Turn the findings into a requirements package with acceptance criteria, SME questions, and governance notes.',
      deliverables: [
        'Business-logic summary capturing inputs, decisions, calculations, and outputs in plain language',
        'Data & batch flow map documenting steps, datasets, and read/write usage across the job',
        'Requirements package with functional rules, data definitions, acceptance criteria, and open questions',
        'SME question log with owners, due dates, and risk if unanswered',
        'Change-control log updates aligning risks, approvals, and governance evidence',
      ],
      prompts: [
        'Explain this COBOL program in business terms; list inputs, decisions, calculations, outputs, and uncertainties. Cite file and line references.',
        'Read INTADJ01.jcl and map each step: program, PROC, datasets, whether they are read or written, and downstream consumers.',
        'Draft a requirements package using the provided template, including acceptance criteria and risk/assumption notes.',
        'Propose SME follow-up questions for ambiguous fields or logic and log them in the question register.',
      ],
      validation: [
        'Review business-logic and data-flow outputs with a peer to confirm accuracy before sharing',
        'Log unresolved questions and risks in the SME register plus the accuracy register for traceability',
        'Ensure the requirements package lists acceptance criteria and links to evidence sources before handoff',
      ],
    },
    rubric: [
      'Business-logic summary traces each decision to inputs, outputs, and evidence references',
      'Data & batch flow map captures step order, datasets, and read/write intent tied to JCL evidence',
      'Requirements package lists fields, acceptance criteria, risks, and SME follow-ups aligned to governance expectations',
    ],
    metricsFocus: [
      'Time-to-first complete business-logic summary',
      'Open questions resolved before engineering intake',
      'Governance evidence logged alongside requirements artifacts',
    ],
    trackFit: ['Session 1 · Foundations & Legacy Discovery', 'Session 2 · Data Requirements & Governance'],
    assets: [
      'COBOL + JCL samples in the legacy-cobol-jcl-sample repository',
      'Business-logic summary, data-flow map, SME question log, and requirements package templates',
      'Change-control log template for risk and approval tracking',
      'JCL primer for analysts explaining job orchestration context',
    ],
    readinessSignals: [
      '□ Business-logic summary captures inputs, decision points, calculations, and outputs with references',
      '□ Data & batch flow map lists steps, datasets, and owners with upstream/downstream context',
      '□ Requirements package highlights risks, assumptions, and SME follow-ups with traceability to governance logs',
    ],
    stretchIdeas: [
      'Interview a domain SME to validate assumptions and enrich acceptance criteria',
      'Compare multiple COBOL jobs to spot shared datasets or conflicting logic across the batch schedule',
      'Pilot the documentation flow on an in-flight modernization backlog item and capture lessons learned',
    ],
    content: {
      readme: module4Readme,
      files: [
        { name: 'COBOL Source Example (interest-adjustment.cbl)', content: module4Cobol },
        { name: 'Business-Logic Summary Template', content: businessLogicSummaryTemplate },
        { name: 'Data & Batch Flow Map Template', content: dataFlowMapTemplate },
        { name: 'SME Question Log Template', content: smeQuestionLogTemplate },
        { name: 'Requirements Package Template', content: requirementsPackageTemplate },
        { name: 'Change-Control Log Template', content: module4ChangeLog },
        { name: 'JCL Primer for Analysts', content: jclAnalystPrimer },
      ],
    },
  },
  {
    id: 'module-5',
    order: 'Module 5',
    title: 'Governance & Accuracy Fundamentals',
    status: 'Core',
    duration: '30 minutes (3 x 10-minute tasks)',
    focus: 'NIST-aligned governance, prompt-injection drills, and transparency practices',
    description:
      'Codify the accuracy operating model by mapping artifacts to NIST AI RMF and Generative AI Profile controls, running prompt-injection drills, and standardizing transparency notes.',
    actionSteps: [
      'Collect the flawed AI outputs, accuracy_register.csv, and hallucination report template before starting the triage.',
      'Use Copilot /explain with #codebase accuracy_register.csv to diagnose the failure, capturing impact and suspected root cause.',
      'Populate the hallucination report with severity, customer impact, mitigation owner, and deadlines for follow-up.',
      'Update the accuracy register entry with confirmed root cause (prompt, data, or model) and link to supporting evidence.',
      'Replay the prompt-injection or adversarial input, documenting how it was detected and neutralized in line with OWASP LLM01.',
      'Build the NIST AI RMF and Generative AI Profile crosswalk matrix, mapping each artifact to the relevant control category.',
      'Append the AI-assisted transparency note to the final briefing or incident packet and route the bundle for governance sign-off.',
    ],
    keySkills: [
      'Design tiered validation plans and evidence capture across prompts, code, and narratives',
      'Detect and neutralize adversarial prompts using OWASP LLM01 tactics',
      'Map artifacts to NIST AI RMF Govern/Map/Measure/Manage and the Generative AI Profile',
      'Publish transparency notes and escalation packets with impact and deadlines',
    ],
    copilotSurfaces: ['Copilot Chat in VS Code'],
    slashCommands: ['/explain', '/doc', '/fix', '#codebase accuracy_register.csv', '#codebase hallucination_report.md'],
    contextCues: [
      'Reference accuracy_register.csv with #codebase when requesting summaries or updates',
      'Attach NIST AI RMF and Generative AI Profile sections in prompts so Copilot maps evidence correctly',
      'Append "AI-assisted" transparency notes to exported briefs and document the rationale',
    ],
    lab: {
      name: 'Accuracy Audit & Hallucination Response Lab',
      scenario:
        'Review intentionally flawed AI outputs, neutralize a prompt-injection attempt, and publish governance evidence mapped to NIST controls.',
      deliverables: [
        'Completed hallucination report with mitigation steps and severity',
        'Updated accuracy register tagging root cause (prompt, data, or model)',
        'One-page matrix showing how artifacts map to NIST AI RMF and Generative AI Profile items',
        'Transparency note embedded in the final briefing declaring AI assistance',
      ],
      prompts: [
        'Diagnosis: /explain the failure while referencing #codebase accuracy_register.csv entries',
        'Escalation: /doc an incident packet aligned to NIST Manage controls and stakeholder expectations',
        'Remediation: /fix the output while documenting how the prompt-injection was neutralized',
      ],
      validation: [
        'Replay outputs through the validation tiers (Tier 2 for analytical work, Tier 3 for modernization)',
        'Document how the adversarial prompt was detected and neutralized referencing OWASP LLM01 guidance',
        'Ensure every exported artifact includes the AI-assisted transparency statement',
      ],
    },
    rubric: [
      'Incident documentation complete with severity, impact, and mitigation timeline',
      'Root cause tagged (prompt, data, model) inside the accuracy register with evidence links',
      'Escalation packet includes impact, deadline, and decision makers per NIST Manage guidance',
    ],
    metricsFocus: [
      'Accuracy register completeness across cohorts',
      'Hallucination incidents resolved before release',
      'Escalation packet turnaround time versus agreed SLAs',
    ],
    trackFit: ['Session 2 · Data Requirements & Governance'],
    assets: [
      'Hallucination Response Playbook on the Governance page',
      'Standards crosswalk template mapping to NIST AI RMF and Generative AI Profile',
      'Prompt-injection drill scenarios sourced from OWASP LLM Top-10',
      'Accuracy register CSV and hallucination report template shown below',
    ],
    readinessSignals: [
      '□ Accuracy register entries link to evidence, reviewers, and root cause tags',
      '□ Prompt-injection drill includes detection, neutralization, and lessons learned',
      '□ Transparency note appears in every exported briefing or accuracy report',
    ],
    stretchIdeas: [
      'Simulate a cross-functional incident response with security and legal partners',
      'Integrate validation tiers into CI/CD or release workflows',
      'Nominate governance champions to own ongoing accuracy cadences after the lab',
    ],
    content: {
      readme: module5Readme,
      files: [
        { name: 'Accuracy Register Template', content: module5Register },
        { name: 'Hallucination Report Template', content: module5Template },
      ],
    },
  },
];

const statusAccent = {
  Critical: 'bg-[#FF930F] text-white',
  Core: 'bg-[#1D2E38] text-white',
  Optional: 'bg-[#6C7A86] text-white',
} as const;


export default function ModulesPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl">
      <div className="mb-12 space-y-4 text-center">
        <Badge className="bg-[#FF930F] text-white">Lab Blueprint</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Lab Playbooks</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Each lab combines prompt scaffolds, analyst walkthroughs, and review rituals paced for two 75-minute live sessions plus self-paced homework. Scroll through the labs to see skills, 10-minute sprint tasks, and the evidence you must capture.
        </p>
      </div>

      <Card className="mb-12 border border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader className="space-y-3 text-center">
          <CardTitle className="text-2xl text-slate-900 dark:text-white">How to Use This Page</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Click a lab to jump to its section. Each block outlines focus skills, sprint loops, validation steps, and readiness signals, plus the Copilot surface, 10-minute sprint prompts, and evidence artifacts to capture.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-center gap-2 text-sm">
          {modules.map((module) => (
            <a
              key={module.id}
              href={`#${module.id}`}
              className="px-4 py-2 rounded-full border border-[#FF930F]/40 text-[#1D2E38] hover:bg-[#FFE7D0] transition-colors"
            >
              {module.order}: {module.title}
            </a>
          ))}
        </CardContent>
      </Card>

      <div className="space-y-12">
        {modules.map((module, index) => (
          <section key={module.id} id={module.id} className="scroll-mt-32">
            <Card className="border border-[#FF930F]/40">
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Badge className={statusAccent[module.status]}>{module.status}</Badge>
                    <Badge variant="outline" className="border-[#FF930F]/40 text-[#1D2E38]">
                      {module.duration}
                    </Badge>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{module.order}</span>
                </div>
                <div>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">{module.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    <strong>Focus:</strong> {module.focus}
                  </CardDescription>
                  {module.trackFit.length ? (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {module.trackFit.map((track) => (
                        <Badge
                          key={`${module.id}-${track}`}
                          variant="outline"
                          className="border-[#1D2E38]/30 text-[#1D2E38] bg-white/60 dark:text-white"
                        >
                          Track: {track}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </div>
                <p className="text-base text-slate-600 dark:text-slate-300">{module.description}</p>
              </CardHeader>

              <CardContent className="space-y-8">
                {module.actionSteps?.length ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                      <ClipboardList className="w-4 h-4 text-[#FF930F]" /> Action Steps
                    </div>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {module.actionSteps.map((step, idx) => (
                        <li key={`${module.id}-step-${idx}`}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                <div className="grid gap-6 xl:grid-cols-2">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                        <Sparkles className="w-4 h-4 text-[#FF930F]" /> Key Skills
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        {module.keySkills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>

                    <Separator className="bg-[#FF930F]/30" />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                          <Network className="w-4 h-4 text-[#FF930F]" /> Copilot Surfaces
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {module.copilotSurfaces.map((surface) => (
                            <span
                              key={surface}
                              className="rounded-full bg-[#FFE7D0] px-3 py-1 text-xs font-medium text-[#1D2E38] dark:bg-[#243640] dark:text-[#f6f8f9]"
                            >
                              {surface}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                          <MessageSquare className="w-4 h-4 text-[#FF930F]" /> Slash Commands & Triggers
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {module.slashCommands.map((command) => (
                            <code
                              key={command}
                              className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                            >
                              {command}
                            </code>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                          <Target className="w-4 h-4 text-[#FF930F]" /> Context Cues
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                          {module.contextCues.map((cue) => (
                            <li key={cue}>{cue}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Separator className="bg-[#FF930F]/30" />

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                        <FileSpreadsheet className="w-4 h-4 text-[#FF930F]" /> Toolkit & Assets
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        {module.assets.map((asset) => (
                          <li key={asset}>{asset}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                      <Beaker className="w-4 h-4 text-[#FF930F]" /> Hands-On Lab
                    </div>
                    <div className="bg-[#FFE7D0] rounded-lg p-5 space-y-4 text-sm text-[#1D2E38]">
                      <div>
                        <p className="font-semibold">{module.lab.name}</p>
                        <p className="mt-1 text-[#4b5a63]">{module.lab.scenario}</p>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold flex items-center gap-2">
                            <ClipboardList className="w-4 h-4" /> Deliverables
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            {module.lab.deliverables.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold flex items-center gap-2">
                            <Compass className="w-4 h-4" /> Suggested Prompts
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            {module.lab.prompts.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" /> Validation & Governance
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            {module.lab.validation.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-[#FF930F]/30" />

                <div className="grid gap-6 xl:grid-cols-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                      <Activity className="w-4 h-4 text-[#FF930F]" /> Readiness Signals
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-none pl-0">
                      {module.readinessSignals.map((signal) => (
                        <li key={signal}>{signal}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-[#FF930F]" /> What Good Looks Like
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {module.rubric.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                      <RefreshCw className="w-4 h-4 text-[#FF930F]" /> Impact Metrics
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {module.metricsFocus.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold">
                    <Flame className="w-4 h-4 text-[#FF930F]" /> Stretch the Module
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {module.stretchIdeas.map((idea) => (
                      <li key={idea}>{idea}</li>
                    ))}
                  </ul>
                </div>

                <Separator className="bg-[#FF930F]/30" />

                <div className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Module Overview</h3>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <MarkdownContent content={module.content.readme} />
                    </div>
                  </div>

                  {module.content.files.map((file, idx) => (
                    <div key={idx} className="pt-6 border-t border-slate-200 dark:border-slate-700">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{file.name}</h3>
                      <div className="prose prose-slate dark:prose-invert max-w-none">
                        <MarkdownContent content={file.content} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {index < modules.length - 1 ? <Separator className="my-12 bg-[#FF930F]/40" /> : null}
          </section>
        ))}
      </div>

      <Card className="mt-12 border border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader className="space-y-3 text-center">
          <CardTitle className="text-2xl text-slate-900 dark:text-white">Cadence Recommendations</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Plan the two 75-minute live sessions and the two-hour homework circuit using these quick references.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 lg:grid-cols-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="border border-dashed border-[#FF930F]/40 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#FF930F]" /> Session 1 · Foundations & Storytelling
              </h3>
              <p>
                75-minute live block made of seven 10-minute sprints: Module 1 prompt framing, DuckDB validation, SQLFluff fixes, then Module 4 legacy logic readout, data flow mapping, and analyst evidence capture. Close with metrics + homework preview.
              </p>
            </div>
            <div className="border border-dashed border-[#FF930F]/40 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#FF930F]" /> Session 2 · Modernization & Governance
              </h3>
              <p>
                Second 75-minute block keeps the 10-minute cadence: Module 4 COBOL walkthrough, Python refactor scaffold, parity tests, then Module 5 incident triage, NIST/ISO crosswalk, and transparency planning. Finish with session metrics and next steps.
              </p>
            </div>
            <div className="border border-dashed border-[#FF930F]/40 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#FF930F]" /> Homework Circuit · 120 Minutes
              </h3>
              <p>
                Four self-paced 30-minute sprints: prompt diagnostics, legacy data mapping, data requirements package build, and accuracy audit. Use them to reinforce modules or assign as catch-up work between cohorts.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
