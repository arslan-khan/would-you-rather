import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import { DASHBOARD_PAGE_URL } from '../../constants/pageUrls';

const Navbar = () => (
  <Menu pointing secondary>
    <Menu.Item name="home" as={NavLink} to={DASHBOARD_PAGE_URL} exact />

    <Menu.Menu position="right">
      <Menu.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
        />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
