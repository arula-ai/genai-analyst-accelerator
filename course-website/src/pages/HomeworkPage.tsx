import { ClipboardList, FileText, GraduationCap, Layers } from 'lucide-react';

import MarkdownContent from '@/components/markdown-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import homeworkOverview from '@content/homework/README.md?raw';
import critiquePrompts from '@content/homework/critique-prompts.md?raw';
import rtmExercise from '@content/homework/rtm-exercise.md?raw';
import dorDodExercise from '@content/homework/dor-dod-exercise.md?raw';

const assignments = [
  {
    id: 'critique',
    title: 'Refine Stories with Critique Prompts',
    duration: '30-45 minutes',
    icon: FileText,
    summary: 'Use Copilot as a critical reviewer to strengthen two user stories. Capture findings, apply updates, and document before/after results.',
    focus: ['Structured critique prompt', 'INVEST scoring workflow', 'Reflection on recurring gaps'],
    path: 'homework/critique-prompts.md',
    content: critiquePrompts,
  },
  {
    id: 'rtm',
    title: 'Build a Mini Requirements Traceability Matrix',
    duration: '30-45 minutes',
    icon: Layers,
    summary: 'Generate an audit-ready RTM that connects policy sources, user stories, acceptance criteria, data, and UAT coverage.',
    focus: ['Requirement extraction prompt', 'Status & priority tagging', 'Gap analysis and recommendations'],
    path: 'homework/rtm-exercise.md',
    content: rtmExercise,
  },
  {
    id: 'dor-dod',
    title: 'Create Custom Definition of Ready & Done',
    duration: '30 minutes',
    icon: ClipboardList,
    summary: 'Tailor DoR and DoD checklists to your environment with Copilot, including compliance and tooling specifics.',
    focus: ['Context-driven prompts', 'Deliverable expectations', 'Refinement tips for right-sized lists'],
    path: 'homework/dor-dod-exercise.md',
    content: dorDodExercise,
  },
] as const;

export default function HomeworkPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 space-y-4">
        <Badge className="bg-amber-500 text-white">Post-Session Practice</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Homework Assignments</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Extend the lab with three targeted assignments. Each one builds deeper Copilot skills—quality critique, traceability mastery, and tailored delivery checklists. Everything below matches the markdown handouts in the repository.
        </p>
      </div>

      <Card className="mb-10 border-amber-200 dark:border-amber-900/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
            <GraduationCap className="w-6 h-6 text-amber-500" />
            Homework Overview
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Summary of assignments, objectives, and success criteria from `homework/README.md`.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MarkdownContent content={homeworkOverview} />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-10">
        {assignments.map((assignment) => {
          const Icon = assignment.icon;
          return (
            <Card key={assignment.id} className="border-amber-100 dark:border-amber-900/40">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-200 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-slate-900 dark:text-white">{assignment.title}</CardTitle>
                    <Badge variant="outline" className="mt-1 text-xs">
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
                <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700">
                  <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {assignment.path}
                  </code>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-amber-200 dark:border-amber-900/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl text-slate-900 dark:text-white">Read the Full Assignments</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Switch between tabs to view the exact markdown instructions distributed in the lab.
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
