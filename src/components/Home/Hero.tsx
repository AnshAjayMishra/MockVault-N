"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-black">
      <div className="relative max-w-7xl mx-auto py-24 px-8">
        {/* Hero Section Title and Button */}
        <div className="text-center">
          <h1 className="text-7xl font-bold text-white mb-4">
            MockVault Interview <br />
            Prep Platform
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            MockVault Leveraging AI Bots for Interview Prep
          </p>
          <Link href="/home">
            <Button
              variant="outline"
              className="px-6 py-2 rounded-xl bg-black border border-zinc-900 text-white hover:bg-zinc-800 hover:text-white"
            >
              1:1 Session
            </Button>
          </Link>
        </div>

        {/* Video Section */}
        <div className="flex justify-center mt-8 bottom-0">
          <video
            className="w-[600px] h-[400px] object-cover rounded-xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;