import React from 'react';
import Carousel from './Carousel'; // Importera din Carousel-komponent här

const HeroSection = () => {
  return (
    <div className="bg-surface-100 text-white h-screen flex-col flex items-center justify-center relative flex">
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-transparent opacity-25"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-green-600 to-green-200 text-transparent bg-clip-text">Free 2 Play: Where the Only Investment is Your Sleep Schedule</span>
        </h1>
        <p className="text-2xl text-center mb-8">Dive into our array of free-to-play games or leave it to the roll of the dice.</p>
        <div className="flex justify-center">
          <button className="mr-4 bg-gradient-to-r from-green-800 to-green-500 hover:from-green-700 hover:to-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Explore</button>
          <button className="bg-gradient-to-r from-green-800 to-green-500 hover:from-green-700 hover:to-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Roll the Dice</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
