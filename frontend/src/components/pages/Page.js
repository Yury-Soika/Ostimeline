import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPage,
  selectPageIds,
  selectPageById
} from './pageSlice';

export const Page = ({ pageName }) => {
  const dispatch = useDispatch();
  const pageIds = useSelector(selectPageIds);
  const page = useSelector(state => selectPageById(state, pageIds[0]));
  const pageStatus = useSelector(state => state.page.status);

  useEffect(() => {
    if (pageStatus === 'idle') {
      dispatch(fetchPage(pageName));
    }
  }, [pageStatus, dispatch]);

  let content

  if (pageStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (pageStatus === 'succeeded') {

    content = page[pageName].map( e => {
      let Tag = e.tag;
      switch(e.tag) {
        case "div": 
          return <Tag key={e.className} className={e.className}></Tag>;
        case "ul":
          return (
            <Tag key={e.content}>
              {e.content.map( liContent => {
                return <li key={liContent.li}>{liContent.li}</li>
              })}
            </Tag>
          );
        default:
          return <Tag key={e.content}>{e.content}</Tag>;
      }
    })
  } else if (pageStatus === 'error') {
    content = <div>{error}</div>
  }

  return <>{content}</>
}