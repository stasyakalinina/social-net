const addPost = () => {
  return {
    type: 'ADD_POST',
  }
};

const updatePostMessage = (text) => {
  return {
    type: 'UPDATE_POST_MESSAGE',
    payload: text,
  }
};

const updateNewMessage = (text) => {
  return {
    type: 'UPDATE_MESSAGE_TEXT',
    payload: text,
  }
};

const sendMessage = () => {
  return {
    type: 'SEND_MESSAGE',
  }
};

const followUser = (id) => {
  return {
    type: 'FOLLOW_FRIEND',
    payload: id,
  }
};

const unfollowUser = (id) => {
  return {
    type: 'UNFOLLOW_FRIEND',
    payload: id,
  }
};

const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    payload: users
  }
};

const setCurrentPage = (page) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: page
  }
};

const setTotalUsersCount = (totalCount) => {
  return {
    type: 'SET_TOTAL_USERS_COUNT',
    payload: totalCount
  }
};

const toggleLoading = (isLoading) => {
  return {
    type: 'TOGGLE_LOADING',
    payload: isLoading
  }
};

export {
  addPost,
  updatePostMessage,
  updateNewMessage,
  sendMessage,
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleLoading
}