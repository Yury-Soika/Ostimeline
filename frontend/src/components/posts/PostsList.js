import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { selectUser } from '../users/userSlice';
import {
  fetchPosts,
  selectPostIds,
  selectPostById,
  deletePost
} from './postsSlice';

let PostExcerpt = ({ postId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onDeletePostClicked = async () => {
    try {
      const resultAction = await dispatch(
        deletePost(postId)
      );
    } catch (err) {
      console.error('Failed to delete the post: ', err);
    } finally {
      history.push('/');
    }
  };

  const user = useSelector(selectUser);
  const post = useSelector(state => selectPostById(state, postId));
  return (
    <section className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content}</p>
      <Link to={`/posts/${post.id}`}>
        <button type="button" className="btn btn--primary btn--medium btn--view">
          View post
        </button>
      </Link>
      {user && <button type="button" className="btn btn--primary btn--medium btn--delete" onClick={onDeletePostClicked}>
        Delete Post
      </button>}
    </section>
  )
}

PostExcerpt = React.memo(PostExcerpt);

export const PostsList = () => {
  const dispatch = useDispatch();
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(state => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch]);

  let content

  if (postStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map(postId => (
      <PostExcerpt key={postId} postId={postId} />
    ))
  } else if (postStatus === 'error') {
    content = <div>{error}</div>
  }

  return <>{content}</>
}