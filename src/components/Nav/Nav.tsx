"use client";

import React from "react";
import logo from "../../../public/image/logo.png";
import Image from "next/image";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="bg-black">
      <nav className="mx-auto max-w-7xl flex items-center justify-between bg-black font-[Aileron] px-8 py-6 shadow-md space-y-3">
        <div className="flex items-center space-x-3">
          <Image
            src={logo}
            alt="logo"
            width={22}
            height={22}
            className="space-x-2"
          />
          <h1 className="text-lg font-bold text-white">MockVault</h1>
        </div>

        {/* Navigation Links - Conditionally rendered based on auth state */}
        <ul className="flex items-center space-x-12 text-white">
          {isSignedIn ? (
            <>
              <li className="cursor-pointer hover:text-gray-400">
                <NextLink href="/home">Home</NextLink>
              </li>
              <li className="cursor-pointer hover:text-gray-400">
                <NextLink href="/about">About Us</NextLink>
              </li>
              <li className="cursor-pointer hover:text-gray-400">
                <NextLink href="/library">Library</NextLink>
              </li>
              <li className="cursor-pointer hover:text-gray-400">
                <NextLink href="/dashboard">Dashboard</NextLink>
              </li>
            </>
          ) : (
            <>
              <li className="cursor-pointer hover:text-gray-400">
                <ScrollLink
                  to="aboutp"
                  spy={true}
                  smooth={true}
                  offset={50}
                  className="cursor-pointer"
                >
                  About Us
                </ScrollLink>
              </li>
              <li className="cursor-pointer hover:text-gray-400">
                <NextLink href="/careers">Careers</NextLink>
              </li>
              <li className="cursor-pointer hover:text-gray-400">
                <NextLink href="/courses">Library</NextLink>
              </li>
              <li className="cursor-pointer hover:text-gray-400">
                <ScrollLink
                  to="ourteam"
                  spy={true}
                  smooth={true}
                  offset={50}
                  className="cursor-pointer"
                >
                  Our Team
                </ScrollLink>
              </li>
            </>
          )}
        </ul>

        {/* Right Section - Conditionally render auth components */}
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <div className="flex items-center border border-zinc-600 rounded-full gap-4 hover:border-cyan-200">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <>
              <div className="text-white hover:text-gray-400">
                <SignInButton />
              </div>
              <button className="px-4 py-2 bg-zinc-200 text-gray-900 rounded hover:bg-gray-400">
                Book a demo
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
