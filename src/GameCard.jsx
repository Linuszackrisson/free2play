import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="mx-auto max-w-md rounded overflow-hidden shadow-lg bg-gray-800 text-white">
      <img className="w-full h-64 object-cover" src={game.thumbnail} alt={game.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{game.title}</div>
       
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2">{game.genre}</span>
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">{game.platform}</span>
      </div>
    </div>
  );
};

export default GameCard;
