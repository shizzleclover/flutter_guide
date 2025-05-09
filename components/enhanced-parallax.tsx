"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface EnhancedParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  scale?: boolean
  rotate?: boolean
  opacity?: boolean
}

export function EnhancedParallax({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  scale = false,
  rotate = false,
  opacity = false,
}: EnhancedParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const rect = element.getBoundingClientRect()
    const elementTop = rect.top + window.scrollY
    const elementHeight = rect.height
    const windowHeight = window.innerHeight

    // Only apply effect if element is in viewport
    if (scrollPosition + windowHeight > elementTop && scrollPosition < elementTop + elementHeight) {
      let translateX = 0
      let translateY = 0
      let scaleValue = 1
      let rotateValue = 0
      let opacityValue = 1

      const scrollFactor = (scrollPosition + windowHeight - elementTop) * speed

      // Calculate transform based on direction
      if (direction === "up") {
        translateY = -scrollFactor
      } else if (direction === "down") {
        translateY = scrollFactor
      } else if (direction === "left") {
        translateX = -scrollFactor
      } else if (direction === "right") {
        translateX = scrollFactor
      }

      // Apply scale effect if enabled
      if (scale) {
        const scaleFactor = 1 + scrollFactor / 1000
        scaleValue = Math.min(Math.max(scaleFactor, 0.8), 1.2)
      }

      // Apply rotation effect if enabled
      if (rotate) {
        rotateValue = (scrollFactor / 100) % 360
      }

      // Apply opacity effect if enabled
      if (opacity) {
        const opacityFactor = 1 - scrollFactor / 1000
        opacityValue = Math.min(Math.max(opacityFactor, 0.2), 1)
      }

      element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scaleValue}) rotate(${rotateValue}deg)`
      element.style.opacity = opacityValue.toString()
    }
  }, [scrollPosition, speed, direction, scale, rotate, opacity])

  return (
    <div className={cn("parallax-container", className)}>
      <div ref={ref} className="parallax-content transition-transform duration-300 will-change-transform">
        {children}
      </div>
    </div>
  )
}
