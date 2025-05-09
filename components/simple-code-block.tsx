"use client"

import { useState } from "react"
import { Check, Copy, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SimpleCodeBlockProps {
  code: string
  title?: string
  language?: string
  explanation?: string
  highlightLines?: number[]
  lineExplanations?: Record<number, string>
}

export function SimpleCodeBlock({
  code,
  title,
  language = "dart",
  explanation,
  highlightLines = [],
  lineExplanations = {}
}: SimpleCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [showExplanations, setShowExplanations] = useState(true)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Very simple syntax highlighting for basic concepts
  const highlightCode = (code: string) => {
    return code
      // Keywords
      .replace(
        /(void|int|String|double|bool|var|final|if|else|for|while|return|class|new|this|function|import|List|Map)/g,
        '<span class="simple-keyword">$1</span>',
      )
      // Strings
      .replace(/('.*?'|".*?")/g, '<span class="simple-string">$1</span>')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="simple-number">$1</span>')
      // Comments
      .replace(/(\/\/.*)/g, '<span class="simple-comment">$1</span>')
  }

  const lines = code.split('\n')

  return (
    <div className="rounded-lg overflow-hidden mb-6 border-2 border-gray-200 dark:border-gray-700">
      {/* Header */}
      {title && (
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <span className="font-medium">{title}</span>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={() => setShowExplanations(!showExplanations)}
            >
              {showExplanations ? "Hide" : "Show"} Explanations
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}

      {/* Overall explanation */}
      {explanation && showExplanations && (
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 border-b border-blue-100 dark:border-blue-800">
          <div className="flex gap-2">
            <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-700 dark:text-blue-300">{explanation}</p>
          </div>
        </div>
      )}

      {/* Code */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto bg-gray-50 dark:bg-gray-900 text-sm">
          <table className="w-full border-collapse">
            <tbody>
              {lines.map((line, index) => {
                const lineNumber = index + 1
                const isHighlighted = highlightLines.includes(lineNumber)
                const hasExplanation = lineExplanations[lineNumber]

                return (
                  <>
                    <tr 
                      key={`line-${index}`} 
                      className={`
                        ${isHighlighted ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''}
                        ${hasExplanation && showExplanations ? 'border-b border-dashed border-gray-200 dark:border-gray-700' : ''}
                      `}
                    >
                      <td className="text-right pr-4 text-gray-500 select-none w-10">
                        {lineNumber}
                      </td>
                      <td>
                        <code dangerouslySetInnerHTML={{ __html: highlightCode(line) }} />
                      </td>
                    </tr>
                    {hasExplanation && showExplanations && (
                      <tr key={`explanation-${index}`} className="bg-gray-50 dark:bg-gray-800/50">
                        <td></td>
                        <td className="py-2 px-4">
                          <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                            {lineExplanations[lineNumber]}
                          </p>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </pre>
      </div>
    </div>
  );
} 