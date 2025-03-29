import { FC } from 'react';
import cvData from '@/data/cv-data';
import siteText from '@/data/site-text';

// Transform education data to add missing fields if needed
const transformEducationData = (education: any[]) => {
  return education.map(edu => ({
    institution: edu.institution,
    degree: edu.degree,
    period: edu.duration, // Rename duration to period for consistent naming
    details: edu.details || [] // Add empty array if details don't exist
  }));
};

const Education: FC = () => {
  const { education } = cvData;
  const { title } = siteText.sections.education;
  
  // Transform education data to ensure it has all required fields
  const transformedEducation = transformEducationData(education);
  
  return (
    <section id="education" className="py-16 px-4 bg-light dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center text-primary dark:text-dark-primary text-3xl font-bold mb-12">{title}</h2>
        
        <div className="space-y-8">
          {transformedEducation.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <h3 className="text-xl font-semibold text-primary dark:text-dark-primary mb-2 sm:mb-0">
                    {edu.institution}
                  </h3>
                  <span className="bg-accent/10 dark:bg-dark-accent/20 text-accent dark:text-dark-accent px-3 py-1 rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {edu.degree}
                </p>
                
                {edu.details && edu.details.length > 0 && (
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 