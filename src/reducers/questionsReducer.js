import { initialState } from '../initialState/initialState';
import {
  ACTIVATE_LOADER,
  ADD_NEW_QUESTION_SUCCESS,
  CLEAR_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_SUCCESS,
  SET_QUESTIONS_TO_DEFAULT_STATE,
} from '../constants/actionTypes';

const questionsReducer = (state = initialState.questions, action) => {
  switch (action.type) {
    case ACTIVATE_LOADER:
      return {
        ...state,
        isSubmitting: true,
      };

    case ADD_NEW_QUESTION_SUCCESS:
      return {
        ...state,
        hasNewQuestionBeenSubmitted: true,
      };

    case CLEAR_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: null,
      };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions,
      };

    case SET_QUESTIONS_TO_DEFAULT_STATE:
      return {
        ...state,
        isSubmitting: false,
        hasNewQuestionBeenSubmitted: false,
      };

    default:
      return state;
  }
};

export default questionsReducer;
