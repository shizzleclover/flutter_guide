"use client"

import { useState } from "react"
import { Check, Copy, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  explanations?: {[key: number]: string}  // Map line numbers to explanations
  highlightLines?: number[]  // Lines to highlight
}

export function CodeBlock({ 
  code, 
  language = "dart", 
  title,
  explanations = {},
  highlightLines = [] 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [showExplanations, setShowExplanations] = useState(true)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Enhanced syntax highlighting for Dart with more patterns
  const highlightDart = (code: string) => {
    return code
      // Keywords
      .replace(
        /(class|void|int|String|double|bool|final|var|const|if|else|for|while|return|import|export|extends|implements|new|this|super|async|await|try|catch|throw|switch|case|break|continue|default|static|get|set|required|override|abstract|Widget|build|@override)/g,
        '<span class="dart-keyword">$1</span>',
      )
      // Strings
      .replace(/('.*?'|".*?")/g, '<span class="dart-string">$1</span>')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="dart-number">$1</span>')
      // Function calls
      .replace(/\b([a-zA-Z]+)\(/g, '<span class="dart-function">$1</span>(')
      // Comments
      .replace(/(\/\/.*)/g, '<span class="dart-comment">$1</span>')
      // Flutter widgets
      .replace(/\b(Scaffold|AppBar|Container|Text|Column|Row|ListView|Center|Padding|MaterialApp|ElevatedButton|Icon)\b(?!\()/g, 
        '<span class="dart-widget">$1</span>')
      // Flutter properties
      .replace(/\b(child|children|onPressed|style|width|height|color|margin|padding|decoration)\s*:/g, 
        '<span class="dart-property">$1</span>:')
  }

  const lines = code.split('\n')

  return (
    <div className="relative rounded-lg overflow-hidden mb-6">
      {title && (
        <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 font-mono text-sm font-medium flex justify-between items-center">
          <span>{title}</span>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-2 text-xs"
              onClick={() => setShowLineNumbers(!showLineNumbers)}
            >
              {showLineNumbers ? "Hide" : "Show"} Line Numbers
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-2 text-xs"
              onClick={() => setShowExplanations(!showExplanations)}
            >
              {showExplanations ? "Hide" : "Show"} Explanations
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard} title="Copy code">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}
      <div className="code-block relative">
        <pre className={`${showLineNumbers ? 'pl-12' : 'pl-4'} relative`}>
          {lines.map((line, index) => {
            const lineNumber = index + 1;
            const isHighlighted = highlightLines.includes(lineNumber);
            const hasExplanation = explanations[lineNumber];
            
            return (
              <div key={index} 
                className={`code-line relative ${isHighlighted ? 'highlighted-line' : ''} hover:bg-gray-200/10`}
              >
                {showLineNumbers && (
                  <span className="absolute left-0 text-gray-500 w-8 inline-block text-right select-none pr-2">
                    {lineNumber}
                  </span>
                )}
                <code dangerouslySetInnerHTML={{ __html: highlightDart(line) }} />
                
                {showExplanations && hasExplanation && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="inline-flex ml-2 text-blue-500 hover:text-blue-400 align-middle">
                          <Info size={14} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="max-w-xs">
                        <p>{explanations[lineNumber]}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  )
}
