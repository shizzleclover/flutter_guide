"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation, StaggerContainer, TiltCard } from "@/components/scroll-animations"
import { CodeBlock } from "@/components/code-block"
import { GDGMobileTrackCard } from "@/components/gdg-card"
import {
  BookOpen,
  Code,
  Cpu,
  Database,
  FileText,
  Github,
  Layers,
  Layout,
  Lightbulb,
  Smartphone,
  Star,
  Users,
  Zap,
  Info,
} from "lucide-react"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={heroRef}
          className="container flex flex-col items-center text-center z-10 transition-all duration-300"
          style={{
            opacity: Math.max(1 - scrollY / 500, 0),
            transform: `scale(${Math.max(1 - scrollY / 2000, 0.8)})`,
          }}
        >
          <div className="flutter-logo mb-8">
            <Image
              src="/placeholder.svg?height=120&width=150"
              alt="Flutter Logo"
              width={150}
              height={120}
              className="mx-auto"
            />
          </div>
          <h1 className="mega-text gradient-text mb-6">
            FLUTTER
            <br />
            ROADMAP
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Your comprehensive guide to learning Flutter and becoming a mobile app developer from scratch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="brutalist-border text-lg px-8">
              <Link href="/roadmap">Start Learning</Link>
            </Button>
            <Button size="lg" variant="outline" className="brutalist-border text-lg px-8">
              <Link href="/resources">View Resources</Link>
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-secondary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-16 h-16 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* What is Flutter Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">What is Flutter?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web,
                and desktop from a single codebase.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-in-left">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Why Choose Flutter?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full h-fit">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Fast Development</h4>
                      <p className="text-muted-foreground">
                        Flutter's hot reload helps you quickly experiment, build UIs, add features, and fix bugs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full h-fit">
                      <Smartphone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Single Codebase</h4>
                      <p className="text-muted-foreground">
                        Write once, deploy anywhere. Flutter works with existing code and is used by developers and
                        organizations around the world.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full h-fit">
                      <Layout className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Beautiful UI</h4>
                      <p className="text-muted-foreground">
                        Flutter's built-in widgets and rich customization options help you create stunning, natively
                        compiled applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div className="brutalist-card p-6">
                <h3 className="text-2xl font-bold mb-4">Hello World in Flutter</h3>
                <CodeBlock
                  code={`import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello Flutter!'),
        ),
        body: Center(
          child: Text(
            'Hello, World!',
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}`}
                  title="main.dart"
                  highlightLines={[3, 4, 7, 10, 11, 13, 15, 16]}
                  explanations={{
                    1: "This imports Flutter's material design package which contains pre-built widgets and styles.",
                    3: "The main() function is the entry point of every Flutter app.",
                    4: "This runs your app by calling the MyApp widget.",
                    7: "Creating a StatelessWidget for our app - use this for UI that doesn't change.",
                    9: "The build method defines what the widget looks like and returns the widget tree.",
                    10: "MaterialApp is the root widget that sets up the basic app structure.",
                    11: "Scaffold provides the basic layout structure (app bar, body, etc.).",
                    12: "AppBar is the top navigation bar of the app.",
                    15: "Center widget aligns its child in the middle of the screen.",
                    16: "Text widget displays text with optional styling.",
                    17: "The text content to display.",
                    18: "TextStyle lets you customize how the text looks."
                  }}
                />
                <p className="text-muted-foreground text-center mt-4">
                  Hover over any line and click the <Info className="inline h-4 w-4 text-blue-500" /> icon for explanations. This simple code creates your first Flutter app with a "Hello, World!" message.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Learning Path Overview */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Your Learning Path</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A structured roadmap to guide you from complete beginner to confident Flutter developer.
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-12">
            <div className="roadmap-step pl-16">
              <div className="roadmap-step-marker absolute left-0 top-0">1</div>
              <ScrollAnimation animation="fade-in-right">
                <div className="brutalist-card p-6">
                  <h3 className="text-2xl font-bold mb-2">Getting Started</h3>
                  <p className="text-muted-foreground mb-4">
                    Set up your development environment and learn the basics of Dart programming language.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Flutter SDK</span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Dart Basics</span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">IDE Setup</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/roadmap#getting-started">Learn More</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>

            <div className="roadmap-step pl-16">
              <div className="roadmap-step-marker absolute left-0 top-0">2</div>
              <ScrollAnimation animation="fade-in-right" delay={100}>
                <div className="brutalist-card p-6">
                  <h3 className="text-2xl font-bold mb-2">Flutter Fundamentals</h3>
                  <p className="text-muted-foreground mb-4">
                    Master the core concepts of Flutter: widgets, layouts, and state management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Widgets</span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Layouts</span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">State Management</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/roadmap#fundamentals">Learn More</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>

            <div className="roadmap-step pl-16">
              <div className="roadmap-step-marker absolute left-0 top-0">3</div>
              <ScrollAnimation animation="fade-in-right" delay={200}>
                <div className="brutalist-card p-6">
                  <h3 className="text-2xl font-bold mb-2">Building Your First App</h3>
                  <p className="text-muted-foreground mb-4">
                    Apply your knowledge by building a complete Flutter application from scratch.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">UI Design</span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Navigation</span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">User Input</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/roadmap#first-app">Learn More</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>

            <div className="roadmap-step pl-16">
              <div className="roadmap-step-marker absolute left-0 top-0">4</div>
              <ScrollAnimation animation="fade-in-right" delay={300}>
                <div className="brutalist-card p-6">
                  <h3 className="text-2xl font-bold mb-2">Advanced Concepts</h3>
                  <p className="text-muted-foreground mb-4">
                    Dive deeper into advanced Flutter topics to build more complex and feature-rich applications.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Networking</span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Local Storage</span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">Firebase</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/roadmap#advanced">Learn More</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Project Ideas</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Practice your Flutter skills by building these beginner-friendly projects.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={150}>
            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">To-Do List App</h3>
              <p className="text-muted-foreground mb-4">
                Create a simple to-do list app where users can add, remove, and mark tasks as complete.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">State Management</span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Lists</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">User Input</span>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/projects#todo">View Project</Link>
              </Button>
            </TiltCard>

            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-secondary/10 p-4 rounded-full w-fit mb-4">
                <Cpu className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Calculator App</h3>
              <p className="text-muted-foreground mb-4">
                Build a calculator with basic arithmetic operations to practice layout and logic.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">UI Layout</span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Logic</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">User Input</span>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/projects#calculator">View Project</Link>
              </Button>
            </TiltCard>

            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-accent/10 p-4 rounded-full w-fit mb-4">
                <Database className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Weather App</h3>
              <p className="text-muted-foreground mb-4">
                Create a weather app that fetches data from an API and displays current conditions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">API Integration</span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Async</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">UI Design</span>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/projects#weather">View Project</Link>
              </Button>
            </TiltCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Developer Stories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hear from developers who started their journey with Flutter.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in-right" delay={100}>
              <div className="brutalist-card p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "I started learning Flutter with zero programming experience. The clear syntax and hot reload feature
                  made it so much easier to learn than I expected!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <Image src="/placeholder.svg?height=48&width=48" alt="Developer" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah K.</h4>
                    <p className="text-sm text-muted-foreground">Junior Flutter Developer</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right" delay={200}>
              <div className="brutalist-card p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "Following a structured roadmap helped me go from complete beginner to publishing my first app on both
                  App Store and Google Play in just 3 months."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <Image src="/placeholder.svg?height=48&width=48" alt="Developer" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael T.</h4>
                    <p className="text-sm text-muted-foreground">Indie App Developer</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right" delay={300}>
              <div className="brutalist-card p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "The Flutter community is incredibly supportive. Whenever I got stuck, I found help through forums,
                  Discord, and Stack Overflow. It made learning so much easier."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <Image src="/placeholder.svg?height=48&width=48" alt="Developer" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">Priya M.</h4>
                    <p className="text-sm text-muted-foreground">Mobile Developer</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Learning Resources</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore these valuable resources to support your Flutter learning journey.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="scale-in" delay={100}>
              <div className="brutalist-card p-6 text-center h-full flex flex-col">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Official Documentation</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Comprehensive guides, tutorials, and API references from the Flutter team.
                </p>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="https://flutter.dev/docs" target="_blank" rel="noopener noreferrer">
                    Explore Docs
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={200}>
              <div className="brutalist-card p-6 text-center h-full flex flex-col">
                <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Code className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Codelabs</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Guided, hands-on coding experiences to help you learn Flutter step by step.
                </p>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="https://flutter.dev/docs/codelabs" target="_blank" rel="noopener noreferrer">
                    Try Codelabs
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={300}>
              <div className="brutalist-card p-6 text-center h-full flex flex-col">
                <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Github className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sample Apps</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Explore open-source Flutter apps to learn from real-world examples.
                </p>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="https://github.com/flutter/samples" target="_blank" rel="noopener noreferrer">
                    View Samples
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={400}>
              <div className="brutalist-card p-6 text-center h-full flex flex-col">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Join forums, Discord servers, and local meetups to connect with other Flutter developers.
                </p>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href="https://flutter.dev/community" target="_blank" rel="noopener noreferrer">
                    Join Community
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 z-0"></div>

        {/* Animated shapes */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-white/5 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-white/10 animate-float"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>

        <div className="container relative z-20">
          <ScrollAnimation animation="scale-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">Ready to Start Your Flutter Journey?</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-12">
                Begin your path to becoming a mobile app developer today with our comprehensive Flutter roadmap.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="secondary" className="brutalist-border text-lg px-8 py-6 text-xl">
                  <Link href="/roadmap">View Roadmap</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="brutalist-border text-lg px-8 py-6 text-xl bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/resources">Explore Resources</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Beginner Friendly</h3>
                <p className="text-white/80">
                  Our roadmap is designed for complete beginners with no prior coding experience.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Project-Based Learning</h3>
                <p className="text-white/80">
                  Learn by building real apps with practical examples and guided projects.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={300}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Comprehensive Resources</h3>
                <p className="text-white/80">
                  Access a curated collection of tutorials, documentation, and community support.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="mt-12">
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <div className="max-w-md mx-auto">
                <GDGMobileTrackCard />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
