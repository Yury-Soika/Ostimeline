import React from 'react';

const apiUrl = 'http://localhost:4000/downloads/';

const download = project => {
  window.open(apiUrl + project);
}

const DownloadButton = (props) => {
  return (
    <button 
      className='btn btn--primary btn--large'
      onClick={() => download(props.path)}
    >
      <i className="fas fa-file-download"></i> {props.name}
    </button>
  )
}

export default DownloadButton
