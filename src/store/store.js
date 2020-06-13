import { createStore, combineReducers, applyMiddleware } from 'redux';
import { profileReducer, dialogsReducer, usersReducer, authReducer } from './root-reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;