import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'semantic-ui-react';
import FormTextInput from '../../../app/common/form/FormTextInput';
import FormTextArea from '../../../app/common/form/FormTextArea';
import * as Yup from 'yup';

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
      onSubmit={(values) => console.log(values)}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className='ui form'>
          <FormTextInput className='displayName' placeholder='Display Name' />
          <FormTextArea className='description' placeholder='Display Name' />
          <Button
            loading={isSubmitting}
            disabled={isSubmitting || !isValid || !dirty}
            floated='right'
            type='submit'
            size='large'
            positive
            content='Update Profile'
          />
        </Form>
      )}
    </Formik>
  );
}

export default ProfileForm;
