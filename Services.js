import React from 'react';

const Services = () => (
  <section className="container" style={{paddingTop: 40, paddingBottom: 40}}>
    <h2 style={{fontSize: 36, fontWeight: 700, marginBottom: 40, textAlign: 'center'}}>Our Services</h2>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32}}>
      <div className="service-card" style={{textAlign: 'center'}}>
        <div style={{fontSize: 40, marginBottom: 16}}>🛠️</div>
        <h3 style={{fontSize: 22, fontWeight: 600, marginBottom: 12}}>Engineering Services</h3>
        <p>Comprehensive engineering design, planning, and consulting for infrastructure and industrial projects.</p>
      </div>
      <div className="service-card" style={{textAlign: 'center'}}>
        <div style={{fontSize: 40, marginBottom: 16}}>🏗️</div>
        <h3 style={{fontSize: 22, fontWeight: 600, marginBottom: 12}}>Construction & Project Execution</h3>
        <p>Turnkey construction, project management, and delivery of high-value infrastructure and buildings.</p>
      </div>
      <div className="service-card" style={{textAlign: 'center'}}>
        <div style={{fontSize: 40, marginBottom: 16}}>📑</div>
        <h3 style={{fontSize: 22, fontWeight: 600, marginBottom: 12}}>Contract Services</h3>
        <p>Expert contract execution, procurement, and compliance for public and private sector clients.</p>
      </div>
      <div className="service-card" style={{textAlign: 'center'}}>
        <div style={{fontSize: 40, marginBottom: 16}}>🛒</div>
        <h3 style={{fontSize: 22, fontWeight: 600, marginBottom: 12}}>General Merchandise</h3>
        <p>Supply and distribution of quality materials, equipment, and commercial goods for diverse industries.</p>
      </div>
    </div>
  </section>
);

export default Services;
