"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Video, Calendar, Archive } from "lucide-react"

import { useState } from "react"
import { useUserRole } from "@/hooks/useUserRole"
import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { useRouter } from "next/navigation"
import MeetingModal from "@/components/MeetingModal"
import LoaderUI from "@/components/LoaderUI"
import { Loader2Icon } from "lucide-react"
import MeetingCard from "@/components/MeetingCard"

export default function Hero() {
  const router = useRouter()
  const { isInterviewer, isLoading } = useUserRole()
  const interviews = useQuery(api.interviews.getMyInterviews)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<"start" | "join">()

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start")
        setShowModal(true)
        break
      case "Join Interview":
        setModalType("join")
        setShowModal(true)
        break
      default:
        router.push(`/home/${title.toLowerCase().replace(" ", "-")}`)
    }
  }

  if (isLoading) return <LoaderUI />

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <main className="bg-white dark:bg-black mt-16 container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white text-black">
            Welcome to MockVault
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {isInterviewer
              ? "Manage your interviews and review candidates effectively"
              : "Access your upcoming interviews and preparations"}
          </p>
        </div>

        {isInterviewer ? (
          /* Interviewer View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Cards */}
            <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-black border border-gray-300 dark:border-zinc-900">
              <PlusCircle className="h-8 w-8 mb-4 text-black dark:text-white" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">New Call</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Start a new mock interview session with customizable settings
              </p>
              <Button 
                variant="outline" 
                className="w-full  text-white bg-black hover:text-zinc-700"
                onClick={() => handleQuickAction("New Call")}
              >
                Start Now
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-black border border-gray-300 dark:border-zinc-900">
              <Video className="h-8 w-8 mb-4 text-black dark:text-white" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">Join Interview</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join an existing interview session with a unique code
              </p>
              <Button 
                variant="outline" 
                className="w-full  text-white bg-black hover:text-zinc-700"
                onClick={() => handleQuickAction("Join Interview")}
              >
                Join Session
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-black border border-gray-300 dark:border-zinc-900">
              <Calendar className="h-8 w-8 mb-4  text-black dark:text-white" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">Schedule</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plan and manage your upcoming interview sessions
              </p>
              <Button 
                variant="outline" 
                className="w-full  text-white bg-black hover:text-zinc-700"
                onClick={() => handleQuickAction("Schedule")}
              >
                View Calendar
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-black border border-gray-300 dark:border-zinc-900">
              <Archive className="h-8 w-8 mb-4 text-black dark:text-white" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">Recordings</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access and review your previous interview recordings
              </p>
              <Button 
                variant="outline" 
                className="w-full text-white bg-black hover:text-zinc-700"
                onClick={() => handleQuickAction("Recordings")}
              >
                View Archive
              </Button>
            </Card>
          </div>
        ) : (
          /* Candidate View */
          <div>
            <div className="mb-8 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-black dark:text-white">Your Interviews</h1>
              <p className="text-muted-foreground mt-1  ">
                View and join your scheduled interviews
              </p>
            </div>

            <div className="mt-8">
              {interviews === undefined ? (
                <div className="flex justify-center py-12">
                  <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : interviews.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {interviews.map((interview) => (
                    <MeetingCard key={interview._id} interview={interview} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  You have no scheduled interviews at the moment
                </div>
              )}
            </div>
          </div>
        )}

        {/* Meeting Modal */}
        <MeetingModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
          isJoinMeeting={modalType === "join"}
        />
      </main>
    </div>
  )
}