/* eslint-disable import/no-anonymous-default-export */
// export default [
//   {
//     type: "text",
//     field: "name",
//     label: "User's name",
//     style: {
//       color: "green",
//       margin: "10px",
//     },
//     validationType: "string",
//     validations: [
//       {
//         type: "required",
//         params: ["Name is required"],
//       },
//     ],
//   },
//   {
//     type: "number",
//     field: "age",
//     label: "User's age",
//     style: {
//       color: "green",
//       margin: "10px",
//     },
//     validationType: "number",
//     validations: [
//       {
//         type: "min",
//         params: [18, "Min age is 18"],
//       },
//       {
//         type: "max",
//         params: [60, "Max age is 50"],
//       },
//     ],
//   },
//   {
//     type: "text",
//     field: "email",
//     label: "User's Email",
//     style: {
//       color: "green",
//       margin: "10px",
//     },
//     validationType: "string",
//     validations: [
//       {
//         type: "email",
//         params: ["A valid email is required"],
//       },
//     ],
//   },
//   {
//     type: "array",
//     field: "user",
//     children: [
//       {
//         type: "text",
//         field: "user.hobbies",
//         label: "User's hobbies",
//         style: {
//           color: "green",
//           margin: "10px",
//         },
//       },
//       {
//         type: "text",
//         field: "user.os",
//         label: "User's operating system",
//         style: {
//           color: "green",
//           margin: "10px",
//         },
//       },
//     ],
//   },
// ];

import React from "react";

function Apiresponse() {
  return (
    <div>
      {/* <div>
              <label htmlFor={individualConfig.field}>
                {individualConfig.label}
              </label>
              <input
                type="text"
                name={individualConfig.field}
                onChange={formik.handleChange}
                style={{ ...individualConfig.style }}
              />
            </div> */}
      {/* 
      {
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
}

      
      */}
    </div>
  );
}

export default Apiresponse;
