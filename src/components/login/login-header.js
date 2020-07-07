import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../store/auth/actions';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const LoginHeader = (props) => {

  const onLogOut = () => {
    props.logOut();
  }

  return (
    <div className={styles.block}>
      {props.isAuth
        ? <div>{props.login} - <button onClick={onLogOut}>Logout</button></div>
        : <Link to={'/login'}>Login</Link>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    loading: state.auth.loading,
  }
}

export default connect(mapStateToProps, {logOut})(LoginHeader);