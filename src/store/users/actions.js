import { usersAPI } from '../../services/api';

export const followUser = (id) => {
  return {
    type: 'FOLLOW_FRIEND',
    payload: id,
  }
};

export const unfollowUser = (id) => {
  return {
    type: 'UNFOLLOW_FRIEND',
    payload: id,
  }
};

export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    payload: users
  }
};

export const setCurrentPage = (page) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: page
  }
};

export const setTotalUsersCount = (totalCount) => {
  return {
    type: 'SET_TOTAL_USERS_COUNT',
    payload: totalCount
  }
};

export const toggleLoading = (isLoading) => {
  return {
    type: 'TOGGLE_LOADING',
    payload: isLoading
  }
};

export const toggleSendingRequest = (isSending, userId) => {
  return {
    type: 'TOGGLE_SENDING_REQUEST',
    isSending,
    userId
  }
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleLoading(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleLoading(false));
    });
  }
};