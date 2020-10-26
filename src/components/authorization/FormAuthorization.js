import React, { useState } from 'react';
import FormLogin from './FormLogin';
import { Redirect } from 'react-router-dom';
import './../Form.css';

const FormAuthorization = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img src="public/images/img-1.svg" alt="spaceship" className="form-img"/>
        </div>
        {isSubmitted ? <Redirect to='/'/> : <FormLogin submitForm = {submitForm} />}
      </div>
    </>
  )
}

export default FormAuthorization