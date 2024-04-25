import React from 'react'

const WeatherCard = ({ city, country, temperature, humidity, windSpeed }) => {
  return (
    <div className="weather-card">
      <p className='location'>{city}, {country}</p>
      <div className='infoContainer'>
        <span className='infoLabel'>{`${Math.floor(temperature - 273)}°C`}
          <span>temperature</span></span>
        <span className='infoLabel'>{humidity} %
          <span>Humidity</span></span>
        <span className='infoLabel'>{windSpeed} m/s
          <span>Wind Speed </span></span>
      </div>
    </div>
  )
}

export default WeatherCard