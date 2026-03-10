import React from 'react';

const Projects = () => (
  <section className="container" style={{paddingTop: 40, paddingBottom: 40}}>
    <h2 style={{fontSize: 36, fontWeight: 700, marginBottom: 40, textAlign: 'center'}}>Projects & Partnerships</h2>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, marginBottom: 40}}>
      <div style={{background: 'white', borderRadius: 12, boxShadow: 'var(--shadow-soft)', padding: 24, textAlign: 'center'}}>
        <img src="/images/project1.jpg" alt="Project 1" style={{width: '100%', borderRadius: 8, marginBottom: 16}} />
        <h4 style={{fontWeight: 600, marginBottom: 8}}>Bridge Construction</h4>
        <p>Major bridge project for urban infrastructure expansion.</p>
      </div>
      <div style={{background: 'white', borderRadius: 12, boxShadow: 'var(--shadow-soft)', padding: 24, textAlign: 'center'}}>
        <img src="/images/project2.jpg" alt="Project 2" style={{width: '100%', borderRadius: 8, marginBottom: 16}} />
        <h4 style={{fontWeight: 600, marginBottom: 8}}>Commercial Complex</h4>
        <p>Turnkey delivery of a multi-storey commercial building.</p>
      </div>
      <div style={{background: 'white', borderRadius: 12, boxShadow: 'var(--shadow-soft)', padding: 24, textAlign: 'center'}}>
        <img src="/images/project3.jpg" alt="Project 3" style={{width: '100%', borderRadius: 8, marginBottom: 16}} />
        <h4 style={{fontWeight: 600, marginBottom: 8}}>Industrial Facility</h4>
        <p>Engineering and construction of a modern industrial plant.</p>
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 24}}>
      <img src="/images/partner1.png" alt="Partner 1" style={{height: 48, margin: 8}} />
      <img src="/images/partner2.png" alt="Partner 2" style={{height: 48, margin: 8}} />
      <img src="/images/partner3.png" alt="Partner 3" style={{height: 48, margin: 8}} />
    </div>
    <div style={{display: 'flex', justifyContent: 'center', gap: 48}}>
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: 32, fontWeight: 700, color: 'var(--primary-blue)'}}>30+</div>
        <div>Completed Projects</div>
      </div>
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: 32, fontWeight: 700, color: 'var(--primary-blue)'}}>15+</div>
        <div>Industry Partners</div>
      </div>
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: 32, fontWeight: 700, color: 'var(--primary-blue)'}}>10+</div>
        <div>Years Experience</div>
      </div>
    </div>
  </section>
);

export default Projects;
