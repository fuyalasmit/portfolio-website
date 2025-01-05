import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '../constants';
import ExperienceCard from '../components/ExperienceCard';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <section
      className="px-4"
      id="experience"
    >
      <SectionTitle title="Work Experinces" />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
