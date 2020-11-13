import React from 'react';
import Partners from './../Partners';
import { Page } from './Page';

const Installation = () => {
  return (
    <div className="content">
      <section>
        <Page pageName="installation" />
      </section>

      <Partners />
    </div>
  );
}

export default Installation;
