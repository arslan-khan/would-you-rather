import React, { Component } from 'react';
import { Grid, Header, Segment, Icon, Transition } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from '../components/forms/LoginForm';
import AutoLoginWidget from '../components/Login/AutoLoginWidget';
import { authLoginRequest } from '../actions/sessionActions';
import { fetchUsersRequest } from '../actions/usersActions';
import { stripWhiteSpaces } from '../utils/formUtils';

class LoginPage extends Component {
  static propTypes = {
    users: PropTypes.shape({}),
    fetchUsersRequest: PropTypes.func.isRequired,
    authLoginRequest: PropTypes.func.isRequired,
  };

  static defaultProps = { users: null };

  state = {
    name: '',
    isWrongName: false,
    visible: false,
  };

  componentDidMount = () => {
    const { fetchUsersRequest } = this.props;
    fetchUsersRequest();
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = () => {
    const { name } = this.state;
    const { users } = this.props;

    const user = users[stripWhiteSpaces(name)];
    if (user) {
      return this.logUserIn(user);
    }

    return this.setState({
      name: '',
      isWrongName: true,
    });
  };

  static getDerivedStateFromProps(props) {
    if (props.users) {
      return { visible: true };
    }
    return {};
  }

  logUserIn = user => {
    const { authLoginRequest } = this.props;
    authLoginRequest(user);
  };

  render() {
    const { name, isWrongName, visible } = this.state;
    const { users } = this.props;

    return (
      <Transition visible={visible} animation="fade up" duration={1500}>
        <Grid columns={3} centered style={{ paddingTop: '100px' }}>
          <Grid.Column>
            <Header as="h1" textAlign="center" icon>
              <Icon name="exchange" circular color="teal" inverted />
              <Header.Content>Would You Rather</Header.Content>
            </Header>

            <Segment stacked padded="very" style={{ marginTop: '40px' }}>
              {isWrongName && (
                <AutoLoginWidget users={users} logUserIn={this.logUserIn} />
              )}

              <LoginForm
                name={name}
                onChangeHandler={this.onChangeHandler}
                onSubmitHandler={this.onSubmitHandler}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </Transition>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users: users.users });

export default connect(
  mapStateToProps,
  { authLoginRequest, fetchUsersRequest },
)(LoginPage);
