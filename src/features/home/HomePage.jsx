import React from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

function HomePage({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo3.png"
            style={{ marginBottom: 12 }}
          />
          RaveOn
        </Header>
        <Button
          onClick={() => history.push("/events")}
          size="huge"
          animated
          inverted
        >
          <Button.Content visible>Lets Go!</Button.Content>
          <Button.Content hidden>
            <Icon name="forward" />
          </Button.Content>
        </Button>
      </Container>
    </Segment>
  );
}

export default HomePage;
