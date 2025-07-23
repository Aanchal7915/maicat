import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import TreatmentSection from "./TreatmentSection";
import Journey from "./Journey";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

// Simple scroll fade-in effect
const useScrollFadeIn = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");
    const onScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("opacity-100", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};

const HomePage = () => {
  useScrollFadeIn();
  return (
    <div className="space-y-0">
      <HeroSection />
      <div className="fade-section opacity-0 translate-y-8 transition-all duration-1000">
        <About />
      </div>
      <div className="fade-section opacity-0 translate-y-8 transition-all duration-1000">
        <TreatmentSection />
      </div>
      <div className="fade-section opacity-0 translate-y-8 transition-all duration-1000">
        <Journey />
      </div>
      <div className="fade-section opacity-0 translate-y-8 transition-all duration-1000">
        <Testimonials />
      </div>
      <div className="fade-section opacity-0 translate-y-8 transition-all duration-1000">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage; 