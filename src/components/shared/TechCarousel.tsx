import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TechCarouselProps {
  technologies: string[];
  techIcons: { [key: string]: string };
  itemsPerView: number;
  iconSize: string;
  translateXValue: number;
}

const TechCarousel: React.FC<TechCarouselProps> = ({ technologies, techIcons, itemsPerView, iconSize, translateXValue }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, technologies.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  if (technologies.length <= itemsPerView) {
    return (
      <div className="flex justify-center space-x-2">
        {technologies.map((tech) => (
          <div key={tech} className={`${iconSize} group`}>
            <img 
              src={techIcons[tech] || 'https://skillicons.dev/icons?i=js'} 
              alt={tech}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              title={tech}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative flex items-center">
      <button 
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="p-1 rounded-full bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
      >
        <ChevronLeft size={12} />
      </button>
      
      <div className="flex space-x-2 mx-2 overflow-hidden">
        <div 
          className="flex space-x-2 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * translateXValue}px)` }}
        >
          {technologies.map((tech) => (
            <div key={tech} className={`${iconSize} flex-shrink-0 group`}>
              <img 
                src={techIcons[tech] || 'https://skillicons.dev/icons?i=js'} 
                alt={tech}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                title={tech}
              />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
        className="p-1 rounded-full bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
      >
        <ChevronRight size={12} />
      </button>
    </div>
  );
};

export default TechCarousel; 