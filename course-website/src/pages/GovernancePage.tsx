import { AlertTriangle, ClipboardCheck, FileCheck, Gauge, Map, ShieldCheck } from 'lucide-react';

import MarkdownContent from '@/components/markdown-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import governanceGuide from '@content/governance/README.md?raw';
import crosswalkDoc from '@content/governance/crosswalk.md?raw';
import measurementPlaybook from '@content/resources/measurement-playbook.md?raw';

const guardrails = [
  {
    title: 'Document Accuracy Evidence',
    description: 'Every AI-assisted artifact must include a validation log, reviewer signature, and traceable source references.',
    details: [
      'Record dataset path, prompt version, and tool used',
      'Capture reviewer initials and validation outcome',
      'Store evidence in the shared accuracy register template',
    ],
    icon: FileCheck,
  },
  {
    title: 'Respect Data Boundaries',
    description: 'Synthetic datasets only. If a prompt requires live data, describe it abstractly and follow the escalation workflow.',
    details: [
      'Never paste production records into GenAI tools',
      'Mask customer and employee identifiers before sharing context',
      'Escalate if a stakeholder insists on using restricted data',
    ],
    icon: ShieldCheck,
  },
  {
    title: 'Run the Hallucination Response Play',
    description: 'When output drifts or fabricates facts, pause the work and execute the triage, remediation, and communication steps.',
    details: [
      'Log the incident with severity and impact in the register',
      'Re-run validation prompts with stricter constraints',
      'Notify risk/compliance partners when client-facing deliverables are affected',
    ],
    icon: AlertTriangle,
  },
  {
    title: 'Align with NIST & ISO Frameworks',
    description: 'Map accelerator artifacts to NIST AI RMF, the Generative AI Profile, and ISO/IEC 42001 using the crosswalk provided.',
    details: [
      'Review the crosswalk card below before modernization or governance reviews',
      'Update mappings whenever artifacts change or new controls are introduced',
      'Share the matrix with audit, risk, and compliance partners for sign-off',
    ],
    icon: Map,
  },
  {
    title: 'Report Cohort Impact Metrics',
    description: 'Publish speed, quality, and governance metrics within 5 business days of each cohort.',
    details: [
      'Capture time-to-first-working-query and Copilot acceptance rate',
      'Log parity defects, hallucination incidents, and accuracy register completeness',
      'Escalate blockers if measurement gaps persist across cohorts',
    ],
    icon: Gauge,
  },
];

export default function GovernancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 space-y-4">
        <Badge className="bg-[#FF930F] text-white">Required Reading</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Governance & Accuracy Hub</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          These practices keep the accelerator safe, auditable, and production-ready. Review the highlights, check the framework crosswalk to align with NIST and ISO, capture the impact metrics after each cohort, and read the full governance playbook for escalation paths and approvals.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 mb-10">
        {guardrails.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="border-[#FF930F]/30">
              <CardHeader className="space-y-3">
                <div className="w-11 h-11 rounded-lg bg-[#FFE7D0] text-[#1D2E38] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">{item.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mb-8 border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-slate-900 dark:text-white">Framework Crosswalk</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            See how each lab artifact maps to NIST AI RMF, the NIST Generative AI Profile, and ISO/IEC 42001 controls.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MarkdownContent content={crosswalkDoc} />
        </CardContent>
      </Card>

      <Card className="mb-8 border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-slate-900 dark:text-white">Impact Metrics to Report</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Use these metrics after every cohort to show speed, quality, and governance improvements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MarkdownContent content={measurementPlaybook} />
        </CardContent>
      </Card>

      <Card className="border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <ClipboardCheck className="w-6 h-6 text-[#FF930F]" /> Governance Playbook
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300">
              Rendered directly below so you can follow the playbook without leaving the site.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <MarkdownContent content={governanceGuide} />
        </CardContent>
      </Card>
    </div>
  );
}
