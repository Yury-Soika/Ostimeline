import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { selectUser } from '../users/userSlice';
import { selectPostById, deletePost } from './postsSlice';
import Partners from './../Partners';

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;
  const user = useSelector(selectUser);
  const post = useSelector(state => selectPostById(state, postId));
  const dispatch = useDispatch();
  const history = useHistory();

  const onDeletePostClicked = async () => {
    try {
      await dispatch(deletePost(postId));
    } catch (err) {
      console.error('Failed to delete the post: ', err);
    }
    finally {
      history.push('/');
    }
  };

  if (!post) {
    return (
      <div className="content">
        <section>
          <h2>Post not found!</h2>
        </section>

        <Partners />
      </div>
    )
  }

  return (
    <div className="content">
      <section>
        <article className="post">
          <h2>{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <Link to={`/editPost/${post.id}`} className="button">
            {user && <button type="button" className="btn btn--primary btn--medium btn--edit">
              Edit post
            </button>}
          </Link>
          {user && <button type="button" className="btn btn--primary btn--medium btn--delete" onClick={onDeletePostClicked}>
            Delete Post
          </button>}
        </article>
      </section>

      <Partners />
    </div>
  )
}