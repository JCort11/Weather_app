import { useState } from 'react';
import { generateWeatherData } from '../utils/weatherUtils';

export const useWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
 
  const fetchWeatherData = (cityName, isEmpty = false) => {
    if (isEmpty) {
      setError("Por favor ingresar una ciudad a consultar");
      return;
    }
    
    setLoading(true);
    setError('');
    
    
    setTimeout(() => {
      try {
        
        const weatherData = generateWeatherData(cityName);
        setWeather(weatherData);
        setLoading(false);
      } catch (err) {
        setError('Error al obtener datos del clima');
        setLoading(false);
      }
    }, 1000);
  };
  
  return {
    city,
    setCity,
    weather,
    loading,
    error,
    fetchWeatherData
  };
};