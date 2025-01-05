import React, { useState } from 'react';
import { menuItems } from '../constants/index.jsx';
import Button from '../components/Button.jsx';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import MobileMenu from '../components/MobileMenu.jsx';
import Logo from '../components/Logo.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = ({ menuOpen, setMenuOpen }) => {
  const logoVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };
  const menuVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        // each child element's animation will start with a delay relative to the previous one, creating a cascading or sequential animation effect.
        ease: 'easeOut',
      },
    },
  };
  const menuItemVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [active, setActive] = useState('');
  return (
    <>
      <motion.header
        className="fixed top-0 z-10 w-full px-4 py-4 "
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        <nav className="container flex items-center justify-between rounded-full border-2 text-white border-white/10 bg-white/5 p-2 backdrop-blur">
          <motion.div
            className="flex items-center"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive('');
                window.scrollTo(0, 0);
              }}
            >
              <Logo />
            </Link>
          </motion.div>
          {/* for pc */}
          <motion.ul
            className="hidden space-x-4 md:flex"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((value) => (
              <motion.li key={value.href} variants={menuItemVariants}>
                <a href={value.href} className="nav-item">
                  {value.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="hidden md:block"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Button variant="outline" className="">
              ...........
            </Button>
          </motion.div>
          {/* menu icon */}
          <motion.button
            className="text-4xl  text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            {menuOpen ? <BiX /> : <BiMenuAltRight />}
          </motion.button>
        </nav>
      </motion.header>

      {/* overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
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
