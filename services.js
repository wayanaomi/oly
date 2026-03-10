
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <>
      <SEOHead />
      <Navbar />
      <main style={{paddingTop: 40, paddingBottom: 40}}>
        <Services />
      </main>
      <Footer />
    </>
  );
}