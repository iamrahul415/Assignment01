import React, { useState } from "react";
import imgA1 from '../assets/ImageA1.png';
import imgA2 from '../assets/ImageA2.png';
import imgA3 from '../assets/ImageA3.png';
import imgA4 from '../assets/ImageA4.png';
import imgA5 from '../assets/ImageA5.png';
import imgA6 from '../assets/ImageA6.png';


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
    image: imgA1,
  },
  {
    title: "Long Dress",
    brand: "Al Karam",
    price: "₹975.50",
    image: imgA2,
  },
  {
    title: "Full Sweater",
    brand: "Al Karam",
    price: "₹985.50",
    image: imgA3,
  },
  {
    title: "White Dress",
    brand: "Al Karam",
    price: "₹925.50",
    image: imgA4,
  },
  {
    title: "Colorful Dress",
    brand: "Al Karam",
    price: "₹985.50",
    image: imgA5,
  },
  {
    title: "White Shirt",
    brand: "Al Karam",
    price: "₹955.50",
    image: imgA6,
  },
];

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("Men's T-Shirts");

  return (
    <div>
       <section className="bg-white py-16 text-center">
      <h2 className="text-4xl font-serif text-gray-600 mb-4">New Arrivals</h2>
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
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg text-gray-800 font-normal">{item.title}</h3>
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
              <span className="text-lg font-medium text-gray-700">
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
    </div>
  );
};

export default NewArrivals;
