"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  Code2, 
  Database, 
  Globe, 
  LayoutGrid, 
  Layers, 
  LineChart, 
  Network, 
  PackageOpen, 
  RefreshCw,
  Rocket,
  ServerIcon,
  ShieldCheck,
  Smartphone,
  Workflow
} from "lucide-react"

// Concept type definition
type Concept = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: string
  complexity: "beginner" | "intermediate" | "advanced"
}

// Concepts data
const conceptsData: Concept[] = [
  // State Management
  {
    id: "state-management",
    title: "State Management",
    description: "Learn different approaches to manage application state in Flutter applications.",
    icon: <Layers className="h-6 w-6" />,
    category: "architecture",
    complexity: "intermediate",
  },
  {
    id: "bloc-pattern",
    title: "BLoC Pattern",
    description: "Implement the Business Logic Component pattern for state management in Flutter.",
    icon: <Workflow className="h-6 w-6" />,
    category: "architecture",
    complexity: "advanced",
  },
  {
    id: "riverpod",
    title: "Riverpod",
    description: "Use Riverpod for simple but powerful state management and dependency injection.",
    icon: <RefreshCw className="h-6 w-6" />,
    category: "architecture",
    complexity: "intermediate",
  },
  {
    id: "provider",
    title: "Provider Pattern",
    description: "Learn the widely-used Provider pattern for managing state in Flutter.",
    icon: <Network className="h-6 w-6" />,
    category: "architecture",
    complexity: "intermediate",
  },
  
  // Data & APIs
  {
    id: "rest-api",
    title: "REST API Integration",
    description: "Connect your Flutter app to REST APIs for data fetching and management.",
    icon: <Globe className="h-6 w-6" />,
    category: "data",
    complexity: "intermediate",
  },
  {
    id: "graphql",
    title: "GraphQL Integration",
    description: "Implement GraphQL in Flutter apps for more efficient data queries.",
    icon: <Database className="h-6 w-6" />,
    category: "data",
    complexity: "advanced",
  },
  {
    id: "caching",
    title: "Data Caching",
    description: "Implement effective caching strategies to improve app performance and offline support.",
    icon: <ServerIcon className="h-6 w-6" />,
    category: "data",
    complexity: "intermediate",
  },
  {
    id: "local-storage",
    title: "Local Storage Options",
    description: "Compare different options for storing data locally in Flutter applications.",
    icon: <PackageOpen className="h-6 w-6" />,
    category: "data",
    complexity: "beginner",
  },
  
  // UI & UX
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Build Flutter interfaces that work well across different device sizes and orientations.",
    icon: <Smartphone className="h-6 w-6" />,
    category: "ui",
    complexity: "intermediate",
  },
  {
    id: "custom-animations",
    title: "Custom Animations",
    description: "Create beautiful and performant custom animations in Flutter.",
    icon: <LineChart className="h-6 w-6" />,
    category: "ui",
    complexity: "advanced",
  },
  {
    id: "custom-widgets",
    title: "Custom Widgets",
    description: "Design and build reusable custom widgets to extend Flutter's capabilities.",
    icon: <LayoutGrid className="h-6 w-6" />,
    category: "ui",
    complexity: "intermediate",
  },
  {
    id: "theming",
    title: "Advanced Theming",
    description: "Implement comprehensive app theming with support for light/dark modes and custom colors.",
    icon: <Rocket className="h-6 w-6" />,
    category: "ui",
    complexity: "intermediate",
  },
  
  // Performance & Security
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description: "Techniques to improve Flutter app performance and reduce resource usage.",
    icon: <Rocket className="h-6 w-6" />,
    category: "performance",
    complexity: "advanced",
  },
  {
    id: "security-best-practices",
    title: "Security Best Practices",
    description: "Implement security best practices to protect your Flutter application and user data.",
    icon: <ShieldCheck className="h-6 w-6" />,
    category: "performance",
    complexity: "advanced",
  },
  {
    id: "code-architecture",
    title: "Clean Code Architecture",
    description: "Structure your Flutter projects using clean architecture principles for maintainability.",
    icon: <Code2 className="h-6 w-6" />,
    category: "performance",
    complexity: "advanced",
  },
]

export default function ConceptsPage() {
  // Complexity to color mapping
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  // Filter concepts by category
  const getConceptsByCategory = (category: string) => {
    return conceptsData.filter(concept => concept.category === category)
  }

  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Advanced Flutter Concepts
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              Master complex patterns and techniques to level up your Flutter skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <Layers className="h-10 w-10 mx-auto mb-3 text-white" />
              <h3 className="text-xl font-bold mb-2">State Management</h3>
              <p className="text-sm opacity-80">Learn efficient patterns for managing app state</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <Database className="h-10 w-10 mx-auto mb-3 text-white" />
              <h3 className="text-xl font-bold mb-2">Data Handling</h3>
              <p className="text-sm opacity-80">Master APIs, caching, and local storage</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <Smartphone className="h-10 w-10 mx-auto mb-3 text-white" />
              <h3 className="text-xl font-bold mb-2">UI Excellence</h3>
              <p className="text-sm opacity-80">Create beautiful, responsive interfaces</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="architecture" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="architecture" className="flex items-center gap-2">
                  <Workflow className="h-4 w-4" />
                  <span>Architecture</span>
                </TabsTrigger>
                <TabsTrigger value="data" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span>Data & APIs</span>
                </TabsTrigger>
                <TabsTrigger value="ui" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>UI & UX</span>
                </TabsTrigger>
                <TabsTrigger value="performance" className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  <span>Performance</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Architecture Tab */}
            <TabsContent value="architecture">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getConceptsByCategory("architecture").map((concept, index) => (
                  <ScrollAnimation key={concept.id} animation="fade-in-up" delay={index * 0.1}>
                    <ConceptCard concept={concept} />
                  </ScrollAnimation>
                ))}
              </div>
            </TabsContent>
            
            {/* Data Tab */}
            <TabsContent value="data">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getConceptsByCategory("data").map((concept, index) => (
                  <ScrollAnimation key={concept.id} animation="fade-in-up" delay={index * 0.1}>
                    <ConceptCard concept={concept} />
                  </ScrollAnimation>
                ))}
              </div>
            </TabsContent>
            
            {/* UI Tab */}
            <TabsContent value="ui">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getConceptsByCategory("ui").map((concept, index) => (
                  <ScrollAnimation key={concept.id} animation="fade-in-up" delay={index * 0.1}>
                    <ConceptCard concept={concept} />
                  </ScrollAnimation>
                ))}
              </div>
            </TabsContent>
            
            {/* Performance Tab */}
            <TabsContent value="performance">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getConceptsByCategory("performance").map((concept, index) => (
                  <ScrollAnimation key={concept.id} animation="fade-in-up" delay={index * 0.1}>
                    <ConceptCard concept={concept} />
                  </ScrollAnimation>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Learning Path Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Learning Path</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow this suggested learning path to master Flutter concepts in a structured way
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-[calc(50%+24px)] pl-6">
                    <h3 className="text-xl font-bold mb-2">Foundation</h3>
                    <p className="text-muted-foreground mb-4">Start with these fundamental concepts</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/local-storage">
                          <PackageOpen className="mr-2 h-4 w-4 text-primary" />
                          Local Storage Options
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/provider">
                          <Network className="mr-2 h-4 w-4 text-primary" />
                          Provider Pattern
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-[calc(50%+24px)] pl-6">
                    <h3 className="text-xl font-bold mb-2">Intermediate Skills</h3>
                    <p className="text-muted-foreground mb-4">Explore these topics once you're comfortable with the basics</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/state-management">
                          <Layers className="mr-2 h-4 w-4 text-primary" />
                          State Management
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/rest-api">
                          <Globe className="mr-2 h-4 w-4 text-primary" />
                          REST API Integration
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/caching">
                          <ServerIcon className="mr-2 h-4 w-4 text-primary" />
                          Data Caching
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/responsive-design">
                          <Smartphone className="mr-2 h-4 w-4 text-primary" />
                          Responsive Design
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-[calc(50%+24px)] pl-6">
                    <h3 className="text-xl font-bold mb-2">Advanced Territory</h3>
                    <p className="text-muted-foreground mb-4">Dive deep into these expert-level concepts</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/bloc-pattern">
                          <Workflow className="mr-2 h-4 w-4 text-primary" />
                          BLoC Pattern
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/riverpod">
                          <RefreshCw className="mr-2 h-4 w-4 text-primary" />
                          Riverpod
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/graphql">
                          <Database className="mr-2 h-4 w-4 text-primary" />
                          GraphQL Integration
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="justify-start">
                        <Link href="/concepts/performance-optimization">
                          <Rocket className="mr-2 h-4 w-4 text-primary" />
                          Performance Optimization
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Further Resources */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Further Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore these additional resources to deepen your Flutter knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Official Flutter documentation and guides</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive reference materials directly from the Flutter team.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <a href="https://flutter.dev/docs" target="_blank" rel="noopener noreferrer">
                    Visit Docs
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>Join the Flutter developer community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with other Flutter developers to share knowledge and get help.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <a href="https://flutter.dev/community" target="_blank" rel="noopener noreferrer">
                    Join Community
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Code Labs</CardTitle>
                <CardDescription>Hands-on tutorials and workshops</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Step-by-step tutorials to build real Flutter applications with best practices.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <a href="https://flutter.dev/codelabs" target="_blank" rel="noopener noreferrer">
                    Try Code Labs
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Concept Card Component
function ConceptCard({ concept }: { concept: Concept }) {
  // Complexity to color mapping
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <Link href={`/concepts/${concept.id}`}>
      <div className="brutalist-card p-6 h-full hover:shadow-md transition-all duration-200 hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            {concept.icon}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">{concept.title}</h3>
              <div className={`text-xs px-2 py-1 rounded-full ${getComplexityColor(concept.complexity)}`}>
                {concept.complexity}
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">{concept.description}</p>
            
            <div className="flex justify-end">
              <Button variant="ghost" size="sm" className="text-sm gap-1">
                Learn more <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
} 