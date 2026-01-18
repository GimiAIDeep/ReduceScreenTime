// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Trophy, Target, Battery, Zap, TrendingDown } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import ProgressBar from '../components/ProgressBar';
import ScreenTimeInput from '../components/ScreenTimeInput';
import QuoteBox from '../components/QuoteBox';
import useLocalStorage from '../hooks/useLocalStorage';

const Dashboard = () => {
  const [dailyLimit, setDailyLimit] = useLocalStorage('dailyLimit', 240); // 4 hours in minutes
  const [screenTime, setScreenTime] = useLocalStorage('screenTime', 0);
  const [streak, setStreak] = useLocalStorage('streak', 0);
  const [lastUpdate, setLastUpdate] = useLocalStorage('lastUpdate', '');

  const progress = dailyLimit > 0 ? (screenTime / dailyLimit) * 100 : 0;
  const remainingTime = Math.max(0, dailyLimit - screenTime);
  const limitExceeded = screenTime > dailyLimit;

  const handleSaveTime = (minutes) => {
    const today = new Date().toDateString();
    
    // Check if this is a new day
    if (lastUpdate !== today) {
      // Reset screen time for new day
      setScreenTime(minutes);
      setLastUpdate(today);
      
      // Update streak if limit was met yesterday
      if (lastUpdate === new Date(Date.now() - 86400000).toDateString()) {
        if (screenTime <= dailyLimit) {
          setStreak(prev => prev + 1);
        } else {
          setStreak(0);
        }
      }
    } else {
      setScreenTime(minutes);
    }
  };

  const stats = [
    {
      title: 'Screen Time Today',
      value: `${Math.floor(screenTime / 60)}h ${screenTime % 60}m`,
      change: -12,
      icon: Battery,
      color: 'blue'
    },
    {
      title: 'Daily Limit',
      value: `${Math.floor(dailyLimit / 60)}h ${dailyLimit % 60}m`,
      icon: Target,
      color: 'purple'
    },
    {
      title: 'Remaining Time',
      value: `${Math.floor(remainingTime / 60)}h ${remainingTime % 60}m`,
      icon: Zap,
      color: 'green'
    },
    {
      title: 'Current Streak',
      value: `${streak} days`,
      change: streak > 0 ? 15 : -5,
      icon: Trophy,
      color: 'orange'
    },
  ];

  const weeklyData = [120, 180, 210, 150, 170, 140, 190];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Digital Wellness Dashboard
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Track your screen time, boost your focus, and build healthier digital habits
        </p>
      </div>

      {/* Warning Alert */}
      {limitExceeded && (
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 dark:border-red-500/30 rounded-2xl p-6 backdrop-blur-sm animate-pulse-glow">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
              <AlertTriangle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400">Limit Exceeded!</h3>
              <p className="text-red-600 dark:text-red-300">
                You've exceeded your daily screen time limit by {screenTime - dailyLimit} minutes.
                Take a break and focus on other activities!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Progress */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Section */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Daily Progress
              </h2>
              <span className={`px-4 py-2 rounded-full font-semibold ${
                limitExceeded
                  ? 'bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 dark:text-red-400'
                  : 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400'
              }`}>
                {limitExceeded ? 'Over Limit' : 'Within Limit'}
              </span>
            </div>
            
            <ProgressBar progress={progress} limitExceeded={limitExceeded} />
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">Used</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {Math.floor(screenTime / 60)}h {screenTime % 60}m
                </p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">Limit</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {Math.floor(dailyLimit / 60)}h {dailyLimit % 60}m
                </p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">Remaining</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {Math.floor(remainingTime / 60)}h {remainingTime % 60}m
                </p>
              </div>
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Weekly Overview
            </h2>
            <div className="flex items-end h-48 space-x-2">
              {weeklyData.map((value, index) => {
                const height = (value / 240) * 100;
                const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                const isToday = index === new Date().getDay() - 1;
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      {days[index]}
                    </div>
                    <div className="relative w-full">
                      <div
                        className={`w-full rounded-t-lg transition-all duration-500 ${
                          isToday
                            ? 'bg-gradient-to-t from-blue-500 to-purple-500'
                            : 'bg-gradient-to-t from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500'
                        }`}
                        style={{ height: `${height}%` }}
                      >
                        {isToday && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-2 py-1 rounded-lg shadow-lg">
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                              {Math.floor(value / 60)}h {value % 60}m
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Input & Quote */}
        <div className="space-y-8">
          <ScreenTimeInput onSave={handleSaveTime} currentTime={screenTime} />
          <QuoteBox />
          
          {/* Streak Celebration */}
          {streak > 0 && (
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Trophy className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-700 dark:text-yellow-400">
                    🎉 {streak} Day Streak!
                  </h3>
                  <p className="text-yellow-600 dark:text-yellow-300 text-sm">
                    Keep going! You're building amazing digital habits.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;