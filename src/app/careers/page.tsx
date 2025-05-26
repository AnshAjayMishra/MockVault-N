import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
    <div className=" px-6 py-12 max-w-7xl mx-auto ">
      {/* Hero Section */}
      <section className="text-center mb-16 ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Mock Vault</h1>
        <p className="text-lg text-gray-400">Empower the next generation of tech leaders with us.</p>
      </section>

      {/* Open Positions Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-zinc-900 border-zinc-700">
          <CardHeader>
            <CardTitle>Frontend Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 mb-4">React.js, Next.js, Tailwind CSS</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">Apply Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-700">
          <CardHeader>
            <CardTitle>Backend Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 mb-4">Node.js, Express.js, MongoDB</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">Apply Now</Button>
          </CardContent>
        </Card>
      </section>

      {/* Why Join Us Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Why Mock Vault?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          At Mock Vault, we believe in innovation, collaboration, and creating impact. Join a team that
          values growth, creativity, and community.
        </p>
      </section>

      {/* Final Call to Action */}
      <div className="text-center">
        <Button size="lg" className="bg-white text-black hover:bg-gray-300 font-semibold">View All Roles</Button>
      </div>
    </div>
    </div>
  );
}
