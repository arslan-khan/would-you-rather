import React from 'react';
import { Item, List, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { POLL_PAGE_URL } from '../../constants/pageUrls';

const Question = ({ users, question }) => (
  <Item>
    <Item.Image size="tiny" src={users[question.author].avatarURL} />

    <Item.Content>
      <Item.Header>{users[question.author].name} Aks:</Item.Header>
      <Item.Meta>Would You Rather...</Item.Meta>
      <Item.Description>
        <List bulleted>
          <List.Item>{question.optionOne.text}</List.Item>
          <List.Item>{question.optionTwo.text}</List.Item>
        </List>
      </Item.Description>
      <Item.Extra>
        <Button
          basic
          floated="right"
          color="teal"
          as={Link}
          to={`${POLL_PAGE_URL}/${question.id}`}
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
