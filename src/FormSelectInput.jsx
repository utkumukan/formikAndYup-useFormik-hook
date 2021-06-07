import { TextField } from "@material-ui/core";
import React from "react";

const FormSelectInput = ({
  name,
  label,
  onChange,
  children,
  field,
  meta,
  ...remainedProps
}) => {
  field.onChange = (e) => {
    onChange(e);
  };

  return (
    <TextField
      select
      fullWidth
      id={`outlinedSelect-${name}`}
      label={label}
      name={name}
      margin="normal"
      variant="outlined"
      {...field}
      {...remainedProps}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    >
      {children}
    </TextField>
  );
};

export default FormSelectInput;
