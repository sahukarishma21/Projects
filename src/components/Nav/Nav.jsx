import React, { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</a>
      <a href="#Portfolio" onClick={() => setActiveNav('#Portfolio')} className={activeNav === '#Portfolio' ? 'active' : ''}>Portfolio</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
      <div id="portfolioSection" style={{ position: 'relative', top: '100px' }}>
        
      </div>
    </nav>
  );
}
