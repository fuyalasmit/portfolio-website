import React from 'react';
import Logo from './Logo';
import Button from './Button';

const MobileMenu = ({ menuOpen, setMenuOpen, menuItems }) => {
  return (
    <div className={`fixed left-0 top-0 z-30 h-full w-3/4 transform border-r-2 border-white/15 bg-white/20 px-4 backdrop-blur-xl transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0": "-translate-x-full"} `}>
      <div className='mt-5' >
        <Logo />
      </div>
      <hr className='my-3 border-2 border-white/5' />
      <ul className='mt-5 flex flex-col space-y-3'>
        {menuItems.map((value)=>(
          <li key={value.href}>
            <a href={value.href} className='nav-item p-2' >{value.label}</a>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default MobileMenu;
