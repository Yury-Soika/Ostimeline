import React from 'react';
import '../../App.css';
import FormAuthorization from '../../components/authorization/FormAuthorization';

const Login = () => {
  return (
    <>
      <div className="login">
        <FormAuthorization />
      </div>
    </>
  );
}

export default Login;