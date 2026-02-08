import React from 'react';
import { aboutIconMap } from '../../lib/iconMap';

interface FunFact {
    icon: string;
    value: string;
    label: string;
    color: string;
}

interface FunFactCardProps {
  fact: FunFact;
}

const FunFactCard: React.FC<FunFactCardProps> = ({ fact }) => {
  const Icon = aboutIconMap[fact.icon] ?? aboutIconMap.Code;
  return (
    <div className="text-center">
      <Icon className={`w-12 h-12 ${fact.color} mx-auto mb-4`} />
      <h3 className="text-2xl font-bold text-blue-400">{fact.value}</h3>
      <p className="text-gray-400">{fact.label}</p>
    </div>
  );
};

export default FunFactCard; 