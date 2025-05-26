"use client";

import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useEffect } from "react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!convexUrl) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL environment variable is not set.");
}

const convex = new ConvexReactClient(convexUrl, {
  unsavedChangesWarning: false,
});

function ConvexClerkProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("clerk-db-jwt");
      localStorage.removeItem("clerk-session");
    }
  }, []);

  if (!clerkPublishableKey) {
    return (
      <div style={{ color: "red", padding: 20 }}>
        Error: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable is not set.
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey} afterSignOutUrl="/">
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}

export default ConvexClerkProvider;
