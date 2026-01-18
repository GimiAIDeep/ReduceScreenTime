// src/components/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ progress, limitExceeded = false }) => {
  return (
    <div className="relative w-full">
      {/* Background Track */}
      <div className="w-full h-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full overflow-hidden shadow-inner">
        {/* Animated Fill */}
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            limitExceeded 
              ? 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 animate-pulse-glow'
              : 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'
          }`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
      
      {/* Progress Indicator */}
      <div className="absolute top-8 left-0 right-0 flex justify-between text-sm font-medium">
        <span className="text-gray-600 dark:text-gray-400">0%</span>
        <span className="text-gray-600 dark:text-gray-400">50%</span>
        <span className="text-gray-600 dark:text-gray-400">100%</span>
      </div>
      
      {/* Current Progress Label */}
      <div className="absolute -top-8 left-0 transform -translate-x-1/2 transition-all duration-300"
           style={{ left: `${Math.min(progress, 100)}%` }}>
        <div className="bg-white dark:bg-gray-800 px-2 py-1 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {progress.toFixed(1)}%
          </span>
        </div>
        <div className="w-3 h-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform rotate-45 mx-auto -mt-1"></div>
      </div>
    </div>
  );
};

export default ProgressBar;