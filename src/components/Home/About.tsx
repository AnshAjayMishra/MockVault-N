"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, LockKeyhole, BarChart } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutSection() {
  return (
    <section className="py-20 bg-black text-white border border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-amber-300" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          About MockVault
        </motion.h2>

        <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          MockVault is your go-to platform for interview preparation with real-world mock scenarios, personalized feedback, and career growth acceleration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: ShieldCheck,
            title: 'Bank-Level Security',
            description: 'Enterprise-grade encryption powered by AES-256 and RSA-4096 protocols.'
          }, {
            icon: LockKeyhole,
            title: 'Zero-Knowledge Architecture',
            description: 'Your data remains encrypted end-to-end, even we can’t access it.'
          }, {
            icon: BarChart,
            title: 'Real-Time Analytics',
            description: 'Comprehensive dashboards with instant threat detection.'
          }].map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#151515] border border-zinc-800 rounded-xl shadow-xl transform hover:scale-105 transition-transform text-white">
                <item.icon className="h-10 w-10 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
        <div className="flex items-center justify-center mt-12"> <Link href="/courses" target="black" ><Button variant={"outline"} className="text-white bg-black border border-zinc-800 hover:bg-zinc-900 hover:text-white rounded-2xl">Learn More</Button></Link></div>
    </div>
      </div>
    </section>
  );
}
