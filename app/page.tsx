import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
