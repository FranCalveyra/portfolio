import React from 'react';

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
  scrollToSection: (href: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems, scrollToSection }) => (
  <div className="md:hidden mt-4 py-4 border-t border-slate-700">
    {navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => scrollToSection(item.href)}
        className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-300"
      >
        {item.name}
      </button>
    ))}
  </div>
);

export default MobileNav; 