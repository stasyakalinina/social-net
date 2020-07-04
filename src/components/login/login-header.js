import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';

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

export default LoginHeader;