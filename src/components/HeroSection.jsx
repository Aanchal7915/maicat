import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });
    gsap.from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      delay: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
    // Animate background image
    gsap.fromTo(
      ".hero-bg-img",
      { scale: 1.15, opacity: 0.7 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );
    // Animate overlay fade-in
    gsap.fromTo(
      ".hero-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 1.2, delay: 0.3, ease: "power1.out" }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
    >
      {/* HD background image */}
      <img
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
        alt="Health and Wellness"
        className="hero-bg-img absolute inset-0 w-full h-full object-cover object-center z-0 brightness-75 scale-105 transition-transform duration-1000"
        style={{ filter: 'blur(1px)' }}
      />
      {/* Overlay for readability */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-400/30 z-10" />
      <div
        ref={heroRef}
        className="relative z-20 text-center px-4 py-12 max-w-2xl mx-auto animate-fade-in"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg transition-all duration-700">
          Metabolic and Immune Correction Approach to Treatment
        </h1>
        <p className="text-lg md:text-2xl text-blue-100 mb-8 font-medium drop-shadow-md transition-all duration-700">
          Your personalized health journey starts here. Restore, Revive, Reclaim.
        </p>
        <button
          ref={buttonRef}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-cyan-500 hover:to-blue-600 hover:shadow-2xl transition-all duration-300 font-semibold text-lg tracking-wide"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
