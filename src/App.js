import React from 'react';
import './index.css';
import { projects } from './assets/projectlist/projectlist.json';

import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

function App() {
  console.log(projects);
  return (
    <div>
      <Header />
      <main>This is the main content area</main>
      <Footer />
    </div>
  );
}

export default App;
