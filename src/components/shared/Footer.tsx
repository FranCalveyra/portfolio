import React from 'react';

interface FooterProps {
  footerText: string;
}

const Footer: React.FC<FooterProps> = ({ footerText }) => (
  <footer className="mt-20 pt-8 border-t border-slate-700">
    <div className="container mx-auto px-6">
      <div className="text-center text-gray-400">
        <p dangerouslySetInnerHTML={{ __html: footerText }}></p>
      </div>
    </div>
  </footer>
);

export default Footer; 