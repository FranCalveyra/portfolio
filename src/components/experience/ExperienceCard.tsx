import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../../data';
import TechCarousel from '../shared/TechCarousel';

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  color: string;
}

interface ExperienceCardProps {
  experience: Experience;
  isInView: boolean;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isInView, index }) => (
  <div className={`ml-12 md:ml-0 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/30 transition-all duration-500 transform hover:scale-105 ${isInView ? `animate-fadeInUp delay-${index * 200}` : 'opacity-0'}`}>
    <div className="flex items-center mb-3">
      <Briefcase className={`w-5 h-5 mr-2 bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`} />
      <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
    </div>
    <div className="mb-4">
      <p className="text-blue-400 font-medium text-lg">{experience.company}</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 text-gray-400 text-sm">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {experience.location}
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {experience.duration}
        </div>
      </div>
    </div>
    <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
    <div className="flex justify-center">
      <TechCarousel 
        technologies={experience.technologies}
        techIcons={experienceData.techIcons}
        itemsPerView={5}
        iconSize="w-6 h-6"
        translateXValue={32}
      />
    </div>
  </div>
);

export default ExperienceCard; 