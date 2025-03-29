import { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSWrapperProps {
  children: ReactNode;
}

// This component initializes AOS and wraps children
const AOSWrapper = ({ children }: AOSWrapperProps) => {
  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      duration: 800,           // Animation duration
      easing: 'ease-out-cubic', // Smooth easing
      once: true,              // Animate only once
      offset: 100,             // Trigger offset (px)
      // disable: 'mobile'     // Optional: disable animation on mobile
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper; 