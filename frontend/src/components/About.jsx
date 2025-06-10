import React from 'react';

const About = () => {
  return (
    <section className="w-full bg-gray-900 text-gray-300 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="./about-image.jpg" // Replace with your image path
            alt="About Cold Storage"
            className="rounded-3xl shadow-2xl object-cover w-full h-80 md:h-[450px] transition-transform hover:scale-105 duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-5xl font-extrabold text-white leading-tight tracking-wide">
            About <span className="text-blue-500">Cold Storage Pvt. Ltd.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            At Cold Storage Pvt. Ltd., we deliver innovative cold storage solutions with cutting-edge technology, ensuring your products remain fresh and safe. Our commitment to sustainability and quality drives everything we do.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Our mission is to empower businesses with reliable temperature-controlled storage and logistics, reducing waste and boosting efficiency in food, pharmaceuticals, and agriculture industries.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-3 text-lg">
            <li>Advanced temperature control systems with real-time monitoring</li>
            <li>24/7 security and climate assurance</li>
            <li>Customizable storage solutions tailored to your needs</li>
            <li>Eco-friendly operations focused on energy efficiency</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
