import React from 'react'
import careersImage from "../../assets/Images/careers.webp"; 

function Careers() {
  return (
    <>

     <div className="flex flex-col md:flex-row w-screen h-screen">
  {/* Left Section */}
  <div className="bg-gradient-to-r from-[#0f2f57] to-[#0f2f57] flex flex-col justify-center text-white p-12 md:w-1/2">
    <h1 className="text-5xl font-serif text-yellow-500 ml-10">Careers</h1>
    <p className="mt-4 ml-10 text-gray-300 text-lg">
      "You don't build a business. You build people, and people build the business."<br />~ Zig Ziglar
    </p>

    <div className="mt-8">
      <h2 className="text-3xl ml-10 font-serif">200+ Employees</h2>
      <hr className="border-gray-500 my-4 w-1/3 ml-10" />
      <h2 className="text-3xl font-serif ml-10">9 Locations</h2>
    </div>

    {/* ✅ Left-aligned Button */}
    <button className="mt-6 ml-10 bg-white text-gray-800 font-semibold rounded-full px-6 py-2 shadow hover:bg-gray-200 transition  mx-auto text-left">
      KNOW MORE
    </button>
  </div>

  {/* Right Section */}
  <div className="md:w-1/2 w-full">
    <img
      src={careersImage}
      alt="Careers"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    </>
  )
}

export default Careers



//mx-auto