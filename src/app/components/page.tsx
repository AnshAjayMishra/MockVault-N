"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Link from "next/link";

export default function ComponentsPage() {
  const [color] = useState("sky");

  // Map Tailwind colors correctly
  const colorMap: { [key: string]: string } = {
    sky: "bg-sky-500",
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link href="/" className="text-gray-500 hover:underline">
        &lt; Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-center my-6">Components</h1>

      {/* Dark Mode Toggle */}
      <div className="flex justify-center mb-4">
        <ModeToggle />
      </div>

      {/* Color Picker */}
      <div className="p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-900 transition">
        <h2 className="text-lg font-semibold mb-2">Customize Colors</h2>
        <Button className={`${colorMap[color] || "bg-gray-500"} text-white px-4 py-2 rounded-lg`}>
          Check list of colors
        </Button>
      </div>

      {/* Links */}
      <div className="mt-6">
        
        <div className="flex items-center justify-center gap-4 mt-2">
         <h1 className="text-3xl font-bold"> Coming Soon!</h1>
        </div>
      </div>
    </div>
  );
}