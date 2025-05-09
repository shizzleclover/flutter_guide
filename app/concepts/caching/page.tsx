"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SimpleCodeBlock } from "@/components/simple-code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Database, Layers, Server } from "lucide-react"

export default function CachingPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Caching in Flutter</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 mb-8">
            Implement effective caching strategies to improve app performance
          </p>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="brutalist-card p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Why Cache Data?</h2>
            <p className="mb-4">
              Data caching is a technique to store copies of data locally to improve performance, reduce network usage, 
              and provide offline functionality in your Flutter applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">Performance Benefits</h3>
                <ul className="space-y-2">
                  <li>• Faster load times</li>
                  <li>• Reduced API requests</li>
                  <li>• Lower battery consumption</li>
                  <li>• Less data usage</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">User Experience Benefits</h3>
                <ul className="space-y-2">
                  <li>• Instant data display</li>
                  <li>• Offline app functionality</li>
                  <li>• Smoother transitions</li>
                  <li>• More responsive UI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Caching Solutions */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Caching Solutions in Flutter</h2>
            
            <Tabs defaultValue="shared_prefs">
              <TabsList className="mb-4">
                <TabsTrigger value="shared_prefs">Shared Preferences</TabsTrigger>
                <TabsTrigger value="sqlite">SQLite</TabsTrigger>
                <TabsTrigger value="hive">Hive</TabsTrigger>
              </TabsList>
              
              <TabsContent value="shared_prefs">
                <div className="brutalist-card p-6">
                  <h3 className="text-xl font-bold mb-4">Shared Preferences</h3>
                  <p className="mb-4">
                    Ideal for storing small amounts of key-value data like user preferences or settings.
                  </p>
                  
                  <SimpleCodeBlock
                    title="Example: Caching with Shared Preferences"
                    code={`import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

class UserPreferences {
  static const String _userKey = 'user_data';
  
  // Save user data
  static Future<bool> saveUser(User user) async {
    final prefs = await SharedPreferences.getInstance();
    final userData = jsonEncode(user.toJson());
    return prefs.setString(_userKey, userData);
  }
  
  // Get user data
  static Future<User?> getUser() async {
    final prefs = await SharedPreferences.getInstance();
    final userData = prefs.getString(_userKey);
    
    if (userData == null) {
      return null;
    }
    
    return User.fromJson(jsonDecode(userData));
  }
}`}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="sqlite">
                <div className="brutalist-card p-6">
                  <h3 className="text-xl font-bold mb-4">SQLite Database</h3>
                  <p className="mb-4">
                    Great for structured data and when you need to perform complex queries.
                  </p>
                  
                  <SimpleCodeBlock
                    title="Example: SQLite Database Helper"
                    code={`import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class DatabaseHelper {
  static final DatabaseHelper _instance = DatabaseHelper._internal();
  static Database? _database;
  
  factory DatabaseHelper() => _instance;
  
  DatabaseHelper._internal();
  
  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDatabase();
    return _database!;
  }
  
  Future<Database> _initDatabase() async {
    final path = join(await getDatabasesPath(), 'my_app.db');
    return await openDatabase(
      path,
      version: 1,
      onCreate: _createDb,
    );
  }
  
  Future<void> _createDb(Database db, int version) async {
    await db.execute('''
      CREATE TABLE products(
        id INTEGER PRIMARY KEY,
        name TEXT,
        price REAL,
        imageUrl TEXT
      )
    ''');
  }
  
  // Get all products
  Future<List<Map<String, dynamic>>> getProducts() async {
    final db = await database;
    return await db.query('products');
  }
}`}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="hive">
                <div className="brutalist-card p-6">
                  <h3 className="text-xl font-bold mb-4">Hive</h3>
                  <p className="mb-4">
                    A lightweight, fast key-value database written in pure Dart. Great for simple data models.
                  </p>
                  
                  <SimpleCodeBlock
                    title="Example: Hive Model and Operations"
                    code={`import 'package:hive/hive.dart';

part 'product.g.dart';

@HiveType(typeId: 0)
class Product {
  @HiveField(0)
  final int id;
  
  @HiveField(1)
  final String name;
  
  @HiveField(2)
  final double price;
  
  Product({
    required this.id,
    required this.name,
    required this.price,
  });
}

// Using Hive in your app
class ProductRepository {
  static const String boxName = 'products';
  
  // Save a product
  Future<void> saveProduct(Product product) async {
    final box = await Hive.openBox<Product>(boxName);
    await box.put(product.id, product);
  }
  
  // Get all products
  Future<List<Product>> getAllProducts() async {
    final box = await Hive.openBox<Product>(boxName);
    return box.values.toList();
  }
}`}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Best Practices */}
          <div className="brutalist-card p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Caching Best Practices</h2>
            
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h3 className="font-bold">Set Appropriate Expiration Times</h3>
                <p>
                  Consider how frequently data changes when setting cache expiration:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>User profiles: Longer expiration (days)</li>
                  <li>Product information: Medium expiration (hours)</li>
                  <li>Dynamic data: Short expiration (minutes)</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h3 className="font-bold">Use a Cache-First Strategy</h3>
                <p>
                  For the best user experience:
                </p>
                <ol className="list-decimal list-inside mt-2 ml-2">
                  <li>Display cached data immediately if available</li>
                  <li>Make network request in the background</li>
                  <li>Update UI with fresh data when it arrives</li>
                  <li>Update cache with the fresh data</li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Related Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/concepts/state-management" className="brutalist-card p-6 flex items-center gap-4 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">State Management</h3>
                  <p className="text-sm text-muted-foreground">Manage application state effectively</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </Link>
              
              <Link href="/concepts/graphql" className="brutalist-card p-6 flex items-center gap-4 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">GraphQL Integration</h3>
                  <p className="text-sm text-muted-foreground">Optimize data fetching with GraphQL</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mb-10">
            <Button asChild>
              <a href="https://flutter.dev/docs/cookbook/persistence/key-value" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-4 w-4 mr-2" />
                Flutter Persistence Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 