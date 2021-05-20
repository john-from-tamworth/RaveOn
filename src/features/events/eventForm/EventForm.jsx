/* global google */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Header, Segment, Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { listenToEvents } from '../eventActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormTextInput from '../../../app/common/form/FormTextInput';
import FormTextArea from '../../../app/common/form/FormTextArea';
import FormSelectInput from '../../../app/common/form/FormSelectInput';
import { categoryData } from '../../../app/api/categoryChoices';
import DateInput from '../../../app/common/form/DateInput';
import MyPlaceInput from '../../../app/common/form/MyPlaceInput';
import {
  addEventToFirestore,
  listenToEventFromFirestore,
  updateEventInFirestore,
  cancelEventToggle,
} from '../../../app/firestore/firestoreService';
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc';
import LoadingIndicator from '../../../app/layout/LoadingIndicator';
import { toast } from 'react-toastify';

function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const { loading, error } = useSelector((state) => state.async);

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: {
      address: '',
      latLng: null,
    },
    venue: {
      address: '',
      latLng: null,
    },
    date: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Your Event Needs A Title!!'),
    category: Yup.string().required('Your Event Needs A Category!!'),
    description: Yup.string().required(
      'You Need To Tell People Some Details!!'
    ),
    city: Yup.object().shape({
      address: Yup.string().required('City is required'),
    }),
    venue: Yup.object().shape({
      address: Yup.string().required('A Venue is required'),
    }),
    date: Yup.string().required(),
  });

  useFirestoreDoc({
    shouldExecute: !!match.params.id,
    query: () => listenToEventFromFirestore(match.params.id),
    data: (event) => dispatch(listenToEvents([event])),
    deps: [match.params.id, dispatch],
  });

  if (loading) return <LoadingIndicator content='Now Loading...' />;

  if (error) return <Redirect to='/error' />;

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            selectedEvent
              ? await updateEventInFirestore(values)
              : await addEventToFirestore(values);
            setSubmitting(false);
            history.push('/events');
          } catch (error) {
            toast.error(error.message);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, dirty, isValid, values }) => (
          <Form className='ui form'>
            <Header sub color='pink' content='Event Details' />
            <FormTextInput name='title' placeholder='Event Title' />
            <FormSelectInput
              name='category'
              placeholder='Category'
              options={categoryData}
            />
            <FormTextArea
              name='description'
              placeholder='Description'
              rows={4}
            />
            <Header sub color='pink' content='Location' />
            <MyPlaceInput name='city' placeholder='City' />
            <MyPlaceInput
              name='venue'
              disabled={!values.city.latLng}
              placeholder='Venue'
              options={{
                location: new google.maps.LatLng(values.city.latLng),
                radius: 1000,
                types: ['establishment'],
              }}
            />
            <DateInput
              name='date'
              placeholderText='date'
              timeFormat='HH:mm'
              showTimeSelect
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm a'
            />
            {selectedEvent && (
              <Button
                color={selectedEvent.isCancelled ? 'green' : 'red'}
                type='button'
                floated='left'
                content={
                  selectedEvent.isCancelled ? 'Re-Open Event' : 'Cancel Event'
                }
                onClick={() => cancelEventToggle(selectedEvent)}
              />
            )}

            <Button
              animated
              color='pink'
              className='pinkButton'
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              floated='right'
              //content='Submit'
            >
              <Button.Content visible>Submit</Button.Content>
              <Button.Content hidden>
                <Icon name='thumbs up' />
              </Button.Content>
            </Button>
            <Button
              disable={isSubmitting}
              as={Link}
              to='/events'
              type='submit'
              floated='right'
              content='Cancel'
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}

export default EventForm;
