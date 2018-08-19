import { initialState } from '../initialState/initialState';
import {
  AUTH_LOGIN_SUCCESS,
  FETCH_USERS_SUCCESS,
} from '../constants/actionTypes';

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return { ...state, loggedInUser: action.user };

    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.users };

    default:
      return state;
  }
};

export default usersReducer;
