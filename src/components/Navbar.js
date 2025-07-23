
// export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";
import contactInfo from '../data/contactInfo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-6 lg:px-16 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="MAICAT Logo" className="w-10 h-10 transition-transform group-hover:rotate-12" />
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide transition-all group-hover:tracking-wider">
            maicat
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-semibold text-base tracking-wide">
          {[{name: "Home", link:"/"}, {name: "Services", link:"/services"}, {name: "Products", link:"/products"}, {name: "Contact", link:"/contact"}, {name: "About Us", link:"/about"}, {name: "Doctor Team", link: "/doctor-team"}].map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="hover:text-blue-500 hover:underline underline-offset-8 transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {/* <li>
            <button
              onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20MAICAT.`, '_blank')}
              className="ml-4 px-5 py-2 bg-green-500 text-white rounded-full font-bold shadow hover:bg-green-600 transition-all duration-300"
            >
              Book Appointment
            </button>
          </li> */}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-blue-700 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 px-6 py-4 text-gray-700 font-medium animate-fade-in">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">
              Services
            </Link>
          </li>
          <li>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">
              Products
            </Link>
          </li>
          <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/doctor-team" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">
              Doctor Team
            </Link>
          </li>
          <li>
            <button
              onClick={() => { setMenuOpen(false); window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20MAICAT.`, '_blank'); }}
              className="w-[200px] px-4 py-2 bg-green-500 text-white rounded-full font-bold shadow hover:bg-green-600 transition-all duration-300 mt-2"
            >
              Book Appointment
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}


// export default Navbar;