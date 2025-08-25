import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-screen h-screen flex flex-col justify-end ">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row justify-around items-end p-14 bg-[#19314b] text-white">
        <h1 className="text-4xl md:text-8xl font-bold flex-1">We Exist to |</h1>
        <div className="flex-1 space-y-7 mt-5 md:mt-0">
          <p className="text-sm md:text-base">
            ... change the Asset Management industry from being AUM-led and charged
            to being performance-led and charged.
            <br />
            ... be a platform for people and ideas to succeed.

          </p>
          <button className="bg-white text-[#19314b] font-semibold rounded px-4 py-2 hover:bg-gray-100">
            Know More
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75"
      >
        &#10095;
      </button>

      {/* Indicators */}
      {/* <div className="absolute bottom-8 flex justify-center w-full space-x-3">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`cursor-pointer rounded-full w-3 h-3 ${idx === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Slider;

