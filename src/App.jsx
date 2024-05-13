import React, { useState, useEffect } from 'react';
import { getGamesData } from './api';
import StickyNav from './StickyNav';
import HeroSection from './HeroSection';
import { Routes, Route } from 'react-router-dom'; // Import Routes
import GameListPage from './GameListPage';
import Carousel from './Carousel';


const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesData = await getGamesData();
        setGames(gamesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      < StickyNav/>
      
    <Routes>
      <Route path="/" element={<HeroSection />} />
      
        <Route path="/gamelist" element={<GameListPage />} />

       </Routes>
      
    </div>
  );
};

export default App;
