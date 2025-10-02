import { AlertTriangle, ClipboardCheck, Lock, Shield } from 'lucide-react';

import MarkdownContent from '@/components/markdown-content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import securityGuide from '@content/SECURITY.md?raw';

const guardrails = [
  {
    title: 'Data Sanitization',
    description: 'Never send real customer data to Copilot. Replace everything with clearly synthetic values before prompting.',
    details: ['No PII or credentials', 'Use example.com/test domains', 'Document synthetic data usage'],
    icon: Lock,
  },
  {
    title: 'Traceability & Audit',
    description: 'Capture sources, rationales, and reviewer names in every artifact and commit message.',
    details: ['Use the Verify-Before-Commit checklist', 'Call out meeting/policy references inline', 'Log when Copilot assisted'],
    icon: ClipboardCheck,
  },
  {
    title: 'Incident Response',
    description: 'Stop work and escalate immediately if any sensitive data appears in prompts or commits.',
    details: ['Do not push affected branches', 'Notify facilitator, manager, security teams', 'Follow internal remediation playbooks'],
    icon: AlertTriangle,
  },
] as const;

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 space-y-4">
        <Badge className="bg-red-500 text-white">Required Reading</Badge>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Security & Governance Guidelines</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          These guardrails apply during the training lab and back at work. Review the highlights below, then read the complete `SECURITY.md` policy used across the repository.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-10">
        {guardrails.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="border-red-100 dark:border-red-900/40">
              <CardHeader className="space-y-3">
                <div className="w-11 h-11 rounded-lg bg-red-500/10 text-red-700 dark:text-red-200 flex items-center justify-center">
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

      <Card className="border-red-200 dark:border-red-900/50">
        <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-500" /> Full Policy
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300">
              Rendered directly from `SECURITY.md`
            </CardDescription>
          </div>
          <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
            SECURITY.md
          </code>
        </CardHeader>
        <CardContent>
          <MarkdownContent content={securityGuide} />
        </CardContent>
      </Card>
    </div>
  );
}
