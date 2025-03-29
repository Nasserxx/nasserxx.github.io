// data.js

const cvData = {
  personalInfo: {
    name: "Nasser Awad",
    title: "Full Stack Engineer | Software Developer",
    contact: {
      // Phone number removed for public privacy, add back if desired
      // phone: "015771189301",
      email: "nassern502@yahoo.com",
      linkedin: "https://www.linkedin.com/in/nasser-awad-0a08b9143/",
      github: "https://github.com/your-github-username" // !!-- REPLACE with your actual GitHub username link
    },
    // Use path relative to index.html
    profilePictureUrl: "https://media.licdn.com/dms/image/v2/C5603AQGAMB-UtrU2hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1581238771136?e=1748476800&v=beta&t=8QNc3R-iW1lREPlLDbQfR5U3B3umxSpdn2535ye8hvA"
    // Address and birthdate typically omitted from public online CVs
  },
  // Professional Experience: Array of job objects (NO COMPANY NAMES)
  professionalExperience: [
     {
      roleTitle: "Full Stack Engineer",
      duration: "Oct 2024 – Present",
      responsibilities: [
         "Currently contributing to backend and frontend development for cash handling systems.", // More descriptive placeholder
         "Focusing on secure and efficient API design.",
         "Engaging with modern software engineering practices."
      ]
    },
    {
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
        "Contributed to requirements analysis, technical specifications, and system design improvements."
      ]
    },
     {
      roleTitle: "Full Stack Developer",
      duration: "Oct 2022 – Mar 2023",
      responsibilities: [
        "Developed a web-based workplace booking system using Angular (frontend) and Spring Boot (backend).",
        "Implemented unit and integration tests with JUnit, Mockito, ensuring compliance with SonarQube quality standards.",
        "Used Hibernate (JPA) for ORM and structured entity relationships to maintain data integrity."
      ]
    },
    {
      roleTitle: "Full Stack Developer",
      duration: "May 2020 – Sept 2022",
      responsibilities: [
        "Developed web portals using Python/Django, Vue.js, MySQL, CSS, and HTML.",
        "Conducted bug analysis and resolution to enhance system performance.",
        "Implemented module and functional tests using Python's unittest framework.",
        "Deployed applications using Nginx (reverse proxy), Docker, Docker Compose, and Docker Swarm on AWS.",
        "Installed and administered Ubuntu EC2 servers, ensuring optimal performance and security."
      ]
    },
     {
      roleTitle: "Software Developer",
      duration: "Sept 2020 – Jan 2021",
      responsibilities: [
        "Developed an interactive VR-based assembly planning tool using C# and Unity.",
        "Integrated VR capabilities for an immersive planning experience."
      ]
    },
    {
      roleTitle: "IT Support Specialist",
      duration: "Dec 2019 – July 2020",
       responsibilities: [
        "Designed and managed IP address infrastructures using an IP Address Management (IPAM) tool.",
        "Automated data synchronization across multiple system databases, improving efficiency."
      ]
    },
     {
      roleTitle: "IT Expert",
      duration: "June 2019 – Dec 2019",
      responsibilities: [
         "Managed internal IT security, ensuring compliance with security best practices.",
         "Administered workstation computers and provided technical support.",
         "Performed data backup and recovery operations."
      ]
    },
     {
      roleTitle: "Intern - Technical",
      duration: "June 2016 – April 2018",
      responsibilities: [
         "Configured and programmed PLCs for automated industrial processes.",
         "Analyzed Condition Monitoring data using R for predictive maintenance.",
         "Optimized and documented an Excel-based pitch diagram kinematics calculation tool.",
         "Extracted a mathematical model from Excel and implemented it in C++.",
         "Developed a 3D visualization of kinematics using Qt C++."
      ]
    }
  ],
  // Education: Array of education objects
  education: [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Hochschule Ulm / Germany", // Added space
      duration: "Oct 2019 – Mar 2023"
    }
  ],
  // Skills: Object with categories as arrays
  skills: {
    programmingLanguages: ["C++", "Java", "Spring Boot", "Python", "Django", "R", "C#", "ASP.NET Core", "Express.js"],
    frontendFrameworks: ["JavaScript", "TypeScript", "Vue.js", "React", "Angular", "AngularJS", "Bootstrap", "jQuery", "HTML", "CSS"], // Added HTML/CSS, AngularJS
    databases: ["MySQL", "SQL Server", "MongoDB", "Azure SQL", "Azure Blob Storage"], // Added more specific DBs
    devOpsCloud: ["Azure Cloud", "Azure DevOps", "AWS Cloud", "Docker", "Docker Compose", "Docker Swarm", "Jenkins CI/CD", "Pulumi (IaC)", "Nginx"], // Grouped slightly
    networkingSecurity: ["Security Best Practices", "Authentication", "Authorization", "Encryption", "CCNA Concepts", "Linux", "Shell Scripting", "IPAM"], // Added security from description
    toolsMethodologies: ["Git", "Scrum", "Jira", "JUnit", "Mockito", "Python unittest", "SonarQube", "Unity", "Qt C++"] // Added testing/other tools
  },
  // Languages: Array of language objects
  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "German", proficiency: "C1 (Hochschule Certificate)" },
    { language: "English", proficiency: "Good Proficiency" }
  ]
};