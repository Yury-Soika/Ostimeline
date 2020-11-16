import React from 'react';
import Partners from './../Partners';
import { Page } from './Page';

const Gstreamer = () => {
  return (
    <div className="content">
      <main>
        <section>
          <Page pageName="gstreamer" />
        </section>
        
        <Partners />
      </main>
    </div>
  )
}

export default Gstreamer;
