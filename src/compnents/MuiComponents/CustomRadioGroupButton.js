import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function CustomRadioGroupButton({
  name,
  label,
  formProps,
  options,
  optionValue,
  optionName,
  flexType,
  value,
  ...props
}) {
  // const [value, setValue] = React.useState("");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  // formProps.values[name] = value;
  return (
    <FormControl
      className={`flex flex-${flexType} justify-content-between align-items-center m-2`}
    >
      <FormLabel id="demo-controlled-radio-buttons-group" className="m-4">
        {label}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        className={`flex flex-${flexType} justify-content-between align-items-center`}
        name={name ?? ""}
        value={value ?? formProps.values[name] ?? ""}
        onChange={formProps.handleChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option[optionValue || "value"]}
            value={option[optionValue || "value"]}
            control={<Radio />}
            label={option[optionName || "name"]}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadioGroupButton;
