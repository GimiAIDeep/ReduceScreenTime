// src/components/Footer.jsx
import React from 'react';
import { Heart, Coffee, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ScreenTime Reducer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              Helping you reduce screen time, boost focus, and live a more balanced digital life.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-110">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Made with <Heart className="inline-block w-4 h-4 text-red-500 animate-pulse" /> and <Coffee className="inline-block w-4 h-4 text-yellow-600" /> • © {new Date().getFullYear()} ScreenTime Reducer
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Designed to help you focus better and live mindfully in the digital age.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;