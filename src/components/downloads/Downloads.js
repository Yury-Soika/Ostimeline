import React from 'react';
import './../Button.css';
import './downloads.css';
import '../../App.css';

const Downloads = () => {
  const apiUrl = 'http://localhost:4000/downloads/';

  const download = project => {
    window.open(apiUrl + project);
  }

  return (
    <div className="content downloads">
      <main>
        <h1 className="download">Downloads</h1>
        <button 
          className='btn btn--outline btn--large'
          onClick={() => download('demo')}
        >
          <i className="fas fa-file-download"></i> Demo
        </button>
        <button 
          className='btn btn--outline btn--large'
          onClick={() => download('ostimeline')}
        >
          <i className="fas fa-file-download"></i> Ostimeline
        </button>
        <button 
          className='btn btn--outline btn--large'
          onClick={() => download('lovelygraybuttons')}
        >
          <i className="fas fa-file-download"></i> Lovely Gray Buttons
        </button>
      </main>
      <div className="sidebar">
        <h3>Partners</h3>
        <a href="https://www.bstu.by/" className="partners-img"></a>
      </div>
    </div>
  );
}

export default Downloads;