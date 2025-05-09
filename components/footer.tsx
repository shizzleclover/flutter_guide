import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Flutter Roadmap</h3>
          <p className="text-muted-foreground">
            A comprehensive guide to help beginners learn Flutter and mobile app development from scratch.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com/flutterdev" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.youtube.com/c/flutterdev" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/flutter/flutter" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/company/flutter" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/roadmap" className="text-muted-foreground hover:text-foreground">
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Official Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://flutter.dev"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flutter Official Website
              </Link>
            </li>
            <li>
              <Link
                href="https://dart.dev"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dart Programming Language
              </Link>
            </li>
            <li>
              <Link
                href="https://pub.dev"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pub.dev (Flutter Packages)
              </Link>
            </li>
            <li>
              <Link
                href="https://flutter.dev/docs"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flutter Documentation
              </Link>
            </li>
            <li>
              <Link
                href="https://flutter.dev/community"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flutter Community
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Subscribe</h4>
          <p className="text-muted-foreground">Stay updated with the latest Flutter tips and resources.</p>
          <div className="flex gap-2">
            <Input placeholder="Your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Flutter Roadmap. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
