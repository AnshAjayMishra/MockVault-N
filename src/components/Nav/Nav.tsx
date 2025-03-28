import React from "react";
import logo from "../../../public/image/logo.png"
import Image from "next/image";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black font-[Aileron]  px-8 py-6 shadow-md space-y-3">
      <div className="flex items-center space-x-3">
        <Image src={logo} alt="logo" width={22} height={22} className="space-x-2 "></Image>
       
        <h1 className="text-lg font-bold text-white">MockVault</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-12 text-white">
        <li className="cursor-pointer hover:text-gray-400">Library</li>
        <li className="cursor-pointer hover:text-gray-400">Signal AI</li>
        <li className="cursor-pointer hover:text-gray-400">About Us</li>
        <li className="cursor-pointer hover:text-gray-400">Careers</li>
      </ul>

      {/* Sign-in and Button Section */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-400">Sign in</button>
        <button className="px-4 py-2  bg-orange-400 text-black rounded hover:bg-gray-400">
          Book a demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
