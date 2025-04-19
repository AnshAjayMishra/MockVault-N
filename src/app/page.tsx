"use client";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import CoursePage from "@/components/Home/Courses";
import Navbar from "@/components/Nav/Nav";
import Footer from "@/components/Home/Footer";
import TeamSection from "@/components/Home/ourteam";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <CoursePage />
      <TeamSection />
      <Footer />
    </div>
  );
}
