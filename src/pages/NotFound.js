import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-blue-700 mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you are looking for does not exist or has been moved.<br />
          Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-900 transition-all duration-300 text-lg"
        >
          Go to Homepage
        </Link>
      </div>
      
    </div>
  );
};

export default NotFound;
