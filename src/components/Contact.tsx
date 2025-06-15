import React from 'react';
import { useInView } from '../hooks/useInView';
import { MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Let's work together!
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm always interested in new opportunities, collaborations, and 
                exciting projects. Whether you have a question, want to discuss 
                a project, or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-700/50 transition-all duration-300 transform group-hover:scale-110">
                  <img 
                    src="https://skillicons.dev/icons?i=gmail" 
                    alt="Email"
                    className="w-8 h-8"
                  />
                </div>
                <h4 className="font-medium text-white mb-2">Email</h4>
                <a 
                  href="mailto:john@example.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  john@example.com
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-700/50 transition-all duration-300 transform group-hover:scale-110">
                  <img 
                    src="https://skillicons.dev/icons?i=linkedin" 
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                </div>
                <h4 className="font-medium text-white mb-2">LinkedIn</h4>
                <a 
                  href="https://linkedin.com/in/johndoe" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  linkedin.com/in/johndoe
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-700/50 transition-all duration-300 transform group-hover:scale-110">
                  <MapPin className="w-8 h-8 text-red-400" />
                </div>
                <h4 className="font-medium text-white mb-2">Location</h4>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-medium mb-6 text-white">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
                >
                  <Twitter className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 John Doe. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;