import React from 'react';
import { Grid, Header, Segment, List, Button, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { NEW_QUESTION_PAGE_URL } from '../../constants/pageUrls';

const QuestionsList = ({ type, questions }) => (
  <Grid.Column width={8}>
    <Header as="h3" attached="top" textAlign="center" color="teal" inverted>
      {type}
    </Header>
    <Segment attached stacked padded>
      {!questions.length ? (
        <Link to={NEW_QUESTION_PAGE_URL}>
          <Button basic color="teal" fluid size="small">
            Create A New Poll
          </Button>
        </Link>
      ) : (
        <List divided verticalAlign="middle" size="big" relaxed="very" animated>
          <List.Item>
            <List.Content floated="right">
              <Button basic color="teal" fluid size="small">
                View Poll
              </Button>
            </List.Content>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
            />
            <List.Content>
              <List.Header>Would You Rather</List.Header>
              <span style={{ color: 'grey', fontSize: '14px' }}>
                ...itchy for the rest...
              </span>
            </List.Content>
          </List.Item>
        </List>
      )}
    </Segment>
  </Grid.Column>
);

QuestionsList.propTypes = {
  type: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuestionsList;
