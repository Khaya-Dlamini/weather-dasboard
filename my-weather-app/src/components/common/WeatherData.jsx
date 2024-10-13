import React from 'react'

    function WeatherData({ weatherData }) {
        const { weather, main, wind, dt } = weatherData;
      
        const date = new Date(dt * 1000).toLocaleDateString('en-US', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
        });
  return (
    <div className="weather">
        <i class="bi bi-brightness-high-fill"></i>
        <div className="weather-type">{weather[0].main}</div>
        <div className="temp">{`${Math.floor(main.temp)}°C`}</div>
        <div className="weather-date">
            <p>{date}</p>
        </div>
        <div className="weather-data">
            <div className="humidity">
                <div className="data-name">Humidity</div>
                <i class="bi bi-droplet"></i>
                <div className="data">{main.humidity}%</div>
            </div>
            <div className="wind">
                <div className="data-name">Wind</div>
                <i class="bi bi-wind"></i>
                <div className="data">{wind.speed} km/h</div>
            </div>
        </div>
    </div>
  )
}

export default WeatherData