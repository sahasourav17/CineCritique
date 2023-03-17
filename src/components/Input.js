import React from "react";

const Input = (props) => {
  return (
    <>
      <label className="mb-1 block text-xs">{props.label}</label>
      <input
        className="mb-2 w-full rounded border p-1.5 text-xs outline-none"
        type={props.type}
        onChange={props.onChange}
        required
      />
    </>
  );
};

export default Input;