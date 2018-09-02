import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import AnswerAsProgressBar from './AnswerAsProgressBar';

const Answer = ({ question, loggedInUser }) => {
  const { optionOne, optionTwo } = question;
  const total = optionOne.votes.length + optionTwo.votes.length;

  return (
    <Fragment>
      <Card.Description>Would You Rather...</Card.Description>
      <AnswerAsProgressBar
        option={question.optionOne}
        total={total}
        loggedInUser={loggedInUser}
      />
      <AnswerAsProgressBar
        option={question.optionTwo}
        total={total}
        loggedInUser={loggedInUser}
      />
    </Fragment>
  );
};

Answer.propTypes = {
  loggedInUser: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  question: PropTypes.shape({
    optionOne: PropTypes.shape({ text: PropTypes.string.isRequired })
      .isRequired,
    optionTwo: PropTypes.shape({ text: PropTypes.string.isRequired })
      .isRequired,
  }).isRequired,
};

export default Answer;
