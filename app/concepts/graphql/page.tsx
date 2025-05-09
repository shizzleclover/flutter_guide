"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SimpleCodeBlock } from "@/components/simple-code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Database, ExternalLink, Server } from "lucide-react"

export default function GraphQLPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">GraphQL in Flutter</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 mb-8">
            Learn how to integrate GraphQL APIs into your Flutter applications
          </p>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="brutalist-card p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">What is GraphQL?</h2>
            <p className="mb-4">
              GraphQL is a query language for APIs that allows clients to request exactly the data they need. Unlike REST APIs, GraphQL uses a single endpoint where you can specify the exact data structure you want returned.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">Advantages</h3>
                <ul className="space-y-2">
                  <li>• Request only needed data</li>
                  <li>• Single request for multiple resources</li>
                  <li>• Strong typing system</li>
                  <li>• Self-documenting API</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">For Flutter Apps</h3>
                <ul className="space-y-2">
                  <li>• Reduces network requests</li>
                  <li>• Better for slow connections</li>
                  <li>• Improves battery efficiency</li>
                  <li>• Type-safe client generation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Implementing GraphQL in Flutter</h2>
            <p className="mb-4">
              The primary package for GraphQL integration in Flutter is <code>graphql_flutter</code>.
            </p>

            <div className="space-y-6">
              <div className="brutalist-card p-6">
                <h3 className="text-xl font-bold mb-4">Step 1: Add Dependencies</h3>
                <SimpleCodeBlock
                  title="pubspec.yaml"
                  code={`dependencies:
  flutter:
    sdk: flutter
  graphql_flutter: ^5.1.2`}
                />
              </div>

              <div className="brutalist-card p-6">
                <h3 className="text-xl font-bold mb-4">Step 2: Setup GraphQL Client</h3>
                <SimpleCodeBlock
                  title="main.dart"
                  code={`import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

void main() async {
  await initHiveForFlutter();
  
  final HttpLink httpLink = HttpLink(
    'https://your-graphql-endpoint.com/graphql',
  );
  
  ValueNotifier<GraphQLClient> client = ValueNotifier(
    GraphQLClient(
      link: httpLink,
      cache: GraphQLCache(store: HiveStore()),
    ),
  );
  
  runApp(
    GraphQLProvider(
      client: client,
      child: MyApp(),
    ),
  );
}`}
                />
              </div>

              <div className="brutalist-card p-6">
                <h3 className="text-xl font-bold mb-4">Step 3: Define and Execute Queries</h3>
                <Tabs defaultValue="query">
                  <TabsList className="mb-4">
                    <TabsTrigger value="query">Query</TabsTrigger>
                    <TabsTrigger value="widget">Widget</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="query">
                    <SimpleCodeBlock
                      title="Define your query"
                      code={`final String getProductsQuery = r'''
  query GetProducts {
    products {
      id
      name
      price
      imageUrl
    }
  }
''';`}
                    />
                  </TabsContent>
                  
                  <TabsContent value="widget">
                    <SimpleCodeBlock
                      title="Using Query widget"
                      code={`import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class ProductsPage extends StatelessWidget {
  final String getProductsQuery = r'''
    query GetProducts {
      products {
        id
        name
        price
        imageUrl
      }
    }
  ''';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Products')),
      body: Query(
        options: QueryOptions(
          document: gql(getProductsQuery),
          fetchPolicy: FetchPolicy.cacheAndNetwork,
        ),
        builder: (result, {fetchMore, refetch}) {
          if (result.isLoading) {
            return Center(child: CircularProgressIndicator());
          }
          
          if (result.hasException) {
            return Center(child: Text('Error: \\${result.exception.toString()}'));
          }
          
          final products = result.data?['products'] as List<dynamic>;
          
          return ListView.builder(
            itemCount: products.length,
            itemBuilder: (context, index) {
              final product = products[index];
              return ListTile(
                title: Text(product['name']),
                subtitle: Text('\\$\\${product["price"]}'),
              );
            },
          );
        },
      ),
    );
  }
}`}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Related Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/concepts/caching" className="brutalist-card p-6 flex items-center gap-4 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Data Caching</h3>
                  <p className="text-sm text-muted-foreground">Learn effective caching strategies</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </Link>
              
              <Link href="/concepts/state-management" className="brutalist-card p-6 flex items-center gap-4 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">State Management</h3>
                  <p className="text-sm text-muted-foreground">Manage complex application state</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mb-10">
            <Button asChild>
              <a href="https://pub.dev/packages/graphql_flutter" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-4 w-4 mr-2" />
                GraphQL Flutter Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}