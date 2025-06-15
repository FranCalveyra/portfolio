import React from 'react';
import { useInView } from '../hooks/useInView';
import { projectsData } from '../data';
import SectionTitle from './shared/SectionTitle';
import ProjectCard from './projects/ProjectCard';
import ViewMoreButton from './projects/ViewMoreButton';

const Projects: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionTitle title={projectsData.title} />

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.projectCategories.map((project, index) => (
              <ProjectCard 
                key={project.title}
                project={project}
                isInView={isInView}
                index={index}
              />
            ))}
          </div>

          <ViewMoreButton href={projectsData.viewMoreLink} />
        </div>
      </div>
    </section>
  );
};

export default Projects;