import React from "react";

const Inputs = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
      />
      {error && touched && <p className="form-error">{error}</p>}
    </div>
  );
};

export default Inputs;
