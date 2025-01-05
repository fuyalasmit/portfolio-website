import React from 'react';
import { footerLinks } from '../constants';
import { GoArrowUpRight } from 'react-icons/go';

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className='absolute h-[400px] w-[1700px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/25 [mask-image:radial-gradient(60%_35%_at_bottom_center,black,transparent)] -z-11 '> </div>
      {/* <div className="absolute h-[100px] w-[1700px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-emerald-300/30 to-transparent -z-11"></div> */}
      <div className="container p-4 border-t border-white/15 py-6 text-sm flex flex-col items-center gap-6">
        <p className="text-white/40 font-serif text-sm">
          &copy; {new Date().getFullYear()} Asmit Phuyal. All rights reserved.
        </p>

        {/* <div className='text-white/70 flex flex-col items-center gap-6'> */}
        <div className="text-white/70 grid grid-cols-2 gap-8 md:flex md:flex-row md:gap-12 ">
          {/* <div className='text-white/70 grid grid-cols-2 md:grid-cols-4 gap-6'> */}
          {footerLinks.map((value) => (
            <a
              key={value.title}
              href={value.href}
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">{value.title}</span>
              <GoArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
