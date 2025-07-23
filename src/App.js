import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import TeamMemberDetail from "./pages/TeamMemberDetail";
import DoctorTeam from "./pages/DoctorTeam";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16">
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/team-member/:slug" element={<TeamMemberDetail />} />
            <Route path="/doctor-team" element={<DoctorTeam />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
