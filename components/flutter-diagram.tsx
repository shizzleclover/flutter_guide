"use client"
import { Card } from "@/components/ui/card"

export function FlutterDevelopmentDiagram() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[800px]">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-8">Flutter Development Flow</h3>

          {/* Diagram container */}
          <div className="relative w-full">
            {/* Diagram connections */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Main flow arrows */}
              <path
                d="M200,100 L400,100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M600,100 L800,100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M1000,100 L1200,100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Vertical connections */}
              <path
                d="M100,150 L100,250"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M500,150 L500,250"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M900,150 L900,250"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M1300,150 L1300,250"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Bottom connections */}
              <path d="M100,350 L1300,350" stroke="currentColor" strokeWidth="2" fill="none" />
              <path
                d="M100,350 L100,450"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M500,350 L500,450"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M900,350 L900,450"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M1300,350 L1300,450"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            {/* Diagram nodes */}
            <div className="relative flex justify-between mb-20">
              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-primary/10 border-primary">
                  <h4 className="font-bold">Setup & Installation</h4>
                  <p className="text-xs mt-2">Flutter SDK, Dart, IDE</p>
                </Card>
              </div>

              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-secondary/10 border-secondary">
                  <h4 className="font-bold">Learn Dart Basics</h4>
                  <p className="text-xs mt-2">Syntax, OOP, Async</p>
                </Card>
              </div>

              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-accent/10 border-accent">
                  <h4 className="font-bold">Flutter Widgets</h4>
                  <p className="text-xs mt-2">UI Components, Layout</p>
                </Card>
              </div>

              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-primary/10 border-primary">
                  <h4 className="font-bold">State Management</h4>
                  <p className="text-xs mt-2">Provider, Bloc, Riverpod</p>
                </Card>
              </div>
            </div>

            <div className="relative flex justify-between mb-20">
              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-secondary/10 border-secondary">
                  <h4 className="font-bold">Navigation</h4>
                  <p className="text-xs mt-2">Routes, Navigator 2.0</p>
                </Card>
              </div>

              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-accent/10 border-accent">
                  <h4 className="font-bold">Data Persistence</h4>
                  <p className="text-xs mt-2">SharedPrefs, SQLite</p>
                </Card>
              </div>

              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-primary/10 border-primary">
                  <h4 className="font-bold">API Integration</h4>
                  <p className="text-xs mt-2">HTTP, REST, GraphQL</p>
                </Card>
              </div>

              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-secondary/10 border-secondary">
                  <h4 className="font-bold">Firebase</h4>
                  <p className="text-xs mt-2">Auth, Firestore, FCM</p>
                </Card>
              </div>
            </div>

            <div className="relative flex justify-between">
              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-accent/10 border-accent">
                  <h4 className="font-bold">Testing</h4>
                  <p className="text-xs mt-2">Unit, Widget, Integration</p>
                </Card>
              </div>

              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-primary/10 border-primary">
                  <h4 className="font-bold">CI/CD</h4>
                  <p className="text-xs mt-2">Codemagic, GitHub Actions</p>
                </Card>
              </div>

              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-secondary/10 border-secondary">
                  <h4 className="font-bold">App Publishing</h4>
                  <p className="text-xs mt-2">Play Store, App Store</p>
                </Card>
              </div>

              <div className="w-[180px] z-10">
                <Card className="p-4 text-center h-full flex flex-col justify-center items-center bg-accent/10 border-accent">
                  <h4 className="font-bold">Advanced Topics</h4>
                  <p className="text-xs mt-2">Animations, Custom Widgets</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
