import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

function FormTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="pink">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}

export default FormTextInput;
