"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import subjectsData from "@/data/courses.json"; // Import JSON

export default function CoursesPage() {
  const subjects = subjectsData.subjects;

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md rounded-2xl transition hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <Link href={`/course${subject.link}`}>
                <div className="relative">
                  <Image
                    src={subject.image}
                    alt={subject.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-zinc-700/50">
                    {subject.level}
                  </div>
                </div>
              </Link>

              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-3">{subject.name}</h2>

                <div className="flex flex-col gap-3 text-sm text-zinc-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-purple-400" />
                    {subject.hours}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-purple-400" />
                    {subject.lessons} Lessons
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-2 text-purple-400" />
                    {subject.level}
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-purple-400" />
                    {subject.rating} Rating
                  </div>
                </div>

                <Button
                  className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-md shadow-purple-500/20"
                  asChild
                >
                  <Link href={`/course${subject.link}`}>
                    Explore
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
