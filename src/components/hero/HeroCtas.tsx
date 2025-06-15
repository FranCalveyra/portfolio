import React from 'react';
import Button from '../shared/Button';

const HeroCtas: React.FC = () => {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <Button 
        onClick={() => scrollTo('#projects')}
        variant="primary"
      >
        View My Work
      </Button>
      <Button 
        onClick={() => scrollTo('#about')}
        variant="secondary"
      >
        About Me
      </Button>
      <Button 
        onClick={() => scrollTo('#contact')}
        variant="outline"
      >
        Get In Touch
      </Button>
    </div>
  );
};

export default HeroCtas; 