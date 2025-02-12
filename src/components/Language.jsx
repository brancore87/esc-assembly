import React from "react";

export default function Language(props) {
  return (
    <button
      className="rounded font-black p-1 gap-1 shadow-[1px_1px_3px]    shadow-black"
      key={props.id}
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      {props.name}
    </button>
  );
}
