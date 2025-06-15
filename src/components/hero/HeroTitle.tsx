import React, { useState, useEffect } from 'react';
import { heroData } from '../../data';

const HeroTitle: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = heroData.titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % heroData.titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
        {heroData.name}
      </h1>
      <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
        <span className="text-gray-300">I'm a </span>
        <span className="text-blue-400 ml-2 font-semibold">
          {currentText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        {heroData.description}
      </p>
    </div>
  );
};

export default HeroTitle; 