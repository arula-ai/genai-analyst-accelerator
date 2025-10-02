import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="mb-2">Hands-On Lab</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Transform Meeting Notes into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"> Professional Requirements</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Learn to leverage GitHub Copilot to accelerate requirements documentation while maintaining quality, compliance, and traceability.
          </p>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            What You'll Learn
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Generate Artifacts',
                description: 'Transform notes into epics, user stories, and acceptance criteria',
                icon: '📝'
              },
              {
                title: 'Apply Quality',
                description: 'Use INVEST principles and Given/When/Then patterns',
                icon: '✨'
              },
              {
                title: 'Maintain Traceability',
                description: 'Link documentation through stories to test cases',
                icon: '🔗'
              },
              {
                title: 'AI Safety',
                description: 'Follow security guidelines for regulated environments',
                icon: '🔒'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Quick Start Checklist
          </h3>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
            Get ready in three steps using the setup guides inside the repository. All links reference files you already cloned.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-indigo-100 dark:border-indigo-900">
              <CardHeader>
                <Badge className="mb-2 bg-slate-600">Step 1</Badge>
                <CardTitle className="text-lg">Confirm Prerequisites</CardTitle>
                <CardDescription className="text-sm">
                  Make sure tooling and access are in place before the timer starts.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <ul className="space-y-1">
                  <li>□ Review <code>setup/prerequisites.md</code></li>
                  <li>□ Sign into Copilot with Business/Enterprise license</li>
                  <li>□ Verify Markdown preview works in your IDE</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-100 dark:border-indigo-900">
              <CardHeader>
                <Badge className="mb-2 bg-indigo-500">Step 2</Badge>
                <CardTitle className="text-lg">Complete Setup Test</CardTitle>
                <CardDescription className="text-sm">
                  Follow the guided setup and run the verification prompt.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <ul className="space-y-1">
                  <li>□ Walk through <code>setup/copilot-setup.md</code></li>
                  <li>□ Enable the Public Code Filter in your IDE</li>
                  <li>□ Ask Copilot to draft a sample user story (verification task)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-100 dark:border-indigo-900">
              <CardHeader>
                <Badge className="mb-2 bg-purple-500">Step 3</Badge>
                <CardTitle className="text-lg">Choose Your Path</CardTitle>
                <CardDescription className="text-sm">
                  Decide which scenario aligns with the work you do most often.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <ul className="space-y-1">
                  <li>□ Compare Path A vs Path B below</li>
                  <li>□ Skim the relevant exercises and templates</li>
                  <li>□ Open Copilot prompts from <code>path-*/prompts/</code></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Choose Your Path
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Select the path that best matches your daily work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Path A */}
            <Card className="border-2 border-indigo-200 dark:border-indigo-900 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-indigo-500">Path A</Badge>
                  <Badge variant="outline">40 min</Badge>
                </div>
                <CardTitle className="text-2xl">Backlog from Meeting Notes</CardTitle>
                <CardDescription className="text-base">
                  Best for: Product-focused analysts, POs, backlog managers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-slate-700 dark:text-slate-300">You'll create:</p>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Well-formed epics with business value</li>
                    <li>• INVEST-compliant user stories</li>
                    <li>• Gherkin acceptance criteria</li>
                    <li>• GitHub Issues ready for development</li>
                  </ul>
                </div>
                <Link to="/path-a">
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600">
                    Start Path A
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Path B */}
            <Card className="border-2 border-purple-200 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-purple-500">Path B</Badge>
                  <Badge variant="outline">40 min</Badge>
                </div>
                <CardTitle className="text-2xl">Process & Data Documentation</CardTitle>
                <CardDescription className="text-base">
                  Best for: Systems analysts, integration specialists, QA leads
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-slate-700 dark:text-slate-300">You'll create:</p>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Mermaid flowcharts (basic and swimlane)</li>
                    <li>• OpenAPI data contracts</li>
                    <li>• UAT test cases</li>
                    <li>• Requirements traceability matrices</li>
                  </ul>
                </div>
                <Link to="/path-b">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">
                    Start Path B
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Repository Map */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Course Materials at a Glance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Lab Guide',
                description: 'Full 75-minute walkthrough with checkpoints, timing, and success criteria.',
                path: 'lab-guide.md',
                linkLabel: 'Open Lab Guide',
                to: 'https://github.com' // placeholder replaced below
              },
            ].map(() => null)}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl">Who Should Take This Lab?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Business Analysts',
                  'Systems Analysts',
                  'Product Owners',
                  'Product Managers',
                  'QA/UAT Leads',
                  'Test Analysts'
                ].map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {role}
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Prerequisites:</strong> Basic familiarity with user stories and agile concepts. No coding experience required.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Session Structure */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Session Structure
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { time: '00:00 - 10:00', title: 'Why It Matters', desc: 'Use cases, ROI, efficiency gains' },
              { time: '10:00 - 25:00', title: 'Patterns & Guardrails', desc: 'Prompts, security, quality standards' },
              { time: '25:00 - 65:00', title: 'Hands-On Lab', desc: 'Choose your path and complete exercises' },
              { time: '65:00 - 75:00', title: 'Debrief', desc: 'Share artifacts and lessons learned' }
            ].map((segment, idx) => (
              <Card key={idx} className="text-center">
                <CardHeader>
                  <Badge variant="outline" className="mx-auto mb-2">
                    {segment.time}
                  </Badge>
                  <CardTitle className="text-lg">{segment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{segment.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-indigo-100 dark:border-indigo-900 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-base">
                Begin by verifying your prerequisites and setting up GitHub Copilot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid sm:grid-cols-3 gap-3">
                <Link to="/path-a">
                  <Button variant="outline" className="w-full">
                    ✓ Path A
                  </Button>
                </Link>
                <Link to="/path-b">
                  <Button variant="outline" className="w-full">
                    ✓ Path B
                  </Button>
                </Link>
                <Link to="/security">
                  <Button variant="outline" className="w-full">
                    🔒 Security
                  </Button>
                </Link>
              </div>
              <Link to="/resources">
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
                  View Resources & Templates →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
