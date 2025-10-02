import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Target, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function PathAPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge className="bg-indigo-500">Path A</Badge>
          <Badge variant="outline"><Clock className="w-3 h-3 mr-1" /> 40 minutes</Badge>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Backlog from Meeting Notes
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Transform messy stakeholder meeting notes into production-ready backlog items using GitHub Copilot
        </p>
      </div>

      {/* Overview */}
      <Card className="mb-8 border-indigo-200 dark:border-indigo-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-500" />
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Generate Epics', desc: 'Extract high-level business capabilities from unstructured notes' },
              { title: 'Create User Stories', desc: 'Split epics into INVEST-compliant stories with clear business value' },
              { title: 'Write Acceptance Criteria', desc: 'Develop testable Given/When/Then scenarios including edge cases' },
              { title: 'Build GitHub Issues', desc: 'Format stories as issues ready for sprint planning with full traceability' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scenario */}
      <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-indigo-200 dark:border-indigo-900">
        <CardHeader>
          <CardTitle>The Scenario</CardTitle>
          <CardDescription className="text-base">
            You've just facilitated a product discovery session about automated account alerts for a retail banking application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 dark:text-slate-300">
              The meeting notes are typical: some clear requirements, lots of ambiguity, buried technical constraints, and scattered compliance considerations
            </p>
          </div>
          <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">Your job:</p>
            <p className="text-slate-700 dark:text-slate-300">
              Turn these notes into a well-structured backlog that development can work from
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Exercise Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Exercise Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: '12 min', range: '25:00-37:00', title: 'Exercise 1: Epics & Stories', outcome: '2-3 epics, 3-5 user stories' },
              { time: '13 min', range: '37:00-50:00', title: 'Exercise 2: Acceptance Criteria', outcome: 'Gherkin scenarios for each story' },
              { time: '15 min', range: '50:00-65:00', title: 'Exercise 3: GitHub Issues', outcome: 'Formatted issues with traceability' }
            ].map((ex, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex-shrink-0">
                  <Badge variant="outline" className="text-lg font-mono">{ex.time}</Badge>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 dark:text-white">{ex.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{ex.range}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Outcome:</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{ex.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stakeholder Notes & Exercises */}
      <Tabs defaultValue="stakeholder-notes" className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="stakeholder-notes">Stakeholder Notes</TabsTrigger>
          <TabsTrigger value="exercise-1">Exercise 1</TabsTrigger>
          <TabsTrigger value="exercise-2">Exercise 2</TabsTrigger>
          <TabsTrigger value="exercise-3">Exercise 3</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
        </TabsList>

        {/* Stakeholder Notes */}
        <TabsContent value="stakeholder-notes" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>Product Discovery Session - Automated Account Alerts</CardTitle>
                <Badge variant="outline">October 15, 2024</Badge>
              </div>
              <CardDescription>Meeting notes from stakeholder discovery session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Attendees</h3>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>Jane Diaz - Product Owner</li>
                    <li>Marcus Chen - Senior Dev Lead</li>
                    <li>Sarah Williams - Compliance Representative</li>
                    <li>Kevin Park - UX Designer</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Key Requirements</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-medium text-slate-900 dark:text-white">Customer Needs</p>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                        <li>• Real-time alerts when account balance drops below threshold</li>
                        <li>• Customizable threshold ($0 - $5,000 range)</li>
                        <li>• Multiple channels: email, SMS, push notifications</li>
                        <li>• Customer choice on notification preferences</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4">
                      <p className="font-medium text-slate-900 dark:text-white">Ambiguities (Need Clarification)</p>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                        <li>• Definition of "immediate" / "fast" alerts (SLA pending)</li>
                        <li>• Multi-account balance calculation rules</li>
                        <li>• Retry and failure handling logic</li>
                        <li>• Alert frequency for overdrawn accounts</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium text-slate-900 dark:text-white">Technical Constraints</p>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                        <li>• Notification service: 100 calls/minute rate limit</li>
                        <li>• Core banking: 15-minute batch updates (not real-time)</li>
                        <li>• Mobile team: 24-hour lead time for schema changes</li>
                        <li>• DBA approval: 5 days for database changes</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="font-medium text-slate-900 dark:text-white">Compliance Requirements</p>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                        <li>• FINRA Rule 4512: Audit trail required (all alerts logged)</li>
                        <li>• TCPA: No alerts 9 PM - 8 AM without customer permission</li>
                        <li>• Joint accounts: Both holders must receive alerts</li>
                        <li>• 7-year data retention requirement</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-medium text-slate-900 dark:text-white">Business Value</p>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                        <li>• 30% reduction in overdraft incidents (pilot data)</li>
                        <li>• Competitive necessity (customer retention)</li>
                        <li>• 40% of customers with 3+ overdrafts switch banks</li>
                        <li>• Industry standard feature</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-950 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-2">MVP Scope (from meeting):</p>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    Checking and savings accounts, one global threshold, email and/or SMS notifications, alerts during business hours unless customer opts in for 24/7
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Exercise 1 */}
        <TabsContent value="exercise-1" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>Exercise 1: Epic & Story Generation</CardTitle>
                <Badge><Clock className="w-3 h-3 mr-1" /> 12 minutes</Badge>
              </div>
              <CardDescription>Transform stakeholder notes into structured epics and INVEST-compliant user stories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="step-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Step 1</Badge>
                      <span>Generate Epics (4 min)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Instructions</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>Open the stakeholder notes (see "Stakeholder Notes" tab)</li>
                        <li>Use Copilot to generate 2-3 epics that capture high-level business capabilities</li>
                        <li>Review and refine the output for business focus</li>
                      </ol>
                    </div>

                    <div className="border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Sample Prompt</h4>
                      <pre className="text-xs bg-white dark:bg-slate-950 rounded p-3 overflow-x-auto">
{`You are a senior business analyst in a regulated financial services environment.

Review these stakeholder notes from our product discovery session:
[COPY AND PASTE the entire stakeholder notes content]

Generate 2-3 epics that capture the high-level business capabilities.

For each epic, provide:
- Epic Title: [Concise, business-focused]
- Description: [2-3 sentences]
- Business Value: [Problem + expected outcome]
- Key Assumptions: [2-3 assumptions]
- High-level story themes: [3-5 story areas]

Constraints:
- Each epic should represent 2-4 weeks of work
- Focus on customer-facing capabilities
- Flag any compliance requirements
- Identify dependencies on external systems`}
                      </pre>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4 border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Checkpoint ✓</h4>
                      <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                        <li>✓ 2-3 well-structured epics</li>
                        <li>✓ Each epic has clear business value statement</li>
                        <li>✓ Compliance requirements are flagged</li>
                        <li>✓ Dependencies are identified</li>
                        <li>✓ Story themes are outlined</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Step 2</Badge>
                      <span>Split Epic into Stories (5 min)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Instructions</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>Choose your most complex epic from Step 1</li>
                        <li>Use Copilot to split it into 3-5 INVEST-compliant user stories</li>
                        <li>Review each story against INVEST criteria</li>
                      </ol>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">INVEST Principles</h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm text-blue-800 dark:text-blue-200">
                        <div><strong>I</strong>ndependent - Can be built separately</div>
                        <div><strong>N</strong>egotiable - Describes what, not how</div>
                        <div><strong>V</strong>aluable - Clear benefit</div>
                        <div><strong>E</strong>stimable - Team can size it</div>
                        <div><strong>S</strong>mall - Fits in one sprint</div>
                        <div><strong>T</strong>estable - Criteria are verifiable</div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4 border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Checkpoint ✓</h4>
                      <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                        <li>✓ 3-5 user stories from chosen epic</li>
                        <li>✓ Each follows "As a...I want...So that" format</li>
                        <li>✓ Acceptance criteria are specific and testable</li>
                        <li>✓ Stories are sized Small/Medium</li>
                        <li>✓ Stories cover the epic's scope completely</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Step 3</Badge>
                      <span>Add Risks & Dependencies (3 min)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Instructions</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>Select one story from Step 2 (most complex/risky)</li>
                        <li>Use Copilot to identify dependencies and risks</li>
                        <li>Add analysis to your story documentation</li>
                      </ol>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">What to Identify</h4>
                      <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
                        <li>• Technical dependencies (APIs, systems, databases)</li>
                        <li>• External dependencies (other teams, third parties)</li>
                        <li>• Assumptions that could become risks</li>
                        <li>• Regulatory/compliance considerations</li>
                        <li>• Potential delivery risks</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Exercise 2 */}
        <TabsContent value="exercise-2" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>Exercise 2: Acceptance Criteria Generation</CardTitle>
                <Badge><Clock className="w-3 h-3 mr-1" /> 13 minutes</Badge>
              </div>
              <CardDescription>Convert user stories into comprehensive Gherkin acceptance criteria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Gherkin Syntax Quick Reference</h4>
                <pre className="text-xs bg-white dark:bg-slate-950 rounded p-3 overflow-x-auto text-blue-800 dark:text-blue-200">
{`Feature: Brief description of the feature
  As a [role]
  I want [functionality]
  So that [business value]

Scenario: Brief description of the scenario
  Given [initial context/state]
  When [action/event]
  Then [expected outcome]
  And [additional expected outcome]`}
                </pre>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="step-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Step 1</Badge>
                      <span>Happy Path Scenarios (4 min)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Goal</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                        Convert your best user story into detailed Gherkin scenarios covering the primary success path and each acceptance criterion.
                      </p>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Points</h4>
                      <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                        <li>• Use specific, realistic financial data (account numbers, dollar amounts)</li>
                        <li>• Include compliance-relevant steps where applicable</li>
                        <li>• Make assertions measurable and verifiable</li>
                        <li>• No vague language ("some," "appropriate," "valid")</li>
                      </ul>
                    </div>

                    <div className="border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Example Scenario</h4>
                      <pre className="text-xs bg-white dark:bg-slate-950 rounded p-3 overflow-x-auto">
{`Scenario: Customer sets valid balance threshold
  Given I am logged in as customer "John Smith" with account "AC-789012"
  And my current account balance is $2,500.00
  When I navigate to alert settings
  And I enter threshold amount "$500.00"
  And I save the threshold setting
  Then the threshold is saved to my profile
  And I see confirmation message "Alert threshold set to $500.00 for all accounts"
  And the system logs the threshold change for audit purposes`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Step 2</Badge>
                      <span>Negative & Edge Cases (5 min)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: 'Boundary Conditions', items: ['Min/max values ($0, $5,000)', 'Character limits', 'Special characters'] },
                        { title: 'Error Scenarios', items: ['Invalid inputs', 'Missing data', 'System failures'] },
                        { title: 'Security Scenarios', items: ['Unauthorized access', 'Session timeout', 'Permission violations'] },
                        { title: 'Compliance Scenarios', items: ['Audit trail validation', 'Data retention', 'Regulatory limits'] }
                      ].map((category, idx) => (
                        <div key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{category.title}</h4>
                          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            {category.items.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Step 3</Badge>
                      <span>Data-Driven Scenarios (4 min)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Convert repetitive scenarios into data-driven Scenario Outlines using Examples tables for more comprehensive test coverage.
                    </p>
                    <div className="border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Example Scenario Outline</h4>
                      <pre className="text-xs bg-white dark:bg-slate-950 rounded p-3 overflow-x-auto">
{`Scenario Outline: Threshold validation with various input values
  Given I am logged in as customer "<customer_name>"
  When I enter threshold amount "<threshold_input>"
  Then I should see "<result_type>"

Examples: Valid thresholds
  | customer_name | threshold_input | result_type          |
  | John Smith    | $500.00        | Success confirmation |
  | Jane Doe      | $5000.00       | Success confirmation |

Examples: Invalid thresholds
  | customer_name | threshold_input | result_type                              |
  | Alice Johnson | -$100.00       | Error: Threshold cannot be negative      |
  | Bob Wilson    | $5001.00       | Error: Threshold must be between $0-$5000|`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Exercise 3 */}
        <TabsContent value="exercise-3" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>Exercise 3: GitHub Issues Creation</CardTitle>
                <Badge><Clock className="w-3 h-3 mr-1" /> 15 minutes</Badge>
              </div>
              <CardDescription>Convert user stories and Gherkin scenarios into well-structured GitHub issues</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="step-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Step 1</Badge>
                      <span>Create Structured Issues (5 min)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Essential Components</h4>
                      <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                        <li>✓ Clear, actionable title (under 50 characters)</li>
                        <li>✓ Complete user story description</li>
                        <li>✓ Acceptance criteria as checkboxes</li>
                        <li>✓ Definition of done checklist</li>
                        <li>✓ Technical notes for developers</li>
                        <li>✓ Dependencies and risks</li>
                        <li>✓ Estimated effort (story points/hours)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Step 2</Badge>
                      <span>Add Details & Checklists (5 min)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Gherkin Test Scenarios',
                        'Design Considerations',
                        'Testing Strategy',
                        'Compliance Requirements'
                      ].map((section, idx) => (
                        <div key={idx} className="bg-indigo-50 dark:bg-indigo-950 rounded-lg p-3 border border-indigo-200 dark:border-indigo-800">
                          <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">{section}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Step 3</Badge>
                      <span>Labels & Linking (5 min)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Label Categories</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">priority:high</Badge>
                          <Badge variant="outline">type:feature</Badge>
                          <Badge variant="outline">component:frontend</Badge>
                          <Badge variant="outline">component:backend</Badge>
                          <Badge variant="outline">compliance:audit</Badge>
                          <Badge variant="outline">compliance:security</Badge>
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Issue Linking</h4>
                        <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                          <li>• <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">Closes #123</code> - Closes issue #123</li>
                          <li>• <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">Depends on #124</code> - Requires #124 first</li>
                          <li>• <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">Blocks #125</code> - #125 waits for this</li>
                          <li>• <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">Related to #126</code> - Related work</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Solutions */}
        <TabsContent value="solutions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Solution Examples
              </CardTitle>
              <CardDescription>Reference examples showing what good looks like</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-950 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                  <p className="text-sm text-amber-900 dark:text-amber-100 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <strong>Don't peek early!</strong> You'll learn more by trying the exercises first, then comparing with solutions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Sample Epics', desc: '3 complete exemplary epics with business value and compliance' },
                    { title: 'Sample Stories with INVEST', desc: '8-10 complete user stories with full INVEST analysis' },
                    { title: 'Sample Gherkin Scenarios', desc: '5-6 stories with positive, negative, and edge case scenarios' },
                    { title: 'Sample GitHub Issues', desc: '3 complete issues with formatting and traceability' }
                  ].map((solution, idx) => (
                    <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{solution.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{solution.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* What You'll Create */}
      <Card className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            What You'll Create
          </CardTitle>
          <CardDescription>By the end of the 40 minutes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              '2-3 well-formed epics with business value and story themes',
              '5-8 INVEST-compliant user stories',
              '15-25 Gherkin acceptance criteria (3-5 per story)',
              '5-8 GitHub issues formatted and ready for sprint planning',
              'Full traceability from meeting notes to stories to test scenarios'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Ready to Start?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-indigo-50 dark:bg-indigo-950 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Prerequisites Checklist</h4>
            <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
              <li>☐ GitHub Copilot is installed and working</li>
              <li>☐ You've tested Copilot Chat (Ctrl/Cmd+Shift+I)</li>
              <li>☐ You've reviewed the stakeholder notes above</li>
              <li>☐ You have the prompt guides ready</li>
            </ul>
          </div>

          <a href="https://github.com/arula-ai/copilot-analysts-lab/blob/main/path-a-backlog/exercises/exercise-1-epics-and-stories.md" target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-indigo-500 hover:bg-indigo-600" size="lg">
              Start Exercise 1: Epics & Stories →
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
