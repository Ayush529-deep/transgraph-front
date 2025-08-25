import React, { useState } from 'react';
import Navbar from '../Pages/Home/Navbar';
import Footer from '../Pages/Home/Footer';
import EnergyRight1 from '../../src/assets/Images/image1.webp';
import EnergyRight2 from '../../src/assets/Images/image2.webp';
import CapitalRight1 from '../../src/assets/Images/image3.webp';
import CapitalRight2 from '../../src/assets/Images/image4.webp';
import SustainabilityRight1 from '../../src/assets/Images/image5.webp';
import SustainabilityRight2 from '../../src/assets/Images/image6.webp';
import AiRight1 from '../../src/assets/Images/image7.webp';
import AiRight2 from '../../src/assets/Images/image8.webp';

const Research = () => {
  const [active, setActive] = useState('energy');

  const leftMenu = [
    { id: 'energy', label: 'Energy & Commodities' },
    { id: 'capital', label: 'Capital Markets' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'ai', label: 'Artificial Intelligence' },
  ];

  const data = {
    energy: [
      {
        title: 'Energy & Commodities',
        description: 'Exploring market dynamics of energy and commodity trends.',
        image: EnergyRight1,
      },
      {
        title: 'Renewables',
        description: 'Future of clean energy and sustainability focus.',
        image: EnergyRight2,
      },
      {
        title: 'Energy & Commodities',
        description: 'Exploring market dynamics of energy and commodity trends.',
        image: EnergyRight1,
      },
      {
        title: 'Renewables',
        description: 'Future of clean energy and sustainability focus.',
        image: EnergyRight2,
      },
    ],
    capital: [
      {
        title: 'Capital Markets',
        description: 'Insights into global capital trends and equity investments.',
        image: CapitalRight1,
      },
      {
        title: 'Private Equity',
        description: 'Exploring returns and risk factors across industries.',
        image: CapitalRight2,
      },
      {
        title: 'Capital Markets',
        description: 'Insights into global capital trends and equity investments.',
        image: CapitalRight1,
      },
      {
        title: 'Private Equity',
        description: 'Exploring returns and risk factors across industries.',
        image: CapitalRight2,
      },
    ],
    sustainability: [
      {
        title: 'Sustainability',
        description: 'Green finance and its role in long term growth.',
        image: SustainabilityRight1,
      },
      {
        title: 'ESG Insights',
        description: 'Environmental, Social and Governance factors explained.',
        image: SustainabilityRight2,
      },
       {
        title: 'Sustainability',
        description: 'Green finance and its role in long term growth.',
        image: SustainabilityRight1,
      },
      {
        title: 'ESG Insights',
        description: 'Environmental, Social and Governance factors explained.',
        image: SustainabilityRight2,
      },
    ],
    ai: [
      {
        title: 'Artificial Intelligence',
        description: 'Impacts and trends of AI across sectors.',
        image: AiRight1,
      },
      {
        title: 'Robotics',
        description: 'Future of automation and robotics technologies.',
        image: AiRight2,
      },
      {
        title: 'Artificial Intelligence',
        description: 'Impacts and trends of AI across sectors.',
        image: AiRight1,
      },
      {
        title: 'Robotics',
        description: 'Future of automation and robotics technologies.',
        image: AiRight2,
      },
       {
        title: 'Artificial Intelligence',
        description: 'Impacts and trends of AI across sectors.',
        image: AiRight1,
      },
      {
        title: 'Robotics',
        description: 'Future of automation and robotics technologies.',
        image: AiRight2,
      },
      {
        title: 'Artificial Intelligence',
        description: 'Impacts and trends of AI across sectors.',
        image: AiRight1,
      },
      {
        title: 'Robotics',
        description: 'Future of automation and robotics technologies.',
        image: AiRight2,
      },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="flex bg-gray-50">
        {/* Left Sidebar */}
        <div className="w-1/5 border-r bg-white p-6 space-y-8 text-gray-700">
          {leftMenu.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer text-lg font-medium transition-all duration-200 ${
                active === item.id
                  ? 'text-blue-700 font-semibold'
                  : 'hover:text-blue-600'
              }`}
            >
              {item.label}
              <span className="float-right">{'>'}</span>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-4/5 p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {leftMenu.find((item) => item.id === active)?.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data[active]?.map((item, index) => (
              <div
                key={index}
                className="relative h-60 rounded-lg overflow-hidden shadow-md group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition flex flex-col justify-center px-4">
                  <h3 className="text-white text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm">{item.description}</p>
                  <span className="text-white text-xl mt-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Research;

















// import React, { useState } from 'react';
// import Navbar from '../Pages/Home/Navbar';
// import Footer from '../Pages/Home/Footer';
// import EnergyRight1 from '../../src/assets/Images/image1.webp';
// import EnergyRight2 from '../../src/assets/Images/image2.webp';
// import CapitalRight1 from '../../src/assets/Images/image3.webp';
// import CapitalRight2 from '../../src/assets/Images/image4.webp';
// import SustainabilityRight1 from '../../src/assets/Images/image5.webp';
// import SustainabilityRight2 from '../../src/assets/Images/image6.webp';
// import AiRight1 from '../../src/assets/Images/image7.webp';
// import AiRight2 from '../../src/assets/Images/image8.webp';


// let Research = () => {
//   let [active, setActive] = useState('Market Insights');

// const leftMenu = ['Market Insights', 'Special Reports', 'Events', 'Podcasts'];



//   let data = {
//     energy: [
//       {
//         title: 'Energy & Commodities',
//         description: 'Exploring market dynamics of energy and commodity trends.',
//         image: EnergyRight1,
//       },
//       {
//         title: 'Renewables',
//         description: 'Future of clean energy and sustainability focus.',
//         image: EnergyRight2,
//       },
//     ],
//     capital: [
//       {
//         title: 'Capital Markets',
//         description: 'Insights into global capital trends and equity investments.',
//         image: CapitalRight1,
//       },
//       {
//         title: 'Private Equity',
//         description: 'Exploring returns and risk factors across industries.',
//         image: CapitalRight2,
//       },
//        {
//         title: 'Capital Markets',
//         description: 'Insights into global capital trends and equity investments.',
//         image: CapitalRight1,
//       },
//       {
//         title: 'Private Equity',
//         description: 'Exploring returns and risk factors across industries.',
//         image: CapitalRight2,
//       },
//     ],
//     sustainability: [
//       {
//         title: 'Sustainability',
//         description: 'Green finance and its role in long term growth.',
//         image: SustainabilityRight1,
//       },
//       {
//         title: 'ESG Insights',
//         description: 'Environmental, Social and Governance factors explained.',
//         image: SustainabilityRight2,
//       },
//     ],
//     ai: [
//       {
//         title: 'Artificial Intelligence',
//         description: 'Impacts and trends of AI across sectors.',
//         image: AiRight1,
//       },
//       {
//         title: 'Robotics',
//         description: 'Future of automation and robotics technologies.',
//         image: AiRight2,
//       },
//     ],
//   };
  
//   let categories = [
//     { id: 'energy', label: 'Energy & Commodities' },
//     { id: 'capital', label: 'Capital Markets' },
//     { id: 'sustainability', label: 'Sustainability' },
//     { id: 'ai', label: 'Artificial Intelligence' },
//   ];




//   return (
//     <>
//       <Navbar />

//       <div className="flex min-h-screen bg-gray-50">
//         {/* Left Sidebar */}
//         <div className="w-1/5 border-r bg-white p-6 space-y-10 text-gray-700">
//           {leftMenu.map((item) => (
//             <div
//               key={item}
//               onClick={() => setActive(item)}
//               className={`cursor-pointer text-lg font-medium hover:text-blue-600 ${
//                 active === item ? 'text-blue-700 font-semibold' : ''
//               }`}
//             >
//               {item} <span className="float-right">{'>'}</span>
//             </div>
//           ))}
//         </div>

//         {/* Right Grid */}
//         <div className="w-4/5 pt-24 pr-10 pl-10 pb-0">
//           <h2 className="text-2xl font-bold mb-6 text-gray-800">{active}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//             {categories.map((item) => (
//               <div
//                 key={item.id}
//                 className="relative h-60 rounded-lg overflow-hidden shadow-md group cursor-pointer"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition flex flex-col justify-center px-4">
//                   <h3 className="text-white text-lg font-bold">{item.title}</h3>
//                   <span className="text-white text-xl mt-2">→</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Research;








// const categories = [
//   { id: 'energy', title: 'Energy & Commodities', image: EnergyRight1 },
//   { id: 'capital', title: 'Capital Markets', image: CapitalRight1 },
//   { id: 'sustainability', title: 'Sustainability', image: SustainabilityRight1 },
//   { id: 'ai', title: 'Artificial Intelligence', image: AiRight1 },
//   { id: 'economy', title: 'Economy', image: CapitalRight2 },
//   { id: 'trade', title: 'Global Trade', image: EnergyRight2 },
//   { id: 'tech', title: 'Technology & Innovation', image: SustainabilityRight2 },
//   { id: 'auto', title: 'Automotive Industry Trends', image: AiRight2 },
// ];

// const leftMenu = ['Market Insights', 'Special Reports', 'Events', 'Podcasts'];

// const Research = () => {
//   const [active, setActive] = useState('Market Insights');













// import React, { useState } from 'react';
// import EnergyRight1 from '../../src/assets/Images/image1.webp';
// import EnergyRight2 from '../../src/assets/Images/image1.webp';
// import CapitalRight1 from '../../src/assets/Images/image1.webp';
// import CapitalRight2 from '../../src/assets/Images/image1.webp';
// import SustainabilityRight1 from '../../src/assets/Images/image1.webp';
// import SustainabilityRight2 from '../../src/assets/Images/image1.webp';
// import AiRight1 from '../../src/assets/Images/image1.webp';
// import AiRight2 from '../../src/assets/Images/image1.webp';
// import Footer from '../Pages/Home/Footer';
// import Navbar from '../Pages/Home/Navbar';

// let Research = () => {
//   let [activeCategory, setActiveCategory] = useState('energy');

//   let data = {
//     energy: [
//       {
//         title: 'Energy & Commodities',
//         description: 'Exploring market dynamics of energy and commodity trends.',
//         image: EnergyRight1,
//       },
//       {
//         title: 'Renewables',
//         description: 'Future of clean energy and sustainability focus.',
//         image: EnergyRight2,
//       },
//     ],
//     capital: [
//       {
//         title: 'Capital Markets',
//         description: 'Insights into global capital trends and equity investments.',
//         image: CapitalRight1,
//       },
//       {
//         title: 'Private Equity',
//         description: 'Exploring returns and risk factors across industries.',
//         image: CapitalRight2,
//       },
//        {
//         title: 'Capital Markets',
//         description: 'Insights into global capital trends and equity investments.',
//         image: CapitalRight1,
//       },
//       {
//         title: 'Private Equity',
//         description: 'Exploring returns and risk factors across industries.',
//         image: CapitalRight2,
//       },
//     ],
//     sustainability: [
//       {
//         title: 'Sustainability',
//         description: 'Green finance and its role in long term growth.',
//         image: SustainabilityRight1,
//       },
//       {
//         title: 'ESG Insights',
//         description: 'Environmental, Social and Governance factors explained.',
//         image: SustainabilityRight2,
//       },
//     ],
//     ai: [
//       {
//         title: 'Artificial Intelligence',
//         description: 'Impacts and trends of AI across sectors.',
//         image: AiRight1,
//       },
//       {
//         title: 'Robotics',
//         description: 'Future of automation and robotics technologies.',
//         image: AiRight2,
//       },
//     ],
//   };
  
//   let menuItems = [
//     { id: 'energy', label: 'Energy & Commodities' },
//     { id: 'capital', label: 'Capital Markets' },
//     { id: 'sustainability', label: 'Sustainability' },
//     { id: 'ai', label: 'Artificial Intelligence' },
//   ];

//   return (

//     <>

//     <Navbar/>
    
//     <div className="flex flex-col md:flex-row w-full">
//       {/* Left Side Menu (Only Text) */}
//       <div className="md:w-1/4 p-4 space-y-8">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => setActiveCategory(item.id)}
//             className={`cursor-pointer p-3 rounded-lg text-lg 
//             ${activeCategory === item.id 
//               ? 'bg-gray-300 font-bold text-gray-800' 
//               : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
//           >
//             {item.label}
//           </div>
//         ))}
//       </div>

//       {/* Right Side Content */}
//       <div className="md:w-3/4 p-2 space-y-64 grid grid-cols-1 sm:grid-cols-4 gap-6">
//         {data[activeCategory]?.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="h-40 w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl font-bold mt-3">{item.title}</h3>
//             <p className="text-gray-600 mt-1">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>

//     <Footer/>

//     </>
//   );
// };

// export default Research;


















// import React from 'react'
// import Navbar from '../Pages/Home/Navbar'
// import Footer from '../Pages/Home/Footer'

// function Research() {
//   return (
//     <>

//     <Navbar/>

//     <Footer/>

//     </>
//   )
// }

// export default Research