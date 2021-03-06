import React from 'react';
import { Item, List, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import capitalize from 'lodash/capitalize';

import { QUESTIONS } from '../../constants/pageUrls';

const Question = ({ users, question }) => (
  <Item>
    <Item.Image size="tiny" src={users[question.author].avatarURL} />

    <Item.Content>
      <Item.Header>{users[question.author].name} Aks:</Item.Header>
      <Item.Meta>Would You Rather...</Item.Meta>
      <Item.Description>
        <List bulleted>
          <List.Item>{capitalize(question.optionOne.text)}</List.Item>
          <List.Item>{capitalize(question.optionTwo.text)}</List.Item>
        </List>
      </Item.Description>
      <Item.Extra>
        <Button
          basic
          floated="right"
          color="teal"
          as={Link}
          to={`${QUESTIONS}/${question.id}`}
        >
          View Poll
        </Button>
      </Item.Extra>
    </Item.Content>
  </Item>
);

Question.propTypes = {
  users: PropTypes.shape({}).isRequired,
  question: PropTypes.shape({}).isRequired,
};

export default Question;
