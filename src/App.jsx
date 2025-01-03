import React, { useState } from 'react';
import Header from './sections/Header';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gray-900 h-screen overflow-x-clip antialiased">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default App;
