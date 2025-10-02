import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarkdownContent from '@/components/markdown-content';

import prerequisitesGuide from '@content/setup/prerequisites.md?raw';
import copilotSetupGuide from '@content/setup/copilot-setup.md?raw';
import verifyChecklist from '@content/setup/verify-before-commit-checklist.md?raw';

const setupSections = [
  {
    id: 'prereqs',
    title: 'Environment Prerequisites',
    summary:
      'Confirm licenses, access, and tooling before the live session so you can jump straight into the exercises.',
    checklist: [
      'Validate Copilot or approved chat-based access with your enterprise license.',
      'Open the Governance page and review escalation contacts and guardrails.',
      'Run the environment verification steps to prove IDE, markdown, and logging are ready.',
    ],
    content: prerequisitesGuide,
  },
  {
    id: 'copilot-setup',
    title: 'Copilot Setup Walkthrough',
    summary:
      'Follow the guided configuration for Copilot Chat, security filters, and validation prompts directly in your IDE.',
    checklist: [
      'Install the required extensions and confirm sign-in succeeds.',
      'Enable the public code filter or your organisation’s equivalent duplication guard.',
      'Complete the final verification prompt to ensure suggestions follow your guardrails.',
    ],
    content: copilotSetupGuide,
  },
  {
    id: 'verify',
    title: 'Verify-Before-Commit Checklist',
    summary:
      'Use this repeatable checklist to capture evidence, reviewer sign-off, and follow-up actions on every artifact.',
    checklist: [
      'Log validation evidence (queries, screenshots, tests) before you share work.',
      'Capture reviewer names, decisions, and rationale for audit readiness.',
      'Decide whether you will use the checklist as a template, peer review, or automated hook.',
    ],
    content: verifyChecklist,
  },
] as const;

export default function SetupPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl space-y-10">
      <header className="space-y-4 text-center">
        <Badge className="bg-[#FF930F] text-white">Start Here</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Setup & Copilot Controls</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Everything you need to prepare for the GenAI Analyst Accelerator lives on this page—no file hunting required. Complete the sections below and you&apos;ll be ready to dive into the modules with confidence.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {setupSections.map((section) => (
          <Card key={section.id} className="border border-[#FF930F]/30 bg-white/90 dark:bg-slate-950/40">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-white">{section.title}</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                {section.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                {section.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-[#FF930F]/40 bg-white/90 dark:bg-slate-950/40">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-900 dark:text-white">Deep-Dive Guides</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            Toggle between tabs to read each guide in full. Share these links with participants ahead of the session so everyone arrives ready.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={setupSections[0].id} className="space-y-6">
            <TabsList className="w-full justify-start overflow-x-auto">
              {setupSections.map((section) => (
                <TabsTrigger key={section.id} value={section.id} className="whitespace-nowrap">
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {setupSections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="space-y-4">
                <Card className="bg-white/80 dark:bg-slate-950/40">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">{section.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {section.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MarkdownContent content={section.content} />
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
