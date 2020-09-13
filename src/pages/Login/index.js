import React from "react";
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Gap height={18} />
        <Input lable="Email" placeholder="Email" />
        <Gap height={18} />
        <Input lable="Password" placeholder="Password" />
        <Gap height={18} />
        <Button title="Login" />
        <Gap height={60} />
        <Link
          title="Belum punya account silahkan daftar"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
