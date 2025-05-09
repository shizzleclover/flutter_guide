"use client"

// Note: References to variables like 'fruits' in the code examples (inside SimpleCodeBlock components)
// are intentional parts of the Dart code examples and not JavaScript variables.
// IDE/linter warnings about undefined variables can be safely ignored in this context.

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { SimpleCodeBlock } from "@/components/simple-code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Code,
  Lightbulb,
  CheckCircle2,
  HelpCircle,
  ArrowRight
} from "lucide-react"

export default function DartPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Dart Programming
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              The foundation of Flutter development - learn Dart from scratch
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container">
          <div className="brutalist-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is Dart?</h2>
            <p className="mb-4">
              Dart is a client-optimized programming language for fast apps on any platform. It's developed by Google and is the language used to build Flutter apps.
            </p>
            <p className="mb-4">
              It's designed to be easy to learn, especially if you have experience with languages like JavaScript, Java, or C#.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Code className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="font-bold">Easy to Learn</h3>
                </div>
                <p className="text-sm">Simple syntax that's easy to pick up for beginners or those with experience in other languages.</p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Lightbulb className="h-5 w-5 text-green-500 mr-2" />
                  <h3 className="font-bold">Object-Oriented</h3>
                </div>
                <p className="text-sm">Uses classes and objects, making it familiar for developers from many backgrounds.</p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-purple-500 mr-2" />
                  <h3 className="font-bold">Statically Typed</h3>
                </div>
                <p className="text-sm">Offers type safety while still being flexible with type inference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Dart Concepts */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Dart Fundamentals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn the basic building blocks of Dart programming with simple examples
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="brutalist-card p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">Variables and Data Types</h3>
                <p className="text-muted-foreground mb-6">
                  Variables store data that can be used and changed in your program. Dart has several data types:
                </p>
                
                <SimpleCodeBlock
                  title="Basic Variables"
                  explanation="Here's how to create different types of variables in Dart. You can either specify the type or let Dart infer it using 'var'."
                  code={`// String - for text
String name = 'John';

// int - for whole numbers
int age = 25;

// double - for decimal numbers
double height = 6.1;

// bool - for true/false values
bool isStudent = true;

// Using var (Dart will figure out the type)
var country = 'USA';   // This is a String
var score = 95;        // This is an int`}
                  highlightLines={[2, 5, 8, 11, 14, 15]}
                  lineExplanations={{
                    2: "Create a text variable by using the String type",
                    5: "Create a whole number using the int type",
                    8: "Store decimal numbers using the double type",
                    11: "Boolean variables can only be true or false",
                    14: "You can use 'var' and Dart will figure out the type",
                    15: "Dart knows this is an integer automatically"
                  }}
                />
                
                <div className="flex items-center gap-2 mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-sm">
                  <Lightbulb className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                  <p>In Dart, you end statements with a semicolon (;) and comments start with //</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="brutalist-card p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">Collections</h3>
                <p className="text-muted-foreground mb-6">
                  Collections let you store multiple values in a single variable.
                </p>
                
                <SimpleCodeBlock
                  title="Lists (Arrays)"
                  explanation="Lists store a collection of items in a specific order. Think of them as a row of boxes, each containing a value."
                  code={`// Create a list of strings
List<String> fruits = ['apple', 'banana', 'orange'];

// Add an item to the list
fruits.add('grape');

// Access items by index (starts at 0)
String firstFruit = fruits[0];  // 'apple'

// Get list length
print('Number of fruits: \\${fruits.length}');  // 4

// Loop through the list
for (String fruit in fruits) {
  print('I like $fruit');
}`}
                  highlightLines={[2, 5, 8, 11, 14]}
                  lineExplanations={{
                    2: "Create a list of strings with square brackets",
                    5: "Add new items with the add() method",
                    8: "Access any item with its position number (index), starting from 0",
                    11: "Get the number of items with .length property",
                    14: "Loop through all items in a list with a for-in loop"
                  }}
                />
                
                <SimpleCodeBlock
                  title="Maps (Key-Value Pairs)"
                  explanation="Maps store key-value pairs, like a dictionary where you look up a word (key) to find its definition (value)."
                  code={`// Create a map with string keys and string values
Map<String, String> capitals = {
  'USA': 'Washington D.C.',
  'UK': 'London',
  'Japan': 'Tokyo'
};

// Add a new entry
capitals['France'] = 'Paris';

// Access a value by its key
String japanCapital = capitals['Japan'];  // 'Tokyo'

// Check if a key exists
if (capitals.containsKey('Italy')) {
  print('Italy is in the map');
} else {
  print('Italy is not in the map');
}`}
                  highlightLines={[2, 8, 11, 14]}
                  lineExplanations={{
                    2: "Create a map with curly braces {}",
                    8: "Add or update entries using square brackets",
                    11: "Look up values using the key in square brackets",
                    14: "Check if a key exists with containsKey()"
                  }}
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="brutalist-card p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">Functions</h3>
                <p className="text-muted-foreground mb-6">
                  Functions are blocks of code that perform a specific task and can be reused.
                </p>
                
                <SimpleCodeBlock
                  title="Basic Functions"
                  explanation="Functions help organize code into logical blocks that can be called multiple times."
                  code={`// Function that takes no parameters and returns nothing
void sayHello() {
  print('Hello!');
}

// Function that takes parameters
void greet(String name) {
  print('Hello, $name!');
}

// Function that returns a value
int add(int a, int b) {
  return a + b;
}

// Using the functions
void main() {
  sayHello();                  // Prints: Hello!
  greet('Sarah');              // Prints: Hello, Sarah!
  int sum = add(5, 3);         // sum = 8
  print('The sum is $sum');    // Prints: The sum is 8
}`}
                  highlightLines={[2, 6, 11, 16, 17, 18, 19]}
                  lineExplanations={{
                    2: "Define a function with 'void' if it doesn't return a value",
                    6: "Functions can take parameters (inputs)",
                    11: "Specify a return type (like int) if the function returns a value",
                    16: "Call functions by their name followed by parentheses",
                    17: "Pass arguments to functions inside the parentheses",
                    18: "Store the returned value in a variable",
                    19: "Use string interpolation with $ to include variables in strings"
                  }}
                />
                
                <div className="flex items-center gap-2 mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p>Function names typically use <strong>camelCase</strong> in Dart: first word lowercase, then capitalize the first letter of each subsequent word (like <code>addNumbers</code>).</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="brutalist-card p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">Control Flow</h3>
                <p className="text-muted-foreground mb-6">
                  Control flow statements determine how your code runs based on different conditions.
                </p>
                
                <SimpleCodeBlock
                  title="If Statements"
                  explanation="If statements let your code make decisions."
                  code={`int temperature = 25;

// Basic if-else statement
if (temperature > 30) {
  print('It\'s hot outside!');
} else if (temperature > 20) {
  print('It\'s a nice day!');
} else {
  print('It\'s cold outside!');
}

// Shortened if-else for simple conditions
String result = temperature > 30 ? 'Hot' : 'Not hot';`}
                  highlightLines={[4, 6, 8, 12]}
                  lineExplanations={{
                    4: "Code inside runs only if the condition is true",
                    6: "Else if provides another condition to check if the first is false",
                    8: "Else runs if all conditions above are false",
                    12: "The ternary operator '?' is a shorthand for simple if-else statements"
                  }}
                />
                
                <SimpleCodeBlock
                  title="Loops"
                  explanation="Loops let you run the same code multiple times."
                  code={`// For loop
for (int i = 0; i < 5; i++) {
  print('Count: $i');
}

// While loop
int count = 0;
while (count < 3) {
  print('While: $count');
  count++;
}

// For-in loop for collections
List<String> colors = ['red', 'green', 'blue'];
for (String color in colors) {
  print('Color: $color');
}`}
                  highlightLines={[2, 7, 13]}
                  lineExplanations={{
                    2: "For loops repeat for a specific number of times: init; condition; increment",
                    7: "While loops keep running as long as the condition is true",
                    13: "For-in loops are simpler for going through all items in a collection"
                  }}
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="brutalist-card p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">Classes and Objects</h3>
                <p className="text-muted-foreground mb-6">
                  Dart is an object-oriented language that uses classes to create objects.
                </p>
                
                <SimpleCodeBlock
                  title="Basic Class"
                  explanation="Classes are blueprints for creating objects that have properties (data) and methods (functions)."
                  code={`// Define a class
class Person {
  // Properties
  String name;
  int age;
  
  // Constructor
  Person(this.name, this.age);
  
  // Method
  void introduce() {
    print('Hi, I am $name and I am $age years old.');
  }
}

// Create objects from the class
void main() {
  // Create a Person object
  Person person1 = Person('Alex', 30);
  
  // Access properties
  print(person1.name);  // Alex
  
  // Call methods
  person1.introduce();  // Hi, I am Alex and I am 30 years old.
}`}
                  highlightLines={[2, 4, 5, 8, 11, 17, 20, 23]}
                  lineExplanations={{
                    2: "Define a class with the class keyword followed by the name",
                    4: "Properties are variables that belong to the class",
                    5: "Properties define what data an object can store",
                    8: "The constructor initializes a new object - it runs when you create an object",
                    11: "Methods are functions that belong to the class",
                    17: "Create an object using the class name and constructor",
                    20: "Access object properties using dot notation",
                    23: "Call object methods using dot notation"
                  }}
                />
                
                <div className="flex items-center gap-2 mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-sm">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p>Class names in Dart use <strong>PascalCase</strong>: capitalize the first letter of each word (like <code>Person</code> or <code>BankAccount</code>).</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Learn Dart */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Why Learn Dart?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dart is more than just the language for Flutter - it's a powerful, modern programming language with many advantages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation animation="fade-in-left">
                <div className="brutalist-card p-6 h-full">
                  <h3 className="text-2xl font-bold mb-4">Dart for Flutter</h3>
                  <p className="text-muted-foreground mb-4">
                    To build Flutter apps, you need to know Dart. It's the foundation of every Flutter application.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Reactive UI building with declarative syntax</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Asynchronous programming for smooth apps</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Object-oriented approach to UI components</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Type safety for fewer runtime errors</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-right">
                <div className="brutalist-card p-6 h-full">
                  <h3 className="text-2xl font-bold mb-4">Beyond Flutter</h3>
                  <p className="text-muted-foreground mb-4">
                    Dart is versatile and can be used for more than just mobile apps.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Web development with strong typing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Server-side applications with dart:io</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Command-line applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>IoT and embedded systems</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Practice Your Dart Skills</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The best way to learn programming is by practicing. Try these exercises to improve your Dart skills.
              </p>
            </div>
            
            <Tabs defaultValue="beginner" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
              
              <TabsContent value="beginner" className="pt-6">
                <div className="brutalist-card p-6">
                  <h3 className="text-2xl font-bold mb-4">Beginner Exercises</h3>
                  <p className="text-muted-foreground mb-6">
                    Start with these simple exercises to practice the basics of Dart.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">1. Hello World</h4>
                      <p className="text-sm mb-3">Write a program that prints "Hello, Dart!" to the console.</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          View Solution <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">2. Sum Calculator</h4>
                      <p className="text-sm mb-3">Create a function that takes two numbers and returns their sum.</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          View Solution <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">3. Even or Odd</h4>
                      <p className="text-sm mb-3">Write a function that determines if a number is even or odd.</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          View Solution <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="intermediate" className="pt-6">
                <div className="brutalist-card p-6">
                  <h3 className="text-2xl font-bold mb-4">Intermediate Exercises</h3>
                  <p className="text-muted-foreground mb-6">
                    Try these exercises after you're comfortable with the basics.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">1. Word Counter</h4>
                      <p className="text-sm mb-3">Create a function that counts the number of words in a string.</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          View Solution <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">2. Reverse a List</h4>
                      <p className="text-sm mb-3">Write a function that reverses a list without using the built-in reverse method.</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          View Solution <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">3. Person Class</h4>
                      <p className="text-sm mb-3">Create a Person class with properties for name, age, and email, plus methods to update and display this information.</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          View Solution <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="advanced" className="pt-6">
                <div className="brutalist-card p-6">
                  <h3 className="text-2xl font-bold mb-4">Advanced Exercises</h3>
                  <p className="text-muted-foreground mb-6">
                    Challenge yourself with these more complex exercises.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">1. Async Fetcher</h4>
                      <p className="text-sm mb-3">Create a function that asynchronously fetches data from multiple sources and combines the results.</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          View Solution <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">2. Custom Collection</h4>
                      <p className="text-sm mb-3">Implement a custom collection class with methods for adding, removing, and searching items.</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          View Solution <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">3. File Analyzer</h4>
                      <p className="text-sm mb-3">Write a program that reads a text file, analyzes its contents, and generates statistics about word frequency.</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          View Solution <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/community">
                  Join Our Community for More Practice Exercises
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready for the Next Step?</h2>
            <p className="text-xl mb-12 opacity-90">
              Now that you've learned the basics of Dart, you're ready to start building Flutter apps!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/projects" className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/20 transition-colors">
                <h3 className="text-2xl font-bold mb-2">Explore Projects</h3>
                <p className="opacity-80 mb-4">
                  Start building real Flutter apps with our beginner-friendly project tutorials
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link href="/roadmap" className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/20 transition-colors">
                <h3 className="text-2xl font-bold mb-2">Continue Learning</h3>
                <p className="opacity-80 mb-4">
                  Follow our structured roadmap to learn more about Flutter development
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 