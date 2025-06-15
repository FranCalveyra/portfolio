import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, Gamepad2, Globe, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

const TechCarousel: React.FC<{ technologies: string[] }> = ({ technologies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, technologies.length - itemsPerView);

  const techIcons: { [key: string]: string } = {
    'React': 'https://skillicons.dev/icons?i=react',
    'Node.js': 'https://skillicons.dev/icons?i=nodejs',
    'PostgreSQL': 'https://skillicons.dev/icons?i=postgresql',
    'Stripe': 'https://skillicons.dev/icons?i=stripe',
    'Tailwind CSS': 'https://skillicons.dev/icons?i=tailwind',
    'Firebase': 'https://skillicons.dev/icons?i=firebase',
    'TypeScript': 'https://skillicons.dev/icons?i=typescript',
    'Material-UI': 'https://skillicons.dev/icons?i=materialui',
    'Unity': 'https://skillicons.dev/icons?i=unity',
    'C#': 'https://skillicons.dev/icons?i=cs',
    'Photoshop': 'https://skillicons.dev/icons?i=photoshop',
    'Audacity': 'https://skillicons.dev/icons?i=audacity',
    'Vue.js': 'https://skillicons.dev/icons?i=vue',
    'OpenWeather API': 'https://skillicons.dev/icons?i=api',
    'Chart.js': 'https://skillicons.dev/icons?i=js',
    'SCSS': 'https://skillicons.dev/icons?i=sass',
    'Next.js': 'https://skillicons.dev/icons?i=nextjs',
    'MongoDB': 'https://skillicons.dev/icons?i=mongodb',
    'D3.js': 'https://skillicons.dev/icons?i=d3',
    'Python': 'https://skillicons.dev/icons?i=python',
    'TensorFlow': 'https://skillicons.dev/icons?i=tensorflow',
    'Flask': 'https://skillicons.dev/icons?i=flask',
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
          <div key={tech} className="w-8 h-8 group">
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
        <ChevronLeft size={16} />
      </button>
      
      <div className="flex space-x-2 mx-3 overflow-hidden">
        <div 
          className="flex space-x-2 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 40}px)` }}
        >
          {technologies.map((tech) => (
            <div key={tech} className="w-8 h-8 flex-shrink-0 group">
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
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

const Projects: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application built with React and Firebase. Real-time updates, team collaboration, and project tracking.',
      technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: Smartphone,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: '2D Platformer Game',
      description: 'An indie 2D platformer game developed in Unity with C#. Features custom physics, level editor, and engaging gameplay mechanics.',
      technologies: ['Unity', 'C#', 'Photoshop', 'Audacity'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Weather Forecast App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'SCSS'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: Globe,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      technologies: ['Next.js', 'MongoDB', 'D3.js', 'Node.js'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot with natural language processing, context awareness, and integration with popular messaging platforms.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: Globe,
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-700/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${
                  isInView ? `animate-fadeInUp delay-${index * 100}` : 'opacity-0'
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <project.icon className={`w-6 h-6 text-white bg-gradient-to-r ${project.color} p-1 rounded`} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Carousel */}
                  <div className="mb-4">
                    <TechCarousel technologies={project.technologies} />
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-300 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg hover:opacity-90 transition-opacity duration-300 text-sm text-white`}
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;