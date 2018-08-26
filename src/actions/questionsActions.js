import {
  getQuestions,
  saveQuestion,
  saveQuestionAnswer,
} from '../utils/dataUtils';
import {
  ACTIVATE_LOADER,
  ADD_NEW_QUESTION_SUCCESS,
  FETCH_QUESTIONS_SUCCESS,
  SET_QUESTIONS_TO_DEFAULT_STATE,
} from '../constants/actionTypes';
import { fetchUsersRequest } from './usersActions';

const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions,
});

const fetchQuestionsRequest = () => async dispatch => {
  const questions = await getQuestions();
  dispatch(fetchQuestionsSuccess(questions));
};

const activateLoader = () => ({ type: ACTIVATE_LOADER });

const addNewQuestionSuccess = question => ({
  type: ADD_NEW_QUESTION_SUCCESS,
  question,
});

const addNewQuestionRequest = question => async dispatch => {
  dispatch(activateLoader());
  const savedQuestion = await saveQuestion(question);
  dispatch(fetchUsersRequest());
  dispatch(addNewQuestionSuccess(savedQuestion));
};

const setQuestionsToDefaultStateSuccess = () => ({
  type: SET_QUESTIONS_TO_DEFAULT_STATE,
});

const setQuestionsToDefaultStateRequest = () => dispatch =>
  dispatch(setQuestionsToDefaultStateSuccess());

const saveQuestionAnswerRequest = (
  authedUser,
  qid,
  answer,
) => async dispatch => {
  await saveQuestionAnswer({ authedUser, qid, answer });
  await dispatch(fetchQuestionsRequest());
};

export {
  addNewQuestionRequest,
  fetchQuestionsRequest,
  setQuestionsToDefaultStateRequest,
  saveQuestionAnswerRequest,
};
