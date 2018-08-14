const getUnansweredQuestions = questions =>
  questions.filter(
    question =>
      !question.optionOne.votes.length && !question.optionTwo.votes.length,
  );

const getAnsweredQuestions = questions =>
  questions.filter(
    question =>
      question.optionOne.votes.length || question.optionTwo.votes.length,
  );

export { getAnsweredQuestions, getUnansweredQuestions };
