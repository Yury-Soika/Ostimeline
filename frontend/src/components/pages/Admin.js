import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UsersList } from '../users/UsersList';
import { selectUser } from '../users/userSlice';

const Admin = () => {
  const user = useSelector(selectUser);
  
  if(user && user.role === "Admin" ) {
    return (
      <div className="content admin">
        <Link to={'/registration'} >
          <button type="button" className="btn btn--primary btn--medium btn--save">
            Registration
          </button>
        </Link>
        <main className="admin">
          <UsersList/>
        </main>
      </div>
    );
  }
  return (<h1 style={{color: "red"}}>Access denied</h1>);
}

export default Admin;
