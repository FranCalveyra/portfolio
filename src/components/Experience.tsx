import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const TechCarousel: React.FC<{ technologies: string[] }> = ({ technologies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;
  const maxIndex = Math.max(0, technologies.length - itemsPerView);

  const techIcons: { [key: string]: string } = {
    'React': 'https://skillicons.dev/icons?i=react',
    'Node.js': 'https://skillicons.dev/icons?i=nodejs',
    'AWS': 'https://skillicons.dev/icons?i=aws',
    'Docker': 'https://skillicons.dev/icons?i=docker',
    'TypeScript': 'https://skillicons.dev/icons?i=typescript',
    'Vue.js': 'https://skillicons.dev/icons?i=vue',
    'Python': 'https://skillicons.dev/icons?i=python',
    'PostgreSQL': 'https://skillicons.dev/icons?i=postgresql',
    'Redis': 'https://skillicons.dev/icons?i=redis',
    'GraphQL': 'https://skillicons.dev/icons?i=graphql',
    'JavaScript': 'https://skillicons.dev/icons?i=javascript',
    'React Native': 'https://skillicons.dev/icons?i=react',
    'MongoDB': 'https://skillicons.dev/icons?i=mongodb',
    'Express.js': 'https://skillicons.dev/icons?i=express',
    'Java': 'https://skillicons.dev/icons?i=java',
    'Spring Boot': 'https://skillicons.dev/icons?i=spring',
    'MySQL': 'https://skillicons.dev/icons?i=mysql',
    'Git': 'https://skillicons.dev/icons?i=git',
  };

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  if (technologies.length <= itemsPerView) {
    return (
      <div className="flex justify-center space-x-2">
        {technologies.map((tech) => (
          <div key={tech} className="w-6 h-6 group">
            <img 
              src={techIcons[tech] || 'https://skillicons.dev/icons?i=js'} 
              alt={tech}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              title={tech}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative flex items-center">
      <button 
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="p-1 rounded-full bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
      >
        <ChevronLeft size={12} />
      </button>
      
      <div className="flex space-x-2 mx-2 overflow-hidden">
        <div 
          className="flex space-x-2 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 32}px)` }}
        >
          {technologies.map((tech) => (
            <div key={tech} className="w-6 h-6 flex-shrink-0 group">
              <img 
                src={techIcons[tech] || 'https://skillicons.dev/icons?i=js'} 
                alt={tech}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                title={tech}
              />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
        className="p-1 rounded-full bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
      >
        <ChevronRight size={12} />
      </button>
    </div>
  );
};

const Experience: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: 'Led development of microservices architecture, mentored junior developers, and implemented CI/CD pipelines reducing deployment time by 60%.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      duration: '2020 - 2022',
      description: 'Built scalable web applications from scratch, collaborated with design team to create intuitive user interfaces, and optimized database performance.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Junior Developer',
      company: 'DevAgency',
      location: 'New York, NY',
      duration: '2019 - 2020',
      description: 'Developed responsive websites and mobile applications, participated in code reviews, and contributed to open-source projects.',
      technologies: ['JavaScript', 'React Native', 'MongoDB', 'Express.js'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Software Engineering Intern',
      company: 'BigTech Inc.',
      location: 'Seattle, WA',
      duration: '2018 - 2019',
      description: 'Assisted in developing internal tools, wrote unit tests, and participated in agile development processes.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Git'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>

              {experiences.map((experience, index) => (
                <div 
                  key={experience.title}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} left-2 md:left-1/2 transform md:-translate-x-1/2 mt-6 z-10`}></div>
                  
                  {/* Experience Card */}
                  <div 
                    className={`ml-12 md:ml-0 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/30 transition-all duration-500 transform hover:scale-105 ${
                      isInView ? `animate-fadeInUp delay-${index * 200}` : 'opacity-0'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <Briefcase className={`w-5 h-5 mr-2 bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`} />
                      <h3 className="text-xl font-semibold text-white">
                        {experience.title}
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-blue-400 font-medium text-lg">
                        {experience.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex justify-center">
                      <TechCarousel technologies={experience.technologies} />
                    </div>
                  </div>
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