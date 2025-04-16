"use client"
import { ConvexReactClient } from "convex/react"
import { ClerkProvider, useAuth } from "@clerk/clerk-react"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { useEffect } from "react"

// Initialize Convex client
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
})

function ConvexClerkProvider({ children }: { children: React.ReactNode }) {
  // Clear any stale tokens on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clear any stale tokens from localStorage
      localStorage.removeItem('clerk-db-jwt')
      localStorage.removeItem('clerk-session')
    }
  }, [])

  return (
    <ClerkProvider 
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <ConvexProviderWithClerk 
        client={convex} 
        useAuth={useAuth}
      >
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

export default ConvexClerkProvider