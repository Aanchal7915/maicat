import React from "react";
import contactInfo from "../data/contactInfo";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-8 pb-2 px-4 md:px-12 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
        {/* Logo and Description */}
        <div className="flex-1 min-w-[180px] flex flex-col items-start mb-6 md:mb-0">
          <img src="/logo.png" alt="MAICAT Logo" className="w-16 h-16 mb-2" />
          <span className="font-bold text-blue-800 text-lg mb-1">MAICAT</span>
          <p className="text-sm text-gray-600 max-w-xs">MAICAT is the clinic which offers medical treatments to stop medication by removing the root cause of the diseases.</p>
        </div>
        {/* Useful Links */}
        <div className="flex-1 min-w-[150px] mb-6 md:mb-0">
          <h4 className="font-semibold text-blue-800 mb-2">Useful Links</h4>
          <ul className="space-y-1 text-sm">
            <li><button type="button" className="hover:text-blue-600 transition bg-transparent p-0 m-0 border-none cursor-pointer">Home</button></li>
            <li><button type="button" className="hover:text-blue-600 transition bg-transparent p-0 m-0 border-none cursor-pointer">Services</button></li>
            <li><button type="button" className="hover:text-blue-600 transition bg-transparent p-0 m-0 border-none cursor-pointer">Refund & Returns</button></li>
            <li><button type="button" className="hover:text-blue-600 transition bg-transparent p-0 m-0 border-none cursor-pointer">Terms and Conditions</button></li>
            <li><button type="button" className="hover:text-blue-600 transition bg-transparent p-0 m-0 border-none cursor-pointer">Privacy Policy</button></li>
            <li><button type="button" className="hover:text-blue-600 transition bg-transparent p-0 m-0 border-none cursor-pointer">Blogs</button></li>
          </ul>
        </div>
        {/* Information */}
        <div className="flex-1 min-w-[200px] mb-6 md:mb-0">
          <h4 className="font-semibold text-blue-800 mb-2">Information</h4>
          <div className="text-xs text-gray-500 mb-2">Booking Open Hours: 9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><span className="text-blue-600">✉️</span> <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600 transition">{contactInfo.email}</a></li>
            <li className="flex items-center gap-2"><span className="text-blue-600">📞</span> <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-600 transition">{contactInfo.phone}</a></li>
            <li className="flex items-center gap-2"><span className="text-blue-600">📍</span> <span>{contactInfo.address}</span></li>
          </ul>
        </div>
        {/* Social & CTA */}
        <div className="flex-1 min-w-[180px] flex flex-col items-start md:pl-2">
          <h4 className="font-semibold text-blue-800 mb-2">Follow Us</h4>
          <div className="flex gap-3 mb-4">
            <a href="https://www.facebook.com/maicat.org.health" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 text-xl bg-transparent p-0 m-0 border-none cursor-pointer"><FaFacebook /></a>
            <a href="https://www.instagram.com/maicat.org.health" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 text-xl bg-transparent p-0 m-0 border-none cursor-pointer"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/UCEcuwgI4xJ1WP2EB5UZthpQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 text-xl bg-transparent p-0 m-0 border-none cursor-pointer"><FaYoutube /></a>
          </div>
          <button className="px-4 py-2 bg-blue-900 text-white rounded shadow hover:bg-blue-700 transition text-sm font-semibold" onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20MAICAT.`, '_blank')}>Book an appointment now</button>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-6 pt-2 text-xs text-gray-500 text-center">Copyright © 2024 MAICAT Health.</div>
    </footer>
  );
};

export default Footer;
