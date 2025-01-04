import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="py-16" id="projects">
      <SectionTitle title="Selected Projects" />
      <div className="container mt-10">
        {/* projects */}
        <div className='space-y-6'>
          {projects.map((value, index) => (
            <ProjectCard project={value} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
