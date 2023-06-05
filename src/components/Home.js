import React,{useState} from 'react';
import Embedd from './Embedd';  //the map component
const Home = () => {
  const [showMap, setShowMap] = useState(false);

  // Function to handle the onClick event, this function will simply updat the state of showMap to true
  const handleGetStarted = () => {
    setShowMap(true);
  };
  const handleHide = () => {
    setShowMap(false);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Welcome to Parking Finder</h1>
          <p className="text-lg text-white mb-8">
            Finding parking made easy. Discover available parking spots near you with our intuitive app.
          </p>
          {!showMap ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          ) : (
            <div>
            <Embedd />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleHide}
            >
              Hide
            </button>
            </div>
            
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
