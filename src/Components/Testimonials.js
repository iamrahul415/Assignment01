import React from "react";
import { FaStar } from "react-icons/fa";

import leftModel from '../assets/img1.png';    
import rightModel from '../assets/img2.png'; 

const testimonials = [
  {
    image: leftModel,
    name: "KAIVANIYA",
    role: "Traveler",
    rating: 5,
    feedback:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
  },
  {
    image: rightModel,
    name: "John W.",
    role: "Photographer",
    rating: 4,
    feedback:
      "Thank you for making it pleasant and most of all hassle free! All the features are great.",
  },
 
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          This Is What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>

      <div className="flex gap-5">
          {testimonials.map((t, idx) => (
            <div className="rounded-xl shadow-lg p-6 max-w-xl mx-auto relative">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-32 h-32 object-cover rounded-md shadow"
                />
                <div>
                  <p className="text-gray-600 mb-4">"{t.feedback}"</p>
                  <div className="flex items-center text-yellow-500 mb-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-800 text-xl">
                    {t.name.toUpperCase()}
                  </h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
