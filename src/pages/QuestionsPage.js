import React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import QuestionsList from '../components/Questions/QuestionsList';
import {
  getAnsweredQuestions,
  getUnansweredQuestions,
} from '../selectors/questionsSelectors';

const QuestionsPage = ({ users, answeredQuestions, unAnsweredQuestions }) => {
  if (!answeredQuestions || !unAnsweredQuestions) {
    return (
      <Dimmer active inverted>
        <Loader size="large">Loading</Loader>
      </Dimmer>
    );
  }

  const panes = [
    {
      menuItem: 'Unanswered Questions',
      render: () => (
        <QuestionsList
          type="Unanswered Questions"
          users={users}
          questions={unAnsweredQuestions}
        />
      ),
    },
    {
      menuItem: 'Answered Questions',
      render: () => (
        <QuestionsList
          type="Answered Questions"
          users={users}
          questions={answeredQuestions}
        />
      ),
    },
  ];

  return (
    <Tab
      style={{ paddingTop: '30px' }}
      menu={{
        fluid: true,
        vertical: true,
        color: 'teal',
        secondary: true,
        pointing: true,
      }}
      panes={panes}
    />
  );
};

QuestionsPage.propTypes = {
  users: PropTypes.shape({}).isRequired,
  answeredQuestions: PropTypes.arrayOf(PropTypes.object),
  unAnsweredQuestions: PropTypes.arrayOf(PropTypes.object),
};

QuestionsPage.defaultProps = {
  answeredQuestions: null,
  unAnsweredQuestions: null,
};

const mapStateToProps = ({ questions, users }) => ({
  users: users.users,
  answeredQuestions: getAnsweredQuestions(
    questions.questions,
    users.loggedInUser.id,
  ),
  unAnsweredQuestions: getUnansweredQuestions(
    questions.questions,
    users.loggedInUser.id,
  ),
});

export default connect(mapStateToProps)(QuestionsPage);
