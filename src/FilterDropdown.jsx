import React from 'react';

const FilterDropdown = ({ genres, selectedGenre, onSelectGenre }) => {
  return (
    <div className="mb-4">
      <label htmlFor="genre" className="mr-2">Filter by Genre:</label>
      <select
        id="genre"
        value={selectedGenre}
        onChange={(e) => onSelectGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
