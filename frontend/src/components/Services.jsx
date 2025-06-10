import React from 'react';
import { FaSnowflake, FaTruck, FaShieldAlt, FaCogs } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="w-full bg-gray-900 text-gray-300 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-white mb-12 text-center">
          Our <span className="text-blue-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Service Item */}
          <div className="bg-gray-800 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-blue-600 transition-shadow duration-300">
            <FaSnowflake className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-xl font-semibold mb-3">Cold Storage</h3>
            <p className="text-gray-400 leading-relaxed">
              State-of-the-art temperature controlled storage facilities ensuring product freshness.
            </p>
          </div>

          <div className="bg-gray-800 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-blue-600 transition-shadow duration-300">
            <FaTruck className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-xl font-semibold mb-3">Logistics & Transport</h3>
            <p className="text-gray-400 leading-relaxed">
              Reliable and timely refrigerated transport solutions for your supply chain needs.
            </p>
          </div>

          <div className="bg-gray-800 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-blue-600 transition-shadow duration-300">
            <FaShieldAlt className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-xl font-semibold mb-3">Security & Monitoring</h3>
            <p className="text-gray-400 leading-relaxed">
              24/7 surveillance and climate monitoring to guarantee safety and compliance.
            </p>
          </div>

          <div className="bg-gray-800 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-blue-600 transition-shadow duration-300">
            <FaCogs className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
            <p className="text-gray-400 leading-relaxed">
              Tailored cold storage and logistics services designed to fit your unique business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
