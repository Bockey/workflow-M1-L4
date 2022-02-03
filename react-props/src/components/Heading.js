import React from "react";

const Heading = (props) => {
  const headingStyle = {
    color: props.colour,
    fontSize: props.fontSize,
  };
  return <h2 style={headingStyle}>{props.content}</h2>;
};

export default Heading;
