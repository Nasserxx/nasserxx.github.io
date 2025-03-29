import { FC } from "react";
import Image from "next/image";
import cvData from "@/data/cv-data";
import siteText from "@/data/site-text";

const Hero: FC = () => {
  const { name, title, contact } = cvData.personalInfo;
  const profilePictureUrl = cvData.personalInfo.profilePictureUrl || '/placeholder-avatar.png';
  const { email, phone, linkedin, github, scrollDown } = siteText.accessibility;
  const { about } = siteText.navigation;

  return (
    <header
      id="hero"
      className="min-h-screen flex justify-center items-center text-center relative text-text-light bg-gradient-to-br from-primary to-secondary dark:from-blue-600 dark:to-gray-900 overflow-hidden"
    >
      {/* Optional overlay for background dimming */}
      <div className="absolute inset-0 z-10"></div>

      <div
        className="hero-content relative z-20 px-6 py-8 max-w-3xl"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <div
          className="relative w-44 h-44 mx-auto mb-6 rounded-full border-4 border-white dark:border-gray-700 border-opacity-80 shadow-lg overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Image
            src={profilePictureUrl}
            alt={`${name} profile`}
            priority
            fill
            sizes="(max-width: 768px) 120px, 180px"
            className="object-cover"
          />
        </div>

        <h1
          className="text-5xl md:text-6xl font-bold mb-3 tracking-wide"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          {name}
        </h1>

        <p
          className="text-2xl font-light mb-8 text-white text-opacity-85"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {title}
        </p>

        <div
          className="flex justify-center space-x-6 text-3xl mb-16"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          {contact && contact.email && (
            <a
              href={`mailto:${contact.email}`}
              aria-label={email}
              title={email}
              className="text-white text-opacity-80 hover:text-accent dark:hover:text-dark-accent transform transition-all hover:scale-110"
            >
              <i className="fas fa-envelope"></i>
            </a>
          )}

          {contact && contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              aria-label={phone}
              title={phone}
              className="text-white text-opacity-80 hover:text-accent dark:hover:text-dark-accent transform transition-all hover:scale-110"
            >
              <i className="fas fa-phone"></i>
            </a>
          )}

          {contact && contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkedin}
              title={linkedin}
              className="text-white text-opacity-80 hover:text-accent dark:hover:text-dark-accent transform transition-all hover:scale-110"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          )}

          {contact && contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={github}
              title={github}
              className="text-white text-opacity-80 hover:text-accent dark:hover:text-dark-accent transform transition-all hover:scale-110"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>

        {/* Scroll down indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-opacity-80 text-2xl animate-bounce"
          aria-label={scrollDown}
        >
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </header>
  );
};

export default Hero;
