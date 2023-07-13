import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import SKILLS from './components/Skill/Skill';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Nav /> 
      <Header />
      <About />
      <SKILLS />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
