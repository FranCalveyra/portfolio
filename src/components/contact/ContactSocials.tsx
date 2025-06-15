import React from 'react';
import { contactData } from '../../data';

interface Social {
    icon: string;
    href: string;
}

interface ContactSocialsProps {
  title: string;
  socials: Social[];
}

const ContactSocials: React.FC<ContactSocialsProps> = ({ title, socials }) => {
  return (
    <div className="text-center">
      <h4 className="text-lg font-medium mb-6 text-white">{title}</h4>
      <div className="flex justify-center space-x-6">
        {socials.map((social, index) => {
          const Icon = contactData.iconComponents[social.icon as keyof typeof contactData.iconComponents];
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
            >
              <Icon className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSocials; 