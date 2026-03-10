
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Projects from '../components/Projects';
import MissionVision from '../components/MissionVision';
import ContactSection from "../components/ContactSection";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEOHead />
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Projects />
      <MissionVision />
      <ContactSection />
      <Footer />
    </>
  );
}