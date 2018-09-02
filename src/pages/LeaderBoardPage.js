import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Segment,
  Image,
  Card,
  Header,
  Label,
  Progress,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LeaderBoardPage = ({ users }) => (
  <Grid columns={2} centered style={{ paddingTop: '30px' }}>
    <Grid.Column>
      <Header as="h3" attached="top" color="teal" textAlign="center" inverted>
        Leader Board
      </Header>

      <Segment stacked padded attached>
        {users.map(user => (
          <Card key={user.id} fluid>
            <Card.Content>
              <Image
                floated="right"
                size="small"
                src={user.avatarURL}
                circular
              />

              <Card.Header>
                {user.name}
                's
              </Card.Header>
              <Card.Meta>Leader Board</Card.Meta>

              <div
                style={{
                  paddingTop: '25px',
                  width: '60%',
                }}
              >
                <Progress
                  color="blue"
                  size="medium"
                  active
                  value={user.questions.length}
                  total={
                    Object.values(user.answers).length + user.questions.length
                  }
                  progress="ratio"
                />
              </div>

              <div style={{ width: '60%' }}>
                <Progress
                  color="olive"
                  size="medium"
                  active
                  value={Object.values(user.answers).length}
                  total={
                    Object.values(user.answers).length + user.questions.length
                  }
                  progress="ratio"
                />
              </div>
            </Card.Content>

            <Card.Content extra>
              <Grid
                columns="equal"
                style={{ paddingTop: '15px', textAlign: 'center' }}
              >
                <Grid.Column>
                  <Header as="h5" attached="top" inverted color="blue">
                    Questions
                  </Header>
                  <Segment attached raised>
                    <Label circular color="blue">
                      {user.questions.length}
                    </Label>
                  </Segment>
                </Grid.Column>

                <Grid.Column>
                  <Header as="h5" attached="top" inverted color="olive">
                    Answers
                  </Header>
                  <Segment attached raised>
                    <Label circular color="olive">
                      {Object.values(user.answers).length}
                    </Label>
                  </Segment>
                </Grid.Column>

                <Grid.Column>
                  <Header as="h5" attached="top" inverted color="red">
                    Score
                  </Header>
                  <Segment attached raised>
                    <Label circular color="red">
                      {Object.values(user.answers).length +
                        user.questions.length}
                    </Label>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        ))}
      </Segment>
    </Grid.Column>
  </Grid>
);

LeaderBoardPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users.users).sort(
    user => (Object.values(user.answers).length + user.questions.length).length,
  ),
});

export default connect(mapStateToProps)(LeaderBoardPage);
