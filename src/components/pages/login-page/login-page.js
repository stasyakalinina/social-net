import React from 'react';
import { connect } from 'react-redux';
import { ReduxLoginForm }  from '../../login-form/login-form'
import { logIn } from '../../../store/auth/actions';
import './login-page.scss';
import { Redirect } from 'react-router-dom';

const LoginPage = (props) => {
  const onSubmitData = (formData) => {
    props.logIn(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  } else {
    return (
      <section className="LoginPage">
        <h1 className="LoginPage__title">Login</h1>
        <ReduxLoginForm onSubmit={onSubmitData} />
      </section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {logIn})(LoginPage);