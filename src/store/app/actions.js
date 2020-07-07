import { getAuthUserData } from '../auth/actions';

export const initializedSuccess = () => {
  return {
    type: 'SET_INITIALIZED'
  }
}

export const initialize = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSuccess());
  })

};