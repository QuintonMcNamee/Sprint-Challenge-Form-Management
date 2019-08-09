import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function FormComponent({ values, errors, touched }) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="Username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button data-testid="submitId" type="submit">Submit!</button>
    </Form>
  );
}

const FormikFormComponent = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
      .min(8, "Password must be at least 8 characters long")
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(FormComponent);

export default FormikFormComponent;
