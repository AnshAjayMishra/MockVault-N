import React from "react";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import CoursePage from "@/components/Home/Courses";
import Navbar from "@/components/Nav/Nav";

function page() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <CoursePage/>
    </div>
  );
}

export default page;
