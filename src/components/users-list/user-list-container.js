import React, {Component} from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followUser,
         unfollowUser,
         setUsers,
         setCurrentPage,
         setTotalUsersCount,
         toggleLoading } from '../../actions';
import Pagination from '../pagination/pagination';
import UsersList from './user-list';
import Preloader from '../preloader/preloader';


class UsersListContainer extends Component {

  componentDidMount() {
    this.props.toggleLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleLoading(false);
    });
  }

  getPageUsers = (page) => {
    this.props.toggleLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.toggleLoading(false);
    });
  }

  render() {
    const { users,
      followUser,
      unfollowUser,
      pageSize,
      totalUsersCount,
      currentPage,
      setCurrentPage,
      loading,
    } = this.props;

    const hasData = !loading;
    const spinner = loading ? <Preloader /> : null;
    const content = hasData ?
      <>
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
      </>
      : null;

    return (
      <React.Fragment>
        {spinner}
        {content}
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    loading: state.usersPage.loading
  }
};

const actions = {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleLoading
};

export default connect(mapStateToProps, actions)(UsersListContainer);