import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeroSection() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
        params: {
          tag: '3d.mmorpg.fantasy.pvp',
          platform: 'pc'
        },
        headers: {
          'X-RapidAPI-Key': 'c76a1e2636msh45aef8a068997cep132b07jsn88f2e2dc26be',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="Hero-container bg-gradient-to-r from-emerald-500 to-emerald-900">
      <div className='max-w-7xl flex-col flex items-center justify-center h-screen mx-auto'>
        <h1 className='text-center text-6xl font-bold'>Free 2 Play: Where the Only Investment is Your Sleep Schedule</h1>
        <h2 className='mt-4 text-2xl'>Dive into our array of free-to-play games or leave it to the roll of the dice.</h2>
        <div className="button-container flex-row mt-4">
          <button className='mr-4 bg-blue-600 px-4 py-2 rounded font-semibold'>Explore</button>
          <button className='bg-blue-600 px-4 py-2 rounded font-semibold'>Roll the Dice</button>
        </div>
        <div className="games-container mt-8">
          {games.map(game => (
            <div key={game.id} className="game">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
