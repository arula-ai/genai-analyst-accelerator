import { type ComponentType } from 'react';
import { Link } from 'react-router-dom';
import {
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  FileBarChart2,
  GaugeCircle,
  Layers,
  LifeBuoy,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type CourseMaterial = {
  key: string;
  title: string;
  description: string;
  note?: string;
  to?: string;
  cta?: string;
};

type SupportHighlight = {
  title: string;
  description: string;
  bullets: string[];
  to: string;
  cta: string;
  icon: ComponentType<{ className?: string }>;
};

type RunbookModule = {
  id: string;
  name: string;
  time: string;
  surface: string;
  commands: string[];
  focus: string;
};

type RunbookExtra = {
  time: string;
  description: string;
  surface?: string;
  commands?: string[];
};

type RunbookTimelineItem = {
  label: string;
  duration: string;
  detail: string;
};

type Runbook = {
  id: string;
  name: string;
  duration: string;
  summary: string;
  modules: RunbookModule[];
  extras: RunbookExtra[];
  timeline: RunbookTimelineItem[];
  outcomes: string[];
};

type CurriculumModule = {
  id: string;
  title: string;
  focus: string;
  status: 'Critical' | 'Core' | 'Optional';
  time: string;
  summary: string;
  lab: string;
  outcomes: string[];
};

const learningObjectives = [
  {
    title: 'Engineer Grounded Prompts',
    description: 'Design prompts that surface assumptions, cite sources, and stay aligned with analytical goals.',
    icon: Sparkles,
  },
  {
    title: 'Automate Day-to-Day Work',
    description: 'Co-create Excel formulas, SQL, and Python snippets while enforcing data privacy guardrails.',
    icon: Workflow,
  },
  {
    title: 'Deliver Trustworthy Narratives',
    description: 'Turn dashboards into executive-ready stories backed by fact checks and audit notes.',
    icon: FileBarChart2,
  },
  {
    title: 'Modernize Legacy Logic',
    description: 'Translate COBOL and JCL into modern patterns with clear risk analysis and documentation.',
    icon: Layers,
  },
  {
    title: 'Govern for Accuracy',
    description: 'Detect hallucinations, validate outputs, and capture review evidence for responsible AI adoption.',
    icon: ShieldCheck,
  },
] as const;

const quickStartSteps = [
  {
    title: 'Confirm Access & Guardrails',
    description: 'Line up the right tools and remind the team where GenAI must never see sensitive data.',
    list: [
      'Verify Copilot or chat-based GenAI license and sign-in',
      'Open the Governance tab and confirm the guardrails you must follow',
      'Decide how you will capture validation notes (screenshots, shared doc, etc.)',
    ],
  },
  {
    title: 'Stage Practice Assets',
    description: 'Explore the synthetic datasets, Power BI visuals, and COBOL snippets used across labs.',
    list: [
      'Browse the Resources tab to preview datasets, visuals, and code samples',
      'Download the dashboard preview pack if you want an offline copy',
      'Skim the modernization samples highlighted on the Modules page',
    ],
  },
  {
    title: 'Load Module Playbooks',
    description: 'Open the prompt scaffolds and review checklists so you can work faster during live drills.',
    list: [
      'Open the Prompt Clarity Blueprint in the Resources tab',
      'Bookmark the Legacy Modernization Field Guide card',
      'Review the Hallucination Response workflow inside Governance',
    ],
  },
] as const;

const runbooks: Runbook[] = [
  {
    id: 'session-1',
    name: 'Session 1 · Foundations & Storytelling',
    duration: '75 minutes (7 x 10-minute tasks + flex)',
    summary:
      'Launch with Module 1 prompt discipline and Module 3 storytelling accuracy using back-to-back 10-minute micro-sprints.',
    modules: [
      {
        id: 'module-1',
        name: 'Module 1 · Prompt Engineering Essentials',
        time: '30 min (3 x 10)',
        surface: 'Copilot Chat in VS Code',
        commands: ['/explain', '@workspace data_dictionary.md', '/tests'],
        focus: 'Frame prompts, validate SQL in DuckDB, and address SQLFluff findings with Copilot.',
      },
      {
        id: 'module-3',
        name: 'Module 3 · Insight Generation & Storytelling',
        time: '30 min (3 x 10)',
        surface: 'Copilot Chat in VS Code',
        commands: ['/explain', '/doc', '@workspace powerbi_samples'],
        focus: 'Ground visuals, draft cited narratives, and update the evidence table in real time.',
      },
    ],
    extras: [
      {
        time: '10 min (2 x 5)',
        description: 'Micro-breaks and evidence logging between sprint blocks.',
      },
    ],
    timeline: [
      {
        label: 'Kickoff & guardrails reset',
        duration: '10 min',
        detail: 'Reintroduce synthetic-data rules, assign roles, and surface success metrics.',
      },
      {
        label: 'Module 1 · Prompt storyboard',
        duration: '10 min',
        detail: 'Run /explain with @workspace data_dictionary.md to restate the analyst ask.',
      },
      {
        label: 'Module 1 · DuckDB validation sprint',
        duration: '10 min',
        detail: 'Execute /tests for validation queries and log counts in validation_log.csv.',
      },
      {
        label: 'Module 1 · SQLFluff fix loop',
        duration: '10 min',
        detail: 'Use /fix to remediate lint feedback and capture revisions in the README trail.',
      },
      {
        label: 'Module 3 · Visual grounding',
        duration: '10 min',
        detail: 'Paste chart filters, title, and window into chat before asking for narrative support.',
      },
      {
        label: 'Module 3 · Copilot narrative draft',
        duration: '10 min',
        detail: 'Use /doc to produce briefing paragraphs with citations to @workspace powerbi_samples.',
      },
      {
        label: 'Module 3 · Evidence table update',
        duration: '10 min',
        detail: 'Log KPI rebuild results in evidence_table.csv and assign reviewer initials.',
      },
      {
        label: 'Wrap & homework preview',
        duration: '10 min',
        detail: 'Share blockers, note session metrics, and assign 2-hour homework checkpoints (aim to finish in 5).',
      },
    ],
    outcomes: [
      'Module 1 prompts, SQLFluff report, and validation log captured for later review.',
      'Module 3 briefing drafted with citations, KPI rebuild screenshot, and reviewer notes.',
      'Session metrics recorded (time-to-first-query, citation coverage, issues to monitor).',
    ],
  },
  {
    id: 'session-2',
    name: 'Session 2 · Modernization & Governance',
    duration: '75 minutes (7 x 10-minute tasks + flex)',
    summary:
      'Shift to Module 4 modernization parity tests and Module 5 governance drills with the same 10-minute cadence.',
    modules: [
      {
        id: 'module-4',
        name: 'Module 4 · Legacy Code Decomposition & Modernization',
        time: '30 min (3 x 10)',
        surface: 'Copilot Chat in VS Code + Copilot PR Review',
        commands: ['/explain', '/tests', '#codebase cobol_src/interest-adjustment.cbl'],
        focus: 'Explain COBOL logic, scaffold Python refactors, and prep parity harnesses.',
      },
      {
        id: 'module-5',
        name: 'Module 5 · Governance & Accuracy Fundamentals',
        time: '30 min (3 x 10)',
        surface: 'Copilot Chat in VS Code',
        commands: ['/explain', '/doc', '#codebase accuracy_register.csv'],
        focus: 'Run incident drills, map evidence to NIST/ISO controls, and draft escalation packets.',
      },
    ],
    extras: [
      {
        time: '10 min (2 x 5)',
        description: 'Micro-breaks, parity screenshot capture, and governance note logging.',
      },
    ],
    timeline: [
      {
        label: 'Re-entry & metric checkpoint',
        duration: '10 min',
        detail: 'Review session-one metrics, assign modernization roles, and set parity targets.',
      },
      {
        label: 'Module 4 · COBOL walkthrough',
        duration: '10 min',
        detail: 'Use /explain on #codebase cobol_src/interest-adjustment.cbl to produce a plain-language summary.',
      },
      {
        label: 'Module 4 · Python scaffold',
        duration: '10 min',
        detail: 'Generate Python structure and tests, noting assumptions in the change-control log.',
      },
      {
        label: 'Module 4 · Golden dataset parity',
        duration: '10 min',
        detail: 'Run parity checks against golden_dataset/ and capture diffs for the PR.',
      },
      {
        label: 'Module 5 · Incident triage drill',
        duration: '10 min',
        detail: 'Review a flawed output, score severity, and update accuracy_register.csv.',
      },
      {
        label: 'Module 5 · NIST/ISO crosswalk',
        duration: '10 min',
        detail: 'Map artifacts to the governance crosswalk and fill gaps with action items.',
      },
      {
        label: 'Module 5 · Transparency & escalation',
        duration: '10 min',
        detail: 'Draft transparency notes and escalation packets using /doc with evidence paths.',
      },
      {
        label: 'Retro & next metrics',
        duration: '10 min',
        detail: 'Capture session metrics, confirm homework completion plan, and assign follow-up owners.',
      },
    ],
    outcomes: [
      'Module 4 parity tests pass with change-control log and Copilot PR summary drafted.',
      'Module 5 incident response documented with NIST/ISO crosswalk updates and transparency note.',
      'Next-step metrics defined (parity defects, escalation turnaround, homework checkpoints).',
    ],
  },
];

const curriculumModules: CurriculumModule[] = [
  {
    id: 'module-1',
    title: 'Module 1 · Prompt Engineering Essentials',
    focus: 'Copilot prompt scaffolds, DuckDB validation, and SQLFluff discipline',
    status: 'Core',
    time: '30 min live (3 x 10-minute tasks)',
    summary: 'Run Copilot Chat with /explain, @workspace data_dictionary.md, and /tests to produce DuckDB SQL that lint cleanly before execution.',
    lab: 'Hands-on: Generate a dataset briefing, validated SQL, and SQLFluff evidence',
    outcomes: [
      'Restate problem constraints with Copilot before generating SQL',
      'Validate every query in DuckDB and capture explain plans with row counts',
      'Publish SQLFluff results and Copilot prompt -> revision trail in the repo',
    ],
  },
  {
    id: 'module-2',
    title: 'Module 2 · Automating Everyday Data Tasks',
    focus: 'Copilot CLI automation, dry-run governance, and PR review rituals',
    status: 'Optional',
    time: '30 min optional (homework sprints)',
    summary: 'Use Copilot CLI to scaffold the weekly margin refresh with logging, then rely on Copilot PR Review to summarize diffs while secret scanning and OIDC guardrails stay active. Best tackled in homework sprints.',
    lab: 'Hands-on: Build the weekly refresh script, capture dry-run logs, and ship a Copilot-reviewed PR',
    outcomes: [
      'Run Copilot CLI with --dry-run logging and keep execution proof in the repo',
      'Summarize automation diffs with Copilot PR Review and capture reviewer decisions',
      'Document secret scanning, push protection, and OIDC guardrails in submissions',
    ],
  },
  {
    id: 'module-3',
    title: 'Module 3 · Insight Generation & Storytelling',
    focus: 'Canonical Power BI storytelling with fact-check loops and OWASP drills',
    status: 'Critical',
    time: '30 min live (3 x 10-minute tasks)',
    summary: 'Anchor Copilot narratives in canonical Power BI visuals, cite metrics with @workspace prompts, and log OWASP hallucination drills before publish.',
    lab: 'Hands-on: Craft a fact-checked briefing with evidence table and OWASP drill notes',
    outcomes: [
      'Paste chart metadata into Copilot to drive cited narratives',
      'Rebuild one KPI in Excel or DuckDB and attach the calculations to the evidence table',
      'Document hallucination mitigations and transparency notes before release',
    ],
  },
  {
    id: 'module-4',
    title: 'Module 4 · Legacy Code Decomposition & Modernization',
    focus: 'Open Mainframe modernization with parity tests and PR governance',
    status: 'Critical',
    time: '30 min live (3 x 10-minute tasks)',
    summary: 'Use Copilot Chat, Copilot CLI, and Copilot PR Review to translate Open Mainframe COBOL into Python with golden dataset parity and ISO/IEC risk logs.',
    lab: 'Hands-on: Modernize COBOL with parity tests, Copilot PR review, and ISO/IEC risk briefings',
    outcomes: [
      'Explain COBOL inputs, outputs, and dependencies in plain language',
      'Pass golden dataset parity tests and unit tests before requesting review',
      'Capture Copilot PR Review summary and ISO/IEC-aligned risk and rollback notes',
    ],
  },
  {
    id: 'module-5',
    title: 'Module 5 · Governance & Accuracy Fundamentals',
    focus: 'NIST-aligned governance, prompt-injection drills, and transparency practices',
    status: 'Core',
    time: '30 min live (3 x 10-minute tasks)',
    summary: 'Map artifacts to NIST AI RMF and the Generative AI Profile, neutralize prompt-injection attempts, and publish transparency notes with escalation packets.',
    lab: 'Hands-on: Run hallucination response, build the standards crosswalk, and log transparency notes',
    outcomes: [
      'Tag incidents with severity, root cause, and evidence in the accuracy register',
      'Detect and neutralize adversarial prompts while documenting OWASP LLM01 steps',
      'Publish transparency notes and escalation packets with impact and deadlines',
    ],
  },
];

const courseMaterials: CourseMaterial[] = [
  {
    key: 'lab-guide',
    title: 'Lab Guide',
    description: 'Minute-by-minute agenda embedded in this site for facilitators.',
    note: 'Review the agenda section on the Modules page before you kick off.',
    to: '/modules',
    cta: 'Preview Agenda',
  },
  {
    key: 'module-kits',
    title: 'Module Launch Kits',
    description: 'Prompt scaffolds, datasets, visuals, and modernization samples without leaving the site.',
    to: '/resources',
    cta: 'Open Resources',
  },
  {
    key: 'homework',
    title: 'Post-Lab Homework',
    description: 'Four 30-minute follow-ups (2 hours total) to extend prompting, storytelling, modernization, and governance.',
    to: '/homework',
    cta: 'View Assignments',
  },
  {
    key: 'governance',
    title: 'Governance Library',
    description: 'Accuracy logs, hallucination response workflow, and approval capture templates right on the Governance page.',
    to: '/governance',
    cta: 'Review Guardrails',
  },
];

const supportHighlights: SupportHighlight[] = [
  {
    title: 'During the Lab',
    description: 'Pull up the quick reference cards to debug prompts, scripts, and narrative drafts.',
    bullets: [
      'Start with the Prompt Clarity Blueprint to tighten intent',
      'Use the Automation Review Scorecard before running scripts',
      'Keep the Hallucination Response workflow nearby for escalations',
    ],
    to: '/resources',
    cta: 'Browse References',
    icon: LifeBuoy,
  },
  {
    title: 'Stay Grounded',
    description: 'Apply validation loops and governance patterns while experimenting with GenAI.',
    bullets: [
      'Log every AI-assisted decision in the accuracy register',
      'Document reviewers, test cases, and source data for each artifact',
      'Escalate policy questions when prompts brush against restricted data',
    ],
    to: '/governance',
    cta: 'Open Governance Hub',
    icon: ClipboardCheck,
  },
  {
    title: 'Keep Practicing',
    description: 'Use the 2-hour homework circuit (four 30-minute sprints) to cement the skills where your teams need them most.',
    bullets: [
      'Run prompt diagnostics on your own datasets in 30-minute bursts',
      'Draft exec-ready stories from current dashboards with evidence logs',
      'Refine modernization and governance artefacts before the next release',
    ],
    to: '/homework',
    cta: 'Plan Homework',
    icon: BrainCircuit,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <Badge className="mb-2 bg-[#FF930F] text-white text-xs sm:text-sm">Two-Session Program</Badge>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1D2E38] leading-tight px-2"
            style={{
              background: 'linear-gradient(90deg, #FF930F 0%, #1D2E38 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Build Core GenAI Skills for Analytical Teams
          </h2>
          <p className="text-sm sm:text-lg text-[#4b5a63] max-w-2xl mx-auto px-2">
            Work through two 75-minute live sessions focused on core modules, then complete a 2-hour homework circuit to cement prompting, storytelling, modernization, and governance techniques.
          </p>
        </div>
      </section>

      {/* Runbook Tracks */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-3">
            <Badge className="bg-[#1D2E38] text-white text-xs sm:text-sm">Plan Your Sessions</Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1D2E38]">Two 75-Minute Runbooks</h3>
            <p className="text-sm sm:text-base text-[#4b5a63] max-w-3xl mx-auto">
              Follow these back-to-back 75-minute agendas. Each runbook breaks modules into 10-minute sprints, calls out the Copilot surface to launch, lists the slash commands to rehearse, and reminds you which evidence to capture.
          </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            {runbooks.map((runbook) => (
              <Card key={runbook.id} className="border-2 border-[#FF930F]/40">
                <CardHeader className="space-y-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="text-lg sm:text-xl text-[#1D2E38]">{runbook.name}</CardTitle>
                    <Badge variant="outline" className="border-[#FF930F]/40 text-[#1D2E38] text-xs sm:text-sm">
                      {runbook.duration}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-[#4b5a63] leading-relaxed">
                    {runbook.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-[#4b5a63]">
                  <div className="space-y-3">
                    {runbook.modules.map((module) => (
                      <div key={module.id} className="rounded-lg border border-[#1D2E38]/12 bg-[#fdf7f0] p-3 sm:p-4">
                        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-start">
                          <p className="font-semibold text-[#1D2E38] sm:pr-6">{module.name}</p>
                          <Badge className="bg-[#FF930F] text-[#1D2E38] text-[11px] sm:text-xs self-start sm:self-center">
                            {module.time}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm mt-2">{module.focus}</p>
                        <Separator className="my-3" />
                        <div className="grid gap-2 text-xs sm:text-sm">
                          <p>
                            <span className="font-semibold text-[#1D2E38]">Copilot surface:</span> {module.surface}
                          </p>
                          <p>
                            <span className="font-semibold text-[#1D2E38]">Slash commands:</span> {module.commands.join(', ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {runbook.extras.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-[#1D2E38]">Additional Blocks</h4>
                      <ul className="space-y-1 text-xs sm:text-sm">
                        {runbook.extras.map((extra, index) => (
                          <li key={`${runbook.id}-extra-${index}`} className="rounded-md border border-dashed border-[#FF930F]/40 px-3 py-2 bg-white/60">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                              <span className="font-semibold text-[#1D2E38]">{extra.description}</span>
                              <Badge variant="outline" className="text-xs border-[#FF930F]/40 text-[#1D2E38]">
                                {extra.time}
                              </Badge>
                            </div>
                            {extra.surface && (
                              <p className="mt-1 text-xs sm:text-sm">
                                <span className="font-semibold text-[#1D2E38]">Surface:</span> {extra.surface}
                              </p>
                            )}
                            {extra.commands && (
                              <p className="text-xs sm:text-sm">
                                <span className="font-semibold text-[#1D2E38]">Slash commands:</span> {extra.commands.join(', ')}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="rounded-lg bg-[#1D2E38] text-white p-3 sm:p-4 space-y-2">
                    <p className="text-sm font-semibold">What good looks like</p>
                    <ul className="space-y-1 text-xs sm:text-sm">
                      {runbook.outcomes.map((outcome) => (
                        <li key={outcome}>□ {outcome}</li>
                      ))}
                    </ul>
                  </div>

                  <Link to={`/modules#${runbook.modules[0]?.id ?? 'module-1'}`} className="block">
                    <Button className="w-full text-sm" style={{ backgroundColor: '#FF930F', color: '#1D2E38' }}>
                      Load Module Playbooks
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2E38] mb-6 sm:mb-8 text-center">What You&apos;ll Master</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
            {learningObjectives.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="border border-[#1D2E38]/10 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF930F] text-white flex items-center justify-center mb-2 sm:mb-3 shadow-sm">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-[#1D2E38]">{title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-xs sm:text-sm text-[#4b5a63]">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2E38] mb-3 sm:mb-4 text-center">Quick Start Checklist</h3>
          <p className="text-center text-sm sm:text-base text-[#4b5a63] mb-6 sm:mb-8 px-2">
            You already cloned everything you need. Use this checklist to prep the environment and avoid scrambling once the timer starts.
          </p>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {quickStartSteps.map((step, index) => (
              <Card key={step.title} className="border border-[#1D2E38]/12 shadow-sm">
                <CardHeader className="pb-3 sm:pb-6">
                  <Badge
                    className="mb-2 w-fit text-xs sm:text-sm"
                    style={{ backgroundColor: index === 0 ? '#1D2E38' : '#FF930F', color: '#f6f8f9' }}
                  >
                    Step {index + 1}
                  </Badge>
                  <CardTitle className="text-base sm:text-lg text-[#1D2E38]">{step.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-[#4b5a63]">{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-xs sm:text-sm text-[#4b5a63] space-y-2 pt-0">
                  <ul className="space-y-1">
                    {step.list.map((item) => (
                      <li key={item}>□ {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1D2E38] mb-2">Curriculum Roadmap</h3>
            <p className="text-sm sm:text-base text-[#4b5a63]">
              Modules 3 and 4 are mandatory for certification. Module 2 is optional and can be swapped for real-world datasets once the core skills land.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            {curriculumModules.map((module) => (
              <Card
                key={module.id}
                className={`border-2 ${
                  module.status === 'Critical' ? 'border-[#FF930F]/60' : module.status === 'Optional' ? 'border-[#1D2E38]/30' : 'border-[#FF930F]/30'
                } hover:border-[#FF930F]/70 transition-colors`}
              >
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <Badge
                      className={`text-xs sm:text-sm ${
                        module.status === 'Critical'
                          ? 'bg-[#FF930F] text-white'
                          : module.status === 'Optional'
                          ? 'bg-[#1D2E38] text-white'
                          : 'bg-[#CC6E00] text-white'
                      }`}
                    >
                      {module.status}
                    </Badge>
                    <Badge variant="outline" className="border-[#FF930F]/40 text-[#1D2E38] text-xs sm:text-sm">
                      {module.time}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-[#1D2E38]">{module.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-[#4b5a63] leading-relaxed">
                    <strong>Focus:</strong> {module.focus}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 text-[#4b5a63] pt-0">
                  <p className="text-xs sm:text-sm">{module.summary}</p>
                  <div className="bg-[#FFE7D0] rounded-lg p-3 sm:p-4 text-xs sm:text-sm text-[#1D2E38]">
                    <p className="font-semibold mb-2">{module.lab}</p>
                    <ul className="space-y-1">
                      {module.outcomes.map((outcome) => (
                        <li key={outcome}>• {outcome}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/modules#${module.id}`}>
                    <Button className="w-full text-sm" style={{ backgroundColor: '#FF930F', color: '#1D2E38' }}>
                      View Module Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Materials */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2E38] mb-4 sm:mb-6 text-center">Course Materials at a Glance</h3>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courseMaterials.map((item) => (
              <Card key={item.key} className="border border-[#FF930F]/25">
                <CardHeader className="space-y-2 pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg text-[#1D2E38]">{item.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-[#4b5a63]">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#4b5a63] pt-0">
                  {item.note ? <p className="text-xs sm:text-sm text-[#7e8a92] leading-snug">{item.note}</p> : null}
                  {item.to ? (
                    <Link to={item.to}>
                      <Button variant="outline" className="w-full border-[#FF930F]/40 text-[#1D2E38] text-xs sm:text-sm">
                        {item.cta}
                      </Button>
                    </Link>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-[#FF930F]/25">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl text-[#1D2E38]">Who Thrives in This Lab?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-base text-[#4b5a63]">
                {[
                  'Business & Systems Analysts',
                  'Data Analysts & Visualization Leads',
                  'Reporting & FP&A Specialists',
                  'Legacy System SMEs',
                  'Automation Product Owners',
                  'Governance & Risk Partners',
                ].map((role) => (
                  <div key={role} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF930F] flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{role}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-3 sm:my-4 bg-[#FF930F]/40" />
              <p className="text-xs sm:text-sm text-[#4b5a63]">
                <strong>Prerequisites:</strong> Comfortable with spreadsheets or SQL basics, familiar with at least one legacy process you&apos;d like to modernize, and ready to document validation notes as you go.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Session Structure */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1D2E38]">Session Structure Reference</h3>
            <p className="text-sm sm:text-base text-[#4b5a63] max-w-3xl mx-auto">
              Use these timelines to pace your cohort. Each slot is a 10-minute sprint highlighting the Copilot surface and ritual to emphasize so facilitators can keep the room aligned.
          </p>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            {runbooks.map((runbook) => (
              <Card key={`${runbook.id}-timeline`} className="border border-[#FF930F]/30">
                <CardHeader className="pb-3 sm:pb-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="text-lg sm:text-xl text-[#1D2E38]">{runbook.name}</CardTitle>
                    <Badge variant="outline" className="border-[#FF930F]/40 text-[#1D2E38] text-xs sm:text-sm">
                      {runbook.duration}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-[#4b5a63]">
                    Timeboxed slots including breaks, reviews, and debriefs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    {runbook.timeline.map((item, index) => (
                      <li key={`${runbook.id}-timeline-${index}`} className="rounded-lg border border-[#FF930F]/30 bg-white/70 px-3 py-2 sm:px-4 sm:py-3">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <span className="font-semibold text-[#1D2E38] sm:pr-4">
                            {index + 1}. {item.label}
                          </span>
                          <Badge className="bg-[#FF930F] text-[#1D2E38] text-[11px] sm:text-xs">
                            {item.duration}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-[#4b5a63] mt-1 sm:mt-2">{item.detail}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Next Steps */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2E38] mb-4 sm:mb-6 text-center">Get Support & Continue Learning</h3>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {supportHighlights.map(({ icon: Icon, ...item }) => (
              <Card key={item.title} className="border border-[#FF930F]/25">
                <CardHeader className="space-y-2 sm:space-y-3 pb-3 sm:pb-6">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1D2E38] text-[#f6f8f9] flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-[#1D2E38]">{item.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-[#4b5a63]">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#4b5a63] pt-0">
                  <ul className="space-y-1">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                  <Link to={item.to}>
                    <Button variant="outline" className="w-full border-[#FF930F]/40 text-[#1D2E38] text-xs sm:text-sm">
                      {item.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border border-[#FF930F]/35 bg-white shadow-sm">
            <CardHeader className="text-center pb-3 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl text-[#1D2E38]">Ready to Dive In?</CardTitle>
              <CardDescription className="text-sm sm:text-base text-[#4b5a63]">
                Open the module details, queue up the resources you need, and make sure you know how accuracy will be logged before the first prompt.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                <Link to="/setup">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-1.5 sm:gap-2 border-[#FF930F]/40 text-[#1D2E38] text-xs sm:text-sm px-2 sm:px-4">
                    <GaugeCircle className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Setup</span><span className="sm:hidden">Setup</span>
                  </Button>
                </Link>
                <Link to="/modules">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-1.5 sm:gap-2 border-[#FF930F]/40 text-[#1D2E38] text-xs sm:text-sm px-2 sm:px-4">
                    <Layers className="w-3 h-3 sm:w-4 sm:h-4" /> Modules
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-1.5 sm:gap-2 border-[#1D2E38]/40 text-[#1D2E38] text-xs sm:text-sm px-2 sm:px-4">
                    <Network className="w-3 h-3 sm:w-4 sm:h-4" /> Resources
                  </Button>
                </Link>
                <Link to="/governance">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-1.5 sm:gap-2 border-[#1D2E38]/40 text-[#1D2E38] text-xs sm:text-sm px-2 sm:px-4">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" /> Governance
                  </Button>
                </Link>
              </div>
              <Link to="/homework">
                <Button
                  className="w-full text-[#1D2E38] text-sm sm:text-base"
                  style={{ background: "linear-gradient(90deg, #FF930F 0%, #FFC46A 100%)" }}
                >
                  Plan Follow-Up Assignments →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
