"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SimpleCodeBlock } from "@/components/simple-code-block"
import { CheckCircle, Clock, Code, FileText, Folder, Package, Play, Rocket, Smartphone, Youtube } from "lucide-react"

// Project type definition
type Project = {
  id: string
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  timeToComplete: string
  category: string[]
  skills: string[]
  image: string
  youtubeLinks: {
    title: string
    url: string
  }[]
}

// Setup Guide section type
type SetupSection = {
  id: string
  title: string
  description: string
  completed: boolean
}

// Folder structure for each project type
const folderStructures = {
  "todo": [
    {
      name: "lib/",
      type: "directory",
      children: [
        { name: "models/todo.dart", type: "file" },
        { name: "screens/home_screen.dart", type: "file" },
        { name: "widgets/todo_item.dart", type: "file" },
        { name: "main.dart", type: "file" },
      ],
    },
    {
      name: "assets/",
      type: "directory",
      children: [
        { name: "images/", type: "directory" },
      ],
    },
    { name: "pubspec.yaml", type: "file" },
  ],
  "default": [
    {
      name: "lib/",
      type: "directory",
      children: [
        { name: "models/", type: "directory" },
        { name: "screens/", type: "directory" },
        { name: "widgets/", type: "directory" },
        { name: "main.dart", type: "file" },
      ],
    },
    {
      name: "assets/",
      type: "directory",
      children: [
        { name: "images/", type: "directory" },
      ],
    },
    { name: "pubspec.yaml", type: "file" },
  ],
}

// Packages for each project type
const packageRequirements = {
  "todo": [
    { name: "provider", version: "^6.0.5", description: "State management solution" },
    { name: "shared_preferences", version: "^2.2.0", description: "Local storage for saving todos" },
    { name: "uuid", version: "^3.0.7", description: "For generating unique IDs" },
  ],
  "default": [
    { name: "provider", version: "^6.0.5", description: "State management solution" },
    { name: "http", version: "^1.1.0", description: "HTTP requests" },
    { name: "shared_preferences", version: "^2.2.0", description: "Local storage" },
  ],
}

// Boilerplate code for each project type
const boilerplateCodes = {
  "todo": {
    "models/todo.dart": `class Todo {
  final String id;
  final String title;
  bool isCompleted;

  Todo({
    required this.id,
    required this.title,
    this.isCompleted = false,
  });

  Todo copyWith({
    String? id,
    String? title,
    bool? isCompleted,
  }) {
    return Todo(
      id: id ?? this.id,
      title: title ?? this.title,
      isCompleted: isCompleted ?? this.isCompleted,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'isCompleted': isCompleted,
    };
  }

  factory Todo.fromJson(Map<String, dynamic> json) {
    return Todo(
      id: json['id'],
      title: json['title'],
      isCompleted: json['isCompleted'],
    );
  }
}`,
    "widgets/todo_item.dart": `import 'package:flutter/material.dart';
import '../models/todo.dart';

class TodoItem extends StatelessWidget {
  final Todo todo;
  final Function(Todo) onToggle;
  final Function(String) onDelete;

  const TodoItem({
    Key? key,
    required this.todo,
    required this.onToggle,
    required this.onDelete,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Checkbox(
        value: todo.isCompleted,
        onChanged: (bool? value) {
          if (value != null) {
            onToggle(todo.copyWith(isCompleted: value));
          }
        },
      ),
      title: Text(
        todo.title,
        style: TextStyle(
          decoration: todo.isCompleted ? TextDecoration.lineThrough : null,
          color: todo.isCompleted ? Colors.grey : null,
        ),
      ),
      trailing: IconButton(
        icon: Icon(Icons.delete, color: Colors.red),
        onPressed: () => onDelete(todo.id),
      ),
    );
  }
}`,
    "main.dart": `import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
    );
  }
}`,
  },
  "default": {
    "main.dart": `import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Project',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter Project'),
      ),
      body: Center(
        child: Text('Hello, Flutter!'),
      ),
    );
  }
}`,
  },
}

interface ProjectSetupClientProps {
  id: string;
  projectsData: Project[];
}

export default function ProjectSetupClient({ id, projectsData }: ProjectSetupClientProps) {
  const [project, setProject] = useState<Project | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [setupSections, setSetupSections] = useState<SetupSection[]>([
    { id: "folder", title: "Create Folder Structure", description: "Set up the recommended folder structure for your project", completed: false },
    { id: "packages", title: "Install Required Packages", description: "Add the necessary dependencies to your pubspec.yaml", completed: false },
    { id: "boilerplate", title: "Add Boilerplate Code", description: "Copy starter code to get your project running quickly", completed: false },
  ])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Find the project based on the ID from params
    const foundProject = projectsData.find(p => p.id === id) || null
    setProject(foundProject)
  }, [id, projectsData])

  useEffect(() => {
    // Calculate progress based on completed sections
    const completedSections = setupSections.filter(section => section.completed).length
    setProgress((completedSections / setupSections.length) * 100)
  }, [setupSections])

  const markSectionComplete = (sectionId: string) => {
    setSetupSections(prev => 
      prev.map(section => 
        section.id === sectionId ? { ...section, completed: true } : section
      )
    )
  }

  // Get folder structure based on project type or use default
  const getFolderStructure = () => {
    return project ? (folderStructures[project.id as keyof typeof folderStructures] || folderStructures.default) : folderStructures.default
  }

  // Get package requirements based on project type or use default
  const getPackageRequirements = () => {
    return project ? (packageRequirements[project.id as keyof typeof packageRequirements] || packageRequirements.default) : packageRequirements.default
  }

  // Get boilerplate code based on project type or use default
  const getBoilerplateCode = (filename: string) => {
    if (!project) return ""
    const projectCode = boilerplateCodes[project.id as keyof typeof boilerplateCodes] || boilerplateCodes.default
    return projectCode[filename as keyof typeof projectCode] || ""
  }

  // Renders a file/directory tree
  const renderFileTree = (items: any[], indent = 0) => {
    return items.map((item, index) => (
      <div key={index} className="ml-4">
        <div className="flex items-center py-1">
          {item.type === "directory" ? (
            <Folder className="h-4 w-4 mr-2 text-blue-500" />
          ) : (
            <FileText className="h-4 w-4 mr-2 text-gray-500" />
          )}
          <span>{item.name}</span>
        </div>
        {item.children && renderFileTree(item.children, indent + 1)}
      </div>
    ))
  }

  if (!project) {
    return (
      <div className="container py-12">
        <div className="brutalist-card p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="noise-bg">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl opacity-90 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {project.timeToComplete}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  Difficulty: {project.difficulty}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map(skill => (
                  <span key={skill} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="brutalist-card p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Setup Progress</h2>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              
              <div className="space-y-3">
                {setupSections.map((section, index) => (
                  <div 
                    key={section.id} 
                    className={`
                      flex items-center p-3 rounded-md transition-colors
                      ${section.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 hover:bg-gray-200'}
                      ${currentStep === index ? 'ring-2 ring-primary ring-offset-2' : ''}
                    `}
                    onClick={() => setCurrentStep(index)}
                  >
                    {section.completed ? 
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" /> : 
                      <div className="h-5 w-5 rounded-full border-2 border-gray-400 mr-2 flex-shrink-0"></div>
                    }
                    <div>
                      <h3 className="font-medium">{section.title}</h3>
                      <p className="text-xs text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {project.youtubeLinks && project.youtubeLinks.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Youtube className="h-4 w-4 mr-2 text-red-600" />
                    Video Tutorials
                  </h3>
                  <div className="space-y-2">
                    {project.youtubeLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-blue-600 hover:underline"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="brutalist-card p-6 md:p-8">
              <Tabs defaultValue={setupSections[currentStep].id} onValueChange={(value) => {
                const index = setupSections.findIndex(s => s.id === value);
                if (index !== -1) setCurrentStep(index);
              }}>
                <TabsList className="grid grid-cols-3 mb-8">
                  {setupSections.map((section) => (
                    <TabsTrigger key={section.id} value={section.id} className="flex items-center gap-2">
                      {section.id === 'folder' && <Folder className="h-4 w-4" />}
                      {section.id === 'packages' && <Package className="h-4 w-4" />}
                      {section.id === 'boilerplate' && <Code className="h-4 w-4" />}
                      {section.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <TabsContent value="folder" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Setting Up Your Folder Structure</h2>
                    <p className="text-muted-foreground mb-6">
                      Creating a well-organized folder structure is essential for maintaining a clean and scalable Flutter project.
                      Here's the recommended structure for your {project.title}:
                    </p>
                    
                    <div className="brutalist-card-inner p-4 mb-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Folder className="h-5 w-5 mr-2 text-blue-500" />
                        Recommended Folder Structure
                      </h3>
                      
                      <div className="font-mono text-sm mt-4">
                        {renderFileTree(getFolderStructure())}
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold">How to Set Up This Structure</h3>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="step1">
                          <AccordionTrigger className="text-base font-medium">
                            1. Create the Project
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-3">Start by creating a new Flutter project using the Flutter CLI:</p>
                            <SimpleCodeBlock language="bash" code={`flutter create ${project.id}_app`} />
                            <p className="mt-3">This will generate the basic Flutter project structure.</p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="step2">
                          <AccordionTrigger className="text-base font-medium">
                            2. Create Additional Folders
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-3">
                              Navigate to your project's <code>lib</code> directory and create the following folders:
                            </p>
                            <SimpleCodeBlock language="bash" code={`cd ${project.id}_app/lib
mkdir models
mkdir screens
mkdir widgets`} />
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="step3">
                          <AccordionTrigger className="text-base font-medium">
                            3. Set Up Assets
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-3">Create an assets directory in your project root:</p>
                            <SimpleCodeBlock language="bash" code={`cd ..
mkdir -p assets/images`} />
                            <p className="mt-3">Don't forget to update your <code>pubspec.yaml</code> to include these assets:</p>
                            <SimpleCodeBlock language="yaml" code={`flutter:
  assets:
    - assets/images/`} />
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    
                    <Button onClick={() => markSectionComplete("folder")} className="w-full md:w-auto">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mark as Completed
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="packages" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Required Packages</h2>
                    <p className="text-muted-foreground mb-6">
                      For your {project.title}, we recommend the following packages to help with development:
                    </p>
                    
                    <div className="brutalist-card-inner p-4 mb-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Package className="h-5 w-5 mr-2 text-purple-500" />
                        Recommended Packages
                      </h3>
                      
                      <div className="space-y-4">
                        {getPackageRequirements().map((pkg, index) => (
                          <div key={index} className="p-3 border border-border rounded-md">
                            <div className="flex justify-between items-center">
                              <span className="font-mono font-medium">{pkg.name}: {pkg.version}</span>
                              <a
                                href={`https://pub.dev/packages/${pkg.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:underline"
                              >
                                View on pub.dev
                              </a>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold">How to Add These Packages</h3>
                      
                      <div className="mb-4">
                        <p className="mb-3">Add the following dependencies to your <code>pubspec.yaml</code> file:</p>
                        <SimpleCodeBlock 
                          language="yaml" 
                          code={`dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2
  ${getPackageRequirements().map(pkg => `${pkg.name}: ${pkg.version}`).join('\n  ')}`} 
                        />
                      </div>
                      
                      <div className="mb-4">
                        <p className="mb-3">Then, run the following command to fetch the packages:</p>
                        <SimpleCodeBlock language="bash" code="flutter pub get" />
                      </div>
                    </div>
                    
                    <Button onClick={() => markSectionComplete("packages")} className="w-full md:w-auto">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mark as Completed
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="boilerplate" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Boilerplate Code</h2>
                    <p className="text-muted-foreground mb-6">
                      Get started quickly with these code templates for your {project.title}:
                    </p>
                    
                    {/* Main.dart */}
                    <div className="brutalist-card-inner p-4 mb-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Code className="h-5 w-5 mr-2 text-green-500" />
                        main.dart
                      </h3>
                      
                      <SimpleCodeBlock language="dart" code={getBoilerplateCode("main.dart")} />
                    </div>
                    
                    {/* Only show todo model if it's a todo app */}
                    {project.id === "todo" && (
                      <>
                        <div className="brutalist-card-inner p-4 mb-6">
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Code className="h-5 w-5 mr-2 text-green-500" />
                            models/todo.dart
                          </h3>
                          
                          <SimpleCodeBlock language="dart" code={getBoilerplateCode("models/todo.dart")} />
                        </div>
                        
                        <div className="brutalist-card-inner p-4 mb-6">
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Code className="h-5 w-5 mr-2 text-green-500" />
                            widgets/todo_item.dart
                          </h3>
                          
                          <SimpleCodeBlock language="dart" code={getBoilerplateCode("widgets/todo_item.dart")} />
                        </div>
                      </>
                    )}
                    
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold">How to Use This Code</h3>
                      
                      <div className="mb-4">
                        <p>
                          Copy each code snippet to its corresponding file in your project structure.
                          This provides a solid foundation to build upon.
                        </p>
                      </div>
                      
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <Smartphone className="h-5 w-5 text-yellow-500" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">Next Steps</h3>
                            <div className="mt-2 text-sm text-yellow-700">
                              <p>
                                After setting up the boilerplate code, you'll need to:
                              </p>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>Complete any TODOs in the code</li>
                                <li>Add proper error handling</li>
                                <li>Customize the UI to match your preferences</li>
                                <li>Run the app with <code>flutter run</code></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button onClick={() => markSectionComplete("boilerplate")} className="w-full md:w-auto">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mark as Completed
                    </Button>
                  </div>
                </TabsContent>
                
              </Tabs>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                  disabled={currentStep === 0}
                >
                  Previous Step
                </Button>
                
                <Button 
                  onClick={() => setCurrentStep(prev => Math.min(setupSections.length - 1, prev + 1))}
                  disabled={currentStep === setupSections.length - 1}
                >
                  Next Step
                </Button>
              </div>
              
              {/* Progress Message */}
              {progress === 100 && (
                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md flex items-center">
                  <Rocket className="h-10 w-10 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-bold text-green-800">You're all set!</h3>
                    <p className="text-green-700">
                      You've completed all the setup steps for your {project.title}. 
                      Ready to start coding!
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Help Message */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Need more help with Flutter development? Check out our 
                <Link href="/resources" className="text-blue-600 hover:underline mx-1">resources page</Link>
                for additional learning materials.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
} 