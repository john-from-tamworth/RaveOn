import React from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";

function EventDetailedInfo() {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="pink" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>Event Description</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="pink" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>Event Date</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="pink" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>Event Venue</span>
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
