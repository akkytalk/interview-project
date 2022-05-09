import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import Output from "../compnents/pattern/Output";
import CustomTextField from "./../compnents/MuiComponents/CustomTextField";

function JSONForm() {
  const [pattern, setPattern] = useState();

  function leftPascalNumber(n) {
    let number = "";
    let value = n * 2;
    let arr = [];
    for (let m = 1; m <= value; m++) {
      if (m % 2 !== 0) {
        arr.push(m);
      }
    }
    // console.log("arr", arr);

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < n - i; j++) {
        number += " ";
      }
      for (let k = 0; k < i; k++) {
        number += arr[k];
      }
      number += "\n";
    }

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        number += " ";
      }
      for (let k = 0; k < n - i; k++) {
        number += arr[k];
      }
      number += "\n";
    }
    console.log(number);
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    setPattern(values.nbr);
    leftPascalNumber(pattern);
    return;
  };

  return (
    <Card className="p-3 w-100">
      <CardHeader className="bg-success p-2 text-white">
        <div className="d-flex align-items-center justify-content-between">
          <strong className="pl-2">Pattern</strong>
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
                nbr: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={Yup.object().shape({
                nbr: Yup.number().required("Required").min(1, "Minimum 1"),
                // .max(5, "Maximum 5"),
              })}
            >
              {(formProps) => {
                return (
                  <Form>
                    <Row className="form-group">
                      <Col md={12}>
                        <CustomTextField
                          name="nbr"
                          label="Please enter your lucky number"
                          formProps={formProps}
                          type="number"
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
                          Pattern
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          </Col>
          <Col md={6}>
            <Output />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default JSONForm;
