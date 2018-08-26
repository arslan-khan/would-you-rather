import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DashboardPage from '../pages/DashboardPage';
import LeaderBoardPage from '../pages/LeaderBoardPage';
import LoginPage from '../pages/LoginPage';
import PollPage from '../pages/PollPage';
import NewQuestionPage from '../pages/NewQuestionPage';
import PrivateRouteHOC from '../hoc/PrivateRouteHOC';
import PublicRouteHOC from '../hoc/PublicRouteHOC';
import {
  ADD_QUESTION_PAGE_URL,
  QUESTIONS_PAGE_URL,
  LEADER_BOARD_PAGE_URL,
  LOGIN_PAGE_URL,
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
      path={QUESTIONS_PAGE_URL}
      component={DashboardPage}
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
      path={`${QUESTIONS_PAGE_URL}/:question_id`}
      component={PollPage}
      isAuthed={isAuthed}
    />
  </Switch>
);

const mapStateToProps = ({ session }) => ({ isAuthed: session.isAuthed });

App.propTypes = { isAuthed: PropTypes.bool.isRequired };

export default withRouter(connect(mapStateToProps)(App));
