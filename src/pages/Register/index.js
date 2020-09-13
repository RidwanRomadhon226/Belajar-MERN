import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Registration</p>
        <Gap height={18} />
        <Input lable="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input lable="Email" placeholder="Email" />
        <Gap height={18} />
        <Input lable="Password" placeholder="Password" />
        <Gap height={18} />
        <Button title="Register" />
        <Gap height={60} />
        <Link title="Kembali Ke Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
