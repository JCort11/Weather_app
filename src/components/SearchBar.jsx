import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ city, setCity, fetchWeatherData }) => {
 
  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherData(city);
    } else {
      fetchWeatherData('', true); 
    }
  };

  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (city.trim()) {
        fetchWeatherData(city);
      } else {
        fetchWeatherData('', true); 
      }
    }
  };

  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Introduce una ciudad..."
        className="flex-1 p-3 rounded-l-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        onClick={handleSearch}
        className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition-colors"
      >
        <Search size={24} />
      </button>
    </div>
  );
};

export default SearchBar;