import React from 'react';

const Navbar = () => (
  <nav className="container" style={{padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <div style={{fontWeight: 700, fontSize: 24, color: 'var(--primary-blue)'}}>Olymors</div>
    <ul style={{display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0}}>
      <li><a href="/" style={{color: 'var(--primary-blue)', fontWeight: 500}}>Home</a></li>
      <li><a href="/about" style={{color: 'var(--primary-blue)'}}>About</a></li>
      <li><a href="/services" style={{color: 'var(--primary-blue)'}}>Services</a></li>
      <li><a href="/projects" style={{color: 'var(--primary-blue)'}}>Projects</a></li>
      <li><a href="/contact" style={{color: 'var(--primary-blue)'}}>Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
