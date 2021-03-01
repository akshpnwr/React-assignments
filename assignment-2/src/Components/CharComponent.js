import React from 'react';

const charComponent = (props) => {
  return <p onClick={props.click}>{props.some}</p>;
};

export default charComponent;
