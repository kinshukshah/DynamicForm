import React from "react";
import "./inputWithLabel.style.css";

export const InputWithLabel = ({ label, errorMsg, ...props }) => {
  return (
    <div className="form-component">
      <div className="input-label">
        <label className="form-label" htmlFor={label}>
          {label}
        </label>
        <input className="form-input" id={label} {...props}></input>
      </div>
      {errorMsg && <div className="form-field-error">{errorMsg}</div>}
    </div>
  );
};
