import React, { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Tape from './sections/Tape';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gray-900  overflow-x-clip antialiased">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Tape />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
