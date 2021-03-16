import React, { useState } from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import { format } from 'date-fns';
import EventDetailedMap from './EventDetailedMap';

function EventDetailedInfo({ event }) {
  const [mapOpen, setMapOpenToggle] = useState(false);

  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' color='pink' name='info' />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='calendar alternate outline' size='large' color='pink' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{format(event.date, 'MMMM d, yyyy h:mm a ')}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='map outline' size='large' color='pink' />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue.address}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              onClick={() => setMapOpenToggle(!mapOpen)}
              className='pinkButton'
              color='pink'
              size='tiny'
              content={mapOpen ? 'Hide Map' : 'Show Map'}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {mapOpen && <EventDetailedMap latLng={event.venue.latLng} />}
    </Segment.Group>
  );
}

export default EventDetailedInfo;
