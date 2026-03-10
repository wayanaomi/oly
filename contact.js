
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <SEOHead />
      <Navbar />
      <main style={{paddingTop: 40, paddingBottom: 40}}>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}