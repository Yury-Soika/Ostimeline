import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, registration, reset } from './../store/userSlice';
import './Form.scss';

const FormRegistration = () => {
  const [values, setValues] = useState({
    username: '',
    firstName: '',
    lastName: '',
    role: 'User',
    password: '',
    password2: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const user = useSelector(selectUser);
  const userStatus = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset(user));
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
    if(
      values.username
      && values.password
      && values.firstName
      && values.lastName
      && (values.password === values.password2)
    ) {
      dispatch(registration(values));
    }
  };

  return (
    <div className="form">
      <div className="form-content-left">
        <img src="public/images/registration.svg" alt="spaceship" className="form-img"/>
      </div>
      <div className="form-content-right">
        <form className="form-container" onSubmit={handleSubmit}>
          <h1>Get started with us today!</h1>
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
                htmlFor="firstName"
                className="form-label"
              >
                First name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="form-input"
                placeholder="Enter your first name"
                value={values.firstName}
                onChange={handleChange}
              />
              {submitted && !values.firstName &&<p >First name is required</p>}
            </div>

            <div className="form-inputs">
              <label 
                htmlFor="lastName"
                className="form-label"
              >
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="form-input"
                placeholder="Enter your last name"
                value={values.lastName}
                onChange={handleChange}
              />
              {submitted && !values.lastName &&<p >Last name is required</p>}
            </div>
          
          <div className="form-selects">
            <label 
              htmlFor="role"
              className="form-label"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              className="form-select"
              value={values.role}
              onChange={handleChange}>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
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

          <div className="form-inputs">
            <label 
              htmlFor="password2"
              className="form-label"
            >
              Confirm password
            </label>
            <input
              id="password2" 
              type="password"
              name="password2"
              className="form-input"
              placeholder="Enter your password"
              value={values.password2}
              onChange={handleChange}
            />
            {submitted && !values.password2 &&<p >Password is required</p>}
          </div>
          {error && <p>{error}</p>}
          {userStatus === 'succeeded' && <p style={{ color: "#4BB543" }}>User has been added successfully</p> }
          <button 
            className="form-input-btn"
            type="submit"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormRegistration