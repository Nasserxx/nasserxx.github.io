import { FC } from 'react';
import cvData from '@/data/cv-data';
import siteText from '@/data/site-text';

// Ensure we have valid language data
const getLanguages = () => {
  if (!cvData.languages || !Array.isArray(cvData.languages)) {
    return [];
  }
  return cvData.languages;
};

const Languages: FC = () => {
  const languages = getLanguages();
  const { title } = siteText.sections.languages;
  
  if (languages.length === 0) {
    return null; // Don't render the section if there are no languages
  }
  
  return (
    <section id="languages" className="py-16 px-4 bg-light dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center text-primary dark:text-dark-primary text-3xl font-bold mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {language.language}
                </h3>
                <span className="text-sm font-medium text-accent dark:text-dark-accent">
                  {language.proficiency}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages; 