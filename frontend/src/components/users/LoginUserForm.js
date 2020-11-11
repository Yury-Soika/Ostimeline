import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout, reset } from './userSlice';
import { useHistory } from "react-router-dom";
import './User.scss';

const LoginUserForm = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const user = useSelector(selectUser);
  const userStatus = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const history = useHistory();
  
  // reset login status
  useEffect(() => {
    dispatch(logout(user));
  }, []);

  const handleChange = e => {
    const {name, value} = e.target;
    setValues ({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitted(true);
    if(values.username && values.password) {
      dispatch(login(values));
    }
  }

  useEffect(() => { 
    if(userStatus === 'succeeded') {
      history.push('/');
      dispatch(reset(user));
    }
  }, [userStatus]);

  return (
    <div className="user">
      <div className="user-content-left">
        <div className="user-img user-login"></div>
      </div>

      <div className="user-content-right">
        <form className="user-container" onSubmit={handleSubmit}>
          <h1>We are glad to see you!</h1>
          <div className="user-inputs">
            <label 
              htmlFor="username"
              className="user-label"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="user-input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {submitted && !values.username &&<p >Username is required</p>}
          </div>

          <div className="user-inputs">
            <label 
              htmlFor="password"
              className="user-label"
            >
              Password
            </label>
            <input
              id="password" 
              type="password"
              name="password"
              className="user-input"
              placeholder="Enter your Password"
              value={values.password}
              onChange={handleChange}
            />
            {submitted && !values.password &&<p >Password is required</p>}
          </div>
          {error && <p>{error}</p>}
          <button 
            className="user-input-btn"
            type="submit"
          >
            {userStatus === 'loading' && <i className="fa fa-spinner fa-spin"></i>}
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginUserForm
