"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
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

// Projects data (same as in projects page)
const projectsData: Project[] = [
  {
    id: "todo",
    title: "To-Do List App",
    description: "Create a simple to-do list app where users can add, remove, and mark tasks as complete.",
    difficulty: "beginner",
    timeToComplete: "2-4 hours",
    category: ["UI", "State Management"],
    skills: ["StatefulWidget", "Lists", "User Input"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Todo App Tutorial",
        url: "https://www.youtube.com/watch?v=mOiXndQAZpw",
      },
      {
        title: "Todo App with Provider",
        url: "https://www.youtube.com/watch?v=8xV9AsnCt0c",
      },
    ],
  },
  // Add more projects here to match your existing data
  // This is just a sample, you should use the same data as your projects page
]

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }))
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

export default function ProjectSetupPage() {
  const params = useParams<{ id: string }>()
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
    const foundProject = projectsData.find(p => p.id === params.id) || null
    setProject(foundProject)
  }, [params.id])

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