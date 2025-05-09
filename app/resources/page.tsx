"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animations"
import { FlutterDevelopmentDiagram } from "@/components/flutter-diagram"
import { GDGMobileTrackCard } from "@/components/gdg-card"
import {
  BookOpen,
  Code,
  FileText,
  Github,
  Globe,
  Headphones,
  Heart,
  Layers,
  Library,
  Lightbulb,
  Smartphone,
  Star,
  Video,
  Youtube,
  Users,
} from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/20 to-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Flutter Learning Resources</h1>
            <p className="text-xl text-muted-foreground mb-8">
              A curated collection of the best resources to help you master Flutter development
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="https://flutter.dev/docs" target="_blank" rel="noopener noreferrer">
                  Official Documentation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#community">Community Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flutter Development Diagram */}
      <section className="py-16 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Flutter Development Path</h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up">
            <FlutterDevelopmentDiagram />
          </ScrollAnimation>
        </div>
      </section>

      {/* GDG Mobile Track Card */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Join Our Community</h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up">
            <GDGMobileTrackCard />
          </ScrollAnimation>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-muted" id="resources">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Learning Resources</h2>
          </ScrollAnimation>

          <Tabs defaultValue="official" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full max-w-3xl">
                <TabsTrigger value="official">Official</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="books">Books</TabsTrigger>
                <TabsTrigger value="community" id="community">
                  Community
                </TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
            </div>

            {/* Official Resources */}
            <TabsContent value="official">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
                <ResourceCard
                  icon={<BookOpen className="h-6 w-6" />}
                  title="Flutter Documentation"
                  description="Comprehensive official documentation covering all aspects of Flutter development."
                  link="https://flutter.dev/docs"
                  tags={["Official", "Documentation", "Beginner"]}
                />
                <ResourceCard
                  icon={<Code className="h-6 w-6" />}
                  title="Flutter Codelabs"
                  description="Guided, hands-on coding experiences to help you learn Flutter step by step."
                  link="https://flutter.dev/docs/codelabs"
                  tags={["Official", "Hands-on", "Beginner"]}
                />
                <ResourceCard
                  icon={<Layers className="h-6 w-6" />}
                  title="Flutter Cookbook"
                  description="Recipes for solving common Flutter problems with code examples."
                  link="https://flutter.dev/docs/cookbook"
                  tags={["Official", "Examples", "Intermediate"]}
                />
                <ResourceCard
                  icon={<Github className="h-6 w-6" />}
                  title="Flutter Samples"
                  description="Official sample apps demonstrating Flutter features and best practices."
                  link="https://github.com/flutter/samples"
                  tags={["Official", "Examples", "Intermediate"]}
                />
                <ResourceCard
                  icon={<Video className="h-6 w-6" />}
                  title="Flutter YouTube Channel"
                  description="Official Flutter channel with tutorials, talks, and updates."
                  link="https://www.youtube.com/c/flutterdev"
                  tags={["Official", "Videos", "All Levels"]}
                />
                <ResourceCard
                  icon={<Lightbulb className="h-6 w-6" />}
                  title="Flutter API Reference"
                  description="Detailed API documentation for Flutter framework classes and methods."
                  link="https://api.flutter.dev/"
                  tags={["Official", "API", "Reference"]}
                />
              </StaggerContainer>
            </TabsContent>

            {/* Tutorials */}
            <TabsContent value="tutorials">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
                <ResourceCard
                  icon={<BookOpen className="h-6 w-6" />}
                  title="Flutter Apprentice"
                  description="Learn to build cross-platform apps with Flutter from scratch."
                  link="https://www.raywenderlich.com/books/flutter-apprentice"
                  tags={["Tutorial", "Beginner", "Paid"]}
                />
                <ResourceCard
                  icon={<Globe className="h-6 w-6" />}
                  title="Flutter by Example"
                  description="A collection of examples showing how to use Flutter for common tasks."
                  link="https://flutterbyexample.com/"
                  tags={["Tutorial", "Examples", "Free"]}
                />
                <ResourceCard
                  icon={<Code className="h-6 w-6" />}
                  title="Flutter Crash Course"
                  description="A quick introduction to Flutter for developers who want to get started fast."
                  link="https://fluttercrashcourse.com/"
                  tags={["Tutorial", "Beginner", "Free"]}
                />
                <ResourceCard
                  icon={<Smartphone className="h-6 w-6" />}
                  title="Flutter Gems"
                  description="Curated list of Flutter packages and libraries with examples."
                  link="https://fluttergems.dev/"
                  tags={["Tutorial", "Packages", "Intermediate"]}
                />
                <ResourceCard
                  icon={<Layers className="h-6 w-6" />}
                  title="Flutter Awesome"
                  description="A curated list of awesome Flutter resources, libraries, tools, and projects."
                  link="https://flutterawesome.com/"
                  tags={["Tutorial", "Collection", "All Levels"]}
                />
                <ResourceCard
                  icon={<FileText className="h-6 w-6" />}
                  title="Flutter Institute"
                  description="In-depth articles and tutorials on Flutter development topics."
                  link="https://flutter.institute/"
                  tags={["Tutorial", "Articles", "Intermediate"]}
                />
              </StaggerContainer>
            </TabsContent>

            {/* Videos */}
            <TabsContent value="videos">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
                <ResourceCard
                  icon={<Youtube className="h-6 w-6" />}
                  title="Flutter Official Channel"
                  description="Official Flutter YouTube channel with tutorials and updates."
                  link="https://www.youtube.com/c/flutterdev"
                  tags={["Video", "Official", "All Levels"]}
                />
                <ResourceCard
                  icon={<Youtube className="h-6 w-6" />}
                  title="The Flutter Way"
                  description="High-quality Flutter UI tutorials and app development videos."
                  link="https://www.youtube.com/c/TheFlutterWay"
                  tags={["Video", "UI", "Intermediate"]}
                />
                <ResourceCard
                  icon={<Youtube className="h-6 w-6" />}
                  title="Flutter Mapp"
                  description="Practical Flutter tutorials with real-world examples."
                  link="https://www.youtube.com/c/FlutterMapp"
                  tags={["Video", "Practical", "All Levels"]}
                />
                <ResourceCard
                  icon={<Youtube className="h-6 w-6" />}
                  title="Reso Coder"
                  description="Advanced Flutter tutorials focusing on clean architecture and best practices."
                  link="https://www.youtube.com/c/ResoCoder"
                  tags={["Video", "Advanced", "Architecture"]}
                />
                <ResourceCard
                  icon={<Youtube className="h-6 w-6" />}
                  title="FilledStacks"
                  description="Flutter tutorials with a focus on architecture and production-ready apps."
                  link="https://www.youtube.com/c/FilledStacks"
                  tags={["Video", "Architecture", "Intermediate"]}
                />
                <ResourceCard
                  icon={<Video className="h-6 w-6" />}
                  title="Flutter Explained"
                  description="Tutorials explaining Flutter concepts in a clear and concise way."
                  link="https://www.youtube.com/c/FlutterExplained"
                  tags={["Video", "Concepts", "Beginner"]}
                />
              </StaggerContainer>
            </TabsContent>

            {/* Books */}
            <TabsContent value="books">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
                <ResourceCard
                  icon={<Library className="h-6 w-6" />}
                  title="Flutter in Action"
                  description="A practical guide to building high-performance Flutter applications."
                  link="https://www.manning.com/books/flutter-in-action"
                  tags={["Book", "Comprehensive", "Beginner to Intermediate"]}
                />
                <ResourceCard
                  icon={<Library className="h-6 w-6" />}
                  title="Beginning Flutter"
                  description="A hands-on guide to building mobile applications with Flutter."
                  link="https://www.amazon.com/Beginning-Flutter-Hands-Guide-Development/dp/1119550823"
                  tags={["Book", "Hands-on", "Beginner"]}
                />
                <ResourceCard
                  icon={<Library className="h-6 w-6" />}
                  title="Flutter Apprentice"
                  description="Learn to build cross-platform apps with Flutter from scratch."
                  link="https://www.raywenderlich.com/books/flutter-apprentice"
                  tags={["Book", "Practical", "Beginner to Intermediate"]}
                />
                <ResourceCard
                  icon={<Library className="h-6 w-6" />}
                  title="Flutter Complete Reference"
                  description="A comprehensive guide covering all aspects of Flutter development."
                  link="https://fluttercompletereference.com/"
                  tags={["Book", "Reference", "All Levels"]}
                />
                <ResourceCard
                  icon={<Library className="h-6 w-6" />}
                  title="Flutter Cookbook"
                  description="Solutions to common Flutter problems with code examples."
                  link="https://www.packtpub.com/product/flutter-cookbook/9781838823382"
                  tags={["Book", "Recipes", "Intermediate"]}
                />
                <ResourceCard
                  icon={<Library className="h-6 w-6" />}
                  title="Flutter for Beginners"
                  description="An introductory guide to building beautiful, cross-platform apps with Flutter."
                  link="https://www.packtpub.com/product/flutter-for-beginners-second-edition/9781800565999"
                  tags={["Book", "Beginner", "Step-by-step"]}
                />
              </StaggerContainer>
            </TabsContent>

            {/* Community */}
            <TabsContent value="community">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
                <ResourceCard
                  icon={<Heart className="h-6 w-6" />}
                  title="Flutter Community"
                  description="A community of Flutter enthusiasts with articles, packages, and resources."
                  link="https://flutter.community/"
                  tags={["Community", "Articles", "All Levels"]}
                />
                <ResourceCard
                  icon={<Users className="h-6 w-6" />}
                  title="Flutter Reddit"
                  description="Reddit community for Flutter developers to share and discuss."
                  link="https://www.reddit.com/r/FlutterDev/"
                  tags={["Community", "Discussion", "All Levels"]}
                />
                <ResourceCard
                  icon={<Headphones className="h-6 w-6" />}
                  title="It's All Widgets! Podcast"
                  description="A podcast dedicated to Flutter development and the community."
                  link="https://itsallwidgets.com/podcast"
                  tags={["Community", "Podcast", "All Levels"]}
                />
                <ResourceCard
                  icon={<Globe className="h-6 w-6" />}
                  title="Flutter Medium Publication"
                  description="Articles and tutorials from the Flutter community on Medium."
                  link="https://medium.com/flutter"
                  tags={["Community", "Articles", "All Levels"]}
                />
                <ResourceCard
                  icon={<Users className="h-6 w-6" />}
                  title="Flutter Discord"
                  description="Official Flutter Discord server for real-time discussions and help."
                  link="https://discord.gg/flutter"
                  tags={["Community", "Chat", "All Levels"]}
                />
                <ResourceCard
                  icon={<Users className="h-6 w-6" />}
                  title="GDG Mobile Track"
                  description="Join the Google Developer Group Mobile Track WhatsApp community."
                  link="https://chat.whatsapp.com/JU2bFChAxc6LlioOaVceut"
                  tags={["Community", "WhatsApp", "All Levels"]}
                  featured={true}
                />
              </StaggerContainer>
            </TabsContent>

            {/* Tools */}
            <TabsContent value="tools">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
                <ResourceCard
                  icon={<Code className="h-6 w-6" />}
                  title="Flutter DevTools"
                  description="Performance and debugging tools for Flutter applications."
                  link="https://flutter.dev/docs/development/tools/devtools"
                  tags={["Tool", "Debugging", "Performance"]}
                />
                <ResourceCard
                  icon={<Layers className="h-6 w-6" />}
                  title="Pub.dev"
                  description="Official package repository for Flutter and Dart packages."
                  link="https://pub.dev/"
                  tags={["Tool", "Packages", "All Levels"]}
                />
                <ResourceCard
                  icon={<Smartphone className="h-6 w-6" />}
                  title="Flutter Gallery"
                  description="Showcase of Flutter components and design patterns."
                  link="https://gallery.flutter.dev/"
                  tags={["Tool", "Examples", "UI"]}
                />
                <ResourceCard
                  icon={<Code className="h-6 w-6" />}
                  title="FlutterFire"
                  description="Official Firebase plugins for Flutter applications."
                  link="https://firebase.flutter.dev/"
                  tags={["Tool", "Firebase", "Backend"]}
                />
                <ResourceCard
                  icon={<Layers className="h-6 w-6" />}
                  title="Flutter Gems"
                  description="Curated list of Flutter packages and libraries with examples."
                  link="https://fluttergems.dev/"
                  tags={["Tool", "Packages", "Collection"]}
                />
                <ResourceCard
                  icon={<Star className="h-6 w-6" />}
                  title="Codemagic"
                  description="CI/CD tool specifically designed for Flutter applications."
                  link="https://codemagic.io/"
                  tags={["Tool", "CI/CD", "Deployment"]}
                />
              </StaggerContainer>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <ScrollAnimation>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary to-primary/60 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                  <p className="mb-6">
                    Subscribe to our newsletter to receive the latest Flutter news, tutorials, and resources directly in
                    your inbox.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Weekly Flutter tips and tricks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span>
                      <span>New tutorials and resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Flutter community events</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Exclusive content for subscribers</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input id="name" type="text" className="w-full p-2 border rounded-md" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="Your email address"
                      />
                    </div>
                    <Button className="w-full">Subscribe</Button>
                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

// Resource Card Component
function ResourceCard({
  icon,
  title,
  description,
  link,
  tags,
  featured = false,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  tags: string[]
  featured?: boolean
}) {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-md ${featured ? "border-2 border-primary" : ""}`}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full ${featured ? "bg-primary text-white" : "bg-muted"}`}>{icon}</div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-xs ${
                featured
                  ? "bg-primary/10 text-primary"
                  : index % 3 === 0
                    ? "bg-primary/10 text-primary"
                    : index % 3 === 1
                      ? "bg-secondary/10 text-secondary"
                      : "bg-accent/10 text-accent"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Visit Resource
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
