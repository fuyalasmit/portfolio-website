import React, { useRef, useState } from 'react';
import { footerLinks } from '../constants';
import { GoArrowUpRight } from 'react-icons/go';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const DaysOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const fadeInVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  if (isInView && !animationPlayed) {
    setAnimationPlayed(true);
  }
  return (
    <motion.footer
      className="relative overflow-x-clip"
      ref={sectionRef}
      initial="hidden"
      animate={animationPlayed ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      <div className="container p-4 border-t border-white/15 py-6 text-sm flex flex-col items-center gap-6 relative z-10">
        <motion.p
          className="text-white/40 font-serif text-sm relative -z-9 text-center"
          variants={fadeInVariants}
        >
          Happy <span className="text-blue-500 font-semibold">
            {DaysOfWeek[new Date().getDay()]}
          </span>
          !<br />
          &copy; {new Date().getFullYear()} Asmit Phuyal. All rights reserved.
        </motion.p>

        <motion.div
          className="text-white/70 grid grid-cols-2 gap-8 md:flex md:flex-row md:gap-12 "
          variants={fadeInVariants}
        >
          {footerLinks.map((value) => (
            <a
              key={value.title}
              href={value.href}
              target="_blank"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">{value.title}</span>
              <GoArrowUpRight size={16} />
            </a>
          ))}
        </motion.div>
      </div>
      <div className="absolute h-[400px] w-[1700px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/25 [mask-image:radial-gradient(60%_35%_at_bottom_center,black,transparent)]"></div>
    </motion.footer>
  );
};

export default Footer;
