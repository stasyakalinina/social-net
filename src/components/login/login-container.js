import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logOut } from '../../store/auth/actions';
import LoginHeader from './login-header';

class LoginContainer extends Component {

  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <LoginHeader {...this.props} />
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    loading: state.auth.loading,
  }
}

export default connect(mapStateToProps, {getAuthUserData, logOut})(LoginContainer);