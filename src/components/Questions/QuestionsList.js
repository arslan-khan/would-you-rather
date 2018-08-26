import React from 'react';
import { Grid, Header, Segment, Item, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Question from './Question';

const QuestionsList = ({ type, users, questions }) => (
  <Grid.Column width={8}>
    <Header as="h3" attached="top" textAlign="center" color="teal" inverted>
      {type}
    </Header>
    <Segment attached stacked padded>
      <Item.Group divided relaxed>
        {!questions.length ? (
          <Header as="h1" textAlign="center">
            <Icon name="thumbs up" />
            <Header.Content>All Caught Up</Header.Content>
          </Header>
        ) : (
          questions.map(question => (
            <Question key={question.id} users={users} question={question} />
          ))
        )}
      </Item.Group>
    </Segment>
  </Grid.Column>
);

QuestionsList.propTypes = {
  type: PropTypes.string.isRequired,
  users: PropTypes.shape({}).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuestionsList;
