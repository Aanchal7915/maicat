import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
