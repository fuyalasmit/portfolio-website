import React from 'react';
import { TiCodeOutline } from 'react-icons/ti';
import { TiCode } from 'react-icons/ti';
import { menuItems } from '../constants/index.jsx';
import Button from '../components/Button.jsx';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import MobileMenu from '../components/MobileMenu.jsx';
import Logo from '../components/Logo.jsx';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <header className="fixed top-0 z-10 w-full px-4 py-4 ">
        <nav className="container flex items-center justify-between rounded-full border-2 text-white border-white/10 bg-white/5 p-2 backdrop-blur">
          <div className="flex items-center">
            <Logo />
          </div>
          {/* for pc */}
          <ul className="hidden space-x-4 md:flex">
            {menuItems.map((value) => (
              <li key={value.href}>
                <a href={value.href} className='nav-item'>{value.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <Button variant='outline' className="" >Contact Me</Button>
          </div>
          {/* menu icon */}
          <button
            className="text-4xl  text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <BiX /> : <BiMenuAltRight />}
          </button>
        </nav>
      </header>

      {/* overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Close Menu"
        />
      )}

      {/* mobile menu  */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;

