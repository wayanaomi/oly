
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <SEOHead />
      <Navbar />
      <main style={{paddingTop: 40, paddingBottom: 40}}>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}