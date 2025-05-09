import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const team = [
  {
    name: "Murewa",
    role: "Product Manager & Mobile Developer",
    bio: "Product Manager, Project Manager, Senior Marketer, and Mobile Developer with expertise in creating intuitive mobile experiences.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "mailto:murewa@fydaas.com",
    },
  },
  {
    name: "Friend 1",
    role: "AI/ML Developer",
    bio: "Specialized in machine learning models, data analysis, and AI-powered applications for academic projects.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "mailto:ai@fydaas.com",
    },
  },
  {
    name: "Friend 2",
    role: "Backend Developer",
    bio: "Expert in building robust APIs, database design, and server-side architecture for complex systems.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "mailto:backend@fydaas.com",
    },
  },
  {
    name: "Friend 3",
    role: "Frontend Developer",
    bio: "Crafts beautiful, responsive user interfaces and seamless user experiences for web applications.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "mailto:frontend@fydaas.com",
    },
  },
]

export default function TeamPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a team of experienced developers dedicated to helping students succeed with their final year
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="brutalist-card p-6">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-auto transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={member.social.twitter}>
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={member.social.linkedin}>
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={member.social.github}>
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={member.social.email}>
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bring a diverse set of skills to help with any type of final year project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="brutalist-card p-6">
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>React & Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Vue & Nuxt</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Angular</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Responsive Design</span>
                </li>
              </ul>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-2xl font-bold mb-4">Mobile Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>React Native</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Flutter</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Swift (iOS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Kotlin (Android)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Cross-platform Solutions</span>
                </li>
              </ul>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Node.js & Express</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Python & Django</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>PHP & Laravel</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Database Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>API Development</span>
                </li>
              </ul>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-2xl font-bold mb-4">AI/ML Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>TensorFlow & PyTorch</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Natural Language Processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Computer Vision</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Data Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Predictive Modeling</span>
                </li>
              </ul>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-2xl font-bold mb-4">DevOps & Deployment</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>AWS & Azure</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Docker & Kubernetes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>CI/CD Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Vercel & Netlify</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Server Management</span>
                </li>
              </ul>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-2xl font-bold mb-4">Project Documentation</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Technical Documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>User Manuals</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>System Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>API Documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Defense Preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships with students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="brutalist-card p-6">
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every project we undertake. Our goal is to deliver high-quality solutions
                that exceed expectations and help students achieve academic success.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-muted-foreground">
                We believe in empowering students through education. We don't just build projects; we ensure students
                understand their projects and can confidently defend them.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty and transparency in all our dealings. We provide realistic timelines, clear
                communication, and deliver on our promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Work With Our Team</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Let our experienced team help you bring your final year project to life.
            </p>
          </div>

          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="brutalist-border text-lg px-8">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
