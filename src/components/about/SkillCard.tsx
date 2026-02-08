import React from 'react';
import { aboutIconMap } from '../../lib/iconMap';

interface Skill {
    icon: string;
    title: string;
    description: string;
    color: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const Icon = aboutIconMap[skill.icon] ?? aboutIconMap.Code;
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
      <Icon className={`w-8 h-8 ${skill.color} mb-4`} />
      <h3 className="font-semibold mb-2">{skill.title}</h3>
      <p className="text-sm text-gray-400">{skill.description}</p>
    </div>
  );
};

export default SkillCard; 