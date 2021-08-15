import React from 'react';

function Navbar({ setNavState }) {
  return (
    <nav className='nav-bar'>
      <ul className='flex-row'>
        <li className='nav-bar-item'>
          <a href='#about' onClick={() => setNavState('Bio')}>
            About me
          </a>
        </li>
        <li className='nav-bar-item'>
          <a href='#projects' onClick={() => setNavState('Projects')}>
            Projects
          </a>
        </li>
        <li className='nav-bar-item'>
          <a href='#resume' onClick={() => setNavState('Resume')}>
            Resume
          </a>
        </li>
        <li className='nav-bar-item'>
          <a href='#contact' onClick={() => setNavState('Contact')}>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
