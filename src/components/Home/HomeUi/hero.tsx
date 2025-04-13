"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Video, Calendar, Archive } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api"
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase().replace(' ', '-')}`);
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <main className="bg-white dark:bg-black mt-16 container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white text-black">
            Welcome to MockVault
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your all-in-one platform for mock interviews, practice sessions, 
            and career preparation. Sharpen your skills and ace your next interview!
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-black border border-gray-300 dark:border-zinc-900">
            <PlusCircle className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">New Call</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Start a new mock interview session with customizable settings
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleQuickAction("New Call")}
            >
              Start Now
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-black border border-gray-300 dark:border-zinc-900">
            <Video className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Join Interview</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Join an existing interview session with a unique code
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleQuickAction("Join Interview")}
            >
              Join Session
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-black border border-gray-300 dark:border-zinc-900">
            <Calendar className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Schedule</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Plan and manage your upcoming interview sessions
            </p>
            <Link href="/home/schedule" > <Button 
              variant="outline" 
              className="w-full"

            >
              View Calendar
            </Button></Link>
           
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-black border border-gray-300 dark:border-zinc-900">
            <Archive className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Recordings</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Access and review your previous interview recordings
            </p>
            <Link href="/home/recordings">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleQuickAction("Recordings")}
            >
              View Archive
            </Button>
            </Link>
          </Card>
        </div>

        {/* Modal Placeholder */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {modalType === "start" ? "Start New Interview" : "Join Interview"}
              </h3>
              {/* Add your form or modal content here */}
              <div className="flex gap-4 justify-end">
                <Button variant="outline" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button>
                  {modalType === "start" ? "Start" : "Join"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}