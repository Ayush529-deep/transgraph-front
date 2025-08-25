import React, { useState, useEffect } from "react";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Home/Footer";

const Hr = () => {
  // Slides data
  const slides = [
    {
      title: "- V. Sridhar, Sector Manager, Commodities & Ingredients, Cadbury India Ltd.",
      desc1:
        "This is to state our appreciation for Transgraph for continuously delivering on its mandate to provide updated and insightful consulting services in the area of commodities and ingredients. I would also like to thank your team that is alwaysin touch with buyers and feeds in relevant information that has been many times  useful in decision making. In nutshell, the engagement with Transgraph has been  enriching.",
    //   desc2:
        // "Our fund managers are long-term partners, dedicated to performance and creating lasting value for sustained success.",
    },
    {
      title: "- Scott Yarwood, Sr. Regional Sales Manager, ADM Trading (UK) Ltd.",
      desc1:
        " I am writing to extend my thanks for the research and price forecasting services provided to us on a daily basis by Transgraph. The reports and information whether they are emailed to us daily or sourced via your website portal, are a consistent  and reliable source of quality information. Our industry is one where information and its dissemination can help in differentiating between suppliers.",
    //   desc2:
        // "Our team ensures compliance, reporting, and operational excellence at all times.",
    },
    {
      title: "- S Sivakumar, CEO, Agri Business, ITC Limited",
      desc1:
        " By helping simulate the risk scenarios beforehand, TransRisk has added immense value to our trading decision making process at the operating level. The scenarios  are comprehensive because one is able to view the basis and rollover risks associatedwith the hedged positions too. TransRisk also serves as good Dashboard for the top  management, as it gives exposures, P&L, associated risk, limits all at one place.",
    //   desc2:
        // "Together, we build stronger foundations for long-term growth.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="flex-grow flex items-center justify-center px-4 mt-36 mb-14 transition-all duration-500">
        <div className="bg-green-800 text-white p-10 md:p-16   rounded-bl-[120px] rounded-tr-[120px]   max-w-4xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-6 text-center">
            “{slides[current].title}”
          </h2>
          <p className="text-lg italic leading-relaxed text-center mb-4">
            {slides[current].desc1}
          </p>
          <p className="text-lg italic leading-relaxed text-center">
            {slides[current].desc2}
          </p>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-white"
                    : "border border-white hover:bg-white/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hr;
