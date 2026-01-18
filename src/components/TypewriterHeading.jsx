// src/components/TypewriterHeading.jsx
import React, { useState, useEffect } from 'react';

const TypewriterHeading = ({ texts, speed = 100 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < texts[currentTextIndex].length) {
        setCurrentText(prev => prev + texts[currentTextIndex][currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else if (!isDeleting && currentIndex === texts[currentTextIndex].length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentTextIndex, texts, speed]);

  return (
    <div className="flex items-center">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {currentText}
      </h1>
      <span className="w-[3px] h-12 bg-gradient-to-b from-blue-500 to-purple-500 animate-blink ml-1"></span>
    </div>
  );
};

export default TypewriterHeading;