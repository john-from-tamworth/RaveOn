import React from 'react';
import EventListItem from './EventListItem';

function EventList({ events, selectEvent }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} selectEvent={selectEvent} />
      ))}
    </>
  );
}

export default EventList;
