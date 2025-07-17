import React from "react";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-100 to-cyan-100 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 animate-fade-in-up">Our Healthy Products</h1>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-100">Discover our range of healthy, delicious snacks, desserts, and more—crafted for your wellness journey.</p>
      </section>
      {/* Products Grid */}
      <section className="py-8 px-4 flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product, idx) => (
            <Link to={`/products/${product.id}`} key={product.id} className="block">
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products; 