import React from 'react';
import SearchBar from './components/SearchBar';
import PopularCities from './components/PopularCities';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { useWeather } from './hooks/useWeather';

function App() {
  const { 
    city, 
    setCity, 
    weather, 
    loading, 
    error, 
    fetchWeatherData 
  } = useWeather();

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Aplicación del Clima</h1>
      
      <SearchBar 
        city={city} 
        setCity={setCity} 
        fetchWeatherData={fetchWeatherData} 
      />
      
      <PopularCities 
        selectCity={(cityName) => {
          setCity(cityName);
          fetchWeatherData(cityName);
        }} 
      />
      
      {loading && <LoadingSpinner />}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center font-semibold">
          {error}
        </div>
      )}
      
      {weather && !loading && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
