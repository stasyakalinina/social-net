import { createStore, combineReducers } from 'redux';
import { profileReducer, dialogsReducer, usersReducer, authReducer } from './reducers/';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;