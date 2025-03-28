"use client";

import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="relative  bg-black py-24 px-8">
      {/* Hero Section Title and Button */}
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white mb-4">
          MockVault Interview <br />
          Prep Platform
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          MockVault Leveraging AI Bots for Interview Prep
        </p>
        <Button variant="secondary" className=" px-6 py-2 rounded-xl bg-black border border-gray-600 text-white hover:bg-zinc-900" >
          1:1 Session
        </Button>
      </div>

      {/* Video Section */}
      <div className="flex justify-center mt-8">
        <video
          className="w-[600px] h-auto object-cover rounded-lg"
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
  );
}

export default Hero;
