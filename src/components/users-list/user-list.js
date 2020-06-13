import React from 'react';
import User from '../user/user';
import styles from './user-list.module.css';

const UsersList = (props) => {

  const { users, follow, unfollow, sendingRequest } = props;

  const usersItems = users.map(user => {
    return (
      <li key={user.id} className={styles.item}>
        <User data={user}
          follow={follow}
          unfollow={unfollow}
          sendingRequest={sendingRequest}
        />
      </li>
      )
  });

  return (
    <ul>
      { usersItems }
    </ul>
  );
};

export default UsersList;
