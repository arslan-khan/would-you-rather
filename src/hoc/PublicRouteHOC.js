import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { DASHBOARD_PAGE_URL } from '../constants/pageUrls';

const PublicRouteHOC = ({ component: Component, isAuthed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthed ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname:
              props.location.search.split('=')[1] || `${DASHBOARD_PAGE_URL}`,
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
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
};

PublicRouteHOC.defaultProps = {
  location: null,
};

export default PublicRouteHOC;
