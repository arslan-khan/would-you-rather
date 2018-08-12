import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { LOGIN_PAGE_URL } from '../constants/pageUrls';

const PrivateRouteHOC = ({ component: Component, isAuthed, ...rest }) => (
  <Route
    exact
    {...rest}
    render={props =>
      isAuthed ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `${LOGIN_PAGE_URL}`,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRouteHOC.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  location: PropTypes.shape({}),
};

PrivateRouteHOC.defaultProps = {
  location: null,
};

export default PrivateRouteHOC;
