import { FC } from 'react';
import Image from 'next/image';
import cvData from '@/data/cv-data';
import siteText from '@/data/site-text';

// Define some default about content if cv-data.ts doesn't have it
const defaultAbout = [
  "Highly motivated and experienced Full Stack Engineer with a proven track record in designing, developing, and deploying robust web applications and backend services.",
  "Specializing in C#, ASP.NET, Python/Django, and cloud technologies like Azure and AWS. Possesses strong skills in Infrastructure as Code (Pulumi), CI/CD pipelines (Azure DevOps, Jenkins), database management (SQL, NoSQL), and implementing security best practices.",
  "Passionate about optimizing performance, ensuring high availability, and contributing effectively within collaborative Agile/Scrum environments. Eager to leverage technical expertise and problem-solving abilities to drive innovation and success."
];

const About: FC = () => {
  const { personalInfo, about } = cvData;
  const { title } = siteText.sections.about;
  
  // Access the about property safely or use the default
  const aboutParagraphs = about || defaultAbout;
  const profilePictureUrl = personalInfo.profilePictureUrl || '/placeholder-avatar.png';
  
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-center text-primary dark:text-dark-primary text-3xl font-bold mb-12">{title}</h2>
        
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
            {profilePictureUrl && (
              <div className="rounded-full overflow-hidden border-4 border-accent dark:border-dark-accent shadow-lg h-64 w-64 relative">
                <Image 
                  src={profilePictureUrl}
                  alt={personalInfo.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                  priority
                />
              </div>
            )}
          </div>
          
          <div className="w-full md:w-2/3 md:pl-12">
            <div className="prose dark:prose-invert max-w-none">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-text-dark dark:text-text-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
