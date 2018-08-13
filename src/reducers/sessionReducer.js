import { initialState } from '../initialState/initialState';
import { AUTH_LOGIN_SUCCESS } from '../constants/actionTypes';

const sessionReducer = (state = initialState.session, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthed: true,
      };

    default:
      return state;
  }
};

export default sessionReducer;
