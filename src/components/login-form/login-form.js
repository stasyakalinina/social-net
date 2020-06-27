import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './login-form.scss';


const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__row">
        <Field name="login" component="input" type="text" placeholder="Login"/>
      </div>
      <div className="form__row">
        <Field name="password" component="input" type="password" placeholder="Password"/>
      </div>
      <div className="form__row">
        <Field name="remember" component="input" type="checkbox" />
        <label htmlFor="remember">remember me</label>
      </div>
      <div className="form__row">
        <button className="form__btn">Login</button>
      </div>
    </form>
  )
};

export const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm);