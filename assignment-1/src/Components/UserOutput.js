import React from "react";

const userOutput = (props) => {
  const style = {
    backgroundColor: "grey",
    padding: "10px",
    color: "white",
    margin: "10px auto",
    width: "60%",
    height: "50px",
  };

  return (
    <p style={style}>
      I am {props.name} and i'm {props.status}.
    </p>
  );
};

export default userOutput;
