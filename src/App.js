import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TreatmentSection from './components/TreatmentSection';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        

<TreatmentSection />

        {/* Add more sections like Treatment, Journey here */}
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
