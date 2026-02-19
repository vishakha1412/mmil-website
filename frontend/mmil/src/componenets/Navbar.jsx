 import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 py-4 shadow-md fixed w-full top-0 z-50 bg-[rgba(13,13,18,1)]">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-green-600 flex items-center">
        <img src="/logo/logo.png" className="w-8 h-8 mr-2" alt="PracAI Logo" />
        PracAI
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="courses" className="hover:text-blue-600">Courses</a></li>
        <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
        <li><a href="#more" className="hover:text-blue-600">More</a></li>
      </ul>

      {/* Login Button (Desktop) */}
      <button className="hidden md:block bg-[rgba(31,210,255,1)] text-white px-4 py-2 rounded-[6px] hover:bg-blue-500 transition">
        Login
      </button>
{/* Mobile Hamburger */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Simple hamburger icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

     
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-[rgba(13,13,18,1)] flex flex-col items-center gap-4 py-6 md:hidden shadow-lg">
          <a href="#home" className="text-white hover:text-blue-600">Home</a>
          <a href="courses" className="text-white hover:text-blue-600">Courses</a>
          <a href="#pricing" className="text-white hover:text-blue-600">Pricing</a>
          <a href="#more" className="text-white hover:text-blue-600">More</a>
          <button className="bg-[rgba(31,210,255,1)] text-white px-6 py-2 rounded-[6px] hover:bg-blue-500 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};
