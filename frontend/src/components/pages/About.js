import React from 'react';
import Partners from './../Partners';
import './pages-img.scss';
import { Page } from './Page';

const About = () => {
  return (
    <div className="content">
      <main>
        <section>
          <Page pageName="about" />
        </section>
      </main>
      
      <Partners/>
    </div>
  )
}

export default About;
