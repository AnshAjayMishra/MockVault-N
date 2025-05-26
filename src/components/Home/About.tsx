"use client";
import { Element } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Users,
  Shield,
  Zap,
  Compass,
  Rocket,
} from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Element name="aboutp" className="element">
      <main className="max-w-7xl mx-auto px-8 text-center">
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <motion.h2
              className="text-4xl font-bold mb-12 bg-clip-text text-white "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About MockVault
            </motion.h2>

            <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
              MockVault is your go-to platform for interview preparation with
              real-world mock scenarios, personalized feedback, and career
              growth acceleration.
            </p>
            <section className="py-20 relative">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
                    <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-800">
                      <Image
                        src="/mockvprew.png"
                        width={800}
                        height={600}
                        alt="Our mission"
                        className="w-full h-auto object-cover pointer-events-none"
                      />
                    </div>
                    <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
                  </div>

                  <div>
                    <div className="inline-block px-4 py-1 mb-6 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm font-medium text-zinc-400">
                      Our Mission
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Redefining what&apos;s possible through{" "}
                      <span className="text-purple-400">
                        innovative solutions
                      </span>
                    </h2>
                    <p className="text-zinc-400 mb-6">
                      Founded in 2020, we set out to challenge the status quo
                      and create products that empower people to achieve more.
                      Our journey began with a simple idea: technology should
                      adapt to humans, not the other way around.
                    </p>
                    <p className="text-zinc-400 mb-8">
                      Today, we&apos;re a team of passionate creators,
                      engineers, and visionaries working together to build the
                      future we want to see. We believe in pushing boundaries,
                      embracing challenges, and never settling for &quot;good
                      enough.&quot;
                    </p>
                    <Button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0">
                      Learn more about our work
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-16">
              <div className="flex items-center justify-center mt-12">
                {" "}
                <Link href="/courses" target="black"></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-black ">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-block px-5 py-2 mb-6 rounded-full bg-zinc-800/60 border border-zinc-700 text-sm font-semibold text-zinc-400 tracking-wide">
                Our Values
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white"> Principles that</span>{" "}
                <span className="text-blue-400">guide us</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                These core values define our culture and shape every decision we
                make — from product development to how we interact with our
                community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Lightbulb className="h-7 w-7" />,
                  title: "Innovation",
                  description:
                    "We embrace creativity and forward-thinking to solve complex problems with elegant solutions.",
                },
                {
                  icon: <Users className="h-7 w-7" />,
                  title: "Collaboration",
                  description:
                    "We believe the best ideas emerge when diverse perspectives come together with a shared purpose.",
                },
                {
                  icon: <Shield className="h-7 w-7" />,
                  title: "Integrity",
                  description:
                    "We&apos;re committed to doing what&apos;s right, even when it&apos;s challenging, and being transparent in all our actions.",
                },
                {
                  icon: <Zap className="h-7 w-7" />,
                  title: "Impact",
                  description:
                    "We measure success by the positive difference we make in people&apos;s lives and in the world.",
                },
                {
                  icon: <Compass className="h-7 w-7" />,
                  title: "Exploration",
                  description:
                    "We&apos;re not afraid to venture into uncharted territory and learn from both successes and failures.",
                },
                {
                  icon: <Rocket className="h-7 w-7" />,
                  title: "Excellence",
                  description:
                    "We hold ourselves to the highest standards and continuously strive to improve in everything we do.",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="bg-zinc-800/50 border border-zinc-700 hover:border-blue-500/40 hover:bg-zinc-800/70 transition-all duration-300 group rounded-2xl shadow-md"
                >
                  <CardContent className="p-8">
                    <div className="rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 w-fit mb-6 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-zinc-100 group-hover:text-blue-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Element>
  );
}
