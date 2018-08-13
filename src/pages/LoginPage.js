import React, { Component, Fragment } from 'react';
import {
  Grid,
  Header,
  Segment,
  Form,
  Input,
  Button,
  Icon,
  Message,
  Divider,
  Popup,
  Image,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { authLoginRequest } from '../actions/sessionActions';
import { fetchUsersRequest } from '../actions/usersActions';
import { stripWhiteSpaces } from '../utils/formUtils';

class LoginPage extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchUsersRequest: PropTypes.func.isRequired,
    authLoginRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    isWrongName: false,
  };

  componentDidMount = () => {
    const { fetchUsersRequest } = this.props;
    fetchUsersRequest();
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = () => {
    const { name } = this.state;
    const { users } = this.props;

    const user = users.find(user => user.id === stripWhiteSpaces(name));
    if (user) {
      return this.logUserIn(user);
    }

    return this.setState({
      name: '',
      isWrongName: true,
    });
  };

  logUserIn = user => {
    const { authLoginRequest } = this.props;
    authLoginRequest(user);
  };

  render() {
    const { name, isWrongName } = this.state;
    const { users } = this.props;

    return (
      <Grid columns={2} centered style={{ paddingTop: '100px' }}>
        <Grid.Column>
          <Header as="h1" textAlign="center" icon>
            <Icon name="balance scale" circular color="teal" inverted />
            <Header.Content>Would You Rather</Header.Content>
          </Header>

          <Segment stacked padded="very" style={{ marginTop: '40px' }}>
            {isWrongName && (
              <Fragment>
                <Message
                  warning
                  size="tiny"
                  color="teal"
                  header="Can't Login?"
                  content="Please hover over an image below to get the user's info!"
                />

                {users.map(user => (
                  <Popup
                    inverted
                    size="tiny"
                    key={user.id}
                    trigger={
                      <Image
                        src={user.avatarURL}
                        avatar
                        size="tiny"
                        onClick={() => this.logUserIn(user)}
                      />
                    }
                    header="JUST CLICK ME IF YOU ARE LAZY!"
                    content={`User Name: ${user.name}`}
                  />
                ))}
                <Divider />
              </Fragment>
            )}

            <Form onSubmit={this.onSubmitHandler} loading={!users.length}>
              <Form.Field
                id="name"
                name="name"
                control={Input}
                label="Name"
                placeholder="Please type your name here..."
                value={name}
                onChange={this.onChangeHandler}
              />

              <Button type="submit" color="teal" fluid animated="fade">
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden>
                  <Icon name="sign in" />
                </Button.Content>
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users: users.users });

export default connect(
  mapStateToProps,
  { authLoginRequest, fetchUsersRequest },
)(LoginPage);