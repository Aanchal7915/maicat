import React from "react";
import contactInfo from "../data/contactInfo";

const Contact = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row bg-white">
        <div className="flex-1 p-10 flex flex-col justify-center">
          <nav className="text-xs text-blue-600 mb-2">Homepage &gt; Contact Us</nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-900">Contact Us</h1>
          <p className="text-gray-600 mb-4">Got a question or concern? Contact us and we’ll be happy to help.</p>
          <button className="px-5 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition">Book an Appointment</button>
        </div>
        <div className="flex-1 min-h-[260px] bg-gray-100 flex items-center justify-center p-6">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Clinic" className="rounded-2xl shadow-lg w-full h-64 object-cover object-center" />
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="text-center mb-8">
          <h4 className="text-blue-700 font-semibold mb-1">Lets Get In Touch</h4>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Meet With Our Professionals</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Join us for an opportunity to meet with our MAICAT Team of professionals and health experts to understand your problem and get guided as to how to go about with the treatment methodology.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="flex-1 max-w-xs bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-400 transition-transform duration-300 hover:scale-105">
            <div className="text-3xl mb-2">📍</div>
            <h5 className="font-bold text-blue-800 mb-1">Office Address</h5>
            <p className="text-gray-600 text-sm">{contactInfo.address}</p>
          </div>
          <div className="flex-1 max-w-xs bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-400 transition-transform duration-300 hover:scale-105">
            <div className="text-3xl mb-2">✉️</div>
            <h5 className="font-bold text-blue-800 mb-1">Email Address</h5>
            <p className="text-gray-600 text-sm">{contactInfo.email}</p>
          </div>
          <div className="flex-1 max-w-xs bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-400 transition-transform duration-300 hover:scale-105">
            <div className="text-3xl mb-2">📞</div>
            <h5 className="font-bold text-blue-800 mb-1">Telephone</h5>
            <p className="text-gray-600 text-sm">{contactInfo.phone}</p>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-12 px-4 bg-blue-50 flex flex-col md:flex-row gap-8 max-w-6xl mx-auto w-full">
        <div className="flex-1 flex items-center justify-center">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.999999999998!2d77.216721!3d28.644800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b5e4b0b0b1%3A0x1e1b1b1b1b1b1b1b!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            className="rounded-xl shadow-lg border-2 border-blue-100"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <form className="bg-blue-900 rounded-2xl shadow-2xl p-8 w-full max-w-md space-y-4 animate-fade-in-up">
            <h3 className="text-white text-xl font-bold mb-2 text-center">Submit Your Query</h3>
            <input type="text" placeholder="Name*" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 transition" required />
            <input type="email" placeholder="Email*" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 transition" required />
            <input type="text" placeholder="Mobile No*" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 transition" required />
            <input type="text" placeholder="City*" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 transition" required />
            <input type="text" placeholder="Treatment You Want*" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 transition" required />
            <textarea placeholder="Your Query*" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 transition" rows={3} required></textarea>
            <button type="submit" className="w-full py-3 bg-green-500 text-white rounded-full shadow-lg hover:scale-105 hover:bg-green-600 transition-all duration-300 font-semibold text-lg tracking-wide mt-2">Book an appointment</button>
        </form>
      </div>
    </section>

      {/* Call to Action Bar */}
      <div className="w-full bg-blue-900 py-6 flex flex-col md:flex-row items-center justify-between px-6 mt-auto">
        <span className="text-white text-lg font-semibold mb-2 md:mb-0">Want to talk with our doctor or schedule an appointment ?</span>
        <div className="flex gap-4">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition"><span>📞</span> {contactInfo.phone}</a>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition">Book an appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
