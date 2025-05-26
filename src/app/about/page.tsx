// app/about/page.tsx

import Link from "next/link";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
    
   
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            About MockVault
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Empowering tech students to conquer interviews through realistic practice
            and comprehensive resources
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-indigo-400">
                Why We Exist
              </h2>
              <p className="text-gray-300">
                Born from the frustration of inadequate interview preparation resources,
                MockVault combines real-world interview simulations with structured learning
                paths for core CS subjects and DSA.
              </p>
              <div className="flex gap-4">
                <Link href="/" className="px-6 py-3 bg-zinc-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                  Get Started
                </Link>
                <Link href="/resources" className="px-6 py-3 border border-gray-600 text-white rounded-md hover:bg-gray-800 transition-colors">
                  Explore Resources
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-indigo-400">
                Our Features
              </h2>
              <div className="space-y-4">
                <div className="p-6 border border-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold">Mock Interviews</h3>
                  <p className="text-gray-400 mt-2">
                    Real-time practice with industry experts and AI-powered simulations
                  </p>
                </div>
                <div className="p-6 border border-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold">Resource Library</h3>
                  <p className="text-gray-400 mt-2">
                    Curated materials for CS core subjects and company-specific question banks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-400">
              Our Mission
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              To democratize access to quality interview preparation and help students
              bridge the gap between academic learning and industry requirements
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            © 2025 MockVault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}