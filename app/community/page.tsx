"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  BookOpen,
  Code,
  Video,
  MessageSquare,
  Plus,
  ThumbsUp,
  MessageCircle,
  Filter,
  Tag,
  Library,
  Heart
} from "lucide-react"

// Mock data for community resources
const mockResources = [
  {
    id: 1,
    type: "tutorial",
    title: "Building a Todo App in 30 Minutes",
    author: "Sarah Johnson",
    date: "2 days ago",
    description: "Follow along as I create a simple todo app with Flutter, explaining each step clearly.",
    likes: 42,
    comments: 12,
    tags: ["beginner", "todo-app", "state-management"]
  },
  {
    id: 2,
    type: "code",
    title: "Simple Animation Example - Fade In/Out",
    author: "Michael Chen",
    date: "1 week ago",
    description: "A clean, short example of how to create fade animations in Flutter.",
    likes: 57,
    comments: 8,
    tags: ["animation", "beginner", "UI"]
  },
  {
    id: 3,
    type: "video",
    title: "Flutter Navigation Explained Simply",
    author: "Dev Tutorials",
    date: "3 days ago",
    description: "A 10-minute video explaining Flutter navigation in the simplest way possible.",
    likes: 126,
    comments: 24,
    tags: ["navigation", "beginner"]
  },
  {
    id: 4,
    type: "tutorial",
    title: "How I Structure Flutter Projects for Scalability",
    author: "James Wilson",
    date: "2 weeks ago",
    description: "My personal approach to organizing Flutter code for large projects.",
    likes: 85,
    comments: 31,
    tags: ["architecture", "advanced"]
  },
  {
    id: 5,
    type: "code",
    title: "Clean State Management with Provider",
    author: "Lisa Wong",
    date: "5 days ago",
    description: "A simplified approach to state management using the Provider package.",
    likes: 72,
    comments: 15,
    tags: ["state-management", "provider"]
  },
  {
    id: 6,
    type: "discussion",
    title: "What do you wish you knew when starting Flutter?",
    author: "Alex Thompson",
    date: "1 day ago",
    description: "Share your insights and help new Flutter developers avoid common pitfalls.",
    likes: 94,
    comments: 53,
    tags: ["discussion", "tips", "beginner"]
  }
]

// Card component for resources
function ResourceCard({ resource }) {
  return (
    <div className="brutalist-card p-6 hover:translate-y-[-5px] transition-transform">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-muted overflow-hidden mr-3">
            <Image src="/placeholder.svg?height=40&width=40" alt={resource.author} width={40} height={40} />
          </div>
          <div>
            <p className="font-bold">{resource.author}</p>
            <p className="text-xs text-muted-foreground">{resource.date}</p>
          </div>
        </div>
        
        <div className={`px-3 py-1 rounded-full text-sm ${
          resource.type === 'tutorial' ? 'bg-primary/20 text-primary' :
          resource.type === 'code' ? 'bg-secondary/20 text-secondary' :
          resource.type === 'video' ? 'bg-accent/20 text-accent' :
          'bg-gray-200 text-gray-700'
        }`}>
          {resource.type}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
      <p className="text-muted-foreground mb-4">{resource.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.map(tag => (
          <span key={tag} className="bg-muted px-2 py-1 rounded-full text-xs">#{tag}</span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <ThumbsUp className="h-4 w-4" />
            <span>{resource.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <MessageCircle className="h-4 w-4" />
            <span>{resource.comments}</span>
          </button>
        </div>
        
        <Button size="sm" variant="outline">
          View Details
        </Button>
      </div>
    </div>
  )
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("all")
  
  const filteredResources = activeTab === "all" 
    ? mockResources 
    : mockResources.filter(resource => resource.type === activeTab)
  
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Flutter Community
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              Share and discover Flutter resources, code snippets, and knowledge with developers around the world.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg flex items-center">
              <Search className="h-5 w-5 ml-2 mr-1 text-white/70" />
              <Input 
                placeholder="Search tutorials, code snippets, discussions..." 
                className="border-none bg-transparent text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button size="sm" className="ml-2 bg-white text-primary hover:bg-white/90">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="brutalist-card p-6 sticky top-6">
                <Button className="w-full mb-6" size="lg">
                  <Plus className="mr-2 h-4 w-4" /> Share a Resource
                </Button>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2 flex items-center">
                      <Filter className="h-4 w-4 mr-2" /> Categories
                    </h3>
                    <div className="space-y-2 pl-6">
                      <button className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <BookOpen className="h-4 w-4 mr-2" /> Tutorials
                      </button>
                      <button className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <Code className="h-4 w-4 mr-2" /> Code Snippets
                      </button>
                      <button className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <Video className="h-4 w-4 mr-2" /> Videos
                      </button>
                      <button className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <MessageSquare className="h-4 w-4 mr-2" /> Discussions
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-2 flex items-center">
                      <Tag className="h-4 w-4 mr-2" /> Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-muted px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-primary/20">#beginner</span>
                      <span className="bg-muted px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-primary/20">#state-management</span>
                      <span className="bg-muted px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-primary/20">#animation</span>
                      <span className="bg-muted px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-primary/20">#UI</span>
                      <span className="bg-muted px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-primary/20">#firebase</span>
                      <span className="bg-muted px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-primary/20">#performance</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-2 flex items-center">
                      <Heart className="h-4 w-4 mr-2" /> Your Bookmarks
                    </h3>
                    <p className="text-sm text-muted-foreground">You haven't saved any resources yet.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full mb-8">
                <TabsList className="grid grid-cols-5 mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="tutorial">Tutorials</TabsTrigger>
                  <TabsTrigger value="code">Code Snippets</TabsTrigger>
                  <TabsTrigger value="video">Videos</TabsTrigger>
                  <TabsTrigger value="discussion">Discussions</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Latest Resources</h2>
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-muted-foreground">Sort by:</span>
                  <select className="border rounded-md px-2 py-1 text-sm">
                    <option>Latest</option>
                    <option>Most Popular</option>
                    <option>Most Commented</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map(resource => (
                  <ScrollAnimation key={resource.id} animation="fade-in-up">
                    <ResourceCard resource={resource} />
                  </ScrollAnimation>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button size="lg" variant="outline">
                  Load More Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Share Your Knowledge CTA */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Share Your Knowledge</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Help others learn Flutter by sharing your tutorials, code snippets, or starting discussions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="brutalist-card p-6 text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Write a Tutorial</h3>
                  <p className="text-muted-foreground mb-4">
                    Share your step-by-step guide to help others learn Flutter concepts.
                  </p>
                  <Button variant="outline" className="w-full">Start Writing</Button>
                </div>
                
                <div className="brutalist-card p-6 text-center">
                  <Code className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-2">Share Code</h3>
                  <p className="text-muted-foreground mb-4">
                    Post your code snippets, widgets, or solutions to common problems.
                  </p>
                  <Button variant="outline" className="w-full">Add Code</Button>
                </div>
                
                <div className="brutalist-card p-6 text-center">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">Start a Discussion</h3>
                  <p className="text-muted-foreground mb-4">
                    Ask questions, share ideas, or discuss Flutter development.
                  </p>
                  <Button variant="outline" className="w-full">New Topic</Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="mt-16">
            <div className="brutalist-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Submit a Resource</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Resource Type</label>
                  <select className="w-full p-3 border rounded-md">
                    <option>Select Type</option>
                    <option>Tutorial</option>
                    <option>Code Snippet</option>
                    <option>Video</option>
                    <option>Discussion</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input placeholder="Give your resource a descriptive title" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea 
                    placeholder="Describe what your resource is about and how it helps others" 
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <Textarea 
                    placeholder="Your tutorial, code, or discussion content goes here" 
                    rows={10}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
                  <Input placeholder="beginner, state-management, animation" />
                </div>
                
                <Button size="lg" className="w-full">Submit Resource</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Guidelines */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Community Guidelines</h2>
            <div className="brutalist-card p-6">
              <div className="space-y-4">
                <p>Our community is built on respect, helpfulness, and knowledge sharing. When participating, please:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be respectful and kind to other community members</li>
                  <li>Share clear, well-explained code with proper comments</li>
                  <li>Provide context and explanations with your resources</li>
                  <li>Give credit to original sources when applicable</li>
                  <li>Keep discussions focused on Flutter and related technologies</li>
                  <li>Help others by answering questions when you can</li>
                </ul>
                <p>Resources that don't meet our community standards may be removed. Thank you for contributing to a positive learning environment!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 