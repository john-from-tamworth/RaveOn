import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Icon, Item, Label, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { format } from 'date-fns';
import { deleteEventInFirestore } from '../../../app/firestore/firestoreService';

function EventListItem({ event }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              {event.isCancelled && (
                <Label
                  style={{ top: '-40px' }}
                  ribbon='right'
                  size='medium'
                  color='orange'
                  icon='thumbs down'
                  content='This event has been cancelled :('
                />
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock outline' />
          {format(event.date, 'MMMM d, yyyy h:mm a   ')}
          <Icon name='map outline' /> {event.venue.address}
        </span>
      </Segment>
      <Segment>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          as={Link}
          to={`/events/${event.id}`}
          className='pinkButton'
          color='pink'
          floated='right'
          content='View'
        />
        <Button
          onClick={() => deleteEventInFirestore(event.id)}
          color='red'
          floated='right'
          content='Delete'
        />
      </Segment>
    </Segment.Group>
  );
}

export default EventListItem;
