import React from "react";
export const SimpleInput = ({ label, ...props }) => {
  return (
    <input
      className="form-input"
      placeholder={label}
      id={label}
      {...props}
    ></input>
  );
};
