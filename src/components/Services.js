import React from 'react'
import ComingSoon from '../assets/Coming Soon.gif'
function Services() {
  return (
    <div className='w-[1200px] mb-10 flex justify-center items-center'>
        <img src={ComingSoon} alt="Coming Soon" className=" flex top-0 bottom-0 w-[1080px] h-auto rounded-lg shadow-lg" />
    </div>
  )
}

export default Services