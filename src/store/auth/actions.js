import { authAPI } from '../../services/api';
import { stopSubmit } from 'redux-form';

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: 'SET_USER_DATA',
    payload: {userId, email, login, isAuth},
  }
};

export const toggleLoading = (isLoading) => {
  return {
    type: 'TOGGLE_LOADING',
    payload: isLoading
  }
};

export const getAuthUserData = () => (dispatch) => {
  dispatch(toggleLoading(true));
  authAPI.getAuth()
    .then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
        dispatch(toggleLoading(false));
      }
  });
};

export const logIn = (email, password, rememberMe) => (dispatch) => {
  authAPI.logIn(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
      }
  });
};

export const logOut = () => (dispatch) => {
  authAPI.logOut()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
  });
};