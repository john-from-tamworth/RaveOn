import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPlaceholder from './LoadingPlaceholder';
import EventFilters from './EventFilters';
import { listenToEventsFromFirestore } from '../../../app/firestore/firestoreService';
import { listenToEvents } from '../eventActions';

import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';

const EventDashboard = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch],
  });

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <LoadingPlaceholder />
            <LoadingPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
