// src/components/FocusTimer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Bell, Volume2 } from 'lucide-react';

const FocusTimer = () => {
  const [mode, setMode] = useState('focus'); // 'focus', 'shortBreak', 'longBreak'
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const timerRef = useRef(null);

  const modes = {
    focus: { time: 25 * 60, label: 'Focus Time', color: 'from-blue-500 to-purple-600' },
    shortBreak: { time: 5 * 60, label: 'Short Break', color: 'from-green-500 to-emerald-600' },
    longBreak: { time: 15 * 60, label: 'Long Break', color: 'from-orange-500 to-red-600' }
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const handleTimerComplete = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    
    // Play notification sound (simulated)
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`Timer Complete!`, {
        body: `${modes[mode].label} session completed!`,
        icon: 'https://cdn-icons-png.flaticon.com/512/411/411745.png'
      });
    }

    // Move to next mode
    if (mode === 'focus') {
      setCompletedSessions(prev => prev + 1);
      if (completedSessions % 3 === 2) {
        setMode('longBreak');
        setTimeLeft(modes.longBreak.time);
      } else {
        setMode('shortBreak');
        setTimeLeft(modes.shortBreak.time);
      }
    } else {
      setMode('focus');
      setTimeLeft(modes.focus.time);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setTimeLeft(modes[newMode].time);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(modes[mode].time);
  };

  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  };

  const progress = ((modes[mode].time - timeLeft) / modes[mode].time) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Mode Selector */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.entries(modes).map(([key, { label, color }]) => (
          <button
            key={key}
            onClick={() => handleModeChange(key)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              mode === key
                ? `bg-gradient-to-r ${color} text-white shadow-lg`
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="relative">
        {/* Circular Progress */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200 dark:text-gray-700"
            />
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 120}
              strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Timer Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {formatTime(timeLeft)}
            </div>
            <div className="text-lg font-medium text-gray-600 dark:text-gray-400 mt-2">
              {modes[mode].label}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Sessions: {completedSessions}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={toggleTimer}
            className="p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isRunning ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <button
            onClick={resetTimer}
            className="p-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <RotateCcw size={24} />
          </button>
          
          <button
            onClick={requestNotificationPermission}
            className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Bell size={24} />
          </button>
        </div>

        {/* Session Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300">
              {completedSessions} Focus {completedSessions === 1 ? 'Session' : 'Sessions'} Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusTimer;