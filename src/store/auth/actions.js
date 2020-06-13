import { authAPI } from '../../services/api';

export const setAuthUserData = (userId, email, login) => {
  return {
    type: 'SET_USER_DATA',
    payload: {userId, email, login},
  }
};

export const toggleLoading = (isLoading) => {
  return {
    type: 'TOGGLE_LOADING',
    payload: isLoading
  }
};

export const logIn = () => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    authAPI.getAuth()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          dispatch(setAuthUserData(id, email, login));
          dispatch(toggleLoading(false));
        }
    });
  }
};