import React from "react";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import CoursePage from "@/components/Home/Courses";

function page() {
  return (
    <div>
      <Hero />
      <About />
      <CoursePage/>
    </div>
  );
}

export default page;
