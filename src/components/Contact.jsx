import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
        alt="Contact"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60 scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-400/30 z-10" />
      <div className="relative z-20 max-w-lg mx-auto text-center p-8 rounded-3xl shadow-2xl bg-white/80 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 drop-shadow-lg">Contact Us</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">Have questions or want to start your journey? Reach out to us!</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 transition" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 transition" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 transition" rows={4}></textarea>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-cyan-500 hover:to-blue-600 hover:shadow-2xl transition-all duration-300 font-semibold text-lg tracking-wide">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
