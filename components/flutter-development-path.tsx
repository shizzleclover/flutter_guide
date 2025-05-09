"use client"

import type React from "react"
import { motion } from "framer-motion"

interface PathNodeProps {
  title: string
  delay?: number
  className?: string
  children?: React.ReactNode
  tooltip?: string
}

const PathNode: React.FC<PathNodeProps> = ({ title, delay = 0, className = "", children, tooltip }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        className="relative z-10"
      >
        <div className="group relative">
          <div className="bg-primary text-primary-foreground font-medium rounded-lg px-4 py-2 text-center min-w-[140px] shadow-lg cursor-help">
            {title}
            <div className="h-1 w-full bg-white/20 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-white/60 rounded-full w-full"></div>
            </div>
          </div>

          {tooltip && (
            <div className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-black/90 text-white text-sm rounded-lg shadow-xl pointer-events-none">
              <div className="relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 rotate-45"></div>
                <p className="text-white/90">{tooltip}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      {children}
    </div>
  )
}

interface PathLineProps {
  direction?: "down" | "right" | "left" | "diagonal-right" | "diagonal-left" | "custom"
  className?: string
  delay?: number
  height?: number
  width?: number
  customPath?: string
  viewBoxWidth?: number
  viewBoxHeight?: number
}

const PathLine: React.FC<PathLineProps> = ({
  direction = "down",
  className = "",
  delay = 0,
  height = 40,
  width = 40,
  customPath,
  viewBoxWidth,
  viewBoxHeight,
}) => {
  let pathData = ""
  const vbWidth =
    viewBoxWidth ||
    (direction === "right" ||
    direction === "left" ||
    direction === "diagonal-right" ||
    direction === "diagonal-left" ||
    direction === "custom"
      ? width
      : 20)
  const vbHeight =
    viewBoxHeight ||
    (direction === "down" || direction === "diagonal-right" || direction === "diagonal-left" || direction === "custom"
      ? height
      : 20)

  switch (direction) {
    case "down":
      pathData = `M10,0 L10,${height}`
      break
    case "right":
      pathData = `M0,10 L${width},10`
      break
    case "left":
      pathData = `M${width},10 L0,10`
      break
    case "diagonal-right":
      pathData = `M0,0 L${width},${height}`
      break
    case "diagonal-left":
      pathData = `M${width},0 L0,${height}`
      break
    case "custom":
      pathData = customPath || ""
      break
    default:
      pathData = `M10,0 L10,${height}`
  }

  return (
    <div className={`absolute ${className}`}>
      <motion.svg
        width={vbWidth}
        height={vbHeight}
        viewBox={`0 0 ${vbWidth} ${vbHeight}`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: delay * 0.1 }}
      >
        <motion.path
          d={pathData}
          fill="none"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: delay * 0.1 }}
        />
      </motion.svg>
    </div>
  )
}

export function FlutterDevelopmentPath() {
  return (
    <div className="relative w-full py-20 overflow-x-auto bg-gray-900">
      <div className="min-w-[1000px] min-h-[900px] mx-auto relative">
        {/* Level 1 - Dart Basics */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <PathNode
            title="Dart Basics"
            delay={0}
            tooltip="Learn the fundamentals of Dart programming language including variables, data types, functions, classes, async programming, and null safety. This is the foundation for Flutter development."
          />
        </div>

        {/* Connecting line from Level 1 to Level 2 */}
        <PathLine
          direction="custom"
          customPath="M0,0 C0,30 0,50 -100,80 M0,0 C0,30 0,50 100,80"
          width={200}
          height={80}
          viewBoxWidth={200}
          viewBoxHeight={80}
          className="absolute top-[40px] left-1/2 -translate-x-1/2"
          delay={1}
        />

        {/* Level 2 - Flutter Fundamentals & UI Basics */}
        <div className="absolute left-[calc(50%-100px)] top-[120px] -translate-x-1/2">
          <PathNode
            title="Flutter Fundamentals"
            delay={2}
            tooltip="Understand Flutter's architecture, widget tree, build context, and lifecycle methods. Learn how to set up a Flutter project and the basic structure of a Flutter app."
          />
        </div>

        <div className="absolute left-[calc(50%+100px)] top-[120px] -translate-x-1/2">
          <PathNode
            title="UI Basics"
            delay={2}
            tooltip="Master Flutter's core widgets like Text, Container, Row, Column, Stack, and more. Learn about theming, styling, and responsive design principles in Flutter."
          />
        </div>

        {/* Connecting lines from Level 2 to Level 3 */}
        <PathLine
          direction="custom"
          customPath="M0,0 C0,30 -50,50 -150,80"
          width={150}
          height={80}
          viewBoxWidth={150}
          viewBoxHeight={80}
          className="absolute top-[160px] left-[calc(50%-100px)] -translate-x-1/2"
          delay={3}
        />

        <PathLine
          direction="custom"
          customPath="M0,0 C0,30 0,50 0,80"
          width={1}
          height={80}
          viewBoxWidth={1}
          viewBoxHeight={80}
          className="absolute top-[160px] left-[calc(50%-100px)] -translate-x-1/2"
          delay={3}
        />

        <PathLine
          direction="custom"
          customPath="M0,0 C0,30 50,50 150,80"
          width={150}
          height={80}
          viewBoxWidth={150}
          viewBoxHeight={80}
          className="absolute top-[160px] left-[calc(50%-100px)] -translate-x-1/2"
          delay={3}
        />

        <PathLine
          direction="custom"
          customPath="M0,0 C0,30 -50,50 -150,80"
          width={150}
          height={80}
          viewBoxWidth={150}
          viewBoxHeight={80}
          className="absolute top-[160px] left-[calc(50%+100px)] -translate-x-1/2"
          delay={3}
        />

        <PathLine
          direction="custom"
          customPath="M0,0 C0,30 0,50 0,80"
          width={1}
          height={80}
          viewBoxWidth={1}
          viewBoxHeight={80}
          className="absolute top-[160px] left-[calc(50%+100px)] -translate-x-1/2"
          delay={3}
        />

        <PathLine
          direction="custom"
          customPath="M0,0 C0,30 50,50 150,80"
          width={150}
          height={80}
          viewBoxWidth={150}
          viewBoxHeight={80}
          className="absolute top-[160px] left-[calc(50%+100px)] -translate-x-1/2"
          delay={3}
        />

        {/* Level 3 - State Management, Navigation, Layouts & Widgets */}
        <div className="absolute left-[calc(50%-200px)] top-[240px] -translate-x-1/2">
          <PathNode
            title="State Management"
            delay={4}
            tooltip="Learn different state management approaches in Flutter: setState, Provider, Riverpod, Bloc, GetX, and more. Understand when to use each approach based on app complexity."
          />
        </div>

        <div className="absolute left-[calc(50%)] top-[240px] -translate-x-1/2">
          <PathNode
            title="Navigation"
            delay={4}
            tooltip="Master Flutter's navigation system including Navigator 1.0 and 2.0, named routes, route arguments, and deep linking. Learn to implement bottom navigation bars and drawer navigation."
          />
        </div>

        <div className="absolute left-[calc(50%+200px)] top-[240px] -translate-x-1/2">
          <PathNode
            title="Layouts & Widgets"
            delay={4}
            tooltip="Dive deeper into complex layouts, custom widgets, animations, and gesture handling. Learn to create reusable widget components and implement responsive designs."
          />
        </div>

        {/* Connecting lines from Level 3 to Level 4 */}
        <PathLine
          direction="custom"
          customPath="M0,0 C0,40 100,60 200,100 C300,140 300,140 400,100"
          width={400}
          height={140}
          viewBoxWidth={400}
          viewBoxHeight={140}
          className="absolute top-[280px] left-[calc(50%-200px)] -translate-x-1/2"
          delay={5}
        />

        <PathLine
          direction="custom"
          customPath="M0,0 C0,40 0,80 0,100"
          width={1}
          height={100}
          viewBoxWidth={1}
          viewBoxHeight={100}
          className="absolute top-[280px] left-[calc(50%)] -translate-x-1/2"
          delay={5}
        />

        <PathLine
          direction="custom"
          customPath="M0,0 C0,40 -100,60 -200,100 C-300,140 -300,140 -400,100"
          width={400}
          height={140}
          viewBoxWidth={400}
          viewBoxHeight={140}
          className="absolute top-[280px] left-[calc(50%+200px)] -translate-x-1/2"
          delay={5}
        />

        {/* Level 4 - Data & Backend */}
        <div className="absolute left-1/2 top-[380px] -translate-x-1/2">
          <PathNode
            title="Data & Backend"
            delay={6}
            tooltip="Learn how to connect Flutter apps to backend services, handle data models, and implement CRUD operations. Understand JSON serialization/deserialization and working with APIs."
          />
        </div>

        {/* Connecting lines from Level 4 to Level 5 */}
        <PathLine
          direction="custom"
          customPath="M0,0 C0,30 0,50 -200,80 M0,0 C0,30 0,50 0,80 M0,0 C0,30 0,50 200,80"
          width={400}
          height={80}
          viewBoxWidth={400}
          viewBoxHeight={80}
          className="absolute top-[420px] left-1/2 -translate-x-1/2"
          delay={7}
        />

        {/* Level 5 - APIs & Networking, Local Storage, Firebase */}
        <div className="absolute left-[calc(50%-200px)] top-[500px] -translate-x-1/2">
          <PathNode
            title="APIs & Networking"
            delay={8}
            tooltip="Master RESTful API integration, GraphQL, WebSockets, and handling network states. Learn best practices for error handling, caching, and optimizing network requests."
          />
        </div>

        <div className="absolute left-[calc(50%)] top-[500px] -translate-x-1/2">
          <PathNode
            title="Local Storage"
            delay={8}
            tooltip="Implement local data persistence using SharedPreferences, SQLite, Hive, and other local storage solutions. Learn data encryption and secure storage techniques."
          />
        </div>

        <div className="absolute left-[calc(50%+200px)] top-[500px] -translate-x-1/2">
          <PathNode
            title="Firebase"
            delay={8}
            tooltip="Integrate Firebase services including Authentication, Firestore, Realtime Database, Storage, Cloud Functions, and Analytics. Build serverless Flutter applications."
          />
        </div>

        {/* Connecting lines from Level 5 to Level 6 */}
        <PathLine
          direction="custom"
          customPath="M0,0 C0,40 100,60 200,100"
          width={200}
          height={100}
          viewBoxWidth={200}
          viewBoxHeight={100}
          className="absolute top-[540px] left-[calc(50%-200px)] -translate-x-1/2"
          delay={9}
        />

        <PathLine
          direction="custom"
          customPath="M0,0 C0,40 -100,60 -200,100"
          width={200}
          height={100}
          viewBoxWidth={200}
          viewBoxHeight={100}
          className="absolute top-[540px] left-[calc(50%+200px)] -translate-x-1/2"
          delay={9}
        />

        {/* Level 6 - Advanced UI, Testing */}
        <div className="absolute left-[calc(50%-100px)] top-[640px] -translate-x-1/2">
          <PathNode
            title="Advanced UI"
            delay={10}
            tooltip="Create complex, custom UI components, implement advanced animations, custom painters, and shaders. Learn to optimize rendering performance and create platform-specific adaptations."
          />
        </div>

        <div className="absolute left-[calc(50%+100px)] top-[640px] -translate-x-1/2">
          <PathNode
            title="Testing"
            delay={10}
            tooltip="Implement unit tests, widget tests, and integration tests for Flutter apps. Learn test-driven development (TDD) practices and how to use Flutter's testing framework effectively."
          />
        </div>

        {/* Connecting lines from Level 6 to Level 7 */}
        <PathLine
          direction="custom"
          customPath="M0,0 C0,40 50,60 100,80"
          width={100}
          height={80}
          viewBoxWidth={100}
          viewBoxHeight={80}
          className="absolute top-[680px] left-[calc(50%-100px)] -translate-x-1/2"
          delay={11}
        />

        <PathLine
          direction="custom"
          customPath="M0,0 C0,40 -50,60 -100,80"
          width={100}
          height={80}
          viewBoxWidth={100}
          viewBoxHeight={80}
          className="absolute top-[680px] left-[calc(50%+100px)] -translate-x-1/2"
          delay={11}
        />

        {/* Level 7 - Production & Deployment */}
        <div className="absolute left-1/2 top-[760px] -translate-x-1/2">
          <PathNode
            title="Production & Deployment"
            delay={12}
            tooltip="Learn app signing, release preparation, app store submission processes, CI/CD pipelines, and app performance optimization. Understand app monitoring, analytics, and crash reporting."
          />
        </div>

        {/* Additional branches */}
        <PathLine
          direction="custom"
          customPath="M0,0 C0,40 -100,80 -150,160 C-200,240 -150,280 -100,320"
          width={200}
          height={320}
          viewBoxWidth={200}
          viewBoxHeight={320}
          className="absolute top-[540px] left-[calc(50%-200px)] -translate-x-1/2"
          delay={9}
        />

        <div className="absolute left-[calc(50%-300px)] top-[860px] -translate-x-1/2">
          <PathNode
            title="Platform Channels"
            delay={13}
            tooltip="Learn to integrate native code with Flutter using platform channels. Build plugins that access platform-specific APIs and integrate with existing native libraries."
          />
        </div>

        <PathLine
          direction="custom"
          customPath="M0,0 C0,40 100,80 150,160 C200,240 150,280 100,320"
          width={200}
          height={320}
          viewBoxWidth={200}
          viewBoxHeight={320}
          className="absolute top-[540px] left-[calc(50%+200px)] -translate-x-1/2"
          delay={9}
        />

        <div className="absolute left-[calc(50%+300px)] top-[860px] -translate-x-1/2">
          <PathNode
            title="Advanced State"
            delay={13}
            tooltip="Master advanced state management techniques like Redux, MobX, and reactive programming with RxDart. Learn to handle complex application states and side effects."
          />
        </div>
      </div>
    </div>
  )
}
