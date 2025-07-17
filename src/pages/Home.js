import React from "react";
import HeroSection from "../components/HeroSection";
import HealthJourneySection from "../components/HealthJourneySection";
import About from "../components/About";
import TreatmentSection from "../components/TreatmentSection";
import Journey from "../components/Journey";
import TestimonialsSection from "../components/TestimonialsSection";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <HealthJourneySection />
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
        <TestimonialsSection />
      </div>
      <div className="fade-section opacity-0 translate-y-8 transition-all duration-1000">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
