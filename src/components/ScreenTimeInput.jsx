// src/components/ScreenTimeInput.jsx
import React, { useState } from 'react';
import { Plus, Minus, Save, Clock, Zap } from 'lucide-react';

const ScreenTimeInput = ({ onSave, currentTime = 0 }) => {
  const [hours, setHours] = useState(Math.floor(currentTime / 60));
  const [minutes, setMinutes] = useState(currentTime % 60);

  const handleIncrement = (type) => {
    if (type === 'hours') {
      setHours(prev => Math.min(prev + 1, 24));
    } else {
      setMinutes(prev => {
        if (prev + 15 >= 60) {
          setHours(prev => Math.min(prev + 1, 24));
          return (prev + 15) % 60;
        }
        return prev + 15;
      });
    }
  };

  const handleDecrement = (type) => {
    if (type === 'hours') {
      setHours(prev => Math.max(prev - 1, 0));
    } else {
      setMinutes(prev => {
        if (prev - 15 < 0) {
          setHours(prev => Math.max(prev - 1, 0));
          return 60 + (prev - 15);
        }
        return prev - 15;
      });
    }
  };

  const handleSave = () => {
    const totalMinutes = hours * 60 + minutes;
    onSave(totalMinutes);
  };

  return (
    <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Clock className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Add Screen Time</h3>
            <p className="text-gray-600 dark:text-gray-400">Track your daily usage</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full">
          <Zap className="text-green-600 dark:text-green-400" size={16} />
          <span className="text-sm font-medium text-green-700 dark:text-green-300">
            Save {24 - hours} hours for life!
          </span>
        </div>
      </div>

      {/* Time Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Hours Control */}
        <div className="text-center">
          <div className="mb-4">
            <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {hours.toString().padStart(2, '0')}
            </span>
            <span className="text-2xl text-gray-600 dark:text-gray-400 ml-2">hr</span>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleDecrement('hours')}
              className="p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-110"
            >
              <Minus size={20} />
            </button>
            <button
              onClick={() => handleIncrement('hours')}
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 transform hover:scale-110"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Minutes Control */}
        <div className="text-center">
          <div className="mb-4">
            <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-2xl text-gray-600 dark:text-gray-400 ml-2">min</span>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleDecrement('minutes')}
              className="p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-110"
            >
              <Minus size={20} />
            </button>
            <button
              onClick={() => handleIncrement('minutes')}
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 transform hover:scale-110"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Total Time Display */}
      <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-1">Total Screen Time Today</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {hours}h {minutes}m
          </p>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
      >
        <Save size={20} />
        <span>Save Daily Usage</span>
      </button>

      {/* Quick Tips */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
        <p className="text-sm text-center text-gray-700 dark:text-gray-300">
          💡 Pro Tip: Aim for less than 4 hours of screen time per day for better focus and health!
        </p>
      </div>
    </div>
  );
};

export default ScreenTimeInput;