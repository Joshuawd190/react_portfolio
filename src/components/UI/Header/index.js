import React from 'react';
import Navbar from '../Navbar';

function Header() {
  return (
    <header className='App-header'>
      <div className='title-card'>
        <h1>Joshua Wood</h1>
        <p>Web Developer</p>
      </div>
      <hr></hr>
      <Navbar />
    </header>
  );
}

export default Header;
