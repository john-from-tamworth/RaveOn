import cuid from "cuid";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormTextInput from "../../../app/common/form/FormTextInput";
import FormTextArea from "../../../app/common/form/FormTextArea";
import FormSelectInput from "../../../app/common/form/FormSelectInput";
import { categoryData } from "../../../app/api/categoryChoices";
import DateInput from "../../../app/common/form/DateInput";

function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Your Event Needs A Title!!"),
    category: Yup.string().required("Your Event Needs A Category!!"),
    description: Yup.string().required(
      "You Need To Tell People Some Details!!"
    ),
    city: Yup.string().required(),
    venue: Yup.string().required(),
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
                  hostedby: "Gianni",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <Header sub color="pink" content="Event Details" />
            <FormTextInput name="title" placeholder="Event Title" />
            <FormSelectInput
              name="category"
              placeholder="Category"
              options={categoryData}
            />
            <FormTextArea
              name="description"
              placeholder="Description"
              rows={4}
            />
            <Header sub color="pink" content="Location" />
            <FormTextInput name="city" placeholder="City" />
            <FormTextInput name="venue" placeholder="Venue" />
            <DateInput
              name="date"
              placeholderText="date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm a"
            />

            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              floated="right"
              content="Submit"
              className="pinkButton"
              color="pink"
            />
            <Button
              disable={isSubmitting}
              as={Link}
              to="/events"
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}

export default EventForm;
