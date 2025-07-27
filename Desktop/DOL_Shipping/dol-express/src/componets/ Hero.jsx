import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-yellow-100 text-gray-800 py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Fast, Reliable Shipping Worldwide</h2>
        <p className="text-lg mb-6">Track packages, manage deliveries, and simplify logistics with Dol Express.</p>
        <a href="#tracking" className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">Track Your Package</a>
      </div>
    </section>
  );
};

export default Hero;