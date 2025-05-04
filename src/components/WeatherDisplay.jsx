import React from 'react';
import { getWeatherIcon } from '../utils/weatherUtils';

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{weather.city}</h2>
          <p className="text-gray-600">{weather.date}</p>
        </div>
        {getWeatherIcon(weather.condition)}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <WeatherCard 
          title="Temperatura" 
          value={`${weather.temperature}°C`} 
          large 
        />
        
        <WeatherCard 
          title="Condición" 
          value={weather.condition} 
        />
        
        <WeatherCard 
          title="Humedad" 
          value={`${weather.humidity}%`} 
        />
        
        <WeatherCard 
          title="Viento" 
          value={`${weather.windSpeed} km/h`} 
        />
      </div>
    </div>
  );
};

const WeatherCard = ({ title, value, large = false }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-lg font-semibold text-blue-800">{title}</p>
      <p className={large ? "text-3xl font-bold" : "text-xl"}>{value}</p>
    </div>
  );
};

export default WeatherDisplay;