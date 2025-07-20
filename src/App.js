import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import BrandLogo from './Components/BrandLogo';
import DealsOfTheMonths from './Components/DealsOfTheMonths';
import NewArrivals from './Components/NewArrivals';
import ProductSpotlight from './Components/ProductSpotlight';
import FeatureSection from './Components/FeatureSection';
import InstagramSection from './Components/InstagramSection';
import Testimonials from './Components/Testimonials';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className=" w-1920px h-auto bg-gray text-white  font-sans">
      {/* Navbar */}
      <Header/>

      {/* Main Grid */}
      <Main/>

      {/* Brand-Logo */}
      <BrandLogo/>

      {/* DealOfTheMonth */}
      <DealsOfTheMonths/>

      {/* New Arrivals */}
      <NewArrivals/>

      {/* Sppotlight */}
      <ProductSpotlight/>

      {/* Feature Section */}
      <FeatureSection/>

      {/* Instagram Section */}
      <InstagramSection/>

      {/* Testimonial Section */}
      <Testimonials/>


      {/* About Section */}
      <AboutUs/>

      {/* Footer */}
      <Footer/>

    </div>
  );
};

export default App;
