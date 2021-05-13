import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';

function ErrorComponent() {
  const { error } = useSelector((state) => state.async);

  return (
    <Segment placeholder>
      <Header
        textAlign='center'
        content={error?.message || 'Oh man, we have an error'}
      />
      <Button
        as={Link}
        to='/events'
        color='pink'
        style={{ marginTop: 15 }}
        content='Back to the events page'
      />
    </Segment>
  );
}

export default ErrorComponent;
