import React from "react";
import "./input.scss";

const Input = ({ lable, ...rest }) => {
  return (
    <div className="input-wrapper">
      <p className="lable">{lable}</p>
      <input className="input" {...rest} />
    </div>
  );
};

export default Input;
