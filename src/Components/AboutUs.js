import React from 'react';
import leftModel from '../assets/image1.png';    
import rightModel from '../assets/image4.png'; 

const AboutUs = () => {
  return (
    <section className="bg-slate-300 text-white py-16 px-4 text-center relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-6">Learn About Us</h2>
        <p className="mb-4">We are Coracol.<br />Not just a brand — a statement.<br />A celebration of contrast, simplicity, and timeless design.</p>
        <p className="mb-4">In a world bursting with noise and colors, we chose the silence of black and white. Why?<br />Because style doesn’t need to be loud. It needs to speak clearly.</p>
        <p className="mb-4">Our journey began with a simple question:<br />What if fashion could be bold without being loud?<br />That question became our mission<br />to craft everyday essentials that are effortlessly<br />stylish, confidently minimal, and universally versatile.</p>
        <p className="mb-4">We believe fashion isn’t about trends.<br />It’s about identity. Intention. And impact.</p>
        <p className="mb-6">Welcome to Coracol.<br />Where contrast isn’t just in color — it’s in attitude.</p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Click for Collaboration
        </button>
      </div>

      {/* Left Model */}
      <img
        src={leftModel}
        alt="Left Model"
        className="hidden md:block absolute bottom-0 left-0 h-[500px] object-contain z-0"
      />

      {/* Right Model */}
      <img
        src={rightModel}
        alt="Right Model"
        className="hidden md:block absolute bottom-0 right-0 h-[500px] object-contain z-0"
      />
    </section>
  );
};

export default AboutUs;
