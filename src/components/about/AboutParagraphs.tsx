import React from 'react';

interface AboutParagraphsProps {
  paragraphs: string[];
}

const AboutParagraphs: React.FC<AboutParagraphsProps> = ({ paragraphs }) => (
  <div className="space-y-6">
    {paragraphs.map((paragraph, index) => (
      <p key={index} className="text-lg text-gray-300 leading-relaxed">
        {paragraph}
      </p>
    ))}
  </div>
);

export default AboutParagraphs; 