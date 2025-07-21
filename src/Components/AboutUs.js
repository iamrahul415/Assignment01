import React from 'react';
import leftModel from '../assets/image 2.png';  
import rightModel from '../assets/image 3.png'; 

const AboutUs = () => {
  return (
    <section className="w-full bg-white text-gray-800 py-16 px-4 text-center relative">
      <div className="mx-auto relative z-10">
        <h2 className="text-4xl text-gray-800 font-serif mb-6">Learn About Us</h2>
        <p className="mb-4 text-gray-400">We are Coracol.<br />Not just a brand — a statement.<br />A celebration of contrast, simplicity, and timeless design.</p>
        <p className="mb-4 text-gray-400">In a world bursting with noise and colors, we chose the silence of black and white. Why?<br />Because style doesn’t need to be loud. It needs to speak clearly.</p>
        <p className="mb-4 text-gray-400">Our journey began with a simple question:<br />What if fashion could be bold without being loud?<br />That question became our mission<br />to craft everyday essentials that are effortlessly<br />stylish, confidently minimal, and universally versatile.</p>
        <p className="mb-4 text-gray-400">We believe fashion isn’t about trends.<br />It’s about identity. Intention. And impact.</p>
        <p className="mb-6 text-gray-400">Welcome to Coracol.<br />Where contrast isn’t just in color — it’s in attitude.</p>
        <button className="bg-black text-white px-8 py-3 rounded-md shadow hover:bg-gray-900 transition">
            Click for Collaboration
          </button>
      </div>

      {/* Left Model */}
      <img
        src={leftModel}
        alt="Left Model"
        className="hidden md:block absolute bottom-0 mr-10 h-[500px] object-cover z-1 mb-20 box-shadow"
      />

      {/* Right Model */}
      <img
        src={rightModel}
        alt="Right Model"
        className="hidden md:block absolute bottom-0 right-0 h-[500px] object-contain z-0 mb-20"
      />
    </section>
  );
};

export default AboutUs;
