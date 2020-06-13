export const setAuthUserData = (userId, email, login) => {
  return {
    type: 'SET_USER_DATA',
    payload: {userId, email, login},
  }
};
