import React from 'react';

const Hero = () => {
  return (
    <section className="w-full min-h-screen px-4 md:px-20 flex flex-col lg:flex-row items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Welcome to <br />
          <span className="text-blue-600">Cold Storage Pvt. Ltd.</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
          We provide state-of-the-art cold storage solutions ensuring freshness and quality for your products.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="./hero.png"
          alt="Cold Storage"
          className="w-full max-w-md rounded-tl-[50px] rounded-br-[50px] object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
