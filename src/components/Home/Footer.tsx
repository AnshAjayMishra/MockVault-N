import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 w-full  mt-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/image/logo.png" // ← your logo path
                alt="Mock Vault Logo"
                width={40}
                height={40}
                className="rounded-md pointer-events-none"
              />
              <Link
                href="/"
                className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                MockVault
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Master your skills with interactive courses and accelerate your
              career growth.
            </p>
          </div>

          {/* Courses Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses/cybersecurity"
                  className="hover:text-white transition-colors"
                >
                  Computer Networks
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-science"
                  className="hover:text-white transition-colors"
                >
                  DBMS
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/web-development"
                  className="hover:text-white transition-colors"
                >
                  DSA Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/cloud-computing"
                  className="hover:text-white transition-colors"
                >
                  Operating System
                </Link>
              </li>
            </ul>
          </div>

          {/* Career Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Career</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/career/job-board"
                  className="hover:text-white transition-colors"
                >
                  Job Board
                </Link>
              </li>
              <li>
                <Link
                  href="/career/resume-builder"
                  className="hover:text-white transition-colors"
                >
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/career/interview-prep"
                  className="hover:text-white transition-colors"
                >
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link
                  href="/career/guidance"
                  className="hover:text-white transition-colors"
                >
                  Career Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Mock Vault. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              {/* <Link href="/cookie-settings" className="text-sm hover:text-white transition-colors">Cookie Settings</Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
