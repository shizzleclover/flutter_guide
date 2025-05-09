import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { CodeBlock } from "@/components/code-block"
import { CodeConcept } from "@/components/code-concept"
import { CodePlayground } from "@/components/code-playground"
import { CodeComparison } from "@/components/code-comparison"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code,
  Database,
  Download,
  FileText,
  Layers,
  Layout,
  Smartphone,
  Terminal,
  Zap,
  Users,
} from "lucide-react"

export default function RoadmapPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Flutter <span className="gradient-text">Roadmap</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A step-by-step guide to learning Flutter and becoming a mobile app developer from scratch.
            </p>
          </div>

          <div className="brutalist-card p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Flutter Roadmap"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">How to Use This Roadmap</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  This roadmap is designed for complete beginners with no prior programming experience. Follow the steps
                  in order, and take your time to understand each concept before moving on. Practice with small projects
                  along the way to reinforce your learning.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="#getting-started">
                      Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resources">
                      View Resources <BookOpen className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="brutalist-card p-6 text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Terminal className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Step 1</h3>
              <p className="text-muted-foreground">Set up your development environment</p>
            </div>

            <div className="brutalist-card p-6 text-center">
              <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Code className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Step 2</h3>
              <p className="text-muted-foreground">Learn Dart programming basics</p>
            </div>

            <div className="brutalist-card p-6 text-center">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Layout className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Step 3</h3>
              <p className="text-muted-foreground">Master Flutter fundamentals</p>
            </div>

            <div className="brutalist-card p-6 text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Step 4</h3>
              <p className="text-muted-foreground">Build complete Flutter apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Getting Started */}
      <section id="getting-started" className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Step 1: Getting Started</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Set up your development environment and prepare for Flutter development.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation animation="fade-in-left">
              <div className="brutalist-card p-6">
                <h3 className="text-2xl font-bold mb-4">Setting Up Your Environment</h3>
                <p className="text-muted-foreground mb-6">
                  Before you start coding, you need to set up your development environment. Follow these steps:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full h-fit">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Download Flutter SDK</h4>
                      <p className="text-muted-foreground mb-2">
                        Download the Flutter SDK from the official website and extract it to a permanent location on
                        your computer.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link
                          href="https://flutter.dev/docs/get-started/install"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download Flutter
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full h-fit">
                      <Terminal className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Update PATH Variable</h4>
                      <p className="text-muted-foreground mb-2">
                        Add Flutter to your PATH environment variable so you can run Flutter commands from any terminal
                        window.
                      </p>
                      <div className="code-block text-sm p-3 mb-2">
                        <code>export PATH="$PATH:`pwd`/flutter/bin"</code>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full h-fit">
                      <Code className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Install an IDE</h4>
                      <p className="text-muted-foreground mb-2">
                        Install either Visual Studio Code or Android Studio, and add the Flutter and Dart plugins.
                      </p>
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                            VS Code
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
                            Android Studio
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full h-fit">
                      <Terminal className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Run Flutter Doctor</h4>
                      <p className="text-muted-foreground mb-2">
                        Verify your installation and check for any dependencies you still need to install.
                      </p>
                      <div className="code-block text-sm p-3 mb-2">
                        <code>flutter doctor</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div className="brutalist-card p-6">
                <h3 className="text-2xl font-bold mb-4">Introduction to Dart</h3>
                <p className="text-muted-foreground mb-6">
                  Dart is the programming language used to build Flutter apps. Here's a quick introduction to Dart
                  basics:
                </p>

                <CodeBlock
                  code={`// Variables and data types
String name = 'Flutter Beginner';
int age = 25;
double height = 5.9;
bool isLearning = true;

// Lists (arrays)
List<String> skills = ['UI Design', 'Coding', 'Testing'];

// Functions
void greet(String name) {
  print('Hello, \$name!');
}

// Main function - entry point of your app
void main() {
  greet(name);
  print('Age: \$age');
  print('Skills: \$skills');
}`}
                  title="Dart Basics"
                  highlightLines={[2, 3, 4, 5, 8, 11, 15]}
                  explanations={{
                    2: "Define a string variable with the 'String' type",
                    3: "Integer variable for whole numbers",
                    4: "Double variable for decimal numbers",
                    5: "Boolean variable for true/false values",
                    8: "Lists store collections of items with the same type",
                    11: "Define a function that takes a parameter and returns nothing (void)",
                    12: "Print to the console - the backslash before $ escapes the string interpolation",
                    15: "The main() function is the entry point of every Dart program"
                  }}
                />

                <p className="text-muted-foreground mt-4 mb-8">
                  Don't worry if this looks unfamiliar. We'll cover Dart in more detail in the next step.
                </p>

                <CodePlayground
                  title="Practice Dart Basics"
                  description="Try these interactive exercises to practice Dart syntax and concepts."
                  examples={[
                    {
                      id: "variables",
                      title: "Variables",
                      description: "Complete the code to define variables of different types and print them.",
                      code: `void main() {
  // TODO: Define a String variable named 'name' with your name
  
  // TODO: Define an integer variable named 'age' with any number
  
  // TODO: Define a double variable named 'height' with a decimal number
  
  // Print all variables
  print('Name: ??');  // Replace ?? with your variable
  print('Age: ??');   // Replace ?? with your variable
  print('Height: ??'); // Replace ?? with your variable
}`,
                      solution: `void main() {
  // Define a String variable named 'name' with your name
  String name = 'John Doe';
  
  // Define an integer variable named 'age' with any number
  int age = 25;
  
  // Define a double variable named 'height' with a decimal number
  double height = 5.9;
  
  // Print all variables
  print('Name: \$name');
  print('Age: \$age');
  print('Height: \$height');
}`,
                      hints: [
                        "String variables are defined like this: String variableName = 'value';",
                        "Integer variables use the 'int' type, like: int age = 25;",
                        "To print variables inside strings, use the $ symbol before the variable name."
                      ]
                    },
                    {
                      id: "functions",
                      title: "Functions",
                      description: "Create a function that calculates the sum of two numbers and then call it.",
                      code: `void main() {
  // TODO: Create a function named 'sum' that takes two parameters
  // and returns their sum
  
  
  // TODO: Call the function with values 10 and 20 and store the result
  // in a variable named 'result'
  
  
  // TODO: Print the result with a message like "The sum is: 30"
  
}`,
                      solution: `void main() {
  // Create a function named 'sum' that takes two parameters
  // and returns their sum
  int sum(int a, int b) {
    return a + b;
  }
  
  // Call the function with values 10 and 20 and store the result
  // in a variable named 'result'
  int result = sum(10, 20);
  
  // Print the result with a message
  print('The sum is: \$result');
}`,
                      hints: [
                        "Functions in Dart are defined with a return type, name, parameters, and body.",
                        "The function signature should look like: int sum(int a, int b) { ... }",
                        "To call a function and store its result: int result = sum(10, 20);"
                      ]
                    },
                    {
                      id: "lists",
                      title: "Lists",
                      description: "Create a list of strings, add items to it, and iterate through it.",
                      code: `void main() {
  // TODO: Create a list of strings named 'fruits' with some fruit names
  
  
  // TODO: Add another fruit to the list using the add() method
  
  
  // TODO: Print the list's length
  
  
  // TODO: Use a for loop to print each fruit
  
}`,
                      solution: `void main() {
  // Create a list of strings named 'fruits' with some fruit names
  List<String> fruits = ['apple', 'banana', 'orange'];
  
  // Add another fruit to the list using the add() method
  fruits.add('grape');
  
  // Print the list's length
  print('Total fruits: \\${fruits.length}');
  
  // Use a for loop to print each fruit
  for (int i = 0; i < fruits.length; i++) {
    print('Fruit \\${i+1}: \\${fruits[i]}');
  }
  
  // Alternative: using for-in loop
  // for (String fruit in fruits) {
  //   print('Fruit: \$fruit');
  // }
}`,
                      hints: [
                        "Create a list with: List<String> fruits = ['apple', 'banana', 'orange'];",
                        "Add an item to a list with the add() method: fruits.add('grape');",
                        "Get a list's length with: fruits.length",
                        "Loop through a list with: for (int i = 0; i < fruits.length; i++) { ... }"
                      ]
                    }
                  ]}
                />

                <Button asChild className="w-full mt-8">
                  <Link href="https://dart.dev/guides/language/language-tour" target="_blank" rel="noopener noreferrer">
                    Learn More About Dart
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Step 2: Flutter Fundamentals */}
      <section id="fundamentals" className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Step 2: Flutter Fundamentals</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Master the core concepts of Flutter: widgets, layouts, and state management.
              </p>
            </div>
          </ScrollAnimation>

          <div className="brutalist-card p-6 mb-12">
            <h3 className="text-2xl font-bold mb-4">Understanding Widgets</h3>
            <p className="text-muted-foreground mb-6">
              In Flutter, everything is a widget. Widgets are the basic building blocks of your app's user interface.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Types of Widgets</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">StatelessWidget</p>
                      <p className="text-sm text-muted-foreground">
                        Widgets that don't change once built (static UI elements).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">StatefulWidget</p>
                      <p className="text-sm text-muted-foreground">
                        Widgets that can change their appearance in response to events.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Inherited Widget</p>
                      <p className="text-sm text-muted-foreground">
                        Widgets that efficiently propagate information down the widget tree.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Common Widgets</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Layout Widgets</p>
                      <p className="text-sm text-muted-foreground">Container, Row, Column, Stack, Expanded, Padding</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Basic Widgets</p>
                      <p className="text-sm text-muted-foreground">Text, Image, Icon, Button, TextField</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Material Widgets</p>
                      <p className="text-sm text-muted-foreground">Scaffold, AppBar, BottomNavigationBar, Drawer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <CodeBlock
                code={`import 'package:flutter/material.dart';

// Example of a StatelessWidget
class MyButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  
  const MyButton({
    required this.text,
    required this.onPressed,
  });
  
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      child: Text(text),
    );
  }
}`}
                title="StatelessWidget Example"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation animation="fade-in-left">
              <div className="brutalist-card p-6 h-full">
                <h3 className="text-2xl font-bold mb-4">Layout in Flutter</h3>
                <p className="text-muted-foreground mb-6">
                  Flutter's layout system is based on widgets that arrange other widgets. Understanding layouts is
                  crucial for building UIs.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Row and Column</h4>
                    <p className="text-muted-foreground mb-2">
                      Row arranges widgets horizontally, while Column arranges them vertically.
                    </p>
                    <CodeConcept
                      title="Row and Column Example"
                      description="This example shows how to use Row and Column widgets to create a layout structure."
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
          title: Text('Layout Example'),
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Main Title',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildFeatureItem(Icons.star, 'Feature 1'),
                _buildFeatureItem(Icons.favorite, 'Feature 2'),
                _buildFeatureItem(Icons.bookmark, 'Feature 3'),
              ],
            ),
          ],
        ),
      ),
    );
  }
  
  Widget _buildFeatureItem(IconData icon, String text) {
    return Column(
      children: [
        Icon(icon, size: 40, color: Colors.blue),
        SizedBox(height: 8),
        Text(text),
      ],
    );
  }
}`}
                      visualImage="/placeholder.svg?height=500&width=800"
                      outputImage="/placeholder.svg?height=600&width=300"
                      codeExplanations={{
                        14: "Column widget arranges its children vertically from top to bottom",
                        15: "mainAxisAlignment centers the children vertically within the column",
                        16: "The children property takes a list of widgets to display",
                        22: "Row widget arranges its children horizontally from left to right",
                        23: "This spreads the children evenly across the available horizontal space",
                        24: "Three feature items are created using a helper method",
                        37: "Here we create a reusable widget function that returns a Column",
                        38: "This column has an icon and text stacked vertically",
                      }}
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2">Container</h4>
                    <p className="text-muted-foreground mb-2">
                      A convenience widget that combines common painting, positioning, and sizing widgets.
                    </p>
                    <CodeBlock
                      code={`Container(
  margin: EdgeInsets.all(10.0),
  padding: EdgeInsets.all(20.0),
  decoration: BoxDecoration(
    color: Colors.blue,
    borderRadius: BorderRadius.circular(10.0),
    boxShadow: [
      BoxShadow(
        color: Colors.black26,
        blurRadius: 5.0,
        offset: Offset(0, 2),
      )
    ],
  ),
  child: Text(
    'Hello Flutter!', 
    style: TextStyle(
      color: Colors.white,
      fontSize: 18.0,
      fontWeight: FontWeight.bold,
    ),
  ),
)`}
                      title="Container Example"
                      highlightLines={[1, 2, 3, 4, 5, 6, 14, 15]}
                      explanations={{
                        1: "Container is a very versatile widget for styling, positioning, and sizing",
                        2: "margin adds space around the outside of the container",
                        3: "padding adds space inside the container around its child",
                        4: "BoxDecoration defines how the container looks",
                        5: "Sets the background color of the container",
                        6: "Rounds the corners of the container",
                        7: "Adds a shadow effect to the container",
                        14: "The child widget that goes inside the container",
                        15: "The text content to display",
                        16: "Style properties for the text"
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div className="brutalist-card p-6 h-full">
                <h3 className="text-2xl font-bold mb-4">State Management</h3>
                <p className="text-muted-foreground mb-6">
                  State management is about how you manage the data and UI state in your application.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">setState</h4>
                    <p className="text-muted-foreground mb-2">
                      The simplest form of state management, built into Flutter.
                    </p>
                    <CodeBlock
                      code={`class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;
  
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_counter'),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('Increment'),
        ),
      ],
    );
  }
}`}
                      title="setState Example"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2">Advanced State Management</h4>
                    <p className="text-muted-foreground">
                      For larger apps, consider learning these state management solutions:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Provider</li>
                      <li>Riverpod</li>
                      <li>Bloc / Cubit</li>
                      <li>GetX</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Step 3: Building Your First App */}
      <section id="first-app" className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Step 3: Building Your First App</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Apply your knowledge by building a complete Flutter application from scratch.
              </p>
            </div>
          </ScrollAnimation>

          <div className="brutalist-card p-6 mb-12">
            <h3 className="text-2xl font-bold mb-4">Counter App Tutorial</h3>
            <p className="text-muted-foreground mb-6">
              Let's build a simple counter app to apply what you've learned so far. This app will have a display and
              buttons to increment and decrement a counter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=200"
                  alt="Counter App Preview"
                  width={200}
                  height={400}
                  className="mx-auto"
                />
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">What You'll Learn</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">Creating a new Flutter project</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">Building a user interface with widgets</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">Managing state with StatefulWidget</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">Handling user interactions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">Styling your app</p>
                  </div>
                </div>

                <Button asChild className="mt-6">
                  <Link href="/projects#counter">
                    Start Building <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div className="brutalist-card p-6 h-full">
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Project Structure</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to organize your Flutter project for maintainability and scalability.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                  <li>Understanding the Flutter project structure</li>
                  <li>Organizing widgets and screens</li>
                  <li>Managing assets and resources</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/resources#project-structure">Learn More</Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="brutalist-card p-6 h-full">
                <div className="bg-secondary/10 p-4 rounded-full w-fit mb-4">
                  <Layout className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Navigation</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to navigate between different screens in your Flutter app.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                  <li>Navigator 1.0 basics</li>
                  <li>Passing data between screens</li>
                  <li>Named routes</li>
                  <li>Introduction to Navigator 2.0</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/resources#navigation">Learn More</Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={300}>
              <div className="brutalist-card p-6 h-full">
                <div className="bg-accent/10 p-4 rounded-full w-fit mb-4">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Forms & User Input</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how to handle user input and create forms in Flutter.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                  <li>Text fields and form widgets</li>
                  <li>Form validation</li>
                  <li>Handling different input types</li>
                  <li>Responding to user gestures</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/resources#forms">Learn More</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Step 4: Advanced Concepts */}
      <section id="advanced" className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Step 4: Advanced Concepts</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dive deeper into advanced Flutter topics to build more complex and feature-rich applications.
              </p>
            </div>
          </ScrollAnimation>

          <div className="brutalist-card p-6 mb-12">
            <h3 className="text-2xl font-bold mb-4">Code Organization & Refactoring</h3>
            <p className="text-muted-foreground mb-6">
              As your Flutter apps grow, you'll need to organize your code effectively. Here are some best practices for refactoring and organizing your code.
            </p>

            <CodeComparison
              title="Extract Widget Refactoring"
              description="One of the most common refactorings in Flutter is extracting widgets to make your code more modular and reusable."
              beforeCode={`import 'package:flutter/material.dart';

class ProductScreen extends StatelessWidget {
  final String title;
  final String description;
  final double price;
  final String imageUrl;

  const ProductScreen({
    required this.title,
    required this.description,
    required this.price,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Product Details'),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Image.network(
            imageUrl,
            width: double.infinity,
            height: 250,
            fit: BoxFit.cover,
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  '\$\${price.toStringAsFixed(2)}',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Colors.green,
                  ),
                ),
                SizedBox(height: 16),
                Text(
                  description,
                  style: TextStyle(fontSize: 16),
                ),
                SizedBox(height: 24),
                ElevatedButton(
                  onPressed: () {
                    // Add to cart functionality
                  },
                  child: Text('Add to Cart'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}`}
              afterCode={`import 'package:flutter/material.dart';

class ProductScreen extends StatelessWidget {
  final String title;
  final String description;
  final double price;
  final String imageUrl;

  const ProductScreen({
    required this.title,
    required this.description,
    required this.price,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Product Details'),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ProductImage(imageUrl: imageUrl),
          ProductDetails(
            title: title,
            description: description,
            price: price,
          ),
        ],
      ),
    );
  }
}

class ProductImage extends StatelessWidget {
  final String imageUrl;

  const ProductImage({required this.imageUrl});

  @override
  Widget build(BuildContext context) {
    return Image.network(
      imageUrl,
      width: double.infinity,
      height: 250,
      fit: BoxFit.cover,
    );
  }
}

class ProductDetails extends StatelessWidget {
  final String title;
  final String description;
  final double price;

  const ProductDetails({
    required this.title,
    required this.description,
    required this.price,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ProductTitle(title: title),
          SizedBox(height: 8),
          ProductPrice(price: price),
          SizedBox(height: 16),
          ProductDescription(description: description),
          SizedBox(height: 24),
          AddToCartButton(),
        ],
      ),
    );
  }
}

class ProductTitle extends StatelessWidget {
  final String title;

  const ProductTitle({required this.title});

  @override
  Widget build(BuildContext context) {
    return Text(
      title,
      style: TextStyle(
        fontSize: 24,
        fontWeight: FontWeight.bold,
      ),
    );
  }
}

class ProductPrice extends StatelessWidget {
  final double price;

  const ProductPrice({required this.price});

  @override
  Widget build(BuildContext context) {
    return Text(
      '\$\${price.toStringAsFixed(2)}',
      style: TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.bold,
        color: Colors.green,
      ),
    );
  }
}

class ProductDescription extends StatelessWidget {
  final String description;

  const ProductDescription({required this.description});

  @override
  Widget build(BuildContext context) {
    return Text(
      description,
      style: TextStyle(fontSize: 16),
    );
  }
}

class AddToCartButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        // Add to cart functionality
      },
      child: Text('Add to Cart'),
    );
  }
}`}
              beforeTitle="Single Widget Approach"
              afterTitle="Modular Widget Approach"
              diffItems={[
                {
                  lineNumbers: [22, 22],
                  explanation: "The large image widget is extracted into a separate ProductImage widget for better organization."
                },
                {
                  lineNumbers: [28, 23],
                  explanation: "The content details are moved to a separate ProductDetails widget that handles all product information display."
                },
                {
                  lineNumbers: [33, 58],
                  explanation: "The title is extracted into its own ProductTitle widget, making the code more modular and easier to maintain."
                },
                {
                  lineNumbers: [42, 72],
                  explanation: "The price display is moved to a dedicated ProductPrice widget."
                },
                {
                  lineNumbers: [51, 86],
                  explanation: "The description is extracted into a ProductDescription widget."
                },
                {
                  lineNumbers: [55, 100],
                  explanation: "The Add to Cart button is moved to its own AddToCartButton widget, making it reusable across the app."
                }
              ]}
            />

            <p className="text-muted-foreground mt-6">
              The refactored code is more maintainable and follows Flutter's composition over inheritance approach. Each widget has a single responsibility and can be reused and tested independently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation animation="fade-in-left">
              <div className="brutalist-card p-6 h-full">
                <h3 className="text-2xl font-bold mb-4">State Management</h3>
                <p className="text-muted-foreground mb-6">
                  For larger apps, you'll need advanced state management solutions. Here are some popular options:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Provider</h4>
                    <p className="text-muted-foreground mb-2">
                      A simple yet powerful state management solution recommended by Flutter team.
                    </p>
                    <CodeBlock
                      code={`// Define a model
class CounterModel extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

// Provide the model to the widget tree
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

// Use the model in a widget
class CounterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter')),
      body: Center(
        child: Consumer<CounterModel>(
          builder: (context, counter, child) {
            return Text(
              'Count: \${counter.count}',
              style: TextStyle(fontSize: 24),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Provider.of<CounterModel>(context, listen: false)
            .increment();
        },
        child: Icon(Icons.add),
      ),
    );
  }
}`}
                      title="Provider Example"
                      highlightLines={[2, 7, 14, 29, 38]}
                      explanations={{
                        2: "Create a model class that extends ChangeNotifier to enable listening to changes",
                        7: "Call notifyListeners() to inform widgets to rebuild when data changes",
                        14: "Wrap your app or a part of the widget tree with a Provider",
                        29: "Use Consumer to rebuild only specific parts of the UI when the model changes",
                        38: "Use Provider.of with listen: false when you only need to call methods"
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div className="brutalist-card p-6 h-full">
                <h3 className="text-2xl font-bold mb-4">Navigation & Routing</h3>
                <p className="text-muted-foreground mb-6">
                  Learn how to navigate between screens and create a smooth user experience.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Named Routes</h4>
                    <p className="text-muted-foreground mb-2">
                      Define routes by name for cleaner navigation in your app.
                    </p>
                    <CodeBlock
                      code={`void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Navigation',
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/details': (context) => DetailScreen(),
        '/settings': (context) => SettingsScreen(),
      },
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Home')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate to the details screen
            Navigator.pushNamed(
              context, 
              '/details',
              arguments: {'id': 123, 'title': 'Product 123'},
            );
          },
          child: Text('View Details'),
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Extract the arguments
    final args = ModalRoute.of(context)!.settings.arguments 
        as Map<String, dynamic>;
    
    return Scaffold(
      appBar: AppBar(title: Text('Details')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('ID: \${args['id']}'),
            Text('Title: \${args['title']}'),
            ElevatedButton(
              onPressed: () {
                // Go back to the previous screen
                Navigator.pop(context);
              },
              child: Text('Go Back'),
            ),
          ],
        ),
      ),
    );
  }
}`}
                      title="Named Routes Example"
                      highlightLines={[10, 11, 28, 44]}
                      explanations={{
                        10: "Set the initial route that will be displayed when the app starts",
                        11: "Define a map of route names to builder functions",
                        28: "Use Navigator.pushNamed to navigate to a named route",
                        30: "Pass arguments to the route as a Map or any object",
                        44: "Extract the arguments passed to the route",
                        59: "Use Navigator.pop to go back to the previous screen"
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Next Steps</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Continue your Flutter journey with these advanced topics and resources.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation animation="fade-in-left">
              <div className="brutalist-card p-6">
                <h3 className="text-2xl font-bold mb-4">Advanced Topics to Explore</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Animations</p>
                      <p className="text-sm text-muted-foreground">
                        Create beautiful animations to enhance your app's user experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Custom Widgets</p>
                      <p className="text-sm text-muted-foreground">
                        Build reusable custom widgets to maintain a consistent UI.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Testing</p>
                      <p className="text-sm text-muted-foreground">
                        Write unit, widget, and integration tests to ensure your app works correctly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">State Management Solutions</p>
                      <p className="text-sm text-muted-foreground">
                        Explore advanced state management like Provider, Riverpod, Bloc, and GetX.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Platform-Specific Code</p>
                      <p className="text-sm text-muted-foreground">
                        Learn how to write platform-specific code for iOS and Android.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div className="brutalist-card p-6">
                <h3 className="text-2xl font-bold mb-4">Community & Resources</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with the Flutter community and access valuable resources.
                </p>

                <div className="space-y-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://flutter.dev/community" target="_blank" rel="noopener noreferrer">
                      <Users className="mr-2 h-5 w-5" /> Join the Flutter Community
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://pub.dev" target="_blank" rel="noopener noreferrer">
                      <Database className="mr-2 h-5 w-5" /> Explore Flutter Packages
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://flutter.dev/docs" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-5 w-5" /> Flutter Documentation
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://www.youtube.com/c/flutterdev" target="_blank" rel="noopener noreferrer">
                      <Zap className="mr-2 h-5 w-5" /> Flutter YouTube Channel
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 z-0"></div>

        <div className="container relative z-20">
          <ScrollAnimation animation="scale-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">Ready to Start Building?</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-12">
                Begin your Flutter journey today and create amazing cross-platform mobile apps.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="secondary" className="brutalist-border text-lg px-8 py-6 text-xl">
                  <Link href="/projects">
                    Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="brutalist-border text-lg px-8 py-6 text-xl bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/resources">
                    View Resources <BookOpen className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
