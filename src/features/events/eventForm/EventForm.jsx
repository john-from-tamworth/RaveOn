/* global google */
import cuid from 'cuid';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Segment, Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormTextInput from '../../../app/common/form/FormTextInput';
import FormTextArea from '../../../app/common/form/FormTextArea';
import FormSelectInput from '../../../app/common/form/FormSelectInput';
import { categoryData } from '../../../app/api/categoryChoices';
import DateInput from '../../../app/common/form/DateInput';
import MyPlaceInput from '../../../app/common/form/MyPlaceInput';

function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
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

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedby: 'Gianni',
                  attendees: [],
                  hostPhotoURL: '/assets/user.png',
                })
              );
          history.push('/events');
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
