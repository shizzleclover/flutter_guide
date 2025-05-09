"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export function ParallaxSection({ children, className, speed = 0.5, direction = "up" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrollY = window.scrollY
      const rect = ref.current.getBoundingClientRect()
      const elementTop = rect.top + scrollY
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Check if element is in viewport
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
        const offset = (scrollY + windowHeight - elementTop) * speed
        const translateY = direction === "up" ? -offset : offset
        ref.current.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div className={cn("parallax-container", className)}>
      <div ref={ref} className="parallax-content">
        {children}
      </div>
    </div>
  )
}
