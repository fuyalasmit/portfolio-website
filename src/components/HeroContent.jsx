import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const HeroContent = ({ variants }) => {
  return (
    <motion.div variants={variants} className="text-left md:max-w-72 lg:max-w-lg">
      <h2 className="font-semibold font-serif text-3xl md:text-5xl text-white/80">
        Hi, I'm <span className="text-blue-500">Asmit Phuyal</span>
      </h2>
      <p className="mt-4 text-white/40 md:text-lg text-justify">
      I'm a passionate developer with expertise in React, JavaScript, and modern web technologies. I love solving problems, contributing to open source, and building scalable applications.
      lorem43
      </p>
      <div className="flex items-center gap-3 mt-5">
        <Button>Contact Me</Button>
        <Button variant="outline">My Resume</Button>
      </div>
    </motion.div>
  );
};

export default HeroContent;
