import React from 'react';
import { useInView } from '../hooks/useInView';
import { aboutData, iconComponents } from '../data';

const About: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {aboutData.title}
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                {aboutData.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Skills Icons Grid */}
              <div className="grid grid-cols-2 gap-6">
                {aboutData.skills.map((skill, index) => {
                  const Icon = iconComponents[skill.icon as keyof typeof iconComponents];
                  return (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                      <Icon className={`w-8 h-8 ${skill.color} mb-4`} />
                      <h3 className="font-semibold mb-2">{skill.title}</h3>
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {aboutData.funFacts.map((fact, index) => {
                const Icon = iconComponents[fact.icon as keyof typeof iconComponents];
                return (
                  <div key={index} className="text-center">
                    <Icon className={`w-12 h-12 ${fact.color} mx-auto mb-4`} />
                    <h3 className="text-2xl font-bold text-blue-400">{fact.value}</h3>
                    <p className="text-gray-400">{fact.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;