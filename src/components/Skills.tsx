import React from 'react';
import { useInView } from '../hooks/useInView';
import { skillsData } from '../data';
import SectionTitle from './shared/SectionTitle';
import SkillCategoryCard from './skills/SkillCategoryCard';

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
          <SectionTitle title={skillsData.title} />

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {skillsData.skillCategories.map((category, categoryIndex) => (
              <SkillCategoryCard 
                key={category.title}
                category={category}
                categoryIndex={categoryIndex}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;