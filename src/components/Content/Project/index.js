import React from 'react';
import wayfinder from '../../../assets/images/Chicago-Art-Wayfinder-Home-min.jpg';
import dolphin from '../../../assets/images/Dolphin-Group-min.jpg';

function Project(props) {
  let { name, desc, github, link, tech, img } = props;
  return (
    <div className='project-container'>
      <img alt='' src={img} />
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
