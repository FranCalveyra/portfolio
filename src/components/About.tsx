import React from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Coffee, Gamepad2, Heart, Lightbulb, Users } from 'lucide-react';

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
            About Me
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hello! I'm John, a passionate software engineer with a love for creating 
                  innovative solutions and beautiful user experiences. My journey in tech 
                  started with curiosity and has evolved into a career dedicated to 
                  crafting meaningful software.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in full-stack development with expertise in modern web 
                  technologies, mobile applications, and game development. I believe in 
                  writing clean, maintainable code and following best practices to deliver 
                  high-quality solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good cup of coffee 
                  while working on side projects.
                </p>
              </div>

              {/* Skills Icons Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                  <Code className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold mb-2">Clean Code</h3>
                  <p className="text-sm text-gray-400">Writing maintainable and scalable code</p>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                  <Lightbulb className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold mb-2">Problem Solving</h3>
                  <p className="text-sm text-gray-400">Finding creative solutions to complex challenges</p>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                  <Users className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-semibold mb-2">Team Player</h3>
                  <p className="text-sm text-gray-400">Collaborating effectively in diverse teams</p>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                  <Heart className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="font-semibold mb-2">Passionate</h3>
                  <p className="text-sm text-gray-400">Driven by curiosity and love for technology</p>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Coffee className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">500+</h3>
                <p className="text-gray-400">Cups of Coffee</p>
              </div>
              <div className="text-center">
                <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <Gamepad2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">10+</h3>
                <p className="text-gray-400">Games Developed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;