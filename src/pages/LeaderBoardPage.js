import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Image, Card, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import QuestionsProgress from '../components/LeaderBoard/QuestionsProgress';
import BoardStats from '../components/LeaderBoard/BoardStats';

const LeaderBoardPage = ({ users }) => (
  <Grid columns={2} centered style={{ paddingTop: '30px' }}>
    <Grid.Column>
      <Header as="h3" attached="top" color="teal" textAlign="center" inverted>
        Leader Board
      </Header>

      <Segment stacked padded attached>
        {users.map(({ id, avatarURL, name, questions, answers }) => {
          const createdQuestions = questions.length;
          const answeredQuestions = Object.values(answers).length;
          const totalQuestions = createdQuestions + answeredQuestions;

          return (
            <Card key={id} fluid>
              <Card.Content>
                <Image floated="right" size="small" src={avatarURL} circular />

                <Card.Header>
                  {name}
                  's
                </Card.Header>
                <Card.Meta>Leader Board</Card.Meta>

                <div
                  style={{
                    paddingTop: '25px',
                    width: '60%',
                  }}
                >
                  <QuestionsProgress
                    questions={createdQuestions}
                    totalQuestions={totalQuestions}
                    color="blue"
                  />
                  <QuestionsProgress
                    questions={answeredQuestions}
                    totalQuestions={totalQuestions}
                    color="olive"
                  />
                </div>
              </Card.Content>

              <Card.Content extra>
                <Grid
                  columns="equal"
                  style={{ paddingTop: '15px', textAlign: 'center' }}
                >
                  <BoardStats
                    header="Questions"
                    color="blue"
                    displayValue={createdQuestions}
                  />
                  <BoardStats
                    header="Answers"
                    color="olive"
                    displayValue={answeredQuestions}
                  />
                  <BoardStats
                    header="Score"
                    color="red"
                    displayValue={totalQuestions}
                  />
                </Grid>
              </Card.Content>
            </Card>
          );
        })}
      </Segment>
    </Grid.Column>
  </Grid>
);

LeaderBoardPage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      questions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      answers: PropTypes.shape({}).isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users.users).sort((a, b) => {
    const total = val =>
      Object.values(val.answers).length + val.questions.length;
    return total(b) > total(a);
  }),
});

export default connect(mapStateToProps)(LeaderBoardPage);
