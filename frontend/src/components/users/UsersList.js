import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  selectAllUsers,
  fetchUsers,
  selectUserIds,
  selectUserById,
  deleteUser
} from './userSlice';

let UserExcerpt = ({ userId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onDeleteUserClicked = async () => {
    try {
      const resultAction = await dispatch(
        deleteUser(userId)
      );
    } catch (err) {
      console.error('Failed to delete the user: ', err);
    } finally {
      history.push('/admin');
    }
  };

  const user = useSelector(state => selectUserById(state, userId));
  return (
    <section className="user-excerpt" key={user.id}>
      <p>User: {user.username}</p>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>Role: {user.role}</p>
      <Link to={`/editUser/${user.id}`}>
        <button type="button" className="btn btn--primary btn--medium btn--view">
          Edit user
        </button>
      </Link>
      <button type="button" className="btn btn--primary btn--medium btn--delete" onClick={onDeleteUserClicked}>
        Delete User
      </button>
    </section>
  )
}

UserExcerpt = React.memo(UserExcerpt);

export const UsersList = () => {
  const dispatch = useDispatch();
  const orderedUserIds = useSelector(selectUserIds);
  const userStatus = useSelector(state => state.user.status)

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [userStatus, dispatch]);

  let content

  if (userStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (userStatus === 'succeeded') {
    content = orderedUserIds.map(userId => (
      <UserExcerpt key={userId} userId={userId} />
    ))
  } else if (userStatus === 'error') {
    content = <div>{error}</div>
  }

  return <>{content}</>
}