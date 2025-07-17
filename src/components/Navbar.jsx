import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="MAICAT Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-blue-600">maicat</h1>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><a href="#treatment" className="hover:text-blue-500">Treatment</a></li>
          <li><a href="#journey" className="hover:text-blue-500">Journey</a></li>
          <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-blue-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-white shadow animate-fade-in-up">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><a href="#treatment" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Treatment</a></li>
          <li><a href="#journey" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Journey</a></li>
          <li><a href="#testimonials" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
