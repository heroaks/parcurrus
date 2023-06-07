import React from 'react';
import Aysh from './AyushComponent';
import Deepesh from './DeepeshComponent';
import Manohar from './ManoharComponent';
import Contact2 from './Contact2';
function Contact() {
  return (
  <div> 
<div className='flex bg-gray-700 text-white'>
   <div  className='mx-3  '><Aysh/></div>
   <div className='mx-3 '><Deepesh/></div>
   <div className='mx-3  '><Manohar/></div>
 </div>
 <div className='my-4'>
  <Contact2 />
</div>
 </div>
  )
}

export default Contact