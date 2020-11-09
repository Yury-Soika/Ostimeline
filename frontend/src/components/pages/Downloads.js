import React from 'react';
import DownloadButton from './DownloadButton';
import Partners from './../Partners';

const Downloads = () => {
  return (
    <div className="content downloads">
      <section>
        <h1 className="download">Downloads</h1>
        <DownloadButton path="demo" name="Demo" />
        <DownloadButton path="ostimeline" name="Ostimeline" />
        <DownloadButton path="lovelygraybuttons" name="Lovely Gray Buttons" />
      </section>
      
      <Partners/>
    </div>
  );
}

export default Downloads;