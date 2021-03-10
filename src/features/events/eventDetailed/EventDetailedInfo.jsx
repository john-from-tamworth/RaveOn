import React from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";

function EventDetailedInfo({ event }) {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="pink" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar alternate outline" size="large" color="pink" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{event.date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="map outline" size="large" color="pink" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              className="pinkButton"
              color="pink"
              size="tiny"
              content="Show Map"
            />
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
}

export default EventDetailedInfo;