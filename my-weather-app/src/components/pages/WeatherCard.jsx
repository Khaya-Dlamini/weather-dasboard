import React, { useState } from 'react';
import SearchBar from '../common/SearchBar'
import WeatherData from '../common/WeatherData'
import axios from 'axios';
import { useEffect } from 'react';
import ErrorMessage from '../common/ErrorMessage';
function WeatherCard() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
  
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  
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
    useEffect(() => {
      fetchWeatherData('Johannesburg'); // Default location
    }, []);
  
  return (
    <div className='container'>
      <div className="welcome-message">
        <h1> Lihle Weather</h1>
      </div>
    <div className='weather-app'>
        <SearchBar fetchWeatherData={fetchWeatherData}></SearchBar>
        {error && <ErrorMessage message={error} />}
        {weatherData && <WeatherData weatherData={weatherData} />}
    </div>
        </div>  )
}

export default WeatherCard