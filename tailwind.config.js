/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        background: 'var(--background-color)',
        card: 'var(--card-background)',
        text: 'var(--text-color)',
        'text-light': 'var(--light-text-color)',
        'dark-primary': 'var(--dark-primary-color)',
        'dark-secondary': 'var(--dark-secondary-color)',
        'dark-accent': 'var(--dark-accent-color)',
        'dark-background': 'var(--dark-background-color)',
        'dark-card': 'var(--dark-card-background)',
        'dark-text': 'var(--dark-text-color)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      boxShadow: {
        card: 'var(--card-shadow)',
      },
      borderRadius: {
        card: 'var(--border-radius)',
      },
      transitionDuration: {
        default: 'var(--transition-speed)',
      },
      animation: {
        bounce: 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}; 