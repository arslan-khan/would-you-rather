import { getUsers } from '../utils/dataUtils';
import { FETCH_USERS_SUCCESS } from '../constants/actionTypes';

const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, users });

const fetchUsersRequest = () => async dispatch => {
  const users = await getUsers();
  dispatch(fetchUsersSuccess(users));
};

export { fetchUsersRequest };
