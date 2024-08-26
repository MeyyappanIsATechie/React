import React from "react";


const CommonInput = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "Please enter a value"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
