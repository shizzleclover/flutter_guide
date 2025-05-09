"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation, StaggerContainer, TiltCard } from "@/components/scroll-animations"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Clock, Search, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { SimpleCodeBlock } from "@/components/simple-code-block"
import { 
  Code, 
  Smartphone, 
  Layers, 
  Filter, 
  Star,
  Tag
} from "lucide-react"

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

// Sample projects data
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
  {
    id: "calculator",
    title: "Calculator App",
    description: "Build a calculator with basic arithmetic operations to practice layout and logic.",
    difficulty: "beginner",
    timeToComplete: "3-5 hours",
    category: ["UI", "Logic"],
    skills: ["UI Layout", "Logic", "User Input"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Calculator App Tutorial",
        url: "https://www.youtube.com/watch?v=eVG5DkPF5x8",
      },
    ],
  },
  {
    id: "weather",
    title: "Weather App",
    description: "Create a weather app that fetches data from an API and displays current conditions.",
    difficulty: "intermediate",
    timeToComplete: "5-8 hours",
    category: ["API", "UI"],
    skills: ["API Integration", "Async", "UI Design"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Weather App Tutorial",
        url: "https://www.youtube.com/watch?v=yZG_S3P7Ng4",
      },
      {
        title: "Weather App with API Integration",
        url: "https://www.youtube.com/watch?v=MnIEpFNxc0c",
      },
    ],
  },
  {
    id: "quiz",
    title: "Quiz App",
    description: "Build a quiz app with multiple-choice questions and score tracking.",
    difficulty: "beginner",
    timeToComplete: "4-6 hours",
    category: ["UI", "Logic", "State Management"],
    skills: ["Navigation", "State Management", "UI Design"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Quiz App Tutorial",
        url: "https://www.youtube.com/watch?v=C4p_7qBsECw",
      },
    ],
  },
  {
    id: "chat",
    title: "Chat App",
    description: "Create a real-time chat application using Firebase.",
    difficulty: "advanced",
    timeToComplete: "10-15 hours",
    category: ["Firebase", "UI", "Authentication"],
    skills: ["Firebase", "Authentication", "Real-time Database"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Chat App with Firebase",
        url: "https://www.youtube.com/watch?v=FTju8w4zEno",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce App",
    description: "Build a simple e-commerce app with product listings, cart, and checkout.",
    difficulty: "advanced",
    timeToComplete: "15-20 hours",
    category: ["UI", "State Management", "API"],
    skills: ["Provider/Bloc", "API Integration", "Navigation"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter E-Commerce App Tutorial",
        url: "https://www.youtube.com/watch?v=XBKzpTz65Io",
      },
    ],
  },
  {
    id: "notes",
    title: "Notes App",
    description: "Create a notes app with local storage to save and retrieve notes.",
    difficulty: "intermediate",
    timeToComplete: "6-10 hours",
    category: ["UI", "Local Storage"],
    skills: ["SQLite", "UI Design", "CRUD Operations"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Notes App Tutorial",
        url: "https://www.youtube.com/watch?v=hCOALMdb5Vc",
      },
    ],
  },
  {
    id: "fitness",
    title: "Fitness Tracker",
    description: "Build a fitness tracking app with workout logging and progress visualization.",
    difficulty: "intermediate",
    timeToComplete: "8-12 hours",
    category: ["UI", "Local Storage", "Charts"],
    skills: ["Charts", "Local Storage", "UI Design"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Fitness App Tutorial",
        url: "https://www.youtube.com/watch?v=D4nhaszNW4o",
      },
    ],
  },
  // Project 9
  {
    id: "recipe-app",
    title: "Recipe Finder",
    description: "Develop an app that allows users to search for recipes and view detailed cooking instructions.",
    difficulty: "intermediate",
    timeToComplete: "5-7 hours",
    category: ["API", "UI", "Search"],
    skills: ["API Integration", "Search Functionality", "Detailed Views"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Build a Recipe App with Flutter",
        url: "https://www.youtube.com/watch?v=VPvVD8t02U8",
      },
    ],
  },
  // Project 10
  {
    id: "movie-browser",
    title: "Movie Browser",
    description: "Create an app to browse popular movies, view details, and save favorites using TMDb API.",
    difficulty: "intermediate",
    timeToComplete: "6-9 hours",
    category: ["API", "UI", "Local Storage"],
    skills: ["API Integration", "Image Loading", "Favorites Management"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Movie App Tutorial",
        url: "https://www.youtube.com/watch?v=soZxqhZXk_k",
      },
    ],
  },
  // Project 11
  {
    id: "drawing-app",
    title: "Drawing App",
    description: "Build a simple drawing application with different brush sizes and colors.",
    difficulty: "intermediate",
    timeToComplete: "4-6 hours",
    category: ["UI", "Gesture Detection"],
    skills: ["Custom Painting", "Gesture Detection", "Color Pickers"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Drawing App Tutorial",
        url: "https://www.youtube.com/watch?v=43tg8hMPxJw",
      },
    ],
  },
  // Project 12
  {
    id: "pomodoro",
    title: "Pomodoro Timer",
    description: "Develop a productivity timer app based on the Pomodoro technique with customizable work/break intervals.",
    difficulty: "beginner",
    timeToComplete: "3-5 hours",
    category: ["UI", "Logic"],
    skills: ["Timers", "Notifications", "State Management"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Build a Pomodoro Timer in Flutter",
        url: "https://www.youtube.com/watch?v=5vhfZGBV_xY",
      },
    ],
  },
  // Project 13
  {
    id: "qr-scanner",
    title: "QR Code Scanner",
    description: "Create a QR code scanner and generator app with history tracking.",
    difficulty: "beginner", 
    timeToComplete: "3-4 hours",
    category: ["Hardware Integration", "UI"],
    skills: ["Camera Access", "QR Processing", "History Management"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter QR Code Scanner Tutorial",
        url: "https://www.youtube.com/watch?v=siuJhQ9BqsU",
      },
    ],
  },
  // Project 14
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Build an expense tracking app with categories, reports, and budgeting features.",
    difficulty: "intermediate",
    timeToComplete: "8-10 hours",
    category: ["Local Storage", "Charts", "UI"],
    skills: ["SQLite/Hive", "Charts", "Form Validation"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Expense Tracker App",
        url: "https://www.youtube.com/watch?v=QlRmLKqQb1M",
      },
    ],
  },
  // Project 15
  {
    id: "news-app",
    title: "News App",
    description: "Create a news application that fetches headlines from a news API with category filtering.",
    difficulty: "intermediate",
    timeToComplete: "5-7 hours",
    category: ["API", "UI"],
    skills: ["API Integration", "ListViews", "Navigation"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter News App Tutorial",
        url: "https://www.youtube.com/watch?v=YIZbg4Egnsc",
      },
    ],
  },
  // Project 16
  {
    id: "image-gallery",
    title: "Image Gallery",
    description: "Build an image gallery app that loads images from an API or device with zooming and favorites.",
    difficulty: "beginner",
    timeToComplete: "4-6 hours",
    category: ["UI", "Storage", "API"],
    skills: ["Image Loading", "GridView", "Photo Viewing"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Gallery App Tutorial",
        url: "https://www.youtube.com/watch?v=qPyvABT-9lQ",
      },
    ],
  },
  // Project 17
  {
    id: "meditation-app",
    title: "Meditation App",
    description: "Create a meditation app with timer, ambient sounds, and session tracking.",
    difficulty: "intermediate",
    timeToComplete: "7-9 hours",
    category: ["Audio", "UI", "Local Storage"],
    skills: ["Audio Playback", "Animations", "Session Tracking"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Meditation App UI",
        url: "https://www.youtube.com/watch?v=g5-wZzkZbEc",
      },
    ],
  },
  // Project 18
  {
    id: "currency-converter",
    title: "Currency Converter",
    description: "Build a currency converter using a real-time exchange rate API.",
    difficulty: "beginner",
    timeToComplete: "3-5 hours",
    category: ["API", "UI"],
    skills: ["API Integration", "Dropdown Menus", "Input Validation"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Currency Converter App",
        url: "https://www.youtube.com/watch?v=2JMjmHbV074",
      },
    ],
  },
  // Project 19
  {
    id: "music-player",
    title: "Music Player",
    description: "Develop a music player app that plays local audio files with playlist management.",
    difficulty: "intermediate",
    timeToComplete: "8-12 hours",
    category: ["Audio", "UI", "Local Storage"],
    skills: ["Audio Playback", "File Access", "Background Services"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Music Player Tutorial",
        url: "https://www.youtube.com/watch?v=szRsF1WcEKc",
      },
    ],
  },
  // Project 20
  {
    id: "memory-game",
    title: "Memory Game",
    description: "Create a card-matching memory game with different difficulty levels and scoring.",
    difficulty: "beginner",
    timeToComplete: "4-6 hours",
    category: ["UI", "Logic", "Games"],
    skills: ["Grid Layouts", "Animation", "Game Logic"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Memory Game Tutorial",
        url: "https://www.youtube.com/watch?v=YYbhkg-W8Mg",
      },
    ],
  },
  // Project 21
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe Game",
    description: "Build the classic Tic Tac Toe game with two player mode and AI opponent option.",
    difficulty: "beginner",
    timeToComplete: "3-5 hours",
    category: ["UI", "Logic", "Games"],
    skills: ["Game Logic", "AI Algorithm", "UI Interaction"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Tic Tac Toe Tutorial",
        url: "https://www.youtube.com/watch?v=u1BKf4_1KDQ",
      },
    ],
  },
  // Project 22
  {
    id: "plant-care",
    title: "Plant Care App",
    description: "Create an app to track houseplants with watering schedules and care reminders.",
    difficulty: "intermediate",
    timeToComplete: "6-8 hours",
    category: ["Local Storage", "UI", "Notifications"],
    skills: ["Local Notifications", "Calendar Integration", "CRUD Operations"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Plant App UI Tutorial",
        url: "https://www.youtube.com/watch?v=LN668OAUrK4",
      },
    ],
  },
  // Project 23
  {
    id: "flashcards",
    title: "Flashcards App",
    description: "Build a flashcard app for studying with custom decks and spaced repetition.",
    difficulty: "intermediate",
    timeToComplete: "6-8 hours",
    category: ["Education", "UI", "Local Storage"],
    skills: ["Animations", "Card Swipe", "Learning Algorithm"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Flashcards App Tutorial",
        url: "https://www.youtube.com/watch?v=KzsbLo9aUvQ",
      },
    ],
  },
  // Project 24
  {
    id: "recipe-book",
    title: "Personal Recipe Book",
    description: "Create a personal recipe book app with custom recipes, categories, and search functionality.",
    difficulty: "intermediate",
    timeToComplete: "7-9 hours",
    category: ["Local Storage", "UI", "Search"],
    skills: ["Database", "Form Handling", "Image Picking"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Recipe App Tutorial",
        url: "https://www.youtube.com/watch?v=FTz6TVdR4JY",
      },
    ],
  },
  // Project 25
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    description: "Build a habit tracking app with streaks, reminders, and progress visualization.",
    difficulty: "intermediate",
    timeToComplete: "7-10 hours",
    category: ["Local Storage", "UI", "Notifications"],
    skills: ["Calendar UI", "Notifications", "Charts"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Habit Tracker Tutorial",
        url: "https://www.youtube.com/watch?v=6aQD9yQQCGw",
      },
    ],
  },
  // Project 26
  {
    id: "translation-app",
    title: "Translation App",
    description: "Create a language translation app using a translation API with text and voice input.",
    difficulty: "intermediate",
    timeToComplete: "5-8 hours",
    category: ["API", "UI", "Voice"],
    skills: ["API Integration", "Speech-to-Text", "Language Selection"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Translation App Tutorial",
        url: "https://www.youtube.com/watch?v=wbw6AZvkefQ",
      },
    ],
  },
  // Project 27
  {
    id: "photo-editor",
    title: "Basic Photo Editor",
    description: "Build a simple photo editor with filters, cropping, and text overlays.",
    difficulty: "advanced",
    timeToComplete: "10-14 hours",
    category: ["UI", "Image Processing"],
    skills: ["Image Manipulation", "Gesture Controls", "Custom Painting"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Photo Editor Tutorial",
        url: "https://www.youtube.com/watch?v=qDrGZJJ3Js4",
      },
    ],
  },
  // Project 28
  {
    id: "podcast-player",
    title: "Podcast Player",
    description: "Create a podcast player app that streams episodes and manages subscriptions.",
    difficulty: "advanced",
    timeToComplete: "12-16 hours",
    category: ["Audio", "API", "UI"],
    skills: ["Audio Streaming", "Background Playback", "RSS Parsing"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Podcast Player Tutorial",
        url: "https://www.youtube.com/watch?v=f5IF9YMdZTw",
      },
    ],
  },
  // Project 29
  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    description: "Build a BMI (Body Mass Index) calculator with a sleek UI and health recommendations.",
    difficulty: "beginner",
    timeToComplete: "2-3 hours",
    category: ["UI", "Logic"],
    skills: ["Form Inputs", "Calculations", "Custom Styling"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter BMI Calculator Tutorial",
        url: "https://www.youtube.com/watch?v=oX9PQI0D-v4",
      },
    ],
  },
  // Project 30
  {
    id: "voice-notes",
    title: "Voice Notes App",
    description: "Create a voice recording app with playback, categorization, and transcription features.",
    difficulty: "intermediate",
    timeToComplete: "7-9 hours",
    category: ["Audio", "UI", "Local Storage"],
    skills: ["Audio Recording", "File Management", "Media Controls"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Voice Notes App Tutorial",
        url: "https://www.youtube.com/watch?v=6juwJXGJeQM",
      },
    ],
  },
  // Project 31
  {
    id: "countdown-app",
    title: "Event Countdown App",
    description: "Build an app that lets users create and track countdowns to important events.",
    difficulty: "beginner",
    timeToComplete: "3-5 hours",
    category: ["UI", "Local Storage", "Time"],
    skills: ["DateTime Handling", "Animations", "Local Notifications"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Countdown App Tutorial",
        url: "https://www.youtube.com/watch?v=yCESQ0WFluM",
      },
    ],
  },
  // Project 32
  {
    id: "password-manager",
    title: "Password Manager",
    description: "Create a secure password manager with encryption and password generation.",
    difficulty: "advanced",
    timeToComplete: "10-14 hours",
    category: ["Security", "UI", "Local Storage"],
    skills: ["Encryption", "Secure Storage", "Password Generation"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Password Manager Tutorial",
        url: "https://www.youtube.com/watch?v=j0C1bxvgBCE",
      },
    ],
  },
  // Project 33
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors Game",
    description: "Develop a rock-paper-scissors game with animations and score tracking.",
    difficulty: "beginner",
    timeToComplete: "2-4 hours",
    category: ["UI", "Logic", "Games"],
    skills: ["Game Logic", "Animations", "State Management"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Rock Paper Scissors Tutorial",
        url: "https://www.youtube.com/watch?v=sdyLaR39GXY",
      },
    ],
  },
  // Project 34
  {
    id: "barcode-scanner",
    title: "Barcode Scanner & Inventory",
    description: "Build a barcode scanning app that can track inventory or shopping lists.",
    difficulty: "intermediate",
    timeToComplete: "6-9 hours",
    category: ["Hardware Integration", "UI", "Local Storage"],
    skills: ["Camera Integration", "Barcode Processing", "Database"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Barcode Scanner Tutorial",
        url: "https://www.youtube.com/watch?v=OQZY-OU6UK8",
      },
    ],
  },
  // Project 35
  {
    id: "diary-app",
    title: "Digital Diary",
    description: "Create a personal diary app with mood tracking, tags, and media attachments.",
    difficulty: "intermediate",
    timeToComplete: "7-10 hours",
    category: ["Local Storage", "UI", "Media"],
    skills: ["Database", "Media Picker", "Text Formatting"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Diary App Tutorial",
        url: "https://www.youtube.com/watch?v=OjnxcSRmLTY",
      },
    ],
  },
  // Project 36
  {
    id: "workout-planner",
    title: "Workout Planner",
    description: "Build a workout planning app with custom routines and exercise demonstrations.",
    difficulty: "intermediate",
    timeToComplete: "8-12 hours",
    category: ["UI", "Local Storage", "Media"],
    skills: ["Complex Forms", "Video Integration", "Timer Functions"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Workout App Tutorial",
        url: "https://www.youtube.com/watch?v=Gvw9ySFgHxY",
      },
    ],
  },
  // Project 37
  {
    id: "quiz-maker",
    title: "Quiz Maker",
    description: "Create an app that lets users create and share their own quizzes with others.",
    difficulty: "advanced",
    timeToComplete: "10-14 hours",
    category: ["UI", "Backend", "Authentication"],
    skills: ["Backend Integration", "User Authentication", "Complex Forms"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Quiz Creator Tutorial",
        url: "https://www.youtube.com/watch?v=aHR8Psg9YGs",
      },
    ],
  },
  // Project 38
  {
    id: "grocery-list",
    title: "Grocery Shopping List",
    description: "Build a grocery list app with categories, price tracking, and shared lists.",
    difficulty: "beginner",
    timeToComplete: "4-6 hours",
    category: ["UI", "Local Storage", "Sharing"],
    skills: ["State Management", "ListViews", "Categories"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Grocery List App Tutorial",
        url: "https://www.youtube.com/watch?v=WS6Pj2pxSUo",
      },
    ],
  },
  // Project 39
  {
    id: "language-learning",
    title: "Language Learning Flashcards",
    description: "Develop a language learning app with flashcards, quizzes, and progress tracking.",
    difficulty: "intermediate",
    timeToComplete: "8-12 hours",
    category: ["Education", "UI", "Local Storage"],
    skills: ["Animations", "Audio Playback", "Progress Tracking"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Language Learning App Tutorial",
        url: "https://www.youtube.com/watch?v=L-VL51CEY2M",
      },
    ],
  },
  // Project 40
  {
    id: "food-delivery",
    title: "Food Delivery UI",
    description: "Create a food delivery app UI with restaurant listings, food categories, and a checkout process.",
    difficulty: "intermediate",
    timeToComplete: "7-10 hours",
    category: ["UI", "Navigation"],
    skills: ["Complex UI", "Custom Animations", "Multi-step Process"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Food Delivery App UI Tutorial",
        url: "https://www.youtube.com/watch?v=7dAt-JMSCVQ",
      },
    ],
  },
  // Project 41
  {
    id: "social-media",
    title: "Social Media App",
    description: "Build a simple social media app with profiles, posts, and interactions.",
    difficulty: "advanced",
    timeToComplete: "14-20 hours",
    category: ["UI", "Backend", "Authentication"],
    skills: ["Firebase", "User Authentication", "Image Uploads"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Social Media App Tutorial",
        url: "https://www.youtube.com/watch?v=h-igXZCCrrc",
      },
    ],
  },
  // Project 42
  {
    id: "file-manager",
    title: "File Manager",
    description: "Create a file manager app with browsing, searching, and basic file operations.",
    difficulty: "advanced",
    timeToComplete: "10-14 hours",
    category: ["File System", "UI"],
    skills: ["File System Access", "Custom Icons", "Search Functionality"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter File Manager Tutorial",
        url: "https://www.youtube.com/watch?v=YgRapDkFqFM",
      },
    ],
  },
  // Project 43
  {
    id: "calendar",
    title: "Calendar & Event Planner",
    description: "Build a calendar app with event management, reminders, and different calendar views.",
    difficulty: "intermediate",
    timeToComplete: "8-12 hours",
    category: ["UI", "Local Storage", "Time"],
    skills: ["Calendar Widget", "Event Management", "Date/Time Handling"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Calendar App Tutorial",
        url: "https://www.youtube.com/watch?v=PkIPPZjW9Kc",
      },
    ],
  },
  // Project 44
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    description: "Create a simplified Twitter clone with tweets, profiles, and a timeline.",
    difficulty: "advanced",
    timeToComplete: "14-20 hours",
    category: ["UI", "Backend", "Social"],
    skills: ["Firebase/Backend", "Social Features", "Real-time Updates"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Twitter Clone Tutorial",
        url: "https://www.youtube.com/watch?v=VgkBFmlC_gM",
      },
    ],
  },
  // Project 45
  {
    id: "blog-app",
    title: "Blog Reader App",
    description: "Develop a blog reading app that fetches articles from an API with offline reading.",
    difficulty: "intermediate",
    timeToComplete: "6-9 hours",
    category: ["API", "UI", "Local Storage"],
    skills: ["API Integration", "Offline Caching", "Rich Text"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Blog App Tutorial",
        url: "https://www.youtube.com/watch?v=kqnYz0-eYJ8",
      },
    ],
  },
  // Project 46
  {
    id: "video-player",
    title: "Video Player App",
    description: "Build a custom video player with playlists and playback controls.",
    difficulty: "advanced",
    timeToComplete: "9-13 hours",
    category: ["Media", "UI"],
    skills: ["Video Playback", "Custom Controls", "Playlists"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Video Player Tutorial",
        url: "https://www.youtube.com/watch?v=ilX5hnH8XoI",
      },
    ],
  },
  // Project 47
  {
    id: "covid-tracker",
    title: "COVID-19 Tracker",
    description: "Create a COVID-19 statistics tracker app with country data and visualizations.",
    difficulty: "intermediate",
    timeToComplete: "5-8 hours",
    category: ["API", "UI", "Charts"],
    skills: ["API Integration", "Data Visualization", "Maps"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter COVID-19 Tracker Tutorial",
        url: "https://www.youtube.com/watch?v=krfkCaUQWiY",
      },
    ],
  },
  // Project 48
  {
    id: "smart-home",
    title: "Smart Home Control App",
    description: "Build a UI for controlling smart home devices with animations and device status.",
    difficulty: "intermediate",
    timeToComplete: "7-10 hours",
    category: ["UI", "IoT"],
    skills: ["Custom UI Components", "Animations", "Status Indicators"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Smart Home App UI Tutorial",
        url: "https://www.youtube.com/watch?v=8lW7T_JR0s4",
      },
    ],
  },
  // Project 49
  {
    id: "pdf-reader",
    title: "PDF Reader",
    description: "Create a PDF reader app with bookmarks, search, and annotation features.",
    difficulty: "advanced",
    timeToComplete: "10-15 hours",
    category: ["Document Processing", "UI"],
    skills: ["PDF Rendering", "Annotations", "File Handling"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter PDF Reader Tutorial",
        url: "https://www.youtube.com/watch?v=9TwrwYeVSnQ",
      },
    ],
  },
  // Project 50
  {
    id: "flutter-games",
    title: "Flutter Games Collection",
    description: "Build a collection of simple games (Snake, Tetris, Flappy Bird) in one app.",
    difficulty: "advanced",
    timeToComplete: "15-25 hours",
    category: ["Games", "UI", "Animation"],
    skills: ["Game Physics", "Custom Painting", "Animation"],
    image: "/placeholder.svg?height=300&width=600",
    youtubeLinks: [
      {
        title: "Flutter Simple Games Tutorial",
        url: "https://www.youtube.com/watch?v=o_eVIBwvRzw",
      },
    ],
  },
]

// Project card component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="brutalist-card h-full overflow-hidden">
      <div className="relative">
        <Image
          src={project.image}
          alt={project.title}
          width={350}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-xs">
          {project.difficulty}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map(tag => (
            <span key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{project.timeToComplete}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {project.category.join(", ")}
          </div>
        </div>
        
        <Button asChild className="w-full">
          <Link href={`/projects/setup/${project.id}`}>
            Start Project
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData)

  // Get unique categories from projects
  const allCategories = Array.from(new Set(projectsData.flatMap((project) => project.category)))

  // Filter projects based on search term, difficulty, and categories
  useEffect(() => {
    const filtered = projectsData.filter((project) => {
      // Filter by search term
      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())

      // Filter by difficulty
      const matchesDifficulty = selectedDifficulty.length === 0 || selectedDifficulty.includes(project.difficulty)

      // Filter by categories
      const matchesCategory =
        selectedCategories.length === 0 || project.category.some((category) => selectedCategories.includes(category))

      return matchesSearch && matchesDifficulty && matchesCategory
    })

    setFilteredProjects(filtered)
  }, [searchTerm, selectedDifficulty, selectedCategories])

  // Toggle difficulty selection
  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulty((prev) =>
      prev.includes(difficulty) ? prev.filter((d) => d !== difficulty) : [...prev, difficulty],
    )
  }

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Get difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Flutter Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              Learn by building: 50 hands-on projects from beginner to advanced
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg flex items-center">
              <Search className="h-5 w-5 ml-2 mr-1 text-white/70" />
              <input 
                placeholder="Search projects..." 
                className="bg-transparent border-none text-white placeholder:text-white/50 flex-1 focus:outline-none py-2 px-3"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <Button size="sm" className="ml-2 bg-white text-primary hover:bg-white/90">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Overview */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar for filtering */}
            <div className="w-full md:w-1/4">
              <div className="brutalist-card p-6 sticky top-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" /> Filters
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">Difficulty</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-2" 
                          checked={selectedDifficulty.includes("beginner")}
                          onChange={() => toggleDifficulty("beginner")}
                        />
                        <span>Beginner</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-2" 
                          checked={selectedDifficulty.includes("intermediate")}
                          onChange={() => toggleDifficulty("intermediate")}
                        />
                        <span>Intermediate</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-2" 
                          checked={selectedDifficulty.includes("advanced")}
                          onChange={() => toggleDifficulty("advanced")}
                        />
                        <span>Advanced</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-2">Category</h3>
                    <div className="space-y-2">
                      {allCategories.map(category => (
                        <label key={category} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="mr-2"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)} 
                          />
                          <span>{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-2">Time Commitment</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Quick (&lt; 2 hours)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Medium (2-4 hours)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Long (4+ hours)</span>
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => {
                      setSelectedDifficulty([])
                      setSelectedCategories([])
                      setSearchTerm("")
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main content - projects grid */}
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">All Projects ({filteredProjects.length})</h2>
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-muted-foreground">Sort by:</span>
                  <select className="border rounded-md px-2 py-1 text-sm">
                    <option>Recommended</option>
                    <option>Newest</option>
                    <option>Difficulty (Easy to Hard)</option>
                    <option>Difficulty (Hard to Easy)</option>
                    <option>Time (Short to Long)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <ScrollAnimation key={project.id} animation="fade-in-up">
                    <ProjectCard project={project} />
                  </ScrollAnimation>
                ))}
              </div>
              
              {filteredProjects.length > 0 ? (
                <div className="text-center mt-12">
                  <p className="text-muted-foreground mb-6">Showing {filteredProjects.length} of {projectsData.length} projects</p>
                  {filteredProjects.length < projectsData.length && (
                    <Button size="lg" variant="outline">
                      Load More Projects
                    </Button>
                  )}
                </div>
              ) : (
                <div className="text-center mt-12 py-12">
                  <p className="text-xl font-medium mb-4">No projects match your filters</p>
                  <p className="text-muted-foreground mb-6">Try adjusting your search criteria or reset the filters</p>
                  <Button 
                    onClick={() => {
                      setSelectedDifficulty([])
                      setSelectedCategories([])
                      setSearchTerm("")
                    }}
                  >
                    Reset All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Project Example */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Project: Todo List App</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a sneak peek of the kind of projects you'll build and what you'll learn
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="brutalist-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Todo List App Preview"
                    width={300}
                    height={400}
                    className="mx-auto rounded-lg shadow-lg"
                  />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Beginner Friendly</div>
                    <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">2-3 Hours</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3 mt-0.5">
                        <Layers className="h-4 w-4 text-blue-500" />
                      </div>
                      <span>Creating and managing lists in Flutter</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mr-3 mt-0.5">
                        <Code className="h-4 w-4 text-green-500" />
                      </div>
                      <span>Working with StatefulWidget for dynamic UI updates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-1 mr-3 mt-0.5">
                        <Smartphone className="h-4 w-4 text-purple-500" />
                      </div>
                      <span>Building a complete app with add, check, and delete functionality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-1 mr-3 mt-0.5">
                        <Tag className="h-4 w-4 text-orange-500" />
                      </div>
                      <span>Using Flutter widgets: ListView, Checkbox, TextField</span>
                    </li>
                  </ul>
                  
                  <Button asChild className="mt-6">
                    <Link href="/projects/todo">
                      Start Building This Project
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Sample Code Snippet</h3>
                <SimpleCodeBlock
                  title="Creating a Todo Item Widget"
                  explanation="This is a simplified version of the Todo item widget that shows a checkbox and the task text."
                  code={`// A simple widget for individual todo items
class TodoItem extends StatelessWidget {
  final String task;
  final bool isCompleted;
  final Function(bool?) onChanged;

  const TodoItem({
    required this.task,
    required this.isCompleted,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Checkbox(
        value: isCompleted,
        onChanged: onChanged,
      ),
      title: Text(
        task,
        style: TextStyle(
          decoration: isCompleted ? TextDecoration.lineThrough : null,
          color: isCompleted ? Colors.grey : null,
        ),
      ),
    );
  }
}`}
                  highlightLines={[2, 14, 15, 19]}
                  lineExplanations={{
                    2: "Create a StatelessWidget for each todo item in the list",
                    14: "ListTile is a convenient widget for items in a list with leading/trailing widgets",
                    15: "Checkbox widget that shows whether the task is completed",
                    19: "Change the text style based on whether the task is completed or not"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Beginner Learning Path */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Beginner Learning Path</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow this suggested order of projects to build your skills progressively
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="brutalist-card p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold">Basic UI Projects</h3>
                    <p className="text-muted-foreground">Start with simple UI-focused projects to learn Flutter widgets and layouts</p>
                  </div>
                </div>
                
                <div className="ml-14 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/projects/calculator">
                      <span className="mr-2 text-primary font-bold">1.</span> Basic Calculator
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/projects/bmi">
                      <span className="mr-2 text-primary font-bold">2.</span> BMI Calculator
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/projects/timer">
                      <span className="mr-2 text-primary font-bold">3.</span> Timer/Stopwatch
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="brutalist-card p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold">State Management Projects</h3>
                    <p className="text-muted-foreground">Learn to manage application state with these functional apps</p>
                  </div>
                </div>
                
                <div className="ml-14 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/projects/todo">
                      <span className="mr-2 text-primary font-bold">1.</span> Todo List App
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/projects/quiz">
                      <span className="mr-2 text-primary font-bold">2.</span> Quiz App
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/projects/notes">
                      <span className="mr-2 text-primary font-bold">3.</span> Note Taking App
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="brutalist-card p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold">API Integration Projects</h3>
                    <p className="text-muted-foreground">Connect your apps to the internet and external services</p>
                  </div>
                </div>
                
                <div className="ml-14 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/projects/weather">
                      <span className="mr-2 text-primary font-bold">1.</span> Weather App
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/projects/currency">
                      <span className="mr-2 text-primary font-bold">2.</span> Currency Converter
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/projects/recipe">
                      <span className="mr-2 text-primary font-bold">3.</span> Recipe App
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/roadmap">
                  View Full Learning Roadmap
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Projects Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Community Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out projects shared by other learners in our community
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="brutalist-card p-6 hover:translate-y-[-5px] transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden mr-2">
                      <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium">Alex Chen</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </div>
                
                <h3 className="font-bold mb-2">Custom Navigation Bar</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A beautiful custom navigation bar with animations and transitions.
                </p>
                
                <Image 
                  src="/placeholder.svg?height=150&width=300"
                  alt="Project preview"
                  width={300}
                  height={150}
                  className="w-full rounded-lg mb-4 h-24 object-cover"
                />
                
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/community">
                    View Project
                  </Link>
                </Button>
              </div>
              
              <div className="brutalist-card p-6 hover:translate-y-[-5px] transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 overflow-hidden mr-2">
                      <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium">Sarah Miller</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </div>
                
                <h3 className="font-bold mb-2">Animated Login Form</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A beautiful login form with subtle animations and validation.
                </p>
                
                <Image 
                  src="/placeholder.svg?height=150&width=300"
                  alt="Project preview"
                  width={300}
                  height={150}
                  className="w-full rounded-lg mb-4 h-24 object-cover"
                />
                
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/community">
                    View Project
                  </Link>
                </Button>
              </div>
              
              <div className="brutalist-card p-6 hover:translate-y-[-5px] transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 overflow-hidden mr-2">
                      <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium">James Wilson</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm ml-1">4.7</span>
                  </div>
                </div>
                
                <h3 className="font-bold mb-2">Budget Tracker</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A simple expense tracker with charts and categories.
                </p>
                
                <Image 
                  src="/placeholder.svg?height=150&width=300"
                  alt="Project preview"
                  width={300}
                  height={150}
                  className="w-full rounded-lg mb-4 h-24 object-cover"
                />
                
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/community">
                    View Project
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/community">
                  Explore Community Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
