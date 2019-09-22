import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signIn-component.scss";
import CustomeButton from "../custome-button/custome-Button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(5, "Password mustbe 5 character long")
    .required("Required")
});

const LoginForm = () => {
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>sign in with yout email and password</span>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            // setErrors({ email: "duplicate email" });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="group">
              <Field className="form-input" type="text" name="email" />
              <span className="" style={{ color: "red" }}>
                <ErrorMessage name="email" component="div" />
              </span>
              <label
                className={`${
                  values.email.length ? "shrink" : ""
                } form-input-label`}
                htmlFor="email"
              >
                email
              </label>
            </div>
            <div className="group">
              <Field className="form-input" type="password" name="password" />

              <span style={{ color: "red" }}>
                <ErrorMessage name="password" component="div" />
              </span>
              <label
                className={`${
                  values.password ? "shrink" : ""
                } form-input-label`}
                htmlFor="password"
              >
                password
              </label>
            </div>
            <CustomeButton type="submit">Sign In</CustomeButton>

            <CustomeButton onClick={signInWithGoogle}>
              Sign In with Google
            </CustomeButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
