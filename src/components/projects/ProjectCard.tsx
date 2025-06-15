import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../../data';
import TechCarousel from '../shared/TechCarousel';

interface Project {
  title: string;
  image: string;
  icon: string;
  color: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

interface ProjectCardProps {
  project: Project;
  isInView: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isInView, index }) => {
  const Icon = projectsData.iconComponents[project.icon as keyof typeof projectsData.iconComponents];

  return (
    <div className={`bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-700/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${isInView ? `animate-fadeInUp delay-${index * 100}` : 'opacity-0'}`}>
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <Icon className={`w-6 h-6 text-white bg-gradient-to-r ${project.color} p-1 rounded`} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="mb-4">
          <TechCarousel
            technologies={project.technologies}
            techIcons={projectsData.techIcons}
            itemsPerView={4}
            iconSize="w-8 h-8"
            translateXValue={40}
          />
        </div>
        <div className="flex space-x-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-300 text-sm"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          <a 
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg hover:opacity-90 transition-opacity duration-300 text-sm text-white`}
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 