import React from 'react'

function WeatherData() {
  return (
    <div className="weather">
        <i class="bi bi-brightness-high-fill"></i>
        <div className="weather-type">Clear</div>
        <div className="temp">28˚</div>
        <div className="weather-date">
            <p>Fri,3 May</p>
        </div>
        <div className="weather-data">
            <div className="humidity">
                <div className="data-name">Humidity</div>
                <i class="bi bi-droplet"></i>
                <div className="data">35%</div>
            </div>
            <div className="wind">
                <div className="data-name">Wind</div>
                <i class="bi bi-wind"></i>
                <div className="data">3 km/h</div>
            </div>
        </div>
    </div>
  )
}

export default WeatherData