"use client"

import React, { useState } from "react"
import Hero from "@/components/Home/Hero"
import About from "@/components/Home/About"
import CoursePage from "@/components/Home/Courses"
import Navbar from "@/components/Nav/Nav"
import VideoCall from "@/components/VideoCall/VideoCall"
import CallControls from "@/components/VideoCall/CallControls"

export default function HomePage() {
  const [callId, setCallId] = useState<string | null>(null)

  const createCall = () => {
    const newCallId = crypto.randomUUID()
    setCallId(newCallId)
  }

  const joinCall = (id: string) => {
    setCallId(id)
  }

  const endCall = () => {
    setCallId(null)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Your existing UI components */}
      <Hero />
      <About />
      <CoursePage />

      {/* Video call components */}
      {callId && <VideoCall callId={callId} onEndCall={endCall} />}
      <CallControls onCreateCall={createCall} onJoinCall={joinCall} />
    </div>
  )
}
