import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
// Removed mobile menu states and effects as per user request

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <div className="flex items-center justify-between w-full max-w-7xl pointer-events-auto">
          
          {/* Left: Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-90">
              <img src="/logo.png" alt="FaceHex Logo" className="w-full h-full object-contain filter" />
            </div>
            <span className="font-display font-bold uppercase tracking-widest text-sm text-black opacity-90 group-hover:opacity-100 transition-opacity">FaceHex</span>
          </NavLink>

          {/* Center navigation removed as per request */}

          {/* Right: CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-white text-black border border-transparent rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Try Now</span>
            </button>
            
            {/* Mobile menu toggle removed as per request */}
          </div>

        </div>
      </nav>

      {/* Fullscreen Mobile Overlay removed as per request */}
    </>
  );
};

export default Navbar;
