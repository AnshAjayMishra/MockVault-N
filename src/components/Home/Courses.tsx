"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, BookOpen, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import data from courses.json
import data from "@/data/courses.json";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Our Courses
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Expand your knowledge with our carefully crafted learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.subjects
            .filter((subject) => subject.isFeatured)
            .map((subject) => (
              <motion.div
                key={subject.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-full"
              >
                <Link href={subject.link} className="block h-full">
                  <Card className="overflow-hidden rounded-2xl border border-zinc-800/50 hover:border-purple-500/50 transition-all duration-300 bg-zinc-900/30 backdrop-blur-sm h-full group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 z-10"></div>
                      <Image
                        src={subject.image || "/placeholder.svg?height=600&width=800"}
                        alt={subject.name}
                        width={600}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-white border border-zinc-700/50">
                        {subject.level}
                      </div>
                    </div>

                    <CardContent className="p-6 relative">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                        {subject.name}
                      </h3>

                      <div className="grid grid-cols-2 gap-y-3 mb-6">
                        <div className="flex items-center text-zinc-400">
                          <Clock className="w-4 h-4 mr-2 text-purple-400" />
                          <span>{subject.hours}</span>
                        </div>
                        <div className="flex items-center text-zinc-400">
                          <BookOpen className="w-4 h-4 mr-2 text-purple-400" />
                          <span>{subject.lessons} Lessons</span>
                        </div>
                        <div className="flex items-center text-zinc-400">
                          <ShieldCheck className="w-4 h-4 mr-2 text-purple-400" />
                          <span>{subject.level}</span>
                        </div>
                        <div className="flex items-center text-zinc-400">
                          <TrendingUp className="w-4 h-4 mr-2 text-purple-400" />
                          <span>{subject.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-lg font-bold text-white">
                          { "Free"}
                        </div>
                        <div className="text-purple-400 flex items-center font-medium text-sm opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          View Course <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
        </div>

        <div className="flex items-center justify-center mt-16">
          <Link href="/courses">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-6 font-medium text-lg group transition-all duration-300 shadow-lg shadow-purple-500/20">
              <span className="text-sm">Explore All Courses</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
