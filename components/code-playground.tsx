"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { 
  PlayCircle, 
  RotateCcw, 
  Lightbulb, 
  HelpCircle, 
  Check, 
  X 
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface CodeExample {
  id: string
  title: string
  description: string
  code: string
  solution?: string
  hints: string[]
}

interface CodePlaygroundProps {
  title: string
  description: string
  examples: CodeExample[]
  initialExampleId?: string
}

export function CodePlayground({
  title,
  description,
  examples,
  initialExampleId = examples[0]?.id
}: CodePlaygroundProps) {
  const [activeExampleId, setActiveExampleId] = useState(initialExampleId)
  const [userCode, setUserCode] = useState("")
  const [showSolution, setShowSolution] = useState(false)
  const [currentHintIndex, setCurrentHintIndex] = useState(-1)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  
  const activeExample = examples.find(ex => ex.id === activeExampleId) || examples[0]
  
  useEffect(() => {
    // Reset state when changing examples
    setUserCode(activeExample.code)
    setShowSolution(false)
    setCurrentHintIndex(-1)
    setResult(null)
  }, [activeExample, activeExampleId])
  
  const handleRunCode = () => {
    // In a real app, this would validate code or show expected output
    // Here we just simulate a check
    if (showSolution) {
      setResult({ success: true, message: "Success! Your code matches the solution." })
    } else if (userCode.length < 10) {
      setResult({ success: false, message: "Your code is too short to run. Try adding more." })
    } else {
      setResult({ 
        success: true, 
        message: "Great job! Your code ran successfully. This is just a simulation - in a real app, we'd actually run your code and show the output."
      })
    }
  }
  
  const handleReset = () => {
    setUserCode(activeExample.code)
    setResult(null)
    setCurrentHintIndex(-1)
  }
  
  const showNextHint = () => {
    if (currentHintIndex < activeExample.hints.length - 1) {
      setCurrentHintIndex(currentHintIndex + 1)
    }
  }
  
  return (
    <div className="brutalist-card p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-bold mb-2">Examples</h4>
            <div className="space-y-2">
              {examples.map((example) => (
                <Button
                  key={example.id}
                  variant={activeExampleId === example.id ? "default" : "outline"}
                  className="w-full justify-start text-left"
                  onClick={() => setActiveExampleId(example.id)}
                >
                  {example.title}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-bold mb-2">Challenge</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {activeExample.description}
            </p>
            
            <div className="space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                      onClick={showNextHint}
                      disabled={currentHintIndex >= activeExample.hints.length - 1}
                    >
                      <Lightbulb className="h-4 w-4" />
                      <span>Need a hint?</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Get a hint to help solve this challenge</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              {activeExample.solution && (
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => setShowSolution(!showSolution)}
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>{showSolution ? "Hide Solution" : "Show Solution"}</span>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 space-y-4">
          <Tabs defaultValue="code" className="w-full">
            <TabsList className="mb-2">
              <TabsTrigger value="code">Code Editor</TabsTrigger>
              {currentHintIndex >= 0 && (
                <TabsTrigger value="hint">Hint ({currentHintIndex + 1}/{activeExample.hints.length})</TabsTrigger>
              )}
              {showSolution && <TabsTrigger value="solution">Solution</TabsTrigger>}
            </TabsList>
            
            <TabsContent value="code">
              <div className="relative">
                <Textarea
                  className="font-mono text-sm min-h-[300px] p-4 resize-none"
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                />
                
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={handleReset}
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Reset</span>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={handleRunCode}
                  >
                    <PlayCircle className="h-3 w-3" />
                    <span>Run Code</span>
                  </Button>
                </div>
              </div>
              
              {result && (
                <div className={`mt-4 p-4 rounded-lg ${result.success ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'}`}>
                  <div className="flex items-start gap-2">
                    {result.success ? (
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                    )}
                    <p className={result.success ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}>
                      {result.message}
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
            
            {currentHintIndex >= 0 && (
              <TabsContent value="hint">
                <div className="bg-amber-100 dark:bg-amber-900/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                    <div>
                      <p className="text-amber-800 dark:text-amber-200 font-medium mb-1">Hint {currentHintIndex + 1}:</p>
                      <p className="text-amber-800 dark:text-amber-200">{activeExample.hints[currentHintIndex]}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            )}
            
            {showSolution && (
              <TabsContent value="solution">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg">
                  <pre className="font-mono text-sm whitespace-pre-wrap text-blue-800 dark:text-blue-200">
                    {activeExample.solution}
                  </pre>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  )
} 