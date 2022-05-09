/* eslint-disable eqeqeq */
import React from "react";
import { Form, Formik } from "formik";

import { Button } from "reactstrap";
import * as Yup from "yup";
import RecursiveContainer from "./RecursiveContainer";

const SignupForm = ({ jsonData }) => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
      }}
      //  dynamic schema

      validationSchema={Yup.object().shape(
        jsonData.length > 0 &&
          jsonData
            .filter((j) => j.isMandatory)
            .reduce((acc, curr) => {
              if (curr.type == "array") {
                acc[curr.type] = Yup.array().of(
                  Yup.object().shape(
                    curr
                      .childrenfilter((j) => j.isMandatory)
                      .reduce((acc, curr) => {
                        acc[curr.name] = Yup.string().required();
                        return acc;
                      }, {})
                  )
                );
              } else {
                acc[curr.name] = Yup.string().required();
              }

              // acc[curr.name] = Yup.string().required();
              return acc;
            }, {})
      )}
    >
      {(formProps) => {
        return (
          <Form>
            {console.log("formProps.values", formProps.values)}
            <>
              {jsonData?.length > 0 ? (
                <>
                  Errors: {formProps.errors && JSON.stringify(formProps.errors)}
                  <RecursiveContainer config={jsonData} formik={formProps} />
                  <Button type="submit" disabled={!formProps.isValid}>
                    Submit
                  </Button>{" "}
                </>
              ) : (
                "Please type json data"
              )}
            </>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
