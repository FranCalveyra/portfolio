import React from 'react';
import { contactData } from '../../data';

interface ContactDetail {
  icon: string;
  title: string;
  value: string;
  href?: string;
  color?: string;
}

interface ContactDetailCardProps {
  detail: ContactDetail;
}

const ContactDetailCard: React.FC<ContactDetailCardProps> = ({ detail }) => {
  const Icon = contactData.iconComponents[detail.icon as keyof typeof contactData.iconComponents];

  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-700/50 transition-all duration-300 transform group-hover:scale-110">
        {detail.href ? (
          <img 
            src={detail.icon} 
            alt={detail.title}
            className="w-8 h-8"
          />
        ) : (
          <Icon className={`w-8 h-8 ${detail.color}`} />
        )}
      </div>
      <h4 className="font-medium text-white mb-2">{detail.title}</h4>
      {detail.href ? (
        <a 
          href={detail.href} 
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          target={detail.href.startsWith('mailto:') ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          {detail.value}
        </a>
      ) : (
        <p className="text-gray-400">{detail.value}</p>
      )}
    </div>
  );
};

export default ContactDetailCard; 