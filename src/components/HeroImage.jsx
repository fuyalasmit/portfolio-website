import React, { useState } from 'react';
import userImage from '../assets/user.png';
import userImageBnw from '../assets/userBNW.png';
import blurUserCompressed from '../assets/blurUserCompressed.png';
import AnimatedIcon from './AnimatedIcon';
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';

const HeroImage = ({ variants }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      className="mask-gradient absolute right-0 top-0 h-[550px] w-full overflow-hidden rounded-bl-full rounded-br-full border-r-[10px] border-blue-500 bg-gray-700 md:h-[600px] md:w-[450px]"
    >
      <AnimatedIcon Icon={BiLogoReact} className="left-10 top-24" />
      <AnimatedIcon Icon={BiLogoTailwindCss} className="right-10 top-28" />
      <AnimatedIcon Icon={BiLogoJavascript} className="left-2 top-72" />
      <AnimatedIcon Icon={SiExpress} className="right-2 top-80" />
      {isLoading && (
        <img
          className="absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2"
          src={blurUserCompressed}
          alt="my image"
        />
      )}
      {isHovered && (
        <img
          className="absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2 transition duration-300 ease-in-out"
          src={userImage}
          alt="my image"
        />
      )}
      <img
        className="absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2"
        src={userImageBnw}
        alt="my image"
        onLoad={() => setIsLoading(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </motion.div>
  );
};

export default HeroImage;
