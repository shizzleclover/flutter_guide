"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollAnimation } from "@/components/scroll-animations"
import { HelpCircle, MessageSquare, Search } from "lucide-react"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQCategory {
  title: string
  icon: React.ReactNode
  faqs: FAQItem[]
}

interface FAQSectionProps {
  title?: string
  description?: string
  showCTA?: boolean
  categories?: FAQCategory[]
}

const defaultFAQs: FAQCategory[] = [
  {
    title: "Flutter Basics",
    icon: <HelpCircle className="h-5 w-5" />,
    faqs: [
      {
        question: "What is Flutter?",
        answer: (
          <div className="space-y-2">
            <p>
              Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and
              desktop from a single codebase. With Flutter, you can:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Build apps for iOS and Android with one codebase</li>
              <li>Create visually attractive user interfaces with built-in widgets</li>
              <li>Develop faster with hot reload</li>
              <li>Use a modern, reactive framework</li>
              <li>Access a growing ecosystem of packages and plugins</li>
            </ul>
            <p>
              Flutter uses Dart as its programming language and provides a rich set of pre-designed widgets to build
              native interfaces.
            </p>
          </div>
        ),
      },
      {
        question: "Do I need programming experience to learn Flutter?",
        answer:
          "While prior programming experience is helpful, Flutter is relatively beginner-friendly. If you're completely new to programming, it might take a bit longer to learn the concepts, but Flutter's hot reload feature makes the learning process more interactive and enjoyable. We recommend learning some Dart basics before diving into Flutter.",
      },
      {
        question: "What is a Widget in Flutter?",
        answer:
          "In Flutter, everything is a widget! Widgets are the basic building blocks of a Flutter app's user interface. They describe what their view should look like given their current configuration and state. Think of widgets like LEGO blocks that you combine to build your app's interface. There are two main types: StatelessWidget (doesn't change) and StatefulWidget (can change over time).",
      },
    ],
  },
  {
    title: "Dart Language",
    icon: <Code className="h-5 w-5" />,
    faqs: [
      {
        question: "What is Dart and why does Flutter use it?",
        answer: (
          <div className="space-y-2">
            <p>
              Dart is the programming language used to build Flutter apps. It's developed by Google and offers several
              advantages:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>It's optimized for UI development</li>
              <li>It's easy to learn, especially if you know JavaScript, Java, or C#</li>
              <li>It supports both just-in-time (JIT) and ahead-of-time (AOT) compilation</li>
              <li>It has strong typing and null safety features</li>
              <li>It's designed for building fast applications on any platform</li>
            </ul>
            <p>
              Flutter uses Dart because it provides the right balance of performance, productivity, and portability.
            </p>
          </div>
        ),
      },
      {
        question: "Do I need to learn Dart before Flutter?",
        answer:
          "You don't need to be a Dart expert before starting with Flutter, but learning the basics of Dart will make your Flutter journey smoother. Many Flutter tutorials will teach you Dart concepts as you go. We recommend spending a few days learning Dart basics (variables, functions, classes) before diving deep into Flutter.",
      },
      {
        question: "What are some key Dart features for Flutter development?",
        answer: (
          <div className="space-y-2">
            <p>Some important Dart features for Flutter development include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Null Safety:</strong> Helps prevent null reference errors
              </li>
              <li>
                <strong>Async/Await:</strong> Makes asynchronous code easier to write and understand
              </li>
              <li>
                <strong>Collections:</strong> Lists, Maps, and Sets for organizing data
              </li>
              <li>
                <strong>Cascade Notation (..):</strong> Allows multiple operations on the same object
              </li>
              <li>
                <strong>Spread Operator (...):</strong> Useful for combining collections
              </li>
              <li>
                <strong>Named Parameters:</strong> Makes function calls more readable
              </li>
            </ul>
            <p>
              Don't worry about mastering all of these before starting - you'll learn them as you build Flutter apps.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Development Setup",
    icon: <Laptop className="h-5 w-5" />,
    faqs: [
      {
        question: "What do I need to install to start Flutter development?",
        answer: (
          <div className="space-y-2">
            <p>To start developing with Flutter, you'll need to install:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The Flutter SDK</li>
              <li>An IDE (Visual Studio Code, Android Studio, or IntelliJ)</li>
              <li>Flutter and Dart plugins for your IDE</li>
              <li>For iOS development: Xcode (Mac only)</li>
              <li>For Android development: Android Studio and Android SDK</li>
              <li>Git for version control</li>
            </ul>
            <p>The Flutter website has detailed installation instructions for Windows, macOS, and Linux.</p>
          </div>
        ),
      },
      {
        question: "Which IDE is best for Flutter development?",
        answer:
          "The most popular IDEs for Flutter development are Visual Studio Code and Android Studio. VS Code is lightweight and has excellent Flutter extensions, while Android Studio provides more built-in tools for Android development. For beginners, we often recommend VS Code because it's simpler to set up and use, but both are excellent choices. The best one is the one you're most comfortable with.",
      },
      {
        question: "How do I run my Flutter app on a real device?",
        answer:
          "To run your Flutter app on a physical device, connect your device to your computer via USB, enable USB debugging in your device's developer options, and run 'flutter devices' to check if Flutter recognizes your device. Then use 'flutter run' or the Run button in your IDE to install and launch your app on the device. For iOS devices, you'll need to set up code signing in Xcode.",
      },
    ],
  },
  {
    title: "Learning Path",
    icon: <BookOpen className="h-5 w-5" />,
    faqs: [
      {
        question: "How long does it take to learn Flutter?",
        answer: (
          <div className="space-y-2">
            <p>
              The time it takes to learn Flutter depends on your background and how much time you can dedicate to
              learning:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Basics (2-4 weeks):</strong> Understanding Dart, Flutter widgets, and building simple UIs
              </li>
              <li>
                <strong>Intermediate (1-3 months):</strong> State management, navigation, working with APIs
              </li>
              <li>
                <strong>Advanced (3-6 months):</strong> Complex animations, custom widgets, performance optimization
              </li>
            </ul>
            <p>
              If you already know another programming language, you'll likely learn faster. The best way to learn is by
              building projects - start small and gradually take on more complex apps.
            </p>
          </div>
        ),
      },
      {
        question: "What are some good first projects to build with Flutter?",
        answer: (
          <div className="space-y-2">
            <p>Here are some beginner-friendly project ideas to practice your Flutter skills:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>To-Do List App:</strong> Practice basic state management and UI building
              </li>
              <li>
                <strong>Weather App:</strong> Learn to work with APIs and display dynamic data
              </li>
              <li>
                <strong>Calculator:</strong> Practice layout and logic implementation
              </li>
              <li>
                <strong>Quiz App:</strong> Work with navigation between screens
              </li>
              <li>
                <strong>Recipe App:</strong> Practice working with lists and detailed views
              </li>
            </ul>
            <p>
              Start with something simple that you can complete in a few days, then gradually increase complexity as you
              learn more.
            </p>
          </div>
        ),
      },
      {
        question: "What resources do you recommend for learning Flutter?",
        answer:
          "We recommend a combination of resources: the official Flutter documentation, YouTube tutorials (Flutter channel, The Flutter Way, Flutter Mapp), online courses (Udemy, Coursera), and hands-on practice with small projects. Our Resources page has a curated list of learning materials for all levels. The most important thing is to code along and build your own projects as you learn.",
      },
    ],
  },
]

export function FAQSection({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services, process, and policies.",
  showCTA = true,
  categories = defaultFAQs,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].title)

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ScrollAnimation animation="fade-in-left">
              <div className="brutalist-card p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.title}
                      variant={activeCategory === category.title ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveCategory(category.title)}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.title}
                    </Button>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="lg:col-span-3">
            <ScrollAnimation animation="fade-in-right">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className={`space-y-4 ${activeCategory === category.title ? "block" : "hidden"}`}
                >
                  <div className="brutalist-card p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                          <AccordionTrigger className="text-lg font-bold py-4">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </ScrollAnimation>

            {showCTA && (
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <div className="mt-8 brutalist-card p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                  <p className="text-muted-foreground mb-4">
                    We're here to help! Contact us for more information about our services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/contact">
                        <MessageSquare className="mr-2 h-4 w-4" /> Contact Us
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/faq">
                        <Search className="mr-2 h-4 w-4" /> Browse All FAQs
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Code, Laptop, BookOpen } from "lucide-react"
