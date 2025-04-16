
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import CoursePage from "@/components/Home/Courses";
import Navbar from "@/components/Nav/Nav";

export default function HomePage() {
 

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <Hero />
      <About />
      <CoursePage />
    </div>
  );
}
