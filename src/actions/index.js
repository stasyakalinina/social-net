const addPostCreator = () => {
  return {
    type: 'ADD_POST',
  }
};

const updatePostMessageCreator = (text) => {
  return {
    type: 'UPDATE_POST_MESSAGE',
    payload: text,
  }
};

const updateNewMessageCreator = (text) => {
  return {
    type: 'UPDATE_MESSAGE_TEXT',
    payload: text,
  }
};

const sendMessageCreator = () => {
  return {
    type: 'SEND_MESSAGE',
  }
};

const followCreator = (id) => {
  return {
    type: 'FOLLOW_FRIEND',
    payload: id,
  }
};

const unFollowCreator = (id) => {
  return {
    type: 'UNFOLLOW_FRIEND',
    payload: id,
  }
};

const setUsersCreator = (users) => {
  return {
    type: 'SET_USERS',
    payload: users
  }
};

const setCurrentPageCreator = (page) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: page
  }
};

const setTotalUsersCreator = (totalCount) => {
  return {
    type: 'SET_TOTAL_USERS_COUNT',
    payload: totalCount
  }
};

const toggleLoadingCreator = (isLoading) => {
  return {
    type: 'TOGGLE_LOADING',
    payload: isLoading
  }
};

export {
  addPostCreator,
  updatePostMessageCreator,
  updateNewMessageCreator,
  sendMessageCreator,
  followCreator,
  unFollowCreator,
  setUsersCreator,
  setCurrentPageCreator,
  setTotalUsersCreator,
  toggleLoadingCreator
}