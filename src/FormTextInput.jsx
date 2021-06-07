import React from "react";
import { TextField } from "@material-ui/core";

const FormTextInput = ({ label, onChange, field, meta, ...props }) => {
  field.onChange = (e) => {
    onChange(e);
  };
  return (
    <>
      <TextField
        fullWidth
        id={`formTextField-${props.name}`}
        margin="normal"
        variant="outlined"
        label={label}
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </>
  );
};

export default FormTextInput;
