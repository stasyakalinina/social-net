import React, { Component } from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData, toggleLoading, setUserProfile } from '../../actions';
import Login from './login';

class LoginContainer extends Component {

  componentDidMount() {
    this.props.toggleLoading(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
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
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, {setAuthUserData, toggleLoading, setUserProfile})(LoginContainer);