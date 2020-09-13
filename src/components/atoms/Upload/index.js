import React from "react";
import "./upload.scss";
import { LoginBg } from "../../../assets";

const Upload = () => {
  return (
    <div className="upload">
      <img src={LoginBg} alt="prwvie" className="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
