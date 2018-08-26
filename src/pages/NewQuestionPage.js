import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import NewQuestionForm from '../components/forms/NewQuestionForm';
import {
  addNewQuestionRequest,
  setQuestionsToDefaultStateRequest,
} from '../actions/questionsActions';
import { QUESTIONS_PAGE_URL } from '../constants/pageUrls';

class NewQuestionPage extends Component {
  static propTypes = {
    addNewQuestionRequest: PropTypes.func.isRequired,
    setQuestionsToDefaultStateRequest: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    hasNewQuestionBeenSubmitted: PropTypes.bool.isRequired,
  };

  state = { optionOneText: '', optionTwoText: '', author: '' };

  componentWillUnmount() {
    const { setQuestionsToDefaultStateRequest } = this.props;
    setQuestionsToDefaultStateRequest();
  }

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = () => {
    const { addNewQuestionRequest } = this.props;
    addNewQuestionRequest(this.state);
  };

  static getDerivedStateFromProps(props) {
    return { author: props.author };
  }

  render() {
    const { optionOneText, optionTwoText } = this.state;
    const { isSubmitting, hasNewQuestionBeenSubmitted } = this.props;

    if (hasNewQuestionBeenSubmitted)
      return <Redirect to={QUESTIONS_PAGE_URL} />;

    return (
      <Grid columns={2} centered style={{ paddingTop: '30px' }}>
        <Grid.Column>
          <Header
            as="h3"
            attached="top"
            color="teal"
            textAlign="center"
            inverted
          >
            New Question
          </Header>

          <Segment attached stacked padded>
            <NewQuestionForm
              isSubmitting={isSubmitting}
              optionOneText={optionOneText}
              optionTwoText={optionTwoText}
              onChangeHandler={this.onChangeHandler}
              onSubmitHandler={this.onSubmitHandler}
            />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ users, questions }) => ({
  author: users.loggedInUser.id,
  isSubmitting: questions.isSubmitting,
  hasNewQuestionBeenSubmitted: questions.hasNewQuestionBeenSubmitted,
});

export default connect(
  mapStateToProps,
  { addNewQuestionRequest, setQuestionsToDefaultStateRequest },
)(NewQuestionPage);
