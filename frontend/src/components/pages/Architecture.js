import React from 'react';
import Partners from './../Partners';
import { Page } from './Page';

const Architecture = () => {
  return (
    <div className="content">
      <section>
        <Page pageName="architecture" />
      </section>

      <Partners />
    </div>
  );
}

export default Architecture;
