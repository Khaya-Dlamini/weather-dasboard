import React, { useState } from 'react';
import SearchBar from '../common/SearchBar'
import WeatherData from '../common/WeatherData'
import axios from 'axios';
function WeatherCard() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
  
    const apiKey = '6625909a59ad34b2eb0c0d430d9de0fa'; 
  
    const fetchWeatherData = async (location) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError('Location not found');
        setWeatherData(null);
      }
    };
  
  return (
    <div className='container'>
    <div className='weather-app'>
        <SearchBar fetchWeatherData={fetchWeatherData}></SearchBar>
        {error && <div className="error">{error}</div>}
        {weatherData && <WeatherData weatherData={weatherData} />}
    </div>
        </div>  )
}

export default WeatherCard