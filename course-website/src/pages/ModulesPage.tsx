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
      'Remind the cohort that DuckDB in the devcontainer is the only approved engine - never aim prompts at production endpoints',
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
        'Execute queries against DuckDB in the devcontainer and store row counts plus EXPLAIN output in validation_log.csv',
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
      'DuckDB-ready devcontainer instructions on the Setup page',
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
    title: 'Legacy Logic Analysis & Data Mapping',
    status: 'Critical',
    duration: '30 minutes (3 x 10-minute tasks)',
    focus: 'Business logic discovery, data flow tracing, and analyst-ready modernization prep',
    description:
      'Pair Copilot Chat with legacy artifacts to document business rules, map data movement, and assemble a data requirements package engineers can build from.',
    keySkills: [
      'Translate COBOL routines into plain-language business rules and decision points',
      'Trace upstream/downstream data dependencies and record them in mapping templates',
      'Capture assumptions, gaps, and owner follow-ups inside a data requirements package',
      'Coordinate with partners to align modernization outcomes without writing the replacement code yourself',
    ],
    copilotSurfaces: ['Copilot Chat in VS Code', 'Copilot PR Review on GitHub.com'],
    slashCommands: ['/explain', '#codebase cobol_src/interest-adjustment.cbl', '/doc', '@workspace module4_modernization/golden_dataset'],
    contextCues: [
      'Reference cobol_src/interest-adjustment.cbl with #codebase when prompting for walkthroughs',
      'Point Copilot at module4_modernization/golden_dataset/ and legacy-cobol-jcl-sample/ to reason about data structures and job context',
      'Store findings in the change-control log and data requirements template so engineers see analyst context',
    ],
    lab: {
      name: 'Legacy Logic Discovery Lab',
      scenario:
        'Start with the Open Mainframe Project interest-adjustment COBOL sample, document the business logic, map data flow, and assemble a stakeholder-ready data requirements package.',
      deliverables: [
        'Plain-language walkthrough covering inputs, calculations, decision branches, and outputs',
        'Data flow map that captures upstream/downstream systems, tables, and transformation notes',
        'Data requirements package listing fields, quality rules, ownership, and open questions',
        'Change-control log entries summarizing risks, mitigations, and stakeholder follow-ups',
        'Optional Copilot PR Review summary highlighting analyst findings for engineering partners',
      ],
      prompts: [
        'Discovery: /explain cobol_src/interest-adjustment.cbl with an emphasis on business outcomes and hidden assumptions',
        'Mapping: Ask Copilot to draft a data flow table referencing @workspace module4_modernization/golden_dataset/sample_transactions.csv',
        'Documentation: Use /doc to build the data requirements package and call out risks plus SME questions',
      ],
      validation: [
        'Cross-check mapped fields against the golden dataset to ensure calculations align with expected outputs',
        'Review assumptions and gaps with a peer or SME before finalizing the package',
        'Ensure change-control log references risk ratings, mitigations, and approval status',
      ],
    },
    rubric: [
      'Business logic summary conveys decisions, inputs, and outputs without relying on code snippets',
      'Data flow map traces dependencies, sources, and consumers with ownership identified',
      'Data requirements package lists fields, quality rules, and outstanding questions with clear actions',
    ],
    metricsFocus: [
      'Time-to-first-complete data requirements draft',
      'Number of dependencies identified before engineering handoff',
      'Parity or quality issues flagged from legacy analysis prior to modernization',
    ],
    trackFit: ['Session 1 · Foundations & Legacy Discovery', 'Session 2 · Data Requirements & Governance'],
    assets: [
      'Open Mainframe COBOL sample under module4_modernization/cobol_src/',
      'Analyst-ready COBOL + JCL repo template in legacy-cobol-jcl-sample/',
      'Data flow and requirements templates in the accelerator package',
      'Change-control log template detailed below',
      'Legacy Modernization Field Guide with governance tips',
    ],
    readinessSignals: [
      '□ Business logic walkthrough captures inputs, decision points, and outputs in plain language',
      '□ Data flow map lists systems, tables, and handoffs with owners identified',
      '□ Data requirements package highlights gaps, risks, and mitigation plans for partners',
    ],
    stretchIdeas: [
      'Interview a domain SME and incorporate their insights into the requirements package',
      'Compare multiple COBOL jobs to spot shared dependencies and consolidation opportunities',
      'Pilot the documentation flow on a live modernization backlog item after the lab',
    ],
    content: {
      readme: module4Readme,
      files: [
        { name: 'COBOL Source Example (interest-adjustment.cbl)', content: module4Cobol },
        { name: 'Change Control Log', content: module4ChangeLog },
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
        <Badge className="bg-[#FF930F] text-white">Curriculum Blueprint</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Module Playbooks</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Each module combines prompt scaffolds, hands-on labs, and review rituals paced for two 75-minute live sessions plus self-paced homework. Scroll through the modules to see skills, 10-minute sprint tasks, and the evidence you must capture.
        </p>
      </div>

      <Card className="mb-12 border border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader className="space-y-3 text-center">
          <CardTitle className="text-2xl text-slate-900 dark:text-white">How to Use This Page</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Click a module to jump to its section. Each block outlines skills, labs, validation steps, and readiness signals, plus the Copilot surface, 10-minute sprint tasks, slash commands to rehearse, and evidence artifacts to capture.
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
