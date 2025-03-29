import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

// Navbar component with sticky behavior and mobile menu
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Handle scroll events for navbar appearance and active section
    const handleScroll = () => {
      // Add background to navbar when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id], header[id]');
      let currentActive = '';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        
        // If section is in viewport (with offset for navbar)
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          currentActive = section.id;
        }
      });
      
      if (currentActive && currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount to initialize
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // CSS classes for navbar with conditional scrolled state
  const navbarClasses = `sticky top-0 bg-white dark:bg-gray-900 z-50 transition-all duration-300 ${
    scrolled ? 'shadow-md bg-opacity-95 dark:bg-opacity-95' : ''
  }`;

  return (
    <nav id="navbar" className={navbarClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-primary dark:text-blue-400 font-bold text-xl">Nasser Awad</div>
        
        {/* Center Menu - Desktop */}
        <ul className="hidden md:flex space-x-1 m-0 items-center">
          {[
            { href: '#hero', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#experience', label: 'Experience' },
            { href: '#education', label: 'Education' },
            { href: '#skills', label: 'Skills' },
            { href: '#languages', label: 'Languages' },
            { href: '#contact-footer', label: 'Contact' },
          ].map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`px-3 py-2 block font-semibold relative ${
                  activeSection === link.href.substring(1) 
                    ? 'text-primary dark:text-blue-400' 
                    : 'text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                }`}
                onClick={closeMenu}
                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
              >
                {link.label}
                <span 
                  className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary dark:bg-blue-400 transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? 'w-3/5' : 'w-0'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            className="ml-4 block md:hidden text-2xl text-secondary dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu (Overlay) */}
      <div 
        className={`fixed inset-0 bg-secondary dark:bg-gray-800 bg-opacity-95 z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg">
          {[
            { href: '#hero', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#experience', label: 'Experience' },
            { href: '#education', label: 'Education' },
            { href: '#skills', label: 'Skills' },
            { href: '#languages', label: 'Languages' },
            { href: '#contact-footer', label: 'Contact' },
          ].map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`px-5 py-2 block text-white hover:text-accent font-semibold ${
                  activeSection === link.href.substring(1) ? 'bg-primary dark:bg-blue-600 rounded-lg' : ''
                }`}
                onClick={closeMenu}
                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          
          {/* Theme Toggle in Mobile Menu */}
          <li className="mt-4">
            <div className="text-white text-center">
              <p className="mb-2 text-sm">Theme</p>
              <ThemeToggle />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 