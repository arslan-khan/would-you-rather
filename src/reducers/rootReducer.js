import { combineReducers } from 'redux';

import { LOGOUT_SUCCESS } from '../constants/actionTypes';
import questions from './questionsReducer';
import session from './sessionReducer';
import users from './usersReducer';

const appReducer = combineReducers({
  questions,
  session,
  users,
});

const rootReducer = (state, action) => {
  let appState = state;
  if (action.type === LOGOUT_SUCCESS) {
    appState = undefined;
  }

  return appReducer(appState, action);
};

export default rootReducer;
