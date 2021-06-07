import { Checkbox, Typography, FormControlLabel } from "@material-ui/core";
import React from "react";

const FormCheckbox = ({ label, field, meta, onChange, ...remainedProps }) => {
  field.onChange = (e) => {
    onChange(e);
  };

  return (
    <>
      <FormControlLabel
        control={<Checkbox {...field} {...remainedProps} />}
        label={label}
      />

      {meta.touched && Boolean(meta.error) ? (
        <Typography style={{ fontSize: "0.75rem", color: "red" }}>
          {meta.error}
        </Typography>
      ) : null}
    </>
  );
};

export default FormCheckbox;
