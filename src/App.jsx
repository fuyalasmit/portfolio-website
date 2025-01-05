import React, { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Tape from './sections/Tape';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
    <div className="bg-gray-900  overflow-x-clip antialiased">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Tape />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
    
    </BrowserRouter>
  );
};

export default App;
