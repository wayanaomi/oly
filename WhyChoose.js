import React from 'react';

const WhyChoose = () => (
  <section className="container" style={{paddingTop: 40, paddingBottom: 40}}>
    <h2 style={{fontSize: 32, fontWeight: 700, marginBottom: 32, textAlign: 'center'}}>Why Choose Olymors</h2>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32}}>
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: 36, marginBottom: 12}}>🏅</div>
        <h4 style={{fontWeight: 600, marginBottom: 8}}>Professional Excellence</h4>
        <p>Our team delivers top-tier engineering and construction solutions with a focus on quality and precision.</p>
      </div>
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: 36, marginBottom: 12}}>⏱️</div>
        <h4 style={{fontWeight: 600, marginBottom: 8}}>Reliable Project Delivery</h4>
        <p>We meet deadlines and exceed expectations, ensuring every project is completed on time and within budget.</p>
      </div>
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: 36, marginBottom: 12}}>🤝</div>
        <h4 style={{fontWeight: 600, marginBottom: 8}}>Strong Industry Partnerships</h4>
        <p>We collaborate with leading partners to deliver innovative and sustainable solutions.</p>
      </div>
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: 36, marginBottom: 12}}>💡</div>
        <h4 style={{fontWeight: 600, marginBottom: 8}}>Commitment to Value</h4>
        <p>Our approach is driven by value creation, efficiency, and long-term client satisfaction.</p>
      </div>
    </div>
  </section>
);

export default WhyChoose;
