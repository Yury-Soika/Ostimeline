import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DownloadButton from './DownloadButton';
import Partners from './../Partners';
import { fetchDownloads, selectAllDownloads } from './downloadsSlice';

const Downloads = () => {
  const dispatch = useDispatch();
  const downloads = useSelector(selectAllDownloads);
  const downloadStatus = useSelector(state => state.download.status)

  useEffect(() => {
    if (downloadStatus === 'idle') {
      dispatch(fetchDownloads())
    }
  }, [downloadStatus, dispatch]);

  let content;

  if (downloadStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (downloadStatus === 'succeeded') {
    content = downloads.map(download => (
      <DownloadButton key={download.id} download={download} />
    ))
  } else if (downloadStatus === 'error') {
    content = <div>{error}</div>
  }

  return (
    <div className="content downloads">
      <section>
        <h1 className="download">Downloads</h1>
        {content}
      </section>

      <Partners/>
    </div>
  );
}

export default Downloads;