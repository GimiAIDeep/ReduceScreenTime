// src/components/StatsCard.jsx
import React from 'react';
import { TrendingUp, TrendingDown, Target, Award, Clock, Battery } from 'lucide-react';

const StatsCard = ({ title, value, change, icon, color }) => {
  const IconComponent = icon;
  
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
    teal: 'from-teal-500 to-teal-600',
  };

  return (
    <div className="group relative">
      {/* 3D Effect Container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
      
      {/* Card Content */}
      <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="text-white" size={28} />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{title}</h3>
        
        {/* Value */}
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {value}
          </span>
          
          {/* Change Indicator */}
          {change && (
            <span className={`flex items-center text-sm font-medium px-2 py-1 rounded-full ${
              change > 0 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {change > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span className="ml-1">{Math.abs(change)}%</span>
            </span>
          )}
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-6 translate-x-6"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full translate-y-6 -translate-x-6"></div>
      </div>
    </div>
  );
};

export default StatsCard;