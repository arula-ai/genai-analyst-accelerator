import { ClipboardList, GaugeCircle, Layers, ShieldCheck, Sparkles } from 'lucide-react';

import MarkdownContent from '@/components/markdown-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import homeworkOverview from '@content/homework/README.md?raw';
import promptDiagnostics from '@content/homework/prompt-diagnostics.md?raw';
import storytellingSprint from '@content/homework/storytelling-sprint.md?raw';
import modernizationLab from '@content/homework/legacy-modernization-lab.md?raw';
import accuracyAudit from '@content/homework/accuracy-audit.md?raw';

const assignments = [
  {
    id: 'prompt-diagnostics',
    title: 'Prompt Diagnostics Lab',
    duration: '45 minutes',
    icon: Sparkles,
    summary:
      'Stress-test your prompts on a new dataset. Capture bias flags, iterate with corrective prompts, and compare SQL outputs to a golden answer key.',
    focus: ['Prompt teardown scorecard', 'Bias tagging workflow', 'SQL & summary validation grid'],
    content: promptDiagnostics,
  },
  {
    id: 'storytelling-sprint',
    title: 'Executive Narrative Remix',
    duration: '40 minutes',
    icon: GaugeCircle,
    summary:
      'Transform a Power BI excerpt for three audiences: executives, operations, and compliance. Log the adjustments and cite every metric.',
    focus: ['Audience tone matrix', 'Fact-check prompts and evidence capture', 'Narrative reuse patterns'],
    content: storytellingSprint,
  },
  {
    id: 'modernization-lab',
    title: 'Legacy Modernization Deep Dive',
    duration: '60 minutes',
    icon: Layers,
    summary:
      'Deconstruct a COBOL routine, generate a Python replacement, and write a modernization brief with rollback considerations.',
    focus: ['Legacy walkthrough template', 'Python test harness prompts', 'Risk & stakeholder communication checklist'],
    content: modernizationLab,
  },
  {
    id: 'accuracy-audit',
    title: 'Accuracy Audit Cycle',
    duration: '50 minutes',
    icon: ShieldCheck,
    summary:
      'Run the hallucination response workflow on intentionally flawed outputs. Produce evidence logs, escalation notes, and remediation plans.',
    focus: ['Incident scoring rubric', 'Escalation messaging', 'Accuracy register updates'],
    content: accuracyAudit,
  },
] as const;

export default function HomeworkPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 space-y-4">
        <Badge className="bg-[#FF930F] text-white">Post-Session Practice</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Homework Assignments</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Reinforce the accelerator with four focused drills. Each assignment maps to a module—prompt discipline, storytelling accuracy, modernization, and governance—so you can embed the habits inside live projects.
        </p>
      </div>

      <Card className="mb-10 border-[#FF930F]/40 bg-white/80 dark:bg-slate-950/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
            <ClipboardList className="w-6 h-6 text-[#FF930F]" /> Homework Overview
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Summary of objectives, required assets, and submission guidance without leaving this page.
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
