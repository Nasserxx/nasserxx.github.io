import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import cvData from '@/data/cv-data';
import siteText from '@/data/site-text';

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { name } = cvData.personalInfo;
  const { home, about, experience, education, skills, languages, contact } = siteText.navigation;
  const { lightMode, darkMode } = siteText.theme;

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Fix hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    { href: '#about', label: about },
    { href: '#experience', label: experience },
    { href: '#education', label: education },
    { href: '#skills', label: skills },
    { href: '#languages', label: languages },
    { href: '#contact-footer', label: contact },
  ];

  return (
    <nav className={`fixed w-full z-50 px-4 py-3 transition-all duration-300 ${
      scrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Home link */}
        <Link href="/" className={`font-bold text-xl ${
          scrolled 
            ? 'text-primary dark:text-dark-primary' 
            : 'text-white dark:text-gray-200'
        }`}>
          <span className="flex items-center">
            {name.split(' ')[0]}
            <span className="hidden sm:inline">&nbsp;{name.split(' ').slice(1).join(' ')}</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-accent dark:hover:text-dark-accent transition-colors ${
                scrolled 
                  ? 'text-text-dark dark:text-text-light' 
                  : 'text-white dark:text-gray-200'
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Theme Toggle Button */}
          {mounted && (
            <button 
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? lightMode : darkMode}
              className={`p-2 rounded-full ${
                scrolled 
                  ? 'text-text-dark dark:text-text-light hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/30'
              }`}
            >
              {theme === 'dark' ? (
                <i className="fas fa-sun text-xl"></i>
              ) : (
                <i className="fas fa-moon text-xl"></i>
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          {mounted && (
            <button 
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? lightMode : darkMode}
              className={`p-2 rounded-full mr-2 ${
                scrolled 
                  ? 'text-text-dark dark:text-text-light hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/30'
              }`}
            >
              {theme === 'dark' ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
          )}
          
          <button
            className={`p-2 rounded-md ${
              scrolled 
                ? 'text-text-dark dark:text-text-light hover:bg-gray-200 dark:hover:bg-gray-700' 
                : 'text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/30'
            }`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute left-0 right-0 ${
        isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      } transition-all duration-300 overflow-hidden bg-white dark:bg-gray-900 shadow-lg`}>
        <div className="px-4 py-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-text-dark dark:text-text-light hover:text-accent dark:hover:text-dark-accent border-b border-gray-100 dark:border-gray-800"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 