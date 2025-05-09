import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export function GDGMobileTrackCard() {
  return (
    <Card className="w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <Users className="h-8 w-8" />
          <div>
            <CardTitle>GDG Mobile Track</CardTitle>
            <CardDescription className="text-white/80">Join the Flutter Community</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="mb-4">
          Connect with other Flutter developers, get help with your projects, and stay updated with the latest mobile
          development trends through the Google Developer Group Mobile Track.
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Get help from experienced Flutter developers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Participate in community challenges and events</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Share your projects and get feedback</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Stay updated with Flutter news and updates</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="https://chat.whatsapp.com/JU2bFChAxc6LlioOaVceut" target="_blank" rel="noopener noreferrer">
            Join GDG Mobile Track on WhatsApp
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
