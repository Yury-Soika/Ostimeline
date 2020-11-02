import React from 'react';
import Partners from './../Partners';
import './../Button.css';
import '../../App.css';

const Downloads = () => {
  const apiUrl = 'http://localhost:4000/downloads/';

  const download = project => {
    window.open(apiUrl + project);
  }

  return (
    <div className="content downloads">
      <section>
        <h1 className="download">Downloads</h1>
        <button 
          className='btn btn--primary btn--large'
          onClick={() => download('demo')}
        >
          <i className="fas fa-file-download"></i> Demo
        </button>
        <button 
          className='btn btn--primary btn--large'
          onClick={() => download('ostimeline')}
        >
          <i className="fas fa-file-download"></i> Ostimeline
        </button>
        <button 
          className='btn btn--primary btn--large'
          onClick={() => download('lovelygraybuttons')}
        >
          <i className="fas fa-file-download"></i> Lovely Gray Buttons
        </button>
      </section>
      
      <Partners/>
    </div>
  );
}

export default Downloads;