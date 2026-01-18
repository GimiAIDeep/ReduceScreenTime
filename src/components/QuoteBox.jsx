// src/components/QuoteBox.jsx
import React, { useState, useEffect } from 'react';
import { RefreshCw, Heart, Share2, Sparkles } from 'lucide-react';
import { quotes } from '../data/quotes';

const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [liked, setLiked] = useState(false);
  const [fade, setFade] = useState(false);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const handleNewQuote = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setFade(false);
      setLiked(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(handleNewQuote, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group">
      {/* Floating Sparkles */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles size={16} className="text-white" />
      </div>
      
      <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
        {/* Quote Content */}
        <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          {/* Quote Icon */}
          <div className="mb-6 text-6xl text-blue-400/30 dark:text-blue-500/30">
            "
          </div>
          
          {/* Quote Text */}
          <p className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
            {currentQuote.text}
          </p>
          
          {/* Author */}
          <div className="flex items-center justify-between">
            <div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-2"></div>
              <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentQuote.author}
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setLiked(!liked)}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  liked 
                    ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Heart size={20} className={liked ? 'fill-current' : ''} />
              </button>
              
              <button
                onClick={handleNewQuote}
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 transform hover:scale-110 hover:rotate-180"
              >
                <RefreshCw size={20} />
              </button>
              
              <button className="p-3 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 text-white transition-all duration-300 transform hover:scale-110">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-500/5 to-orange-500/5 rounded-full translate-y-8 -translate-x-8"></div>
      </div>
    </div>
  );
};

export default QuoteBox;