import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  ModalBody,
  ModalHeader,
  Row,
  Button,
  Modal,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextareaAutosize, TextField } from "@mui/material";
import SignupForm from "../compnents/Form/Container";
import Swal from "sweetalert2";

function JSONForm() {
  const [jsonData, setJsonData] = useState({});

  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);

    const result = JSON.parse(values.name);
    console.log("result.field", result.fields);
    setJsonData(result?.fields);
    // Swal for Success response
    Swal.fire({
      title: "Success",
      text: "Your form has been submitted successfully",
      icon: "success",
      confirmButtonText: "OK",
    });

    return;
  };

  // valid json schema

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .test("is-json", "Invalid JSON", (value) => isJsonString(value)),
  });

  console.log("jsonData", jsonData);

  return (
    <Card className="p-3 w-100">
      <CardHeader className="bg-warning p-2 text-white">
        <div className="d-flex align-items-center justify-content-between">
          <strong className="pl-2">JSON To Form</strong>
        </div>
      </CardHeader>
      <CardBody
        style={{
          width: "100%",
          backgroundColor: "#f0f0f0",
          borderRadius: "0 0 5px 5px",
          padding: "50px",
        }}
      >
        <Row className="form-group">
          <Col md={6}>
            <Formik
              initialValues={{
                name: ` {
                  "name": "Sample 1",
                  "fields": [
                    {
                      "type": "text",
                      "isMandatory": true,
                      "max":10,
                      "name": "name",
                            "label": "User's name"
                    },
                    {
                      "type": "email",
                      "isMandatory": true,
                      "name": "email",
                            "label": "User's Email"
                    },
                    {
                      "type": "password",
                      "isMandatory": true,
                      "name": "password",
                            "label": "Enter Password"
                    },
                    {
                      "type": "date",
                      "isMandatory": true,
                      "name": "date",
                            "label": "Date of Birth"
                    },
                    {
                      "type": "radio",
                      "isMandatory": true,
                      "name": "gender",
                      "label": "Gender",
                      "flex_type":"row",
                      "options": [{"name":"Male", "value": "male"},{"name":"Female", "value":"female"}, {"name":"Other", "value":"other"}]
                    },
                    
                    {
                      "type": "dropdown",
                      "isMandatory": false,
                      "name": "food",
                      "label":"Favourite Food",
                      "options": [{"name":"Select Food", "value": ""},{"name":"Pizza", "value": "pizza"}, {"name":"Burger", "value": "burger"}, {"name":"Khichadi", "value": "khichadi"}]
                    },
                    {
                    "type": "array",
                    "fields": "user",
                    "children": [
                      {
                        "type": "text",
                        "name": "user.hobbies",
                        "label": "User's hobbies",
                    "isMandatory": true
                      },
                      {
                        "type": "text",
                        "name": "user.os",
                        "label": "User's operating system",
                        "isMandatory": true
                      }
                    ]
                   }
                ]
                }`,
              }}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              {(formProps) => {
                // console.log("formProps.errors", formProps.errors);
                return (
                  <Form>
                    <Row className="form-group">
                      <Col md={12}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          size="small"
                          multiline
                          InputProps={{
                            inputComponent: TextareaAutosize,
                            inputProps: {
                              style: {
                                resize: "auto",
                              },
                              minRows: 15,
                            },
                          }}
                          id="name"
                          label="JSON Data"
                          name="name"
                          value={formProps.values.name}
                          onChange={formProps.handleChange}
                          error={
                            formProps.touched.name &&
                            Boolean(formProps.errors.name)
                          }
                          helperText={
                            formProps.touched.name && formProps.errors.name
                          }
                        />
                      </Col>
                    </Row>

                    <Row
                      style={{ justifyContent: "center", marginTop: "50px" }}
                    >
                      <Col md={4}>
                        <Button type="reset" color="danger" block>
                          <b>Reset</b>
                        </Button>
                      </Col>
                      <Col md={4}>
                        <Button
                          type="submit"
                          disabled={formProps.isSubmitting}
                          color="primary"
                          block
                        >
                          Form
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          </Col>
          <Col md={6}>
            <SignupForm jsonData={jsonData} />
          </Col>
        </Row>
        {/* formik dynamic inputs */}
        {/* <Formik
          initialValues={{}}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={signupSchema}
        >
          {(formProps) => {
            return (
              <Form>{console.log("formProps.values", formProps.values)}</Form>
            );
          }}
        </Formik> */}
      </CardBody>
    </Card>
  );
}

export default JSONForm;
