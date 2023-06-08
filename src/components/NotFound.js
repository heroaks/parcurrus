import React from 'react';
const NotFound = () => {
 
  return (
    <div className="flex items-center justify-center w-[1200px] h-[600px] bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500">
        <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-500 to-purple-500">404</h1>
        <p className="text-2xl text-white mb-8 bg-gradient-to-r from-blue-500 to-purple-500">Oops! Page not found</p>
        <a href="./Home"><button className="bg-white  text-purple-500 font-bold py-2 px-4 rounded hover:bg-purple-500 hover:text-white" >
          Go Back
        </button></a>
        
      </div>
    </div>
  );
};

export default NotFound;