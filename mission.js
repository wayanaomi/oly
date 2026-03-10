import React from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import MissionVision from '../components/MissionVision';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{paddingTop: 40, paddingBottom: 40}}>
        <AboutSection />
        <MissionVision />
      </main>
      <Footer />
    </>
  );
}
