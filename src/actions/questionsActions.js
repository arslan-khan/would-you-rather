import { getQuestions } from '../utils/dataUtils';
import { FETCH_QUESTIONS_SUCCESS } from '../constants/actionTypes';

const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions,
});

const fetchQuestionsRequest = () => async dispatch => {
  const questions = await getQuestions();
  dispatch(fetchQuestionsSuccess(questions));
};

export { fetchQuestionsRequest };
