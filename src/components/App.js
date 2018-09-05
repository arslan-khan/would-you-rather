import React from 'react';
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

const App = ({ isAuthed }) => (
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

App.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ session }) => ({
  isAuthed: session.isAuthed,
});

export default withRouter(connect(mapStateToProps)(App));
