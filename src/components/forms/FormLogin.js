import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUser, login, logout } from './../store/userSlice';
import { useHistory } from "react-router-dom";
import { button } from 'react';
import './Form.css';

const FormLogin = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const user = useSelector(selectUser);
  const userStatus = useSelector((state) => state.user.status);
  const authError = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const history = useHistory();
  
  // reset login status
  useEffect(() => {
    dispatch(logout()); 
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
    }
  }, [userStatus]);

  return (
    <div className="form-container">
      <div className="form-content-left">
        <img src="public/images/img-1.svg" alt="spaceship" className="form-img"/>
      </div>

      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <h1>We are glad to see you!</h1>
          <div className="form-inputs">
            <label 
              htmlFor="username"
              className="form-label"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {submitted && !values.username &&<p >Username is required</p>}
          </div>

          <div className="form-inputs">
            <label 
              htmlFor="password"
              className="form-label"
            >
              Password
            </label>
            <input
              id="password" 
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your Password"
              value={values.password}
              onChange={handleChange}
            />
            {submitted && !values.password &&<p >Password is required</p>}
          </div>
          {authError && <p>{authError}</p>}
          <button 
            className="form-input-btn"
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

export default FormLogin