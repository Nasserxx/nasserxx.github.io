import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

// Import the AOS library but only on the client side
import dynamic from 'next/dynamic';

// Dynamic import for AOS (client-side only)
const AOSWrapper = dynamic(
  () => {
    return import('./AOSWrapper');
  },
  { ssr: false }
);

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

// Layout component that wraps all pages
const Layout = ({ 
  children, 
  title = 'Nasser Awad - Full Stack Engineer',
  description = "Nasser Awad's professional portfolio and CV. Full Stack Engineer specializing in backend development, cloud infrastructure, and DevOps."
}: LayoutProps) => {
  // Handle back to top button behavior
  useEffect(() => {
    const backToTopButton = document.getElementById('back-to-top');
    
    const handleScroll = () => {
      if (backToTopButton) {
        if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AOSWrapper>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
        {/* Back to top button */}
        <button 
          id="back-to-top" 
          onClick={scrollToTop}
          aria-label="Go back to top"
          className="fixed bottom-6 right-6 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center opacity-0 invisible transition-all duration-300 hover:bg-accent z-50"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </AOSWrapper>
  );
};

export default Layout; 