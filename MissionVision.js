import React from 'react';

const MissionVision = () => (
  <section className="container" style={{paddingTop: 40, paddingBottom: 40}}>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32}}>
      <div style={{background: 'white', borderRadius: 12, boxShadow: 'var(--shadow-soft)', padding: 32, textAlign: 'center'}}>
        <div style={{fontSize: 32, marginBottom: 12}}>🎯</div>
        <h4 style={{fontWeight: 700, marginBottom: 12}}>Mission</h4>
        <p>To deliver reliable engineering, construction, and commercial solutions that drive growth and value for our clients and communities.</p>
      </div>
      <div style={{background: 'white', borderRadius: 12, boxShadow: 'var(--shadow-soft)', padding: 32, textAlign: 'center'}}>
        <div style={{fontSize: 32, marginBottom: 12}}>🌍</div>
        <h4 style={{fontWeight: 700, marginBottom: 12}}>Vision</h4>
        <p>To be the preferred partner for infrastructure development and business excellence in Africa and beyond.</p>
      </div>
      <div style={{background: 'white', borderRadius: 12, boxShadow: 'var(--shadow-soft)', padding: 32, textAlign: 'center'}}>
        <div style={{fontSize: 32, marginBottom: 12}}>💎</div>
        <h4 style={{fontWeight: 700, marginBottom: 12}}>Core Values</h4>
        <ul style={{listStyle: 'none', padding: 0, margin: 0, fontSize: 16}}>
          <li>• Integrity</li>
          <li>• Excellence</li>
          <li>• Innovation</li>
          <li>• Collaboration</li>
          <li>• Safety</li>
        </ul>
      </div>
    </div>
  </section>
);

export default MissionVision;
