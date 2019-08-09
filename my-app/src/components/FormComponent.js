import React from "react";
import { useEffect, useState } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const FormComponent = ({ values, errors, touched, handleSubmit, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if(status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div>
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
      <div>
        {user.map(user => (
          <p key={user.id}>{user.username}</p>
        ))}
      </div>
    </div>
  );
};

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

  handleSubmit(values, { setStatus }) {
    console.log('form submit', values);
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => {
        console.log('form received', res.data);
      })
      .catch(err => console.log(err.response));

    axios
    .get("http://localhost:5000/api/restricted/users", values)
      .then(res => {
        console.log('test', res.data);
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(FormComponent);

export default FormikFormComponent;
