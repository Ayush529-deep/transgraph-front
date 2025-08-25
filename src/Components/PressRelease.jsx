import React, { useState } from "react";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Home/Footer";
import PrivateCredit from "../../src/assets/Images/Private credit.webp";
import FundImg from "../../src/assets/Images/Closure Raised.webp";
import InfraImg from "../../src/assets/Images/Fund Closed.webp";
import CreditImg from "../../src/assets/Images/Fund Closure.webp";
import TrendImg from "../../src/assets/Images/Trends.webp";
import EcoImg from "../../src/assets/Images/Economy.webp";
import PortImg from "../../src/assets/Images/portfolio.webp";
import RiskImg from "../../src/assets/Images/Risk.webp";
import LongImg from "../../src/assets/Images/Longterm.webp";
import IntervalImg from "../../src/assets/Images/Interval.webp";
import RouteImg from "../../src/assets/Images/route.webp";



// Dummy Data
const releases = [
  {
    id: 1,
    date: "26",
    month: "May",
    // title: "A Report on India’s Private Credit Market",
    title:
      "India’s private credit market: A quiet revolution reshaping corporate financing",
    image: PrivateCredit,
    year: 2025,
  },
  {
    id: 2,
    date: "17",
    month: "Apr",
    // title: "Structured Credit Opportunities Fund Closure Announcement",
    title:
      "Final close of Structured Credit Opportunities Fund with INR 5,500+ crores",
    image: FundImg,
    year: 2025,
  },
  {
    id: 3,
    date: "18",
    month: "Nov",
    // title: "Alpha's Maiden Infrastructure Fund Closed",
    title: "Successful closure of maiden infra fund",
    image: InfraImg,
    year: 2024,
  },
  {
    id: 4,
    date: "05",
    month: "May",
    // title: "Alpha's Structured Credit Fund Closure",
    title: "Structured credit fund officially closed",
    image: CreditImg,
    year: 2023,
  },
  {
    id: 5,
    date: "4",
    month: "Apr",
    // title: "Structured Credit Opportunities Fund Closure Announcement",
    title:
      "Equity Outlook for 2025",
    image: TrendImg,
    year: 2025,
  },
  {
    id: 6,
    date: "4",
    month: "Apr",
    // title: "Structured Credit Opportunities Fund Closure Announcement",
    title:
      "Strategies for Drawdown Reduction in Long-Only Equity Portfolios",
    image: EcoImg,
    year: 2025,
  },
   {
    id: 7,
    date: "12",
    month: "Dec",
    // title: "Alpha's Maiden Infrastructure Fund Closed",
    title: "Why InvITs should be part of your investment portfolio",
    image: PortImg,
    year: 2024,
  },
  {
    id: 8,
    date: "21",
    month: "April",
    // title: "Alpha's Maiden Infrastructure Fund Closed",
    title: "Role of Risk, Liquidity and Return in Investing",
    image: RiskImg,
    year: 2024,
  },
  {
    id: 9,
    date: "9",
    month: "April",
    // title: "Alpha's Maiden Infrastructure Fund Closed",
    title: "Market Volatility: An opportunity for the long-term investor",
    image: LongImg,
    year: 2024,
  },
  {
    id: 10,
    date: "12",
    month: "Dec",
    // title: "Alpha's Structured Credit Fund Closure",
    title: "Reset your long-term portfolio at regular intervals to create wealth!",
    image: IntervalImg,
    year: 2023,
  },
  {
    id: 11,
    date: "7",
    month: "Dec",
    // title: "Alpha's Structured Credit Fund Closure",
    title: "Invest in gold through a structured route!",
    image: RouteImg,
    year: 2023,
  },
  {
    id: 12,
    date: "16",
    month: "Nov",
    // title: "Alpha's Structured Credit Fund Closure",
    title: "Building a ‘System-Driven’ Portfolio",
    image: PortImg,
    year: 2023,
  },
];

function PressReleases() {
  const [selectedYear, setSelectedYear] = useState("All");

  const years = ["All", 2025, 2024, 2023];

  const filtered =
    selectedYear === "All"
      ? releases
      : releases.filter((r) => r.year === parseInt(selectedYear));

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white px-8 py-12 flex flex-col lg:flex-row gap-10 mt-20">
        {/* Left Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {filtered.slice(0, 4).map((release) => (
            <div
              key={release.id}
              className="relative bg-white text-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Date Badge */}
              <div className="absolute -top-0 -left-0 bg-white text-[#0F2D3C] px-3 py-1 text-center font-bold shadow-md rounded">
                <p className="text-lg">{release.date}</p>
                <p className="text-xs">{release.month}</p>
              </div>

              {/* Image */}
              <img
                src={release.image}
                alt={release.title}
                className="w-full h-72 object-cover "
              />

              {/* Content */}
              <div className="p-4 bg-white">
                <h2 className="text-lg font-semibold text-gray-700 bg-white">{release.title}</h2>
                
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar - Archives Filter */}
        <div className="w-full lg:w-64 bg-white shadow p-4 rounded">
          <h3 className="text-gray-700 font-bold border-b pb-2 mb-4">
            ARCHIVES
          </h3>
          <label className="block text-sm text-gray-600 mb-1">
            Select Year:
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#19314b]"
          >
            {years.map((year, i) => (
              <option key={i} value={year}>
                {year === "All" ? "All Years" : year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PressReleases;
