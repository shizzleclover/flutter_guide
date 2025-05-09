"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/code-block"
import { ArrowRight, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DiffItem {
  lineNumbers: [number, number] // [before, after]
  explanation: string
}

interface CodeComparisonProps {
  title: string
  description: string
  beforeCode: string
  afterCode: string
  beforeTitle?: string
  afterTitle?: string
  diffItems?: DiffItem[]
}

export function CodeComparison({
  title,
  description,
  beforeCode,
  afterCode,
  beforeTitle = "Before",
  afterTitle = "After",
  diffItems = []
}: CodeComparisonProps) {
  const [isFullWidth, setIsFullWidth] = useState(false)
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [selectedDiff, setSelectedDiff] = useState<DiffItem | null>(null)

  const beforeHighlightLines = diffItems.map(item => item.lineNumbers[0])
  const afterHighlightLines = diffItems.map(item => item.lineNumbers[1])

  return (
    <div className="brutalist-card p-6 mb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowLineNumbers(!showLineNumbers)}
          >
            {showLineNumbers ? "Hide" : "Show"} Line Numbers
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsFullWidth(!isFullWidth)}
            className="flex items-center gap-2"
          >
            {isFullWidth ? (
              <>
                <Minimize2 className="h-4 w-4" /> Compact View
              </>
            ) : (
              <>
                <Maximize2 className="h-4 w-4" /> Full Width View
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Differences List */}
      {diffItems.length > 0 && (
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <h4 className="font-bold mb-3">Key Changes</h4>
          <div className="space-y-2">
            {diffItems.map((item, index) => (
              <div 
                key={index}
                className={`rounded-lg p-3 cursor-pointer transition-colors ${
                  selectedDiff === item 
                    ? 'bg-primary/20 border-l-4 border-primary' 
                    : 'bg-muted-foreground/10 hover:bg-primary/10'
                }`}
                onClick={() => setSelectedDiff(selectedDiff === item ? null : item)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm bg-primary/20 text-primary px-2 py-1 rounded">Line {item.lineNumbers[0]} → {item.lineNumbers[1]}</span>
                    <p className="text-sm font-medium">{item.explanation}</p>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-transform ${selectedDiff === item ? 'rotate-90' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Code Comparison */}
      <div className={`grid grid-cols-1 ${isFullWidth ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-6`}>
        <div>
          <CodeBlock 
            code={beforeCode}
            title={beforeTitle}
            highlightLines={selectedDiff ? [selectedDiff.lineNumbers[0]] : beforeHighlightLines}
          />
        </div>
        
        {isFullWidth && <div className="flex justify-center"><ArrowRight className="h-8 w-8" /></div>}
        
        <div>
          <CodeBlock 
            code={afterCode}
            title={afterTitle}
            highlightLines={selectedDiff ? [selectedDiff.lineNumbers[1]] : afterHighlightLines}
          />
        </div>
      </div>
      
      {/* Selected Difference Explanation */}
      {selectedDiff && (
        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <h4 className="font-bold mb-2">Change Details</h4>
          <p>{selectedDiff.explanation}</p>
        </div>
      )}
    </div>
  )
}