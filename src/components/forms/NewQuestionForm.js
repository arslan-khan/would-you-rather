import React from 'react';
import { Form, Input, Divider, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const NewQuestionForm = ({
  isSubmitting,
  optionOneText,
  optionTwoText,
  onChangeHandler,
  onSubmitHandler,
}) => (
  <Form onSubmit={onSubmitHandler} loading={isSubmitting}>
    <Form.Field
      id="optionOneText"
      name="optionOneText"
      control={Input}
      label="Would You Rather"
      placeholder="First option here..."
      value={optionOneText}
      onChange={onChangeHandler}
    />

    <Divider horizontal>Or</Divider>

    <Form.Field
      id="optionTwoText"
      name="optionTwoText"
      control={Input}
      placeholder="Second option here..."
      value={optionTwoText}
      onChange={onChangeHandler}
    />

    <Button type="submit" color="teal" fluid animated="fade">
      <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>
        <Icon name="sign in" />
      </Button.Content>
    </Button>
  </Form>
);

NewQuestionForm.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  optionOneText: PropTypes.string.isRequired,
  optionTwoText: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};

export default NewQuestionForm;
