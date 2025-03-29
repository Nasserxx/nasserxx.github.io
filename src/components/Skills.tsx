import { FC } from 'react';
import cvData from '@/data/cv-data';
import siteText from '@/data/site-text';

// Define interfaces for skills data
interface SkillCategory {
  category: string;
  items: string[];
}

// Transform the skills object into an array format for rendering
const transformSkillsToArray = (skillsData: any): SkillCategory[] => {
  if (!skillsData) return [];
  
  return [
    {
      category: siteText.sections.skills.programmingLanguages,
      items: skillsData.programmingLanguages || []
    },
    {
      category: siteText.sections.skills.frontendFrameworks,
      items: skillsData.frontendFrameworks || []
    },
    {
      category: siteText.sections.skills.databases,
      items: skillsData.databases || []
    },
    {
      category: siteText.sections.skills.devOpsCloud,
      items: skillsData.devOpsCloud || []
    },
    {
      category: siteText.sections.skills.networkingSecurity,
      items: skillsData.networkingSecurity || []
    },
    {
      category: siteText.sections.skills.toolsMethodologies,
      items: skillsData.toolsMethodologies || []
    }
  ];
};

const Skills: FC = () => {
  const { skills } = cvData;
  const { title } = siteText.sections.skills;
  
  // Transform the skills object into an array for rendering
  const skillsArray = transformSkillsToArray(skills);
  
  return (
    <section id="skills" className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center text-primary dark:text-dark-primary text-3xl font-bold mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsArray.map((category, index) => (
            category.items.length > 0 && (
              <div 
                key={index}
                className="bg-light dark:bg-gray-700 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-secondary dark:text-dark-secondary mb-4">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill: string, i: number) => (
                    <span 
                      key={i}
                      className="bg-white dark:bg-gray-800 text-primary dark:text-dark-primary px-3 py-1 rounded-md text-sm font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 