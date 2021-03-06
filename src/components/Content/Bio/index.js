import React from 'react';
import Me from '../../../assets/images/Me.JPG';

function Bio() {
  return (
    <div>
      <h2>About Me:</h2>
      <div id='bio-block'>
        <img alt='' src={Me} />
        <p className='content-block'>
          Hello! I am full-stack web developer in training! I am currently
          taking classes and expect to graduate in August 2021. You can see some
          examples of my work in the Projects tab.
        </p>
      </div>
    </div>
  );
}
export default Bio;
