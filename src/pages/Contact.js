import React from "react";
import contactInfo from "../data/contactInfo";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | MAICAT</title>
      </Helmet>
      <div className="bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="w-full flex flex-col md:flex-row bg-white/90 shadow-lg rounded-b-3xl overflow-hidden mb-10 animate-fade-in-up">
          <div className="flex-1 p-10 flex flex-col justify-center items-start gap-4">
            <nav className="text-xs text-indigo-500 mb-2 font-semibold tracking-wide">Homepage &gt; Contact Us</nav>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-slate-900 leading-tight">Contact Us</h1>
            <p className="text-slate-600 mb-4 text-lg font-medium">Got a question or concern? Contact us and we’ll be happy to help.</p>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition text-base" onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20MAICAT.`, '_blank')}>Book an Appointment</button>
          </div>
          <div className="flex-1 min-h-[260px] bg-slate-100 flex items-center justify-center p-6">
            <img src="/assets/contact-banner.png" alt="Clinic" className="rounded-2xl shadow-xl w-full h-64 object-cover object-center border-4 border-white" />
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-12 px-4">
          <div className="text-center mb-10">
            <h4 className="text-indigo-600 font-semibold mb-1 tracking-wide uppercase">Let's Get In Touch</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">Meet With Our Professionals</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-lg">Join us for an opportunity to meet with our MAICAT Team of professionals and health experts to understand your problem and get guided as to how to go about with the treatment methodology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-indigo-400 transition-transform duration-300 hover:scale-105">
              <div className="text-3xl mb-2">📍</div>
              <h5 className="font-bold text-indigo-800 mb-1 text-lg">Office Address</h5>
              <p className="text-slate-600 text-base font-medium">{contactInfo.address}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-indigo-400 transition-transform duration-300 hover:scale-105">
              <div className="text-3xl mb-2">✉️</div>
              <h5 className="font-bold text-indigo-800 mb-1 text-lg">Email Address</h5>
              <p className="text-slate-600 text-base font-medium">{contactInfo.email}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-indigo-400 transition-transform duration-300 hover:scale-105">
              <div className="text-3xl mb-2">📞</div>
              <h5 className="font-bold text-indigo-800 mb-1 text-lg">Telephone</h5>
              <p className="text-slate-600 text-base font-medium">{contactInfo.phone}</p>
            </div>
          </div>
        </section>

        {/* Map and Form Section */}
        <section className="py-12 px-4 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex items-center justify-center">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.999999999998!2d77.216721!3d28.644800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b5e4b0b0b1%3A0x1e1b1b1b1b1b1b1b!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="340"
              className="rounded-2xl shadow-xl border-2 border-indigo-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex items-center justify-center">
            <form className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md space-y-5 animate-fade-in-up">
              <h3 className="text-indigo-700 text-2xl font-bold mb-2 text-center">Submit Your Query</h3>
              <input type="text" placeholder="Name*" className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 transition font-medium" required />
              <input type="email" placeholder="Email*" className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 transition font-medium" required />
              <input type="text" placeholder="Mobile No*" className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 transition font-medium" required />
              <input type="text" placeholder="City*" className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 transition font-medium" required />
              <input type="text" placeholder="Treatment You Want*" className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 transition font-medium" required />
              <textarea placeholder="Your Query*" className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 transition font-medium" rows={3} required></textarea>
              <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:scale-105 hover:bg-indigo-700 transition-all duration-300 font-semibold text-lg tracking-wide mt-2" onClick={(e) => {e.preventDefault(); window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20MAICAT.`, '_blank');}}>Book an appointment</button>
            </form>
          </div>
        </section>

        {/* Call to Action Bar */}
        <div className="w-full bg-indigo-900 py-6 flex flex-col md:flex-row items-center justify-between px-6 mt-auto rounded-t-3xl shadow-lg">
          <span className="text-white text-lg font-semibold mb-2 md:mb-0">Want to talk with our doctor or schedule an appointment?</span>
          <div className="flex gap-4">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 px-4 py-2 bg-indigo-700 text-white rounded-lg font-semibold shadow hover:bg-indigo-800 transition"><span>📞</span> {contactInfo.phone}</a>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition" onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20MAICAT.`, '_blank')}>Book an appointment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
