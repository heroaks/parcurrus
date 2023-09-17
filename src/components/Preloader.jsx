import { useEffect, useState } from 'react'
import React from 'react'
import loader from '../Assets/Rad.gif'
import './Preloader.css'

const Preloader = () => {
    const [showPreloader, setShowPreloader] = useState(true);
  
    useEffect(() => {
      // Simulate loading by adding a delay
      setTimeout(() => {
        setShowPreloader(false); // Hide the preloader after a delay
      }, 1800); // Replace with your actual loading logic
    }, []);
  
    return (
      <div className={`preloader ${showPreloader ? 'visible' : 'hidden'}`}>
        <div className='w-max h-max bg-black bg-opacity-100'>
            <img className='w-max h-max' src={loader} alt="...loading" />
        </div>
      </div>
    );
  };

export default Preloader
