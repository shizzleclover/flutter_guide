import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SimpleCodeBlock } from "@/components/simple-code-block"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Check, Code2, RefreshCw, Workflow } from "lucide-react"

export const metadata = {
  title: "State Management in Flutter",
  description: "Learn different approaches to manage state in your Flutter applications"
}

export default function StateManagementPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">State Management in Flutter</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 mb-8">
            Learn different approaches to manage state in your Flutter applications
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="secondary" className="gap-2">
              <a href="#bloc">
                <Workflow className="h-4 w-4" />
                BLoC Pattern
              </a>
            </Button>
            <Button asChild variant="secondary" className="gap-2">
              <a href="#riverpod">
                <RefreshCw className="h-4 w-4" />
                Riverpod
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="brutalist-card p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Why State Management Matters</h2>
            <p className="mb-4">
              As Flutter applications grow, managing state becomes increasingly complex. Good state management solutions help you:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Maintain clean separation between UI and business logic</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Share data efficiently between different parts of your app</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Create predictable state changes through unidirectional data flow</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Build apps that are easier to test, debug, and maintain</span>
              </li>
            </ul>
            <p>
              In this guide, we'll focus on two powerful state management approaches: BLoC and Riverpod.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Comparison of State Management Solutions</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 text-left border bg-muted">Feature</th>
                    <th className="p-3 text-left border bg-muted">BLoC</th>
                    <th className="p-3 text-left border bg-muted">Riverpod</th>
                    <th className="p-3 text-left border bg-muted">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Learning Curve</td>
                    <td className="p-3 border">Steep</td>
                    <td className="p-3 border">Moderate</td>
                    <td className="p-3 border">Gentle</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Complexity</td>
                    <td className="p-3 border">High</td>
                    <td className="p-3 border">Medium</td>
                    <td className="p-3 border">Low</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Testing</td>
                    <td className="p-3 border">Excellent</td>
                    <td className="p-3 border">Very Good</td>
                    <td className="p-3 border">Good</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Scalability</td>
                    <td className="p-3 border">Excellent</td>
                    <td className="p-3 border">Excellent</td>
                    <td className="p-3 border">Good</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Best For</td>
                    <td className="p-3 border">Large, complex apps</td>
                    <td className="p-3 border">Medium to large apps</td>
                    <td className="p-3 border">Small to medium apps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BLoC Pattern */}
          <div id="bloc" className="scroll-mt-20 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Workflow className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold">BLoC Pattern</h2>
            </div>

            <div className="brutalist-card p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">What is BLoC?</h3>
              <p className="mb-4">
                BLoC (Business Logic Component) is a state management pattern that separates business logic from the UI. It uses streams to communicate between different layers of your application.
              </p>
              <p className="mb-4">
                The core concept is that everything in the app should be represented as streams of events: widgets submit events; other widgets will respond. BLoC sits in the middle, managing the communication.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 bg-muted p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Clear separation of UI and business logic</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Highly testable code</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Scales well for large applications</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-muted p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Challenges</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span>Steeper learning curve</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span>More boilerplate code</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span>Can be overkill for simple apps</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Getting Started with BLoC</h3>
              <p className="mb-4">
                Add the following packages to your pubspec.yaml:
              </p>

              <SimpleCodeBlock
                title="pubspec.yaml"
                code={`dependencies:
  flutter:
    sdk: flutter
  flutter_bloc: ^8.1.3
  bloc: ^8.1.2
  equatable: ^2.0.5`}
              />

              <p className="mt-6 mb-4">
                The basic components of the BLoC pattern are:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>Events:</strong> Input events that the BLoC will react to</li>
                <li><strong>States:</strong> Output states that represent UI changes</li>
                <li><strong>BLoC:</strong> The business logic component that transforms events into states</li>
              </ul>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Event</h4>
                <SimpleCodeBlock
                  title="counter_event.dart"
                  code={`import 'package:equatable/equatable.dart';

abstract class CounterEvent extends Equatable {
  const CounterEvent();

  @override
  List<Object> get props => [];
}

class IncrementEvent extends CounterEvent {}

class DecrementEvent extends CounterEvent {}`}
                />
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">State</h4>
                <SimpleCodeBlock
                  title="counter_state.dart"
                  code={`import 'package:equatable/equatable.dart';

class CounterState extends Equatable {
  final int count;
  
  const CounterState({required this.count});
  
  @override
  List<Object> get props => [count];
}`}
                />
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">BLoC</h4>
                <SimpleCodeBlock
                  title="counter_bloc.dart"
                  code={`import 'package:flutter_bloc/flutter_bloc.dart';
import 'counter_event.dart';
import 'counter_state.dart';

class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(const CounterState(count: 0)) {
    on<IncrementEvent>(_onIncrement);
    on<DecrementEvent>(_onDecrement);
  }

  void _onIncrement(IncrementEvent event, Emitter<CounterState> emit) {
    // Access current state via this.state
    final currentCount = this.state.count;
    emit(CounterState(count: currentCount + 1));
  }

  void _onDecrement(DecrementEvent event, Emitter<CounterState> emit) {
    // Access current state via this.state
    final currentCount = this.state.count;
    emit(CounterState(count: currentCount - 1));
  }
}`}
                />
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">UI</h4>
                <SimpleCodeBlock
                  title="counter_page.dart"
                  code={`import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'counter_bloc.dart';
import 'counter_event.dart';
import 'counter_state.dart';

class CounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => CounterBloc(),
      child: CounterView(),
    );
  }
}

class CounterView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter')),
      body: Center(
        child: BlocBuilder<CounterBloc, CounterState>(
          builder: (context, state) {
            return Text(
              '${state.count}',
              style: TextStyle(fontSize: 24),
            );
          },
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          FloatingActionButton(
            child: Icon(Icons.add),
            onPressed: () => context.read<CounterBloc>().add(IncrementEvent()),
          ),
          SizedBox(height: 8),
          FloatingActionButton(
            child: Icon(Icons.remove),
            onPressed: () => context.read<CounterBloc>().add(DecrementEvent()),
          ),
        ],
      ),
    );
  }
}`}
                />
              </div>
            </div>

            <div className="text-center mb-10">
              <Button asChild>
                <a href="https://bloclibrary.dev/" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Official BLoC Documentation
                </a>
              </Button>
            </div>
          </div>

          {/* Riverpod */}
          <div id="riverpod" className="scroll-mt-20 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <RefreshCw className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold">Riverpod</h2>
            </div>

            <div className="brutalist-card p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">What is Riverpod?</h3>
              <p className="mb-4">
                Riverpod is a reactive caching and data-binding framework, designed as a complete rewrite of the Provider package. It offers improved type safety, testability, and easier dependency management.
              </p>
              <p className="mb-4">
                Riverpod allows you to declare "providers" that contain and expose state. These providers can be consumed anywhere in your app without passing them explicitly.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 bg-muted p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Simplified dependency management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Strong type safety</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Improved testability</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-muted p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Challenges</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span>Newer ecosystem compared to Provider</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span>More complex for simple use cases</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                      <span>Can be intimidating for beginners</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Getting Started with Riverpod</h3>
              <p className="mb-4">
                Add the following packages to your pubspec.yaml:
              </p>

              <SimpleCodeBlock
                title="pubspec.yaml"
                code={`dependencies:
  flutter:
    sdk: flutter
  flutter_riverpod: ^2.3.6
  riverpod_annotation: ^2.1.1

dev_dependencies:
  riverpod_generator: ^2.2.3
  build_runner: ^2.3.3`}
              />

              <p className="mt-6 mb-4">
                The key components of Riverpod are:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>Providers:</strong> Objects that store and expose state</li>
                <li><strong>ProviderScope:</strong> Widget that enables Riverpod for your app</li>
                <li><strong>ConsumerWidget:</strong> Widgets that can read providers</li>
              </ul>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Main</h4>
                <SimpleCodeBlock
                  title="main.dart"
                  code={`import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'counter_page.dart';

void main() {
  runApp(
    // Enable Riverpod for the entire app
    ProviderScope(
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Riverpod Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: CounterPage(),
    );
  }
}`}
                />
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Provider</h4>
                <SimpleCodeBlock
                  title="counter_provider.dart"
                  code={`import 'package:riverpod_annotation/riverpod_annotation.dart';

// Generate provider using code generation
part 'counter_provider.g.dart';

// Simple state provider for a counter
@riverpod
class Counter extends _$Counter {
  @override
  int build() {
    return 0; // Initial state
  }
  
  // Methods to update state
  void increment() {
    // 'state' is a property of the Counter class
    final currentState = state;
    state = currentState + 1;
  }
  
  void decrement() {
    // 'state' is a property of the Counter class
    final currentState = state;
    state = currentState - 1;
  }
}`}
                />
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Consumer</h4>
                <SimpleCodeBlock
                  title="counter_page.dart"
                  code={`import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'counter_provider.dart';

// ConsumerWidget to read providers
class CounterPage extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Watch the counter state
    final count = ref.watch(counterProvider);
    
    return Scaffold(
      appBar: AppBar(title: Text('Counter')),
      body: Center(
        child: Text(
          '$count',
          style: TextStyle(fontSize: 24),
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          FloatingActionButton(
            child: Icon(Icons.add),
            // Read the provider and call a method
            onPressed: () => ref.read(counterProvider.notifier).increment(),
          ),
          SizedBox(height: 8),
          FloatingActionButton(
            child: Icon(Icons.remove),
            onPressed: () => ref.read(counterProvider.notifier).decrement(),
          ),
        ],
      ),
    );
  }
}`}
                />
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Notifier</h4>
                <SimpleCodeBlock
                  title="Advanced: Async Notifier"
                  code={`import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:dio/dio.dart';
import 'todo_model.dart';

part 'todo_provider.g.dart';

@riverpod
class TodosNotifier extends _$TodosNotifier {
  @override
  Future<List<Todo>> build() async {
    // Initial state is loaded from API
    return _fetchTodos();
  }
  
  Future<List<Todo>> _fetchTodos() async {
    final dio = Dio();
    final response = await dio.get('https://jsonplaceholder.typicode.com/todos');
    return (response.data as List).map((e) => Todo.fromJson(e)).toList();
  }
  
  Future<void> addTodo(Todo todo) async {
    // Optimistically update the UI
    // Using a local variable to avoid directly referencing 'state'
    final currentState = state;
    if (currentState.value != null) {
      state = AsyncValue.data([...currentState.value!, todo]);
    }
    
    try {
      // Make the API call
      final dio = Dio();
      await dio.post('https://jsonplaceholder.typicode.com/todos', data: todo.toJson());
    } catch (e, stack) {
      // Rollback in case of error
      state = AsyncValue.error(e, stack);
      // Refetch the todos from the server
      state = AsyncValue.data(await _fetchTodos());
    }
  }
}`}
                />
              </div>
            </div>

            <div className="text-center mb-10">
              <Button asChild>
                <a href="https://riverpod.dev/" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Official Riverpod Documentation
                </a>
              </Button>
            </div>
          </div>

          {/* Choosing a State Management Solution */}
          <div className="brutalist-card p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">How to Choose the Right State Management Solution</h2>
            <p className="mb-4">
              The best state management solution depends on your project requirements, team experience, and personal preference.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h3 className="font-bold">Choose BLoC if:</h3>
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>You're building a large, complex application</li>
                  <li>You value clean architecture and separation of concerns</li>
                  <li>You need a solution with comprehensive testing support</li>
                  <li>Your team is familiar with reactive programming concepts</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h3 className="font-bold">Choose Riverpod if:</h3>
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>You want strong type safety and compile-time verification</li>
                  <li>You need simplified dependency management</li>
                  <li>You like Provider but need more flexibility</li>
                  <li>You're building a medium to large application</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/concepts/graphql" className="brutalist-card p-6 flex items-center gap-4 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">GraphQL Integration</h3>
                  <p className="text-sm text-muted-foreground">Connect Flutter with GraphQL APIs</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </Link>
              
              <Link href="/concepts/caching" className="brutalist-card p-6 flex items-center gap-4 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Data Caching</h3>
                  <p className="text-sm text-muted-foreground">Implement effective caching strategies</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 