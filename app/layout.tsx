import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Montserrat, Space_Grotesk } from "next/font/google"
import { cn } from "@/lib/utils"
import { ScrollProgressBar } from "@/components/scroll-animations"
import Link from "next/link"
import Image from "next/image"
import { Bell } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "Flutter Roadmap - Your Journey to Mobile App Development",
  description:
    "A comprehensive guide and roadmap for beginners to learn Flutter and mobile app development from scratch.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", montserrat.variable, spaceGrotesk.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <ScrollProgressBar />
            <div className="flex h-16 items-center border-b">
              <div className="container flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    alt="Flutter Roadmap"
                    width={30}
                    height={30}
                  />
                  <span className="font-bold text-xl">Flutter Roadmap</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link href="/roadmap" className="font-medium hover:text-primary transition-colors">
                    Roadmap
                  </Link>
                  <Link href="/dart" className="font-medium hover:text-primary transition-colors">
                    Dart
                  </Link>
                  <Link href="/projects" className="font-medium hover:text-primary transition-colors">
                    Projects
                  </Link>
                  <Link href="/resources" className="font-medium hover:text-primary transition-colors">
                    Resources
                  </Link>
                  <Link href="/community" className="font-medium hover:text-primary transition-colors">
                    Community
                  </Link>
                </nav>
                <div className="flex items-center gap-2">
                  <button className="border rounded-full p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                  <ModeToggle />
                </div>
              </div>
            </div>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
