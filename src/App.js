import React, { useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'f0d4b765b59d2ed2fccd1581b56f6029';

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError('City not found');
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        autoComplete='false'
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weather && (
        <WeatherCard
          city={weather.name}
          country={weather.sys.country}
          temperature={weather.main.temp}
          humidity={weather.main.humidity}
          windSpeed={weather.wind.speed}
        />
      )}
    </div>
  );
}

export default App;
