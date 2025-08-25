import React from 'react';
import logo from '../../assets/Images/LogoHome.png';

function Footer() {
    return (
        <footer className="bg-[#19314b] text-gray-300 py-12">
            {/* Upper Section */}
            <div className="max-w-7xl mx-auto px-4 space-y-4 text-center text-sm">
                <p>
                    This is an example disclaimer text. You can customize it as per your needs. This
                    information is intended for general reading only.
                </p>
                <a
                    href="mailto:aainvestorrelations@alt-alpha.com"
                    className="underline font-bold text-white"
                >
                    aainvestorrelations@alt-alpha.com
                </a>{' '}
                | Tel: <span className="font-bold text-white">+91-22-6145-8900</span>
                <div className="font-bold text-white mt-4">More Information</div>
                <div className="text-gray-300 text-sm space-y-1">
                    <div>Alpha Alternatives Holdings Private Limited: CIN- U65990MH2013PTC250886</div>
                    <div>Alpha Alternatives Fund Advisors LLP: LL PIN: AAL-235 | SEBI PMS Regn.: INP000006518</div>
                    <div>SEBI IA Regn.: INA000001617 | AP Regn.: AP01326101149760</div>
                </div>
                <div className="font-bold text-white mt-4">SCORES</div>
            </div>

            {/* Lower Section */}
            <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between text-gray-300 text-sm">
                <div className="mb-6 md:mb-0">
                    <img
                        src={logo}
                        alt="Alpha Alternatives Logo"
                        className="h-12 w-auto"
                    />
                </div>
                <div>
                    <h3 className="font-bold text-[#ffddc1] text-lg">Quick Links</h3>
                    <ul className="space-y-1">
                        <li>About</li>
                        <li>Investment Solutions</li>
                        <li>Team</li>
                        <li>Careers</li>
                        <li>Insights</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-[#ffddc1] text-lg">Investor Centre</h3>
                    <ul className="space-y-1">
                        <li>Policies</li>
                        <li>Alpha Alternatives Financial Services Private Limited</li>
                        <li>Systematic Equity (SE)</li>
                        <li>IFSC Branch</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-[#ffddc1] text-lg">Regulatory Disclosures</h3>
                    <div className="space-y-1">
                        <div>Investment Advisor | Investment Charter - IA</div>
                        <div>Investor Grievances - IA</div>
                        <div>Statutory Information</div>
                        <div>Annual Compliance Audit</div>
                        <div>Portfolio Manager | Investor Charter - PMS</div>
                        <div>Investor Grievances - PMS</div>
                        <div>Statutory Information</div>
                        <div>Alternative Investment Fund | Investor Charter</div>
                        <div>Investor Grievances</div>
                        <div>Voting Disclosure</div>
                        <div>Statutory Information AIF</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;











// import React from 'react'

// function Footer() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Footer