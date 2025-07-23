import React from "react";
import servicesData from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | MAICAT</title>
      </Helmet>
      <div className="bg-blue-50 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-100 to-cyan-100 py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 animate-fade-in-up">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-100">Explore our range of advanced, evidence-based treatments and holistic care options designed to help you restore, revive, and reclaim your health.</p>
        </section>
        {/* Services Grid */}
        <section className="py-12 px-4 flex-1">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Link to={`/services/${service.id}`} key={service.id} className="block">
                <ServiceCard {...service} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services; 