import React from 'react';
import { useInView } from '../hooks/useInView';
import { contactData } from '../data';
import SectionTitle from './shared/SectionTitle';
import ContactHeader from './contact/ContactHeader';
import ContactDetailCard from './contact/ContactDetailCard';
import ContactSocials from './contact/ContactSocials';
import Footer from './shared/Footer';

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
          <SectionTitle title={contactData.title} />

          <div className="max-w-4xl mx-auto">
            <ContactHeader
              subtitle={contactData.subtitle}
              description={contactData.description}
            />

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactData.contactDetails.map((detail, index) => (
                <ContactDetailCard key={index} detail={detail} />
              ))}
            </div>

            <ContactSocials
              title={contactData.socialsTitle}
              socials={contactData.socials}
            />
          </div>
        </div>
      </div>
      <Footer footerText={contactData.footerText} />
    </section>
  );
};

export default Contact;