import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad } from 'react-icons/fa'; // Importera spelikonen från Font Awesome

const StickyNav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-surface-100 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold flex items-center">
              <FaGamepad className="mr-2 text-white-500 text-4xl mt-1" /> <p className='text-green-500 text-2xl'>FREE2PLAY.</p> <p className='text-2xl'>COM</p>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-auto">
            <div className="flex space-x-4">
              <Link
                to="/random"
                className="hover:bg-surface-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Random Game Picker
              </Link>
              <Link
                to="/gamelist"
                className="hover:bg-surface-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Game List
              </Link>
              <Link
                to="/genres"
                className="hover:bg-surface-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Genres
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
