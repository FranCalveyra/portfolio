import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { usePortfolio } from '../../contexts/PortfolioContext';

const HeroSocials: React.FC = () => {
  const { data } = usePortfolio();
  if (!data) return null;
  const { socials } = data.hero;
  return (
    <div className="flex justify-center space-x-6 mb-12">
      <a 
        href={socials.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
      >
        <Github size={24} />
      </a>
      <a 
        href={socials.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href={socials.email}
        className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default HeroSocials; 