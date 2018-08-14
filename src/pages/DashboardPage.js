import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import QuestionsList from '../components/Questions/QuestionsList';
import { fetchQuestionsRequest } from '../actions/questionsActions';
import {
  getAnsweredQuestions,
  getUnansweredQuestions,
} from '../selectors/questionsSelectors';

class DashboardPage extends Component {
  static propTypes = {
    fetchQuestionsRequest: PropTypes.func.isRequired,
    answeredQuestions: PropTypes.arrayOf(PropTypes.object).isRequired,
    unAnsweredQuestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentDidMount() {
    const { fetchQuestionsRequest } = this.props;
    fetchQuestionsRequest();
  }

  render() {
    const { answeredQuestions, unAnsweredQuestions } = this.props;

    if (!answeredQuestions.length) {
      return (
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <Grid>
        <Grid.Row style={{ paddingTop: '40px' }}>
          <QuestionsList
            type="Answered Questions"
            questions={answeredQuestions}
          />

          <QuestionsList
            type="Unanswered Questions"
            questions={unAnsweredQuestions}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = ({ questions }) => ({
  answeredQuestions: getAnsweredQuestions(questions),
  unAnsweredQuestions: getUnansweredQuestions(questions),
});

export default connect(
  mapStateToProps,
  { fetchQuestionsRequest },
)(DashboardPage);
