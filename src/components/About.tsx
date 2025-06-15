import React from 'react';
import { useInView } from '../hooks/useInView';
import { aboutData } from '../data';
import SectionTitle from './shared/SectionTitle';
import AboutParagraphs from './about/AboutParagraphs';
import SkillCard from './about/SkillCard';
import FunFactCard from './about/FunFactCard';

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
          <SectionTitle title={aboutData.title} />

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AboutParagraphs paragraphs={aboutData.paragraphs} />

              <div className="grid grid-cols-2 gap-6">
                {aboutData.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {aboutData.funFacts.map((fact, index) => (
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