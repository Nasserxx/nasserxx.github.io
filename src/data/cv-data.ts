// Define TypeScript interfaces for our data structure
export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  phone?: string;
  address?: string;
  birthdate?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  contact: ContactInfo;
  profilePictureUrl: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  roleTitle: string;
  duration: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  period?: string; // Alternative to duration for display
  details?: string[]; // Optional details about the education
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  percentage?: number; // Optional percentage for visual representation (0-100)
}

export interface SkillsData {
  programmingLanguages: string[];
  frontendFrameworks: string[];
  databases: string[];
  devOpsCloud: string[];
  networkingSecurity: string[];
  toolsMethodologies: string[];
}

export interface CVData {
  personalInfo: PersonalInfo;
  professionalExperience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillsData;
  languages: LanguageItem[];
  about: string[]; // Array of paragraphs for the About section
}

// CV Data
const cvData: CVData = {
  personalInfo: {
    name: "Nasser Awad",
    title: "Full Stack Engineer | Software Developer",
    contact: {
      phone: "",
      email: "nassern502@yahoo.com",
      linkedin: "https://www.linkedin.com/in/nasser-awad-0a08b9143/",
      github: "https://github.com/nasserxx",
      address: "ULM, Deutschland",
      birthdate: "July 19, 1992",
    },
    profilePictureUrl: "/data/id.png",
  },
  about: [
    "Highly motivated and experienced Full Stack Engineer with a proven track record in designing, developing, and deploying robust web applications and backend services.",
    "Specializing in C#, ASP.NET, Python/Django, and cloud technologies like Azure and AWS. Possesses strong skills in Infrastructure as Code (Pulumi), CI/CD pipelines (Azure DevOps, Jenkins), database management (SQL, NoSQL), and implementing security best practices.",
    "Passionate about optimizing performance, ensuring high availability, and contributing effectively within collaborative Agile/Scrum environments. Eager to leverage technical expertise and problem-solving abilities to drive innovation and success.",
  ],
  professionalExperience: [
    {
      company: "HESS Cash Systems",
      location: "Magstadt, Germany",
      roleTitle: "Full Stack Engineer",
      duration: "Oct 2024 – Present",
      responsibilities: [
        "Currently contributing to Software Architecture including backend and frontend development for BillEVe Project."
      ]
    },
    {
      company: "Beurer GmbH",
      location: "Ulm, Germany",
      roleTitle: "Full Stack Engineer",
      duration: "June 2023 – Oct 2024",
      responsibilities: [
        "Designed, developed, and maintained backend services and RESTful APIs using C# and ASP.NET.",
        "Built frontend applications using AngularJS.",
        "Administered and optimized Microsoft Azure cloud environments.",
        "Managed Infrastructure as Code (IaC) with Pulumi for automated deployments.",
        "Developed and maintained CI/CD pipelines using Azure DevOps.",
        "Managed and optimized SQL databases for high availability and performance.",
        "Handled Azure Storage Accounts & Blob Storage for scalable data storage.",
        "Implemented security best practices, including authentication, authorization, and encryption.",
        "Ensured compliance with security policies and regulatory requirements.",
        "Monitored system performance, troubleshooting issues for high availability.",
        "Managed updates, security patches, and performance optimizations.",
        "Led incident response, root cause analysis, and resolution of critical failures.",
        "Authored and maintained technical documentation for system architecture, APIs, and deployment processes.",
        "Contributed to requirements analysis, technical specifications, and system design improvements.",
      ],
    },
    {
      company: "Adesso SE",
      location: "Ulm, Germany",
      roleTitle: "Full Stack Developer",
      duration: "Oct 2022 – Mar 2023",
      responsibilities: [
        "Developed a web-based workplace booking system using Angular (frontend) and Spring Boot (backend).",
        "Implemented unit and integration tests with JUnit, Mockito, ensuring compliance with SonarQube quality standards.",
        "Used Hibernate (JPA) for ORM and structured entity relationships to maintain data integrity.",
      ],
    },
    {
      company: "SAX-Power",
      location: "Erbach, Germany",
      roleTitle: "Full Stack Developer",
      duration: "May 2020 – Sept 2022",
      responsibilities: [
        "Developed web portals using Python/Django, Vue.js, MySQL, CSS, and HTML.",
        "Conducted bug analysis and resolution to enhance system performance.",
        "Implemented module and functional tests using Python's unittest framework.",
        "Deployed applications using Nginx (reverse proxy), Docker, Docker Compose, and Docker Swarm on AWS.",
        "Installed and administered Ubuntu EC2 servers, ensuring optimal performance and security.",
      ],
    },
    {
      company: "Daimler",
      location: "Ulm, Germany",
      roleTitle: "Software Developer",
      duration: "Sept 2020 – Jan 2021",
      responsibilities: [
        "Developed an interactive VR-based assembly planning tool using C# and Unity.",
        "Integrated VR capabilities for an immersive planning experience.",
      ],
    },
    {
      company: "SWU Stadtwerke Ulm/Neu-Ulm",
      location: "via Univativ",
      roleTitle: "IT Support Specialist",
      duration: "Dec 2019 – July 2020",
      responsibilities: [
        "Designed and managed IP address infrastructures using an IP Address Management (IPAM) tool.",
        "Automated data synchronization across multiple system databases, improving efficiency.",
      ],
    },
    {
      company: "alphaQuest",
      location: "Ulm, Germany",
      roleTitle: "IT Expert",
      duration: "June 2019 – Dec 2019",
      responsibilities: [
        "Managed internal IT security, ensuring compliance with security best practices.",
        "Administered workstation computers and provided technical support.",
        "Performed data backup and recovery operations.",
      ],
    },
    {
      company: "Voith",
      location: "Heidenheim, Germany",
      roleTitle: "Intern - Technical",
      duration: "June 2016 – April 2018",
      responsibilities: [
        "Configured and programmed PLCs for automated industrial processes.",
        "Analyzed Condition Monitoring data using R for predictive maintenance.",
        "Optimized and documented an Excel-based pitch diagram kinematics calculation tool.",
        "Extracted a mathematical model from Excel and implemented it in C++.",
        "Developed a 3D visualization of kinematics using Qt C++.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Hochschule Ulm / Germany",
      duration: "Oct 2019 – Mar 2023",
      details: [],
    },
  ],
  skills: {
    programmingLanguages: [
      "C++",
      "Java",
      "Spring Boot",
      "Python",
      "Django",
      "R",
      "C#",
      "ASP.NET Core",
      "Express.js",
    ],
    frontendFrameworks: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "React",
      "Angular",
      "Bootstrap",
      "jQuery",
      "HTML",
      "CSS",
    ],
    databases: ["MySQL", "SQL", "MongoDB", "Azure SQL", "Azure Blob Storage"],
    devOpsCloud: [
      "Azure Cloud",
      "Azure DevOps",
      "AWS Cloud",
      "Docker",
      "Docker Compose",
      "Docker Swarm",
      "Jenkins CI/CD",
      "Pulumi (IaC)",
      "Nginx",
    ],
    networkingSecurity: [
      "CCNA",
      "Linux",
      "Shell Scripting",
      "Security Best Practices",
      "Authentication",
      "Authorization",
      "Encryption",
    ],
    toolsMethodologies: [
      "Git",
      "Scrum",
      "Jira",
      "JUnit",
      "Mockito",
      "Python unittest",
      "SonarQube",
      "Unity",
      "Qt C++",
    ],
  },
  languages: [
    { language: "Arabic", proficiency: "Native", percentage: 100 },
    {
      language: "German",
      proficiency: "C1 (Hochschule Certificate)",
      percentage: 80,
    },
    { language: "English", proficiency: "Good Proficiency", percentage: 85 },
  ],
};

export default cvData;
