import React, { useState } from "react";

const categories = [
  "Men's Fashion",
  "Men's T-Shirts",
  "Men's Shirts",
  "Men Accessories",
  "Discount Deals",
];

const products = [
  {
    title: "Shiny Dress",
    brand: "Al Karam",
    price: "₹1095.50",
    image: "./assets/imageA1.png",
  },
  {
    title: "Long Dress",
    brand: "Al Karam",
    price: "₹975.50",
    image: "./assets/imageA2.png",
  },
  {
    title: "Full Sweater",
    brand: "Al Karam",
    price: "₹985.50",
    image: "./assets/imageA3.png",
  },
  {
    title: "White Dress",
    brand: "Al Karam",
    price: "₹925.50",
    image: "./assets/imageA4.png",
  },
  {
    title: "Colorful Dress",
    brand: "Al Karam",
    price: "₹985.50",
    image: "./assets/imageA5.png",
  },
  {
    title: "White Shirt",
    brand: "Al Karam",
    price: "₹955.50",
    image: "./assets/imageA6.png",
  },
];

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("Men's T-Shirts");

  return (
    <section className="bg-white py-16 px-4 md:px-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">New Arrivals</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-md font-medium ${
              activeTab === cat
                ? "bg-black text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 text-left hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.brand}</p>

            {/* Ratings */}
            <div className="flex items-center text-orange-400 mt-2 mb-1">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>

            <p className="text-sm text-gray-400">(4.1k) Customer Reviews</p>

            {/* Price and Availability */}
            <div className="mt-2 flex justify-between items-center text-sm">
              <span className="text-lg font-bold text-gray-800">
                {item.price}
              </span>
              <span className="text-red-500 font-medium">Almost Sold Out</span>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 shadow-lg">
          View More
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
