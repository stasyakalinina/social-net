import React, {Component} from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,
         setCurrentPage,
         getUsersThunkCreator } from '../../store/users/actions';
import Pagination from '../pagination/pagination';
import UsersList from './user-list';
import Preloader from '../preloader/preloader';

class UsersListContainer extends Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  getPageUsers = (page) => {
    this.props.getUsers(page, this.props.pageSize);
  }

  render() {
    const { users,
      follow,
      unfollow,
      pageSize,
      totalUsersCount,
      currentPage,
      setCurrentPage,
      loading,
      sendingRequest,
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
          follow={follow}
          unfollow={unfollow}
          sendingRequest={sendingRequest}
        />
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
  follow,
  unfollow,
  setCurrentPage,
  getUsers: getUsersThunkCreator
};

export default connect(mapStateToProps, actions)(UsersListContainer);