import React from 'react';
import { useState } from 'react';
import Embedd from './Embedd';
import CompanyLogo from '../Assets/logo.png';



const Navbar = () => {
 
  return (
   
<nav className="bg-gray-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-shrink-0">
          
            <a href="/" className="text-white flex font-bold text-xl">
            <img src={CompanyLogo} alt="the logo" className='h-[50px] w-[50px]'/>
              <h1 className='mt-3'>PARCURRUS</h1>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/" className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/" className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/" className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
  );
};

export default Navbar;
