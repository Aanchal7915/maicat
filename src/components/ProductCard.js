import React from "react";

const ProductCard = ({ category, name, image, originalPrice, salePrice, onSale }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl group animate-fade-in-up max-w-xs mx-auto relative">
      {onSale && (
        <span className="absolute top-3 right-3 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full z-20">Sale!</span>
      )}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="flex-1 flex flex-col p-5">
        <span className="text-xs text-gray-500 mb-1">{category}</span>
        <h3 className="text-base font-bold text-blue-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300 uppercase">{name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-400 line-through text-sm">₹{originalPrice.toLocaleString()}</span>
          <span className="text-blue-900 font-bold text-lg">₹{salePrice.toLocaleString()}</span>
        </div>
        <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded font-semibold shadow hover:bg-blue-700 transition text-sm">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard; 