import React, { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import contactImage from '../assets/contact.svg';
import { contactDetails } from '../constants';
import ContactDetailsCard from '../components/ContactDetailsCard';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  // const containerVariants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       ease: 'easeOut',
  //     },
  //   },
  // };
  const fadeInVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.section
      className="px-4 py-16 lg:py-20"
      id="contact"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      <SectionTitle title="Contact Me" />
      <div className="container mt-10 flex flex-col gap-10 rounded-2xl border-2 border-white/10 bg-white/5 p-10 md:flex-row">
        <motion.div
          className=" flex flex-1 items-center justify-center"
          variants={fadeInVariants}
        >
          <div className="flex flex-col items-center">
            <img src={contactImage} alt="Contact Image" className="h-50" />
            <div className="text-white/60 bg-white/5 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className='bg-green-500 size-2.5 rounded-full relative '>
                <div className='bg-green-500 inset-0 absolute rounded-full animate-ping-large'></div>
              </div>
              <span className="text-sm font-medium ">
                Available for new projects
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col gap-5"
          variants={fadeInVariants}
        >
          <h1 className="font-serif text-3xl font-bold text-white/70 ">
            Reach Out to Me
          </h1>
          <p className="text-white/60">
            Have any questions or want to collaborate? Feel free to get in touch
            through the options below. I'll respond promptly.
          </p>
          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer}
          >
            {contactDetails.map((contact) => (
              <motion.div key={contact.id} variants={fadeInVariants}>
                <ContactDetailsCard contact={contact} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
