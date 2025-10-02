import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PathBPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-purple-500">Path B: Process & Data Documentation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Transform Policy into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> Technical Artifacts</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Learn to use GitHub Copilot to transform complex policy documents and business requirements into structured process documentation, data contracts, and comprehensive test scenarios.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Badge variant="outline" className="text-base py-1 px-3">⏱️ 40 minutes</Badge>
            <Badge variant="outline" className="text-base py-1 px-3">📊 3 Exercises</Badge>
            <Badge variant="outline" className="text-base py-1 px-3">💼 Systems Analysts</Badge>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-purple-200 dark:border-purple-900">
            <CardHeader>
              <CardTitle className="text-2xl">What You'll Learn</CardTitle>
              <CardDescription>Master GitHub Copilot for systems analysis and technical documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-2xl">📊</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Create Process Flowcharts</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Transform verbose policy text into clear, visual Mermaid flowcharts with decision points, swimlanes, and error handling</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-2xl">📝</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Generate Data Contracts</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Extract data elements from requirements and create comprehensive OpenAPI specifications with validation rules</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="text-2xl">✅</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Build UAT Test Cases</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Generate thorough user acceptance test scenarios that trace back to specific policy requirements</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-2xl">🔗</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Establish Traceability</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Create requirements traceability matrices linking policy requirements through stories to test cases</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Before You Start</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-purple-200 dark:border-purple-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Prerequisites Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded border-2 border-purple-500 flex items-center justify-center text-xs">□</div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Copilot is running and tested in your IDE</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded border-2 border-purple-500 flex items-center justify-center text-xs">□</div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Reviewed <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">inputs/onboarding-policy.md</code></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded border-2 border-purple-500 flex items-center justify-center text-xs">□</div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Have Copilot Chat open and ready</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded border-2 border-purple-500 flex items-center justify-center text-xs">□</div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Template files available for reference</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded border-2 border-purple-500 flex items-center justify-center text-xs">□</div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Prompt guides open in separate window</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-purple-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Success Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">You'll know you're succeeding when:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500">✓</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Your flowcharts clearly show decision points and error paths</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500">✓</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Your data contracts include proper validation and examples</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500">✓</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Your UAT scenarios trace back to specific policy requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500">✓</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Your artifacts would be usable by developers and testers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use This Path */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How to Use This Path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">Step 1</Badge>
                <CardTitle className="text-lg">Prepare</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                <ul className="space-y-2">
                  <li>• Review the input policy document</li>
                  <li>• Scan template files for output formats</li>
                  <li>• Open Copilot Chat and test it</li>
                  <li>• Keep prompt guides handy</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">Step 2</Badge>
                <CardTitle className="text-lg">Execute</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                <ul className="space-y-2">
                  <li>• Read full exercise instructions first</li>
                  <li>• Use the provided optimized prompts</li>
                  <li>• Check work at each checkpoint</li>
                  <li>• Don't aim for perfection initially</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">Step 3</Badge>
                <CardTitle className="text-lg">Validate</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                <ul className="space-y-2">
                  <li>• Compare to success metrics</li>
                  <li>• Check artifact integration</li>
                  <li>• Validate against policy requirements</li>
                  <li>• Review solutions if needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scenario Context */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Scenario Context</h2>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle>Customer Onboarding & Identity Verification</CardTitle>
              <CardDescription>Regulated financial services environment</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                All exercises use a realistic scenario from a regulated financial institution. The source policy document contains:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <div className="flex items-start gap-2">
                  <div className="text-purple-500">•</div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">7 detailed policy sections with decision rules</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-purple-500">•</div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Compliance requirements (FINRA, BSA, PATRIOT Act)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-purple-500">•</div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">SLA requirements and error handling procedures</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-purple-500">•</div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Data retention and audit trail specifications</span>
                </div>
              </div>
              <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-lg border border-purple-200 dark:border-purple-800 mb-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                  This mirrors actual systems analyst work where you must interpret complex regulatory policies, design technical processes that ensure compliance, create data contracts for system integration, and establish comprehensive testing strategies.
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-1">📄 Source Policy Document:</p>
                <code className="text-xs bg-white/50 dark:bg-black/30 px-2 py-1 rounded">
                  path-b-process-data/inputs/onboarding-policy.md
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Artifact Integration */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">How Artifacts Work Together</h2>
          <Card className="border-2 border-purple-200 dark:border-purple-900">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-3xl">
                    📊
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Process Flowchart</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Shows WHAT happens and WHEN</p>
                  <div className="text-2xl text-purple-500">↓</div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 italic">Informs what data is needed at each step</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-3xl">
                    📝
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Data Contract</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Defines data structure and validation</p>
                  <div className="text-2xl text-purple-500">↓</div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 italic">Defines what needs to be tested</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">UAT & Traceability</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Validates process and data work correctly</p>
                  <div className="text-2xl text-purple-500">↓</div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 italic">Proves compliance with policy</p>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg text-center">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Integration Check:</strong> Each artifact should reference the others. Your flowchart steps should use data from your schema, and your test cases should validate both the process flow and data validation rules.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Exercises Timeline */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Exercises Timeline</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-purple-200 dark:border-purple-900 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-500">Exercise 1</Badge>
                  <Badge variant="outline">15 min</Badge>
                </div>
                <CardTitle>Process Flow Generation</CardTitle>
                <CardDescription>25:00 - 40:00</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Transform policy text into visual Mermaid flowcharts with decision points, swimlanes, and error handling.
                </p>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Generate basic process flow</li>
                  <li>• Add swimlanes for actors</li>
                  <li>• Enhance error handling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-purple-900 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-500">Exercise 2</Badge>
                  <Badge variant="outline">12 min</Badge>
                </div>
                <CardTitle>Data Contracts</CardTitle>
                <CardDescription>40:00 - 52:00</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Extract data elements and create comprehensive OpenAPI specifications with validation rules and examples.
                </p>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Extract data elements from policy</li>
                  <li>• Generate OpenAPI schema</li>
                  <li>• Add test data examples</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-purple-900 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-500">Exercise 3</Badge>
                  <Badge variant="outline">13 min</Badge>
                </div>
                <CardTitle>Traceability & UAT</CardTitle>
                <CardDescription>52:00 - 65:00</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Create comprehensive UAT test cases and requirements traceability matrices with full linkage.
                </p>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Link artifacts to requirements</li>
                  <li>• Generate UAT test cases</li>
                  <li>• Create traceability matrix</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Learning Materials</h2>

          <Tabs defaultValue="exercises" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="exercises">Exercises</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="prompts">Prompt Guides</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
            </TabsList>

            <TabsContent value="exercises" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>📋 Exercise Instructions</CardTitle>
                  <CardDescription>Step-by-step guides for each exercise with checkpoints and deliverables</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Exercise 1: Process Flow Generation</h4>
                      <Badge className="bg-purple-500">15 min</Badge>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Transform complex policy text into clear, visual Mermaid flowcharts showing decision points, error handling, and swimlanes.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">
                      <strong>📄 File:</strong> <code className="bg-white dark:bg-slate-800 px-1 rounded">path-b-process-data/exercises/exercise-1-process-flow.md</code>
                    </p>

                    <div className="space-y-3 text-sm mb-3">
                      <div className="bg-white dark:bg-slate-900 p-2 rounded">
                        <strong className="text-purple-600 dark:text-purple-400">Step 1:</strong> Generate basic process flow (5 min)
                        <ul className="text-xs mt-1 ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                          <li>• Create flowchart showing 4-step verification workflow</li>
                          <li>• Include decision points with specific criteria</li>
                          <li>• Add timeout handling paths</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-slate-900 p-2 rounded">
                        <strong className="text-purple-600 dark:text-purple-400">Step 2:</strong> Add swimlanes for different actors (5 min)
                        <ul className="text-xs mt-1 ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                          <li>• Organize by Customer, System, Manual Review, External Services</li>
                          <li>• Show clear handoffs between actors</li>
                          <li>• Maintain all decision points and error paths</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-slate-900 p-2 rounded">
                        <strong className="text-purple-600 dark:text-purple-400">Step 3:</strong> Enhance error handling (5 min)
                        <ul className="text-xs mt-1 ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                          <li>• Add retry logic with attempt counters</li>
                          <li>• Include OFAC matches and escalation paths</li>
                          <li>• Show customer communication points</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 p-2 rounded border border-green-200 dark:border-green-800">
                      <p className="text-xs font-semibold text-green-900 dark:text-green-100 mb-1">✓ Success Checkpoints:</p>
                      <ul className="text-xs text-green-800 dark:text-green-200 space-y-1">
                        <li>• Flowchart shows all 4 main steps clearly</li>
                        <li>• Decision points have specific criteria (e.g., &quot;Score &gt;= 85?&quot;)</li>
                        <li>• Error paths lead to appropriate recovery or manual review</li>
                        <li>• Swimlanes show correct actor for each action</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Exercise 2: Data Contracts Generation</h4>
                      <Badge className="bg-purple-500">12 min</Badge>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Extract data elements from policy requirements and generate comprehensive OpenAPI specifications with validation rules.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">
                      <strong>📄 File:</strong> <code className="bg-white dark:bg-slate-800 px-1 rounded">path-b-process-data/exercises/exercise-2-data-contracts.md</code>
                    </p>

                    <div className="space-y-3 text-sm mb-3">
                      <div className="bg-white dark:bg-slate-900 p-2 rounded">
                        <strong className="text-purple-600 dark:text-purple-400">Step 1:</strong> Extract data elements (4 min)
                        <ul className="text-xs mt-1 ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                          <li>• Identify 20-25 fields from policy document</li>
                          <li>• Group into logical categories (Personal, Contact, Employment)</li>
                          <li>• Note validation requirements and business rules</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-slate-900 p-2 rounded">
                        <strong className="text-purple-600 dark:text-purple-400">Step 2:</strong> Generate OpenAPI schema (5 min)
                        <ul className="text-xs mt-1 ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                          <li>• Create nested schema with proper structure</li>
                          <li>• Add validation patterns (SSN, phone, email formats)</li>
                          <li>• Include business rule constraints (age 18+, deposit limits)</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-slate-900 p-2 rounded">
                        <strong className="text-purple-600 dark:text-purple-400">Step 3:</strong> Add test data (3 min)
                        <ul className="text-xs mt-1 ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                          <li>• Create 3 different customer examples</li>
                          <li>• Include standard, edge case, and high-value scenarios</li>
                          <li>• Ensure all examples pass validation rules</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 p-2 rounded border border-green-200 dark:border-green-800">
                      <p className="text-xs font-semibold text-green-900 dark:text-green-100 mb-1">✓ Success Checkpoints:</p>
                      <ul className="text-xs text-green-800 dark:text-green-200 space-y-1">
                        <li>• Schema captures all data mentioned in policy</li>
                        <li>• Validation rules enforce business requirements</li>
                        <li>• Test examples demonstrate different scenarios</li>
                        <li>• Schema is valid YAML with proper structure</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Exercise 3: Traceability & UAT Generation</h4>
                      <Badge className="bg-purple-500">13 min</Badge>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Create comprehensive UAT test cases and requirements traceability matrices linking policy to implementation to testing.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">
                      <strong>📄 File:</strong> <code className="bg-white dark:bg-slate-800 px-1 rounded">path-b-process-data/exercises/exercise-3-traceability-uat.md</code>
                    </p>

                    <div className="space-y-3 text-sm mb-3">
                      <div className="bg-white dark:bg-slate-900 p-2 rounded">
                        <strong className="text-purple-600 dark:text-purple-400">Step 1:</strong> Create user stories (4 min)
                        <ul className="text-xs mt-1 ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                          <li>• Write 4-5 stories covering main policy requirements</li>
                          <li>• Include 2-3 acceptance criteria per story</li>
                          <li>• Reference flowchart steps and data elements</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-slate-900 p-2 rounded">
                        <strong className="text-purple-600 dark:text-purple-400">Step 2:</strong> Generate UAT test cases (5 min)
                        <ul className="text-xs mt-1 ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                          <li>• Create happy path, edge case, and error scenarios</li>
                          <li>• Use realistic test data from your schema</li>
                          <li>• Include compliance validation points</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-slate-900 p-2 rounded">
                        <strong className="text-purple-600 dark:text-purple-400">Step 3:</strong> Build traceability matrix (4 min)
                        <ul className="text-xs mt-1 ml-4 space-y-1 text-slate-600 dark:text-slate-400">
                          <li>• Map requirements to stories to test cases</li>
                          <li>• Include data elements and process steps</li>
                          <li>• Perform coverage analysis and identify gaps</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 p-2 rounded border border-green-200 dark:border-green-800">
                      <p className="text-xs font-semibold text-green-900 dark:text-green-100 mb-1">✓ Success Checkpoints:</p>
                      <ul className="text-xs text-green-800 dark:text-green-200 space-y-1">
                        <li>• Every policy requirement has a user story</li>
                        <li>• All stories are covered by UAT test cases</li>
                        <li>• Test cases validate both process and data</li>
                        <li>• RTM shows complete end-to-end traceability</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
                    <h5 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Integration Reminder</h5>
                    <p className="text-xs text-blue-800 dark:text-blue-200">
                      After completing all three exercises, review how your artifacts work together: Your flowchart should show where data from your schema is collected and validated, and your test cases should verify both the process flow and data validation work correctly. This integration proves your artifacts are production-ready.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="templates" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>📄 Templates & Examples</CardTitle>
                  <CardDescription>Reference templates for each artifact type</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🔀 Mermaid Flowchart Template</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Flowchart patterns, syntax examples, and styling guidelines
                      </p>
                      <p className="text-xs text-slate-500">path-b-process-data/templates/mermaid-flowchart-template.md</p>
                    </div>

                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">📋 OpenAPI Contract Template</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Data contract examples with validation rules and schema structure
                      </p>
                      <p className="text-xs text-slate-500">path-b-process-data/templates/openapi-contract-template.yaml</p>
                    </div>

                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">✅ UAT Test Case Template</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        User acceptance test scenario format and best practices
                      </p>
                      <p className="text-xs text-slate-500">path-b-process-data/templates/uat-test-case-template.md</p>
                    </div>

                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🔗 Traceability Matrix Template</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Requirements traceability matrix structure and examples
                      </p>
                      <p className="text-xs text-slate-500">path-b-process-data/templates/traceability-matrix-template.md</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="prompts" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>💡 Prompt Guides</CardTitle>
                  <CardDescription>Optimized prompts for quality output</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">📊 Flowchart Generation Prompts</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Prompts for generating basic flowcharts, adding swimlanes, and enhancing with comprehensive error handling
                    </p>
                    <p className="text-xs text-slate-500 mb-2">path-b-process-data/prompts/01-flowchart-generation-prompts.md</p>
                    <div className="bg-white/50 dark:bg-slate-900/50 p-2 rounded text-xs font-mono">
                      Includes: Basic flow generation • Swimlane enhancement • Error path additions
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">📝 Data Contract Prompts</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Prompts for extracting data elements, generating OpenAPI schemas, and creating validation rules
                    </p>
                    <p className="text-xs text-slate-500 mb-2">path-b-process-data/prompts/02-data-contract-prompts.md</p>
                    <div className="bg-white/50 dark:bg-slate-900/50 p-2 rounded text-xs font-mono">
                      Includes: Data extraction • Schema generation • Test data creation
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">✅ UAT & Traceability Prompts</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Prompts for generating test cases, creating user stories, and building traceability matrices
                    </p>
                    <p className="text-xs text-slate-500 mb-2">path-b-process-data/prompts/03-uat-traceability-prompts.md</p>
                    <div className="bg-white/50 dark:bg-slate-900/50 p-2 rounded text-xs font-mono">
                      Includes: Story creation • UAT generation • RTM building
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solutions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>✨ Sample Solutions</CardTitle>
                  <CardDescription>Reference examples of completed artifacts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
                    <p className="text-sm text-yellow-900 dark:text-yellow-100">
                      💡 <strong>Tip:</strong> Try completing each exercise before reviewing solutions. These examples show what "good" looks like but your solution may differ based on your approach.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border-l-4 border-purple-500 bg-slate-50 dark:bg-slate-900">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Basic Flowchart</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Simple process flow example</p>
                      <p className="text-xs text-slate-500">sample-flowchart-basic.md</p>
                    </div>

                    <div className="p-4 border-l-4 border-purple-500 bg-slate-50 dark:bg-slate-900">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Swimlane Flowchart</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Advanced diagram with actors</p>
                      <p className="text-xs text-slate-500">sample-flowchart-swimlanes.md</p>
                    </div>

                    <div className="p-4 border-l-4 border-purple-500 bg-slate-50 dark:bg-slate-900">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Data Contract</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Complete OpenAPI specification</p>
                      <p className="text-xs text-slate-500">sample-data-contract.yaml</p>
                    </div>

                    <div className="p-4 border-l-4 border-purple-500 bg-slate-50 dark:bg-slate-900">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">UAT Scenarios</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Comprehensive test cases</p>
                      <p className="text-xs text-slate-500">sample-uat-scenarios.md</p>
                    </div>

                    <div className="p-4 border-l-4 border-purple-500 bg-slate-50 dark:bg-slate-900">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Traceability Matrix</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Full RTM example</p>
                      <p className="text-xs text-slate-500">sample-traceability-matrix.md</p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    <p className="mb-2"><strong>All solutions located in:</strong></p>
                    <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs">
                      path-b-process-data/solutions/
                    </code>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Skills Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Skills for Systems Analysts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Process Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Breaking down complex workflows into understandable steps with clear decision criteria and exception handling. Learn to visualize business processes that stakeholders and developers can both understand.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  Data Modeling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Identifying data elements, relationships, and constraints that support business processes while ensuring data quality. Create technical specifications that enforce business rules.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Test Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Creating comprehensive test scenarios that validate both functional requirements and edge cases while maintaining traceability. Ensure quality through systematic testing approaches.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🔗</span>
                  Requirements Traceability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Linking business policies through technical specifications to test cases, enabling impact analysis and audit compliance. Maintain full visibility from requirement to validation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why These Skills Matter */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="text-2xl">Why These Skills Matter in Regulated Environments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                In regulated environments like financial services, systems analysts must:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Ensure Compliance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Every system change must demonstrate adherence to regulatory requirements</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">📋</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Enable Auditability</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Clear traceability from requirements to implementation to testing</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">⚠️</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Reduce Risk</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Comprehensive analysis prevents costly compliance failures</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Bridge Teams</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Translate between business stakeholders and technical implementers</p>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-slate-600 dark:text-slate-400 italic text-center">
                GitHub Copilot accelerates this work while maintaining quality and consistency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-l-4 border-purple-500">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">💡 Context is King</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  The more specific context you provide to Copilot about the business domain and compliance requirements, the better your output
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🔄 Iterate and Refine</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use Copilot's critique capabilities to identify gaps and improve your artifacts
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🎯 Think Systematically</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Each artifact should support the others - flowcharts inform data contracts, which inform test cases
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">📝 Document Decisions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always include rationale for why you structured something a particular way
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Troubleshooting & Getting Help */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Troubleshooting & Getting Help</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">🔧</span>
                  Common Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">Mermaid syntax errors</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Check proper flowchart declaration, balanced brackets, and valid node connections. Use <a href="https://mermaid.live" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">mermaid.live</a> to validate.
                  </p>
                </div>
                <Separator />
                <div>
                  <h5 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">YAML syntax errors</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Check indentation (use spaces, not tabs), ensure proper nesting, validate bracket matching.
                  </p>
                </div>
                <Separator />
                <div>
                  <h5 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">Flowchart is too complex</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Focus on main flow first, then add error handling. Use subgraphs to group related processes.
                  </p>
                </div>
                <Separator />
                <div>
                  <h5 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">Missing business context</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Add to prompt: "Focus on business process steps that stakeholders need to understand, not technical implementation details."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  Where to Get Help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">📚</span>
                  <div>
                    <h5 className="font-semibold text-sm text-slate-900 dark:text-white">During Exercises</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Reference the prompt guides and templates in your directory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">🔍</span>
                  <div>
                    <h5 className="font-semibold text-sm text-slate-900 dark:text-white">Stuck on Syntax</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Check the resource files in <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">/resources</code></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✨</span>
                  <div>
                    <h5 className="font-semibold text-sm text-slate-900 dark:text-white">Need Examples</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Look at solution files (but try first!)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">🤖</span>
                  <div>
                    <h5 className="font-semibold text-sm text-slate-900 dark:text-white">Copilot Issues</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">See <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">/resources/copilot-troubleshooting.md</code></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800">
            <CardHeader>
              <CardTitle>📋 Quick File Reference</CardTitle>
              <CardDescription>All materials are located in your repository</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Input Materials</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded flex-1">path-b-process-data/inputs/onboarding-policy.md</code>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Exercises</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded flex-1">path-b-process-data/exercises/exercise-1-process-flow.md</code>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded flex-1">path-b-process-data/exercises/exercise-2-data-contracts.md</code>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded flex-1">path-b-process-data/exercises/exercise-3-traceability-uat.md</code>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Templates</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded flex-1">path-b-process-data/templates/*.md</code>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Prompt Guides</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">▸</span>
                      <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded flex-1">path-b-process-data/prompts/*.md</code>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-200 dark:border-purple-900 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Ready to Transform Policy into Technical Artifacts?</CardTitle>
              <CardDescription className="text-base mt-2">
                Begin your journey through Path B's comprehensive exercises
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/50 dark:bg-slate-900/50 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-center">Your Learning Path</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Process Flow Generation (15 min)</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Create visual Mermaid flowcharts from policy text</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Data Contracts (12 min)</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Extract data elements and generate OpenAPI schemas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Traceability & UAT (13 min)</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Create test cases and requirements traceability matrices</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h5 className="font-semibold text-yellow-900 dark:text-yellow-100 text-sm mb-1">Pro Tip</h5>
                    <p className="text-xs text-yellow-800 dark:text-yellow-200">
                      Start by opening the input policy document (<code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">path-b-process-data/inputs/onboarding-policy.md</code>) and reading through it to understand the business context before beginning Exercise 1.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <a href="https://github.com/arula-ai/copilot-analysts-lab/blob/main/path-b-process-data/exercises/exercise-1-process-flow.md" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">
                    📖 Exercise 1: Process Flow
                  </Button>
                </a>
                <a href="https://github.com/arula-ai/copilot-analysts-lab/blob/main/path-b-process-data/inputs/onboarding-policy.md" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    📄 View Policy Document
                  </Button>
                </a>
                <a href="https://github.com/arula-ai/copilot-analysts-lab/tree/main/path-b-process-data/templates" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    📋 See All Templates
                  </Button>
                </a>
              </div>

              <Separator />

              <div className="text-center space-y-2">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  All materials are in your repository at:
                </p>
                <code className="text-xs bg-white dark:bg-slate-800 px-3 py-2 rounded inline-block font-mono">
                  path-b-process-data/
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
