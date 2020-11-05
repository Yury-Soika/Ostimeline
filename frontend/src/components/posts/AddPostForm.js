import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'
import { addNewPost } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  const canSave = [title, content].every(Boolean);

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        const resultAction = await dispatch(
          addNewPost({ title, content })
        );
        unwrapResult(resultAction);
        setTitle('');
        setContent('');
      } catch (err) {
        console.error('Failed to save the post: ', err);
      } 
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" className="btn btn--primary btn--medium btn--save" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}