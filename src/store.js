import { createStore, combineReducers } from 'redux';
import { profileReducer, dialogsReducer, usersReducer } from './reducers/';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: usersReducer
})

const store = createStore(reducers);

export default store;