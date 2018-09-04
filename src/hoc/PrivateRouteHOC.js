import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from '../components/common/Navbar';
import { LOGIN_PAGE_URL } from '../constants/pageUrls';

const PrivateRouteHOC = ({ component: Component, isAuthed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthed ? (
        <Container>
          <Navbar />
          <Component {...props} />
        </Container>
      ) : (
        <Redirect
          to={{
            pathname: `${LOGIN_PAGE_URL}`,
            search: `?next=${props.location.pathname}`,
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

PrivateRouteHOC.defaultProps = {
  location: null,
};

export default PrivateRouteHOC;
