// src/pages/TipsMotivation.jsx
import React, { useState } from 'react';
import { Lightbulb, TrendingUp, Heart, Zap, Clock, BookOpen, Brain, Target, Award, Sparkles } from 'lucide-react';
import QuoteBox from '../components/QuoteBox';

const TipsMotivation = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tips', icon: <Lightbulb size={20} /> },
    { id: 'focus', label: 'Focus', icon: <Target size={20} /> },
    { id: 'habits', label: 'Habits', icon: <TrendingUp size={20} /> },
    { id: 'wellness', label: 'Wellness', icon: <Heart size={20} /> },
    { id: 'productivity', label: 'Productivity', icon: <Zap size={20} /> },
  ];

  const tips = [
    {
      id: 1,
      title: "Digital Sunset",
      description: "Stop using screens 1 hour before bedtime to improve sleep quality.",
      category: 'wellness',
      icon: <Clock />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: "Focus Blocks",
      description: "Use 25-minute focus blocks with 5-minute breaks (Pomodoro Technique).",
      category: 'focus',
      icon: <Target />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: "Notification Diet",
      description: "Turn off non-essential notifications to reduce distractions.",
      category: 'habits',
      icon: <Bell />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: "Morning Ritual",
      description: "Start your day without phone for the first 30 minutes after waking.",
      category: 'habits',
      icon: <Sun />,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 5,
      title: "App Audit",
      description: "Regularly review and delete apps that waste your time.",
      category: 'productivity',
      icon: <Trash2 />,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 6,
      title: "Focus Environment",
      description: "Create a dedicated workspace free from digital distractions.",
      category: 'focus',
      icon: <Home />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 7,
      title: "Mindful Scrolling",
      description: "Set intentions before opening social media apps.",
      category: 'wellness',
      icon: <Brain />,
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 8,
      title: "Achievement Tracking",
      description: "Celebrate small wins in your digital detox journey.",
      category: 'habits',
      icon: <Award />,
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  const filteredTips = activeCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === activeCategory);

  const successStories = [
    {
      name: "Alex Johnson",
      achievement: "Reduced screen time by 4 hours daily",
      quote: "This app helped me reclaim my evenings for family time and hobbies."
    },
    {
      name: "Sarah Miller",
      achievement: "Improved focus at work",
      quote: "The focus timer increased my productivity by 40% in just two weeks."
    },
    {
      name: "David Chen",
      achievement: "28-day streak achieved",
      quote: "Building digital discipline has been life-changing for my mental health."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tips & Motivation Hub
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
          Discover proven strategies to reduce screen time, boost focus, and build healthier digital habits.
        </p>
      </div>

      {/* Quote of the Day */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            <span className="flex items-center">
              <Sparkles className="mr-2 text-yellow-500" />
              Daily Inspiration
            </span>
          </h2>
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
            Refreshes Daily
          </span>
        </div>
        <QuoteBox />
      </div>

      {/* Category Filter */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Browse Tips by Category
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              className="group bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {tip.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {tip.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {tip.description}
              </p>
              
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                {tip.category.charAt(0).toUpperCase() + tip.category.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              {/* Decorative Avatar */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  {story.name.charAt(0)}
                </div>
              </div>
              
              <div className="pt-8 text-center">
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {story.name}
                </h4>
                
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    <Zap className="mr-2" size={14} />
                    {story.achievement}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "{story.quote}"
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Sparkles className="text-yellow-500" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Ready to Write Your Success Story?
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their digital habits and reclaimed their time.
          </p>
          
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipsMotivation;