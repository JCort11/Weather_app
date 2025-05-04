import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center p-8">
      <div className="inline-block animate-spin rounded-full border-4 border-blue-300 border-t-blue-600 h-12 w-12 mb-4"></div>
      <p className="text-blue-800">Cargando datos del clima...</p>
    </div>
  );
};

export default LoadingSpinner;