import React from 'react';

interface NavItem {
  name: string;
  href: string;
}

interface DesktopNavProps {
  navItems: NavItem[];
  scrollToSection: (href: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, scrollToSection }) => (
  <div className="hidden md:flex space-x-8">
    {navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => scrollToSection(item.href)}
        className="hover:text-blue-400 transition-colors duration-300 relative group"
      >
        {item.name}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </button>
    ))}
  </div>
);

export default DesktopNav; 