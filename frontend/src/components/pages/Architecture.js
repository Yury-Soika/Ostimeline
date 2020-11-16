import React from 'react';
import Partners from './../Partners';
import { Page } from './Page';

const Architecture = () => {
  return (
    <div className="content">
      <main>
        <section>
          <Page pageName="architecture" />
        </section>
      </main>

      <Partners />
    </div>
  );
}

export default Architecture;
