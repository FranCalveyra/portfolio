import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { heroData } from '../../data';

const HeroSocials: React.FC = () => (
  <div className="flex justify-center space-x-6 mb-12">
    <a 
      href={heroData.socials.github} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
    >
      <Github size={24} />
    </a>
    <a 
      href={heroData.socials.linkedin} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
    >
      <Linkedin size={24} />
    </a>
    <a 
      href={heroData.socials.email}
      className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
    >
      <Mail size={24} />
    </a>
  </div>
);

export default HeroSocials; 