import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'semantic-ui-react';
import FormTextInput from '../../../app/common/form/FormTextInput';
import FormTextArea from '../../../app/common/form/FormTextArea';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateUserProfile } from '../../../app/firestore/firestoreService';

function ProfileForm({ profile }) {
  return (
    <Formik
      initialValues={{
        displayName: profile.displayName,
        description: profile.description || '',
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await updateUserProfile(values);
        } catch (error) {
          toast.error(error.message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className='ui form'>
          <FormTextInput name='displayName' placeholder='Display Name' />
          <FormTextArea name='description' placeholder='Display Name' />
          <Button
            loading={isSubmitting}
            disabled={isSubmitting || !isValid || !dirty}
            color='pink'
            floated='right'
            type='submit'
            size='large'
            content='Update Profile'
          />
        </Form>
      )}
    </Formik>
  );
}

export default ProfileForm;
