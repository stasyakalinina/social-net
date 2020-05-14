import { createStore, combineReducers } from 'redux';
import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialogs-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
})

const store = createStore(reducers);

export default store;