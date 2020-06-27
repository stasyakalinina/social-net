import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './login-form.scss';
import { Input } from '../form-controls/form-control';
import { required } from '../../utils/validators';


const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <div className="LoginForm__row">
        <Field name="login"
          component={Input}
          type="text"
          validate={[required]}
          placeholder="Login"
          className="LoginForm__input" />
      </div>
      <div className="LoginForm__row">
        <Field name="password"
          component={Input}
          type="password"
          validate={[required]}
          placeholder="Password"
          className="LoginForm__input" />
      </div>
      <div className="LoginForm__row">
        <Field name="remember"
          component={Input}
          type="checkbox"
          className="LoginForm__checkbox" />
        <label htmlFor="remember" className="LoginForm__label">remember me</label>
      </div>
      <div className="LoginForm__row">
        <button className="LoginForm__btn ">Login</button>
      </div>
    </form>
  )
};

export const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm);