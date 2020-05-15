import React from 'react';
import styles from './users-page.module.css';
import UsersList from '../../users-list/user-list';

const UsersPage = () => {
  return (
    <section>
      <h2>Users</h2>
      <UsersList />
    </section>
  );
}

export default UsersPage;