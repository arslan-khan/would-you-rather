import { AUTH_LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes';
import { fetchQuestionsRequest } from './questionsActions';

const authLoginSuccess = user => ({ type: AUTH_LOGIN_SUCCESS, user });

const authLoginRequest = user => dispatch => {
  dispatch(authLoginSuccess(user));
  dispatch(fetchQuestionsRequest());
};

const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

const logoutRequest = () => dispatch => dispatch(logoutSuccess());

export { authLoginRequest, logoutRequest };
