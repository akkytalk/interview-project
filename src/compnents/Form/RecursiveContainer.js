import React from "react";
import { Col, Label } from "reactstrap";
import CustomTextField from "../MuiComponents/CustomTextField";
import CustomSelectField from "../MuiComponents/CustomSelectField";
import CustomRadioGroupButton from "../MuiComponents/CustomRadioGroupButton";

const RecursiveContainer = ({ config = [], formik }) => {
  const builder = (individualConfig, i) => {
    switch (individualConfig.type) {
      case "text":
        return (
          <CustomTextField
            formProps={formik}
            label={individualConfig.label}
            name={individualConfig.name}
            maxLength={individualConfig.max}
            minLength={individualConfig.min}
          />
        );
      case "email":
        return (
          <CustomTextField
            formProps={formik}
            label={individualConfig.label}
            name={individualConfig.name}
            maxLength={individualConfig.max}
            minLength={individualConfig.min}
            type={individualConfig.type}
          />
        );
      case "password":
        return (
          <CustomTextField
            formProps={formik}
            label={individualConfig.label}
            name={individualConfig.name}
            maxLength={individualConfig.max}
            minLength={individualConfig.min}
            type={individualConfig.type}
          />
        );
      case "date":
        return (
          <>
            <Label>{individualConfig.label}</Label>
            <CustomTextField
              formProps={formik}
              name={individualConfig.name}
              maxLength={individualConfig.max}
              minLength={individualConfig.min}
              type={individualConfig.type}
            />
          </>
        );
      case "time":
        return (
          <>
            <Label>{individualConfig.label}</Label>
            <CustomTextField
              formProps={formik}
              name={individualConfig.name}
              maxLength={individualConfig.max}
              minLength={individualConfig.min}
              type={individualConfig.type}
            />
          </>
        );
      case "number":
        return (
          <CustomTextField
            formProps={formik}
            name={individualConfig.name}
            maxLength={individualConfig.max}
            minLength={individualConfig.min}
            type={individualConfig.type}
          />
        );
      case "dropdown":
        return (
          <CustomSelectField
            formProps={formik}
            name={individualConfig.name}
            options={individualConfig.options}
            label={individualConfig.label}
            defaultValue=""
          />
        );
      case "radio":
        return (
          <CustomRadioGroupButton
            formProps={formik}
            name={individualConfig.name}
            options={individualConfig.options}
            label={individualConfig.label}
            flexType={individualConfig.flex_type}
          />
        );
      case "array":
        return (
          <RecursiveContainer
            config={individualConfig.children || []}
            formik={formik}
          />
        );
      default:
        return <div>Unsupported field</div>;
    }
  };

  return (
    <>
      {config.length > 0
        ? config?.map((c, i) => {
            return (
              <Col md={12} className={c.type !== "array" ? "m-4" : ""} key={i}>
                {builder(c, i)}
              </Col>
            );
          })
        : "Please Write your field in Json Data"}
    </>
  );
};

export default RecursiveContainer;
