import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full z-50">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="MAICAT Logo" className="w-15 h-10" />
        {/* <h1 className="text-2xl font-bold text-blue-600">maicat</h1> */}
      </Link>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><a href="#treatment" className="hover:text-blue-500">Treatment</a></li>
        <li><a href="#journey" className="hover:text-blue-500">Journey</a></li>
        <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
