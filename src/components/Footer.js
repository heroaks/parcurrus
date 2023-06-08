import React from 'react';

// anchor has to be added to the footer in place of h3
const Footer = () => {
  return (
    <footer className="p-0 m-0 bg-gray-800 h-[50px]">
    
        <div className="text-gray-400 ">
          <h3>USEFUL LINKS</h3>
     <div className="hover:cursor-pointer text-gray-400 flex  my-6 place-content-center space-x-[50px]">
        <div>

         
          <h3>About US</h3>
          <h3>Help And Support</h3>
          <h3>FAQs</h3>
          <h3>Buying Guide</h3>
          <h3>Return Policy</h3>
          <h3>B2B Orders</h3>
          <h3>Spot Locator</h3>
        </div>
        <div className=" text-gray-400">

         <h3>E-Waste</h3>     
          <h3>Franchise Opportunity</h3>
          <h3>Site Map</h3>
            <h3>Careers</h3>
            <h3>Terms Of Use</h3>
          <h3>Disclaimer</h3>
         <h3>Privacy Policy</h3>
        </div>
      </div>
          </div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="/" className="text-gray-400 hover:text-white ml-4">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </a>
            <a href="/" className="text-gray-400 hover:text-white ml-4">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l2.117-2.117A2 2 0 0017 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V8zM7 2v4m10 10H7M7 12h3m1 0h3m1 0h3"
                />
              </svg>
            </a>
            <a href="/" className="text-gray-400 hover:text-white ml-4">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 2l4 4-4 4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10v4h4M13 22l-4-4 4-4"
                />
              </svg>
            </a>
          </div>
      
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-gray-400">&copy; 2023 PARCURRUS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
