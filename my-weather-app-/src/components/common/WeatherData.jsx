import React from 'react'

    function WeatherData({ weatherData }) {
        const { weather, main, wind, dt } = weatherData;

        // Function to map weather descriptions to Bootstrap icons
  const getWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case 'clear':
        return '"bi bi-brightness-high'; // Sunny
      case 'clouds':
        return 'bi bi-cloud'; // Cloudy
      case 'rain':
        return 'bi bi-cloud-rain'; // Rainy
      case 'snow':
        return 'bi bi-snow'; // Snowy
      case 'mist':
      case 'haze':
        return 'bi bi-cloud-fog'; // Mist or Haze
      case 'thunderstorm':
        return 'bi bi-cloud-lightning'; // Thunderstorm
      case 'drizzle':
        return 'bi bi-cloud-drizzle'; // Drizzle
      default:
        return 'bi bi-cloud'; // Default icon for other cases
    }
  };
  // Function to map weather descriptions to background gradients
//   const getBackgroundStyle = (description) => {
//     switch (description.toLowerCase()) {
//       case 'clear':
//         return 'linear-gradient(to right, yellow, red)'; // Sunny gradient
//       case 'clouds':
//         return 'linear-gradient(to right, lightgray, gray)'; // Cloudy gradient
//       case 'rain':
//         return 'linear-gradient(to right, lightblue, blue)'; // Rainy gradient
//       case 'snow':
//         return 'linear-gradient(to right, white, lightblue)'; // Snowy gradient
//       case 'mist':
//       case 'haze':
//         return 'linear-gradient(to right, lightgray, white)'; // Mist/Haze gradient
//       case 'thunderstorm':
//         return 'linear-gradient(to right, darkgray, black)'; // Thunderstorm gradient
//       case 'drizzle':
//         return 'linear-gradient(to right, lightblue, gray)'; // Drizzle gradient
//       default:
//         return 'linear-gradient(to right, lightgray, darkgray)'; // Default gradient
//     }
//   };

  // Extract weather description and map to an icon
  const description = weather[0].main;
  const iconClass = getWeatherIcon(description);

//   const backgroundStyle = getBackgroundStyle(description);
      
        const date = new Date(dt * 1000).toLocaleDateString('en-US', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
        });
  return (
    <div className="weather">
              <i className={iconClass} style={{ fontSize: '140px' }}></i>
        <div className="weather-type">{description}</div>
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