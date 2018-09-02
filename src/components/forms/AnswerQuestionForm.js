import React from 'react';
import { Form, Radio, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';

const AnswerQuestionForm = ({
  value,
  question,
  handleChange,
  onSubmitHandler,
  isSubmitting,
}) => (
  <Form onSubmit={() => onSubmitHandler()} loading={isSubmitting}>
    <Form.Field>Would You Rather...</Form.Field>
    <Form.Field>
      <Radio
        label={capitalize(question.optionOne.text)}
        name="radioGroup"
        value={question.optionOne.text}
        checked={value === question.optionOne.text}
        onChange={handleChange}
        toggle
      />
    </Form.Field>

    <Form.Field>
      <Radio
        label={capitalize(question.optionTwo.text)}
        name="radioGroup"
        value={question.optionTwo.text}
        checked={value === question.optionTwo.text}
        onChange={handleChange}
        toggle
      />
    </Form.Field>

    <Button type="submit" fluid color="teal" disabled={!value}>
      Submit
    </Button>
  </Form>
);

AnswerQuestionForm.propTypes = {
  value: PropTypes.string,
  question: PropTypes.shape({
    optionOne: PropTypes.shape({ text: PropTypes.string.isRequired })
      .isRequired,
    optionTwo: PropTypes.shape({ text: PropTypes.string.isRequired })
      .isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

AnswerQuestionForm.defaultProps = { value: null };

export default AnswerQuestionForm;
