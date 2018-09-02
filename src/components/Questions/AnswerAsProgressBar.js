import React from 'react';
import { Progress, Message, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const getStyles = vote => {
  if (!vote) return { paddingBottom: '12px' };
};

const AnswerAsProgressBar = ({ option, total, loggedInUser }) => {
  const yourVote = option.votes.includes(loggedInUser.id);

  return (
    <Message color={yourVote ? 'teal' : 'grey'}>
      <Message.Header
        color={yourVote ? 'teal' : 'grey'}
        style={getStyles(yourVote)}
      >
        {option.text}
      </Message.Header>
      <Progress
        color="teal"
        size="medium"
        value={option.votes.length}
        total={total}
        progress="percent"
        precision={total}
      >
        {option.votes.length} out of {total} votes
      </Progress>
      {yourVote && (
        <Label color="yellow" floating circular>
          Your Vote
        </Label>
      )}
    </Message>
  );
};

AnswerAsProgressBar.propTypes = {
  loggedInUser: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  option: PropTypes.shape({
    votes: PropTypes.arrayOf(PropTypes.string).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};

export default AnswerAsProgressBar;
