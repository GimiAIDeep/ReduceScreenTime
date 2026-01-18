// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  LayoutDashboard, 
  Timer, 
  Lightbulb, 
  Info, 
  LogIn, 
  UserPlus,
  Sun,
  Moon,
  Smartphone
} from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/focus-timer', label: 'Focus Timer', icon: <Timer size={20} /> },
    { path: '/tips-motivation', label: 'Tips & Motivation', icon: <Lightbulb size={20} /> },
    { path: '/about', label: 'About', icon: <Info size={20} /> },
    { path: '/login', label: 'Login', icon: <LogIn size={20} /> },
    { path: '/signup', label: 'Signup', icon: <UserPlus size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ScreenTime Reducer
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Focus Booster</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-110"
            >
              {darkMode ? (
                <Sun className="text-yellow-500" size={20} />
              ) : (
                <Moon className="text-gray-700" size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
            <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;