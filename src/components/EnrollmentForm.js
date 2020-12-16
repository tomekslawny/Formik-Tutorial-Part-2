import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function EnrollmentForm() {
  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascript", value: "javascript" },
  ];

  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    courses: "",
    skills: "",
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.string().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("From data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl control="textarea" label="Bio" name="bio" />
            <FormikControl
              control="select"
              options={dropdownOptions}
              label="Course"
              name="course"
            />
            <FormikControl
              control="checkbox"
              options={checkboxOptions}
              label="Your skillset"
              name="skills"
            />
            <FormikControl
              control="date"
              label="Couse date"
              name="courseDate"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrollmentForm;
