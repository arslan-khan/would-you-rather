import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PrivateRouteHOC from '../hoc/PrivateRouteHOC';
import PublicRouteHOC from '../hoc/PublicRouteHOC';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import { LOGIN_PAGE_URL, DASHBOARD_PAGE_URL } from '../constants/pageUrls';

const App = ({ isAuthed }) => (
  <Switch>
    <PublicRouteHOC
      path={LOGIN_PAGE_URL}
      component={LoginPage}
      isAuthed={isAuthed}
    />

    <PrivateRouteHOC
      path={DASHBOARD_PAGE_URL}
      component={DashboardPage}
      isAuthed={isAuthed}
    />
  </Switch>
);

const mapStateToProps = ({ session }) => ({ isAuthed: session.isAuthed });

App.propTypes = { isAuthed: PropTypes.bool.isRequired };

export default withRouter(connect(mapStateToProps)(App));
