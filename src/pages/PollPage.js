import React, { Component } from 'react';
import { Grid, Card, Image, Header, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AnswerQuestionForm from '../components/forms/AnswerQuestionForm';
import { getQuestionById } from '../selectors/questionsSelectors';
import { getUserInfo } from '../selectors/usersSelectors';
import { saveQuestionAnswerRequest } from '../actions/questionsActions';

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
  };

  state = {};

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
    const { question, userInfo } = this.props;

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
                <AnswerQuestionForm
                  value={value}
                  question={question}
                  handleChange={this.handleChange}
                  onSubmitHandler={this.onSubmitHandler}
                />
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
});

export default connect(
  mapStateToProps,
  { saveQuestionAnswerRequest },
)(PollPage);
