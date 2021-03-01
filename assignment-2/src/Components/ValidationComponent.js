import React from "react";

const validationComponent = (props) => {
  const output = props.para.length < 5 ? "text too short" : "text too long";
  return <p>{output}</p>;
};
export default validationComponent;
