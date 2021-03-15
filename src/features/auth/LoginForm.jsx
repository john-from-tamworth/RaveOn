import { Form, Formik } from "formik";
import React from "react";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import MyTextInput from "../../app/common/form/FormTextInput";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { signInUser } from "./authActions";
import { closeModal } from "../../app/common/modals/modalReducer";

function LoginForm() {
  const dispatch = useDispatch();
  return (
    <ModalWrapper size="mini" header="Sign In">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(signInUser(values));
          setSubmitting(false);
          dispatch(closeModal());
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <MyTextInput name="email" placeholder="Email Address" />
            <MyTextInput
              name="password"
              placeholder="Password"
              type="password"
            />
            <Button
              className="pinkButton"
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              fluid
              size="large"
              color="pink"
              content="Login"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}

export default LoginForm;
