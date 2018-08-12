import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { DASHBOARD_PAGE_URL } from '../constants/pageUrls';

const PublicRouteHOC = ({ component: Component, isAuthed, ...rest }) => (
  <Route
    exact
    {...rest}
    render={props =>
      !isAuthed ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `${DASHBOARD_PAGE_URL}`,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PublicRouteHOC.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  location: PropTypes.shape({}),
};

PublicRouteHOC.defaultProps = {
  location: null,
};

export default PublicRouteHOC;
