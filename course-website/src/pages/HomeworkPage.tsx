import { ClipboardList, GaugeCircle, Layers, ShieldCheck, Sparkles } from 'lucide-react';

import MarkdownContent from '@/components/markdown-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import homeworkOverview from '@content/homework/README.md?raw';
import promptDiagnostics from '@content/homework/prompt-diagnostics.md?raw';
import legacyDataMapping from '@content/homework/legacy-data-mapping.md?raw';
import dataRequirementsPackage from '@content/homework/data-requirements-package.md?raw';
import accuracyAudit from '@content/homework/accuracy-audit.md?raw';

const assignments = [
  {
    id: 'prompt-diagnostics',
    title: 'Prompt Diagnostics Lab',
    duration: '30 minutes (3 x 10)',
    icon: Sparkles,
    summary:
      'Stress-test prompts on a new dataset with three 10-minute sprints: initial framing, bias remediation, and analytics validation plus formatting wrap.',
    focus: ['Prompt teardown scorecard', 'Bias tagging workflow', 'SQL & summary validation grid'],
    content: promptDiagnostics,
  },
  {
    id: 'legacy-data-mapping',
    title: 'Legacy Data Mapping Sprint',
    duration: '30 minutes (3 x 10)',
    icon: GaugeCircle,
    summary:
      'Document business logic and trace data flow across three 10-minute sprints: COBOL readout, data lineage mapping, and SME question capture.',
    focus: ['Business logic summary template', 'Data flow mapping worksheet', 'SME follow-up checklist'],
    content: legacyDataMapping,
  },
  {
    id: 'data-requirements-package',
    title: 'Data Requirements Package Build',
    duration: '30 minutes (3 x 10)',
    icon: Layers,
    summary:
      'Convert mapping notes into a stakeholder-ready data requirements package across three 10-minute sprints: stakeholder alignment, requirements drafting, and modernization handoff summary.',
    focus: ['Requirements template completion', 'Owner and quality rule tracking', 'Modernization handoff briefing'],
    content: dataRequirementsPackage,
  },
  {
    id: 'accuracy-audit',
    title: 'Accuracy Audit Cycle',
    duration: '30 minutes (3 x 10)',
    icon: ShieldCheck,
    summary:
      'Run the hallucination response workflow on intentionally flawed outputs: detection, NIST/ISO mapping, and escalation packet drafting.',
    focus: ['Incident scoring rubric', 'Escalation messaging', 'Accuracy register updates'],
    content: accuracyAudit,
  },
] as const;

export default function HomeworkPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 space-y-4">
        <Badge className="bg-[#FF930F] text-white">2-Hour Practice Path</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Homework Assignments</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Reinforce the accelerator with four 30-minute drills (totaling two hours). Each assignment maps to a module—prompt discipline, legacy analysis, data requirements, and governance—so you can embed the habits inside live projects.
        </p>
      </div>

      <Card className="mb-10 border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
            <ClipboardList className="w-6 h-6 text-[#FF930F]" /> Homework Overview
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Summary of objectives, required assets, and submission guidance—plan ~30 minutes per assignment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MarkdownContent content={homeworkOverview} />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-10">
        {assignments.map((assignment) => {
          const Icon = assignment.icon;
          return (
            <Card key={assignment.id} className="border-[#FF930F]/30">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFE7D0] text-[#1D2E38] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-slate-900 dark:text-white">{assignment.title}</CardTitle>
                    <Badge variant="outline" className="mt-1 text-xs border-[#FF930F]/40 text-[#1D2E38]">
                      {assignment.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>{assignment.summary}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {assignment.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl text-slate-900 dark:text-white">Read the Full Assignments</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Toggle between tabs to view the complete assignment instructions directly on this page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={assignments[0].id} className="space-y-6">
            <TabsList className="w-full justify-start overflow-x-auto">
              {assignments.map((assignment) => (
                <TabsTrigger key={assignment.id} value={assignment.id} className="whitespace-nowrap">
                  {assignment.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {assignments.map((assignment) => (
              <TabsContent key={assignment.id} value={assignment.id} className="space-y-4">
                <Card className="bg-white/80 dark:bg-slate-950/40">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">{assignment.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {assignment.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MarkdownContent content={assignment.content} />
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
