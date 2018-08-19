import React, { Fragment } from 'react';
import { Message, Popup, Image, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AutoLoginWidget = ({ users, logUserIn }) => (
  <Fragment>
    <Message
      warning
      size="tiny"
      color="teal"
      header="Can't Login?"
      content="Please hover over an image below to get the user's info!"
    />

    {Object.values(users).map(user => (
      <Popup
        inverted
        size="tiny"
        key={user.id}
        trigger={
          <Image
            src={user.avatarURL}
            avatar
            size="tiny"
            onClick={() => logUserIn(user)}
          />
        }
        header="JUST CLICK ME IF YOU ARE LAZY!"
        content={`User Name: ${user.name}`}
      />
    ))}
    <Divider />
  </Fragment>
);

AutoLoginWidget.propTypes = {
  users: PropTypes.shape({
    avatarURL: PropTypes.string,
    name: PropTypes.string,
  }),
  logUserIn: PropTypes.func.isRequired,
};

AutoLoginWidget.defaultProps = { users: null };

export default AutoLoginWidget;
