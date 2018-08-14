import React from 'react';
import { connect } from 'react-redux';
import { Menu, Image, Button } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  DASHBOARD_PAGE_URL,
  LEADER_BOARD_PAGE_URL,
  NEW_QUESTION_PAGE_URL,
} from '../../constants/pageUrls';
import { logoutRequest } from '../../actions/sessionActions';

const Navbar = ({ loggedInUser, logoutRequest }) => (
  <Menu pointing secondary>
    <Menu.Item name="home" as={NavLink} to={DASHBOARD_PAGE_URL} exact />
    <Menu.Item
      name="new question"
      as={NavLink}
      to={NEW_QUESTION_PAGE_URL}
      exact
    />
    <Menu.Item
      name="leader board"
      as={NavLink}
      to={LEADER_BOARD_PAGE_URL}
      exact
    />

    <Menu.Menu position="right">
      <Menu.Item>
        <Image avatar src={loggedInUser.avatarURL} />
        <span>
          {loggedInUser.name} |{' '}
          <Button
            circular
            icon="log out"
            size="mini"
            color="teal"
            onClick={() => logoutRequest()}
          />
        </span>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

Navbar.propTypes = {
  loggedInUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
  }).isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ users }) => ({ loggedInUser: users.loggedInUser });

export default withRouter(
  connect(
    mapStateToProps,
    { logoutRequest },
  )(Navbar),
);
