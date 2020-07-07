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
        <Field name="email"
          component={Input}
          type="text"
          validate={[required]}
          placeholder="Email"
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
        <Field name="rememberMe"
          component={Input}
          type="checkbox"
          className="LoginForm__checkbox" />
        <label htmlFor="rememberMe" className="LoginForm__label">remember me</label>
      </div>
      { props.error && <div className="LoginForm__row LoginForm__row--error">
          <span>{props.error}</span>
        </div>
      }
      <div className="LoginForm__row">
        <button className="LoginForm__btn ">Login</button>
      </div>
    </form>
  )
};

export const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm);