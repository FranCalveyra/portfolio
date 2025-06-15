import React from 'react';

interface ContactHeaderProps {
  subtitle: string;
  description: string;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({ subtitle, description }) => (
  <div className="text-center mb-12">
    <h3 className="text-2xl font-semibold mb-6 text-white">{subtitle}</h3>
    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
      {description}
    </p>
  </div>
);

export default ContactHeader; 