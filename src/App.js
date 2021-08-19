import React, { useState } from 'react';
// import './index.css';

import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Main from './components/UI/Main';

function App() {
  const [NavState, setNavState] = useState('Bio');

  return (
    <div>
      <Header setNavState={setNavState} />
      <Main NavState={NavState} />
      <Footer />
    </div>
  );
}

export default App;
