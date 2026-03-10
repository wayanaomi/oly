import React from 'react';

const AboutSection = () => (
  <section className="container" style={{display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap'}}>
    <div style={{flex: 1, minWidth: 320}} className="fade-right">
      <h2 style={{fontSize: 36, fontWeight: 700, marginBottom: 24}}>Who We Are</h2>
      <p style={{fontSize: 18, lineHeight: 1.7}}>
        Olymors Investment Limited is a leading provider of engineering, construction, contract execution, and commercial solutions. Our team brings together decades of experience, technical expertise, and a commitment to delivering high-value infrastructure and business projects across Nigeria and beyond.<br/><br/>
        We pride ourselves on professionalism, reliability, and a results-driven approach that ensures our clients’ success and satisfaction.
      </p>
    </div>
    <div style={{flex: 1, minWidth: 320, textAlign: 'center'}} className="fade-left">
      <img src="/images/about-engineering.jpg" alt="Engineering Team" style={{width: '100%', maxWidth: 400, borderRadius: 16, boxShadow: 'var(--shadow-soft)'}} />
    </div>
  </section>
);

export default AboutSection;
