import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import QuestionsList from '../components/Questions/QuestionsList';
import { fetchQuestionsRequest } from '../actions/questionsActions';
import {
  getAnsweredQuestions,
  getUnansweredQuestions,
} from '../selectors/questionsSelectors';

class DashboardPage extends Component {
  static propTypes = {
    fetchQuestionsRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({}).isRequired,
    answeredQuestions: PropTypes.arrayOf(PropTypes.object),
    unAnsweredQuestions: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    answeredQuestions: null,
    unAnsweredQuestions: null,
  };

  componentDidMount() {
    const { fetchQuestionsRequest } = this.props;
    fetchQuestionsRequest();
  }

  render() {
    const { users, answeredQuestions, unAnsweredQuestions } = this.props;

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
  }
}

const mapStateToProps = ({ questions, users }) => ({
  users: users.users,
  answeredQuestions: getAnsweredQuestions(questions, users.loggedInUser.id),
  unAnsweredQuestions: getUnansweredQuestions(questions, users.loggedInUser.id),
});

export default connect(
  mapStateToProps,
  { fetchQuestionsRequest },
)(DashboardPage);
