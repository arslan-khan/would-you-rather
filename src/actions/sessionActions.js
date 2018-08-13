import { AUTH_LOGIN_SUCCESS } from '../constants/actionTypes';

const authLoginSuccess = user => ({ type: AUTH_LOGIN_SUCCESS, user });

const authLoginRequest = user => dispatch => {
  dispatch(authLoginSuccess(user));
};

export { authLoginRequest };
