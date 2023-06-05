import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 ">
      <header className="bg-blue-500 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">About Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-white mb-8">
            We are a dedicated team of professionals working towards making parking a hassle-free experience for everyone.
          </p>
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-white mb-8">
            Our mission is to provide a convenient platform that connects drivers with available parking spaces, reducing the time spent searching for parking and improving urban mobility.
          </p>
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-white mb-8">
            Have any questions or suggestions? Feel free to reach out to us at info@parkingfinder.com.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;