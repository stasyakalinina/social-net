import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../store/auth/actions';
import Login from './login';

class LoginContainer extends Component {

  componentDidMount() {
    this.props.logIn();
  }

  render() {
    return <Login {...this.props} />
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    loading: state.auth.loading,
  }
}

export default connect(mapStateToProps, {logIn})(LoginContainer);