import React from 'react';

const services = [
  {
    title: 'Global Shipping',
    description: 'Fast delivery across 200+ countries.',
  },
  {
    title: 'Customs Clearance',
    description: 'Smooth and stress-free import/export processing.',
  },
  {
    title: 'Express Delivery',
    description: 'Guaranteed next-day delivery options.',
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="shadow-md p-6 rounded-lg hover:shadow-xl transition border border-yellow-300">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};