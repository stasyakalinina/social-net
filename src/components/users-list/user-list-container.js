import React, {Component} from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,
         setCurrentPage,
         fetchUsers } from '../../store/users/actions';
import Pagination from '../pagination/pagination';
import UsersList from './user-list';
import Preloader from '../preloader/preloader';
import { getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getLoading,
  getSendingRequest
 } from '../../store/selectors/users-selector';

class UsersListContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers(this.props.currentPage, this.props.pageSize);
  }

  getPageUsers = (page) => {
    this.props.fetchUsers(page, this.props.pageSize);
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    loading: getLoading(state),
    sendingRequest: getSendingRequest(state)
  }
}


const actions = {
  follow,
  unfollow,
  setCurrentPage,
  fetchUsers
};

export default connect(mapStateToProps, actions)(UsersListContainer);