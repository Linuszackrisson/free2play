import React, { useState, useEffect } from 'react';
import { getGamesData } from './api';

const GameList = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(20); // Antal spel per sida

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

  // Paginering - Hämta nuvarande spel
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // Paginering - Byt sida
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Totalt antal sidor
  const totalPages = Math.ceil(games.length / gamesPerPage);

  // Visa första, föregående, nästa och sista sidan i pagineringen
  const renderPaginationButtons = () => {
    const pageButtons = [];
    const maxPagesToShow = 5; // Maximalt antal sidor att visa i pagineringen

    // Logik för att visa sidor beroende på den aktuella sidan
    let startPage, endPage;
    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const halfPagesToShow = Math.floor(maxPagesToShow / 2);
      if (currentPage <= halfPagesToShow) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + halfPagesToShow >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - halfPagesToShow;
        endPage = currentPage + halfPagesToShow;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline ${currentPage === i ? 'bg-green-600' : ''}`}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="bg-surface-100 text-white h-screen flex-col flex items-center justify-center relative flex">
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-transparent opacity-25"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 flex flex-col items-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {currentGames.map((game) => (
            <img key={game.id} className="w-full h-auto rounded-lg" src={game.thumbnail} alt={game.title} />
          ))}
        </div>
        {/* Paginering */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
          >
            {"<<"}
          </button>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            {"<"}
          </button>
          {renderPaginationButtons()}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            {">"}
          </button>
          <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameList;
