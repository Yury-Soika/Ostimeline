import React from 'react';
import { useSelector } from 'react-redux';
import { AddPostForm } from '../posts/AddPostForm';
import { PostsList } from '../posts/PostsList';
import { selectUser } from '../forms/userSlice';
import Partners from './../Partners';
import '../../App.css';
import './../content.scss';

const News = () => {
  const user = useSelector(selectUser);

  return (
    <div className="content">
      <main>
        <h1>News</h1>
        {user.user && <AddPostForm /> }
        <PostsList/>
      </main>

      <Partners />
    </div>
  );
}

export default News;
