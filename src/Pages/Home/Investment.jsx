import React from 'react';
import liquidAltImage from '../../assets/Images/AE-Area-1.gif';
import illiquidAltImage from '../../assets/Images/AE-Pie-1.gif';
import betaPlusPlusImage from '../../assets/Images/AE-Bar-1.gif';
import moreInfoImage from '../../assets/Images/NEW-Component.webp';

const Investment = () => {
  return (
    <div className="w-full p-8 bg-gray-50  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Introduction Text */}
        <div className="lg:col-span-1">
          <h1 className="text-5xl font-serif text-gray-800">Investment Solutions</h1>
          <p className="mt-6 text-2xl text-gray-800">
            Our investment solutions are designed to generate consistent
            alpha over long time frames and across market cycles. They can be
            classified into 3 different spectrums – Risk, Return and Liquidity.
          </p>
        </div>

        {/* Right Side - All 4 Cards in a 2x2 Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <InvestmentCard
            image={liquidAltImage}
            title="Liquid Alts"
            description="Absolute return strategies targeting consistent monthly or quarterly positive returns with monthly liquidity."
          />
          <InvestmentCard
            image={illiquidAltImage}
            title="Illiquid Alts"
            description="High-yielding investments with consistent returns, rigorous risk management and longer investment horizons."
          />
          <InvestmentCard
            image={betaPlusPlusImage}
            title="Beta++"
            description="Market-correlated strategies with smart security selection (Smart Beta) and Dynamic Risk allocation models."
          />
          <InvestmentCard
            image={moreInfoImage}
            title="Know More about our Investment Solutions"
            description=""
            isLink
          />
        </div>
      </div>
    </div>
  );
};

const InvestmentCard = ({ image, title, description, isLink }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg flex flex-col">
      <img src={image} alt={title} className="w-full rounded-t-2xl" />
      <h2 className="mt-4 text-3xl font-serif text-gray-800">{title}</h2>
      {description && <p className="text-green-800 text-2xl mt-2">{description}</p>}
      <a
        href="#"
        className="mt-4 text-[#19314b] font-semibold flex items-center"
      >
        {isLink ? 'LEARN MORE →' : 'LEARN MORE →'}
      </a>
    </div>
  );
};

export default Investment;

