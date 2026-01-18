// src/pages/FocusTimerPage.jsx
import React from 'react';
import FocusTimer from '../components/FocusTimer';
import { Timer, Target, Brain, Coffee } from 'lucide-react';

const FocusTimerPage = () => {
  const tips = [
    {
      icon: <Target />,
      title: "Set Clear Goals",
      description: "Define what you want to accomplish before each focus session"
    },
    {
      icon: <Brain />,
      title: "Minimize Distractions",
      description: "Turn off notifications and find a quiet space"
    },
    {
      icon: <Coffee />,
      title: "Take Breaks",
      description: "Regular breaks improve focus and prevent burnout"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Focus & Productivity Timer
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
          Use the Pomodoro Technique to boost your productivity. Work in focused sprints with regular breaks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Timer */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <FocusTimer />
          </div>

          {/* Timer Tips */}
          <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              How to Use the Pomodoro Timer
            </h3>
            <ol className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-center mr-3 flex-shrink-0">1</span>
                Choose a task you want to work on
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-center mr-3 flex-shrink-0">2</span>
                Set the timer for 25 minutes (focus session)
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-center mr-3 flex-shrink-0">3</span>
                Work on the task until the timer rings
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-center mr-3 flex-shrink-0">4</span>
                Take a 5-minute break (short break)
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-center mr-3 flex-shrink-0">5</span>
                After 4 focus sessions, take a 15-minute break (long break)
              </li>
            </ol>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Productivity Tips */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Focus Tips
            </h3>
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <div className="text-white">
                      {tip.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{tip.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session History */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Today's Sessions
            </h3>
            <div className="space-y-3">
              {['Morning Focus', 'Afternoon Sprint', 'Evening Work'].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Timer size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{session}</span>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full">
                    25:00
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Stats */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Focus Statistics
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Daily Focus</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">75%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Weekly Sessions</span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">18</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Consistency</span>
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">88%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusTimerPage;