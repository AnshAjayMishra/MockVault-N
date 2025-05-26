

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ClientWrapper from "../../client-wrapper";
import { Navbar } from "@/components/Nav/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Hero from "@/components/Home/HomeUi/hero";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    redirect("not-found"); 
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClientWrapper>
        <div>
          {" "}
          <Navbar />
          <Hero />
        </div>
        
      </ClientWrapper>
    </ThemeProvider>
  );
}
