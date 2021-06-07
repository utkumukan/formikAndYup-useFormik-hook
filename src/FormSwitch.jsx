import { Switch, Typography, FormControlLabel } from "@material-ui/core";
import React from "react";

const FormSwitch = ({ label, field, meta, onChange, ...remainedProps }) => {
  field.onChange = (e) => {
    onChange(e);
  };

  return (
    <>
      <FormControlLabel
        control={<Switch {...field} {...remainedProps} />}
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

export default FormSwitch;
