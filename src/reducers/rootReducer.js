import { combineReducers } from 'redux';

import session from './sessionReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  session,
  users,
});

export default rootReducer;
