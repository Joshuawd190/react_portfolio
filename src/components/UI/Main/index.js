import React from 'react';

import Bio from '../../Content/Bio';
import Projects from '../../Content/Projects';
import Resume from '../../Content/Resume';
import ContactForm from '../../Content/ContactForm';
import PageNotFound from '../../Content/PageNotFound';

function Main(props) {
  const { NavState } = props;

  function View(NavState) {
    switch (NavState) {
      case 'Bio':
        return <Bio />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <PageNotFound />;
    }
  }

  return <main>{View(NavState)}</main>;
}
export default Main;
