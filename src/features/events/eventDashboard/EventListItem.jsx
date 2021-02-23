import React from 'react';
import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  List,
  Segment,
} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

function EventListItem() {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png' />
            <Item.Content>
              <Item.Header content='Event Title' />
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> Date
          <Icon name='marker' />
          Venue
        </span>
      </Segment>
      <Segment>
        <List horizontal>
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
        </List>
      </Segment>
      <Segment clearing>
        <div>Event Description</div>
        <Button
          className='pinkButton'
          color='pink'
          floated='right'
          content='view'
        />
      </Segment>
    </Segment.Group>
  );
}

export default EventListItem;
