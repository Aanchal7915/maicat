import React from "react";
import  {Helmet} from "react-helmet"
import HeroSection from "../components/HeroSection";
import MaicatModules from "../components/MaicatModules";
import HealthJourneySection from "../components/HealthJourneySection";
import Testimonials from "../components/Testimonial";
import HowItWork from "../components/HowItWork";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>MAICAT - The Treatment of Stopping Medicine</title>
      </Helmet>
      <div className="space-y-0">
        <HeroSection />
        <MaicatModules />
        <HealthJourneySection />
        <HowItWork/>
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
