import React from "react";

export default function Language(props) {
  return (
    <span
      className={props.className}
      key={props.id}
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      {props.name}
    </span>
  );
}
