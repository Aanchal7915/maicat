// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import contactInfo from '../data/contactInfo';

// const HeroSection = () => {
//   const heroRef = useRef();
//   const buttonRef = useRef();

//   useEffect(() => {
//     gsap.from(heroRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1.5,
//       ease: "power3.out",
//     });
//     gsap.from(buttonRef.current, {
//       scale: 0.8,
//       opacity: 0,
//       delay: 1,
//       duration: 0.8,
//       ease: "back.out(1.7)",
//     });
//     // Animate background image
//     gsap.fromTo(
//       ".hero-bg-img",
//       { scale: 1.15, opacity: 0.7 },
//       { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
//     );
//     // Animate overlay fade-in
//     gsap.fromTo(
//       ".hero-overlay",
//       { opacity: 0 },
//       { opacity: 1, duration: 1.2, delay: 0.3, ease: "power1.out" }
//     );
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
//     >
//       {/* HD background image */}
//       <img
//         src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1500&q=80"
//         alt="Root-cause Health Consultation"
//         className="hero-bg-img absolute inset-0 w-full h-full object-cover object-center z-0 brightness-75 scale-105 transition-transform duration-1000"
//         style={{ filter: 'blur(1px)' }}
//       />
//       {/* Overlay for readability */}
//       <div className="hero-overlay absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-400/30 z-10" />
//       <div
//         ref={heroRef}
//         className="relative z-20 text-center px-4 py-12 max-w-2xl mx-auto animate-fade-in"
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg transition-all duration-700">
//           Root-Cause, Medicine-Less Treatment for Lasting Health
//         </h1>
//         <p className="text-lg md:text-2xl text-blue-100 mb-8 font-medium drop-shadow-md transition-all duration-700">
//           Personalized metabolic & immune correction. Restore, Revive, Reclaim your health with MAICAT.
//         </p>
//         <button
//           ref={buttonRef}
//           className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-blue-500 hover:to-green-600 hover:shadow-2xl transition-all duration-300 font-semibold text-lg tracking-wide mb-2"
//           onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20MAICAT.`, '_blank')}
//         >
//           Book Appointment
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";
import contactInfo from "../data/contactInfo";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-24 px-6 md:px-16"
      style={{
        backgroundImage: `url('/assets/upscalemedia-transformed.png')`,
      }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto text-white">
        {/* Text Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
          MAICAT- Metabolic And Immune <br /> Correction Approach to Treatment
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl drop-shadow-md">
          The Science of Stopping Medicine
          </p>
          <div className="space-x-4">
            <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-300"
            onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20MAICAT.`, '_blank')}
            >
              Book Appointment
            </button>
            <Link to="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-100 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <img
            src="/assets/vipul-profile-pic.png"
            alt="Doctor Illustration"
            className="max-w-md w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
