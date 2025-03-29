import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Languages from '@/components/Languages';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Languages />
    </Layout>
  );
};

export default Home; 