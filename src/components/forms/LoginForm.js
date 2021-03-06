import React from 'react';
import { Form, Button, Input, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LoginForm = ({ name, onChangeHandler, onSubmitHandler }) => (
  <Form onSubmit={onSubmitHandler}>
    <Form.Field
      id="name"
      name="name"
      control={Input}
      label="Name"
      placeholder="Please type your name here..."
      value={name}
      onChange={onChangeHandler}
    />

    <Button type="submit" color="teal" fluid animated="fade" disabled={!name}>
      <Button.Content visible>Login</Button.Content>
      <Button.Content hidden>
        <Icon name="sign in" />
      </Button.Content>
    </Button>
  </Form>
);

LoginForm.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default LoginForm;
