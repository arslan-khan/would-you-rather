import React from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';

const PageNotFound = () => (
  <Container text textAlign="center">
    <Header
      as="h2"
      icon
      color="teal"
      style={{ paddingTop: '300px' }}
      size="huge"
    >
      <Icon name="compass" loading />
      404
      <Header.Subheader>Page not found!</Header.Subheader>
    </Header>
  </Container>
);

export default PageNotFound;
