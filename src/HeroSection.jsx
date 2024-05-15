import React from 'react';
import GameCarousel from './GameCarousel';
import f2pbanner from './assets/f2pbanner.jpg';

function HeroSection() {
  return (
    <div className='hero-container relative z-0 text-white py-20 px-5 sm:px-10 lg:px-20 flex flex-col justify-center items-center h-screen' style={{backgroundImage: `url(${f2pbanner})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <h1 className='text-6xl md:text-6xl font-semibold text-center mb-6 z-10'>Where the Only Cost Is Your Sleeping Schedule</h1>
      <h2 className='text-4xl md:text-3xl  text-center mb-12 z-10'>Explore our free collection of games or let the dice decide your next adventure.</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4 z-10">
        <button className="bg-primary text-white hover:bg-accent hover:text-white py-3 px-8 rounded-md text-xl font-semibold uppercase transition duration-300">Explore</button>
        <button className="bg-secondary border border-white text-white hover:bg-white hover:text-primary py-3 px-8 rounded-md text-xl font-semibold uppercase transition duration-300">Let the Dice Decide</button>
      </div>
      
     
      
    </div>
  );
}

export default HeroSection;
