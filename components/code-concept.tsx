"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { 
  Info, 
  LayoutTemplate, 
  Code, 
  Play, 
  Eye, 
  EyeOff
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeConceptProps {
  title: string
  description: string
  code: string
  visualImage: string
  outputImage: string
  codeExplanations?: {[key: number]: string}
}

export function CodeConcept({
  title,
  description,
  code,
  visualImage,
  outputImage,
  codeExplanations = {}
}: CodeConceptProps) {
  const [showVisualGuides, setShowVisualGuides] = useState(true)
  
  return (
    <div className="brutalist-card p-6 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2"
          onClick={() => setShowVisualGuides(!showVisualGuides)}
        >
          {showVisualGuides ? (
            <>
              <EyeOff className="h-4 w-4" />
              <span>Hide Visual Guides</span>
            </>
          ) : (
            <>
              <Eye className="h-4 w-4" />
              <span>Show Visual Guides</span>
            </>
          )}
        </Button>
      </div>
      
      <Tabs defaultValue="code" className="w-full">
        <TabsList className="w-full grid grid-cols-3 mb-6">
          <TabsTrigger value="code" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>Code</span>
          </TabsTrigger>
          <TabsTrigger value="visual" className="flex items-center gap-2">
            <LayoutTemplate className="h-4 w-4" />
            <span>Visual Structure</span>
          </TabsTrigger>
          <TabsTrigger value="output" className="flex items-center gap-2">
            <Play className="h-4 w-4" />
            <span>Output</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="code">
          <CodeBlock 
            code={code} 
            title={`${title} - Code`}
            explanations={codeExplanations}
          />
        </TabsContent>
        
        <TabsContent value="visual">
          <div className="relative">
            <Image 
              src={visualImage} 
              alt={`Visual structure of ${title}`} 
              width={800} 
              height={500} 
              className="w-full h-auto rounded-lg border-2 border-muted"
            />
            {showVisualGuides && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg text-center max-w-md">
                  <Info className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-medium text-sm">
                    This visual representation shows how Flutter widgets are arranged in this example.
                    Each colored box represents a different widget in the code.
                  </p>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="output">
          <div className="flex flex-col items-center">
            <div className="relative border-8 border-gray-800 rounded-3xl overflow-hidden mb-4 max-w-xs mx-auto">
              <div className="absolute top-0 w-24 h-6 bg-gray-800 left-1/2 transform -translate-x-1/2 rounded-b-lg z-10"></div>
              <Image 
                src={outputImage} 
                alt={`Output of ${title}`} 
                width={300} 
                height={600} 
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              This is how the code looks when run on a device. The output helps you connect the code structure with the actual user interface.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 