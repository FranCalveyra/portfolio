import React from 'react';
import { useInView } from '../hooks/useInView';
import { experienceData } from '../data';
import SectionTitle from './shared/SectionTitle';
import ExperienceCard from './experience/ExperienceCard';

const Experience: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionTitle title={experienceData.title} />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>

              {experienceData.experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className="relative mb-12 md:pl-0 md:ml-0"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} left-2 md:left-1/2 transform md:-translate-x-1/2 mt-6 z-10`}></div>
                  
                  <ExperienceCard experience={experience} isInView={isInView} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;