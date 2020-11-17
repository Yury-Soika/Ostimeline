import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUser, registrationUser } from './userSlice';
import { validateName, validatePassword } from './validateInfo';
import './User.scss';

const RegistrationUserForm = () => {
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
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    const {name, value} = e.target;
    setValues ({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setSubmitted(true);
    if(!validateName(values.username)
      && !validatePassword(values.password)
      && !validateName(values.firstName)
      && !validateName(values.lastName)
      && (values.password === values.password2)
    ) try {
      await dispatch(registrationUser(values));
    } catch (err) {
        console.error('Failed to registration the user: ', err);
    } finally {
      history.push('/admin');
    }
  };

  if(user && user.role === "Admin" ) {
    return (
      <div className="content" style={{alignItems: "center"}}>
        <div className="user">
          <div className="user-content-left">
            <div className="user-img user-registration"></div>
          </div>
          <div className="user-content-right">
            <form className="user-container" onSubmit={handleSubmit}>
            <h1>Get started with us today!</h1>
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
              {submitted 
                  && validateName(values.username) 
                  && <p>{validateName(values.username)} user name</p>}
            </div>

            <div className="user-inputs">
                <label 
                  htmlFor="firstName"
                  className="user-label"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="user-input"
                  placeholder="Enter your first name"
                  value={values.firstName}
                  onChange={handleChange}
                />
                {submitted 
                  && validateName(values.firstName) 
                  && <p>{validateName(values.firstName)} first name</p>}
              </div>

              <div className="user-inputs">
                <label 
                  htmlFor="lastName"
                  className="user-label"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="user-input"
                  placeholder="Enter your last name"
                  value={values.lastName}
                  onChange={handleChange}
                />
                {submitted 
                  && validateName(values.lastName) 
                  && <p>{validateName(values.lastName)} last name</p>}
              </div>
            
            <div className="user-selects">
              <label 
                htmlFor="role"
                className="user-label"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                className="user-select"
                value={values.role}
                onChange={handleChange}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
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
              {submitted 
                  && validatePassword(values.password) 
                  && <p>{validatePassword(values.password)}</p>}
            </div>

            <div className="user-inputs">
              <label 
                htmlFor="password2"
                className="user-label"
              >
                Confirm password
              </label>
              <input
                id="password2" 
                type="password"
                name="password2"
                className="user-input"
                placeholder="Enter your password"
                value={values.password2}
                onChange={handleChange}
              />
              {submitted 
                  && !(values.password === values.password2)
                  && <p>Passwords must match</p>}
            </div>
            {error && <p>{error}</p>}
            <button 
              className="user-input-btn"
              type="submit"
            >
              Register
            </button>
          </form>
          </div>
        </div>
      </div>
    )
  }
  return (<h1 style={{color: "red"}}>Access denied</h1>);
}

export default RegistrationUserForm
