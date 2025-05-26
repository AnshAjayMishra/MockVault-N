"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard } from "lucide-react"
import { ModeToggle } from "../ui/toggle"
import { UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import logo from "../../../public/image/logo.png"
import logo1 from "../../../public/image/logo1.png"

export function Navbar() {
  const { isSignedIn } = useUser()

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <Link href="/home" className="flex-shrink-0">
            {/* Light Mode Logo */}
      <Image
        src={logo1}
        alt="Light Mode Logo"
        width={26}
        height={26}
        className="space-x-2 dark:hidden"
      />
      
      {/* Dark Mode Logo */}
      <Image
        src={logo}
        alt="Dark Mode Logo"
        width={26}
        height={26}
        className="space-x-2 hidden dark:block"
      />
          </Link>

          {/* Right side - Navigation items */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ModeToggle />

            {/* Dashboard Button */}
            {isSignedIn && (
              <Button asChild variant="default" className="gap-2 bg-black text-white dark:text-black dark:bg-white hover:dark:bg-gray-700 hover:bg-zinc-800">
                <Link href="/home/dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
            )}

            {/* Clerk User Profile */}
            <div className="ml-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-9 w-9",
                    userButtonPopoverCard: "dark:bg-black dark:border-gray-800",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}