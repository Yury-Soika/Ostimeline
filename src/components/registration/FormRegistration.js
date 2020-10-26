import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './../Form.css';

const FormRegistration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img src="public/images/img-2.svg" alt="spaceship" className="form-img"/>
        </div>
        {isSubmitted ? <FormSuccess /> : <FormSignup submitForm = {submitForm} />}
      </div>
    </>
  )
}

export default FormRegistration