import React from 'react';
import AboutSlideShow from './AboutSlideShow';
import image1 from '../assets/lorem-ipsum1.png';

const AboutUs = () => {
  

  return (
    <div className="bg-gray-100 w-[1200px]">
     <main className="container mx-auto px-4 py-12">
        <section className="relative mb-12">
          
           <AboutSlideShow />
        </section>

        <section className="container mx-auto px-4 text-white">
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img src="src\Assets\lorem-ipsum1.png" alt="About" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-white mb-4  content-center">
                Our mission is to provide a convenient platform that connects drivers with available parking spaces, reducing the time spent searching for parking and improving urban mobility.
              </p>
              <p className="text-lg text-white mb-4  content-center">
                We believe in making parking hassle-free and efficient for everyone, ensuring a seamless experience for both drivers and parking spot owners.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <ul className="list-disc list-inside text-lg text-white content-center">
                <li>Find available parking spots near you in real-time.</li>
                <li>Earn rewards and incentives for sharing your parking space.</li>
                <li>Seamless payment options for hassle-free parking.</li>
                <li>Save time and reduce stress by avoiding the search for parking.</li>
                <li>Contribute to a greener and more sustainable urban environment.</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img src={image1} alt="About" className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img src={image1} alt="About" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-white mb-4  content-center">
                Our mission is to provide a convenient platform that connects drivers with available parking spaces, reducing the time spent searching for parking and improving urban mobility.
              </p>
              <p className="text-lg text-white mb-4 content-center">
                We believe in making parking hassle-free and efficient for everyone, ensuring a seamless experience for both drivers and parking spot owners.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <ul className="list-disc list-inside text-lg text-white content-center">
                <li>Find available parking spots near you in real-time.</li>
                <li>Earn rewards and incentives for sharing your parking space.</li>
                <li>Seamless payment options for hassle-free parking.</li>
                <li>Save time and reduce stress by avoiding the search for parking.</li>
                <li>Contribute to a greener and more sustainable urban environment.</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img src={image1} alt="About" className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img src={image1} alt="About" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-white mb-4  content-center">
                Our mission is to provide a convenient platform that connects drivers with available parking spaces, reducing the time spent searching for parking and improving urban mobility.
              </p>
              <p className="text-lg text-white mb-4   content-center">
                We believe in making parking hassle-free and efficient for everyone, ensuring a seamless experience for both drivers and parking spot owners.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <ul className="list-disc list-inside text-lg text-white content-center">
                <li>Find available parking spots near you in real-time.</li>
                <li>Earn rewards and incentives for sharing your parking space.</li>
                <li>Seamless payment options for hassle-free parking.</li>
                <li>Save time and reduce stress by avoiding the search for parking.</li>
                <li>Contribute to a greener and more sustainable urban environment.</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img src={image1} alt="About" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
