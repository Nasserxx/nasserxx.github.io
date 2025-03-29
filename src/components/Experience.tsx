import { FC } from 'react';
import cvData from '@/data/cv-data';
import siteText from '@/data/site-text';
import { ExperienceItem } from '@/data/cv-data';

const ExperienceCard: FC<{ experience: ExperienceItem; index: number }> = ({ experience, index }) => {
  // Alternate sides for desktop view
  const isLeft = index % 2 === 0;
  
  return (
    <article 
      className={`experience-item relative ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} w-full md:w-[45%] mb-10`}
    >
      {/* Timeline dot */}
      <div className={`timeline-dot absolute top-5 z-10 w-5 h-5 bg-white dark:bg-gray-700 rounded-full border-4 border-accent dark:border-dark-accent 
        ${isLeft ? 'right-0 md:right-[-12px]' : 'left-0 md:left-[-12px]'}`}
      />
      
      {/* Content */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-accent dark:border-dark-accent">
        <div className="mb-4">
          {/* Company and location first */}
          <h3 className="text-lg font-bold text-secondary dark:text-dark-secondary mb-1">
            {experience.company} <span className="font-normal text-gray-600 dark:text-gray-400">{experience.location}</span>
          </h3>
          
          {/* Role title below */}
          <h4 className="text-xl font-semibold text-primary dark:text-dark-primary mb-2">
            {experience.roleTitle}
          </h4>
          
          {/* Duration */}
          <div className="inline-block bg-accent/10 dark:bg-dark-accent/20 text-accent dark:text-dark-accent px-3 py-1 rounded-full text-sm font-medium">
            {experience.duration}
          </div>
        </div>
        
        <ul className="list-none pl-0 mt-4 space-y-2">
          {experience.responsibilities.map((resp, i) => (
            <li key={i} className="pl-7 relative text-gray-700 dark:text-gray-300">
              <span className="absolute text-accent dark:text-dark-accent text-sm left-0 top-1">
                <i className="fas fa-check-circle"></i>
              </span>
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Experience: FC = () => {
  const { professionalExperience } = cvData;
  const { title } = siteText.sections.experience;
  
  return (
    <section id="experience" className="py-16 px-4 bg-light dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-primary dark:text-dark-primary text-3xl font-bold mb-12">{title}</h2>
        
        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 z-0 hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between relative z-10">
            {professionalExperience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 