import React from 'react'
import "./style.css"
function Navbar() {
  return (
    <div className='fixed bg-gray-900 flex text-white navbar'>
   <div className='text-white left flex space-x-5 width:100%'>
   <div className='imageo'>
  <img src="#" alt="logo" />
   </div>
   <div className='texto space-x-4 justify-end'>
    <a href='https://www.google.com'>Home</a>
    <a href='google.com'>Product</a>
    <a href='google.com'>Contact</a>
    <a href='google.com'> About</a>
   </div>

   </div>
      </div>
  )
}
export default Navbar;