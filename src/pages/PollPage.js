import React, { Component } from 'react';
import {
  Grid,
  Card,
  Image,
  Radio,
  Header,
  Segment,
  Form,
  Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { getQuestionById } from '../selectors/questionsSelectors';
import { getUserInfo } from '../selectors/usersSelectors';
import {
  saveQuestionAnswerRequest,
  setQuestionsToDefaultStateRequest,
} from '../actions/questionsActions';
import { DASHBOARD_PAGE_URL } from '../constants/pageUrls';

class PollPage extends Component {
  static propTypes = {
    question: PropTypes.shape({
      optionOne: PropTypes.shape({ text: PropTypes.string.isRequired })
        .isRequired,
      optionTwo: PropTypes.shape({ text: PropTypes.string.isRequired })
        .isRequired,
    }).isRequired,
    userInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
    }).isRequired,
    loggedInUser: PropTypes.shape({}).isRequired,
    saveQuestionAnswerRequest: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    hasNewQuestionBeenSubmitted: PropTypes.bool.isRequired,
    setQuestionsToDefaultStateRequest: PropTypes.func.isRequired,
  };

  state = {};

  componentWillUnmount() {
    const { setQuestionsToDefaultStateRequest } = this.props;
    setQuestionsToDefaultStateRequest();
  }

  onSubmitHandler = () => {
    const { question, loggedInUser, saveQuestionAnswerRequest } = this.props;
    const { value } = this.state;
    let answer = '';

    if (question.optionOne.text === value) {
      answer = 'optionOne';
    }

    if (question.optionTwo.text === value) {
      answer = 'optionTwo';
    }

    saveQuestionAnswerRequest(loggedInUser.id, question.id, answer);
  };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    const {
      question,
      userInfo,
      isSubmitting,
      hasNewQuestionBeenSubmitted,
    } = this.props;

    if (hasNewQuestionBeenSubmitted)
      return <Redirect to={DASHBOARD_PAGE_URL} />;

    return (
      <Grid columns={3} centered style={{ paddingTop: '30px' }}>
        <Grid.Column>
          <Header
            as="h3"
            attached="top"
            color="teal"
            textAlign="center"
            inverted
          >
            Poll
          </Header>

          <Segment attached stacked padded>
            <Card centered fluid>
              <Image src={userInfo.avatarURL} style={{ width: '100%' }} />
              <Card.Content textAlign="center">
                <Card.Header>{userInfo.name} Asks:</Card.Header>
              </Card.Content>

              <Card.Content extra>
                <Form onSubmit={this.onSubmitHandler} loading={isSubmitting}>
                  <Form.Field>Would You Rather...</Form.Field>
                  <Form.Field>
                    <Radio
                      label={question.optionOne.text}
                      name="radioGroup"
                      value={question.optionOne.text}
                      checked={value === question.optionOne.text}
                      onChange={this.handleChange}
                      toggle
                    />
                  </Form.Field>

                  <Form.Field>
                    <Radio
                      label={question.optionTwo.text}
                      name="radioGroup"
                      value={question.optionTwo.text}
                      checked={value === question.optionTwo.text}
                      onChange={this.handleChange}
                      toggle
                    />
                  </Form.Field>

                  <Button type="submit" fluid color="teal" disabled={!value}>
                    Submit
                  </Button>
                </Form>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ questions, users }, { match }) => ({
  question: getQuestionById(questions.questions, match.params.question_id),
  userInfo: getUserInfo(
    questions.questions,
    users.users,
    match.params.question_id,
  ),
  loggedInUser: users.loggedInUser,
  isSubmitting: questions.isSubmitting,
  hasNewQuestionBeenSubmitted: questions.hasNewQuestionBeenSubmitted,
});

export default connect(
  mapStateToProps,
  { saveQuestionAnswerRequest, setQuestionsToDefaultStateRequest },
)(PollPage);
