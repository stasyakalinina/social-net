import { createStore, combineReducers } from 'redux';
import { profileReducer, dialogsReducer, usersReducer, authReducer } from './reducers/';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
})

const store = createStore(reducers);

export default store;