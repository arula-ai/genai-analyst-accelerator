import {
  BookOpen,
  ClipboardList,
  Cog,
  FileText,
  MessageCircle,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from 'lucide-react';

import MarkdownContent from '@/components/markdown-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import prerequisitesGuide from '@content/setup/prerequisites.md?raw';
import copilotSetupGuide from '@content/setup/copilot-setup.md?raw';
import verifyChecklist from '@content/setup/verify-before-commit-checklist.md?raw';
import promptClarityBlueprint from '@content/resources/prompt-clarity-blueprint.md?raw';
import biasValidationChecklist from '@content/resources/bias-validation-checklist.md?raw';
import automationCookbook from '@content/resources/automation-cookbook.md?raw';
import insightStorytellingPlaybook from '@content/resources/insight-storytelling-playbook.md?raw';
import legacyModernizationFieldGuide from '@content/resources/legacy-modernization-field-guide.md?raw';
import hallucinationResponsePlaybook from '@content/resources/hallucination-response-playbook.md?raw';
import copilotCheatSheet from '@content/resources/copilot-chat-cheat-sheet.md?raw';
import devcontainerGuide from '@content/resources/devcontainer-quickstart.md?raw';
import measurementPlaybook from '@content/resources/measurement-playbook.md?raw';
import trustCenterBriefing from '@content/resources/trust-center-briefing.md?raw';

const resources = [
  {
    id: 'environment-prereqs',
    title: 'Environment Prerequisites',
    subtitle: 'Licensing, access, and tooling checks before class',
    description: 'Follow this checklist to confirm licenses, IDE readiness, and governance guardrails without leaving the browser.',
    icon: ClipboardList,
    accent: 'bg-[#FF930F]/10 text-[#FF930F] dark:text-[#FFD2A1] dark:bg-[#FF930F]/20',
    keyTopics: [
      'License confirmation for Copilot or approved GenAI tools',
      'IDE setup, markdown preview, and optional Python install',
      'Governance readiness: guardrails, evidence capture, escalation points',
    ],
    readTime: '5 min read',
    content: prerequisitesGuide,
  },
  {
    id: 'copilot-setup',
    title: 'Copilot Setup Walkthrough',
    subtitle: 'Configure chat settings, filters, and validation prompts',
    description: 'Step-by-step IDE configuration, public code filter guidance, and the final verification prompt to prove Copilot is ready.',
    icon: Cog,
    accent: 'bg-[#FFE7D0] text-[#CC6E00] dark:text-[#FFD2A1] dark:bg-[#3b2713]',
    keyTopics: [
      'Sign-in verification and extension installs',
      'Security guardrails: public code filter, privacy reminders',
      'Final verification prompt with expected success checks',
    ],
    readTime: '10 min read',
    content: copilotSetupGuide,
  },
  {
    id: 'copilot-chat-cheat-sheet',
    title: 'Copilot Chat Cheat Sheet',
    subtitle: 'Slash commands, context anchors, and prompt flow reference',
    description: 'Quick scan guide for /explain, /tests, /fix, /doc plus @workspace and #codebase usage during labs.',
    icon: MessageCircle,
    accent: 'bg-[#DDEBFF] text-[#1E3A8A] dark:text-[#A6C4FF] dark:bg-[#1f2f4a]',
    keyTopics: [
      'Core slash commands for framing, validation, remediation, and documentation',
      'Context tagging with @workspace and #codebase to ground outputs',
      'Recommended prompt flow from kickoff through evidence capture',
    ],
    readTime: '3 min scan',
    content: copilotCheatSheet,
  },
  {
    id: 'verify-before-commit',
    title: 'Verify-Before-Commit Checklist',
    subtitle: 'Evidence logging and review steps for every artifact',
    description: 'A reusable checklist covering validation, reviewer sign-off, and governance notes before you ship GenAI-assisted work.',
    icon: ShieldCheck,
    accent: 'bg-[#FFE0B8] text-[#B86505] dark:text-[#FFCE94] dark:bg-[#2e1f0f]',
    keyTopics: [
      'Validation tiers for drafts, stakeholder deliverables, and production assets',
      'Evidence capture expectations and reviewer documentation',
      'Options for weaving the checklist into your workflow (templates, peer review, hooks)',
    ],
    readTime: '7 min read',
    content: verifyChecklist,
  },
  {
    id: 'devcontainer-quickstart',
    title: 'Codespaces Devcontainer Guide',
    subtitle: 'Prebuilt environment with Python, DuckDB, SQLFluff, and Copilot CLI',
    description: 'Launch the accelerator in GitHub Codespaces with every dependency preinstalled and governance hooks ready.',
    icon: Server,
    accent: 'bg-[#E3FCEC] text-[#1E7B4D] dark:text-[#9BE3B3] dark:bg-[#123524]',
    keyTopics: [
      'Toolchain coverage: Python, DuckDB, JupyterLab, SQLFluff, Copilot CLI',
      'Running dry-run automation, parity tests, and linting inside the container',
      'OIDC secrets, troubleshooting tips, and post-create automation',
    ],
    readTime: '6 min read',
    content: devcontainerGuide,
  },
  {
    id: 'trust-center-briefing',
    title: 'Copilot Trust Center Briefing',
    subtitle: 'Data handling FAQ and five-minute security talk track',
    description: 'Give stakeholders confidence in prompt retention policies, enterprise controls, and escalation paths before the lab starts.',
    icon: ShieldCheck,
    accent: 'bg-[#FDECF4] text-[#A10E4F] dark:text-[#FF9CBD] dark:bg-[#3B1728]',
    keyTopics: [
      'Copilot service boundaries and prompt retention expectations',
      'Enterprise controls: public code filter, secret scanning, push protection, OIDC',
      'Routes to capture questions in the accuracy register and share transparency reports',
    ],
    readTime: '5 min briefing',
    content: trustCenterBriefing,
  },
  {
    id: 'prompt-clarity-blueprint',
    title: 'Prompt Clarity Blueprint',
    subtitle: 'Reusable frames for dataset summaries, SQL drafts, and validation loops',
    description: 'A five-part template (Role, Inputs, Constraints, Format, Validation) with annotated examples for analytical workloads.',
    icon: Sparkles,
    accent: 'bg-[#FF930F]/10 text-[#FF930F] dark:text-[#FFD2A1] dark:bg-[#FF930F]/20',
    keyTopics: [
      'Prompt scaffolds tailored for SQL, spreadsheets, and narrative outputs',
      'Bias and assumption callouts to inject before GenAI responds',
      'Iterative prompts that tighten scope when results drift',
    ],
    readTime: '12 min read',
    content: promptClarityBlueprint,
  },
  {
    id: 'bias-validation-checklist',
    title: 'Bias & Validation Checklist',
    subtitle: 'Quality gates for prompts, code, and storytelling artifacts',
    description: 'Red-team your own requests using bias spotters, validation tiers, and approval checkpoints.',
    icon: Shield,
    accent: 'bg-[#1D2E38]/10 text-[#1D2E38] dark:text-[#9fb1ba] dark:bg-[#1D2E38]/20',
    keyTopics: [
      'Hallucination markers by artifact type (SQL, narrative, legacy code)',
      'Three-level validation ladder with sample evidence to capture',
      'Escalation flow when output touches regulated content',
    ],
    readTime: '8 min read',
    content: biasValidationChecklist,
  },
  {
    id: 'measurement-playbook',
    title: 'Measurement Playbook',
    subtitle: 'Metrics to publish after each cohort',
    description: 'Capture speed, quality, and governance signals that align with GitHub adoption research.',
    icon: TrendingUp,
    accent: 'bg-[#FFF4D6] text-[#B45309] dark:text-[#FFCD7A] dark:bg-[#3B2A14]',
    keyTopics: [
      'Speed metrics: time-to-first-working-query, Copilot acceptance rate, PR cycle time',
      'Quality & safety: SQLFluff pass rate, parity defects, hallucination incidents',
      'Governance health: accuracy register completeness, secret scanning blocks avoided, escalation turnaround',
    ],
    readTime: '4 min read',
    content: measurementPlaybook,
  },
  {
    id: 'automation-cookbook',
    title: 'Automation Cookbook',
    subtitle: 'Prompt recipes for Excel, SQL, and Python with reviewer scorecards',
    description: 'Step-by-step guides for generating scripts responsibly and logging what changed in the workflow.',
    icon: Workflow,
    accent: 'bg-[#6d8efc]/10 text-[#2f4bcc] dark:bg-[#6d8efc]/20 dark:text-[#bac7ff]',
    keyTopics: [
      'Excel prompt patterns by formula type and desired error handling',
      'SQL and Python scaffolds with environment variables and secrets removed',
      'Automation review scorecard that captures approvals and rework',
    ],
    readTime: '10 min read',
    content: automationCookbook,
  },
  {
    id: 'insight-storytelling-playbook',
    title: 'Insight Storytelling Playbook',
    subtitle: 'Narrative scaffolds for executive, operations, and compliance audiences',
    description: 'Transform dashboards into stories with fact-check prompts, tone adjustments, and supporting evidence tables.',
    icon: BookOpen,
    accent: 'bg-[#9A6DF2]/10 text-[#5B2EC9] dark:bg-[#9A6DF2]/20 dark:text-[#d3b7ff]',
    keyTopics: [
      'Story spine templates: context, insight, implication, request',
      'Audience-specific tone switches and risk language',
      'Validation prompts to compare claims versus chart annotations',
    ],
    readTime: '14 min read',
    content: insightStorytellingPlaybook,
  },
  {
    id: 'legacy-modernization-field-guide',
    title: 'Legacy Modernization Field Guide',
    subtitle: 'Explain COBOL, JCL, and stored procedures before co-creating modern code',
    description: 'Decomposition worksheets, modernization prompts, and risk logs made for analysts partnering with engineers.',
    icon: Cog,
    accent: 'bg-[#2fa87c]/10 text-[#187054] dark:bg-[#2fa87c]/20 dark:text-[#88d4b9]',
    keyTopics: [
      'Legacy walkthrough prompt that captures job flow, data, and dependencies',
      'Python and SQL migration prompts with rollback guidance',
      'Change-control checklist that satisfies auditors and release managers',
    ],
    readTime: '16 min read',
    content: legacyModernizationFieldGuide,
  },
  {
    id: 'hallucination-response-playbook',
    title: 'Hallucination Response Playbook',
    subtitle: 'Incident drills, evidence capture, and escalation messaging',
    description: 'A practical workflow for spotting, triaging, and remediating AI hallucinations across artifacts.',
    icon: FileText,
    accent: 'bg-[#f97384]/10 text-[#d92c44] dark:bg-[#f97384]/20 dark:text-[#ffb4bf]',
    keyTopics: [
      'Detection cues and impact scoring rubric',
      'Response scripts for stakeholders, auditors, and leadership',
      'Templates for accuracy registers and follow-up retrospectives',
    ],
    readTime: '9 min read',
    content: hallucinationResponsePlaybook,
  },
] as const;

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <Badge className="bg-[#FF930F] text-white">Reference Library</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-3">Analyst Resource Library</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Every playbook used in the accelerator lives here. Browse the reference cards below, then switch tabs to read the full content of each guide directly on this page.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 mb-10">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <Card key={resource.id} className="border-[#FF930F]/30">
              <CardHeader className="space-y-3">
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${resource.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">{resource.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-sm">
                    {resource.subtitle}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>{resource.description}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {resource.keyTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-end text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span>{resource.readTime}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <span>Read the Full Playbooks</span>
            <Badge variant="outline" className="mt-3 sm:mt-0">
              Switch tabs to view each guide
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={resources[0].id} className="space-y-6">
            <TabsList className="w-full justify-start overflow-x-auto">
              {resources.map((resource) => (
                <TabsTrigger key={resource.id} value={resource.id} className="whitespace-nowrap">
                  {resource.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {resources.map((resource) => (
              <TabsContent key={resource.id} value={resource.id} className="space-y-4">
                <Card className="bg-white/80 dark:bg-slate-950/40">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {resource.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MarkdownContent content={resource.content} />
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mt-8 border-[#FF930F]/40">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-slate-900 dark:text-white">Handy Reference Links</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Bookmark these external docs to reinforce Copilot workflows, governance frameworks, and sample assets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <a className="text-[#1D2E38] underline" href="https://docs.github.com/copilot/using-github-copilot/prompting-copilot-in-the-chat-view" target="_blank" rel="noreferrer">
                GitHub Docs: Copilot Chat cheat sheet
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://code.visualstudio.com/docs/copilot/copilot-chat#_share-context-from-the-workspace" target="_blank" rel="noreferrer">
                VS Code: @workspace and #codebase context sharing
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://docs.github.com/copilot/github-copilot-chat/ask-copilot-about-your-pull-request" target="_blank" rel="noreferrer">
                GitHub Docs: Copilot PR Review & Ask About This Diff
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://docs.github.com/copilot/copilot-cli/copilot-cli" target="_blank" rel="noreferrer">
                GitHub Docs: Copilot CLI
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://copilot.github.trust.page/" target="_blank" rel="noreferrer">
                GitHub Copilot Trust Center & Privacy FAQ
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">
                NIST AI Risk Management Framework
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://csrc.nist.gov/publications/detail/white-paper/2024/01/16/generative-ai-profile/draft" target="_blank" rel="noreferrer">
                NIST Generative AI Profile
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://owasp.org/www-project-top-10-for-large-language-model-applications/" target="_blank" rel="noreferrer">
                OWASP Top-10 for LLM Applications
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://duckdb.org/" target="_blank" rel="noreferrer">
                DuckDB Documentation
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://docs.sqlfluff.com/" target="_blank" rel="noreferrer">
                SQLFluff Documentation
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://learn.microsoft.com/power-bi/create-reports/sample-datasets" target="_blank" rel="noreferrer">
                Microsoft Learn: Power BI Sample Datasets
              </a>
            </li>
            <li>
              <a className="text-[#1D2E38] underline" href="https://github.com/openmainframeproject/cobol-programming-course" target="_blank" rel="noreferrer">
                Open Mainframe Project: COBOL Course Repository
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
