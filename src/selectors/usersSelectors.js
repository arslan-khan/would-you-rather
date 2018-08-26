const getUserInfo = (questions, users, id) => {
  let userInfo;
  let question;

  if (questions) {
    question = Object.values(questions).find(question => question.id === id);
  }

  if (users) {
    userInfo = Object.values(users).find(user => user.id === question.author);
  }

  return userInfo;
};

export { getUserInfo };
