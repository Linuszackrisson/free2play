import React, { useState } from 'react';
import { GiGamepad } from 'react-icons/gi';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

function StickyNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-secondary text-white py-4 px-5 sm:px-10 lg:px-20 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        <GiGamepad className="text-3xl mr-2 sm:mr-4" />
        <h1 className="text-2xl font-semibold hidden sm:block">FREE2PLAY</h1>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:mx-4 max-w-xl"> 
        <div className="relative w-full">
          <input  type="text" placeholder="Enter a game, it might be free..." className="w-full py-2 px-4 rounded-md bg-primary text-white focus:outline-none focus:ring-2 focus:ring-accent transition duration-300" />
          <button className="absolute inset-y-0 right-0 px-3 bg-primary text-white rounded-r-md flex items-center justify-center focus:outline-none ">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="text-lg hover:text-accent transition duration-300 hidden sm:block">Browse all</a>
        <a href="#" className="text-lg hover:text-accent transition duration-300 hidden sm:block">Random Game Picker</a>
        <button onClick={toggleMenu} className="text-white sm:hidden focus:outline-none">
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-secondary text-white pt-4 pb-2 px-5">
          <ul className="border-t border-gray-300">
            <li>
              <a href="#" className="block py-2 text-lg hover:text-accent transition duration-300">Browse all</a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg hover:text-accent transition duration-300">Random Game Picker</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default StickyNav;
