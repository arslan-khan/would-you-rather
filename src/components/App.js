import React, { PureComponent } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import QuestionsPage from '../pages/QuestionsPage';
import LeaderBoardPage from '../pages/LeaderBoardPage';
import LoginPage from '../pages/LoginPage';
import PollPage from '../pages/PollPage';
import NewQuestionPage from '../pages/NewQuestionPage';
import PageNotFound from '../pages/PageNotFound';
import PrivateRouteHOC from '../hoc/PrivateRouteHOC';
import PublicRouteHOC from '../hoc/PublicRouteHOC';
import {
  ADD_QUESTION_PAGE_URL,
  DASHBOARD_PAGE_URL,
  LEADER_BOARD_PAGE_URL,
  LOGIN_PAGE_URL,
  QUESTIONS,
} from '../constants/pageUrls';
import { fetchQuestionsRequest } from '../actions/questionsActions';

class App extends PureComponent {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
    questions: PropTypes.shape({}),
    fetchQuestionsRequest: PropTypes.func.isRequired,
  };

  static defaultProps = { questions: null };

  componentDidMount() {
    const { questions, fetchQuestionsRequest } = this.props;
    if (!questions) {
      fetchQuestionsRequest();
    }
  }

  componentDidUpdate(prevProps) {
    const { questions, fetchQuestionsRequest } = this.props;
    if (prevProps.questions !== questions && !questions) {
      fetchQuestionsRequest();
    }
  }

  render() {
    const { isAuthed } = this.props;

    return (
      <Switch>
        <PublicRouteHOC
          exact
          path={LOGIN_PAGE_URL}
          component={LoginPage}
          isAuthed={isAuthed}
        />

        <PrivateRouteHOC
          exact
          path={DASHBOARD_PAGE_URL}
          component={QuestionsPage}
          isAuthed={isAuthed}
        />

        <PrivateRouteHOC
          exact
          path={LEADER_BOARD_PAGE_URL}
          component={LeaderBoardPage}
          isAuthed={isAuthed}
        />

        <PrivateRouteHOC
          exact
          path={ADD_QUESTION_PAGE_URL}
          component={NewQuestionPage}
          isAuthed={isAuthed}
        />

        <PrivateRouteHOC
          exact
          path={`${QUESTIONS}/:question_id`}
          component={PollPage}
          isAuthed={isAuthed}
        />

        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ session, questions }) => ({
  isAuthed: session.isAuthed,
  questions: questions.questions,
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchQuestionsRequest },
  )(App),
);
