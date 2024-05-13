import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import GameCard from './GameCard';
import { getGamesData } from './api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000
  };
  
  const randomGames = games.slice(0, 9);

  return (
    <div className="carousel max-w-7xl mx-auto px-4 ">
      <Slider {...settings}>
        {randomGames.map((game) => (
          <div key={game.id} className="px-2"> {/* Lägg till en klass för att ange mellanrum */}
            <GameCard game={game} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
