import React from 'react';
import { useInView } from '../hooks/useInView';
import { contactData } from '../data';

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
            {contactData.title}
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                {contactData.subtitle}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {contactData.description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactData.contactDetails.map((detail, index) => {
                const Icon = contactData.iconComponents[detail.icon as keyof typeof contactData.iconComponents];
                return (
                  <div key={index} className="flex flex-col items-center text-center group">
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
              })}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-medium mb-6 text-white">{contactData.socialsTitle}</h4>
              <div className="flex justify-center space-x-6">
                {contactData.socials.map((social, index) => {
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p dangerouslySetInnerHTML={{ __html: contactData.footerText }}></p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;