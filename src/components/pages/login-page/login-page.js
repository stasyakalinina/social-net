import React from 'react';
import { ReduxLoginForm }  from '../../login-form/login-form'
import './login-page.scss';

const LoginPage = (props) => {
  const onSubmitData = (formData) => {
    console.log(formData);
  }

  return (
    <section className="LoginPage">
      <h1 className="LoginPage__title">Login</h1>
      <ReduxLoginForm onSubmit={onSubmitData} />
    </section>
  );
};

export default LoginPage;