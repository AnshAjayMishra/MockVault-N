import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ClientWrapper from "./client-wrapper";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    redirect('not-found'); // Handle redirect directly if needed
  }

  return (
    <ClientWrapper>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to Your Home Page</h1>
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/" />
            <p>Your protected content here</p>
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
}
