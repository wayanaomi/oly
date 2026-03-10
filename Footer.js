import React from 'react';

const Footer = () => (
  <footer style={{background: 'var(--primary-blue)', color: 'white', padding: '48px 0', marginTop: 80}}>
    <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{fontWeight: 700, fontSize: 22, marginBottom: 16}}>Olymors Investment Limited</div>
      <div style={{marginBottom: 12}}>Engineering | Construction | Contracts | Commercial Solutions</div>
      <div style={{marginBottom: 12}}>
        <a href="tel:+2340000000000" style={{color: 'white', marginRight: 16}}>Phone</a>
        <a href="mailto:info@olymors.com" style={{color: 'white', marginRight: 16}}>Email</a>
        <span>Address: Lagos, Nigeria</span>
      </div>
      <div style={{marginTop: 16, fontSize: 14}}>&copy; {new Date().getFullYear()} Olymors Investment Limited. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
