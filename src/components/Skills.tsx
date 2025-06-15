import React from 'react';
import { useInView } from '../hooks/useInView';
import { skillsData } from '../data';

const Skills: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {skillsData.title}
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {skillsData.skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-8 text-center text-blue-400">
                  {category.title}
                </h3>
                <div className="grid grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className={`flex flex-col items-center group transition-all duration-1000 delay-${categoryIndex * 200 + skillIndex * 100} ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <div className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs text-gray-300 text-center group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;