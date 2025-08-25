import React from "react";
import Navbar from "../Pages/Home/Navbar";
import Footer from '../Pages/Home/Footer';
import invest from "../assets/Images/Investing.webp";

function ContactSection() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="bg-[#16324F] text-center py-48">
        <h1 className="text-white text-3xl md:text-4xl font-serif">
          Let’s Connect
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center py-12 px-6 relative -mt-48">
        {/* Image */}
        <img
          src={invest} // 👈 यहाँ अपनी image का path डालें
          alt="Alpha Alternatives"
          className="w-full md:w-2/3 lg:w-1/2  rounded shadow-lg"
        />

        {/* Company Info */}
        <div className="text-center mt-8">
          <h2 className="text-lg md:text-xl font-bold text-[#16324F]">
            Alpha Alternatives Holdings Private Limited
          </h2>
          <p className="text-gray-700 mt-2">
            34th Floor, Sunshine Tower,<br/>
            Senapati Bapat Marg, Dadar West,<br/>
            400 013, Mumbai, India
          </p>
        </div>
      </div>
         
        
        <div className="text-center mt-8">
          <h2 className="text-lg md:text-xl font-bold text-[#16324F]">
            Media Contact
          </h2>
          <p className="text-gray-700 mt-2">
             media@alt-alpha.com<br/>
            +91 22 6145 8900
          </p>
        </div>
      
      <br/>
      <br/>
      <br/>
      <br/>
         


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ContactSection;
