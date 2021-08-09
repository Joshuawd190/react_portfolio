import React from 'react';
import Navbar from '../Navbar';

function Header({ setNavState, NavState }) {
  return (
    <header className='App-header'>
      <div className='title-card'>
        <h1>Joshua Wood</h1>
        <p>Web Developer</p>
      </div>
      <hr></hr>
      <Navbar setNavState={setNavState} NavState={NavState} />
    </header>
  );
}

export default Header;
