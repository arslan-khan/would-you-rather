const getAnsweredQuestions = (questions, userId) =>
  questions &&
  Object.values(questions)
    .filter(
      question =>
        question.optionOne.votes.includes(userId) ||
        question.optionTwo.votes.includes(userId),
    )
    .sort(question => question.timestamp);

const getUnansweredQuestions = (questions, userId) =>
  questions &&
  Object.values(questions)
    .filter(
      question =>
        !question.optionOne.votes.includes(userId) &&
        !question.optionTwo.votes.includes(userId),
    )
    .sort(question => question.timestamp);

export { getAnsweredQuestions, getUnansweredQuestions };
