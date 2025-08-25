import React from 'react'
import CountUp from 'react-countup';

function Product() {

    let stats = [
  { label: 'Founded', value: 2013,  lineHeight: 'h-56' },
  { label: 'Partners', value: 18, lineHeight: 'h-80' },
  { label: 'Products', value: 12, lineHeight: 'h-96' },
  { label: 'Investors', value: 550,  lineHeight: 'h-[480px]', suffix: '+' },
];

  return (
    <>

     <div className="bg-[#1C604F] text-white min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-5xl font-serif text-left w-full text-yellow-200 ml-[300px]">It wasn’t built in a day</h1>
      <div className="flex justify-around w-full max-w-5xl items-end">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-start relative">
            {/* Vertical Line */}
            <div className={`w-[2px] bg-white ${stat.lineHeight}`} />
            {/* Label */}
            <span className="text-white text-sm font-bold absolute left-4 top-[-1.5rem]">
              {stat.label.toUpperCase()}
            </span>
            {/* Number */}
            <span className="text-5xl font-bold mt-4 pl-4">
              <CountUp end={stat.value} duration={8.5} enableScrollSpy />
              {stat.suffix}
            </span>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default Product