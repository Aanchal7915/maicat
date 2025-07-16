import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full z-50">
      <h1 className="text-2xl font-bold text-blue-600">maicat</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#treatment" className="hover:text-blue-500">Treatment</a></li>
        <li><a href="#journey" className="hover:text-blue-500">Journey</a></li>
        <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
