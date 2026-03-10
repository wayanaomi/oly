
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <>
      <SEOHead />
      <Navbar />
      <main style={{paddingTop: 40, paddingBottom: 40}}>
        <Projects />
      </main>
      <Footer />
    </>
  );
}