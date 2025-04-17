import React from "react";

export const Input = ({ label, type, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};
