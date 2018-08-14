import { initialState } from '../initialState/initialState';
import { FETCH_QUESTIONS_SUCCESS } from '../constants/actionTypes';

const questionsReducer = (state = initialState.questions, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return Object.values(action.questions);

    default:
      return state;
  }
};

export default questionsReducer;
