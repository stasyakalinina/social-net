import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../store/auth/actions';
import { setUserProfile } from '../../store/profile/actions';
import { toggleLoading } from '../../store/users/actions';
import Login from './login';
import { authAPI } from '../../services/api';

class LoginContainer extends Component {

  componentDidMount() {
    this.props.toggleLoading(true);
    authAPI.getAuth()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          this.props.setAuthUserData(id, email, login);
          this.props.toggleLoading(false);
        }
    });
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

export default connect(mapStateToProps, {setAuthUserData, toggleLoading, setUserProfile})(LoginContainer);