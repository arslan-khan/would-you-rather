import React from 'react';
import {
  Grid,
  Header,
  Segment,
  Form,
  Input,
  Button,
  Icon,
  Divider,
} from 'semantic-ui-react';

const NewQuestionPage = () => (
  <Grid columns={2} centered style={{ paddingTop: '40px' }}>
    <Grid.Column>
      <Header as="h3" attached="top" color="teal" textAlign="center" inverted>
        New Question
      </Header>
      <Segment attached stacked padded>
        <Form>
          <Form.Field
            id="name"
            name="name"
            control={Input}
            label="Would You Rather"
            placeholder="First option here..."
          />

          <Divider horizontal>Or</Divider>

          <Form.Field
            id="name"
            name="name"
            control={Input}
            placeholder="Second option here..."
          />

          <Button type="submit" color="teal" fluid animated="fade">
            <Button.Content visible>Submit</Button.Content>
            <Button.Content hidden>
              <Icon name="sign in" />
            </Button.Content>
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default NewQuestionPage;
