import React from 'react';
import { Grid, Header, Segment, List, Button, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const QuestionsList = ({ type, users, questions }) => (
  <Grid.Column width={8}>
    <Header as="h3" attached="top" textAlign="center" color="teal" inverted>
      {type}
    </Header>
    <Segment attached stacked padded>
      <List divided verticalAlign="middle" size="big" relaxed="very" animated>
        {questions.map(question => (
          <List.Item key={question.id}>
            <List.Content floated="right">
              <Button basic color="teal" fluid size="small">
                View Poll
              </Button>
            </List.Content>
            <Image avatar src={users[question.author].avatarURL} />
            <List.Content>
              <List.Header>{users[question.author].name} Asks:</List.Header>
              <span style={{ color: 'grey', fontSize: '14px' }}>
                Would You Rather: {question.optionOne.text}
              </span>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  </Grid.Column>
);

QuestionsList.propTypes = {
  type: PropTypes.string.isRequired,
  users: PropTypes.shape({}).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuestionsList;
