import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillCategoryCardProps {
  category: SkillCategory;
  categoryIndex: number;
  isInView: boolean;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, categoryIndex, isInView }) => (
  <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8">
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
);

export default SkillCategoryCard; 