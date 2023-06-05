import React,{useState, useEffect} from 'react';
import Embedd from './Embedd';  //the map component
const Home = () => {
  const [showMap, setShowMap] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Function to handle the onClick event, this function will simply updat the state of showMap to true
  const handleGetStarted = () => {
    setShowMap(true);
  };
  const handleHide = () => {
    setShowMap(false);
  };
  
  const images = [
    'C:/Users/thaku/Desktop/VS CODE/parcurrus/src/Assets/lorem-ipsum3.png',
    'C:/Users/thaku/Desktop/VS CODE/parcurrus/src/Assets/lorem-ipsum3.png',
    'C:/Users/thaku/Desktop/VS CODE/parcurrus/src/Assets/lorem-ipsum3.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="bg-gray-100 ">
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
        <section className="relative">
          <img
            src={images[currentImage]}
            alt="Slideshow"
            className="w-full h-auto rounded-lg shadow-lg text-white"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
