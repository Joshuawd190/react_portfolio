import React from 'react';

function Project(props) {
  let { name, desc, github, link, tech, img } = props;
  return (
    <div className='project-container'>
      <img alt='' src={require(`../../../assets/images/${img}`).default} />
      <h3>{name}</h3>
      <p className='hide'>
        {desc} {'\n'} Built using: {tech}
      </p>

      <div className='project-links'>
        <a href={github} className='hide'>
          Repository
        </a>
        <a href={link} className='hide'>
          Deployed
        </a>
      </div>
    </div>
  );
}
export default Project;
