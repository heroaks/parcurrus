import React from 'react'
import ComingSoon from '../assets/coming-soon.jpg'
function Services() {
  return (
    <div className='w-[1200px]'>
        <img src={ComingSoon} alt="Coming Soon" className=" flex w-[1275px] min-h-screen justify-center align-middle rounded-lg shadow-lg text-white" />
    </div>
  )
}

export default Services