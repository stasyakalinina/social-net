import React from 'react';
import { connect } from 'react-redux';
import User from '../user/user';
import { followCreator, unFollowCreator, setUsersCreator } from './../../actions';
import styles from './user-list.module.css';


const UsersList = (props) => {
  const { users,followUser, unfollowUser } = props;

  const usersItems = users.map(user => {
    return (
      <li key={user.id} className={styles.item}>
        <User data={user}
          followUser={followUser}
          unfollowUser={unfollowUser}/>
      </li>
      )
  });

  return (
    <ul>
      { usersItems }
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followCreator(userId));
    },
    unfollowUser: (userId) => {
      dispatch(unFollowCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);