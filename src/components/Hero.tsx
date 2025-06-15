import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedBackground from './hero/AnimatedBackground';
import HeroTitle from './hero/HeroTitle';
import HeroSocials from './hero/HeroSocials';
import HeroCtas from './hero/HeroCtas';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6 text-center relative z-10">
        <HeroTitle />
        <HeroSocials />
        <HeroCtas />
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-blue-400 transition-colors duration-300" />
      </button>
    </section>
  );
};

export default Hero;