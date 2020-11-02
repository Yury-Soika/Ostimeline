import React from 'react';
import Partners from './../Partners';
import '../../App.css';

const About = () => {
  return (
    <div className="content">
      <section>
        <h3 className="title">About ostimeline</h3>

        <p>
          The ostimeline project makes interactive HTML-based timelines with virtualized operating systems
          (or any other software) embedded into HTML instead of screenshots.
        </p>

        <p>
          It creates a visual timeline to navigate among several pages, each page devoted to some
          version of an operating system or an application. The primary goal of the project was presenting
          a live history of GUI-based mobile & desktop operating systems, which looks as follows:
        </p>

        
        <img alt="Xerox Alto" src="../../../public/images/xerox_alto.png" width="50%" />

        <p>
          Pages are showing some description and frames with virtualized operating systems, embedded
          into text as if they where ordinary screenshots.
        </p>

        
        <img alt="timeline with navigation" src="../../../public/images/timeline_nav" width="30%" />

        <p>
          User can flip through timeline and interact with virtualized systems by mouse.
          Keyboard interaction with virtual machine is also possible (you just need to click on the border,
          which takes keyboard focus from the timeline to the virtual machine).
        </p>
      </section>
      
      <Partners/>
    </div>
  )
}

export default About;
