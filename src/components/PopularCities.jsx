import React from 'react';
import { POPULAR_CITIES } from '../constants/weatherConstants';

const PopularCities = ({ selectCity }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3 text-blue-800">Ciudades Populares</h2>
      <div className="flex flex-wrap gap-2">
        {POPULAR_CITIES.map((cityName) => (
          <button
            key={cityName}
            onClick={() => selectCity(cityName)}
            className="px-4 py-2 bg-white rounded-full shadow hover:bg-blue-50 transition-colors text-blue-700"
          >
            {cityName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;