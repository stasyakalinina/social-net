import React from 'react';
import logo from './logo.svg';
import styles from'./header.module.css';
import LoginHeader from '../login/login-header';

const Header = () => {
  return (
    <header className={styles.block}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.wrapper}>
        <input type="text" placeholder="Search posts" />
        <LoginHeader />
      </div>
    </header>
  );
};

export default Header;