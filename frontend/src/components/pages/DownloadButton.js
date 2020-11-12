import React from 'react';
import { apiUrl } from './../config';

const downloadsRoute = '/downloads/';
const download = project => {
  window.open(apiUrl + downloadsRoute + project);
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
