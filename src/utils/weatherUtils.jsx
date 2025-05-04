import React from 'react';
import { Cloud, CloudRain, Sun, Wind, CloudSnow, CloudLightning } from 'lucide-react';
import { WEATHER_CONDITIONS } from '../constants/weatherConstants';


export const generateWeatherData = (cityName) => {
  
  const temperature = Math.floor(Math.random() * 35) + 5; 
  const humidity = Math.floor(Math.random() * 70) + 30; 
  const windSpeed = Math.floor(Math.random() * 50) + 5; 
  
  const condition = WEATHER_CONDITIONS[Math.floor(Math.random() * WEATHER_CONDITIONS.length)];
  
  return {
    city: cityName,
    temperature,
    humidity,
    windSpeed,
    condition,
    date: new Date().toLocaleDateString()
  };
};


export const getWeatherIcon = (condition) => {
  switch (condition) {
    case 'Soleado':
      return <Sun size={48} className="text-yellow-500" />;
    case 'Nublado':
      return <Cloud size={48} className="text-gray-500" />;
    case 'Lluvioso':
      return <CloudRain size={48} className="text-blue-500" />;
    case 'Ventoso':
      return <Wind size={48} className="text-teal-500" />;
    case 'Nevado':
      return <CloudSnow size={48} className="text-blue-300" />;
    case 'Tormentoso':
      return <CloudLightning size={48} className="text-purple-500" />;
    default:
      return <Cloud size={48} className="text-gray-500" />;
  }
};