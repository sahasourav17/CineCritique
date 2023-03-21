import React from "react";

const Button = (props) => {
  return (
    <div className="justify-flex-end flex flex-col items-end">
      <button
        className=" rounded bg-green-500 px-2.5 py-2 text-sm text-white hover:bg-green-600"
        type="submit"
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
