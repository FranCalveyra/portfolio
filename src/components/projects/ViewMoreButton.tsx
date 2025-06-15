import React from 'react';
import { Github } from 'lucide-react';

interface ViewMoreButtonProps {
  href: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ href }) => (
  <div className="text-center mt-12">
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      <Github size={20} />
      <span>View All Projects</span>
    </a>
  </div>
);

export default ViewMoreButton; 