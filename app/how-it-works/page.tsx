import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Code,
  FileText,
  Lightbulb,
  MessageSquare,
  Rocket,
  Users,
} from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we help bring your final year project to life, from idea to implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Our process"
                width={500}
                height={500}
                className="brutalist-border rounded-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 p-3 rounded-full">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">A Streamlined Approach</h2>
              <p className="text-lg text-muted-foreground">
                We've developed a simple yet effective 4-step process to ensure your final year project is completed on
                time, meets academic requirements, and exceeds expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Consultation</h3>
                    <p className="text-muted-foreground">
                      Initial discussion to understand your project requirements and academic expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Planning</h3>
                    <p className="text-muted-foreground">
                      Detailed project plan with tech stack, features, and development milestones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Development</h3>
                    <p className="text-muted-foreground">
                      Building your project with regular updates and progress reports.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Delivery</h3>
                    <p className="text-muted-foreground">
                      Project handover with documentation and defense preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Detailed Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A closer look at each step of our development process.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-block bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">1. Consultation</h3>
                  <p className="text-lg text-muted-foreground">
                    The first step is understanding your project requirements, academic expectations, and timeline.
                    We'll discuss:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <span>Your project idea and academic requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <span>Timeline and submission deadlines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <span>Budget and package options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <span>Technical feasibility and scope</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    After the consultation, we'll provide a proposal with recommended package and timeline.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="brutalist-card p-6">
                  <h4 className="text-xl font-bold mb-4">Consultation Checklist</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <ClipboardCheck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Prepare Your Project Brief</p>
                        <p className="text-sm text-muted-foreground">
                          Outline your project idea, requirements, and any specific academic guidelines.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Know Your Timeline</p>
                        <p className="text-sm text-muted-foreground">
                          Have your submission deadlines and key milestones ready.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Gather Reference Materials</p>
                        <p className="text-sm text-muted-foreground">
                          Collect any relevant research papers, similar projects, or academic guidelines.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Identify Stakeholders</p>
                        <p className="text-sm text-muted-foreground">
                          Note who will be evaluating your project (supervisors, external examiners).
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <Link href="/contact">Book Your Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2">
                <div className="brutalist-card p-6">
                  <h4 className="text-xl font-bold mb-4">Planning Deliverables</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-secondary/10 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Project Scope Document</p>
                        <p className="text-sm text-muted-foreground">
                          Detailed outline of features, functionalities, and project boundaries.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-secondary/10 p-2 rounded-full">
                        <Code className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Technical Architecture</p>
                        <p className="text-sm text-muted-foreground">
                          Proposed tech stack, system design, and architecture diagrams.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-secondary/10 p-2 rounded-full">
                        <Calendar className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Development Timeline</p>
                        <p className="text-sm text-muted-foreground">
                          Milestone-based schedule with clear deliverables and deadlines.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-secondary/10 p-2 rounded-full">
                        <ClipboardCheck className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Acceptance Criteria</p>
                        <p className="text-sm text-muted-foreground">
                          Clear metrics for project success and completion requirements.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1">
                <div className="space-y-6">
                  <div className="inline-block bg-secondary/10 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-bold">2. Planning</h3>
                  <p className="text-lg text-muted-foreground">
                    Once we've agreed on the scope, we'll create a detailed project plan that includes:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-1" />
                      <span>Technical architecture and system design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-1" />
                      <span>Feature breakdown and development milestones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-1" />
                      <span>Resource allocation and team assignments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-1" />
                      <span>Risk assessment and mitigation strategies</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    We'll review the plan with you to ensure it meets your requirements before proceeding to
                    development.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-block bg-accent/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold">3. Development</h3>
                  <p className="text-lg text-muted-foreground">
                    This is where we bring your project to life. Our development process includes:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-1" />
                      <span>Agile development with regular sprints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-1" />
                      <span>Weekly progress updates and demos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-1" />
                      <span>Continuous testing and quality assurance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-1" />
                      <span>Code documentation and inline comments</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    You'll have visibility into the development process through regular updates and milestone reviews.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Development process"
                  width={600}
                  height={400}
                  className="brutalist-border rounded-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project delivery"
                  width={600}
                  height={400}
                  className="brutalist-border rounded-lg w-full h-auto"
                />
              </div>
              <div className="order-1">
                <div className="space-y-6">
                  <div className="inline-block bg-primary/10 p-3 rounded-full">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">4. Delivery</h3>
                  <p className="text-lg text-muted-foreground">
                    The final stage is delivering your completed project and ensuring you're ready to present it:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <span>Complete codebase with documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <span>Deployment and hosting setup (if included)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <span>Code walkthrough and knowledge transfer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <span>Defense preparation and presentation support</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    We ensure you understand your project thoroughly and are prepared to defend it successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Typical Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How long does the process take? Here's a typical timeline for a standard project.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Week 1 */}
              <div className="relative">
                <div className="md:flex items-center md:justify-between">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="brutalist-card p-4 md:ml-auto">
                      <h3 className="font-bold text-xl mb-2">Week 1</h3>
                      <p className="text-muted-foreground">Initial consultation, project scoping, and proposal.</p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 w-4 h-4 rounded-full bg-primary md:left-1/2 md:-ml-2"></div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="relative">
                <div className="md:flex items-center md:justify-between">
                  <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                  <div className="absolute left-4 top-4 w-4 h-4 rounded-full bg-secondary md:left-1/2 md:-ml-2"></div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="brutalist-card p-4">
                      <h3 className="font-bold text-xl mb-2">Week 2</h3>
                      <p className="text-muted-foreground">
                        Detailed planning, architecture design, and project setup.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weeks 3-6 */}
              <div className="relative">
                <div className="md:flex items-center md:justify-between">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="brutalist-card p-4 md:ml-auto">
                      <h3 className="font-bold text-xl mb-2">Weeks 3-6</h3>
                      <p className="text-muted-foreground">Core development phase with weekly progress updates.</p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 w-4 h-4 rounded-full bg-accent md:left-1/2 md:-ml-2"></div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                </div>
              </div>

              {/* Week 7 */}
              <div className="relative">
                <div className="md:flex items-center md:justify-between">
                  <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                  <div className="absolute left-4 top-4 w-4 h-4 rounded-full bg-primary md:left-1/2 md:-ml-2"></div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="brutalist-card p-4">
                      <h3 className="font-bold text-xl mb-2">Week 7</h3>
                      <p className="text-muted-foreground">Testing, bug fixing, and quality assurance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 8 */}
              <div className="relative">
                <div className="md:flex items-center md:justify-between">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="brutalist-card p-4 md:ml-auto">
                      <h3 className="font-bold text-xl mb-2">Week 8</h3>
                      <p className="text-muted-foreground">Final delivery, documentation, and defense preparation.</p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 w-4 h-4 rounded-full bg-secondary md:left-1/2 md:-ml-2"></div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Note: Timeline may vary based on project complexity and package selected.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Ready to Bring Your Project to Life?</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Let's start the conversation about your final year project today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="brutalist-border text-lg px-8">
              <Link href="/packages">View Packages</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="brutalist-border text-lg px-8 bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
