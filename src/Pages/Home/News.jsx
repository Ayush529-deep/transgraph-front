import React from 'react'
import image1 from '../../assets/Images/image1.webp';
import image2 from '../../assets/Images/image2.webp';
import image3 from '../../assets/Images/image3.webp';
import image4 from '../../assets/Images/image4.webp';
import image5 from '../../assets/Images/image5.webp';
import image6 from '../../assets/Images/image6.webp';
import image7 from '../../assets/Images/image7.webp';
import image8 from '../../assets/Images/image8.webp';
import image9 from '../../assets/Images/image9.webp';
import image10 from '../../assets/Images/image10.webp';

function News() {


  let newsItems = [
    {
      id: 1,
      title: 'Equity Outlook for 2025',
      image: image1,
      // description: 'Some description about equity outlook for the coming year.'
    },
    {
      id: 2,
      title: 'Strategies for Drawdown Reduction',
      image: image2,
      // description: 'How to reduce drawdown in long-only equity portfolios.'
    },
    {
      id: 3,
      title: 'Demystifying Myths about Investing',
      image: image3,
      // description: 'Separating fact from fiction in alternative investing.'
    },
    {
      id: 4,
      title: 'Latest Press Release',
      image: image4,
      // description: 'Highlights of the latest press release.'
    },
    {
      id: 5,
      title: 'Market Trends',
      image: image5,
      // description: 'Observing trends in the global market.'
    },
    {
      id: 6,
      title: 'Investment Insights',
      image: image6,
      // description: 'Deep insights for making better investment decisions.'
    },
    {
      id: 7,
      title: 'Modern Portfolio Management',
      image: image7,
      // description: 'How portfolio management is evolving.'
    },
    {
      id: 8,
      title: 'Alternative Assets',
      image: image8,
      // description: 'Why alternatives matter for long term growth.'
    },
    {
      id: 9,
      title: 'Global Market Analysis',
      image: image9,
      // description: 'Reviewing global market dynamics.'
    },
    {
      id: 10,
      title: 'Tech in Investing',
      image: image10,
      // description: 'How technology is shaping the future of investments.'
    },
  ];


  return (
    <>

      <div className="bg-white p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-serif">News & Insights</h2>
          <p className="text-gray-600 mt-2 text-2xl mr-[150px] ">
            Discover our latest press releases, media <br /> features, and thought leadership articles.
          </p>

        </div>

        <br />

        <div className="flex justify-center">
          <button className="bg-blue-950 text-white rounded px-4 py-1 hover:bg-gray-700 ml-[400px]">
            Browse All
          </button>
        </div>

        <div className="mt-6 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="flex space-x-10">
            {newsItems.map((item) => (
              <div key={item.id} className="flex flex-shrink-0 items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-64 object-cover rounded-tl-[40px] rounded-bl-[40px]"
                />
                <div className="max-w-[250px]">
                  <h3 className="text-2xl font-serif text-green-800">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-gray-500 text-sm">
          Disclaimer: The information on this website is for general reasons only and reflects
          opinions, not guidelines, recommendations, or professional advice.
        </div>
      </div>

    </>
  )
}

export default News