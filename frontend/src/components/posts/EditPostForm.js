import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useHistory } from 'react-router-dom'

import { updatePost, selectPostById } from './postsSlice'
import Partners from './../Partners';

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostClicked = async () => {
    if (title && content) {
      try {
        await  dispatch(updatePost({ id: postId, change: {title, content} }));
        setTitle('');
        setContent('');
      } catch (err) {
        console.error('Failed to update the post: ', err);
      } finally {
        history.push(`/posts/${postId}`);
      }
    }
  }

  return (
    <div className="content">
      <section>
        <h2>Edit Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="What's on your mind?"
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
        </form>
        <button type="button" className="btn btn--primary btn--medium btn--save" onClick={onSavePostClicked}>
          Save Post
        </button>
      </section>

      <Partners />
    </div>
  )
}
