import React from 'react'
import Iframe from 'react-iframe'
function Embedd() {
  return (
    <div className='flex justify-center'>
    <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14238.251577175191!2d81.04233215000001!3d26.85385165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675518530782!5m2!1sen!2sin"
        width="1024"
        height="600px"
        id=""
        className=" my-9 border-yellow-500 border-[10px]"
        display="block"
        position="relative"/>

    </div>
  )
}

export default Embedd;