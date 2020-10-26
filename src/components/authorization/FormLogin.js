import React from 'react';
import useForm from './useForm';
import { button } from 'react';
import validate from './validateInfo';
import './../Form.css';

const FormLogin = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

  return (
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
          {errors.username && <p>{errors.username}</p>}
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
          {errors.password && <p>{errors.password}</p>}
        </div>
        {errors.wrongData && <p>{errors.wrongData}</p>}
        <button 
          className="form-input-btn"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default FormLogin