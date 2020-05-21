import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';

const Login = (props) => {

  return (
    <div className={styles.block}>
      {props.isAuth ? props.login : <Link to={'/login'}>Login</Link>}
    </div>
  );
};

export default Login;