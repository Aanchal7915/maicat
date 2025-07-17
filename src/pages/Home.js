import React from "react";
import HeroSection from "../components/HeroSection";
import MaicatModules from "../components/MaicatModules";
import HealthJourneySection from "../components/HealthJourneySection";


const Home = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <MaicatModules />
      <HealthJourneySection />
    </div>
  );
};

export default Home;
