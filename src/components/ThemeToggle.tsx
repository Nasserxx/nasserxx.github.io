import { FC, useEffect, useState } from 'react';

const ThemeToggle: FC = () => {
  // Default to light mode
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme based on local storage or system preference
  useEffect(() => {
    // Check if user has previously set theme
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    if (darkMode) {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    
    setDarkMode(!darkMode);
  };

  return (
    <button 
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 focus:outline-none"
    >
      {darkMode ? (
        <i className="fas fa-sun text-yellow-300 text-xl hover:text-yellow-400 transition-colors duration-200"></i>
      ) : (
        <i className="fas fa-moon text-gray-600 text-xl hover:text-gray-800 transition-colors duration-200"></i>
      )}
    </button>
  );
};

export default ThemeToggle; 