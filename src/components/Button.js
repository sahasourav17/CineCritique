import React from "react";

const Button = (props) => {
  return (
    <div className="justify-flex-end flex flex-col ">
      <button
        className="hover:rainblue-100 mt-2 rounded bg-rainblue-100 px-2.5 py-2 text-sm text-white"
        type="submit"
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
