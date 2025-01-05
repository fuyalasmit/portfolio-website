import React, { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '../constants';
import ExperienceCard from '../components/ExperienceCard';
import { motion, useInView } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
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
      className="px-4"
      id="experience"
        ref={sectionRef}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
    >
      <SectionTitle title="Work Experinces" />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experience;
