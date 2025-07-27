import React, { useState } from 'react';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated tracking lookup
    if (trackingNumber === 'DOL123456') {
      setResult({ status: 'In Transit', location: 'Chicago, IL' });
    } else {
      setResult({ status: 'Not Found', location: '-' });
    }
  };

  return (
    <section id="tracking" className="bg-yellow-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Track Your Shipment</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number"
            className="px-4 py-2 border border-gray-300 rounded-md mr-2 w-64"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Track
          </button>
        </form>
        {result && (
          <div className="text-lg">
            <p>Status: <strong>{result.status}</strong></p>
            <p>Location: {result.location}</p>
          </div>
        )}
      </div>
    </section>
  );
};