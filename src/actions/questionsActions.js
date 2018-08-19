import { getQuestions, saveQuestion } from '../utils/dataUtils';
import {
  ACTIVATE_LOADER,
  ADD_NEW_QUESTION_SUCCESS,
  CLEAR_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_SUCCESS,
  SET_QUESTIONS_TO_DEFAULT_STATE,
} from '../constants/actionTypes';
import { fetchUsersRequest } from './usersActions';

const clearQuestionsSuccess = () => ({ type: CLEAR_QUESTIONS_SUCCESS });

const clearQuestionsRequest = () => dispatch =>
  dispatch(clearQuestionsSuccess());

const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions,
});

const fetchQuestionsRequest = () => async dispatch => {
  const questions = await getQuestions();
  dispatch(fetchQuestionsSuccess(questions));
};

const activateLoader = () => ({ type: ACTIVATE_LOADER });

const addNewQuestionSuccess = () => ({
  type: ADD_NEW_QUESTION_SUCCESS,
});

const addNewQuestionRequest = question => async dispatch => {
  dispatch(activateLoader());
  await saveQuestion(question);
  dispatch(fetchUsersRequest());
  dispatch(addNewQuestionSuccess());
};

const setQuestionsToDefaultStateSuccess = () => ({
  type: SET_QUESTIONS_TO_DEFAULT_STATE,
});

const setQuestionsToDefaultStateRequest = () => dispatch =>
  dispatch(setQuestionsToDefaultStateSuccess());

export {
  addNewQuestionRequest,
  clearQuestionsRequest,
  fetchQuestionsRequest,
  setQuestionsToDefaultStateRequest,
};
