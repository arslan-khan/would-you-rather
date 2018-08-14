import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { fetchQuestionsRequest } from '../actions/questionsActions';

class DashboardPage extends Component {
  static propTypes = {
    fetchQuestionsRequest: PropTypes.func.isRequired,
    questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentDidMount() {
    const { fetchQuestionsRequest } = this.props;
    fetchQuestionsRequest();
  }

  render() {
    const { questions } = this.props;

    if (!questions.length) {
      return (
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      );
    }

    return <h1>Dashboard Page</h1>;
  }
}

const mapStateToProps = ({ questions }) => ({ questions });

export default connect(
  mapStateToProps,
  { fetchQuestionsRequest },
)(DashboardPage);
