import { initialState } from '../initialState/initialState';
import { AUTH_LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes';

const sessionReducer = (state = initialState.session, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthed: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthed: false,
      };

    default:
      return state;
  }
};

export default sessionReducer;
