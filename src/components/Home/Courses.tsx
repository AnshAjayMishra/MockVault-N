"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, BookOpen, TrendingUp, ShieldCheck } from "lucide-react";

import data from "@/data/courses.json";
import { Button } from "../ui/button";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.subjects.filter(subject => subject.isFeatured).map((subject, index) => (
          <motion.div
            key={subject.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href={subject.link} passHref>
              <Card className="overflow-hidden rounded-xl border border-zinc-800 hover:border-gray-600 transition-transform transform hover:scale-105 bg-black">
                <CardHeader className="p-0 border-none">
                  <Image src={subject.image} alt={subject.name} width={600} height={250} className="w-full h-64 object-cover" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl mb-4 text-white">{subject.name}</CardTitle>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-400 flex items-center"><Clock className="w-4 h-4 mr-2" /> {subject.hours}</p>
                    <p className="text-gray-400 flex items-center"><BookOpen className="w-4 h-4 mr-2" /> {subject.lessons} Lessons</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-400 flex items-center"><ShieldCheck className="w-4 h-4 mr-2" /> {subject.level}</p>
                    <p className="text-gray-400 flex items-center"><TrendingUp className="w-4 h-4 mr-2" /> {subject.rating}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
        
       
      </div>
      <div className="flex items-center justify-center mt-12"> <Link href="/courses" target="black" ><Button variant={"outline"} className="text-white bg-black border border-zinc-800 hover:bg-zinc-900 hover:text-white rounded-2xl">More Courses</Button></Link></div>
    </div>
  );
}
