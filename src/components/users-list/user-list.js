import React, {Component} from 'react';
import { connect } from 'react-redux';
import { followCreator, unFollowCreator, setUsersCreator, setCurrentPageCreator, setTotalUsersCreator } from './../../actions';
import * as axios from 'axios';
import User from '../user/user';
import Pagination from '../pagination/pagination';
import styles from './user-list.module.css';

const UsersList = (props) => {

  const { users, followUser, unfollowUser } = props;

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

class UsersListContainer extends Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        console.log(response.data.totalCount)
    });
  }

  getPageUsers = (page) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
    });
  }

  render() {
    const { users,
      followUser,
      unfollowUser,
      pageSize,
      totalUsersCount,
      currentPage,
      setCurrentPage } = this.props;

    return (
      <React.Fragment>
        <Pagination
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          getPageUsers={this.getPageUsers}
        />
        <UsersList
          users={users}
          followUser={followUser}
          unfollowUser={unfollowUser} />
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    setCurrentPage: (page) => {
      dispatch(setCurrentPageCreator(page));
    },
    setTotalUsersCount: (total) => {
      dispatch(setTotalUsersCreator(total))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);