import React from 'react';

const AboutUs = () => {
  const images = [
    '../Assets/lorem-ipsum2.jpg',
    '../Assets/lorem-ipsum2.jpg',
    '../Assets/lorem-ipsum2.jpg',
  ];

  return (
    <div className="bg-gray-100 ">
     <main className="container mx-auto px-4 py-12">
        <section className="relative mb-12">
          <div className="h-96">
            <div
              className="h-full w-full bg-cover bg-center absolute top-0 left-0"
              style={{ backgroundImage: `url(${images[0]})` }}
            ></div>
            <div
              className="h-full w-full bg-cover bg-center absolute top-0 left-0"
              style={{ backgroundImage: `url(${images[1]})`, animationDelay: '4s' }}
            ></div>
            <div
              className="h-full w-full bg-cover bg-center absolute top-0 left-0"
              style={{ backgroundImage: `url(${images[2]})`, animationDelay: '8s' }}
            ></div>
          </div>
        </section>

        <section className="container mx-auto px-4 text-white">
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img src="/images/about-img1.jpg" alt="About" className="rounded-lg shadow-lg" />
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
              <img src="/images/about-img2.jpg" alt="About" className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img src="/images/about-img1.jpg" alt="About" className="rounded-lg shadow-lg" />
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
              <img src="/images/about-img2.jpg" alt="About" className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img src="/images/about-img1.jpg" alt="About" className="rounded-lg shadow-lg" />
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
              <img src="/images/about-img2.jpg" alt="About" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
