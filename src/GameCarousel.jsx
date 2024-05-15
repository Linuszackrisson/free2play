// GameCarousel.js
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useGlobalState from './store';

const GameCarousel = () => {
  const { games, loading, error, fetchGames } = useGlobalState();

  useEffect(() => {
    fetchGames();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const topGames = games.slice(0, 15);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <button className="slick-prev slick-arrow"><span className="material-icons">arrow_back</span></button>,
    nextArrow: <button className="slick-next slick-arrow"><span className="material-icons">arrow_forward</span></button>
  };

  return (
    <div className='lg:container lg:mx-auto'>
      <Slider {...settings} className="relative">
        {topGames.map((game) => (
          <div key={game.id} className="p-3  flex flex-col justify-between ">
            <img src={game.thumbnail} alt={game.title} className="mx-auto rounded-lg shadow-lg border border-accent border-opacity-60" style={{ height: "200px", objectFit: "cover" }} />
            <div className="text-gray-700 mt-2">
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameCarousel;
