import React, { useState } from 'react';
import logo from '../../assets/Images/LogoHome.png';
import singaporeFlag from "../../assets/Images/singapore.webp"; 
// import { HashLink } from 'react-router-hash-link';


let Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  let links = [
    { name: 'About Us', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Press Releases', href: '/pressrelease' },
    { name: 'HR Corner', href: '/hr' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Login', href: '/login' },

  ];

  return (

    <nav className="bg-[#19314b] shadow fixed top-0 left-0 w-screen z-50 p-0 m-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:opacity-80"
              >
                {link.name}
              </a>
            ))}

          

           {/* Singapore Flag + Text */}
            <div className="flex items-center space-x-2 pl-4">
              <img
                src={singaporeFlag}
                alt="Singapore Flag"
                className="h-6 w-6 rounded-full"
              />
              <span className="text-white text-sm">AA Singapore</span>
            </div>



          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                {!isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-100 hover:text-gray-300 px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>

  );
};

export default Navbar;
