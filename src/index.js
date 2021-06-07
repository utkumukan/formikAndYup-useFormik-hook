import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, MenuItem, Grid } from "@material-ui/core";
import FormTextInput from "./FormTextInput";
import FormCheckbox from "./FormCheckbox";
import FormSelectInput from "./FormSelectInput";
import FormSwitch from "./FormSwitch";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  acceptedTerms: yup
    .boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
  select: yup.string().oneOf(["GVY", "GLC"]).required("required"),
  switch: yup
    .boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions.")
});

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      acceptedTerms: false,
      select: "",
      switch: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  /*formik.handleChange = (e) => {
    formik.setValues({ ...formik.values, [e.target.name]: e.target.value });
    console.log(formik.values);
  };
*/
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormTextInput
          name="email"
          label="Email"
          onChange={formik.handleChange}
          field={formik.getFieldProps("email")}
          meta={formik.getFieldMeta("email")}
        />
        <Grid container>
          <Grid item>
            <FormCheckbox
              name="acceptedTerms"
              label="I accept the terms and conditions"
              onChange={formik.handleChange}
              field={formik.getFieldProps("acceptedTerms")}
              meta={formik.getFieldMeta("acceptedTerms")}
            />
          </Grid>
          <Grid item>
            <FormSwitch
              name="switch"
              label="I accept the terms and conditions"
              onChange={formik.handleChange}
              field={formik.getFieldProps("switch")}
              meta={formik.getFieldMeta("switch")}
            />
          </Grid>
        </Grid>

        <FormSelectInput
          name="select"
          label="Select"
          onChange={formik.handleChange}
          field={formik.getFieldProps("select")}
          meta={formik.getFieldMeta("select")}
        >
          <MenuItem value="GVY">GVY</MenuItem>
          <MenuItem value="GLC">GLC</MenuItem>
        </FormSelectInput>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

ReactDOM.render(<WithMaterialUI />, document.getElementById("root"));
