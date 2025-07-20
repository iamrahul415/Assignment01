import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import BrandLogo from "./Components/BrandLogo";
import DealsOfTheMonths from "./Components/DealsOfTheMonths";
import NewArrivals from "./Components/NewArrivals";
import ProductSpotlight from "./Components/ProductSpotlight";
import FeatureSection from "./Components/FeatureSection";
import InstagramSection from "./Components/InstagramSection";
import Testimonials from "./Components/Testimonials";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col items-center w-[100vw] overflow-hidden justify-center h-auto bg-gray text-white font-sans">
      <div className="max-w-[1080px]">
        {/* Header */}
        <Header />

        {/* Main Grid */}
        <Main />
      </div>

      {/* Brand-Logo */}
      <BrandLogo />

      {/* DealOfTheMonth */}
      <DealsOfTheMonths />

      <div className="flex flex-col justify-center items-center max-w-[1080px]">
        {/* New Arrivals */}
        <NewArrivals />

        </div>

        <div className="w-full">
          {/* Spotlight */}
        <ProductSpotlight />
        </div>

        <div className="flex flex-col justify-center items-center max-w-[1080px]">

        {/* Feature Section */}
        <FeatureSection />

        {/* Instagram Section */}
        <InstagramSection />

        {/* Testimonial Section */}
        <Testimonials />

        {/* About Section */}
        <AboutUs />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
