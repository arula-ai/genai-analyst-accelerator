import { BookOpen, FileText, Lightbulb, Sparkles, Wrench } from 'lucide-react';

import MarkdownContent from '@/components/markdown-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import promptPatternGuide from '@content/resources/prompt-pattern-guide.md?raw';
import gherkinReference from '@content/resources/gherkin-reference.md?raw';
import mermaidReference from '@content/resources/mermaid-reference.md?raw';
import openapiBasics from '@content/resources/openapi-basics.md?raw';
import troubleshootingGuide from '@content/resources/copilot-troubleshooting.md?raw';

const resources = [
  {
    id: 'prompt-pattern',
    title: 'Prompt Pattern Guide',
    subtitle: 'Five-part prompt pattern with 15+ analyst templates',
    description: 'Step-by-step structure, examples, and troubleshooting for reliable Copilot prompts.',
    icon: Sparkles,
    accent: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-200',
    keyTopics: [
      'Five-part pattern: Role, Inputs, Format, Constraints, Examples',
      'Prompt templates for backlog, process, data, testing, communication',
      'Quality checks and corrective prompts when output drifts',
    ],
    path: 'resources/prompt-pattern-guide.md',
    readTime: '15 min read',
    content: promptPatternGuide,
  },
  {
    id: 'gherkin-reference',
    title: 'Gherkin Reference',
    subtitle: 'Business-readable acceptance criteria master class',
    description: 'Syntax, best practices, and compliance-ready patterns for writing scenarios.',
    icon: BookOpen,
    accent: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-200',
    keyTopics: [
      'Core syntax: Feature, Scenario, Given/When/Then, Background',
      'Scenario outlines, data tables, tags, and traceability tips',
      'Compliance-focused examples for financial services teams',
    ],
    path: 'resources/gherkin-reference.md',
    readTime: '10 min read',
    content: gherkinReference,
  },
  {
    id: 'mermaid-reference',
    title: 'Mermaid Reference',
    subtitle: 'Diagram templates for flows, swimlanes, sequence charts',
    description: 'Text-to-diagram syntax with reusable snippets for analyst workflows.',
    icon: Lightbulb,
    accent: 'bg-purple-500/10 text-purple-700 dark:text-purple-200',
    keyTopics: [
      'Flowchart orientation, swimlanes, decision and retry patterns',
      'Sequence, state, and class diagrams with compliance callouts',
      'Reusable snippets paired with Copilot prompting strategies',
    ],
    path: 'resources/mermaid-reference.md',
    readTime: '8 min read',
    content: mermaidReference,
  },
  {
    id: 'openapi-basics',
    title: 'OpenAPI Basics',
    subtitle: 'Contract-first API documentation for analysts',
    description: 'YAML structure, schema design, validation rules, and change logs.',
    icon: FileText,
    accent: 'bg-sky-500/10 text-sky-700 dark:text-sky-200',
    keyTopics: [
      'Spec anatomy: info, servers, paths, components, security',
      'Schema patterns for enums, arrays, conditional logic, error payloads',
      'Copilot review prompts and quality checklist for regulated APIs',
    ],
    path: 'resources/openapi-basics.md',
    readTime: '12 min read',
    content: openapiBasics,
  },
  {
    id: 'copilot-troubleshooting',
    title: 'Copilot Troubleshooting',
    subtitle: 'Quick fixes for the top issues analysts hit in IDEs',
    description: 'Diagnosis flow for suggestions, quality, PII concerns, and configuration.',
    icon: Wrench,
    accent: 'bg-amber-500/10 text-amber-700 dark:text-amber-200',
    keyTopics: [
      'No suggestions, poor quality, or truncated output',
      'Handling PII, restarts, and extension updates',
      'Escalation paths to admins and filters tuning',
    ],
    path: 'resources/copilot-troubleshooting.md',
    readTime: '10 min read',
    content: troubleshootingGuide,
  },
] as const;

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <Badge className="bg-emerald-500 text-white">Reference Library</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-3">Analyst Resource Library</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Every handout from the lab in one place. Browse the full markdown for prompt patterns, Gherkin, Mermaid, OpenAPI, and troubleshooting so you can revisit the same guidance used during the session.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-10">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <Card key={resource.id} className="border-emerald-100 dark:border-emerald-900/40">
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
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span>{resource.readTime}</span>
                  <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {resource.path}
                  </code>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-emerald-200 dark:border-emerald-900/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <span>Read the Full References</span>
            <Badge variant="outline" className="mt-3 sm:mt-0">
              Toggle tabs to view each markdown document
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
    </div>
  );
}
