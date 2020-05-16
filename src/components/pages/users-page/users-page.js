import React from 'react';
import styles from './users-page.module.css';
import UsersList from '../../users-list/user-list';

const UsersPage = () => {
  return (
    <section className={styles.block}>
      <h2 className={styles.title}>Users</h2>
      <UsersList />
    </section>
  );
}

export default UsersPage;