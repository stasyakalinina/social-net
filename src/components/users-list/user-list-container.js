import React, {Component} from 'react';
import { connect } from 'react-redux';
import { followUser,
         unfollowUser,
         setUsers,
         setCurrentPage,
         setTotalUsersCount,
         toggleLoading,
         toggleSendingRequest } from '../../actions';
import Pagination from '../pagination/pagination';
import UsersList from './user-list';
import Preloader from '../preloader/preloader';
import { usersAPI } from '../../services/api';


class UsersListContainer extends Component {

  componentDidMount() {
    this.props.toggleLoading(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleLoading(false);
    });
  }

  getPageUsers = (page) => {
    this.props.toggleLoading(true);
    usersAPI.getUsers(page, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items);
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
      sendingRequest,
      toggleSendingRequest
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
          unfollowUser={unfollowUser}
          sendingRequest={sendingRequest}
          toggleSendingRequest={toggleSendingRequest} />
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
    loading: state.usersPage.loading,
    sendingRequest: state.usersPage.sendingRequest
  }
};

const actions = {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleLoading,
  toggleSendingRequest
};

export default connect(mapStateToProps, actions)(UsersListContainer);