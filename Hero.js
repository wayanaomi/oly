import React from 'react';

const Hero = () => (
  <section style={{background: 'linear-gradient(rgba(19,47,87,0.7),rgba(19,47,87,0.7)), url(/images/hero-bg.jpg) center/cover', color: 'white', padding: '120px 0 100px 0', position: 'relative'}}>
    <div className="container" style={{textAlign: 'center'}}>
      <h1 className="hero-text" style={{fontSize: 48, fontWeight: 700, marginBottom: 24}}>
        Building Strong Foundations for Growth and Progress
      </h1>
      <p style={{fontSize: 20, maxWidth: 700, margin: '0 auto 32px auto'}}>
        Olymors Investment Limited delivers reliable engineering, construction, contract execution, and commercial solutions designed to support infrastructure development, business expansion, and long-term value creation.
      </p>
      <div style={{display: 'flex', justifyContent: 'center', gap: 24}}>
        <a href="/contact" className="btn-primary">Request a Consultation</a>
        <a href="/services" className="btn-accent">View Our Services</a>
      </div>
    </div>
  </section>
);

export default Hero;
