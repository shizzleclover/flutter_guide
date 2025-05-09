import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FlutterDevelopmentPath } from "@/components/flutter-development-path"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Flutter <span className="gradient-text">FAQ</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Flutter and Dart for beginners.
            </p>
          </div>

          <Tabs defaultValue="faq" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
              <TabsTrigger value="path">Development Path</TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    What is Flutter and why should I learn it?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile,
                      web, and desktop from a single codebase. You should consider learning Flutter because:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>You can build apps for iOS and Android with one codebase</li>
                      <li>It offers fast development with hot reload</li>
                      <li>It has beautiful, customizable widgets</li>
                      <li>It's growing in popularity and job opportunities</li>
                      <li>It's backed by Google with a strong community</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    Do I need to know Dart before learning Flutter?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      You don't need to be a Dart expert before starting with Flutter, but learning the basics of Dart
                      will make your Flutter journey smoother. Dart is the programming language used to build Flutter
                      apps.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      The good news is that Dart is relatively easy to learn, especially if you have experience with
                      other programming languages like JavaScript, Java, or C#. Many Flutter tutorials will teach you
                      Dart concepts as you go.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      We recommend spending a few days learning Dart basics before diving deep into Flutter.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    What are the system requirements for Flutter development?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Flutter works on Windows, macOS, and Linux. Here are the basic requirements:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Operating System: Windows 10 or later, macOS 10.14 or later, Linux (64-bit)</li>
                      <li>Disk Space: At least 2.8 GB (not including IDE/tools)</li>
                      <li>Tools: Git, a code editor (VS Code, Android Studio, or IntelliJ recommended)</li>
                      <li>For iOS development: A Mac with Xcode installed</li>
                      <li>For Android development: Android Studio and Android SDK</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      You don't need a powerful computer to get started, but more RAM (8GB+) and a faster CPU will
                      improve the development experience, especially when running emulators.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">What is a Widget in Flutter?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      In Flutter, everything is a widget! Widgets are the basic building blocks of a Flutter app's user
                      interface. They describe what their view should look like given their current configuration and
                      state.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Think of widgets like LEGO blocks that you combine to build your app's interface. There are two
                      main types of widgets:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>
                        <strong>StatelessWidget:</strong> A widget that doesn't change (like a text label or an icon)
                      </li>
                      <li>
                        <strong>StatefulWidget:</strong> A widget that can change over time (like a checkbox or slider)
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      Examples of common widgets include Text, Button, Image, Row, Column, and Container.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    How long does it take to learn Flutter?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      The time it takes to learn Flutter depends on your background and how much time you can dedicate
                      to learning:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>
                        <strong>Basics (2-4 weeks):</strong> Understanding Dart, Flutter widgets, and building simple
                        UIs
                      </li>
                      <li>
                        <strong>Intermediate (1-3 months):</strong> State management, navigation, working with APIs
                      </li>
                      <li>
                        <strong>Advanced (3-6 months):</strong> Complex animations, custom widgets, performance
                        optimization
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      If you already know another programming language, you'll likely learn faster. The best way to
                      learn is by building projects - start small and gradually take on more complex apps.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    What is the difference between StatelessWidget and StatefulWidget?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">This is one of the most fundamental concepts in Flutter:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>
                        <strong>StatelessWidget:</strong> A widget that doesn't maintain any state. Once built, it
                        cannot change its properties. It's redrawn completely if its parent passes new data to it. Use
                        for UI elements that don't change (like a text label).
                      </li>
                      <li>
                        <strong>StatefulWidget:</strong> A widget that can change over time. It maintains state that
                        might change during the lifetime of the widget. Use for interactive elements like forms,
                        sliders, or anything that updates based on user interaction.
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      Think of StatelessWidget as a photograph (unchanging) and StatefulWidget as a video (can change
                      over time).
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    What is "hot reload" in Flutter?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Hot reload is one of Flutter's most loved features! It allows you to see changes to your code
                      almost instantly, without losing the current state of your app.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      When you make changes to your code and save, Flutter injects your updated source code into the
                      running Dart Virtual Machine (VM). The framework then automatically rebuilds the widget tree,
                      allowing you to quickly see the effects of your changes.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      This makes development much faster because you don't have to restart your app from scratch every
                      time you make a small change. You can experiment with UI changes and see the results in real-time.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    What is state management in Flutter?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      State management refers to how you manage and update the data (state) in your Flutter application.
                      It's about keeping track of when data changes and rebuilding the UI accordingly.
                    </p>
                    <p className="text-muted-foreground mt-2">Flutter offers several approaches to state management:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>
                        <strong>setState:</strong> The simplest form, built into Flutter (good for beginners)
                      </li>
                      <li>
                        <strong>Provider:</strong> A recommended approach that's relatively easy to learn
                      </li>
                      <li>
                        <strong>Riverpod:</strong> An improved version of Provider
                      </li>
                      <li>
                        <strong>Bloc/Cubit:</strong> More structured but has a steeper learning curve
                      </li>
                      <li>
                        <strong>GetX:</strong> An all-in-one solution for state, navigation, and dependencies
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      For beginners, start with setState for simple apps, then move to Provider as your apps get more
                      complex.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    Can I use Flutter for web development?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Yes! Flutter can be used to build web applications in addition to mobile apps. Flutter for web
                      allows you to run Flutter applications in a browser without modifying your source code.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      While Flutter for web is production-ready, there are some considerations:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Web apps might be larger in size compared to traditional web apps</li>
                      <li>Some platform-specific plugins might not work on the web</li>
                      <li>SEO can be more challenging with Flutter web apps</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      Flutter web works best for interactive applications, dashboards, and tools rather than
                      content-focused websites.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    What are some good first projects to build with Flutter?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Here are some beginner-friendly project ideas to practice your Flutter skills:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
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
                      <li>
                        <strong>Simple Note-Taking App:</strong> Learn about local storage
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      Start with something simple that you can complete in a few days, then gradually increase
                      complexity as you learn more.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">
                    What are some common Dart programming concepts I should know?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Here are some fundamental Dart concepts that will help you with Flutter development:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>
                        <strong>Variables and Data Types:</strong> int, double, String, bool, List, Map
                      </li>
                      <li>
                        <strong>Functions:</strong> How to define and call functions, arrow functions
                      </li>
                      <li>
                        <strong>Classes and Objects:</strong> Object-oriented programming in Dart
                      </li>
                      <li>
                        <strong>Constructors:</strong> Regular, named, and factory constructors
                      </li>
                      <li>
                        <strong>Async Programming:</strong> async, await, Future
                      </li>
                      <li>
                        <strong>Null Safety:</strong> Understanding nullable and non-nullable types
                      </li>
                      <li>
                        <strong>Collections:</strong> Working with lists, maps, and sets
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      Don't worry about mastering all of these before starting Flutter. You can learn them as you go
                      along your Flutter journey.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="brutalist-border mb-4">
                  <AccordionTrigger className="text-xl font-bold px-6">How do I debug my Flutter app?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      Flutter provides several tools for debugging your applications:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>
                        <strong>print() statements:</strong> The simplest way to output values to the console
                      </li>
                      <li>
                        <strong>Debugger:</strong> Set breakpoints in your code using your IDE
                      </li>
                      <li>
                        <strong>Flutter DevTools:</strong> A suite of performance and debugging tools
                      </li>
                      <li>
                        <strong>Flutter Inspector:</strong> Visualize and explore your widget tree
                      </li>
                      <li>
                        <strong>Performance Overlay:</strong> Check your app's rendering performance
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      For beginners, start with print() statements and gradually learn to use the debugger and DevTools
                      as you build more complex apps.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="path" className="w-full">
              <div className="brutalist-border p-6 bg-black rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Flutter Development Path</h2>
                <div className="overflow-x-auto">
                  <FlutterDevelopmentPath />
                </div>
              </div>

              <div className="mt-8 brutalist-border p-6">
                <h3 className="text-xl font-bold mb-4">About This Development Path</h3>
                <p className="text-muted-foreground mb-4">
                  This development path outlines the recommended learning journey for Flutter developers, from beginner
                  to advanced. Each node represents a key skill or concept area you should master before moving to the
                  next level.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold mb-2">Beginner Level</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>Dart Basics:</strong> Variables, functions, classes, async programming
                      </li>
                      <li>
                        <strong>Flutter Fundamentals:</strong> Project structure, widgets, hot reload
                      </li>
                      <li>
                        <strong>UI Basics:</strong> Core widgets, layouts, styling
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Intermediate Level</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>State Management:</strong> setState, Provider, Riverpod
                      </li>
                      <li>
                        <strong>Navigation:</strong> Routes, Navigator, deep linking
                      </li>
                      <li>
                        <strong>Layouts & Widgets:</strong> Complex layouts, custom widgets
                      </li>
                      <li>
                        <strong>Data & Backend:</strong> Working with data sources
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Advanced Level</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>APIs & Networking:</strong> RESTful APIs, GraphQL, WebSockets
                      </li>
                      <li>
                        <strong>Local Storage:</strong> SharedPreferences, SQLite, Hive
                      </li>
                      <li>
                        <strong>Firebase:</strong> Authentication, Firestore, Cloud Functions
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Expert Level</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <strong>Advanced UI:</strong> Animations, custom painters, responsive design
                      </li>
                      <li>
                        <strong>Testing:</strong> Unit, widget, and integration testing
                      </li>
                      <li>
                        <strong>Production & Deployment:</strong> CI/CD, app stores, performance optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ready to start your Flutter journey? Check out our resources and roadmap!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/resources">Explore Resources</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/roadmap">View Roadmap</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
