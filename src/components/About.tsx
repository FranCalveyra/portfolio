import React from 'react';
import { useInView } from '../hooks/useInView';
import { usePortfolio } from '../contexts/PortfolioContext';
import SectionTitle from './shared/SectionTitle';
import AboutParagraphs from './about/AboutParagraphs';
import SkillCard from './about/SkillCard';
import FunFactCard from './about/FunFactCard';

const About: React.FC = () => {
  const { data } = usePortfolio();
  const { ref, isInView } = useInView({ threshold: 0.2 });

  if (!data) return null;
  const { about } = data;

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionTitle title={about.title} />

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AboutParagraphs paragraphs={about.paragraphs} />

              <div className="grid grid-cols-2 gap-6">
                {about.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {about.funFacts.map((fact, index) => (
                <FunFactCard key={index} fact={fact} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;