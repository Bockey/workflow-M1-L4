import React from "react";

const Paragraph = (props) => {
  if (props.children) {
    return <p>{props.children}</p>;
  } else return <p>{props.stuff}</p>;
};

export default Paragraph;
