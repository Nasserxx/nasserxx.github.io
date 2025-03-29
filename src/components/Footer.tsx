import { FC } from 'react';
import cvData from '@/data/cv-data';
import siteText from '@/data/site-text';

const Footer: FC = () => {
  const { contact } = cvData.personalInfo;
  const { title, address: addressLabel, copyright } = siteText.sections.contact;
  const { email, phone, linkedin, github } = siteText.accessibility;
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright.replace('%YEAR%', currentYear.toString());

  return (
    <footer id="contact-footer" className="bg-secondary dark:bg-gray-900 text-text-light py-12 px-4 text-center">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-white dark:text-gray-100 mb-8">{title}</h2>
        
        <div id="footer-contact-info" className="flex justify-center space-x-8 mb-8">
          {contact.email && (
            <a 
              href={`mailto:${contact.email}`} 
              aria-label={email}
              title={email}
              className="text-3xl text-text-light opacity-80 hover:text-accent dark:hover:text-dark-accent hover:opacity-100 transform transition-all hover:scale-110"
            >
              <i className="fas fa-envelope"></i>
            </a>
          )}
          
          {contact.phone && (
            <a 
              href={`tel:${contact.phone}`} 
              aria-label={phone}
              title={phone}
              className="text-3xl text-text-light opacity-80 hover:text-accent dark:hover:text-dark-accent hover:opacity-100 transform transition-all hover:scale-110"
            >
              <i className="fas fa-phone"></i>
            </a>
          )}
          
          {contact.linkedin && (
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={linkedin}
              title={linkedin}
              className="text-3xl text-text-light opacity-80 hover:text-accent dark:hover:text-dark-accent hover:opacity-100 transform transition-all hover:scale-110"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          
          {contact.github && (
            <a 
              href={contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={github}
              title={github}
              className="text-3xl text-text-light opacity-80 hover:text-accent dark:hover:text-dark-accent hover:opacity-100 transform transition-all hover:scale-110"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
        
        {contact.address && (
          <div className="text-white mb-6">
            <p className="mb-1 text-sm opacity-80">{addressLabel}</p>
            <p className="text-md">{contact.address}</p>
          </div>
        )}
        
        <p className="text-sm opacity-70">
          {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer; 