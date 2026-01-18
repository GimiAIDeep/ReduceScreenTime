// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Target, TrendingDown, Zap, Users, Shield, Sparkles } from 'lucide-react';
import TypewriterHeading from '../components/TypewriterHeading';

const Home = () => {
  const features = [
    {
      icon: <Smartphone />,
      title: "Screen Time Tracking",
      description: "Monitor your daily device usage with intuitive analytics",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Target />,
      title: "Focus Timer",
      description: "Pomodoro technique timer for enhanced productivity",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <TrendingDown />,
      title: "Reduction Goals",
      description: "Set and achieve screen time reduction targets",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Zap />,
      description: "Stay motivated with daily tips and progress tracking",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <div className="relative">
          {/* Animated Background */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative">
            <h1 className="mb-6">
              <TypewriterHeading texts={[
                "Reduce Screen Time",
                "Boost Your Focus",
                "Live Mindfully",
                "Digital Detox Now"
              ]} />
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
              Take control of your digital life. Our app helps you track screen time, 
              improve focus, and build healthier digital habits for a more balanced lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <Link
                to="/focus-timer"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-800 dark:text-white bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-2" />
                <span>Try Focus Timer</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            85%
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Focus Improved</p>
        </div>
        
        <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            3.5h
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Avg. Time Saved</p>
        </div>
        
        <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            10K+
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Active Users</p>
        </div>
        
        <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            42%
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Stress Reduced</p>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Powerful Features
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
              
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-12">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Life?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have successfully reduced their screen time and improved focus.
            </p>
            
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-600 bg-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Sparkles className="mr-2" />
              <span>Get Started For Free</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
