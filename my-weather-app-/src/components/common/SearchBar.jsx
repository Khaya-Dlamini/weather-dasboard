import React, { useState } from 'react';
function SearchBar({ fetchWeatherData }) {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location) {
      fetchWeatherData(location);
    }
  };

    const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
        handleSearch()
    }
  }

  return (
    <div className='search'>
    <div className='search-top'>
    <i class="bi bi-geo-alt-fill"></i>
    <div className='location'>{location}</div>
    </div>
    <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}

        />
        <i className="bi bi-search" onClick={handleSearch}></i>
      </div>
      

</div>
  )
}

export default SearchBar