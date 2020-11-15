import React from 'react';
import { useSelector } from 'react-redux';
import { getDownload } from './downloadsSlice';
import { apiUrl } from './../config';

const DownloadButton = ({ download }) => {
  return (
    <button 
      className='btn btn--primary btn--large'
      onClick={() => window.open(apiUrl + '/downloads/' + download.id)}
    >
      <i className="fas fa-file-download"></i> {download.name}
    </button>
  )
}

export default DownloadButton
