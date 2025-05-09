import { Metadata } from 'next'
import ProjectSetupClient from './ProjectSetupClient'

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

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = projectsData.find(p => p.id === params.id)
  
  return {
    title: project ? `${project.title} - Setup Guide` : 'Project Setup Guide',
    description: project?.description || 'Flutter project setup guide',
  }
}

export default function ProjectSetupPage({ params }: { params: { id: string } }) {
  return <ProjectSetupClient id={params.id} projectsData={projectsData} />
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