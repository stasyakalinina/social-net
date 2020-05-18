import React from 'react';
import styles from './users-page.module.css';
import UsersListContainer from '../../users-list/user-list-container';

const UsersPage = () => {
  return (
    <section className={styles.block}>
      <h2 className={styles.title}>Users</h2>
      <UsersListContainer />
    </section>
  );
}

export default UsersPage;