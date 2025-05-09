"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParallaxSection } from "@/components/parallax-section"
import {
  Check,
  CheckCircle2,
  ChevronRight,
  CircleSlash,
  Cpu,
  Database,
  FileText,
  Globe,
  Headphones,
  Layers,
  Rocket,
  Video,
} from "lucide-react"

const packages = [
  {
    name: "Starter Kit",
    emoji: "🚀",
    price: "₦150,000",
    description: "Basic project implementation for simple requirements.",
    features: [
      { name: "Project Scoping & Ideation", value: "1 session", icon: <Layers className="h-5 w-5" /> },
      { name: "Tech Stack Guidance", value: "Basic", icon: <Database className="h-5 w-5" /> },
      { name: "Web/Mobile App Development", value: "Yes (1 platform)", icon: <Globe className="h-5 w-5" /> },
      { name: "AI/ML Integration", value: false, icon: <Cpu className="h-5 w-5" /> },
      { name: "Backend & API Setup", value: "Basic CRUD", icon: <Database className="h-5 w-5" /> },
      { name: "Documentation", value: "Code overview only", icon: <FileText className="h-5 w-5" /> },
      { name: "Testing & Bug Fixing", value: "Minimal", icon: <CheckCircle2 className="h-5 w-5" /> },
      { name: "Presentation Coaching", value: false, icon: <Video className="h-5 w-5" /> },
      { name: "Hosting & Deployment", value: false, icon: <Globe className="h-5 w-5" /> },
      { name: "Walkthrough & Code Explanation", value: false, icon: <Headphones className="h-5 w-5" /> },
      { name: "Editable Codebase w/ Comments", value: true, icon: <FileText className="h-5 w-5" /> },
      { name: "Revision Cycle", value: false, icon: <Rocket className="h-5 w-5" /> },
    ],
  },
  {
    name: "Pro Build",
    emoji: "⭐",
    price: "₦250,000",
    description: "Comprehensive solution for standard final year projects.",
    features: [
      { name: "Project Scoping & Ideation", value: "2 sessions", icon: <Layers className="h-5 w-5" /> },
      { name: "Tech Stack Guidance", value: "School-focused stack", icon: <Database className="h-5 w-5" /> },
      { name: "Web/Mobile App Development", value: "Yes (web or mobile)", icon: <Globe className="h-5 w-5" /> },
      { name: "AI/ML Integration", value: "Basic model (if needed)", icon: <Cpu className="h-5 w-5" /> },
      { name: "Backend & API Setup", value: "Auth + custom endpoints", icon: <Database className="h-5 w-5" /> },
      { name: "Documentation", value: "Overview + tech summary", icon: <FileText className="h-5 w-5" /> },
      { name: "Testing & Bug Fixing", value: "Standard", icon: <CheckCircle2 className="h-5 w-5" /> },
      { name: "Presentation Coaching", value: "Slide prep + walkthrough", icon: <Video className="h-5 w-5" /> },
      { name: "Hosting & Deployment", value: "Optional add-on", icon: <Globe className="h-5 w-5" /> },
      { name: "Walkthrough & Code Explanation", value: true, icon: <Headphones className="h-5 w-5" /> },
      {
        name: "Editable Codebase w/ Comments",
        value: "Yes with inline comments",
        icon: <FileText className="h-5 w-5" />,
      },
      { name: "Revision Cycle", value: "1 round", icon: <Rocket className="h-5 w-5" /> },
    ],
    popular: true,
  },
  {
    name: "Premium Launch",
    emoji: "💎",
    price: "₦400,000",
    description: "Advanced solution for complex and high-stakes projects.",
    features: [
      { name: "Project Scoping & Ideation", value: "Unlimited strategic calls", icon: <Layers className="h-5 w-5" /> },
      { name: "Tech Stack Guidance", value: "Full-stack suggestion", icon: <Database className="h-5 w-5" /> },
      { name: "Web/Mobile App Development", value: "Yes (both if needed)", icon: <Globe className="h-5 w-5" /> },
      { name: "AI/ML Integration", value: "Intermediate level", icon: <Cpu className="h-5 w-5" /> },
      { name: "Backend & API Setup", value: "Full-featured backend", icon: <Database className="h-5 w-5" /> },
      { name: "Documentation", value: "Full academic report support", icon: <FileText className="h-5 w-5" /> },
      { name: "Testing & Bug Fixing", value: "QA-tested", icon: <CheckCircle2 className="h-5 w-5" /> },
      { name: "Presentation Coaching", value: "Full defense prep", icon: <Video className="h-5 w-5" /> },
      { name: "Hosting & Deployment", value: "Included", icon: <Globe className="h-5 w-5" /> },
      { name: "Walkthrough & Code Explanation", value: "Yes with video", icon: <Headphones className="h-5 w-5" /> },
      { name: "Editable Codebase w/ Comments", value: "Yes + README", icon: <FileText className="h-5 w-5" /> },
      { name: "Revision Cycle", value: "3 rounds", icon: <Rocket className="h-5 w-5" /> },
    ],
  },
  {
    name: "Custom Tier",
    emoji: "🔧",
    price: "Contact Us",
    description: "Tailored solution for unique and specialized requirements.",
    features: [
      { name: "Project Scoping & Ideation", value: "Fully tailored workshops", icon: <Layers className="h-5 w-5" /> },
      { name: "Tech Stack Guidance", value: "Startup-level architecture", icon: <Database className="h-5 w-5" /> },
      {
        name: "Web/Mobile App Development",
        value: "Yes + advanced features & logic",
        icon: <Globe className="h-5 w-5" />,
      },
      { name: "AI/ML Integration", value: "Custom-trained or research-grade", icon: <Cpu className="h-5 w-5" /> },
      {
        name: "Backend & API Setup",
        value: "Microservices, Firebase, or Supabase",
        icon: <Database className="h-5 w-5" />,
      },
      { name: "Documentation", value: "Research report + system diagrams", icon: <FileText className="h-5 w-5" /> },
      { name: "Testing & Bug Fixing", value: "Unit + integration testing", icon: <CheckCircle2 className="h-5 w-5" /> },
      {
        name: "Presentation Coaching",
        value: "Live rehearsals + defense training",
        icon: <Video className="h-5 w-5" />,
      },
      { name: "Hosting & Deployment", value: "Dev/staging/production deploy", icon: <Globe className="h-5 w-5" /> },
      {
        name: "Walkthrough & Code Explanation",
        value: "Deep dive or live session",
        icon: <Headphones className="h-5 w-5" />,
      },
      {
        name: "Editable Codebase w/ Comments",
        value: "Modular, clean & documented",
        icon: <FileText className="h-5 w-5" />,
      },
      { name: "Revision Cycle", value: "Unlimited (within dev scope)", icon: <Rocket className="h-5 w-5" /> },
    ],
  },
]

export default function PackagesPage() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature))
    } else {
      setSelectedFeatures([...selectedFeatures, feature])
    }
  }

  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Choose Your <span className="gradient-text">Package</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect package for your final year project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <ParallaxSection key={pkg.name} speed={0.1 * (index + 1)} className="h-full">
                <div className={`brutalist-card p-6 h-full flex flex-col ${pkg.popular ? "border-primary" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-4xl mb-2">{pkg.emoji}</div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-4">{pkg.price}</div>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>

                  <Button className={`mb-6 ${pkg.popular ? "bg-primary" : ""}`} asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>

                  <div className="space-y-4 mt-auto">
                    {pkg.features.slice(0, 5).map((feature) => (
                      <div key={feature.name} className="flex items-start gap-3">
                        <div className="text-primary mt-0.5">
                          {feature.value ? (
                            <Check className="h-5 w-5" />
                          ) : (
                            <CircleSlash className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{feature.name}</p>
                          {typeof feature.value === "string" && (
                            <p className="text-sm text-muted-foreground">{feature.value}</p>
                          )}
                        </div>
                      </div>
                    ))}

                    {pkg.features.length > 5 && (
                      <Button
                        variant="link"
                        className="p-0 h-auto text-primary"
                        onClick={() => toggleFeature(pkg.name)}
                      >
                        {selectedFeatures.includes(pkg.name) ? "Show less" : "Show more"}{" "}
                        <ChevronRight
                          className={`h-4 w-4 ml-1 transition-transform ${selectedFeatures.includes(pkg.name) ? "rotate-90" : ""}`}
                        />
                      </Button>
                    )}

                    {selectedFeatures.includes(pkg.name) && (
                      <div className="space-y-4 pt-2">
                        {pkg.features.slice(5).map((feature) => (
                          <div key={feature.name} className="flex items-start gap-3">
                            <div className="text-primary mt-0.5">
                              {feature.value ? (
                                <Check className="h-5 w-5" />
                              ) : (
                                <CircleSlash className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{feature.name}</p>
                              {typeof feature.value === "string" && (
                                <p className="text-sm text-muted-foreground">{feature.value}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Package Comparison</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare our packages to find the perfect fit for your project.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full brutalist-border">
              <thead>
                <tr className="bg-background">
                  <th className="p-4 text-left">Features</th>
                  {packages.map((pkg) => (
                    <th key={pkg.name} className="p-4 text-center">
                      <div className="text-2xl mb-2">{pkg.emoji}</div>
                      <div className="font-bold">{pkg.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packages[0].features.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? "bg-background" : "bg-muted"}>
                    <td className="p-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        {feature.icon}
                        <span>{feature.name}</span>
                      </div>
                    </td>
                    {packages.map((pkg) => (
                      <td key={`${pkg.name}-${feature.name}`} className="p-4 text-center border-t border-border">
                        {typeof pkg.features[index].value === "boolean" ? (
                          pkg.features[index].value ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <CircleSlash className="h-5 w-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span>{pkg.features[index].value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">How long does it take to complete a project?</h3>
              <p className="text-muted-foreground">
                Project timelines vary based on complexity. Starter projects typically take 2-3 weeks, while Premium
                projects may take 4-8 weeks. We'll provide a detailed timeline during consultation.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">Will I understand the code enough to defend it?</h3>
              <p className="text-muted-foreground">
                We provide thorough documentation and code walkthroughs. Our Premium and Custom packages include defense
                preparation to ensure you can confidently explain your project.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">Can I request revisions after delivery?</h3>
              <p className="text-muted-foreground">
                Yes, depending on your package. Starter has no revisions, Pro includes 1 round, Premium includes 3
                rounds, and Custom offers unlimited revisions within the agreed scope.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">Do you offer payment plans?</h3>
              <p className="text-muted-foreground">
                Yes, we offer flexible payment plans. Typically, we require a 50% deposit to begin work, with the
                remaining balance due upon completion or in installments for larger projects.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">What technologies do you work with?</h3>
              <p className="text-muted-foreground">
                We work with a wide range of technologies including React, Next.js, Flutter, Python, TensorFlow,
                Node.js, Django, Firebase, AWS, and more. We'll recommend the best stack for your project.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">Is my project idea confidential?</h3>
              <p className="text-muted-foreground">
                Yes, we treat all project ideas and details with strict confidentiality. We can sign an NDA if required
                for additional peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Book a consultation to discuss your project requirements and get a custom quote.
            </p>
          </div>

          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="brutalist-border text-lg px-8">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
