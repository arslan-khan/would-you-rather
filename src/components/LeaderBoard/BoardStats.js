import React from 'react';
import { Grid, Header, Segment, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const BoardStats = ({ header, color, displayValue }) => (
  <Grid.Column>
    <Header as="h5" attached="top" inverted color={color}>
      {header}
    </Header>
    <Segment attached raised>
      <Label circular color={color} size="large" pointing>
        {displayValue}
      </Label>
    </Segment>
  </Grid.Column>
);

BoardStats.propTypes = {
  header: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  displayValue: PropTypes.number.isRequired,
};

export default BoardStats;
