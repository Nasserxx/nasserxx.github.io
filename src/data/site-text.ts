// Site text data for all static content
// This makes all text in the UI easily editable and extendable in one place

export interface SiteTextData {
  navigation: {
    home: string;
    about: string;
    experience: string;
    education: string;
    skills: string;
    languages: string;
    contact: string;
  };
  sections: {
    about: {
      title: string;
    };
    experience: {
      title: string;
    };
    education: {
      title: string;
    };
    skills: {
      title: string;
      technicalSkills: string;
      programmingLanguages: string;
      frontendFrameworks: string;
      databases: string;
      devOpsCloud: string;
      networkingSecurity: string;
      toolsMethodologies: string;
    };
    languages: {
      title: string;
    };
    contact: {
      title: string;
      address: string;
      copyright: string;
    };
  };
  accessibility: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    scrollDown: string;
    backToTop: string;
  };
  theme: {
    lightMode: string;
    darkMode: string;
  };
}

const siteText: SiteTextData = {
  navigation: {
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    contact: "Contact"
  },
  sections: {
    about: {
      title: "About Me"
    },
    experience: {
      title: "Professional Experience"
    },
    education: {
      title: "Education"
    },
    skills: {
      title: "Skills",
      technicalSkills: "Technical Skills",
      programmingLanguages: "Programming Languages",
      frontendFrameworks: "Frontend & Frameworks",
      databases: "Databases",
      devOpsCloud: "DevOps & Cloud",
      networkingSecurity: "Networking & Security",
      toolsMethodologies: "Tools & Methodologies"
    },
    languages: {
      title: "Languages"
    },
    contact: {
      title: "Contact Me",
      address: "Address",
      copyright: "© %YEAR% Nasser Awad. All rights reserved."
    }
  },
  accessibility: {
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn Profile",
    github: "GitHub Profile",
    scrollDown: "Scroll down",
    backToTop: "Go back to top"
  },
  theme: {
    lightMode: "Switch to light mode",
    darkMode: "Switch to dark mode"
  }
};

export default siteText; 