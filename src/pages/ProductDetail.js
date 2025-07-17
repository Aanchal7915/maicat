import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  if (!product) return <div className="text-center py-20 text-xl">Product not found.</div>;
  const similarProducts = productsData.filter((p) => product.similar.includes(p.id));

  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleIncrease = () => setQuantity((q) => q + 1);

  return (
    <div className="bg-blue-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden animate-fade-in-up">
        {/* Product Image */}
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 p-8">
          <img src={product.image} alt={product.name} className="rounded-2xl shadow-lg w-full max-w-xs object-cover object-center" />
        </div>
        {/* Product Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <span className="text-xs text-blue-600 font-semibold mb-2 uppercase tracking-wide">{product.category}</span>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gray-400 line-through text-lg">₹{product.originalPrice.toLocaleString()}</span>
            <span className="text-blue-900 font-bold text-2xl">₹{product.salePrice.toLocaleString()}</span>
            {product.onSale && <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">Sale!</span>}
          </div>
          <div className="mb-4 text-gray-700 text-base whitespace-pre-line">{product.description}</div>
          <div className="mb-6 text-sm text-gray-500">Weight: <span className="font-semibold text-blue-800">{product.weight}</span></div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-semibold text-gray-700">Quantity:</span>
            <button onClick={handleDecrease} className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center hover:bg-blue-200 transition">-</button>
            <span className="w-8 text-center font-semibold text-lg">{quantity}</span>
            <button onClick={handleIncrease} className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center hover:bg-blue-200 transition">+</button>
          </div>
          <button className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition w-full md:w-auto">Add {quantity} to cart</button>
        </div>
      </div>
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-xl font-bold text-blue-800 mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {similarProducts.map((sp) => (
              <Link to={`/products/${sp.id}`} key={sp.id} className="block">
                <ProductCard {...sp} />
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="max-w-5xl mx-auto mt-8 text-center">
        <Link to="/products" className="text-blue-700 hover:underline font-semibold">&larr; Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetail; 