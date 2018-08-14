import { initialState } from '../initialState/initialState';
import {
  FETCH_USERS_SUCCESS,
  AUTH_LOGIN_SUCCESS,
} from '../constants/actionTypes';

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.users };

    case AUTH_LOGIN_SUCCESS:
      return { ...state, loggedInUser: action.user };

    default:
      return state;
  }
};

export default usersReducer;
