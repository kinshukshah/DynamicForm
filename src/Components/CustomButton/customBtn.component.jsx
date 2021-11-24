import React from "react";
import "./customBtn.style.css";
export const CustomBtn = ({ label, inverse, ...props }) => {
  return (
    <button className="custom-btn" {...props}>
      {label}
    </button>
  );
};
