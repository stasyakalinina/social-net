import React from 'react';
import User from '../user/user';
import styles from './user-list.module.css';

const UsersList = (props) => {

  const { users, followUser, unfollowUser, sendingRequest, toggleSendingRequest } = props;

  const usersItems = users.map(user => {
    return (
      <li key={user.id} className={styles.item}>
        <User data={user}
          followUser={followUser}
          unfollowUser={unfollowUser}
          sendingRequest={sendingRequest}
          toggleSendingRequest={toggleSendingRequest}/>
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
