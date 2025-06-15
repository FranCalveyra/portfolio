import React from 'react';
import { useInView } from '../hooks/useInView';

const Skills: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
        { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript' },
        { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
        { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
        { name: 'Vue.js', icon: 'https://skillicons.dev/icons?i=vue' },
        { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
        { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
        { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=javascript' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
        { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
        { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgresql' },
        { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
        { name: 'Express.js', icon: 'https://skillicons.dev/icons?i=express' },
        { name: 'Django', icon: 'https://skillicons.dev/icons?i=django' },
        { name: 'FastAPI', icon: 'https://skillicons.dev/icons?i=fastapi' },
        { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
        { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
        { name: 'AWS', icon: 'https://skillicons.dev/icons?i=aws' },
        { name: 'Unity', icon: 'https://skillicons.dev/icons?i=unity' },
        { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
        { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
        { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
        { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
      ]
    }
  ];

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
            Skills & Technologies
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
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