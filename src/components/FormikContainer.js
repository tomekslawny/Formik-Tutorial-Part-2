import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function FormikContainer() {
  const initialValues = {};

  const validationSchema = Yup.object({});

  onSubmit = (values) => console.log("form data", values);

  return (
    <div>
      <Formik>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        {(formik) => (
          <Form>
            <submit type="submit">Submit</submit>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
