import { profileAPI } from '../../services/api';

export const addPost = (text) => {
  return {
    type: 'ADD_POST',
    payload: text,
  }
};

export const setStatus = (status) => {
  return {
    type: 'SET_STATUS',
    payload: status,
  }
};

export const setUserProfile = (profile) => {
  return {
    type: 'SET_USER_PROFILE',
    payload: profile,
  }
};

export const getUserProfile = (userId) => (dispatch) => {
  return profileAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      console.log(response);
      dispatch(setStatus(response.data));
    })
    .catch(error => console.log(error));;
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      console.log(response);
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
    .catch(error => console.log(error));
};
