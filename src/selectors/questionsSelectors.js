const getAnsweredQuestions = (questions, userId) =>
  questions &&
  Object.values(questions).filter(
    question =>
      question.optionOne.votes.includes(userId) ||
      question.optionTwo.votes.includes(userId),
  );

const getUnansweredQuestions = (questions, userId) =>
  questions &&
  Object.values(questions).filter(
    question =>
      !question.optionOne.votes.includes(userId) &&
      !question.optionTwo.votes.includes(userId),
  );

export { getAnsweredQuestions, getUnansweredQuestions };
