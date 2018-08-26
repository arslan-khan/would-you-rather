import { initialState } from '../initialState/initialState';
import {
  ACTIVATE_LOADER,
  ADD_NEW_QUESTION_SUCCESS,
  FETCH_QUESTIONS_SUCCESS,
  SAVE_QUESTION_ANSWER_SUCCESS,
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
        questions: {
          ...state.questions,
          [action.question.id]: { ...action.question },
        },
      };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions,
      };

    case SAVE_QUESTION_ANSWER_SUCCESS:
      return {
        ...state,
        hasNewQuestionBeenSubmitted: true,
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
