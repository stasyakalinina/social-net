import { usersAPI, followAPI } from '../../services/api';

export const followUserSuccess = (id) => {
  return {
    type: 'FOLLOW_FRIEND',
    payload: id,
  }
};

export const unfollowUserSuccess = (id) => {
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

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleLoading(true));
  usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleLoading(false));
  });
};

export const follow = (id) => (dispatch) => {
  dispatch(toggleSendingRequest(true, id));
  followAPI.followUser(id).then(data => {
    if (data.resultCode === 0) {
      dispatch(followUserSuccess(id));
    }
    dispatch(toggleSendingRequest(false, id));
  })
};

export const unfollow = (id) => (dispatch) => {
  dispatch(toggleSendingRequest(true, id));
  followAPI.unfollowUser(id).then(data => {
    if (data.resultCode === 0) {
      dispatch(unfollowUserSuccess(id));
    }
    dispatch(toggleSendingRequest(false, id));
  })
};
