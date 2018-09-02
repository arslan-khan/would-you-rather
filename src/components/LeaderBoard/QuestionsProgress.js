import React from 'react';
import { Progress } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const QuestionsProgress = ({ questions, totalQuestions, color }) => (
  <Progress
    style={{ marginBottom: '15px' }}
    color={color}
    size="medium"
    value={questions}
    total={totalQuestions}
    progress="ratio"
  />
);

QuestionsProgress.propTypes = {
  questions: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default QuestionsProgress;
