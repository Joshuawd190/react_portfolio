import React from 'react';
import projects from '../../../assets/projectlist/projectlist';
import Project from '../Project';

function Projects() {
  return (
    <div>
      <h2>Projects:</h2>

      <div className='flex-row gap'>
        {projects.map((project, i) => {
          let { name, desc, github, link, tech, img } = project;
          return (
            <Project
              key={i + name}
              name={name}
              desc={desc}
              github={github}
              link={link}
              tech={tech}
              img={img}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
