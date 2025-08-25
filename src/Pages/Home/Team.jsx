import React from 'react'
import person1 from '../../assets/Images/person1.webp';
import person2 from '../../assets/Images/person2.webp';
import person3 from '../../assets/Images/person3.webp';
import person4 from '../../assets/Images/person4.webp';
import person5 from '../../assets/Images/person5.webp';
import person6 from '../../assets/Images/person6.webp';
import person7 from '../../assets/Images/person7.webp';
import person8 from '../../assets/Images/person8.webp';



function Team({ id = "team" }) {


    let teamMembers = [
  { name: 'Prashant Kothari', title: 'CEO & CIO at AA, Singapore', image: person1 },
  { name: 'John Doe', title: 'Managing Director', image: person2 },
  { name: 'Jane Smith', title: 'Chief Marketing Officer', image: person3 },
  { name: 'Michael Lee', title: 'Head of Operations', image: person4 },
  { name: 'Sarah Connor', title: 'Product Lead', image: person5 },
  { name: 'David Kim', title: 'Lead Designer', image: person6 },
  { name: 'Sarah Lee', title: 'HR Head', image: person7 },
  { name: 'Kevin Brown', title: 'Head of Development', image: person8 },
];

  return (
    <>

       <div  id={id}  className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-5xl font-serif">Team</h2>
        <div className="text-gray-800 text-1xl max-w-md text-right mt-4 md:mt-0">
          <p className="text-2xl font-serif">
            Our team comprises people from pedigreed backgrounds who operate like entrepreneurs
          </p>
          <button className="bg-gray-600 text-white mr-[300px] px-4 py-1 rounded mt-2">KNOW MORE</button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group rounded-xl overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


    </>
  )
}

export default Team