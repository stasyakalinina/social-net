export const addPost = () => {
  return {
    type: 'ADD_POST',
  }
};

export const updatePostMessage = (text) => {
  return {
    type: 'UPDATE_POST_MESSAGE',
    payload: text,
  }
};

export const setUserProfile = (profile) => {
  return {
    type: 'SET_USER_PROFILE',
    payload: profile,
  }
};