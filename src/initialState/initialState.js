const initialState = {
  session: {
    isAuthed: false,
  },
  users: {
    users: null,
    loggedInUser: null,
  },
  questions: {
    questions: null,
    isSubmitting: false,
    hasNewQuestionBeenSubmitted: false,
  },
};

export { initialState };
