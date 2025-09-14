import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Partners from './../Partners';
import './pages-img.scss';

const About = () => {
  return (
    <div className='content'>
      <main>
        <section id='about'>
          <h3>
            About ostimeline{' '}
            <HashLink smooth to={`${location.pathname}#about`}>
              <i className='fas fa-link'></i>
            </HashLink>
          </h3>
          <p>
            The ostimeline project makes interactive HTML-based timelines with
            virtualized operating systems (or any other software) embedded into
            HTML instead of screenshots.
          </p>
          <p>
            It creates a visual timeline to navigate among several pages, each
            page devoted to some version of an operating system or an
            application. The primary goal of the project was presenting a live
            history of GUI-based mobile & desktop operating systems, which looks
            as follows:
          </p>
          <div className='pages-img xeros'></div>
          <p>
            Pages are showing some description and frames with virtualized
            operating systems, embedded into text as if they where ordinary
            screenshots.
          </p>
          <div className='pages-img navigation'></div>
          <p>
            User can flip through timeline and interact with virtualized systems
            by mouse. Keyboard interaction with virtual machine is also possible
            (you just need to click on the border, which takes keyboard focus
            from the timeline to the virtual machine).
          </p>
        </section>
      </main>

      <Partners />
    </div>
  );
};

export default About;
